"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ALineChart = () => {
  const mockQuarterlySalesData = [
    { quarter: "Q1", sales: 5000 },
    { quarter: "Q2", sales: 8000 },
    { quarter: "Q3", sales: 12000 },
    { quarter: "Q4", sales: 15000 },
  ];
  return (
    <div className="">
      <Card className="min-w-96">
        <CardHeader className="">Sales</CardHeader>
        <CardContent className="">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={350}
              height={300}
              data={mockQuarterlySalesData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ALineChart;
