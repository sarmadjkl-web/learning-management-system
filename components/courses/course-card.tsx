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
  const levelColor = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-teal-100 text-teal-800',
    Advanced: 'bg-blue-100 text-blue-800',
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-green-100 bg-white h-full flex flex-col">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-100 to-teal-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-4 right-4 ${levelColor[course.level]}`}>
          {course.level}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category */}
        <p className="text-xs text-teal-600 font-semibold uppercase mb-2">{course.category}</p>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        {/* Instructor */}
        <p className="text-xs text-gray-600 mb-4">By <span className="font-semibold">{course.instructor}</span></p>

        {/* Progress Bar (if enrolled) */}
        {course.enrolled && course.progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-700">Progress</span>
              <span className="text-xs font-bold text-green-600">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-green-100">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-teal-600" />
            <span>{course.enrollments.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-green-600" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link href={`/courses/${course.id}`}>
            <Button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
              {course.enrolled ? 'Continue Learning' : 'Enroll Now'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
