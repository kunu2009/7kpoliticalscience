import { redirect } from 'next/navigation';
import { syllabus } from '@/lib/data';

export default function Home() {
  if (syllabus.length > 0) {
    redirect(`/${syllabus[0].id}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to PolSci Guide</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        No chapters available to display.
      </p>
    </main>
  );
}
