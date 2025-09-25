
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
    <div className="flex justify-center py-4 md:py-8">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full max-w-xs sm:max-w-sm"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reels.map((reel) => {
            const placeholder = PlaceHolderImages.find(p => p.id === reel.imageId);
            return (
              <CarouselItem key={reel.id} className="pl-2 md:pl-4">
                <div className="p-1">
                  <Card className="overflow-hidden aspect-[9/16] flex flex-col group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <CardContent className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white z-10">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold font-headline leading-tight mb-2">{reel.title}</h3>
                      <p className="text-xs sm:text-sm md:text-sm leading-relaxed line-clamp-3">{reel.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-12 md:-left-16 h-8 w-8 md:h-10 md:w-10"/>
        <CarouselNext className="hidden sm:flex -right-12 md:-right-16 h-8 w-8 md:h-10 md:w-10"/>
      </Carousel>
    </div>
  );
}
