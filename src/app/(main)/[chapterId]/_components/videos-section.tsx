'use client';

import { useState, useEffect } from 'react';
import type { Video } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, FileVideo, Clock, HardDrive, AlertCircle } from 'lucide-react';
import { progressTracker } from '@/lib/progress';
import EnhancedVideoPlayer from '@/components/enhanced-video-player';

interface VideosSectionProps {
  videos: Video[];
  chapterId: string;
}

interface VideosSectionProps {
  videos: Video[];
  chapterId: string;
}

export function VideosSection({ videos, chapterId }: VideosSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize progress tracking when component mounts
  useEffect(() => {
    if (videos.length > 0) {
      const currentProgress = progressTracker.getChapterProgress(chapterId);
      if (!currentProgress) {
        progressTracker.initializeChapterProgress(chapterId, {
          flashcards: 0, // Will be updated by flashcard components
          mcqs: 0,       // Will be updated by MCQ components  
          videos: videos.length,
          reels: 0       // Will be updated by reel components
        });
      }
    }
  }, [chapterId, videos.length]);

  if (videos.length === 0) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle>No Videos Available</CardTitle>
          <CardDescription>
            Videos for this chapter are not yet available.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const handlePlayVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const handleDownload = async (video: Video) => {
    try {
      // Create a link to download the video
      const link = document.createElement('a');
      link.href = video.downloadUrl || video.videoUrl;
      link.download = video.fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(video.videoUrl, '_blank');
    }
  };

  const handleVideoError = () => {
    console.error('Video loading error for:', selectedVideo?.fileName);
  };

  // Track video watch time
  const handleVideoTimeUpdate = (video: Video, currentTime: number) => {
    progressTracker.updateVideoWatchTime(chapterId, video.id, Math.floor(currentTime));
  };

  return (
    <div className="space-y-6">
      {/* Video Player Section */}
      {selectedVideo && isPlaying && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileVideo className="h-5 w-5" />
              {selectedVideo.title}
            </CardTitle>
            <CardDescription>{selectedVideo.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <EnhancedVideoPlayer
                src={selectedVideo.videoUrl}
                fileName={selectedVideo.fileName}
                className="w-full h-full"
                poster="/api/placeholder/800/450"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-between items-center">
              <div className="flex gap-2">
                <Badge variant="secondary">{selectedVideo.chapterPart}</Badge>
                {selectedVideo.duration && (
                  <Badge variant="outline">
                    <Clock className="h-3 w-3 mr-1" />
                    {selectedVideo.duration}
                  </Badge>
                )}
                {selectedVideo.fileSize && (
                  <Badge variant="outline">
                    <HardDrive className="h-3 w-3 mr-1" />
                    {selectedVideo.fileSize}
                  </Badge>
                )}
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleDownload(selectedVideo)}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Videos Grid */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card 
            key={video.id} 
            className={`transition-all duration-300 hover:shadow-lg ${
              selectedVideo?.id === video.id ? 'ring-2 ring-primary' : ''
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="font-headline text-lg leading-tight">
                  {video.title}
                </CardTitle>
                <Badge variant="secondary" className="shrink-0">
                  {video.chapterPart}
                </Badge>
              </div>
              <CardDescription className="text-sm line-clamp-2">
                {video.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {/* Video Thumbnail/Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileVideo className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Video Metadata */}
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {video.duration && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </span>
                  )}
                  {video.fileSize && (
                    <span className="flex items-center gap-1">
                      <HardDrive className="h-3 w-3" />
                      {video.fileSize}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-green-600">
                    <AlertCircle className="h-3 w-3" />
                    Google Drive
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handlePlayVideo(video)}
                    className="flex-1"
                    size="sm"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Play Video
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDownload(video)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Browser Compatibility Notice */}
      <Card className="bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Enhanced Video Streaming
              </h3>
              <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <p>• Videos now stream seamlessly from Google Drive with automatic format detection</p>
                <p>• MKV files are displayed using Google Drive's built-in player for better compatibility</p>
                <p>• Use the <strong>Download</strong> button if you prefer offline viewing</p>
                <p>• All videos are high quality with optimized streaming for fast loading</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Tips */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-2">Video Viewing Tips</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Videos are optimized for online streaming to save bandwidth</li>
            <li>• Use the download option to save videos for offline viewing</li>
            <li>• Videos are in HD quality with compressed file sizes</li>
            <li>• Each part builds upon the previous one - watch in sequence for best understanding</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}