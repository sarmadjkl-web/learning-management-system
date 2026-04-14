'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { getDiscussionThreadById } from '@/lib/data/discussions';
import { ArrowLeft, Heart, MessageCircle, Share2, Eye } from 'lucide-react';

export default function DiscussionDetailPage() {
  const params = useParams();
  const threadId = params.threadId as string;
  const thread = getDiscussionThreadById(threadId);

  if (!thread) {
    return <div className="p-8 text-center">Discussion not found</div>;
  }

  return (
    <div className="p-8">
      {/* Header */}
      <Link href="/discussions" className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Discussions</span>
      </Link>

      {/* Thread */}
      <Card className="bg-white border-green-100 p-8 mb-8">
        <div className="mb-6">
          <div className="flex items-start gap-4 mb-6">
            <Avatar className="h-12 w-12">
              <AvatarImage src={thread.authorImage} alt={thread.author} />
              <AvatarFallback>{thread.author.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-900">{thread.author}</p>
                <p className="text-sm text-gray-600">
                  {new Date(thread.timestamp).toLocaleDateString()}
                </p>
              </div>
              <p className="text-sm text-gray-600">Student</p>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{thread.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{thread.content}</p>

          {/* Thread Stats */}
          <div className="flex items-center gap-6 py-4 border-y border-green-100">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">{thread.views} views</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">{thread.replies} replies</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">{thread.likes} likes</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6">
          <Button className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
            <Heart className="h-4 w-4 mr-2" />
            Like
          </Button>
          <Button variant="outline" className="flex-1 border-green-200 text-gray-700 hover:bg-green-50">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </Card>

      {/* Comments Section */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Replies ({thread.comments.length})</h2>

        {thread.comments.map((comment) => (
          <Card key={comment.id} className="bg-white border-green-100 p-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.authorImage} alt={comment.author} />
                <AvatarFallback>{comment.author.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900">{comment.author}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-gray-700 mb-4">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
                    <Heart className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
                    <MessageCircle className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Reply Form */}
      <Card className="bg-white border-green-100 p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Join the Discussion</h3>
        <div className="space-y-4">
          <textarea
            placeholder="Share your thoughts..."
            className="w-full rounded-lg border border-green-200 px-4 py-3 focus:border-green-500 focus:outline-none resize-none"
            rows={4}
          />
          <div className="flex gap-3">
            <Button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
              Post Reply
            </Button>
            <Button variant="outline" className="border-green-200 text-gray-700 hover:bg-green-50">
              Cancel
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
