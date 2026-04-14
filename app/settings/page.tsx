'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/lib/auth-context';
import { mockCurrentUser } from '@/lib/data/users';
import { Mail, Bell, Lock, Eye } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="max-w-2xl space-y-8">
        {/* Profile Card */}
        <Card className="bg-white border-green-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h2>

          <div className="space-y-6">
            {/* Avatar */}
            <div>
              <Label className="text-gray-700 font-semibold mb-4 block">Profile Picture</Label>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback>{user?.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <Button variant="outline" className="border-green-200 text-gray-700 hover:bg-green-50">
                  Change Picture
                </Button>
              </div>
            </div>

            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
                Full Name
              </Label>
              <Input
                id="name"
                defaultValue={user?.name}
                className="border-green-200 focus:border-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue={user?.email}
                className="border-green-200 focus:border-green-500"
              />
            </div>

            {/* Bio */}
            <div>
              <Label htmlFor="bio" className="text-gray-700 font-semibold mb-2 block">
                Bio
              </Label>
              <textarea
                id="bio"
                defaultValue={mockCurrentUser.bio}
                className="w-full rounded-lg border border-green-200 px-4 py-2 focus:border-green-500 focus:outline-none resize-none"
                rows={4}
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
              Save Changes
            </Button>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="bg-white border-green-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Security</h2>

          <div className="space-y-6">
            {/* Change Password */}
            <div className="pb-6 border-b border-green-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Password</p>
                    <p className="text-sm text-gray-600">Last changed 3 months ago</p>
                  </div>
                </div>
                <Button variant="outline" className="border-green-200 text-gray-700 hover:bg-green-50">
                  Change
                </Button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="pb-6 border-b border-green-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-600">Not enabled</p>
                  </div>
                </div>
                <Button variant="outline" className="border-green-200 text-gray-700 hover:bg-green-50">
                  Enable
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-white border-green-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Course Updates</p>
                  <p className="text-sm text-gray-600">Get notified about new lessons</p>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-green-300 text-green-600 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Discussion Replies</p>
                  <p className="text-sm text-gray-600">Email when someone replies to your posts</p>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-green-300 text-green-600 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Weekly Summary</p>
                  <p className="text-sm text-gray-600">Receive a summary of your learning activity</p>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-green-300 text-green-600 focus:ring-green-500"
              />
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="bg-red-50 border-red-200 p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Danger Zone</h2>
          <p className="text-red-700 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Delete Account
          </Button>
        </Card>
      </div>
    </div>
  );
}
