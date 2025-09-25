import { NextRequest, NextResponse } from 'next/server';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Reconstruct the file path from the params
    const filePath = join(process.cwd(), decodeURIComponent(params.path.join('/')));
    
    // Security check: ensure the path is within the pol videos directory
    const polVideosPath = join(process.cwd(), 'pol videos');
    if (!filePath.startsWith(polVideosPath)) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Check if file exists and get stats
    const stats = statSync(filePath);
    
    if (!stats.isFile()) {
      return new NextResponse('Not Found', { status: 404 });
    }

    // Handle range requests for video streaming
    const range = request.headers.get('range');
    const fileSize = stats.size;
    
    if (range) {
      // Parse range header
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      
      const chunkSize = (end - start) + 1;
      const stream = createReadStream(filePath, { start, end });
      
      return new NextResponse(stream as any, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize.toString(),
          'Content-Type': 'video/mp4',
          'Cache-Control': 'public, max-age=31536000',
        },
      });
    } else {
      // No range request, send entire file
      const stream = createReadStream(filePath);
      
      return new NextResponse(stream as any, {
        status: 200,
        headers: {
          'Content-Length': fileSize.toString(),
          'Content-Type': 'video/mp4',
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'public, max-age=31536000',
        },
      });
    }
  } catch (error) {
    console.error('Error serving video:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}