// Progress and completion tracking system
export interface CompletionData {
  flashcards: {
    completed: string[];
    totalCount: number;
    lastStudied: string | null;
  };
  mcqs: {
    completed: string[];
    correctAnswers: number;
    totalAttempts: number;
    lastAttempted: string | null;
  };
  videos: {
    watched: string[];
    watchTime: { [videoId: string]: number }; // in seconds
    totalCount: number;
    lastWatched: string | null;
  };
  reels: {
    viewed: string[];
    totalCount: number;
    lastViewed: string | null;
  };
  overallProgress: number; // percentage 0-100
  studyStreak: number; // consecutive days
  lastStudyDate: string | null;
  achievements: string[];
}

export interface ChapterProgress {
  chapterId: string;
  completion: CompletionData;
  startedAt: string;
  lastUpdated: string;
  isCompleted: boolean;
  completedAt: string | null;
}

class ProgressTracker {
  private static instance: ProgressTracker;
  private progressKey = '7k-polsci-progress';

  private constructor() {}

  static getInstance(): ProgressTracker {
    if (!ProgressTracker.instance) {
      ProgressTracker.instance = new ProgressTracker();
    }
    return ProgressTracker.instance;
  }

  // Get progress for a specific chapter
  getChapterProgress(chapterId: string): ChapterProgress | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const data = localStorage.getItem(this.progressKey);
      if (!data) return null;
      
