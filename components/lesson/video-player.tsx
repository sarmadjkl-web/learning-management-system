'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, Volume2, Settings, Maximize, Clock } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  duration: number;
  progress?: number;
  onProgressChange?: (progress: number) => void;
}

export function VideoPlayer({
  videoUrl,
  title,
  duration,
  progress = 0,
  onProgressChange,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showCaptions, setShowCaptions] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Card className="bg-black border-0 overflow-hidden h-full">
      <div className="relative bg-black aspect-video flex items-center justify-center">
        {/* YouTube Embed */}
        <iframe
          width="100%"
          height="100%"
          src={`${videoUrl}?cc_load_policy=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Video Info and Controls */}
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>

          {/* Duration and Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Video Progress</span>
              <span className="text-green-600 font-semibold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-teal-600" />
              <span>{duration} minutes</span>
            </div>
            <Badge variant="secondary">HD</Badge>
          </div>

          {/* Captions Toggle */}
          <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
            <input
              type="checkbox"
              id="captions"
              checked={showCaptions}
              onChange={(e) => setShowCaptions(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label htmlFor="captions" className="text-sm font-medium text-gray-700 cursor-pointer">
              Show Captions/Subtitles
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
}
