'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  BarChart3,
  GraduationCap,
  LogOut,
  Settings,
  Home,
  MessageSquare,
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockCurrentUser } from '@/lib/data/users';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    description: 'View your learning overview',
  },
  {
    name: 'Courses',
    href: '/courses',
    icon: BookOpen,
    description: 'Browse all courses',
  },
  {
    name: 'Learning Progress',
    href: '/progress',
    icon: BarChart3,
    description: 'Track your progress',
  },
  {
    name: 'Discussions',
    href: '/discussions',
    icon: MessageSquare,
    description: 'Join community discussions',
  },
  {
    name: 'Certifications',
    href: '/certifications',
    icon: GraduationCap,
    description: 'View your certificates',
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  // Don't show sidebar on landing page
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r border-green-100 bg-white">
      {/* Logo Section */}
      <div className="border-b border-green-100 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-600">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">LearnHub</h1>
            <p className="text-xs text-gray-600">Learning Platform</p>
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      {user && (
        <div className="border-b border-green-100 p-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-600">Student</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <nav className="space-y-1 p-4">
        {navigationItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <button
                className={cn(
                  'group relative w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-gradient-to-r from-green-50 to-teal-50 text-green-700'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 hover:text-green-700'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      'h-5 w-5 transition-colors',
                      isActive ? 'text-green-600' : 'text-gray-500 group-hover:text-green-600'
                    )}
                  />
                  <span>{item.name}</span>
                </div>
              </button>
            </Link>
          );
        })}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Settings and Logout */}
      <div className="border-t border-green-100 p-4 space-y-2">
        <Link href="/settings">
          <button className="group relative w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 hover:text-green-700">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-gray-500 transition-colors group-hover:text-green-600" />
              <span>Settings</span>
            </div>
          </button>
        </Link>
        <button
          onClick={logout}
          className="group relative w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-red-50 hover:text-red-700"
        >
          <div className="flex items-center gap-3">
            <LogOut className="h-5 w-5 text-gray-500 transition-colors group-hover:text-red-600" />
            <span>Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
}
