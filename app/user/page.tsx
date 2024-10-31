"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

const User = () => {
  const { user } = useUser();

  console.log(user);

  const userData = {
    userId: user?.id,
    name: user?.fullName,
    email: user?.emailAddresses,
    subscription: {
      plan: "Pro",
      startDate: "2024-01-01",
      endDate: "2025-01-01",
      status: "Active",
    },
    activities: [
      { id: 1, action: "Logged in", date: "2024-10-28" },
      { id: 2, action: "Upgraded subscription", date: "2024-09-15" },
      { id: 3, action: "Viewed report", date: "2024-09-10" },
      { id: 4, action: "Downloaded PDF", date: "2024-08-25" },
      { id: 5, action: "Updated profile information", date: "2024-08-01" },
    ],
  };

  return (
    <div>
      <nav className="bg-blue-500 py-2 border-blue-200">
        <div className="flex justify-between px-10">
          <h1 className="text-white font-medium">User Dashboard</h1>
          <UserButton />
        </div>
      </nav>

      <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {userData.name}!
          </h1>
          {/* <p className="text-gray-600">Email: {userData.email}</p> */}
        </div>

        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Subscription Details
          </h2>
          <ul className="space-y-2 flex flex-col  text-gray-700">
            <li>
              <span className="font-medium">Plan:</span>{" "}
              {userData.subscription.plan}
            </li>
            <li>
              <span className="font-medium">Start Date:</span>{" "}
              {userData.subscription.startDate}
            </li>
            <li>
              <span className="font-medium">End Date:</span>{" "}
              {userData.subscription.endDate}
            </li>
            <li>
              <span className="font-medium">Status:</span>{" "}
              {userData.subscription.status}
            </li>
          </ul>
        </div>

        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-2 text-gray-700">
            {userData.activities.map((activity) => (
              <li key={activity.id} className="border-b border-gray-200 pb-2">
                <span className="font-medium">{activity.action}</span> -{" "}
                {activity.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
