
'use client';

import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { BrainCircuit, FileQuestion, Film, BookCopy, Play, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { syllabus } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

const mainLinks = [
  { href: '/progress', label: 'Progress', icon: TrendingUp },
  { href: '/all-flashcards', label: 'Flashcards', icon: BrainCircuit },
  { href: '/all-mcqs', label: 'MCQs', icon: FileQuestion },
  { href: '/all-reels', label: 'Reels', icon: Film },
  { href: '/all-videos', label: 'Videos', icon: Play },
];

export function QuickAccessSidebar() {
    const pathname = usePathname();
    return (
        <aside className="fixed inset-y-0 right-0 z-30 flex h-full w-14 sm:w-16 flex-col border-l bg-card">
            <TooltipProvider>
                <nav className="flex flex-col items-center gap-3 px-1 sm:px-2 py-4 sm:py-5">
                {mainLinks.map(link => {
                     const isActive = pathname === link.href;
                     return (
                        <Tooltip key={link.href}>
                            <TooltipTrigger asChild>
                                <Link
                                href={link.href}
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground sm:h-9 sm:w-9",
                                    isActive && "bg-primary text-primary-foreground"
                                )}
                                >
                                <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                <span className="sr-only">{link.label}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="left">{link.label}</TooltipContent>
                        </Tooltip>
                     )
                })}
                <Separator className="my-1" />
                {syllabus.map((chapter, index) => {
                    const isActive = pathname === `/${chapter.id}`;
                    return (
                        <Tooltip key={chapter.id}>
                            <TooltipTrigger asChild>
                            <Link
                                href={`/${chapter.id}`}
                                className={cn(
                                    "relative flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground sm:h-9 sm:w-9",
                                    isActive && "bg-primary text-primary-foreground"
                                )}
                                >
                                <BookCopy className="h-4 w-4 sm:h-5 sm:w-5" />
                                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground sm:h-4 sm:w-4">
                                    {index + 1}
                                </span>
                                <span className="sr-only">{chapter.title}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="left">{chapter.title}</TooltipContent>
                        </Tooltip>
                    )
                })}
                </nav>
            </TooltipProvider>
        </aside>
    );
}
