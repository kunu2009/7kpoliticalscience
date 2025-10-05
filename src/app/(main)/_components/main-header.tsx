'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function MainHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4 md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <Link href="/" className="flex items-center gap-2 mr-2">
          <Image 
            src="/7kpol-96x96.png" 
            alt="7K Political Science Logo" 
            width={40} 
            height={40}
            className="rounded-md"
            priority
          />
          <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">7K Political Science</span>
        </Link>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="ml-2 hidden lg:inline">Dashboard</span>
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
