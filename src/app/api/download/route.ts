import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const fileName = url.searchParams.get('file');
    const download = url.searchParams.get('download') === 'true';
    
    if (!fileName) {
      return new NextResponse('File parameter is required', { status: 400 });
    }

    // Security: Only allow video files from the pol videos directory
    if (!fileName.endsWith('.mkv')) {
      return new NextResponse('Only .mkv files are allowed', { status: 400 });
    }

    // Construct the full path to the video file
    const videoBasePath = path.join(process.cwd(), 'pol videos');
    const fullVideoPath = path.join(videoBasePath, fileName);
    
    // Security check: ensure the file is within the pol videos directory
    if (!fullVideoPath.startsWith(videoBasePath)) {
      return new NextResponse('Invalid file path', { status: 400 });
    }

    // Check if file exists
    try {
      await fs.access(fullVideoPath);
    } catch {
      return new NextResponse('Video file not found', { status: 404 });
    }

    // Get file stats
    const stats = await fs.stat(fullVideoPath);
    const fileSize = stats.size;

    // Read the file
    const fileBuffer = await fs.readFile(fullVideoPath);
    
    // Generate a clean filename for download
    const cleanFileName = fileName.replace(/[^\w\s.-]/g, '_');
    
    const headers: Record<string, string> = {
      'Content-Length': fileSize.toString(),
      'Content-Type': 'video/x-matroska',
      'Cache-Control': 'public, max-age=3600',
    };

    // If download is requested, add download headers
    if (download) {
      headers['Content-Disposition'] = `attachment; filename="${cleanFileName}"`;
    }
    
    return new NextResponse(fileBuffer as any, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Video download error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}