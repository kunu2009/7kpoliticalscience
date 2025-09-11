
'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { syllabus } from '@/lib/data';
import { Book, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';

export function SyllabusSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar side="right" collapsible="icon">
      <SidebarHeader>
        <h2 className="font-semibold text-lg">Syllabus</h2>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarMenu>
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
                      {isActive && <ChevronRight className="ml-auto" />}
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
