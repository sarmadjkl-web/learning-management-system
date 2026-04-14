export interface DiscussionComment {
  id: string;
  author: string;
  authorImage: string;
  content: string;
  timestamp: Date;
  likes: number;
  replies: DiscussionComment[];
}

export interface DiscussionThread {
  id: string;
  lessonId: string;
  title: string;
  author: string;
  authorImage: string;
  content: string;
  timestamp: Date;
  views: number;
  replies: number;
  likes: number;
  comments: DiscussionComment[];
  pinned: boolean;
}

export const mockDiscussions: DiscussionThread[] = [
  {
    id: 'thread-1',
    lessonId: 'lesson-1',
    title: 'How to set up React development environment on Windows?',
    author: 'John Doe',
    authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    content: 'I am having trouble setting up React on my Windows machine. Can anyone help me with the steps?',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    views: 234,
    replies: 5,
    likes: 12,
    pinned: true,
    comments: [
      {
        id: 'comment-1',
        author: 'Sarah Johnson',
        authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        content: 'Make sure you have Node.js and npm installed first. Then you can use npx create-react-app my-app',
        timestamp: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000),
        likes: 18,
        replies: [],
      },
      {
        id: 'comment-2',
        author: 'Mike Chen',
        authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
        content: 'You can download Node.js from nodejs.org. Choose the LTS version for stability.',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        likes: 9,
        replies: [],
      },
    ],
  },
  {
    id: 'thread-2',
    lessonId: 'lesson-1',
    title: 'Difference between functional and class components',
    author: 'Emma Wilson',
    authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    content: 'Can someone explain the key differences between functional and class components? Which one should I use?',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    views: 567,
    replies: 8,
    likes: 34,
    pinned: true,
    comments: [
      {
        id: 'comment-3',
        author: 'Alex Rodriguez',
        authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        content: 'Functional components with hooks are the modern way. They\'re simpler and more flexible.',
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        likes: 42,
        replies: [],
      },
    ],
  },
  {
    id: 'thread-3',
    lessonId: 'lesson-2',
    title: 'Best practices for component structure',
    author: 'Lisa Park',
    authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    content: 'What are the best practices for organizing and structuring React components in larger applications?',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    views: 423,
    replies: 6,
    likes: 28,
    pinned: false,
    comments: [],
  },
];

export const getDiscussionsByLessonId = (lessonId: string) => {
  return mockDiscussions.filter((thread) => thread.lessonId === lessonId);
};

export const getDiscussionThreadById = (threadId: string) => {
  return mockDiscussions.find((thread) => thread.id === threadId);
};
