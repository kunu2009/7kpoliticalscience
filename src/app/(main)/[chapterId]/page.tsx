import { syllabus } from '@/lib/data';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChapterDisplay } from './_components/chapter-display';
import { FlashcardsSection } from './_components/flashcards-section';
import { McqSection } from './_components/mcq-section';
import { ReelsSection } from './_components/reels-section';
import { BookText, BrainCircuit, FileQuestion } from 'lucide-react';

export default function ChapterPage({
  params,
}: {
  params: { chapterId: string };
}) {
  const chapter = syllabus.find((c) => c.id === params.chapterId);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card className="mb-8 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-headline md:text-4xl">
            {chapter.title}
          </CardTitle>
          <CardDescription>{chapter.summary}</CardDescription>
        </CardHeader>
      </Card>
      
      <ReelsSection reels={chapter.reels} />

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="content">
            <BookText className="mr-2 h-4 w-4" />
            Content
          </TabsTrigger>
          <TabsTrigger value="flashcards">
            <BrainCircuit className="mr-2 h-4 w-4" />
            Flashcards
          </TabsTrigger>
          <TabsTrigger value="mcqs">
            <FileQuestion className="mr-2 h-4 w-4" />
            MCQs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="content">
          <Card>
            <CardContent className="p-6">
              <ChapterDisplay chapter={chapter} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="flashcards">
          <FlashcardsSection flashcards={chapter.flashcards} />
        </TabsContent>
        <TabsContent value="mcqs">
          <McqSection mcqs={chapter.mcqs} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
