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
        <h1 className="text-3xl font-bold text-foreground">Community Discussions</h1>
        <p className="mt-2 text-muted-foreground">Connect with other learners and discuss course content</p>
      </div>

      {/* New Discussion Button */}
      <div className="mb-8">
        <Button>
          <MessageCircle className="mr-2 h-4 w-4" />
          Start New Discussion
        </Button>
      </div>

      {/* Pinned Threads */}
      {pinnedThreads.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">Pinned Discussions</h2>
          <div className="space-y-4">
            {pinnedThreads.map((thread) => (
              <Link key={thread.id} href={`/discussions/${thread.id}`}>
                <Card className="cursor-pointer border-border bg-secondary p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={thread.authorImage} alt={thread.author} />
                      <AvatarFallback>{thread.author.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <Pin className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold text-foreground">{thread.title}</h3>
                      </div>
                      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{thread.content}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">By {thread.author}</span>
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
        <h2 className="mb-4 text-xl font-bold text-foreground">All Discussions</h2>
        <div className="space-y-4">
          {otherThreads.map((thread) => (
            <Link key={thread.id} href={`/discussions/${thread.id}`}>
              <Card className="cursor-pointer border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-secondary hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={thread.authorImage} alt={thread.author} />
                    <AvatarFallback>{thread.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="mb-2 font-semibold text-foreground">{thread.title}</h3>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{thread.content}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">By {thread.author}</span>
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
