import React from "react";
import { Card, CardContent } from "./ui/card";

interface ACard {
  title: string;
  amount: string;
  description: string;
}

const ACard = ({ title, amount, description }: ACard) => {
  return (
    <Card className=" min-h-40 rounded-lg shadow-sm border">
      <CardContent className="flex flex-col  p-4 ">
        <p className="text-md pb-2">{title}</p>
        <p className="text-lg  font-semibold pb-2">{amount}</p>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ACard;
