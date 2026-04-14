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
    <section className="py-24 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            What Our Learners Say
          </h2>
          <p
            className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Join thousands of learners who have transformed their careers with LearnHub.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-white border border-green-100 shadow-md hover:shadow-lg transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isLoaded ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
