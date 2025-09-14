
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
    <div className="flex justify-center py-8">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent>
          {reels.map((reel) => {
            const placeholder = PlaceHolderImages.find(p => p.id === reel.imageId);
            return (
              <CarouselItem key={reel.id}>
                <div className="p-1">
                  <Card className="overflow-hidden aspect-[9/16] flex flex-col group rounded-2xl">
                    <div className="relative w-full h-full">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <h3 className="text-xl font-bold font-headline">{reel.title}</h3>
                      <p className="text-sm mt-2">{reel.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-16"/>
        <CarouselNext className="hidden md:flex -right-16"/>
      </Carousel>
    </div>
  );
}
