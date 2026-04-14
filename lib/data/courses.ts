export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  enrollments: number;
  rating: number;
  duration: string;
  lessons: number;
  progress: number;
  enrolled: boolean;
}

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'React Fundamentals',
    description: 'Master the basics of React and learn how to build modern web applications with the most popular JavaScript library.',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    category: 'Web Development',
    level: 'Beginner',
    enrollments: 2540,
    rating: 4.8,
    duration: '6 weeks',
    lessons: 42,
    progress: 65,
    enrolled: true,
  },
  {
    id: 'course-2',
    title: 'Advanced TypeScript Patterns',
    description: 'Dive deep into TypeScript and learn advanced patterns for building scalable applications.',
    instructor: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    category: 'Web Development',
    level: 'Advanced',
    enrollments: 1240,
    rating: 4.9,
    duration: '8 weeks',
    lessons: 56,
    progress: 45,
    enrolled: true,
  },
  {
    id: 'course-3',
    title: 'UI/UX Design Principles',
    description: 'Learn the fundamental principles of user interface and user experience design.',
    instructor: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    category: 'Design',
    level: 'Beginner',
    enrollments: 3120,
    rating: 4.7,
    duration: '5 weeks',
    lessons: 38,
    progress: 0,
    enrolled: false,
  },
  {
    id: 'course-4',
    title: 'Data Science with Python',
    description: 'Complete data science journey using Python, from basics to machine learning.',
    instructor: 'Alex Rodriguez',
    image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=500&h=300&fit=crop',
    category: 'Data Science',
    level: 'Intermediate',
    enrollments: 2890,
    rating: 4.6,
    duration: '10 weeks',
    lessons: 78,
    progress: 0,
    enrolled: false,
  },
  {
    id: 'course-5',
    title: 'Full Stack Web Development',
    description: 'Build complete web applications from frontend to backend using modern technologies.',
    instructor: 'David Lee',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    category: 'Web Development',
    level: 'Intermediate',
    enrollments: 4560,
    rating: 4.8,
    duration: '12 weeks',
    lessons: 95,
    progress: 0,
    enrolled: false,
  },
  {
    id: 'course-6',
    title: 'Mobile App Development with React Native',
    description: 'Create cross-platform mobile applications using React Native.',
    instructor: 'Lisa Park',
    image: 'https://images.unsplash.com/photo-1512941691920-25bdb75efb5e?w=500&h=300&fit=crop',
    category: 'Mobile Development',
    level: 'Intermediate',
    enrollments: 2100,
    rating: 4.5,
    duration: '9 weeks',
    lessons: 67,
    progress: 30,
    enrolled: true,
  },
];
