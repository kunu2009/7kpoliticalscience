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
import { BrainCircuit, FileQuestion, Film, BookCopy, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { syllabus } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function SyllabusSidebar() {
  const pathname = usePathname();

  const mainLinks = [
    { href: '/all-flashcards', label: 'Flashcards', icon: BrainCircuit },
    { href: '/all-mcqs', label: 'MCQs', icon: FileQuestion },
    { href: '/all-reels', label: 'Reels', icon: Film },
  ];

  return (
    <Sidebar>
        <SidebarHeader className="flex items-center justify-between">
           <Button variant="ghost" asChild>
              <Link href="/">
                <BookOpen className="h-6 w-6" />
                <span className="ml-2 font-bold group-data-[collapsed=icon]:hidden">PolSci Guide</span>
              </Link>
            </Button>
          <SidebarClose className="md:hidden" />
        </SidebarHeader>
        <SidebarContent>
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
