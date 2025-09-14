
import { syllabus } from '@/lib/data';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChapterDisplay } from './_components/chapter-display';
import { FlashcardsSection } from './_components/flashcards-section';
import { McqSection } from './_components/mcq-section';
import { ReelsSection } from './_components/reels-section';
import { ChapterReels } from './_components/chapter-reels';
import { BookText, BrainCircuit, FileQuestion, Film, Lightbulb } from 'lucide-react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

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
    <div className="p-4 md:p-8">
      <Card className="mb-8 overflow-hidden">
        <CardContent className="p-6">
          <h1 className="text-3xl font-headline md:text-4xl">{chapter.title}</h1>
          <p className="mt-2 text-muted-foreground">{chapter.summary}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="content" className="w-full">
        <div className="relative">
           <ScrollArea>
            <TabsList className="grid w-full max-w-full grid-cols-5">
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
                <TabsTrigger value="key-concepts">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Key Concepts
                </TabsTrigger>
                <TabsTrigger value="reels">
                    <Film className="mr-2 h-4 w-4" />
                    Reels
                </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
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
        <TabsContent value="key-concepts">
           <ReelsSection reels={chapter.reels} />
        </TabsContent>
        <TabsContent value="reels">
            <ChapterReels reels={chapter.reels} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
