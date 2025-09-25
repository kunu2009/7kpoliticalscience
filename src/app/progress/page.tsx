import { ProgressDashboard } from '@/components/progress-dashboard';

export default function ProgressPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Study Progress</h1>
        <p className="text-muted-foreground">
          Track your learning journey and achievements
        </p>
      </div>
      
      <ProgressDashboard />
    </div>
  );
}