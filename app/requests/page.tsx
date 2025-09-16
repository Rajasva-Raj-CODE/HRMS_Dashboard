'use client';

import { useState } from 'react';
import { Plus, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardCard from '@/components/DashboardCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageContainer from '@/components/common/PageContainer';
import PageHeader from '@/components/common/PageHeader';
import EmptyState from '@/components/common/EmptyState';
import { SlideIn } from '@/components/animations';

const requests = [
  {
    id: 1,
    type: 'Leave',
    title: 'Annual Leave Request',
    description: 'Requesting 3 days leave for family vacation',
    startDate: '2025-09-20',
    endDate: '2025-09-22',
    status: 'Pending',
    requestDate: '2025-09-15',
    approver: 'Sarah Johnson'
  },
  {
    id: 2,
    type: 'Equipment',
    title: 'Laptop Upgrade Request',
    description: 'Current laptop is slow, need MacBook Pro M3',
    startDate: '2025-09-10',
    endDate: null,
    status: 'Approved',
    requestDate: '2025-09-10',
    approver: 'IT Department'
  },
  {
    id: 3,
    type: 'Training',
    title: 'React Advanced Training',
    description: 'Want to attend React conference in NYC',
    startDate: '2025-10-15',
    endDate: '2025-10-17',
    status: 'Rejected',
    requestDate: '2025-09-05',
    approver: 'HR Department'
  },
  {
    id: 4,
    type: 'Leave',
    title: 'Sick Leave',
    description: 'Not feeling well, need to rest',
    startDate: '2025-09-14',
    endDate: '2025-09-14',
    status: 'Approved',
    requestDate: '2025-09-14',
    approver: 'Sarah Johnson'
  }
];

export default function RequestsPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredRequests = requests.filter(request => {
    if (selectedTab === 'all') return true;
    return request.status.toLowerCase() === selectedTab;
  });

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'rejected': return <XCircle className="w-4 h-4 text-red-600" />;
      case 'pending': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/40';
      case 'rejected': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/40';
      case 'pending': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800/40';
      default: return 'text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800/40';
    }
  };

  return (
    <SlideIn direction="up" duration={0.35}>
    <PageContainer>
      <PageHeader
        title="Requests"
        subtitle="Manage your leave and other requests"
        actions={
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Request
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Request</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="type">Request Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leave">Leave Request</SelectItem>
                      <SelectItem value="equipment">Equipment Request</SelectItem>
                      <SelectItem value="training">Training Request</SelectItem>
                      <SelectItem value="travel">Travel Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter request title" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input id="endDate" type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter request details" />
                </div>
                <Button className="w-full">Submit Request</Button>
              </div>
            </DialogContent>
          </Dialog>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Requests">
          <div className="text-3xl font-bold text-blue-600">{requests.length}</div>
        </DashboardCard>
        <DashboardCard title="Pending">
          <div className="text-3xl font-bold text-yellow-600">
            {requests.filter(r => r.status === 'Pending').length}
          </div>
        </DashboardCard>
        <DashboardCard title="Approved">
          <div className="text-3xl font-bold text-green-600">
            {requests.filter(r => r.status === 'Approved').length}
          </div>
        </DashboardCard>
        <DashboardCard title="Rejected">
          <div className="text-3xl font-bold text-red-600">
            {requests.filter(r => r.status === 'Rejected').length}
          </div>
        </DashboardCard>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="all">All Requests</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((request) => (
              <DashboardCard key={request.id} title="">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{request.title}</h3>
                      <Badge variant="outline" className="text-xs mt-1">
                        {request.type}
                      </Badge>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      {request.status}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300">{request.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(request.startDate).toLocaleDateString()}
                        {request.endDate && request.endDate !== request.startDate && 
                          ` - ${new Date(request.endDate).toLocaleDateString()}`
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Requested on {new Date(request.requestDate).toLocaleDateString()}</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Approver:</span> {request.approver}
                    </div>
                  </div>

                  {request.status === 'Pending' && (
                    <div className="flex gap-2 pt-3 border-t">
                      <Button size="sm" variant="outline" className="flex-1">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-red-600">
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </DashboardCard>
            ))}
          </div>

          {filteredRequests.length === 0 && (
            <EmptyState icon={<AlertCircle className="w-16 h-16 text-gray-300" />} description={`No ${selectedTab === 'all' ? '' : selectedTab} requests found`} className="py-12" />
          )}
        </TabsContent>
      </Tabs>
    </PageContainer>
    </SlideIn>
  );
}