export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  passingScore: number;
  questions: QuizQuestion[];
  completed: boolean;
  score: number | null;
}

export const mockQuizzes: Quiz[] = [
  {
    id: 'quiz-1',
    lessonId: 'lesson-1',
    title: 'React Basics Quiz',
    description: 'Test your understanding of React fundamentals.',
    passingScore: 70,
    completed: true,
    score: 90,
    questions: [
      {
        id: 'q-1',
        question: 'What is React?',
        options: [
          'A CSS framework',
          'A JavaScript library for building user interfaces',
          'A backend framework',
          'A database system',
        ],
        correctAnswer: 1,
        explanation: 'React is a JavaScript library developed by Facebook for building user interfaces with reusable components.',
      },
      {
        id: 'q-2',
        question: 'What does JSX stand for?',
        options: [
          'JavaScript XML',
          'Java Syntax Extension',
          'JavaScript Execution',
          'JSON Extension',
        ],
        correctAnswer: 0,
        explanation: 'JSX stands for JavaScript XML. It allows you to write HTML-like code in JavaScript.',
      },
      {
        id: 'q-3',
        question: 'Which command creates a new React app?',
        options: [
          'react-new-app',
          'create-react-app',
          'new-react-app',
          'install-react',
        ],
        correctAnswer: 1,
        explanation: 'The npx create-react-app command is the official way to create a new React application.',
      },
      {
        id: 'q-4',
        question: 'How do you pass data from parent to child components?',
        options: [
          'Using state',
          'Using props',
          'Using context',
          'Using global variables',
        ],
        correctAnswer: 1,
        explanation: 'Props are the standard way to pass data from parent to child components in React.',
      },
      {
        id: 'q-5',
        question: 'What does the virtual DOM help with?',
        options: [
          'Reducing bundle size',
          'Improving performance by minimizing DOM updates',
          'Organizing code better',
          'Writing CSS more efficiently',
        ],
        correctAnswer: 1,
        explanation: 'The virtual DOM helps React determine which parts of the actual DOM need to be updated, improving performance.',
      },
    ],
  },
  {
    id: 'quiz-2',
    lessonId: 'lesson-2',
    title: 'Components and JSX Quiz',
    description: 'Test your knowledge of React components and JSX.',
    passingScore: 70,
    completed: true,
    score: 85,
    questions: [
      {
        id: 'q-6',
        question: 'What are the two types of React components?',
        options: [
          'Static and dynamic',
          'Functional and class components',
          'Container and presentational',
          'Simple and complex',
        ],
        correctAnswer: 1,
        explanation: 'React has two types of components: functional components (JavaScript functions) and class components (ES6 classes).',
      },
      {
        id: 'q-7',
        question: 'Which is the modern way to write React components?',
        options: [
          'Class components',
          'Functional components with hooks',
          'Both are equally modern',
          'None of the above',
        ],
        correctAnswer: 1,
        explanation: 'Functional components with hooks are the modern and recommended way to write React components.',
      },
    ],
  },
  {
    id: 'quiz-3',
    lessonId: 'lesson-3',
    title: 'Props and State Quiz',
    description: 'Test your understanding of props and state.',
    passingScore: 70,
    completed: false,
    score: null,
    questions: [
      {
        id: 'q-8',
        question: 'Are props mutable?',
        options: [
          'Yes, you can change them',
          'No, props are read-only',
          'Only in class components',
          'Only for string props',
        ],
        correctAnswer: 1,
        explanation: 'Props are immutable and read-only. You cannot change props in a component.',
      },
      {
        id: 'q-9',
        question: 'Which hook lets you add state to functional components?',
        options: [
          'useReducer',
          'useEffect',
          'useState',
          'useContext',
        ],
        correctAnswer: 2,
        explanation: 'The useState hook is used to add state to functional components.',
      },
    ],
  },
];

export const getQuizByLessonId = (lessonId: string) => {
  return mockQuizzes.find((quiz) => quiz.lessonId === lessonId);
};

export const getQuizById = (quizId: string) => {
  return mockQuizzes.find((quiz) => quiz.id === quizId);
};
