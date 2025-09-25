'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { progressTracker, type ChapterProgress } from '@/lib/progress';
import { Trophy, BookOpen, Video, Brain, Zap, Clock, Target, Award } from 'lucide-react';

export function ProgressDashboard() {
  const [allProgress, setAllProgress] = useState<{ [key: string]: ChapterProgress }>({});
  const [stats, setStats] = useState({
    totalChapters: 0,
    completedChapters: 0,
    overallProgress: 0,
    totalStudyTime: 0,
    currentStreak: 0
  });

  useEffect(() => {
    loadProgress();
    
    // Set up interval to refresh progress every 30 seconds
    const interval = setInterval(loadProgress, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadProgress = () => {
    const progress = progressTracker.getAllProgress();
    const completionStats = progressTracker.getCompletionStats();
    setAllProgress(progress);
    setStats(completionStats);
  };

  const getAchievementInfo = (achievement: string) => {
    const achievements = {
      'first-chapter': { icon: Trophy, label: 'First Chapter Complete', color: 'bg-yellow-500' },
      'perfect-score': { icon: Target, label: 'Perfect MCQ Score', color: 'bg-green-500' },
      'week-streak': { icon: Zap, label: '7-Day Study Streak', color: 'bg-blue-500' },
      'month-streak': { icon: Award, label: '30-Day Study Streak', color: 'bg-purple-500' },
      'video-master': { icon: Video, label: 'Video Master', color: 'bg-red-500' },
    };
    return achievements[achievement as keyof typeof achievements] || { icon: Trophy, label: achievement, color: 'bg-gray-500' };
  };

  const allAchievements = Object.values(allProgress).flatMap(progress => 
    progress.completion.achievements.map(achievement => ({
      achievement,
      chapterId: progress.chapterId,
      ...getAchievementInfo(achievement)
    }))
  );

  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.overallProgress}%</div>
            <Progress value={stats.overallProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Chapters</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedChapters}/{stats.totalChapters}</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalChapters - stats.completedChapters} remaining
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalStudyTime}m</div>
            <p className="text-xs text-muted-foreground">
              Total video watch time
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.currentStreak}</div>
            <p className="text-xs text-muted-foreground">
              {stats.currentStreak === 1 ? 'day' : 'days'} in a row
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chapter Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Chapter Progress</CardTitle>
          <CardDescription>Your learning progress across all chapters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(allProgress).length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Start studying a chapter to see your progress here!
              </p>
            ) : (
              Object.entries(allProgress).map(([chapterId, progress]) => (
                <div key={chapterId} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold capitalize">
                        {chapterId.replace('-', ' ')}
                      </h3>
                      {progress.isCompleted && (
                        <Badge variant="default" className="bg-green-600">
                          <Trophy className="h-3 w-3 mr-1" />
                          Complete
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm font-medium">
                      {progress.completion.overallProgress}%
                    </span>
                  </div>
                  <Progress value={progress.completion.overallProgress} />
                  
                  {/* Detailed breakdown */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Brain className="h-3 w-3" />
                      Flashcards: {progress.completion.flashcards.completed.length}/{progress.completion.flashcards.totalCount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="h-3 w-3" />
                      Videos: {progress.completion.videos.watched.length}/{progress.completion.videos.totalCount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      MCQs: {progress.completion.mcqs.completed.length} attempted
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Reels: {progress.completion.reels.viewed.length}/{progress.completion.reels.totalCount}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      {allAchievements.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievements
            </CardTitle>
            <CardDescription>Your learning milestones and accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {allAchievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className={`p-2 rounded-full ${achievement.color} text-white`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{achievement.label}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {achievement.chapterId.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Study Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Study Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Study consistently every day to maintain your streak</p>
            <p>• Complete all flashcards before moving to videos</p>
            <p>• Test your knowledge with MCQs after watching videos</p>
            <p>• Use the download option for videos if they don't play in browser</p>
            <p>• Aim for 80% completion to unlock the next chapter</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}