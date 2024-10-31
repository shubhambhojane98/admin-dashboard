import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ASidebar";
import { checkRole } from "@/utils/role";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { sessionClaims } = await auth();

  // Redirect to the appropriate route based on role
  if (sessionClaims?.metadata?.role === "admin") {
    redirect("/admin");
  } else if (sessionClaims?.metadata?.role === "user") {
    redirect("/user");
  } else {
    redirect("/"); // Redirect to homepage or login if no valid role
  }

  return null; // No content to render since user is redirected;
};

export default Dashboard;
