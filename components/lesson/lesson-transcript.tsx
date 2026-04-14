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
    <Card className="bg-white border-green-100 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-green-50 transition-colors"
      >
        <h3 className="font-semibold text-gray-900">Transcript</h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-600" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t border-green-100 p-6 space-y-4">
          {/* Copy Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="border-green-200 text-gray-700 hover:bg-green-50"
          >
            <Copy className="h-4 w-4 mr-2" />
            {copied ? 'Copied!' : 'Copy Transcript'}
          </Button>

          {/* Transcript Content */}
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
              {transcript}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
