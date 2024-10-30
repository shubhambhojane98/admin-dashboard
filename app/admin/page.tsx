import ABarGraph from "@/components/ABarGraph";
import ACard from "@/components/ACard";
import ALineChart from "@/components/ALineChart";
import React from "react";

const AdminDashboard = () => {
  const cardData = [
    {
      label: "Total Revenue",
      amount: "$45,231.89",
      description: "+20.1% from last month",
      //   icon: DollarSign,
    },
    {
      label: "Subscriptions",
      amount: "+2350",
      description: "+180.1% from last month",
      //   icon: Users,
    },
    {
      label: "Sales",
      amount: "+12,234",
      description: "+19% from last month",
      //   icon: CreditCard,
    },
    {
      label: "Active Now",
      amount: "+573",
      description: "+201 since last hour",
      //   icon: Activity,
    },
  ];

  return (
    <div className="mx-8 ">
      <h1>AdminDashboard</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-3 gap-2">
        {cardData.map((data, i) => (
          <div key={i}>
            <ACard
              title={data.label}
              amount={data.amount}
              description={data.description}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <ALineChart />
        <ABarGraph />
        {/* <div className="h-96 w-96 bg-yellow-400"></div>
        <div className="h-96 w-96 bg-blue-400"></div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
