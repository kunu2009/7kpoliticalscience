
import { syllabus } from '@/lib/data';
import { ReelsSection } from '../[chapterId]/_components/reels-section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AllReelsPage() {
  const allReels = syllabus.flatMap((chapter) => chapter.reels);

  return (
    <div className="p-4 md:p-8">
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-3xl font-headline md:text-4xl">All Reels</CardTitle>
                <CardDescription>Browse key concepts from all chapters.</CardDescription>
            </CardHeader>
        </Card>
      {allReels.length > 0 ? (
        <ReelsSection reels={allReels} />
      ) : (
        <Card>
          <CardHeader className="text-center">
            <CardTitle>No Reels Found</CardTitle>
            <CardDescription>There are no reels available in any chapter.</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
