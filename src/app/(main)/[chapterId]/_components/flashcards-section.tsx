
'use client';

import { useState, useMemo } from 'react';
import type { Flashcard } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FlashcardsSection({ flashcards }: { flashcards: Flashcard[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const currentFlashcard = useMemo(() => flashcards[currentIndex], [flashcards, currentIndex]);
  const progress = useMemo(() => ((currentIndex + 1) / flashcards.length) * 100, [currentIndex, flashcards.length]);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };
  
  return (
    <Card>
      <CardContent className="p-4 md:p-6 flex flex-col items-center gap-4 md:gap-6">
        <div className="w-full max-w-2xl space-y-2">
            <div className="flex justify-between items-baseline">
                <p className="text-sm font-medium text-muted-foreground">Flashcard Progress</p>
                <p className="text-sm font-bold">{currentIndex + 1} / {flashcards.length}</p>
            </div>
            <Progress value={progress} aria-label={`${Math.round(progress)}% complete`} />
        </div>
        
        <div 
          className="w-full max-w-2xl h-56 md:h-64 [perspective:1000px] cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          onKeyDown={(e) => e.key === ' ' || e.key === 'Enter' ? setIsFlipped(!isFlipped) : undefined}
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
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg border bg-card text-card-foreground shadow-sm flex items-center justify-center p-4 md:p-6">
              <p className="text-lg md:text-xl font-semibold">{currentFlashcard.question}</p>
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border bg-primary text-primary-foreground shadow-sm flex items-center justify-center p-4 md:p-6">
              <p className="text-base md:text-lg">{currentFlashcard.answer}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4">
          <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous card">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="secondary" onClick={() => setIsFlipped(!isFlipped)}>
            <RotateCw className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Flip Card</span>
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next card">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
