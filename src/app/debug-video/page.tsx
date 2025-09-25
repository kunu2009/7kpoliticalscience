'use client';

import { useState, useEffect } from 'react';

export default function VideoDebugPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [supportInfo, setSupportInfo] = useState<{
    mp4: string;
    webm: string;
    ogg: string;
    mkv: string;
  }>({
    mp4: 'Loading...',
    webm: 'Loading...',
    ogg: 'Loading...',
    mkv: 'Loading...'
  });

  // Check video support on client side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const video = document.createElement('video');
      setSupportInfo({
        mp4: video.canPlayType('video/mp4') || 'Not supported',
        webm: video.canPlayType('video/webm') || 'Not supported',
        ogg: video.canPlayType('video/ogg') || 'Not supported',
        mkv: video.canPlayType('video/x-matroska') || 'Not supported'
      });
    }
  }, []);
  
  const testVideoUrl = "/videos/12th%20Pol.%20Science%EF%BD%9C%20Chp%EF%BC%9A-01%20'World%20Since%201991%EF%BD%9C%20PART%2001%EF%BD%9C%20HSC%20ARTS%20STREAM%20%5BTFFi8aaIfdA%5D.mkv";
  
  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleVideoEvents = (video: HTMLVideoElement) => {
    video.addEventListener('loadstart', () => addLog('loadstart: Started loading'));
    video.addEventListener('progress', () => addLog('progress: Downloading'));
    video.addEventListener('loadedmetadata', () => addLog('loadedmetadata: Metadata loaded'));
    video.addEventListener('loadeddata', () => addLog('loadeddata: First frame loaded'));
    video.addEventListener('canplay', () => addLog('canplay: Can start playing'));
    video.addEventListener('canplaythrough', () => addLog('canplaythrough: Can play through without buffering'));
    video.addEventListener('error', (e) => {
      const error = video.error;
      const errorCode = error?.code;
      const errorMessage = error?.message || 'Unknown error';
      addLog(`error: Code ${errorCode} - ${errorMessage}`);
    });
  };

  const testFetch = async () => {
    try {
      addLog('Testing fetch request...');
      const response = await fetch(testVideoUrl, { method: 'HEAD' });
      addLog(`Fetch response: ${response.status} ${response.statusText}`);
      addLog(`Content-Type: ${response.headers.get('content-type')}`);
      addLog(`Content-Length: ${response.headers.get('content-length')}`);
      addLog(`Accept-Ranges: ${response.headers.get('accept-ranges')}`);
    } catch (error) {
      addLog(`Fetch error: ${error}`);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Video Debug Page</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Video Test</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <video
            controls
            className="w-full max-w-2xl"
            src={testVideoUrl}
            ref={(video) => {
              if (video) {
                handleVideoEvents(video);
              }
            }}
          >
            <source src={testVideoUrl} type="video/x-matroska" />
            <source src={testVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <div className="mb-6">
        <button
          onClick={testFetch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Test Fetch Request
        </button>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Video URL</h2>
        <code className="bg-gray-100 p-2 rounded block break-all">
          {testVideoUrl}
        </code>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Debug Log</h2>
        <div className="bg-gray-100 p-4 rounded h-96 overflow-y-auto">
          {logs.length === 0 ? (
            <p className="text-gray-500">No logs yet...</p>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="mb-1 font-mono text-sm">
                {log}
              </div>
            ))
          )}
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Browser Support Test</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Video Support:</strong></p>
          <ul className="list-disc ml-6">
            <li>MP4: {supportInfo.mp4}</li>
            <li>WebM: {supportInfo.webm}</li>
            <li>OGG: {supportInfo.ogg}</li>
            <li>MKV: {supportInfo.mkv}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}