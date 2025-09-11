'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { syllabus } from '@/lib/data';
import { Book, BrainCircuit, FileQuestion, Film } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';

export function SyllabusSidebar() {
  const pathname = usePathname();

  const mainLinks = [
    { href: '/all-flashcards', label: 'Flashcards', icon: BrainCircuit },
    { href: '/all-mcqs', label: 'MCQs', icon: FileQuestion },
    { href: '/all-reels', label: 'Reels', icon: Film },
  ];

  return (
    <Sidebar side="right" collapsible="icon">
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarMenu>
             {mainLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <SidebarMenuItem key={link.href}>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            tooltip={{
                                children: link.label,
                                className: 'w-32 text-center',
                            }}
                        >
                            <Link href={link.href}>
                                <link.icon />
                                <span>{link.label}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                )
             })}
            <SidebarSeparator />
            {syllabus.map((chapter) => {
              const isActive = pathname === `/${chapter.id}`;
              return (
                <SidebarMenuItem key={chapter.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={{
                      children: chapter.title,
                      className: 'w-48 text-center',
                    }}
                  >
                    <Link href={`/${chapter.id}`}>
                      <Book />
                      <span>{chapter.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
