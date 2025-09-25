// Video conversion utility using FFmpeg (server-side)
import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

export interface ConversionOptions {
  inputPath: string;
  outputPath: string;
  format: 'mp4' | 'webm' | 'ogg';
  quality: 'low' | 'medium' | 'high';
  maxWidth?: number;
  maxHeight?: number;
}

export interface ConversionProgress {
  percentage: number;
  stage: 'analyzing' | 'converting' | 'complete' | 'error';
  message: string;
}

class VideoConverter {
  private static instance: VideoConverter;
  private ffmpegPath: string;

  private constructor() {
    // In production, you might want to use a specific ffmpeg binary
    this.ffmpegPath = 'ffmpeg';
  }

  static getInstance(): VideoConverter {
    if (!VideoConverter.instance) {
      VideoConverter.instance = new VideoConverter();
    }
    return VideoConverter.instance;
  }

  // Check if FFmpeg is available
  async isAvailable(): Promise<boolean> {
    return new Promise((resolve) => {
      const process = spawn(this.ffmpegPath, ['-version']);
      process.on('error', () => resolve(false));
      process.on('exit', (code) => resolve(code === 0));
    });
  }

  // Get video information
  async getVideoInfo(inputPath: string): Promise<{
    duration: number;
    width: number;
    height: number;
    format: string;
    size: number;
  } | null> {
    return new Promise((resolve) => {
      const args = [
        '-i', inputPath,
        '-f', 'null', '-'
      ];

      const process = spawn(this.ffmpegPath, args, { stdio: ['pipe', 'pipe', 'pipe'] });
      let stderr = '';

      process.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      process.on('exit', async () => {
        try {
          // Parse duration
          const durationMatch = stderr.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
          const duration = durationMatch 
            ? parseInt(durationMatch[1]) * 3600 + parseInt(durationMatch[2]) * 60 + parseFloat(durationMatch[3])
            : 0;

          // Parse dimensions
          const dimensionMatch = stderr.match(/(\d+)x(\d+)/);
          const width = dimensionMatch ? parseInt(dimensionMatch[1]) : 0;
          const height = dimensionMatch ? parseInt(dimensionMatch[2]) : 0;

          // Get file size
          const stats = await fs.stat(inputPath);
          const size = stats.size;

          // Parse format
          const formatMatch = stderr.match(/Input #0, ([^,]+)/);
          const format = formatMatch ? formatMatch[1] : 'unknown';

          resolve({ duration, width, height, format, size });
        } catch (error) {
          resolve(null);
        }
      });
    });
  }

  // Convert video with progress callback
  async convertVideo(
    options: ConversionOptions,
    onProgress?: (progress: ConversionProgress) => void
  ): Promise<boolean> {
    const { inputPath, outputPath, format, quality, maxWidth = 1280, maxHeight = 720 } = options;

    // Ensure output directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Get video info first
    if (onProgress) {
      onProgress({ percentage: 0, stage: 'analyzing', message: 'Analyzing video...' });
    }

    const videoInfo = await this.getVideoInfo(inputPath);
    if (!videoInfo) {
      if (onProgress) {
        onProgress({ percentage: 0, stage: 'error', message: 'Failed to analyze video' });
      }
      return false;
    }

    // Build FFmpeg arguments
    const args = ['-i', inputPath];

    // Video codec and quality settings
    if (format === 'mp4') {
      args.push('-c:v', 'libx264');
      args.push('-preset', quality === 'high' ? 'slow' : quality === 'medium' ? 'medium' : 'fast');
      args.push('-crf', quality === 'high' ? '18' : quality === 'medium' ? '23' : '28');
    } else if (format === 'webm') {
      args.push('-c:v', 'libvp9');
      args.push('-b:v', quality === 'high' ? '2M' : quality === 'medium' ? '1M' : '500k');
    }

    // Audio codec
    args.push('-c:a', format === 'mp4' ? 'aac' : 'libvorbis');
    args.push('-b:a', '128k');

    // Resolution scaling
    if (videoInfo.width > maxWidth || videoInfo.height > maxHeight) {
      args.push('-vf', `scale='min(${maxWidth},iw)':'min(${maxHeight},ih)':force_original_aspect_ratio=decrease`);
    }

    // Output settings
    args.push('-movflags', '+faststart'); // For web streaming
    args.push('-y'); // Overwrite output file
    args.push(outputPath);

    return new Promise((resolve) => {
      if (onProgress) {
        onProgress({ percentage: 0, stage: 'converting', message: 'Starting conversion...' });
      }

      const process = spawn(this.ffmpegPath, args, { stdio: ['pipe', 'pipe', 'pipe'] });
      let stderr = '';

      process.stderr.on('data', (data) => {
        stderr += data.toString();
        
        // Parse progress
        if (onProgress && videoInfo.duration > 0) {
          const timeMatch = stderr.match(/time=(\d+):(\d+):(\d+\.\d+)/);
          if (timeMatch) {
            const currentTime = parseInt(timeMatch[1]) * 3600 + parseInt(timeMatch[2]) * 60 + parseFloat(timeMatch[3]);
            const percentage = Math.min(Math.round((currentTime / videoInfo.duration) * 100), 100);
            onProgress({ 
              percentage, 
              stage: 'converting', 
              message: `Converting... ${percentage}%` 
            });
          }
        }
      });

      process.on('exit', (code) => {
        if (code === 0) {
          if (onProgress) {
            onProgress({ percentage: 100, stage: 'complete', message: 'Conversion completed!' });
          }
          resolve(true);
        } else {
          if (onProgress) {
            onProgress({ percentage: 0, stage: 'error', message: 'Conversion failed' });
          }
          resolve(false);
        }
      });

      process.on('error', () => {
        if (onProgress) {
          onProgress({ percentage: 0, stage: 'error', message: 'FFmpeg process error' });
        }
        resolve(false);
      });
    });
  }

  // Batch convert multiple videos
  async batchConvert(
    conversions: ConversionOptions[],
    onProgress?: (overall: number, current: ConversionProgress, currentFile: string) => void
  ): Promise<{ success: number; failed: number }> {
    let success = 0;
    let failed = 0;

    for (let i = 0; i < conversions.length; i++) {
      const conversion = conversions[i];
      const filename = path.basename(conversion.inputPath);

      const result = await this.convertVideo(conversion, (progress) => {
        if (onProgress) {
          const overall = Math.round(((i + progress.percentage / 100) / conversions.length) * 100);
          onProgress(overall, progress, filename);
        }
      });

      if (result) {
        success++;
      } else {
        failed++;
      }
    }

    return { success, failed };
  }

  // Generate multiple quality versions
  async generateMultipleQualities(
    inputPath: string,
    outputDir: string,
    baseFilename: string
  ): Promise<{ [quality: string]: string }> {
    const results: { [quality: string]: string } = {};
    const qualities: Array<{ name: string; options: Partial<ConversionOptions> }> = [
      { 
        name: 'low', 
        options: { quality: 'low', maxWidth: 640, maxHeight: 360 } 
      },
      { 
        name: 'medium', 
        options: { quality: 'medium', maxWidth: 1280, maxHeight: 720 } 
      },
      { 
        name: 'high', 
        options: { quality: 'high', maxWidth: 1920, maxHeight: 1080 } 
      }
    ];

    for (const { name, options } of qualities) {
      const outputPath = path.join(outputDir, `${baseFilename}_${name}.mp4`);
      
      const conversionOptions: ConversionOptions = {
        inputPath,
        outputPath,
        format: 'mp4',
        quality: 'medium',
        ...options
      } as ConversionOptions;

      const success = await this.convertVideo(conversionOptions);
      
      if (success) {
        results[name] = outputPath;
      }
    }

    return results;
  }
}

export const videoConverter = VideoConverter.getInstance();

// Utility functions for the web app

// Check browser video format support
export function getBrowserVideoSupport(): {
  mp4: boolean;
  webm: boolean;
  ogg: boolean;
  mkv: boolean;
} {
  if (typeof window === 'undefined') {
    return { mp4: false, webm: false, ogg: false, mkv: false };
  }

  const video = document.createElement('video');
  return {
    mp4: !!video.canPlayType('video/mp4; codecs="avc1.42E01E"'),
    webm: !!video.canPlayType('video/webm; codecs="vp8, vorbis"'),
    ogg: !!video.canPlayType('video/ogg; codecs="theora"'),
    mkv: !!video.canPlayType('video/x-matroska')
  };
}

// Get optimal video format for current browser
export function getOptimalVideoFormat(): 'mp4' | 'webm' | 'ogg' {
  const support = getBrowserVideoSupport();
  
  if (support.mp4) return 'mp4';
  if (support.webm) return 'webm';
  if (support.ogg) return 'ogg';
  
  return 'mp4'; // fallback
}

// Format file size for display
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Format duration for display
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}