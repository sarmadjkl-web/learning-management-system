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
        <h1 className="text-3xl font-bold text-gray-900">Learning Progress</h1>
        <p className="text-gray-600 mt-2">Track your learning journey and achievements</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white border-green-100 p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Courses in Progress</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </Card>

        <Card className="bg-white border-green-100 p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center">
              <Target className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Lessons Completed</p>
              <p className="text-2xl font-bold text-gray-900">43</p>
            </div>
          </div>
        </Card>

        <Card className="bg-white border-green-100 p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Learning Streak</p>
              <p className="text-2xl font-bold text-gray-900">12 days</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Course Progress */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card className="bg-white border-green-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Course Progress</h2>
            <div className="space-y-6">
              {mockCourseProgress.map((course) => (
                <div key={course.courseId}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">{course.courseName}</h3>
                    <span className="text-sm font-bold text-green-600">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2 mb-2" />
                  <p className="text-xs text-gray-600">
                    {course.completedLessons} of {course.totalLessons} lessons • {course.hoursSpent}h spent
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="bg-white border-green-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Skills</h2>
            <div className="space-y-4">
              {mockSkillMetrics.slice(0, 5).map((skill) => (
                <div key={skill.skill}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-gray-900">{skill.skill}</p>
                    <p className="text-xs font-bold text-green-600">{skill.proficiency}%</p>
                  </div>
                  <Progress value={skill.proficiency} className="h-1.5" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Activity Chart */}
      <Card className="bg-white border-green-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockDailyActivity}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0f2f1" />
            <XAxis dataKey="date" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '2px solid #10b981',
                borderRadius: '8px',
              }}
              cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
            />
            <Bar dataKey="minutes" fill="#10b981" radius={[8, 8, 0, 0]} name="Minutes Studied" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
