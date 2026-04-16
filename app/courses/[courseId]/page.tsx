"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockCourses } from "@/lib/data/courses";
import { getAllLessonsForCourse } from "@/lib/data/lessons";
import {
  ArrowLeft,
  Clock,
  Star,
  Users,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = mockCourses.find((c) => c.id === courseId);
  const lessons = getAllLessonsForCourse(courseId);

  if (!course) {
    return <div className="p-8 text-center text-muted-foreground">Course not found</div>;
  }

  const levelColor = {
    Beginner: "bg-primary text-primary-foreground",
    Intermediate: "bg-secondary text-secondary-foreground",
    Advanced: "bg-accent text-accent-foreground",
  };

  return (
    <div className="p-8">
      {/* Header */}
      <Link
        href="/courses"
        className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Courses</span>
      </Link>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Course Info */}
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden mb-6 h-96 bg-muted">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          <Badge className={`${levelColor[course.level as keyof typeof levelColor]} mb-4`}>
            {course.level}
          </Badge>

          <h1 className="text-4xl font-bold text-foreground mb-4">
            {course.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{course.description}</p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-border">
            <div>
              <p className="text-sm text-muted-foreground">Instructor</p>
              <p className="text-lg font-semibold text-foreground">
                {course.instructor}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Rating</p>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <p className="text-lg font-semibold text-foreground">
                  {course.rating}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Students</p>
              <p className="text-lg font-semibold text-foreground">
                {course.enrollments.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="text-lg font-semibold text-foreground">
                {course.duration}
              </p>
            </div>
          </div>

          {/* Progress Section (if enrolled) */}
          {course.enrolled && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Your Progress
              </h2>
              <div className="space-y-3 pb-8 border-b border-border">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">
                    Overall Progress
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {course.progress}%
                  </span>
                </div>
                <Progress value={course.progress} className="h-3" />
              </div>
            </div>
          )}

          {/* Lessons */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Course Content
            </h2>
            <div className="space-y-3">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/courses/${courseId}/lesson/${lesson.id}`}
                >
                  <Card className="bg-card border-border hover:border-primary/50 hover:bg-secondary hover:shadow-lg transition-all p-4 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {lesson.completed ? (
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        ) : (
                          <PlayCircle className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {lesson.order}. {lesson.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {lesson.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                              <Clock className="h-4 w-4" />
                              <span>{lesson.duration} min</span>
                            </div>
                            {lesson.completed && (
                              <Badge variant="secondary" className="bg-primary/20 text-primary">
                                Completed
                              </Badge>
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
          <Card className="bg-card border-border sticky top-20 overflow-hidden">
            <div className="bg-primary p-6 text-primary-foreground">
              <h3 className="text-lg font-bold mb-2">Enroll Now</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Start learning at your own pace
              </p>
              <Button className="w-full bg-background text-primary hover:bg-background/90 font-semibold">
                {course.enrolled ? "Continue Learning" : "Enroll Now"}
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm text-foreground font-medium mb-2">
                  Course Info
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Level</span>
                    <span className="font-semibold text-foreground">
                      {course.level}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Lessons</span>
                    <span className="font-semibold text-foreground">
                      {lessons.length}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-semibold text-foreground">
                      {course.category}
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-foreground font-medium mb-2">
                  What You&apos;ll Learn
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
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
