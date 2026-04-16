'use client';

import { BookOpen, Award, Users, BarChart3, Zap, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Courses',
    description: 'Access a wide range of courses across multiple topics and skill levels.',
  },
  {
    icon: Award,
    title: 'Earn Certificates',
    description: 'Complete courses and earn recognized certificates to boost your portfolio.',
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Join discussion forums, connect with peers, and learn together.',
  },
  {
    icon: BarChart3,
    title: 'Track Progress',
    description: 'Visualize your learning journey with detailed analytics and insights.',
  },
  {
    icon: Zap,
    title: 'Interactive Content',
    description: 'Learn through videos, quizzes, and hands-on projects that stick.',
  },
  {
    icon: Shield,
    title: 'Learn at Your Pace',
    description: 'Access courses anytime, anywhere. Progress at your own speed.',
  },
];

export function FeaturesSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className={`mb-4 text-4xl font-bold text-foreground md:text-5xl transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Why Choose LearnHub?
          </h2>
          <p
            className={`mx-auto max-w-2xl text-xl text-muted-foreground transition-all delay-100 duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Everything you need to learn, grow, and succeed in your educational journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:shadow-lg ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isLoaded ? `${200 + index * 100}ms` : '0ms',
                }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
