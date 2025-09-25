// Video configuration utilities for 7K Political Science App
import { getGoogleDriveVideo, isGoogleDriveEnabled } from './google-drive-videos';

// Video configuration for the political science app
export const videoConfig = {
  // Base URL for video files
  baseUrl: '/api/video',
  
  // Supported video formats
  formats: ['mp4', 'mkv', 'webm'],
  
  // Video quality options
  qualities: {
    low: '480p',
    medium: '720p', 
    high: '1080p'
  },
  
  // Default settings for video player
  playerSettings: {
    controls: true,
    preload: 'metadata', // Load only metadata to save bandwidth
    autoplay: false,
    muted: false,
  },
  
  // Compression settings for streaming
  compression: {
    enabled: true,
    bitrate: '2M', // 2 Mbps for good quality with reasonable file size
    preset: 'fast',
  },
  
  // Caching settings
  cache: {
    enabled: true,
    maxAge: 86400, // 24 hours
  }
};

// Helper function to get video URL from filename
export function getVideoUrl(fileName: string): string {
  // Try Google Drive first if enabled
  if (isGoogleDriveEnabled()) {
    const googleDriveVideo = getGoogleDriveVideo(fileName);
    if (googleDriveVideo) {
      return googleDriveVideo.streamUrl;
    }
  }
  
  // Fallback to local videos
  const encodedFileName = encodeURIComponent(fileName);
  return `/videos/${encodedFileName}`;
}

// Helper function to get download URL
export function getDownloadUrl(fileName: string): string {
  // Try Google Drive first if enabled
  if (isGoogleDriveEnabled()) {
    const googleDriveVideo = getGoogleDriveVideo(fileName);
    if (googleDriveVideo) {
      return googleDriveVideo.downloadUrl;
    }
  }
  
  // Fallback to local videos
  return getVideoUrl(fileName);
}

// Helper function to get Google Drive preview URL (for iframe embedding)
export function getPreviewUrl(fileName: string): string {
  if (isGoogleDriveEnabled()) {
    const googleDriveVideo = getGoogleDriveVideo(fileName);
    if (googleDriveVideo) {
      return `https://drive.google.com/file/d/${googleDriveVideo.fileId}/preview`;
    }
  }
  
  // Fallback to regular video URL
  return getVideoUrl(fileName);
}

// Helper function to check if video is from Google Drive
export function isGoogleDriveVideo(fileName: string): boolean {
  if (!isGoogleDriveEnabled()) return false;
  const googleDriveVideo = getGoogleDriveVideo(fileName);
  return googleDriveVideo !== null;
}

// Helper function to estimate video file size (rough estimation)
export function estimateFileSize(fileName: string): string {
  // This is a rough estimation based on typical video lengths and quality
  // In production, you'd get actual file sizes from the filesystem
  
  if (fileName.includes('PART 01') || fileName.includes('PART 1')) return '~150MB';
  if (fileName.includes('PART 02') || fileName.includes('PART 2')) return '~180MB';
  if (fileName.includes('PART 03') || fileName.includes('PART 3')) return '~165MB';
  if (fileName.includes('PART 04') || fileName.includes('PART 4')) return '~170MB';
  if (fileName.includes('PART 05') || fileName.includes('PART 5')) return '~160MB';
  if (fileName.includes('PART 06') || fileName.includes('PART 6')) return '~200MB';
  if (fileName.includes('ONE SHOT')) return '~250MB';
  
  return '~175MB'; // Default estimation
}

// Helper function to estimate video duration
export function estimateDuration(fileName: string): string {
  // Rough estimation based on content type
  if (fileName.includes('ONE SHOT')) return '~45 min';
  if (fileName.includes('Exercise Solution')) return '~35 min';
  
  return '~25 min'; // Default for regular parts
}