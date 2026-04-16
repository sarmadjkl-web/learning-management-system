'use client';

import { useState, useMemo } from 'react';
import { mockCourses } from '@/lib/data/courses';
import { CourseCard } from '@/components/courses/course-card';
import { CourseFilters } from '@/components/courses/course-filters';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      const matchesCategory =
        selectedCategory === 'All Categories' || course.category === selectedCategory;

      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [searchTerm, selectedLevel, selectedCategory]);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Explore Courses</h1>
        <p className="mt-2 text-muted-foreground">
          Choose from {mockCourses.length} courses and start learning today
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-xl border border-border bg-card p-6 shadow-sm">
            <CourseFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedLevel={selectedLevel}
              selectedCategory={selectedCategory}
              setSelectedLevel={setSelectedLevel}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="lg:col-span-3">
          {filteredCourses.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold">{filteredCourses.length}</span> course
                  {filteredCourses.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No courses found matching your filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLevel('All Levels');
                  setSelectedCategory('All Categories');
                }}
                className="mt-4 font-medium text-primary hover:text-primary/80"
              >
                Clear filters and try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
