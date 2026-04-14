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
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div
          className={`rounded-2xl bg-gradient-to-r from-green-500 to-teal-600 p-12 md:p-16 text-white text-center transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-lg text-green-50 max-w-2xl mx-auto mb-8">
            Join our community of learners and start your journey to success today. Access 500+ courses and start learning immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 text-lg h-14 px-8 font-semibold"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg h-14 px-8 font-semibold"
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
