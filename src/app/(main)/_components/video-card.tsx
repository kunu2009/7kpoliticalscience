'use client';

import { useState } from 'react';
import { Play, Download, FileVideo, Clock, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Video } from '@/lib/data';

interface VideoCardProps {
  video: Video;
  onPlay?: (video: Video) => void;
}

export function VideoCard({ video, onPlay }: VideoCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    onPlay?.(video);
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleDownload = () => {
    // For now, just open in new tab
    // In production, this would trigger actual download
    window.open(video.downloadUrl || video.videoUrl, '_blank');
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-headline text-lg leading-tight line-clamp-2">
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
      <CardContent className="space-y-4">
        {/* Video Thumbnail Placeholder */}
        <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <FileVideo className="h-12 w-12 text-primary/30" />
          </div>
          {!isLoading && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
            </div>
          )}
          {isLoading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          )}
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
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            onClick={handlePlay}
            disabled={isLoading}
            className="flex-1"
            size="sm"
          >
            <Play className="h-4 w-4 mr-2" />
            {isLoading ? 'Loading...' : 'Play'}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleDownload}
            disabled={isLoading}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}