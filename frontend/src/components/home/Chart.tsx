"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tooltip } from "../ui/tooltip";

const chartData = [
  { month: "January", positive: 186, negative: 80, neutral: 50 },
  { month: "February", positive: 305, negative: 200, neutral: 100 },
  { month: "March", positive: 237, negative: 120, neutral: 90 },
  { month: "April", positive: 73, negative: 190, neutral: 110 },
  { month: "May", positive: 209, negative: 130, neutral: 85 },
  { month: "June", positive: 214, negative: 140, neutral: 95 },
];

const chartConfig = {
  positive: {
    label: "positive",
    color: "#00ffff",
  },
  negative: {
    label: "negative",
    color: "#ff0000",
  },
  neutral: {
    label: "neutral",
    color: "#0000ff",
  },
} satisfies ChartConfig;

export function ChartComponent() {
  return (
    <Card className="w-7/12 bg-background">
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="positive"
              type="natural"
              stroke="#00ffff"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="negative"
              type="natural"
              stroke="#ff0000"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="neutral"
              type="natural"
              stroke="#0000ff"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
