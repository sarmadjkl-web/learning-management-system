'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-green-50 to-teal-50 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200 to-teal-200 rounded-full blur-3xl opacity-20 transition-all duration-1000 ${
            isLoaded ? 'translate-y-0' : 'translate-y-20'
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200 to-green-200 rounded-full blur-3xl opacity-20 transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0' : 'translate-y-20'
          }`}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 text-sm font-medium mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>Welcome to the Future of Learning</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-700 to-teal-700 bg-clip-text text-transparent leading-tight mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Master Skills,
            <br />
            Build Your Future
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Learn from industry experts, track your progress, and earn certifications. Join thousands of learners already transforming their careers.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white text-lg h-14 px-8">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="border-2 border-green-500 text-green-700 hover:bg-green-50 text-lg h-14 px-8">
                Explore Courses
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-green-200 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">10K+</p>
              <p className="text-gray-700 mt-2">Active Learners</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">500+</p>
              <p className="text-gray-700 mt-2">Quality Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">98%</p>
              <p className="text-gray-700 mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