      const progress = JSON.parse(data);
      return progress[chapterId] || null;
    } catch (error) {
      console.error('Error loading progress:', error);
      return null;
    }
  }

  // Initialize progress for a chapter
  initializeChapterProgress(chapterId: string, totalCounts: {
    flashcards: number;
    mcqs: number;
    videos: number;
    reels: number;
  }): ChapterProgress {
    const now = new Date().toISOString();
    const initialProgress: ChapterProgress = {
      chapterId,
      completion: {
        flashcards: {
          completed: [],
          totalCount: totalCounts.flashcards,
          lastStudied: null
        },
        mcqs: {
          completed: [],
          correctAnswers: 0,
          totalAttempts: 0,
          lastAttempted: null
        },
        videos: {
          watched: [],
          watchTime: {},
          totalCount: totalCounts.videos,
          lastWatched: null
        },
        reels: {
          viewed: [],
          totalCount: totalCounts.reels,
          lastViewed: null
        },
        overallProgress: 0,
        studyStreak: 0,
        lastStudyDate: null,
        achievements: []
      },
      startedAt: now,
      lastUpdated: now,
      isCompleted: false,
      completedAt: null
    };

    this.saveChapterProgress(initialProgress);
    return initialProgress;
  }

  // Save chapter progress
  private saveChapterProgress(chapterProgress: ChapterProgress): void {
    if (typeof window === 'undefined') return;

    try {
      const data = localStorage.getItem(this.progressKey);
      const allProgress = data ? JSON.parse(data) : {};
      allProgress[chapterProgress.chapterId] = chapterProgress;
      localStorage.setItem(this.progressKey, JSON.stringify(allProgress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }

  // Update flashcard completion
  markFlashcardCompleted(chapterId: string, flashcardId: string): void {
    const progress = this.getChapterProgress(chapterId);
    if (!progress) return;

    if (!progress.completion.flashcards.completed.includes(flashcardId)) {
      progress.completion.flashcards.completed.push(flashcardId);
      progress.completion.flashcards.lastStudied = new Date().toISOString();
      this.updateProgress(progress);
    }
  }

  // Update MCQ completion
  markMCQCompleted(chapterId: string, mcqId: string, isCorrect: boolean): void {
    const progress = this.getChapterProgress(chapterId);
    if (!progress) return;

    if (!progress.completion.mcqs.completed.includes(mcqId)) {
      progress.completion.mcqs.completed.push(mcqId);
    }
    
    progress.completion.mcqs.totalAttempts += 1;
    if (isCorrect) {
      progress.completion.mcqs.correctAnswers += 1;
    }
    progress.completion.mcqs.lastAttempted = new Date().toISOString();
    this.updateProgress(progress);
  }

  // Update video watch progress
  updateVideoWatchTime(chapterId: string, videoId: string, watchTimeSeconds: number): void {
    const progress = this.getChapterProgress(chapterId);
    if (!progress) return;

    progress.completion.videos.watchTime[videoId] = Math.max(
      progress.completion.videos.watchTime[videoId] || 0,
      watchTimeSeconds
    );

    // Mark as watched if watched more than 80% (assuming 1500 seconds = 25 min average)
    const averageVideoLength = 1500; // 25 minutes in seconds
    if (watchTimeSeconds > averageVideoLength * 0.8) {
      if (!progress.completion.videos.watched.includes(videoId)) {
        progress.completion.videos.watched.push(videoId);
      }
    }

    progress.completion.videos.lastWatched = new Date().toISOString();
    this.updateProgress(progress);
  }

  // Mark reel as viewed
  markReelViewed(chapterId: string, reelId: string): void {
    const progress = this.getChapterProgress(chapterId);
    if (!progress) return;

    if (!progress.completion.reels.viewed.includes(reelId)) {
      progress.completion.reels.viewed.push(reelId);
      progress.completion.reels.lastViewed = new Date().toISOString();
      this.updateProgress(progress);
    }
  }

  // Calculate and update overall progress
  private updateProgress(chapterProgress: ChapterProgress): void {
    const completion = chapterProgress.completion;
    
    // Calculate progress percentages for each section
    const flashcardProgress = completion.flashcards.totalCount > 0 
      ? (completion.flashcards.completed.length / completion.flashcards.totalCount) * 100 
      : 0;
    
    const mcqProgress = completion.mcqs.completed.length * 10; // Each MCQ worth 10 points
    
    const videoProgress = completion.videos.totalCount > 0
      ? (completion.videos.watched.length / completion.videos.totalCount) * 100
      : 0;
    
    const reelProgress = completion.reels.totalCount > 0
      ? (completion.reels.viewed.length / completion.reels.totalCount) * 100
      : 0;

    // Weighted average (flashcards 30%, videos 40%, mcqs 20%, reels 10%)
    const overallProgress = (
      flashcardProgress * 0.3 +
      videoProgress * 0.4 +
      Math.min(mcqProgress, 100) * 0.2 +
      reelProgress * 0.1
    );

    chapterProgress.completion.overallProgress = Math.round(overallProgress);
    chapterProgress.lastUpdated = new Date().toISOString();

    // Check if chapter is completed (80% or more)
    if (overallProgress >= 80 && !chapterProgress.isCompleted) {
      chapterProgress.isCompleted = true;
      chapterProgress.completedAt = new Date().toISOString();
      this.checkAchievements(chapterProgress);
    }

    // Update study streak
    this.updateStudyStreak(chapterProgress);

    this.saveChapterProgress(chapterProgress);
  }

  // Update study streak
  private updateStudyStreak(chapterProgress: ChapterProgress): void {
    const now = new Date();
    const today = now.toDateString();
    const lastStudyDate = chapterProgress.completion.lastStudyDate;

    if (!lastStudyDate) {
      chapterProgress.completion.studyStreak = 1;
      chapterProgress.completion.lastStudyDate = today;
      return;
    }

    const lastStudy = new Date(lastStudyDate);
    const daysDiff = Math.floor((now.getTime() - lastStudy.getTime()) / (1000 * 60 * 60 * 24));

    if (daysDiff === 1) {
      // Consecutive day
      chapterProgress.completion.studyStreak += 1;
      chapterProgress.completion.lastStudyDate = today;
    } else if (daysDiff === 0) {
      // Same day, no change
      return;
    } else {
      // Streak broken
      chapterProgress.completion.studyStreak = 1;
      chapterProgress.completion.lastStudyDate = today;
    }
  }

  // Check and award achievements
  private checkAchievements(chapterProgress: ChapterProgress): void {
    const achievements = chapterProgress.completion.achievements;

    // First chapter completion
    if (chapterProgress.isCompleted && !achievements.includes('first-chapter')) {
      achievements.push('first-chapter');
    }

    // Perfect MCQ score
    const mcqs = chapterProgress.completion.mcqs;
    if (mcqs.totalAttempts > 0 && mcqs.correctAnswers === mcqs.totalAttempts && !achievements.includes('perfect-score')) {
      achievements.push('perfect-score');
    }

    // Study streak achievements
    const streak = chapterProgress.completion.studyStreak;
    if (streak >= 7 && !achievements.includes('week-streak')) {
      achievements.push('week-streak');
    }
    if (streak >= 30 && !achievements.includes('month-streak')) {
      achievements.push('month-streak');
    }

    // Video completion
    const videoCompletion = chapterProgress.completion.videos;
    if (videoCompletion.watched.length === videoCompletion.totalCount && videoCompletion.totalCount > 0 && !achievements.includes('video-master')) {
      achievements.push('video-master');
    }
  }

  // Get all chapters progress
  getAllProgress(): { [chapterId: string]: ChapterProgress } {
    if (typeof window === 'undefined') return {};

    try {
      const data = localStorage.getItem(this.progressKey);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Error loading all progress:', error);
      return {};
    }
  }

  // Get completion statistics
  getCompletionStats(): {
    totalChapters: number;
    completedChapters: number;
    overallProgress: number;
    totalStudyTime: number;
    currentStreak: number;
  } {
    const allProgress = this.getAllProgress();
    const chapters = Object.values(allProgress);
    
    const completedChapters = chapters.filter(ch => ch.isCompleted).length;
    const totalProgress = chapters.reduce((sum, ch) => sum + ch.completion.overallProgress, 0);
    const averageProgress = chapters.length > 0 ? totalProgress / chapters.length : 0;
    
    // Calculate total watch time from videos
    const totalWatchTime = chapters.reduce((total, ch) => {
      const watchTimes = Object.values(ch.completion.videos.watchTime);
      return total + watchTimes.reduce((sum, time) => sum + time, 0);
    }, 0);

    const currentStreak = chapters.length > 0 
      ? Math.max(...chapters.map(ch => ch.completion.studyStreak))
      : 0;

    return {
      totalChapters: chapters.length,
      completedChapters,
      overallProgress: Math.round(averageProgress),
      totalStudyTime: Math.round(totalWatchTime / 60), // in minutes
      currentStreak
    };
  }

  // Clear all progress (for reset)
  clearAllProgress(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.progressKey);
  }
}

export const progressTracker = ProgressTracker.getInstance();