'use client';

import { useState, useEffect } from 'react';
import type { Video } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, FileVideo, Clock, HardDrive, AlertCircle } from 'lucide-react';
import { progressTracker } from '@/lib/progress';

interface VideosSectionProps {
  videos: Video[];
  chapterId: string;
}

export function VideosSection({ videos, chapterId }: VideosSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState<boolean>(false);

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
    setVideoError(false);
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
    setVideoError(true);
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
            {!videoError ? (
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full"
                  src={selectedVideo.videoUrl}
                  poster="/api/placeholder/800/450"
                  onError={handleVideoError}
                  onTimeUpdate={(e) => {
                    const video = e.target as HTMLVideoElement;
                    handleVideoTimeUpdate(selectedVideo, video.currentTime);
                  }}
                  onLoadStart={() => console.log('Video loading started:', selectedVideo.fileName)}
                  onLoadedMetadata={() => console.log('Video metadata loaded:', selectedVideo.fileName)}
                >
                  <source src={selectedVideo.videoUrl} type="video/x-matroska" />
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support this video format.
                </video>
              </div>
            ) : (
              /* Error fallback */
              <div className="relative aspect-video bg-gray-800 rounded-lg flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="mb-4">
                  <AlertCircle className="w-16 h-16 mx-auto mb-2 text-yellow-400" />
                  <h3 className="text-lg font-semibold mb-2">Video Format Not Supported</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Your browser cannot play this MKV video format directly.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Button
                    onClick={() => handleDownload(selectedVideo)}
                    className="inline-flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Video
                  </Button>
                  
                  <p className="text-xs text-gray-400">
                    Download and play with VLC Media Player or similar
                  </p>
                </div>
              </div>
            )}
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
                  <span className="flex items-center gap-1 text-orange-600">
                    <AlertCircle className="h-3 w-3" />
                    MKV format
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
                    Try Play
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
      <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                Video Format Notice
              </h3>
              <div className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                <p>• These videos are in MKV format, which may not play directly in all web browsers</p>
                <p>• If a video doesn't play, use the <strong>Download</strong> button to save it locally</p>
                <p>• Recommended players: <strong>VLC Media Player</strong>, Windows Media Player, or similar</p>
                <p>• Videos are high quality with compressed file sizes for efficient learning</p>
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