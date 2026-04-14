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

const colorClasses = {
  green: 'from-green-500 to-green-600',
  teal: 'from-teal-500 to-teal-600',
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
};

export function StatCard({ icon: Icon, label, value, color, suffix }: StatCardProps) {
  return (
    <Card className="bg-white border-green-100 hover:shadow-lg transition-shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {value}
            {suffix && <span className="text-lg text-gray-600 ml-1">{suffix}</span>}
          </p>
        </div>
        <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[color]}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </Card>
  );
}
