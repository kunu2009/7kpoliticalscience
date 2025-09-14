
'use client';

import { useState } from 'react';
import type { Reel } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

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

export function ChapterReels({ reels }: { reels: Reel[] }) {
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);

  return (
    <>
      <ScrollArea className="h-[75vh] w-full">
        <div className="flex flex-col items-center gap-6 p-4 md:p-6">
          {reels.map((reel, index) => (
            <Card
              key={reel.id}
              className={cn(
                'w-full max-w-sm min-h-[500px] aspect-[9/16] flex flex-col justify-center transition-all hover:shadow-xl shadow-lg rounded-2xl cursor-pointer',
                cardColors[index % cardColors.length]
              )}
              onClick={() => setSelectedReel(reel)}
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">
                  {reel.title}
                </h3>
                <p className="text-lg text-foreground/80">
                  {reel.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {selectedReel && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedReel(null)}
            className="absolute top-4 right-4 z-10 rounded-full bg-background/50 p-2 text-foreground hover:bg-background"
            aria-label="Close full screen view"
          >
            <X className="h-6 w-6" />
          </button>
          <Card
            className={cn(
              'w-full max-w-sm h-full max-h-[90vh] aspect-[9/16] flex flex-col justify-center shadow-2xl rounded-2xl',
               cardColors[reels.findIndex(r => r.id === selectedReel.id) % cardColors.length]
            )}
          >
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold font-headline text-foreground mb-6">
                {selectedReel.title}
              </h3>
              <p className="text-xl text-foreground/80">
                {selectedReel.content}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
