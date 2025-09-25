# Political Science Video Integration Setup

## Overview

This document outlines the video integration functionality added to the 7K Political Science app, including video streaming, download options, and bandwidth optimization.

## Features Added

### 1. Video Data Structure
- Added `Video` type to the data model with properties:
  - `id`: Unique identifier
  - `title`: Display title
  - `description`: Content description
  - `fileName`: Original video file name
  - `chapterPart`: Part identifier (PART 01, PART 02, etc.)
  - `duration`: Estimated video duration
  - `fileSize`: Estimated file size
  - `videoUrl`: Streaming URL
  - `downloadUrl`: Download URL

### 2. Video Components
- **VideosSection**: Main component for displaying and playing videos
- **All Videos Page**: Dedicated page showing all videos across chapters
- **Video Player**: Built-in HTML5 video player with controls

### 3. Navigation Integration
- Added "Videos" tab to chapter pages
- Added "Videos" link to main sidebar
- Added video icon to quick access sidebar

### 4. Video Configuration
- `src/lib/video-config.ts`: Central configuration for video settings
- Helper functions for URL generation and file size estimation
- Compression and caching settings

## File Structure
```
src/
├── app/
│   ├── (main)/
│   │   ├── all-videos/
│   │   │   └── page.tsx              # All videos page
│   │   └── [chapterId]/
│   │       └── _components/
│   │           └── videos-section.tsx # Main video component
│   └── api/
│       ├── video/
│       │   └── route.ts              # Video streaming endpoint
│       └── download/
│           └── [...path]/
│               └── route.ts          # Video download endpoint
├── lib/
│   ├── data.ts                       # Updated with video data
│   └── video-config.ts               # Video configuration
└── components/ui/
    └── badge.tsx                     # Used for video metadata
```

## Video Files Mapping

Each chapter now includes videos mapped from the `pol videos` folder:

### Chapter 1: World Since 1991
- Part 01: Introduction to post-Cold War world
- Part 02: Towards Unipolarity
- Part 04: Key developments and challenges
- Part 05: Continuation of developments
- Part 06: Full Exercise Solution

### Chapter 2: Globalisation
- Part 01: Introduction to globalization
- Part 06: Advanced concepts and exam prep

### Chapter 3: Humanitarian Issues
- Parts 01-06: Complete coverage of humanitarian issues

### Chapter 4: India Challenges
- ONE SHOT: Comprehensive overview

### Chapter 5: Good Governance
- Parts 01-05: Complete governance concepts

### Chapter 6: India and the World
- Parts 01-05: India's foreign policy and relations

## Technical Implementation

### Bandwidth Optimization
- Videos use HTML5 video element with `preload="metadata"`
- Range request support for partial video loading
- Compressed file size estimates provided
- Caching headers for repeated access

### Video Player Features
- Play/pause controls
- Download option for offline viewing
- File size and duration display
- Part-based organization
- Responsive grid layout

### Security Considerations
- Path validation to prevent directory traversal
- File existence verification
- Proper MIME type handling
- CORS headers for cross-origin requests

## Setup Instructions

### 1. Video Files
1. Ensure all video files are in the `pol videos` directory
2. Video files should match the filenames in `src/lib/data.ts`
3. Supported formats: MP4, MKV, WebM

### 2. API Routes
The API routes handle video streaming and downloads:
- `/api/video?path=<filename>`: Stream video
- `/api/download?path=<filename>`: Download video

### 3. Configuration
Update `src/lib/video-config.ts` for:
- Video quality settings
- Compression parameters
- Caching policies
- File size estimations

## Usage

### For Students
1. Navigate to any chapter
2. Click the "Videos" tab
3. Select a video to play or download
4. Videos stream online to save bandwidth
5. Download option available for offline viewing

### For Developers
1. Add new video entries to `src/lib/data.ts`
2. Use helper functions from `video-config.ts`
3. Update file size and duration estimates
4. Test video playback and download functionality

## Performance Considerations

### Client-Side
- Videos load metadata only initially
- Range requests support for streaming
- Responsive design for mobile devices
- Cached video data

### Server-Side
- Efficient file streaming
- Proper HTTP headers
- Range request handling
- File size optimization

## Future Enhancements

1. **Video Transcoding**: Implement multiple quality options
2. **Subtitle Support**: Add .srt file support
3. **Playback Speed**: Variable speed controls
4. **Bookmarks**: Save viewing progress
5. **Search**: Full-text search in video content
6. **Analytics**: Track viewing patterns

## Troubleshooting

### Common Issues
1. **Video not loading**: Check file path and permissions
2. **Slow streaming**: Implement video compression
3. **Download fails**: Verify API route configuration
4. **Mobile playback**: Ensure responsive video player

### Debug Steps
1. Check browser console for errors
2. Verify API route responses
3. Test with different video formats
4. Monitor network requests

## Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support  
- **Safari**: Full support
- **Edge**: Full support
- **Mobile**: Responsive design

## Deployment Notes

1. Ensure video files are accessible in production
2. Configure proper MIME types on server
3. Set up CDN for video delivery if needed
4. Monitor bandwidth usage
5. Implement proper caching strategies

This video integration provides a comprehensive solution for educational content delivery while maintaining performance and user experience.