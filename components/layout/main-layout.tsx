"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { AppSidebar as Sidebar } from "./sidebar";
import { TopBar } from "./top-bar";
import { useEffect } from "react";
import { SidebarProvider } from "../ui/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const PUBLIC_ROUTES = ["/", "/login"];

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  useEffect(() => {
    if (!isLoading && !user && !isPublicRoute) {
      router.push("/login");
    }
  }, [isLoading, user, pathname, router, isPublicRoute]);

  if (isPublicRoute) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-border border-t-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
