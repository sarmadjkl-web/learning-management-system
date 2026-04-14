'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { mockDailyActivity } from '@/lib/data/analytics';

export function ActivityChart() {
  return (
    <Card className="bg-white border-green-100">
      <CardHeader>
        <CardTitle>Learning Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockDailyActivity}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0f2f1" />
            <XAxis dataKey="date" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '2px solid #10b981',
                borderRadius: '8px',
              }}
              cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
            />
            <Bar dataKey="minutes" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
