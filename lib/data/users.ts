export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'instructor' | 'admin';
  joinedDate: Date;
  bio: string;
  completedCourses: number;
  enrolledCourses: number;
  totalLearningHours: number;
}

export const mockCurrentUser: User = {
  id: 'user-1',
  name: 'Alex Student',
  email: 'alex.student@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexStudent',
  role: 'student',
  joinedDate: new Date('2023-01-15'),
  bio: 'Passionate about learning web development and building amazing applications.',
  completedCourses: 3,
  enrolledCourses: 5,
  totalLearningHours: 156,
};

export const mockInstructors: User[] = [
  {
    id: 'instructor-1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    role: 'instructor',
    joinedDate: new Date('2020-03-10'),
    bio: 'Senior Full Stack Developer with 10+ years of experience.',
    completedCourses: 0,
    enrolledCourses: 0,
    totalLearningHours: 0,
  },
  {
    id: 'instructor-2',
    name: 'Mike Chen',
    email: 'mike.chen@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    role: 'instructor',
    joinedDate: new Date('2021-06-20'),
    bio: 'TypeScript expert and JavaScript enthusiast.',
    completedCourses: 0,
    enrolledCourses: 0,
    totalLearningHours: 0,
  },
];
