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
      <Card className="bg-white border-green-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Course Progress</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {completedCount} of {lessons.length} lessons
            </span>
            <span className="font-bold text-green-600">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </Card>

      {/* Lessons List */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Lessons</h3>
        <div className="space-y-2">
          {lessons.map((lesson) => {
            const isCurrent = lesson.id === currentLessonId;
            const isCompleted = lesson.completed;

            return (
              <Link key={lesson.id} href={`/courses/${courseId}/lesson/${lesson.id}`}>
                <button
                  className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-r from-green-100 to-teal-100 border border-green-300'
                      : 'hover:bg-green-50 border border-transparent'
                  }`}
                >
                  <div className="flex-shrink-0 mt-1">
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={`text-sm font-medium line-clamp-2 ${
                        isCurrent ? 'text-green-700' : 'text-gray-900'
                      }`}
                    >
                      {lesson.order}. {lesson.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{lesson.duration} min</p>
                  </div>
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Lesson Features */}
      <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">In This Lesson</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <Award className="h-4 w-4 text-green-600 flex-shrink-0" />
            <span>Interactive quiz included</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MessageSquare className="h-4 w-4 text-teal-600 flex-shrink-0" />
            <span>Discussion forum available</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
            <span>Certificate upon completion</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
