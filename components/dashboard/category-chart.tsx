'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
} from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { mockCategoryDistribution } from '@/lib/data/analytics';

const chartConfig = {
  value: {
    label: "Courses",
  },
  "Web Development": { label: "Web Development", color: "var(--chart-1)" },
  "Mobile Development": { label: "Mobile Development", color: "var(--chart-2)" },
  "Data Science": { label: "Data Science", color: "var(--chart-3)" },
  "Design": { label: "Design", color: "var(--chart-4)" },
} satisfies ChartConfig;

export function CategoryChart() {
  const data = mockCategoryDistribution.map((item, index) => ({
    ...item,
    fill: `var(--chart-${(index % 5) + 1})`
  }));

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Course Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
