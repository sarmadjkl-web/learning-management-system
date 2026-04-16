"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/lib/auth-context";
import { SidebarTrigger } from "../ui/sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function TopBar() {
  const { user } = useAuth();

  return (
    <div className="border-b border-border bg-card px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex flex-row items-center gap-3">
          <SidebarTrigger />
          <div className="max-w-md flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses, lessons..."
                className="border-border bg-secondary pl-10 focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="ml-8 flex items-center gap-4">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
          </Button>

          {user && (
            <div className="flex items-center gap-3 border-l border-border pl-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground">Student</p>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
