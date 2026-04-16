import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ProgressCardProps {
  title: string;
  completed: number;
  total: number;
  percentage: number;
  hoursSpent?: number;
}

export function ProgressCard({
  title,
  completed,
  total,
  percentage,
  hoursSpent,
}: ProgressCardProps) {
  return (
    <Card className="bg-card hover:shadow-lg transition-shadow p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {completed} of {total} lessons completed
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">{percentage}%</p>
            {hoursSpent && <p className="text-xs text-muted-foreground">{hoursSpent}h spent</p>}
          </div>
        </div>

        <Progress value={percentage} className="h-2" />
      </div>
    </Card>
  );
}
