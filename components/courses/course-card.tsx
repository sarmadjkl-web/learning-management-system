'use client';

import Link from 'next/link';
import { Course } from '@/lib/data/courses';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Star, Users, BookOpen, Clock, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const levelColor: Record<string, string> = {
    Beginner: 'bg-accent text-accent-foreground hover:bg-accent/80',
    Intermediate: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    Advanced: 'bg-primary text-primary-foreground hover:bg-primary/80',
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden border-border bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
        <Badge className={`absolute right-4 top-4 ${levelColor[course.level] || 'bg-primary text-primary-foreground hover:bg-primary/80'}`}>
          {course.level}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase text-primary">{course.category}</p>

        {/* Title */}
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-foreground">{course.title}</h3>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>

        {/* Instructor */}
        <p className="mb-4 text-xs text-muted-foreground">By <span className="font-semibold text-foreground">{course.instructor}</span></p>

        {/* Progress Bar (if enrolled) */}
        {course.enrolled && course.progress > 0 && (
          <div className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-foreground">Progress</span>
              <span className="text-xs font-bold text-primary">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}

        {/* Stats */}
        <div className="mb-4 flex items-center gap-4 border-b border-border pb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-primary" />
            <span>{course.enrollments.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link href={`/courses/${course.id}`}>
            <Button className="w-full">
              {course.enrolled ? 'Continue Learning' : 'Enroll Now'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
