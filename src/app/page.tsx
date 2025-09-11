import { syllabus } from '@/lib/data';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Syllabus Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Browse through the chapters of your Political Science guide.
        </p>
      </header>

      {syllabus.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {syllabus.map((chapter) => (
            <Link
              href={`/${chapter.id}`}
              key={chapter.id}
              className="group"
            >
              <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1">
                <CardHeader className="flex-grow">
                  <CardTitle className="font-headline text-xl">
                    {chapter.title}
                  </CardTitle>
                  <CardDescription className="pt-2">
                    {chapter.summary}
                  </CardDescription>
                </CardHeader>
                <div className="p-6 pt-0 mt-auto">
                    <div className="flex items-center text-sm font-semibold text-primary">
                        Read Chapter
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold">No Chapters Available</h2>
          <p className="mt-2 text-muted-foreground">
            There are currently no chapters in the syllabus to display.
          </p>
        </div>
      )}
    </div>
  );
}
