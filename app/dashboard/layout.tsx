import AppHeader from "@/components/custom/dashboard/appHeader";
import { AppSidebar } from "@/components/custom/dashboard/appSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <AppHeader/>
          <div className="p-10">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default DashBoardLayout;
