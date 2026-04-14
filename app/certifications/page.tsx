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
        <h1 className="text-3xl font-bold text-gray-900">Your Certifications</h1>
        <p className="text-gray-600 mt-2">
          Celebrate your learning achievements and showcase your skills
        </p>
      </div>

      {/* Earned Certificates */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Earned Certificates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-8 w-8" />
                  <Badge className="bg-white text-amber-700">Verified</Badge>
                </div>
                <h3 className="text-xl font-bold">{cert.course}</h3>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Instructor</p>
                  <p className="text-gray-900 font-medium">{cert.instructor}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Issued Date</p>
                  <p className="text-gray-900 font-medium">
                    {new Date(cert.issuedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Certificate Number</p>
                  <p className="text-gray-900 font-medium font-mono text-sm">{cert.certificateNumber}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-amber-200">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-amber-300 text-gray-700 hover:bg-amber-50"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-amber-300 text-gray-700 hover:bg-amber-50"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">In Progress</h2>
        <div className="space-y-4">
          {inProgress.map((item) => (
            <Card key={item.id} className="bg-white border-green-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{item.course}</h3>
                <span className="text-sm font-bold text-green-600">{item.progress}%</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-teal-600 transition-all"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600">Complete this course to earn your certificate</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
