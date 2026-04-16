'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';

interface CourseFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const categories = [
  'All Categories',
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Design',
];

export function CourseFilters({
  searchTerm,
  setSearchTerm,
  selectedLevel,
  setSelectedLevel,
  selectedCategory,
  setSelectedCategory,
}: CourseFiltersProps) {
  const hasActiveFilters = searchTerm || selectedLevel !== 'All Levels' || selectedCategory !== 'All Categories';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedLevel('All Levels');
    setSelectedCategory('All Categories');
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-border pl-10 focus-visible:ring-primary"
        />
      </div>

      {/* Level Filter */}
      <div>
        <p className="mb-3 text-sm font-semibold text-foreground">Level</p>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <Button
              key={level}
              variant={selectedLevel === level ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <p className="mb-3 text-sm font-semibold text-foreground">Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={resetFilters}
          className="w-full text-foreground"
        >
          <X className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
