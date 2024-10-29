import AdminDashboard from "@/components/AdminDashboard";
import UserDashboard from "@/components/UserDashboard";
import { checkRole } from "@/utils/role";
import React from "react";

const Dashboard = async () => {
  if (await checkRole("admin")) {
    return <AdminDashboard />;
  } else {
    return <UserDashboard />;
  }
};

export default Dashboard;
