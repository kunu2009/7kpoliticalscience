
'use client';

import type { Reel } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Lightbulb } from 'lucide-react';

const cardColors = [
  'bg-blue-100 dark:bg-blue-900/30',
  'bg-green-100 dark:bg-green-900/30',
  'bg-yellow-100 dark:bg-yellow-900/30',
  'bg-purple-100 dark:bg-purple-900/30',
  'bg-pink-100 dark:bg-pink-900/30',
];

export function ChapterReels({ reels }: { reels: Reel[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-headline font-bold mb-4 flex items-center">
        <Lightbulb className="mr-2 h-6 w-6 text-primary" />
        Chapter Reels
      </h2>
      <ScrollArea className="h-[500px] w-full rounded-md border p-4">
        <div className="grid gap-4">
          {reels.map((reel, index) => {
            const placeholder = PlaceHolderImages.find(p => p.id === reel.imageId);
            return (
              <Card 
                key={reel.id} 
                className={cn(
                  'flex flex-col md:flex-row overflow-hidden transition-all hover:shadow-lg',
                  cardColors[index % cardColors.length]
                )}
              >
                {placeholder && (
                  <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={placeholder.imageUrl}
                      alt={placeholder.description}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={placeholder.imageHint}
                    />
                  </div>
                )}
                <CardContent className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold font-headline text-foreground">{reel.title}</h3>
                  <p className="text-base text-foreground/80 mt-2">{reel.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
