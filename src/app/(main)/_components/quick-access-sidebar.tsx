
'use client';

import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { BrainCircuit, FileQuestion, Film, BookCopy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { syllabus } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

const mainLinks = [
  { href: '/all-flashcards', label: 'Flashcards', icon: BrainCircuit },
  { href: '/all-mcqs', label: 'MCQs', icon: FileQuestion },
  { href: '/all-reels', label: 'Reels', icon: Film },
];

export function QuickAccessSidebar() {
    const pathname = usePathname();
    return (
        <aside className="fixed inset-y-0 right-0 z-30 flex h-full w-16 flex-col border-l bg-card">
            <TooltipProvider>
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                {mainLinks.map(link => {
                     const isActive = pathname === link.href;
                     return (
                        <Tooltip key={link.href}>
                            <TooltipTrigger asChild>
                                <Link
                                href={link.href}
                                className={cn(
                                    "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                                    isActive && "bg-primary text-primary-foreground"
                                )}
                                >
                                <link.icon className="h-5 w-5" />
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
                                    "relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                                    isActive && "bg-primary text-primary-foreground"
                                )}
                                >
                                <BookCopy className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
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
