'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockDiscussions } from '@/lib/data/discussions';
import { MessageCircle, Pin, Eye, Heart } from 'lucide-react';

export default function DiscussionsPage() {
  const pinnedThreads = mockDiscussions.filter((t) => t.pinned);
  const otherThreads = mockDiscussions.filter((t) => !t.pinned);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Discussions</h1>
        <p className="text-gray-600 mt-2">Connect with other learners and discuss course content</p>
      </div>

      {/* New Discussion Button */}
      <div className="mb-8">
        <Button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
          <MessageCircle className="h-4 w-4 mr-2" />
          Start New Discussion
        </Button>
      </div>

      {/* Pinned Threads */}
      {pinnedThreads.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pinned Discussions</h2>
          <div className="space-y-4">
            {pinnedThreads.map((thread) => (
              <Link key={thread.id} href={`/discussions/${thread.id}`}>
                <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200 hover:border-yellow-300 hover:shadow-lg transition-all p-6 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={thread.authorImage} alt={thread.author} />
                      <AvatarFallback>{thread.author.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Pin className="h-4 w-4 text-yellow-600" />
                        <h3 className="font-semibold text-gray-900">{thread.title}</h3>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2 mb-3">{thread.content}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span className="text-gray-900 font-medium">By {thread.author}</span>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{thread.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{thread.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{thread.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Discussions */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">All Discussions</h2>
        <div className="space-y-4">
          {otherThreads.map((thread) => (
            <Link key={thread.id} href={`/discussions/${thread.id}`}>
              <Card className="bg-white border-green-100 hover:border-green-300 hover:shadow-lg transition-all p-6 cursor-pointer">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={thread.authorImage} alt={thread.author} />
                    <AvatarFallback>{thread.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{thread.title}</h3>
                    <p className="text-sm text-gray-700 line-clamp-2 mb-3">{thread.content}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <span className="text-gray-900 font-medium">By {thread.author}</span>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{thread.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{thread.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{thread.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
