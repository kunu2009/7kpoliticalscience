import { syllabus } from '@/lib/data';
import { VideosSection } from '../[chapterId]/_components/videos-section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AllVideosPage() {
  const allVideos = syllabus.flatMap((chapter) => chapter.videos);

  return (
    <div className="p-4 md:p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-headline md:text-4xl">All Videos</CardTitle>
          <CardDescription>
            Watch comprehensive video lectures covering all chapters of 12th Political Science.
          </CardDescription>
        </CardHeader>
      </Card>
      
      {allVideos.length > 0 ? (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Available Videos ({allVideos.length})</h2>
            <p className="text-muted-foreground">
              All video lectures are available for streaming and download. Videos are optimized for online viewing to save bandwidth.
            </p>
          </div>
          <VideosSection videos={allVideos} />
        </>
      ) : (
        <Card>
          <CardHeader className="text-center">
            <CardTitle>No Videos Available</CardTitle>
            <CardDescription>Videos are being processed and will be available soon.</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}