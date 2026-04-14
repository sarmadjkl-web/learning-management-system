export interface CourseProgress {
  courseId: string;
  courseName: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  hoursSpent: number;
}

export interface DailyActivity {
  date: string;
  minutes: number;
  coursesAccessed: number;
}

export interface SkillMetric {
  skill: string;
  proficiency: number; // 0-100
  coursesCompleted: number;
}

export const mockDashboardStats = {
  totalLearningHours: 156,
  coursesEnrolled: 5,
  coursesCompleted: 3,
  certificatesEarned: 2,
  currentStreak: 12, // days
  completionRate: 68,
};

export const mockCourseProgress: CourseProgress[] = [
  {
    courseId: 'course-1',
    courseName: 'React Fundamentals',
    progress: 65,
    completedLessons: 3,
    totalLessons: 4,
    hoursSpent: 24,
  },
  {
    courseId: 'course-2',
    courseName: 'Advanced TypeScript Patterns',
    progress: 45,
    completedLessons: 20,
    totalLessons: 56,
    hoursSpent: 32,
  },
  {
    courseId: 'course-6',
    courseName: 'Mobile App Development with React Native',
    progress: 30,
    completedLessons: 20,
    totalLessons: 67,
    hoursSpent: 18,
  },
];

export const mockDailyActivity: DailyActivity[] = [
  { date: 'Mon', minutes: 45, coursesAccessed: 2 },
  { date: 'Tue', minutes: 60, coursesAccessed: 2 },
  { date: 'Wed', minutes: 30, coursesAccessed: 1 },
  { date: 'Thu', minutes: 75, coursesAccessed: 3 },
  { date: 'Fri', minutes: 50, coursesAccessed: 2 },
  { date: 'Sat', minutes: 90, coursesAccessed: 2 },
  { date: 'Sun', minutes: 40, coursesAccessed: 1 },
];

export const mockSkillMetrics: SkillMetric[] = [
  { skill: 'JavaScript', proficiency: 85, coursesCompleted: 3 },
  { skill: 'React', proficiency: 75, coursesCompleted: 2 },
  { skill: 'TypeScript', proficiency: 65, coursesCompleted: 1 },
  { skill: 'CSS', proficiency: 80, coursesCompleted: 2 },
  { skill: 'Web APIs', proficiency: 70, coursesCompleted: 1 },
];

export const mockCategoryDistribution = [
  { name: 'Web Development', value: 45, color: '#10b981' },
  { name: 'Mobile Development', value: 25, color: '#14b8a6' },
  { name: 'Data Science', value: 20, color: '#06b6d4' },
  { name: 'Design', value: 10, color: '#6366f1' },
];
