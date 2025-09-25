'use client';

import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface EnhancedVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function EnhancedVideoPlayer({ src, poster, className }: EnhancedVideoPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current && videoRef.current) {
      // Create video element
      const videoElement = document.createElement('video');
      videoElement.controls = true;
      videoElement.preload = 'metadata';
      videoElement.className = className || 'video-js vjs-default-skin w-full h-full';
      
      if (poster) {
        videoElement.poster = poster;
      }
      
      videoRef.current.appendChild(videoElement);

      // Initialize Video.js player
      const player = videojs(videoElement, {
        controls: true,
        responsive: true,
        fluid: true,
        preload: 'metadata',
        sources: [
          {
            src: src,
            type: 'video/x-matroska'
          },
          {
            src: src,
            type: 'video/mp4'
          }
        ],
        html5: {
          vhs: {
            overrideNative: true
          }
        }
      });

      playerRef.current = player;

      // Handle errors
      player.on('error', () => {
        const error = player.error();
        console.error('Video.js error:', error);
        
        // Fallback to native HTML5 video if Video.js fails
        if (videoRef.current) {
          videoRef.current.innerHTML = `
            <video controls class="${className || 'w-full h-full'}" ${poster ? `poster="${poster}"` : ''}>
              <source src="${src}" type="video/x-matroska">
              <source src="${src}" type="video/mp4">
              <p>Your browser does not support the video format. 
                 <a href="${src}" download>Download the video</a> instead.
              </p>
            </video>
          `;
        }
      });
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, poster, className]);

  return <div ref={videoRef} className={className} />;
}