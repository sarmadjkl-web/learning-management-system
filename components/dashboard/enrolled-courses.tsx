'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { mockCourseProgress } from '@/lib/data/analytics';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function EnrolledCourses() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Your Enrolled Courses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockCourseProgress.map((course) => (
          <div
            key={course.courseId}
            className="pb-6 border-b border-border last:border-0 last:pb-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground">{course.courseName}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {course.completedLessons} of {course.totalLessons} lessons
                </p>
              </div>
              <p className="text-sm font-bold text-primary">{course.progress}%</p>
            </div>
            <Progress value={course.progress} className="h-2 mb-3" />
            <p className="text-xs text-muted-foreground">{course.hoursSpent} hours spent</p>
          </div>
        ))}

        <Link href="/courses">
          <Button className="w-full">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
