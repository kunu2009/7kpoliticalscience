
'use client';

import { useState, useRef, useEffect } from 'react';
import type { Reel } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { progressTracker } from '@/lib/progress';

const cardColors = [
  'bg-blue-100 dark:bg-blue-900/30',
  'bg-green-100 dark:bg-green-900/30',
  'bg-yellow-100 dark:bg-yellow-900/30',
  'bg-purple-100 dark:bg-purple-900/30',
  'bg-pink-100 dark:bg-pink-900/30',
  'bg-indigo-100 dark:bg-indigo-900/30',
  'bg-teal-100 dark:bg-teal-900/30',
  'bg-orange-100 dark:bg-orange-900/30',
];

interface ChapterReelsProps {
  reels: Reel[];
  chapterId: string;
}

export function ChapterReels({ reels, chapterId }: ChapterReelsProps) {
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const fullScreenContainerRef = useRef<HTMLDivElement>(null);
  const selectedReelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedReel && fullScreenContainerRef.current && selectedReelRef.current) {
        selectedReelRef.current.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
  }, [selectedReel]);

  // Initialize progress tracking when component mounts
  useEffect(() => {
    if (reels.length > 0) {
      const currentProgress = progressTracker.getChapterProgress(chapterId);
      if (!currentProgress) {
        progressTracker.initializeChapterProgress(chapterId, {
          flashcards: 0,
          mcqs: 0,
          videos: 0,
          reels: reels.length
        });
      }
    }
  }, [chapterId, reels.length]);

  const handleOpenReel = (reel: Reel) => {
    setSelectedReel(reel);
    // Track reel view
    progressTracker.markReelViewed(chapterId, reel.id);
  };

  const handleClose = () => {
    setSelectedReel(null);
  };

  return (
    <>
      <div className="h-[75vh] w-full overflow-y-auto">
        <div className="flex flex-col items-center gap-4 p-2 md:gap-6 md:p-6 pb-8">
          {reels.map((reel, index) => (
            <Card
              key={reel.id}
              className={cn(
                'w-full max-w-xs sm:max-w-sm min-h-[400px] sm:min-h-[500px] aspect-[9/16] flex flex-col justify-center transition-all hover:shadow-xl shadow-lg rounded-2xl cursor-pointer transform hover:scale-[1.02]',
                cardColors[index % cardColors.length]
              )}
              onClick={() => handleOpenReel(reel)}
            >
              <CardContent className="p-4 sm:p-6 md:p-8 text-center flex flex-col justify-center h-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-headline text-foreground mb-2 sm:mb-4 leading-tight">
                  {reel.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">
                  {reel.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedReel && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <button
            onClick={handleClose}
            className="fixed top-4 right-4 z-50 rounded-full bg-background/80 p-3 text-foreground hover:bg-background shadow-lg border"
            aria-label="Close full screen view"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="h-screen w-full overflow-y-auto pt-16 pb-6" ref={fullScreenContainerRef}>
            <div className="flex flex-col items-center gap-4 px-2 sm:gap-6 sm:px-4 md:px-6">
              {reels.map((reel, index) => {
                const isSelected = reel.id === selectedReel.id;
                return (
                  <Card
                    key={reel.id}
                    ref={isSelected ? selectedReelRef : null}
                    className={cn(
                      'w-full max-w-xs sm:max-w-sm min-h-[400px] sm:min-h-[500px] aspect-[9/16] flex flex-col justify-center shadow-2xl rounded-2xl border-2',
                      cardColors[index % cardColors.length],
                      isSelected ? 'border-primary ring-4 ring-primary/20 scale-105' : 'border-transparent'
                    )}
                  >
                    <CardContent className="p-4 sm:p-6 md:p-8 text-center flex flex-col justify-center h-full">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline text-foreground mb-4 sm:mb-6 leading-tight">
                        {reel.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
                        {reel.content}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
