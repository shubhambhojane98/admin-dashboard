import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ASidebar";
import { checkRole } from "@/utils/role";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role === "admin") {
    redirect("/admin");
  } else if (sessionClaims?.metadata?.role === "user") {
    redirect("/user");
  } else {
    redirect("/");
  }

  return null;
};

export default Dashboard;
