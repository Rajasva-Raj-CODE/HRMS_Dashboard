'use client';

import { useState } from 'react';
import { UserMinus, Plus, Calendar, AlertCircle, CheckCircle, XCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardCard from '@/components/DashboardCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SlideIn } from '@/components/animations';

const resignations = [
  {
    id: 1,
    employeeName: 'John Smith',
    position: 'Senior Developer',
    department: 'Engineering',
    submissionDate: '2025-09-10',
    lastWorkingDay: '2025-10-10',
    reason: 'Better opportunity',
    status: 'Pending',
    noticePeriod: 30,
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  },
  {
    id: 2,
    employeeName: 'Sarah Wilson',
    position: 'Product Manager',
    department: 'Product',
    submissionDate: '2025-09-05',
    lastWorkingDay: '2025-10-05',
    reason: 'Career change',
    status: 'Accepted',
    noticePeriod: 30,
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  },
  {
    id: 3,
    employeeName: 'Mike Johnson',
    position: 'UX Designer',
    department: 'Design',
    submissionDate: '2025-08-28',
    lastWorkingDay: '2025-09-28',
    reason: 'Relocation',
    status: 'Closed',
    noticePeriod: 30,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  }
];

export default function ResignationPage() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'accepted': return 'text-green-600 bg-green-50 border-green-200';
      case 'closed': return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'rejected': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'accepted': return <CheckCircle className="w-4 h-4" />;
      case 'closed': return <FileText className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const calculateRemainingDays = (lastWorkingDay: string) => {
    const today = new Date();
    const lastDay = new Date(lastWorkingDay);
    const diffTime = lastDay.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <SlideIn direction="up" duration={0.35}>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Resignation</h1>
          <p className="text-gray-600">Manage resignation requests and exit processes</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Submit Resignation
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submit Resignation</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="lastWorkingDay">Last Working Day</Label>
                <Input id="lastWorkingDay" type="date" />
              </div>
              <div>
                <Label htmlFor="reason">Reason for Resignation</Label>
                <Textarea 
                  id="reason" 
                  placeholder="Please provide reason for resignation..."
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="handover">Handover Details</Label>
                <Textarea 
                  id="handover" 
                  placeholder="Mention projects and responsibilities to be handed over..."
                  rows={3}
                />
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-800">Notice Period</p>
                    <p className="text-xs text-amber-700">
                      As per company policy, the standard notice period is 30 days. 
                      Please ensure proper handover of your responsibilities.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full">Submit Resignation</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Resignations">
          <div className="flex items-center gap-2">
            <UserMinus className="w-8 h-8 text-red-600" />
            <span className="text-3xl font-bold">{resignations.length}</span>
          </div>
        </DashboardCard>
        
        <DashboardCard title="Pending">
          <div className="text-2xl font-bold text-yellow-600">
            {resignations.filter(r => r.status === 'Pending').length}
          </div>
        </DashboardCard>
        
        <DashboardCard title="Accepted">
          <div className="text-2xl font-bold text-green-600">
            {resignations.filter(r => r.status === 'Accepted').length}
          </div>
        </DashboardCard>

        <DashboardCard title="This Month">
          <div className="text-2xl font-bold text-purple-600">
            {resignations.filter(r => new Date(r.submissionDate).getMonth() === new Date().getMonth()).length}
          </div>
        </DashboardCard>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Resignations</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resignations.map((resignation) => (
              <DashboardCard key={resignation.id} title="">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={resignation.avatar} />
                        <AvatarFallback>
                          {resignation.employeeName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{resignation.employeeName}</h3>
                        <p className="text-sm text-gray-600">{resignation.position}</p>
                        <Badge variant="outline" className="text-xs">{resignation.department}</Badge>
                      </div>
                    </div>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(resignation.status)}`}>
                      {getStatusIcon(resignation.status)}
                      {resignation.status}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">
                        Submitted: {new Date(resignation.submissionDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <UserMinus className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">
                        Last Day: {new Date(resignation.lastWorkingDay).toLocaleDateString()}
                      </span>
                    </div>

                    {resignation.status !== 'Closed' && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">
                          {calculateRemainingDays(resignation.lastWorkingDay)} days remaining
                        </p>
                        <p className="text-xs text-blue-600">Until last working day</p>
                      </div>
                    )}

                    <div className="pt-2 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Reason:</span> {resignation.reason}
                      </p>
                    </div>
                  </div>

                  {resignation.status === 'Pending' && (
                    <div className="flex gap-2 pt-3 border-t">
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Accept
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-red-600">
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  )}

                  {resignation.status === 'Accepted' && (
                    <div className="pt-3 border-t">
                      <Button size="sm" className="w-full" variant="outline">
                        Start Exit Process
                      </Button>
                    </div>
                  )}
                </div>
              </DashboardCard>
            ))}
          </div>
        </TabsContent>

        {/* Other tabs with filtered content */}
        <TabsContent value="pending">
          <DashboardCard title="Pending Resignations">
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {resignations.filter(r => r.status === 'Pending').length} pending resignation(s) require your attention
              </p>
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="accepted">
          <DashboardCard title="Accepted Resignations">
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {resignations.filter(r => r.status === 'Accepted').length} accepted resignation(s) in exit process
              </p>
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="closed">
          <DashboardCard title="Closed Resignations">
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {resignations.filter(r => r.status === 'Closed').length} completed resignation(s)
              </p>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>

      {/* Exit Checklist */}
      <DashboardCard title="Exit Process Checklist">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm">IT Equipment Return</span>
            <Badge className="ml-auto bg-green-100 text-green-800">Completed</Badge>
          </div>
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm">Knowledge Transfer Session</span>
            <Badge className="ml-auto bg-green-100 text-green-800">Completed</Badge>
          </div>
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            <span className="text-sm">Final Settlement</span>
            <Badge className="ml-auto bg-yellow-100 text-yellow-800">Pending</Badge>
          </div>
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            <span className="text-sm">Exit Interview</span>
            <Badge className="ml-auto bg-yellow-100 text-yellow-800">Pending</Badge>
          </div>
        </div>
      </DashboardCard>
    </div>
    </SlideIn>
  );
}