'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Flashcard } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BrainCircuit } from 'lucide-react';

export function DashboardFlashcard({ flashcards }: { flashcards: Flashcard[] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [randomFlashcard, setRandomFlashcard] = useState<Flashcard | null>(null);

  useEffect(() => {
    // Select a random flashcard only on the client-side to avoid hydration mismatches
    if (flashcards.length > 0) {
      const randomIndex = Math.floor(Math.random() * flashcards.length);
      setRandomFlashcard(flashcards[randomIndex]);
    }
  }, [flashcards]);

  if (!randomFlashcard) {
    return null; // Or a loading skeleton
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-4">
            <BrainCircuit className="h-8 w-8 text-primary" />
            <div>
                <CardTitle className="font-headline">Flashcard of the Day</CardTitle>
                <CardDescription>A random card to test your knowledge.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div
          className="w-full max-w-2xl h-56 [perspective:1000px] cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter' ? setIsFlipped(!isFlipped) : undefined)}
          tabIndex={0}
          role="button"
          aria-pressed={isFlipped}
        >
          <div
            className={cn(
              'relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d]',
              { '[transform:rotateY(180deg)]': isFlipped }
            )}
          >
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg border bg-card text-card-foreground shadow-sm flex items-center justify-center p-6">
              <p className="text-xl font-semibold">{randomFlashcard.question}</p>
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border bg-primary text-primary-foreground shadow-sm flex items-center justify-center p-6">
              <p className="text-lg">{randomFlashcard.answer}</p>
            </div>
          </div>
        </div>
        <Button variant="secondary" onClick={() => setIsFlipped(!isFlipped)}>
          <RotateCw className="mr-2 h-4 w-4" />
          Flip Card
        </Button>
      </CardContent>
    </Card>
  );
}
