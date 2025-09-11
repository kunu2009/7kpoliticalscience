
import { syllabus } from '@/lib/data';
import { McqSection } from '../[chapterId]/_components/mcq-section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AllMcqsPage() {
  const allMcqs = syllabus.flatMap((chapter) => chapter.mcqs);

  return (
    <div className="p-4 md:p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-headline md:text-4xl">All MCQs</CardTitle>
          <CardDescription>Test your knowledge with questions from all chapters.</CardDescription>
        </CardHeader>
      </Card>
      {allMcqs.length > 0 ? (
        <McqSection mcqs={allMcqs} />
      ) : (
        <Card>
          <CardHeader className="text-center">
            <CardTitle>No MCQs Found</CardTitle>
            <CardDescription>There are no multiple-choice questions available in any chapter.</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
