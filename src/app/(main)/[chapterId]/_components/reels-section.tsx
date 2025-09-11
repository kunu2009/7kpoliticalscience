import type { Reel } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ReelsSection({ reels }: { reels: Reel[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-headline font-bold mb-4">Key Concepts at a Glance</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {reels.map((reel) => {
            const placeholder = PlaceHolderImages.find(p => p.id === reel.imageId);
            return (
              <CarouselItem key={reel.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden h-[450px] flex flex-col group">
                    <div className="relative w-full h-3/5">
                        {placeholder && (
                            <Image
                                src={placeholder.imageUrl}
                                alt={placeholder.description}
                                fill
                                style={{ objectFit: 'cover' }}
                                data-ai-hint={placeholder.imageHint}
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col justify-center bg-card">
                      <h3 className="text-lg font-bold font-headline">{reel.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{reel.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex"/>
        <CarouselNext className="hidden md:flex"/>
      </Carousel>
    </div>
  );
}
