import { Card, CardContent } from '@/components/ui/card';
import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardContent className="p-6 flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <Loader className="h-10 w-10 animate-spin" />
            <p className="text-lg font-medium">Loading Chapter...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
