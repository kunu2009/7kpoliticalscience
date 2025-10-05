'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarGroup,
  SidebarClose,
} from '@/components/ui/sidebar';
import { BrainCircuit, FileQuestion, Film, BookCopy, Home, Play, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { syllabus } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function SyllabusSidebar() {
  const pathname = usePathname();

  const mainLinks = [
    { href: '/progress', label: 'Progress', icon: TrendingUp },
    { href: '/all-flashcards', label: 'Flashcards', icon: BrainCircuit },
    { href: '/all-mcqs', label: 'MCQs', icon: FileQuestion },
    { href: '/all-reels', label: 'Reels', icon: Film },
    { href: '/all-videos', label: 'Videos', icon: Play },
  ];

  return (
    <Sidebar>
        <SidebarHeader className="flex flex-col items-start gap-3 p-4">
          <Link href="/" className="flex items-center gap-3 w-full">
            <Image 
              src="/7kpol-96x96.png" 
              alt="7K Political Science Logo" 
              width={48} 
              height={48}
              className="rounded-lg shadow-md"
              priority
            />
            <div className="flex flex-col group-data-[collapsed=icon]:hidden">
              <span className="font-bold text-base bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">7K Political Science</span>
              <span className="text-xs text-muted-foreground">HSC Study Guide</span>
            </div>
          </Link>
          <SidebarClose className="md:hidden absolute right-4 top-4" />
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
                {mainLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <SidebarMenuItem key={link.href}>
                             <SidebarMenuButton asChild size="sm" isActive={isActive} tooltip={{ children: link.label }}>
                                <Link href={link.href}>
                                    <link.icon />
                                    <span>{link.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )
                })}
            </SidebarMenu>
            <SidebarSeparator />
            <SidebarMenu>
                {syllabus.map((chapter) => {
                    const isActive = pathname === `/${chapter.id}`;
                    return (
                        <SidebarMenuItem key={chapter.id}>
                             <SidebarMenuButton asChild size="sm" isActive={isActive} tooltip={{ children: chapter.title }}>
                                <Link href={`/${chapter.id}`}>
                                    <BookCopy />
                                    <span>{chapter.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )
                })}
            </SidebarMenu>
        </SidebarContent>
    </Sidebar>
  );
}
