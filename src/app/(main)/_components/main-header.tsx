'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function MainHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4 md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <Button variant="ghost" asChild>
          <Link href="/">
            <Home className="h-6 w-6" />
            <span className="ml-2 font-bold hidden sm:inline">Dashboard</span>
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/progress">
            <TrendingUp className="h-6 w-6" />
            <span className="ml-2 font-bold hidden sm:inline">Progress</span>
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
