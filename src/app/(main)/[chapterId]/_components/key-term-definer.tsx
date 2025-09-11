'use client';

import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  defineKeyTerm,
  type DefineKeyTermOutput,
} from '@/ai/flows/define-key-terms';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

type KeyTermDefinerProps = {
  term: string;
  context: string;
};

export function KeyTermDefiner({ term, context }: KeyTermDefinerProps) {
  const [definition, setDefinition] = useState<DefineKeyTermOutput | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenChange = async (open: boolean) => {
    if (open && !definition && !isLoading) {
      setIsLoading(true);
      setError(null);
      try {
        const result = await defineKeyTerm({ term, context });
        setDefinition(result);
      } catch (e) {
        setError('Failed to fetch definition. Please try again.');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Popover onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          className="p-0 h-auto text-lg font-semibold text-primary decoration-2 decoration-dotted underline-offset-4 hover:text-accent"
        >
          {term}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" side="top" align="center">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none capitalize">{term}</h4>
            <p className="text-sm text-muted-foreground">AI-powered definition</p>
          </div>
          <div className="grid gap-2">
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[220px]" />
              </div>
            )}
            {error && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {definition && (
              <div>
                <p className="text-sm">{definition.definition}</p>
                {definition.relatedSections &&
                  definition.relatedSections.length > 0 && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-xs mb-2">
                        Related Sections
                      </h5>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {definition.relatedSections.map((section, i) => (
                          <li key={i}>{section}</li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
