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
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary opacity-20 blur-3xl transition-all duration-1000 ${
            isLoaded ? 'translate-y-0' : 'translate-y-20'
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/80 opacity-20 blur-3xl transition-all delay-300 duration-1000 ${
            isLoaded ? 'translate-y-0' : 'translate-y-20'
          }`}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>Welcome to the Future of Learning</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`mb-6 tracking-tight text-5xl font-bold leading-tight text-foreground md:text-7xl transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Master Skills,
            <br />
            Build Your Future
          </h1>

          {/* Subheading */}
          <p
            className={`mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground transition-all delay-100 duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Learn from industry experts, track your progress, and earn certifications. Join thousands of learners already transforming their careers.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all delay-200 duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link href="/dashboard">
              <Button size="lg" className="h-14 px-8 text-lg">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="h-14 border-2 border-primary px-8 text-lg text-primary hover:bg-primary/10">
                Explore Courses
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 grid grid-cols-3 gap-8 border-t border-border pt-16 transition-all delay-300 duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div>
              <p className="text-3xl font-bold text-primary">10K+</p>
              <p className="mt-2 text-muted-foreground">Active Learners</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="mt-2 text-muted-foreground">Quality Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="mt-2 text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
