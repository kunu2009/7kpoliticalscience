import Link from 'next/link';
import { syllabus } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Book } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-headline md:text-4xl">
            Welcome to Your PolSci Guide
          </CardTitle>
          <CardDescription>
            Select a chapter below to start learning.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {syllabus.map((chapter) => (
          <Link
            href={`/${chapter.id}`}
            key={chapter.id}
            className="group block"
          >
            <Card className="flex h-full flex-col transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
              <CardHeader className="flex-row items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-xl group-hover:text-primary">
                    {chapter.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <p className="text-sm text-muted-foreground">
                  {chapter.summary}
                </p>
                <div className="mt-4 flex items-center justify-end text-sm font-semibold text-primary">
                  Read Chapter
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
