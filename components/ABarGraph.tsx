"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const ABarGraph = () => {
  const data = [
    { month: "Jan", subscriptions: 120 },
    { month: "Feb", subscriptions: 98 },
    { month: "Mar", subscriptions: 150 },
    { month: "Apr", subscriptions: 130 },
    { month: "May", subscriptions: 175 },
    { month: "Jun", subscriptions: 160 },
    { month: "July", subscriptions: 140 },
    { month: "Aug", subscriptions: 155 },
    { month: "Sept", subscriptions: 125 },
    { month: "Oct", subscriptions: 110 },
    { month: "Nov", subscriptions: 135 },
    { month: "Dec", subscriptions: 170 },
  ];
  return (
    <div className="">
      <Card className="min-w-96">
        <CardHeader>Subscription</CardHeader>
        <CardContent className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={350} height={300} data={data}>
              <XAxis
                dataKey={"month"}
                tickLine={false}
                axisLine={false}
                stroke="#888888"
                fontSize={10}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                stroke="#888888"
                fontSize={12}
              />
              <Bar
                dataKey="subscriptions"
                radius={[4, 4, 0, 0]}
                fill="#2563eb"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ABarGraph;
