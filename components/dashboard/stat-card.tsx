import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: 'green' | 'teal' | 'blue' | 'purple';
  suffix?: string;
}

export function StatCard({ icon: Icon, label, value, suffix }: StatCardProps) {
  return (
    <Card className="bg-card hover:shadow-lg transition-shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-foreground mt-2">
            {value}
            {suffix && <span className="text-lg text-muted-foreground ml-1">{suffix}</span>}
          </p>
        </div>
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
}
