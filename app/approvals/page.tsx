'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Clock, User, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardCard from '@/components/DashboardCard';
import PageContainer from '@/components/common/PageContainer';
import PageHeader from '@/components/common/PageHeader';
import { SlideIn } from '@/components/animations';
import EmptyState from '@/components/common/EmptyState';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const approvals = [
  {
    id: 1,
    type: 'Leave',
    employee: 'John Smith',
    title: 'Annual Leave Request',
    description: '5 days leave for family vacation',
    startDate: '2025-09-25',
    endDate: '2025-09-29',
    submittedDate: '2025-09-16',
    amount: null,
    status: 'Pending',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  },
  {
    id: 2,
    type: 'Expense',
    employee: 'Sarah Wilson',
    title: 'Client Meeting Expenses',
    description: 'Lunch with potential client and travel costs',
    submittedDate: '2025-09-15',
    amount: 3500,
    status: 'Pending',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  },
  {
    id: 3,
    type: 'Timesheet',
    employee: 'Mike Johnson',
    title: 'Overtime Hours - Project Alpha',
    description: 'Weekend work for urgent client delivery',
    submittedDate: '2025-09-14',
    amount: null,
    hours: 12,
    status: 'Pending',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  },
  {
    id: 4,
    type: 'Leave',
    employee: 'Emily Chen',
    title: 'Sick Leave',
    description: 'Medical appointment and recovery',
    startDate: '2025-09-18',
    endDate: '2025-09-19',
    submittedDate: '2025-09-13',
    amount: null,
    status: 'Approved',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  }
];

export default function ApprovalsPage() {
  const [selectedApproval, setSelectedApproval] = useState<any>(null);

  const pendingApprovals = approvals.filter(a => a.status === 'Pending');
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Leave': return <Calendar className="w-4 h-4" />;
      case 'Expense': return <DollarSign className="w-4 h-4" />;
      case 'Timesheet': return <Clock className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leave': return 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/40';
      case 'Expense': return 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800/40';
      case 'Timesheet': return 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/40';
      default: return 'bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-800/40';
    }
  };

  return (
    <SlideIn direction="up" duration={0.35}>
    <PageContainer>
      <PageHeader title="Approvals" subtitle="Manage pending approvals and requests" />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Pending Approvals">
          <div className="flex items-center gap-2">
            <Clock className="w-8 h-8 text-yellow-600" />
            <span className="text-3xl font-bold">{pendingApprovals.length}</span>
          </div>
        </DashboardCard>
        <DashboardCard title="Leave Requests">
          <div className="text-2xl font-bold text-blue-600">
            {approvals.filter(a => a.type === 'Leave' && a.status === 'Pending').length}
          </div>
        </DashboardCard>
        <DashboardCard title="Expense Claims">
          <div className="text-2xl font-bold text-green-600">
            {approvals.filter(a => a.type === 'Expense' && a.status === 'Pending').length}
          </div>
        </DashboardCard>
        <DashboardCard title="Timesheet Reviews">
          <div className="text-2xl font-bold text-purple-600">
            {approvals.filter(a => a.type === 'Timesheet' && a.status === 'Pending').length}
          </div>
        </DashboardCard>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList>
          <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
          <TabsTrigger value="leave">Leave Requests</TabsTrigger>
          <TabsTrigger value="expense">Expense Claims</TabsTrigger>
          <TabsTrigger value="timesheet">Timesheet Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingApprovals.length === 0 ? (
            <DashboardCard title="No Pending Approvals">
              <EmptyState icon={<CheckCircle className="w-16 h-16 text-green-300" />} description="Relax! No approvals pending at the moment." className="py-12" />
            </DashboardCard>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingApprovals.map((approval) => (
                <DashboardCard key={approval.id} title="">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={approval.avatar} 
                          alt={approval.employee}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{approval.employee}</h3>
                          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getTypeColor(approval.type)}`}>
                            {getTypeIcon(approval.type)}
                            {approval.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">{approval.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{approval.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        {approval.startDate && (
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(approval.startDate).toLocaleDateString()}
                              {approval.endDate && approval.endDate !== approval.startDate && 
                                ` - ${new Date(approval.endDate).toLocaleDateString()}`
                              }
                            </span>
                          </div>
                        )}
                        
                        {approval.amount && (
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <DollarSign className="w-4 h-4" />
                            <span>₹{approval.amount.toLocaleString()}</span>
                          </div>
                        )}

                        {approval.hours && (
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{approval.hours} overtime hours</span>
                          </div>
                        )}

                        <div className="text-gray-500 text-xs">
                          Submitted {new Date(approval.submittedDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-3 border-t">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            className="flex-1 bg-green-600 hover:bg-green-700"
                            onClick={() => setSelectedApproval(approval)}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Approve Request</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium">{selectedApproval?.title}</h4>
                              <p className="text-sm text-gray-600">by {selectedApproval?.employee}</p>
                            </div>
                            <div>
                              <Label htmlFor="approval-comment">Comments (Optional)</Label>
                              <Textarea 
                                id="approval-comment" 
                                placeholder="Add any comments for the employee..."
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                                Confirm Approval
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => setSelectedApproval(approval)}
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Reject Request</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium">{selectedApproval?.title}</h4>
                              <p className="text-sm text-gray-600">by {selectedApproval?.employee}</p>
                            </div>
                            <div>
                              <Label htmlFor="rejection-reason">Reason for Rejection *</Label>
                              <Textarea 
                                id="rejection-reason" 
                                placeholder="Please provide a reason for rejection..."
                                required
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button className="flex-1 bg-red-600 hover:bg-red-700">
                                Confirm Rejection
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </DashboardCard>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Other tabs with filtered content */}
        <TabsContent value="leave">
          <DashboardCard title="Leave Requests">
            <EmptyState icon={<Calendar className="w-16 h-16 text-gray-300" />} description="No leave requests pending approval" className="py-12" />
          </DashboardCard>
        </TabsContent>

        <TabsContent value="expense">
          <DashboardCard title="Expense Claims">
            <EmptyState icon={<DollarSign className="w-16 h-16 text-gray-300" />} description="No expense claims pending approval" className="py-12" />
          </DashboardCard>
        </TabsContent>

        <TabsContent value="timesheet">
          <DashboardCard title="Timesheet Reviews">
            <EmptyState icon={<Clock className="w-16 h-16 text-gray-300" />} description="No timesheets pending approval" className="py-12" />
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </PageContainer>
    </SlideIn>
  );
}