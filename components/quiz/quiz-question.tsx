'use client';

import { Card } from '@/components/ui/card';
import { QuizQuestion } from '@/lib/data/quizzes';
import { Radio } from 'lucide-react';

interface QuizQuestionComponentProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (optionIndex: number) => void;
  isRevealed: boolean;
  userAnswer: number | null;
}

export function QuizQuestionComponent({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  isRevealed,
  userAnswer,
}: QuizQuestionComponentProps) {
  return (
    <Card className="border-border bg-card p-8">
      {/* Question Header */}
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="h-2 w-32 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground">{question.question}</h2>
      </div>

      {/* Options */}
      <div className="mb-6 space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          const isUserAnswer = userAnswer === index;

          let className =
            'relative p-4 rounded-lg border-2 cursor-pointer transition-all text-left w-full';

          if (isRevealed) {
            if (isCorrect) {
              className +=
                ' border-primary bg-primary/10 ring-2 ring-primary/20';
            } else if (isUserAnswer && !isCorrect) {
              className += ' border-destructive bg-destructive/10 ring-2 ring-destructive/20';
            } else {
              className += ' border-border bg-muted';
            }
          } else {
            className += isSelected
              ? ' border-primary bg-primary/10'
              : ' border-border hover:border-primary/50 hover:bg-primary/5';
          }

          return (
            <button
              key={index}
              onClick={() => !isRevealed && onAnswerSelect(index)}
              disabled={isRevealed}
              className={className}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      isRevealed
                        ? isCorrect
                          ? 'border-primary bg-primary'
                          : isUserAnswer && !isCorrect
                          ? 'border-destructive bg-destructive'
                          : 'border-muted-foreground'
                        : isSelected
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}
                  >
                    {isSelected || (isRevealed && (isCorrect || isUserAnswer)) ? (
                      <div className="h-2 w-2 rounded-full bg-background" />
                    ) : null}
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-foreground">{option}</p>
                  {isRevealed && isCorrect && (
                    <p className="mt-1 text-xs font-semibold text-primary">Correct Answer</p>
                  )}
                  {isRevealed && isUserAnswer && !isCorrect && (
                    <p className="mt-1 text-xs font-semibold text-destructive">Your Answer</p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation (shown after answer is revealed) */}
      {isRevealed && (
        <div className="mt-6 rounded-lg border border-border bg-secondary p-4">
          <p className="mb-2 text-sm font-semibold text-foreground">Explanation</p>
          <p className="text-sm text-muted-foreground">{question.explanation}</p>
        </div>
      )}
    </Card>
  );
}
