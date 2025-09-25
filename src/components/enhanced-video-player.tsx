'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { getGoogleDriveVideo } from '@/lib/google-drive-videos';

interface EnhancedVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  fileName?: string; // Add fileName to check if it's a Google Drive video
}

export default function EnhancedVideoPlayer({ src, poster, className, fileName }: EnhancedVideoPlayerProps) {
  const [isGoogleDriveVideo, setIsGoogleDriveVideo] = useState(false);
  const [googleDriveData, setGoogleDriveData] = useState<any>(null);
  const [showFallback, setShowFallback] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Check if this is a Google Drive video (MKV format)
    if (fileName && fileName.endsWith('.mkv')) {
      const driveVideo = getGoogleDriveVideo(fileName);
      if (driveVideo) {
        setIsGoogleDriveVideo(true);
        setGoogleDriveData(driveVideo);
      }
    }
  }, [fileName]);

  // For Google Drive videos (MKV), use iframe embed
  if (isGoogleDriveVideo && googleDriveData) {
    return (
      <div className={`relative ${className}`}>
        {!showFallback ? (
          <>
            <iframe
              ref={iframeRef}
              src={googleDriveData.streamUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setShowFallback(true)}
              style={{ minHeight: '400px' }}
            />
            <div className="absolute bottom-2 right-2 flex gap-2">
              <a
                href={googleDriveData.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
                title="Download Video"
              >
                <Download size={16} />
              </a>
              <a
                href={`https://drive.google.com/file/d/${googleDriveData.fileId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-colors"
                title="Open in Google Drive"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg p-8 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Video Format Not Supported
              </h3>
              <p className="text-gray-600 mb-4">
                Your browser cannot play this MKV video format directly.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={googleDriveData.downloadUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download size={16} />
                Download Video
              </a>
              <a
                href={`https://drive.google.com/file/d/${googleDriveData.fileId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <ExternalLink size={16} />
                Open in Google Drive
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Download and play with VLC Media Player or similar
            </p>
          </div>
        )}
      </div>
    );
  }

  // For regular videos, use HTML5 video element
  return (
    <div className={`relative ${className}`}>
      <video
        controls
        preload="metadata"
        poster={poster}
        className="w-full h-full rounded-lg"
        onError={() => setShowFallback(true)}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
        <p>
          Your browser does not support the video tag.{' '}
          <a href={src} download className="text-blue-600 hover:underline">
            Download the video
          </a>{' '}
          instead.
        </p>
      </video>
    </div>
  );
}