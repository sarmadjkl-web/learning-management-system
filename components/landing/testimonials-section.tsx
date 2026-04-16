'use client';

import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content:
      'LearnHub transformed my career! The React course was comprehensive and the community support was incredible. I landed a job at my dream company within 3 months.',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    role: 'Full Stack Engineer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    content:
      'The interactive lessons and progress tracking kept me motivated throughout my learning journey. Best investment in my education!',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    role: 'UX Designer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    content:
      'Learning at my own pace while working full-time was perfect. The course quality and instructor expertise are top-notch.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className={`mb-4 text-4xl font-bold text-foreground md:text-5xl transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            What Our Learners Say
          </h2>
          <p
            className={`mx-auto max-w-2xl text-xl text-muted-foreground transition-all delay-100 duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Join thousands of learners who have transformed their careers with LearnHub.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-500 hover:shadow-lg ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isLoaded ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
