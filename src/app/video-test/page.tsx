'use client';

import { syllabus } from '@/lib/data';

export default function VideoTest() {
  // Get the first video from the data
  const firstVideo = syllabus[0].videos?.[0];
  
  if (!firstVideo) {
    return <div>No video found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Video Streaming Test - STATIC FILES</h1>
      
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold">Video Info:</h2>
        <p><strong>Title:</strong> {firstVideo.title}</p>
        <p><strong>File Name:</strong> {firstVideo.fileName}</p>
        <p><strong>Static URL:</strong> {firstVideo.videoUrl}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Video (Static Files):</h2>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <video
            controls
            className="w-full h-full"
            src={firstVideo.videoUrl}
            onError={(e) => {
              console.error('Video error:', e);
              alert('Video failed to load: ' + firstVideo.videoUrl);
            }}
            onLoadStart={() => {
              console.log('Video load started for:', firstVideo.videoUrl);
            }}
            onCanPlay={() => {
              console.log('Video can play!');
              alert('Success! Video loaded successfully');
            }}
          >
            <source src={firstVideo.videoUrl} type="video/x-matroska" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="space-y-2">
        <p><strong>Duration:</strong> {firstVideo.duration}</p>
        <p><strong>File Size:</strong> {firstVideo.fileSize}</p>
        <p><strong>Chapter Part:</strong> {firstVideo.chapterPart}</p>
      </div>
      
      <div className="mt-4 space-x-2">
        <a 
          href={firstVideo.videoUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Open Video in New Tab
        </a>
        
        <button 
          onClick={() => {
            console.log('Testing fetch to:', firstVideo.videoUrl);
            fetch(firstVideo.videoUrl, { method: 'HEAD' })
              .then(response => {
                console.log('Response status:', response.status);
                console.log('Response headers:', Object.fromEntries(response.headers.entries()));
                if (response.ok) {
                  alert('✅ Video file is accessible!');
                } else {
                  alert('❌ Video file not accessible: ' + response.status);
                }
              })
              .catch(error => {
                console.error('Fetch error:', error);
                alert('❌ Error accessing video: ' + error.message);
              });
          }}
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Test File Access
        </button>
      </div>
    </div>
  );
}