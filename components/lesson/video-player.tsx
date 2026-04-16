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
    <Card className="h-full overflow-hidden border-0 bg-black">
      <div className="relative flex aspect-video items-center justify-center bg-black">
        {/* YouTube Embed */}
        <iframe
          width="100%"
          height="100%"
          src={`${videoUrl}?cc_load_policy=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        ></iframe>
      </div>

      {/* Video Info and Controls */}
      <div className="border-t border-border bg-card p-6">
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-xl font-bold text-foreground">{title}</h2>

          {/* Duration and Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Video Progress</span>
              <span className="font-semibold text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{duration} minutes</span>
            </div>
            <Badge variant="secondary">HD</Badge>
          </div>

          {/* Captions Toggle */}
          <div className="flex items-center gap-2 border-t border-border pt-4">
            <input
              type="checkbox"
              id="captions"
              checked={showCaptions}
              onChange={(e) => setShowCaptions(e.target.checked)}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <label htmlFor="captions" className="cursor-pointer text-sm font-medium text-foreground">
              Show Captions/Subtitles
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
}
