export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number; // in minutes
  order: number;
  completed: boolean;
  progress: number; // 0-100
  hasQuiz: boolean;
  hasDiscussion: boolean;
  transcript: string;
}

export const mockLessons: Lesson[] = [
  {
    id: 'lesson-1',
    courseId: 'course-1',
    title: 'Is NEBOSH Worth It? YES - HERE&apos;S WHY...',
    description: 'Introduction to React basics and setting up your development environment.',
    videoUrl: 'https://www.youtube.com/embed/7_PRlUNQbPI',
    duration: 15,
    order: 1,
    completed: true,
    progress: 100,
    hasQuiz: true,
    hasDiscussion: true,
    transcript: `Welcome to React Fundamentals! In this lesson, we'll cover the basics of React and how to get started.
      
React is a JavaScript library for building user interfaces with reusable components. It makes it easier to create interactive UIs.

First, let's install Node.js and npm. Then we can create a new React project using create-react-app.

The main concepts in React are components, JSX, props, and state. Components are reusable pieces of your UI.

JSX allows us to write HTML-like code in JavaScript. It's not actual HTML but gets compiled to JavaScript function calls.

Props are how you pass data from parent to child components. State is data that can change within a component.

Let's start building!`,
  },
  {
    id: 'lesson-2',
    courseId: 'course-1',
    title: 'New NEBOSH 2026 Syllabus: GNC Units & Points-Based Marking Explained',
    description: 'Understanding React components and JSX syntax.',
    videoUrl: 'https://www.youtube.com/embed/0VJbgAU6DrA',
    duration: 22,
    order: 2,
    completed: true,
    progress: 100,
    hasQuiz: true,
    hasDiscussion: true,
    transcript: `In this lesson, we'll dive deeper into components and JSX.

Components are the building blocks of React applications. There are two types: functional and class components.

Functional components are JavaScript functions that return JSX. They're simpler and more commonly used today.

Class components are ES6 classes that extend React.Component. They have more features but are more verbose.

JSX looks like HTML but it's actually JavaScript. The JSX compiler converts it to React.createElement() calls.

You can use JavaScript expressions inside JSX by wrapping them in curly braces.

Let's look at some practical examples of creating components.`,
  },
  {
    id: 'lesson-3',
    courseId: 'course-1',
    title: 'Is NEBOSH Worth It? YES - HERE&apos;S WHY...',
    description: 'Learn about props, state, and how to manage component data.',
    videoUrl: 'https://www.youtube.com/embed/7_PRlUNQbPI',
    duration: 28,
    order: 3,
    completed: false,
    progress: 45,
    hasQuiz: true,
    hasDiscussion: true,
    transcript: `Props and state are fundamental concepts in React.

Props are like function parameters - they're passed from parent to child components and are read-only.

State is data managed within a component that can change. When state changes, the component re-renders.

Hooks like useState allow functional components to have state. This is modern React best practice.

The useState hook returns an array with the current state value and a function to update it.

State updates are asynchronous, so you should be careful when relying on state immediately after updating it.

Let's explore practical examples of using props and state together.`,
  },
  {
    id: 'lesson-4',
    courseId: 'course-1',
    title: 'New NEBOSH 2026 Syllabus: GNC Units & Points-Based Marking Explained',
    description: 'Master React Hooks including useEffect for side effects.',
    videoUrl: 'https://www.youtube.com/embed/7_PRlUNQbPI',
    duration: 32,
    order: 4,
    completed: false,
    progress: 0,
    hasQuiz: true,
    hasDiscussion: true,
    transcript: `Hooks are functions that let you use React features in functional components.

The most important hooks are useState and useEffect. We've already covered useState.

useEffect lets you perform side effects in functional components. Side effects include API calls, subscriptions, and timers.

The useEffect hook takes two arguments: a function to run, and a dependency array.

If no dependency array is provided, the effect runs after every render. This can cause performance issues.

If an empty dependency array is provided, the effect only runs once, after the initial render.

If the dependency array contains values, the effect runs whenever those values change.

Let's look at practical examples of useEffect.`,
  },
];

// More lessons for other courses
export const getAllLessonsForCourse = (courseId: string) => {
  return mockLessons.filter((lesson) => lesson.courseId === courseId);
};

export const getLessonById = (lessonId: string) => {
  return mockLessons.find((lesson) => lesson.id === lessonId);
};
