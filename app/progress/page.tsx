'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { mockCourseProgress, mockDailyActivity, mockSkillMetrics } from '@/lib/data/analytics';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { BookOpen, Target, Zap } from 'lucide-react';

export default function ProgressPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Learning Progress</h1>
        <p className="mt-2 text-muted-foreground">Track your learning journey and achievements</p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <Card className="border-border bg-card p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Courses in Progress</p>
              <p className="text-2xl font-bold text-foreground">3</p>
            </div>
          </div>
        </Card>

        <Card className="border-border bg-card p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Lessons Completed</p>
              <p className="text-2xl font-bold text-foreground">43</p>
            </div>
          </div>
        </Card>

        <Card className="border-border bg-card p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Learning Streak</p>
              <p className="text-2xl font-bold text-foreground">12 days</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Course Progress */}
      <div className="mb-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="border-border bg-card p-6">
            <h2 className="mb-6 text-xl font-bold text-foreground">Course Progress</h2>
            <div className="space-y-6">
              {mockCourseProgress.map((course) => (
                <div key={course.courseId}>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{course.courseName}</h3>
                    <span className="text-sm font-bold text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="mb-2 h-2" />
                  <p className="text-xs text-muted-foreground">
                    {course.completedLessons} of {course.totalLessons} lessons • {course.hoursSpent}h spent
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="border-border bg-card p-6">
            <h2 className="mb-6 text-xl font-bold text-foreground">Top Skills</h2>
            <div className="space-y-4">
              {mockSkillMetrics.slice(0, 5).map((skill) => (
                <div key={skill.skill}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">{skill.skill}</p>
                    <p className="text-xs font-bold text-primary">{skill.proficiency}%</p>
                  </div>
                  <Progress value={skill.proficiency} className="h-1.5" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Activity Chart */}
      <Card className="border-border bg-card p-6">
        <h2 className="mb-6 text-xl font-bold text-foreground">Weekly Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockDailyActivity}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="date" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--background)',
                border: '2px solid var(--primary)',
                borderRadius: '8px',
                color: 'var(--foreground)'
              }}
              cursor={{ fill: 'var(--primary)', opacity: 0.1 }}
            />
            <Bar dataKey="minutes" fill="var(--primary)" radius={[8, 8, 0, 0]} name="Minutes Studied" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
