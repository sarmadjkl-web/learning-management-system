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
    return <div className="p-8 text-center">Lesson not found</div>;
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link href={`/courses/${courseId}`} className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Course</span>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
        <p className="text-gray-600 mt-2">{lesson.description}</p>
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
            <TabsList className="grid w-full grid-cols-3 bg-green-50 border border-green-100">
              <TabsTrigger value="transcript" className="data-[state=active]:bg-white data-[state=active]:text-green-600">
                Transcript
              </TabsTrigger>
              <TabsTrigger value="discussions" className="data-[state=active]:bg-white data-[state=active]:text-green-600">
                <MessageCircle className="h-4 w-4 mr-2" />
                Discussions
              </TabsTrigger>
              {quiz && (
                <TabsTrigger value="quiz" className="data-[state=active]:bg-white data-[state=active]:text-green-600">
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
              <Card className="bg-white border-green-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Discussion Threads</h3>
                {discussions.length > 0 ? (
                  <div className="space-y-4">
                    {discussions.map((thread) => (
                      <Link key={thread.id} href={`/discussions/${thread.id}`}>
                        <div className="p-4 rounded-lg border border-green-100 hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{thread.title}</h4>
                            {thread.pinned && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                Pinned
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2">{thread.content}</p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                            <span>{thread.replies} replies</span>
                            <span>{thread.views} views</span>
                            <span>{thread.likes} likes</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No discussions yet. Be the first to start one!</p>
                )}
              </Card>
            </TabsContent>

            {/* Quiz Tab */}
            {quiz && (
              <TabsContent value="quiz" className="space-y-4">
                <Card className="bg-white border-green-100 p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">{quiz.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 py-4 border-y border-green-100">
                      <div>
                        <p className="text-sm text-gray-600">Questions</p>
                        <p className="text-2xl font-bold text-green-600">{quiz.questions.length}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Passing Score</p>
                        <p className="text-2xl font-bold text-green-600">{quiz.passingScore}%</p>
                      </div>
                    </div>

                    {quiz.completed && quiz.score !== null && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Your Score</p>
                        <p className="text-2xl font-bold text-green-600 mt-1">{quiz.score}%</p>
                      </div>
                    )}

                    <Link href={`/courses/${courseId}/lesson/${lessonId}/quiz`}>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
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
                  className="w-full border-green-200 text-gray-700 hover:bg-green-50"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Lesson
                </Button>
              </Link>
            )}
            {nextLesson && (
              <Link href={`/courses/${courseId}/lesson/${nextLesson.id}`} className="flex-1">
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
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
