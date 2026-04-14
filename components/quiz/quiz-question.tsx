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
    <Card className="bg-white border-green-100 p-8">
      {/* Question Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-teal-600">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="h-2 bg-gray-200 rounded-full w-32 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-teal-600 transition-all"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          const isUserAnswer = userAnswer === index;

          let className =
            'relative p-4 rounded-lg border-2 cursor-pointer transition-all text-left';

          if (isRevealed) {
            if (isCorrect) {
              className +=
                ' border-green-500 bg-green-50 ring-2 ring-green-200';
            } else if (isUserAnswer && !isCorrect) {
              className += ' border-red-500 bg-red-50 ring-2 ring-red-200';
            } else {
              className += ' border-gray-200 bg-gray-50';
            }
          } else {
            className += isSelected
              ? ' border-green-500 bg-green-50'
              : ' border-gray-200 hover:border-green-300 hover:bg-green-50';
          }

          return (
            <button
              key={index}
              onClick={() => !isRevealed && onAnswerSelect(index)}
              disabled={isRevealed}
              className={className}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                      isRevealed
                        ? isCorrect
                          ? 'border-green-600 bg-green-600'
                          : isUserAnswer && !isCorrect
                          ? 'border-red-600 bg-red-600'
                          : 'border-gray-300'
                        : isSelected
                        ? 'border-green-600 bg-green-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {isSelected || (isRevealed && (isCorrect || isUserAnswer)) ? (
                      <div className="h-2 w-2 bg-white rounded-full" />
                    ) : null}
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-900">{option}</p>
                  {isRevealed && isCorrect && (
                    <p className="text-xs text-green-600 font-semibold mt-1">Correct Answer</p>
                  )}
                  {isRevealed && isUserAnswer && !isCorrect && (
                    <p className="text-xs text-red-600 font-semibold mt-1">Your Answer</p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation (shown after answer is revealed) */}
      {isRevealed && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-semibold text-blue-900 mb-2">Explanation</p>
          <p className="text-sm text-blue-800">{question.explanation}</p>
        </div>
      )}
    </Card>
  );
}
