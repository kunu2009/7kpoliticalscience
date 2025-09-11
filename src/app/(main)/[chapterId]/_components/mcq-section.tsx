'use client';

import { useState, useMemo } from 'react';
import type { MCQ } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

export function McqSection({ mcqs }: { mcqs: MCQ[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentMcq = useMemo(() => mcqs[currentIndex], [mcqs, currentIndex]);
  const progress = useMemo(() => ((currentIndex) / mcqs.length) * 100, [currentIndex, mcqs.length]);

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;
    setIsAnswered(true);
    if (selectedAnswer === currentMcq.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    if (currentIndex < mcqs.length - 1) {
        setCurrentIndex((prev) => prev + 1);
    } else {
        // Quiz finished
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
  }

  if (currentIndex >= mcqs.length) {
    return (
        <Card className="flex flex-col items-center justify-center p-8 text-center">
            <CardHeader>
                <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
                <CardDescription>You've finished the quiz for this chapter.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-4xl font-bold">Your Score: {score} / {mcqs.length}</p>
            </CardContent>
            <CardFooter>
                <Button onClick={resetQuiz}>Take Again</Button>
            </CardFooter>
        </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="space-y-2">
            <div className="flex justify-between items-baseline">
                <p className="text-sm font-medium text-muted-foreground">Question {currentIndex + 1} of {mcqs.length}</p>
                <p className="text-sm font-bold">Score: {score}</p>
            </div>
            <Progress value={progress} aria-label={`${Math.round(progress)}% of quiz complete`} />
        </div>
        <CardTitle className="pt-4">{currentMcq.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup
          value={selectedAnswer ?? ''}
          onValueChange={setSelectedAnswer}
          disabled={isAnswered}
        >
          {currentMcq.options.map((option, index) => {
            const isCorrect = option === currentMcq.correctAnswer;
            const isSelected = option === selectedAnswer;
            return (
              <div
                key={index}
                className={cn(
                    "flex items-center space-x-3 rounded-md border p-4 transition-all",
                    isAnswered && isCorrect && "border-green-500 bg-green-500/10",
                    isAnswered && isSelected && !isCorrect && "border-red-500 bg-red-500/10"
                )}
              >
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
                {isAnswered && isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
              </div>
            );
          })}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        {isAnswered ? (
          <Button onClick={handleNext} className="w-full">
            {currentIndex === mcqs.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        ) : (
          <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer} className="w-full">
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
