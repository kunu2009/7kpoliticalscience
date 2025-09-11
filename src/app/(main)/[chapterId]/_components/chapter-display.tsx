'use client';
import type { Chapter } from '@/lib/data';
import { KeyTermDefiner } from './key-term-definer';

type ChapterDisplayProps = {
  chapter: Chapter;
};

export function ChapterDisplay({ chapter }: ChapterDisplayProps) {
  const contentParts = chapter.content.split(/(\{[a-zA-Z0-9_]+\})/g);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
      {contentParts.map((part, index) => {
        const match = part.match(/\{([a-zA-Z0-9_]+)\}/);
        if (match) {
          const term = match[1].replace(/_/g, ' ');
          if (chapter.keyTerms.some((kt) => kt.term.toLowerCase() === term.toLowerCase())) {
            return (
              <KeyTermDefiner
                key={index}
                term={term}
                context={chapter.content}
              />
            );
          }
        }
        // Use pre-wrap to preserve whitespace and newlines from the template literal
        return <span key={index} style={{ whiteSpace: 'pre-wrap'}}>{part}</span>;
      })}
    </div>
  );
}
