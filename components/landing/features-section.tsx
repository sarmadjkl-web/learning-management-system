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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Why Choose LearnHub?
          </h2>
          <p
            className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Everything you need to learn, grow, and succeed in your educational journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-lg bg-gradient-to-br from-white to-green-50 transition-all duration-500 hover:scale-105 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isLoaded ? `${200 + index * 100}ms` : '0ms',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
