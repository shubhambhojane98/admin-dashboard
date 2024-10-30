import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ASidebar from "@/components/ASidebar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className=" min-h-screen w-full bg-white text-black flex ">
        <ASidebar />
        <div className="p-8 overflow-scroll w-full">
          <SidebarTrigger />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
