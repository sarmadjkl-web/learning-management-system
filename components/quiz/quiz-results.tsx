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
    <div className="flex items-center justify-center min-h-screen px-4">
      <Card className="bg-white border-green-100 p-8 max-w-2xl w-full">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className={`h-20 w-20 rounded-full flex items-center justify-center ${
              isPassed
                ? 'bg-green-100'
                : 'bg-orange-100'
            }`}
          >
            <Award
              className={`h-12 w-12 ${
                isPassed ? 'text-green-600' : 'text-orange-600'
              }`}
            />
          </div>
        </div>

        {/* Result Text */}
        <h1
          className={`text-4xl font-bold text-center mb-2 ${
            isPassed ? 'text-green-600' : 'text-orange-600'
          }`}
        >
          {isPassed ? 'Great Job!' : 'Keep Practicing!'}
        </h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          {isPassed
            ? 'You passed the quiz. Excellent work!'
            : `You need ${passingScore}% to pass. Keep learning!`}
        </p>

        {/* Score Display */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 mb-8 border border-green-100">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Your Score</p>
              <p className="text-5xl font-bold text-green-600">{score}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Correct Answers</p>
              <p className="text-5xl font-bold text-teal-600">
                {correctAnswers}/{totalQuestions}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Passing Score</p>
              <p className="text-5xl font-bold text-blue-600">{passingScore}%</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Quiz Performance</span>
            <span className="text-sm font-bold text-green-600">{score}%</span>
          </div>
          <Progress value={score} className="h-3" />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isPassed && (
            <Link href={`/courses/${courseId}/lesson/${lessonId}`} className="block">
              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
                Continue Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          <button
            onClick={() => window.location.reload()}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-green-200 text-gray-700 hover:bg-green-50 transition-colors font-medium"
          >
            <RotateCcw className="h-4 w-4" />
            {isPassed ? 'Retake Quiz' : 'Try Again'}
          </button>
          <Link href={`/courses/${courseId}`} className="block">
            <Button
              variant="outline"
              className="w-full border-green-200 text-gray-700 hover:bg-green-50"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Course
            </Button>
          </Link>
        </div>

        {/* Encouragement */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-sm text-blue-800">
            {isPassed
              ? 'Keep up the great work! You\'re on your way to mastering this course.'
              : 'Review the lesson material and try again. You\'re almost there!'}
          </p>
        </div>
      </Card>
    </div>
  );
}
