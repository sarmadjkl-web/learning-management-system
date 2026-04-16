'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Lesson } from '@/lib/data/lessons';
import { CheckCircle2, Circle, Lock, MessageSquare, Award } from 'lucide-react';

interface LessonSidebarProps {
  lessons: Lesson[];
  currentLessonId: string;
  courseId: string;
}

export function LessonSidebar({ lessons, currentLessonId, courseId }: LessonSidebarProps) {
  const completedCount = lessons.filter((l) => l.completed).length;
  const progressPercentage = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="space-y-6">
      {/* Course Progress */}
      <Card className="border-border bg-card p-6">
        <h3 className="mb-4 font-semibold text-foreground">Course Progress</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {completedCount} of {lessons.length} lessons
            </span>
            <span className="font-bold text-primary">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </Card>

      {/* Lessons List */}
      <div>
        <h3 className="mb-4 font-semibold text-foreground">Lessons</h3>
        <div className="space-y-2">
          {lessons.map((lesson) => {
            const isCurrent = lesson.id === currentLessonId;
            const isCompleted = lesson.completed;

            return (
              <Link key={lesson.id} href={`/courses/${courseId}/lesson/${lesson.id}`}>
                <button
                  className={`flex w-full items-start gap-3 rounded-lg p-3 transition-all ${
                    isCurrent
                      ? 'border border-primary/20 bg-primary/10'
                      : 'border border-transparent hover:bg-secondary'
                  }`}
                >
                  <div className="mt-1 flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={`line-clamp-2 text-sm font-medium ${
                        isCurrent ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {lesson.order}. {lesson.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{lesson.duration} min</p>
                  </div>
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Lesson Features */}
      <Card className="border-border bg-secondary p-6">
        <h3 className="mb-4 font-semibold text-foreground">In This Lesson</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-foreground">
            <Award className="h-4 w-4 flex-shrink-0 text-primary" />
            <span>Interactive quiz included</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <MessageSquare className="h-4 w-4 flex-shrink-0 text-primary" />
            <span>Discussion forum available</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
            <span>Certificate upon completion</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
