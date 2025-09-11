import { syllabus } from '@/lib/data';
import { FlashcardsSection } from '../[chapterId]/_components/flashcards-section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AllFlashcardsPage() {
  const allFlashcards = syllabus.flatMap((chapter) => chapter.flashcards);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-headline md:text-4xl">All Flashcards</CardTitle>
          <CardDescription>Review flashcards from all chapters.</CardDescription>
        </CardHeader>
      </Card>
      {allFlashcards.length > 0 ? (
        <FlashcardsSection flashcards={allFlashcards} />
      ) : (
        <Card>
          <CardHeader className="text-center">
            <CardTitle>No Flashcards Found</CardTitle>
            <CardDescription>There are no flashcards available in any chapter.</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
