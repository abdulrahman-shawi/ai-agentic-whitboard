"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { Archive, Files, LayoutGrid, Settings, SparkleIcon, User } from "lucide-react";
import { usePathname } from "next/navigation";
import CreateNewBoardDailog from "./CreateNewBoardDialog";

export function AppSidebar() {
  const path = usePathname();
  const {user} = useUser();
  return (
    <Sidebar>
      <SidebarHeader>
        <h1
          className="text-lg font-semibold pt-2.5
        flex text-center justify-center items-center"
        >
          Ai Agentic Whiteboard
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <CreateNewBoardDailog />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Recent Boards</SidebarGroupLabel>
          <SidebarMenuButton className="p-5" isActive={path === "/dashboard"}>
            <LayoutGrid />
            <span>All Files</span>
          </SidebarMenuButton>
          <SidebarMenuButton
            className="p-5 mt-2"
            isActive={path === "/shared-files"}
          >
            <User />
            <span>Shared Files</span>
          </SidebarMenuButton>
          <SidebarMenuButton
            className="p-5 mt-2"
            isActive={path === "/archived"}
          >
            <Archive />
            <span>Archived Files</span>
          </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel>Others</SidebarGroupLabel>
            <SidebarMenuButton className="p-5" isActive={path === "/ai"}>
                <SparkleIcon />
                <span>Ai Helper</span>
            </SidebarMenuButton>
            <SidebarMenuButton className="p-5 mt-2" isActive={path === "/setting"}>
                <Settings />
                <span>Settings</span>
            </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
       <div className="p-4 my-3">
         <h2 className="text-sm flex justify-between">
          2 files created <span className="font-bold">total 3</span>
        </h2>
        <Progress value={66}/>
       </div>
       <div className="flex items-center gap-2">
        <img src={user?.imageUrl ?? ''} alt="User Image" width={40} height={40}  
        className="rounded-full"/>
        <h2>{user?.firstName} {user?.lastName}</h2>
       </div>
      </SidebarFooter>
    </Sidebar>
  );
}
