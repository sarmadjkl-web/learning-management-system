'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CTASection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div
          className={`rounded-2xl bg-primary p-12 text-center text-primary-foreground md:p-16 transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ready to Start Learning?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Join our community of learners and start your journey to success today. Access 500+ courses and start learning immediately.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="h-14 bg-background px-8 text-lg font-semibold text-primary hover:bg-background/90"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                size="lg"
                className="h-14 border-2 border-primary-foreground px-8 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
