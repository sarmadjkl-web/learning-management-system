'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { mockSkillMetrics } from '@/lib/data/analytics';

export function SkillsChart() {
  return (
    <Card className="bg-white border-green-100">
      <CardHeader>
        <CardTitle>Your Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockSkillMetrics.map((skill) => (
          <div key={skill.skill}>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-900">{skill.skill}</p>
              <p className="text-sm font-bold text-green-600">{skill.proficiency}%</p>
            </div>
            <Progress value={skill.proficiency} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">{skill.coursesCompleted} course(s) completed</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
