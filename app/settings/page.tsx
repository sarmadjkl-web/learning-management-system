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
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="mt-2 text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="max-w-2xl space-y-8">
        {/* Profile Card */}
        <Card className="border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Profile Settings</h2>

          <div className="space-y-6">
            {/* Avatar */}
            <div>
              <Label className="mb-4 block font-semibold text-foreground">Profile Picture</Label>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback>{user?.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                  Change Picture
                </Button>
              </div>
            </div>

            {/* Name */}
            <div>
              <Label htmlFor="name" className="mb-2 block font-semibold text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                defaultValue={user?.name}
                className="border-border bg-background focus:border-primary"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="mb-2 block font-semibold text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue={user?.email}
                className="border-border bg-background focus:border-primary"
              />
            </div>

            {/* Bio */}
            <div>
              <Label htmlFor="bio" className="mb-2 block font-semibold text-foreground">
                Bio
              </Label>
              <textarea
                id="bio"
                defaultValue={mockCurrentUser.bio}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
                rows={4}
              />
            </div>

            <Button className="w-full">
              Save Changes
            </Button>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Security</h2>

          <div className="space-y-6">
            {/* Change Password */}
            <div className="border-b border-border pb-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Password</p>
                    <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                  </div>
                </div>
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                  Change
                </Button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="border-b border-border pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Not enabled</p>
                  </div>
                </div>
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                  Enable
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Notifications</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary p-4">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Course Updates</p>
                  <p className="text-sm text-muted-foreground">Get notified about new lessons</p>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-primary text-primary focus:ring-primary"
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Discussion Replies</p>
                  <p className="text-sm text-muted-foreground">Email when someone replies to your posts</p>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-primary text-primary focus:ring-primary"
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary p-4">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Weekly Summary</p>
                  <p className="text-sm text-muted-foreground">Receive a summary of your learning activity</p>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-primary text-primary focus:ring-primary"
              />
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/20 bg-destructive/10 p-8">
          <h2 className="mb-4 text-2xl font-bold text-destructive">Danger Zone</h2>
          <p className="mb-4 text-destructive">Once you delete your account, there is no going back. Please be certain.</p>
          <Button variant="destructive">
            Delete Account
          </Button>
        </Card>
      </div>
    </div>
  );
}
