"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  BarChart3,
  GraduationCap,
  LogOut,
  Settings,
  Home,
  MessageSquare,
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
    description: "View your learning overview",
  },
  {
    name: "Courses",
    href: "/courses",
    icon: BookOpen,
    description: "Browse all courses",
  },
  {
    name: "Learning Progress",
    href: "/progress",
    icon: BarChart3,
    description: "Track your progress",
  },
  {
    name: "Discussions",
    href: "/discussions",
    icon: MessageSquare,
    description: "Join community discussions",
  },
  {
    name: "Certifications",
    href: "/certifications",
    icon: GraduationCap,
    description: "View your certificates",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  // Don't show sidebar on landing page
  if (pathname === "/") {
    return null;
  }

  return (
    <Sidebar>
      {/* Logo Section */}
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">LearnHub</h1>
            <p className="text-xs text-sidebar-foreground/70">Learning Platform</p>
          </div>
        </div>

        {/* User Profile Section */}
        {user && (
          <div className="mt-2 flex items-center gap-3 rounded-lg border border-sidebar-border bg-sidebar-accent/50 p-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-semibold text-sidebar-foreground">
                {user.name}
              </p>
              <p className="truncate text-xs text-sidebar-foreground/70">Student</p>
            </div>
          </div>
        )}
      </SidebarHeader>

      {/* Navigation Items */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.name}
                    >
                      <Link href={item.href}>
                        <Icon />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Settings and Logout */}
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={logout} 
              tooltip="Logout"
              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
