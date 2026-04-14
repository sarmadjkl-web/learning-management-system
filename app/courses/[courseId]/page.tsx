'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { mockCourses } from '@/lib/data/courses';
import { getAllLessonsForCourse } from '@/lib/data/lessons';
import { ArrowLeft, BookOpen, Clock, Star, Users, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = mockCourses.find((c) => c.id === courseId);
  const lessons = getAllLessonsForCourse(courseId);

  if (!course) {
    return <div className="p-8 text-center">Course not found</div>;
  }

  const levelColor = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-teal-100 text-teal-800',
    Advanced: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="p-8">
      {/* Header */}
      <Link href="/courses" className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Courses</span>
      </Link>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Course Info */}
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden mb-6 h-96 bg-gradient-to-br from-green-100 to-teal-100">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          <Badge className={`${levelColor[course.level]} mb-4`}>{course.level}</Badge>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="text-xl text-gray-700 mb-6">{course.description}</p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-green-100">
            <div>
              <p className="text-sm text-gray-600">Instructor</p>
              <p className="text-lg font-semibold text-gray-900">{course.instructor}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Rating</p>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <p className="text-lg font-semibold text-gray-900">{course.rating}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Students</p>
              <p className="text-lg font-semibold text-gray-900">{course.enrollments.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="text-lg font-semibold text-gray-900">{course.duration}</p>
            </div>
          </div>

          {/* Progress Section (if enrolled) */}
          {course.enrolled && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Progress</h2>
              <div className="space-y-3 pb-8 border-b border-green-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Overall Progress</span>
                  <span className="text-2xl font-bold text-green-600">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-3" />
              </div>
            </div>
          )}

          {/* Lessons */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
            <div className="space-y-3">
              {lessons.map((lesson) => (
                <Link key={lesson.id} href={`/courses/${courseId}/lesson/${lesson.id}`}>
                  <Card className="bg-white border-green-100 hover:border-green-300 hover:shadow-lg transition-all p-4 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {lesson.completed ? (
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                        ) : (
                          <PlayCircle className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {lesson.order}. {lesson.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                              <Clock className="h-4 w-4" />
                              <span>{lesson.duration} min</span>
                            </div>
                            {lesson.completed && (
                              <Badge className="bg-green-100 text-green-800">Completed</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-white border-green-100 sticky top-20 overflow-hidden">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Enroll Now</h3>
              <p className="text-sm text-green-50 mb-4">Start learning at your own pace</p>
              <Button className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold">
                {course.enrolled ? 'Continue Learning' : 'Enroll Now'}
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-2">Course Info</p>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold text-gray-900">{course.level}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Lessons</span>
                    <span className="font-semibold text-gray-900">{lessons.length}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-semibold text-gray-900">{course.category}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-green-100">
                <p className="text-sm text-gray-600 font-medium mb-2">What You&apos;ll Learn</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Master core concepts</li>
                  <li>✓ Build real projects</li>
                  <li>✓ Get hands-on practice</li>
                  <li>✓ Earn a certificate</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
