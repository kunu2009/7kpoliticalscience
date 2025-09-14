'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export function MainHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/">
            <BookOpen className="h-6 w-6" />
            <span className="ml-2 font-bold">PolSci Guide</span>
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <SidebarTrigger className="md:hidden" />
      </div>
    </header>
  );
}
