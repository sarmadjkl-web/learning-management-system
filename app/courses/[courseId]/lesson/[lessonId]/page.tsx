'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VideoPlayer } from '@/components/lesson/video-player';
import { LessonSidebar } from '@/components/lesson/lesson-sidebar';
import { LessonTranscript } from '@/components/lesson/lesson-transcript';
import { getAllLessonsForCourse, getLessonById } from '@/lib/data/lessons';
import { getQuizByLessonId } from '@/lib/data/quizzes';
import { getDiscussionsByLessonId } from '@/lib/data/discussions';
import { ArrowLeft, ArrowRight, MessageCircle, Award } from 'lucide-react';

export default function LessonPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const lessonId = params.lessonId as string;

  const lesson = getLessonById(lessonId);
  const allLessons = getAllLessonsForCourse(courseId);
  const quiz = getQuizByLessonId(lessonId);
  const discussions = getDiscussionsByLessonId(lessonId);

  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  if (!lesson) {
    return <div className="p-8 text-center text-muted-foreground">Lesson not found</div>;
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link href={`/courses/${courseId}`} className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Course</span>
        </Link>
        <h1 className="text-3xl font-bold text-foreground">{lesson.title}</h1>
        <p className="text-muted-foreground mt-2">{lesson.description}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Video Player */}
          <VideoPlayer
            videoUrl={lesson.videoUrl}
            title={lesson.title}
            duration={lesson.duration}
            progress={lesson.progress}
          />

          {/* Tabs */}
          <Tabs defaultValue="transcript" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary border border-border">
              <TabsTrigger value="transcript" className="data-[state=active]:bg-background data-[state=active]:text-primary">
                Transcript
              </TabsTrigger>
              <TabsTrigger value="discussions" className="data-[state=active]:bg-background data-[state=active]:text-primary">
                <MessageCircle className="h-4 w-4 mr-2" />
                Discussions
              </TabsTrigger>
              {quiz && (
                <TabsTrigger value="quiz" className="data-[state=active]:bg-background data-[state=active]:text-primary">
                  <Award className="h-4 w-4 mr-2" />
                  Quiz
                </TabsTrigger>
              )}
            </TabsList>

            {/* Transcript Tab */}
            <TabsContent value="transcript" className="space-y-4">
              <LessonTranscript transcript={lesson.transcript} />
            </TabsContent>

            {/* Discussions Tab */}
            <TabsContent value="discussions" className="space-y-4">
              <Card className="bg-card border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Discussion Threads</h3>
                {discussions.length > 0 ? (
                  <div className="space-y-4">
                    {discussions.map((thread) => (
                      <Link key={thread.id} href={`/discussions/${thread.id}`}>
                        <div className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-all cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{thread.title}</h4>
                            {thread.pinned && (
                              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                                Pinned
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{thread.content}</p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                            <span>{thread.replies} replies</span>
                            <span>{thread.views} views</span>
                            <span>{thread.likes} likes</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No discussions yet. Be the first to start one!</p>
                )}
              </Card>
            </TabsContent>

            {/* Quiz Tab */}
            {quiz && (
              <TabsContent value="quiz" className="space-y-4">
                <Card className="bg-card border-border p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{quiz.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{quiz.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 py-4 border-y border-border">
                      <div>
                        <p className="text-sm text-muted-foreground">Questions</p>
                        <p className="text-2xl font-bold text-primary">{quiz.questions.length}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Passing Score</p>
                        <p className="text-2xl font-bold text-primary">{quiz.passingScore}%</p>
                      </div>
                    </div>

                    {quiz.completed && quiz.score !== null && (
                      <div className="bg-secondary border border-border rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">Your Score</p>
                        <p className="text-2xl font-bold text-primary mt-1">{quiz.score}%</p>
                      </div>
                    )}

                    <Link href={`/courses/${courseId}/lesson/${lessonId}/quiz`}>
                      <Button className="w-full">
                        {quiz.completed ? 'Retake Quiz' : 'Start Quiz'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </TabsContent>
            )}
          </Tabs>

          {/* Navigation */}
          <div className="flex gap-4">
            {previousLesson && (
              <Link href={`/courses/${courseId}/lesson/${previousLesson.id}`} className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-secondary"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Lesson
                </Button>
              </Link>
            )}
            {nextLesson && (
              <Link href={`/courses/${courseId}/lesson/${nextLesson.id}`} className="flex-1">
                <Button className="w-full">
                  Next Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <LessonSidebar lessons={allLessons} currentLessonId={lessonId} courseId={courseId} />
        </div>
      </div>
    </div>
  );
}
