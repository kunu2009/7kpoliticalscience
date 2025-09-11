import { syllabus } from '@/lib/data';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, BookCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const totalChapters = syllabus.length;
  const totalFlashcards = syllabus.reduce((acc, chap) => acc + chap.flashcards.length, 0);
  const totalMcqs = syllabus.reduce((acc, chap) => acc + chap.mcqs.length, 0);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8 rounded-lg bg-card p-6 text-center shadow-sm">
        <h1 className="text-4xl font-bold font-headline text-primary">Welcome to Your PolSci Guide</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your comprehensive companion for 12th Grade HSC Political Science.
        </p>
        <div className="mt-6 flex justify-center gap-4 text-sm font-medium">
            <div className="flex items-center rounded-full bg-secondary px-4 py-2">
                <BookCheck className="mr-2 h-4 w-4 text-secondary-foreground" />
                <span><span className="font-bold">{totalChapters}</span> Chapters</span>
            </div>
            <div className="flex items-center rounded-full bg-secondary px-4 py-2">
                 <span className="font-bold">{totalFlashcards}</span>&nbsp;Flashcards
            </div>
            <div className="flex items-center rounded-full bg-secondary px-4 py-2">
                 <span className="font-bold">{totalMcqs}</span>&nbsp;MCQs
            </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold font-headline">Syllabus Chapters</h2>
        <p className="text-muted-foreground">Select a chapter to begin your study session.</p>
      </div>

      {syllabus.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {syllabus.map((chapter) => (
            <Card key={chapter.id} className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader className="flex-grow">
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                    {chapter.title}
                  </CardTitle>
                  <CardDescription className="pt-2">
                    {chapter.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href={`/${chapter.id}`}>
                            Study Chapter <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="flex flex-col items-center justify-center p-12 text-center">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">No Chapters Available</CardTitle>
                <CardDescription className="mt-2">
                    There are currently no chapters in the syllabus to display.
                </CardDescription>
            </CardHeader>
        </Card>
      )}
    </div>
  );
}
