'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { mockSkillMetrics } from '@/lib/data/analytics';

export function SkillsChart() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Your Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockSkillMetrics.map((skill) => (
          <div key={skill.skill}>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-foreground">{skill.skill}</p>
              <p className="text-sm font-bold text-primary">{skill.proficiency}%</p>
            </div>
            <Progress value={skill.proficiency} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">{skill.coursesCompleted} course(s) completed</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
