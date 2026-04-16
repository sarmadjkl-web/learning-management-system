'use client';

import { BookOpen, Award, BarChart3, Flame } from 'lucide-react';
import { StatCard } from '@/components/dashboard/stat-card';
import { ActivityChart } from '@/components/dashboard/activity-chart';
import { SkillsChart } from '@/components/dashboard/skills-chart';
import { CategoryChart } from '@/components/dashboard/category-chart';
import { EnrolledCourses } from '@/components/dashboard/enrolled-courses';
import { mockDashboardStats } from '@/lib/data/analytics';
import { mockCurrentUser } from '@/lib/data/users';

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Welcome back, {mockCurrentUser.name}! 👋</h1>
        <p className="mt-2 text-muted-foreground">Here&apos;s your learning overview</p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={BookOpen}
          label="Courses Enrolled"
          value={mockDashboardStats.coursesEnrolled}
          color="green"
        />
        <StatCard
          icon={Award}
          label="Certificates Earned"
          value={mockDashboardStats.certificatesEarned}
          color="teal"
        />
        <StatCard
          icon={BarChart3}
          label="Learning Hours"
          value={mockDashboardStats.totalLearningHours}
          color="blue"
          suffix="h"
        />
        <StatCard
          icon={Flame}
          label="Current Streak"
          value={mockDashboardStats.currentStreak}
          color="purple"
          suffix="days"
        />
      </div>

      {/* Main Content Grid */}
      <div className="mb-8 grid gap-8 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-8 lg:col-span-2">
          <ActivityChart />
          <CategoryChart />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <SkillsChart />
          <EnrolledCourses />
        </div>
      </div>
    </div>
  );
}
