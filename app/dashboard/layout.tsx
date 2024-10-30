import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { checkRole } from "@/utils/role";
import AppSidebar from "@/components/ASidebar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const isAdmin = await checkRole("admin");

  return (
    <SidebarProvider>
      <div className=" min-h-screen w-full bg-white text-black flex ">
        <AppSidebar />
        <div className="p-8 w-full">
          <SidebarTrigger />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
