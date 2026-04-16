'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Copy } from 'lucide-react';

interface LessonTranscriptProps {
  transcript: string;
}

export function LessonTranscript({ transcript }: LessonTranscriptProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden border-border bg-card">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between p-6 transition-colors hover:bg-secondary"
      >
        <h3 className="font-semibold text-foreground">Transcript</h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      {isExpanded && (
        <div className="space-y-4 border-t border-border p-6">
          {/* Copy Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="border-border text-foreground hover:bg-secondary"
          >
            <Copy className="mr-2 h-4 w-4" />
            {copied ? 'Copied!' : 'Copy Transcript'}
          </Button>

          {/* Transcript Content */}
          <div className="max-h-96 overflow-y-auto rounded-lg bg-muted p-4">
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
              {transcript}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
