'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Download, Share2 } from 'lucide-react';

const certificates = [
  {
    id: 'cert-1',
    course: 'React Fundamentals',
    issuedDate: '2024-03-15',
    certificateNumber: 'RF-2024-001',
    instructor: 'Sarah Johnson',
  },
  {
    id: 'cert-2',
    course: 'Advanced TypeScript Patterns',
    issuedDate: '2024-02-20',
    certificateNumber: 'ATP-2024-002',
    instructor: 'Mike Chen',
  },
  {
    id: 'cert-3',
    course: 'Full Stack Web Development',
    issuedDate: '2023-12-10',
    certificateNumber: 'FSWD-2023-003',
    instructor: 'David Lee',
  },
];

const inProgress = [
  {
    id: 'progress-1',
    course: 'Mobile App Development with React Native',
    progress: 30,
  },
];

export default function CertificationsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Your Certifications</h1>
        <p className="mt-2 text-muted-foreground">
          Celebrate your learning achievements and showcase your skills
        </p>
      </div>

      {/* Earned Certificates */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Earned Certificates</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="overflow-hidden border-2 border-border bg-card transition-shadow hover:shadow-lg"
            >
              {/* Certificate Header */}
              <div className="bg-primary p-6 text-primary-foreground">
                <div className="mb-4 flex items-center justify-between">
                  <Award className="h-8 w-8" />
                  <Badge className="bg-background text-foreground">Verified</Badge>
                </div>
                <h3 className="text-xl font-bold">{cert.course}</h3>
              </div>

              {/* Certificate Details */}
              <div className="space-y-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Instructor</p>
                  <p className="font-medium text-foreground">{cert.instructor}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Issued Date</p>
                  <p className="font-medium text-foreground">
                    {new Date(cert.issuedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Certificate Number</p>
                  <p className="font-mono text-sm font-medium text-foreground">{cert.certificateNumber}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 border-t border-border pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border text-foreground hover:bg-secondary"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border text-foreground hover:bg-secondary"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* In Progress */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-foreground">In Progress</h2>
        <div className="space-y-4">
          {inProgress.map((item) => (
            <Card key={item.id} className="border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{item.course}</h3>
                <span className="text-sm font-bold text-primary">{item.progress}%</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">Complete this course to earn your certificate</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
