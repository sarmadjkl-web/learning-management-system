'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, ArrowRight, RotateCcw, Home } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  passingScore: number;
  courseId: string;
  lessonId: string;
}

export function QuizResults({
  score,
  totalQuestions,
  correctAnswers,
  passingScore,
  courseId,
  lessonId,
}: QuizResultsProps) {
  const isPassed = score >= passingScore;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-2xl border-border bg-card p-8">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full ${
              isPassed ? 'bg-primary/20' : 'bg-destructive/20'
            }`}
          >
            <Award
              className={`h-12 w-12 ${
                isPassed ? 'text-primary' : 'text-destructive'
              }`}
            />
          </div>
        </div>

        {/* Result Text */}
        <h1
          className={`mb-2 text-center text-4xl font-bold ${
            isPassed ? 'text-primary' : 'text-destructive'
          }`}
        >
          {isPassed ? 'Great Job!' : 'Keep Practicing!'}
        </h1>
        <p className="mb-8 text-center text-lg text-muted-foreground">
          {isPassed
            ? 'You passed the quiz. Excellent work!'
            : `You need ${passingScore}% to pass. Keep learning!`}
        </p>

        {/* Score Display */}
        <div className="mb-8 rounded-lg border border-border bg-secondary p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <p className="mb-2 text-sm text-muted-foreground">Your Score</p>
              <p className="text-5xl font-bold text-primary">{score}%</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-sm text-muted-foreground">Correct Answers</p>
              <p className="text-5xl font-bold text-primary">
                {correctAnswers}/{totalQuestions}
              </p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-sm text-muted-foreground">Passing Score</p>
              <p className="text-5xl font-bold text-primary">{passingScore}%</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Quiz Performance</span>
            <span className="text-sm font-bold text-primary">{score}%</span>
          </div>
          <Progress value={score} className="h-3" />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isPassed && (
            <Link href={`/courses/${courseId}/lesson/${lessonId}`} className="block">
              <Button className="w-full">
                Continue Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          <button
            onClick={() => window.location.reload()}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <RotateCcw className="h-4 w-4" />
            {isPassed ? 'Retake Quiz' : 'Try Again'}
          </button>
          <Link href={`/courses/${courseId}`} className="block">
            <Button
              variant="outline"
              className="w-full border-border text-foreground hover:bg-secondary"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Course
            </Button>
          </Link>
        </div>

        {/* Encouragement */}
        <div className="mt-8 rounded-lg border border-border bg-secondary p-4 text-center">
          <p className="text-sm text-muted-foreground">
            {isPassed
              ? "Keep up the great work! You're on your way to mastering this course."
              : "Review the lesson material and try again. You're almost there!"}
          </p>
        </div>
      </Card>
    </div>
  );
}
