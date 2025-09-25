# Google Drive Video Integration Setup

## Overview
Your 7K Political Science app now supports streaming videos directly from Google Drive! This allows users to watch videos without downloading large files, and you can host them on Google Drive instead of including them in your GitHub repository.

## How It Works
The app automatically detects if Google Drive integration is enabled and serves videos from Google Drive when available. If Google Drive isn't set up, it falls back to local video files.

## Setup Steps

### Step 1: Prepare Your Google Drive Folder
1. Go to your Google Drive folder: https://drive.google.com/drive/folders/1ubXhEmU84j8N_3tjO4cWfk8tqF5p2bU0?usp=drive_link
2. Make sure the folder is set to **"Anyone with the link can view"**
3. Verify all your video files are uploaded

### Step 2: Get Individual File IDs
For each video file in your Google Drive folder:

1. **Right-click** on the video file
2. Select **"Get link"** or **"Share"**  
3. Copy the sharing link
4. The link looks like: `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
5. **Extract the FILE_ID_HERE part** - this is what you need

**Example:**
- Link: `https://drive.google.com/file/d/1BxVs7Qr8p9XsJ2K4Nm6Lw3Yz5Tb8Qp1A/view?usp=sharing`
- File ID: `1BxVs7Qr8p9XsJ2K4Nm6Lw3Yz5Tb8Qp1A`

### Step 3: Update the Configuration
Open `src/lib/google-drive-videos.ts` and replace the placeholder file IDs:

```typescript
// Replace this:
fileId: "YOUR_FILE_ID_HERE_1",

// With your actual file ID:
fileId: "1BxVs7Qr8p9XsJ2K4Nm6Lw3Yz5Tb8Qp1A",
```

### Step 4: Test the Integration
1. Run your development server: `npm run dev`
2. Navigate to a chapter with videos
3. Try playing a video - it should load from Google Drive
4. Check the browser's Network tab to confirm it's loading from `drive.google.com`

## Video File Mapping
Your videos are mapped by their exact filename. Make sure the filenames in Google Drive match exactly with what's in your data structure:

```
Current video files to map:
├── Chapter 1: World Since 1991
│   ├── 12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 01｜ HSC ARTS STREAM [TFFi8aaIfdA].mkv
│   ├── 12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 02｜ Towards｜ Unipolarity｜ HSC ARTS STREAM [io6JND19kbY].mkv
│   ├── 12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 04｜｜ HSC ARTS STREAM｜ HSC Exam [DyQ6eoHVXow].mkv
│   ├── 12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 05｜｜ HSC ARTS STREAM｜ HSC Exam [1_-yLD7DNoI].mkv
│   └── 12th Pol. Science｜ Chp：-01 'World Since 1991｜ Full Exercise Solution｜PART 06｜HSC ARTS STREAM [y59tcIx_4DA].mkv
├── Chapter 2: Globalization
│   ├── 12th Pol. Science｜ Chp：-02 'Globalisation｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [qGth0gOgIIY].mkv
│   └── 12th Pol.Science｜ Chp：-02 'Globalization｜ PART 06｜ HSC ARTS STREAM｜ HSC Exam [iyJ1dbJ9doA].mkv
└── [More chapters...]
```

## URL Formats
The system generates different URL types:

- **Streaming URL**: `https://drive.google.com/uc?export=view&id=FILE_ID`
- **Preview URL**: `https://drive.google.com/file/d/FILE_ID/preview`
- **Download URL**: `https://drive.google.com/uc?export=download&id=FILE_ID`

## Troubleshooting

### Videos Not Loading
1. **Check file sharing**: Ensure each video file is set to "Anyone with the link can view"
2. **Verify file IDs**: Make sure you copied the correct file ID (not folder ID)
3. **Check filenames**: Ensure filenames in Google Drive match exactly with your data structure

### Performance Issues
- Google Drive may throttle requests for large files
- Consider enabling browser caching in your video player settings
- For better performance, consider upgrading to Google Drive API for authenticated requests

### Fallback System
If Google Drive integration fails, the app automatically falls back to local videos (if available). This ensures your app remains functional even if there are Google Drive issues.

## Security Notes
- File IDs are not sensitive information, but sharing links give access to view files
- Make sure only appropriate videos are set to public sharing
- Consider using Google Drive API with authentication for production apps with sensitive content

## Next Steps
Once you've added all your file IDs:

1. Test each video to ensure they load correctly
2. Deploy your updated app to production
3. Monitor video loading performance
4. Consider adding error handling for failed video loads

## Files Modified
- ✅ `src/lib/google-drive-videos.ts` - Video file ID mappings
- ✅ `src/lib/video-config.ts` - Updated to use Google Drive URLs
- ✅ `scripts/get-drive-ids.js` - Helper script for file ID extraction

The integration is ready! Just add your Google Drive file IDs and your videos will stream directly from Google Drive! 🎥✨