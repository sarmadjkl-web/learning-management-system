'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Sidebar } from './sidebar';
import { TopBar } from './top-bar';
import { useEffect } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const PUBLIC_ROUTES = ['/', '/login'];

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  useEffect(() => {
    if (!isLoading && !user && !isPublicRoute) {
      router.push('/login');
    }
  }, [isLoading, user, pathname, router, isPublicRoute]);

  if (isPublicRoute) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white via-green-50 to-teal-50">
        <div className="text-center">
          <div className="h-12 w-12 rounded-full border-4 border-green-200 border-t-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-white via-green-50 to-teal-50">
          {children}
        </main>
      </div>
    </div>
  );
}
