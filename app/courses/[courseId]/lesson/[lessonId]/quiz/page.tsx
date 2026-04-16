'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuizQuestionComponent } from '@/components/quiz/quiz-question';
import { QuizResults } from '@/components/quiz/quiz-results';
import { getQuizByLessonId } from '@/lib/data/quizzes';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function QuizPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const lessonId = params.lessonId as string;

  const quiz = getQuizByLessonId(lessonId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(quiz?.questions.length || 0).fill(null)
  );
  const [revealedAnswers, setRevealedAnswers] = useState<boolean[]>(
    new Array(quiz?.questions.length || 0).fill(false)
  );
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!quiz) {
    return <div className="p-8 text-center text-muted-foreground">Quiz not found</div>;
  }

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmitAnswer = () => {
    const newRevealedAnswers = [...revealedAnswers];
    newRevealedAnswers[currentQuestion] = true;
    setRevealedAnswers(newRevealedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleCompleteQuiz();
    }
  };

  const handleCompleteQuiz = () => {
    setQuizCompleted(true);
  };

  const calculateScore = () => {
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correctAnswer) {
        correctCount++;
      }
    });
    return Math.round((correctCount / quiz.questions.length) * 100);
  };

  const question = quiz.questions[currentQuestion];
  const isAnswered = userAnswers[currentQuestion] !== null;
  const isRevealed = revealedAnswers[currentQuestion];
  const score = calculateScore();
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === quiz.questions[index].correctAnswer
  ).length;

  if (quizCompleted) {
    return (
      <QuizResults
        score={score}
        totalQuestions={quiz.questions.length}
        correctAnswers={correctAnswers}
        passingScore={quiz.passingScore}
        courseId={courseId}
        lessonId={lessonId}
      />
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/courses/${courseId}/lesson/${lessonId}`}
          className="mb-4 flex items-center gap-2 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Lesson</span>
        </Link>
        <h1 className="text-3xl font-bold text-foreground">{quiz.title}</h1>
        <p className="mt-2 text-muted-foreground">{quiz.description}</p>
      </div>

      {/* Quiz Container */}
      <div className="mx-auto max-w-3xl">
        {/* Question */}
        <QuizQuestionComponent
          question={question}
          questionNumber={currentQuestion + 1}
          totalQuestions={quiz.questions.length}
          selectedAnswer={userAnswers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          isRevealed={isRevealed}
          userAnswer={userAnswers[currentQuestion]}
        />

        {/* Navigation */}
        <div className="mt-8 space-y-4">
          {!isRevealed ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={!isAnswered}
              className="w-full"
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              className="w-full"
            >
              {currentQuestion === quiz.questions.length - 1
                ? 'Complete Quiz'
                : 'Next Question'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}

          {/* Question Navigation */}
          <Card className="border-border bg-card p-6">
            <p className="mb-4 text-sm font-semibold text-foreground">Jump to Question</p>
            <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestion(index);
                    setRevealedAnswers(new Array(quiz.questions.length).fill(false));
                  }}
                  className={`h-10 rounded-lg font-semibold transition-all ${
                    index === currentQuestion
                      ? 'bg-primary text-primary-foreground ring-2 ring-primary/30'
                      : userAnswers[index] !== null
                      ? 'bg-primary/20 text-primary hover:bg-primary/30'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
