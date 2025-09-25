import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const fileName = url.searchParams.get('file');
    
    console.log('Video API called with file:', fileName);
    
    if (!fileName) {
      console.error('No file parameter provided');
      return new NextResponse('File parameter is required', { status: 400 });
    }

    // Security: Only allow video files from the pol videos directory
    if (!fileName.endsWith('.mkv')) {
      console.error('Invalid file extension:', fileName);
      return new NextResponse('Only .mkv files are allowed', { status: 400 });
    }

    // Construct the full path to the video file
    const videoBasePath = path.join(process.cwd(), 'pol videos');
    const fullVideoPath = path.join(videoBasePath, fileName);
    
    console.log('Video base path:', videoBasePath);
    console.log('Full video path:', fullVideoPath);
    
    // Security check: ensure the file is within the pol videos directory
    if (!fullVideoPath.startsWith(videoBasePath)) {
      console.error('Invalid file path - outside base directory');
      return new NextResponse('Invalid file path', { status: 400 });
    }

    // Check if file exists
    try {
      await fs.access(fullVideoPath);
      console.log('File exists:', fullVideoPath);
    } catch (error) {
      console.error('File not found:', fullVideoPath, error);
      return new NextResponse('Video file not found', { status: 404 });
    }

    // Get file stats
    const stats = await fs.stat(fullVideoPath);
    const fileSize = stats.size;
    console.log('File size:', fileSize);

    // Handle range requests for video streaming
    const range = request.headers.get('range');
    console.log('Range header:', range);
    
    if (range) {
      // Parse range header
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;

      console.log(`Range request: ${start}-${end}/${fileSize}, chunk size: ${chunkSize}`);

      // Read the file chunk
      const fileHandle = await fs.open(fullVideoPath, 'r');
      const buffer = Buffer.alloc(chunkSize);
      await fileHandle.read(buffer, 0, chunkSize, start);
      await fileHandle.close();

      console.log('Returning range response');
      return new NextResponse(buffer as any, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize.toString(),
          'Content-Type': 'video/x-matroska',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    } else {
      // Return entire file if no range specified
      console.log('Reading entire file');
      const fileBuffer = await fs.readFile(fullVideoPath);
      
      console.log('Returning full file response');
      return new NextResponse(fileBuffer as any, {
        status: 200,
        headers: {
          'Content-Length': fileSize.toString(),
          'Content-Type': 'video/x-matroska',
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }
  } catch (error) {
    console.error('Video streaming error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new NextResponse(`Internal server error: ${errorMessage}`, { status: 500 });
  }
}