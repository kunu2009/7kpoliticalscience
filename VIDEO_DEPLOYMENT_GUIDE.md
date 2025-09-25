# Video Storage Solution

## Overview
Due to GitHub's file size limitations (100MB max), the large video files are excluded from the repository but the app is designed to handle them when they're available locally.

## Video Management

### Local Development
1. Place your video files in the `pol videos/` directory in the project root
2. The app will automatically detect and serve them during development
3. Videos are served through the `/api/video` endpoint with proper streaming support

### Production Deployment
For production, consider these video hosting solutions:

1. **Cloud Storage** (Recommended)
   - AWS S3 + CloudFront
   - Google Cloud Storage + CDN
   - Azure Blob Storage + CDN

2. **Video CDN Services**
   - Cloudflare Stream
   - JW Player
   - Vimeo Pro

3. **Self-hosted Solution**
   - Use a dedicated media server
   - Configure NGINX for video streaming
   - Implement proper caching headers

### Video Configuration
The app uses `src/lib/video-config.ts` to manage video sources:

```typescript
// Example configuration for external video sources
export const videoSources = {
  local: '/api/video',
  cdn: 'https://your-cdn.com/videos',
  fallback: 'https://backup-cdn.com/videos'
}
```

### Video Features
- ✅ Streaming support with range requests
- ✅ Progress tracking and completion metrics
- ✅ Mobile-optimized video player
- ✅ Offline caching (PWA)
- ✅ Error handling and fallbacks

## File Structure
```
pol videos/           # Local video files (excluded from git)
public/videos/        # Symlink or processed videos (excluded from git)
src/lib/video-*.ts    # Video handling utilities
src/components/enhanced-video-player.tsx  # Video player component
```

## Development Notes
- Videos are automatically processed and served with appropriate headers
- The video player supports fullscreen, controls, and progress tracking
- All video interactions are tracked in the progress system
- PWA caching ensures smooth offline experience when possible