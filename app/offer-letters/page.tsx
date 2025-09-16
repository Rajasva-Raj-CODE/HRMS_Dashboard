'use client';

import { useState } from 'react';
import { FileText, Plus, Download, Send, User, Calendar, DollarSign, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SlideIn } from '@/components/animations';

const offerLetters = [
  {
    id: 1,
    candidateName: 'Alex Johnson',
    position: 'Senior Frontend Developer',
    department: 'Engineering',
    salary: 1200000,
    dateIssued: '2025-09-15',
    joiningDate: '2025-10-01',
    status: 'Sent',
    email: 'alex.johnson@email.com'
  },
  {
    id: 2,
    candidateName: 'Maria Garcia',
    position: 'Product Designer',
    department: 'Design',
    salary: 950000,
    dateIssued: '2025-09-12',
    joiningDate: '2025-09-25',
    status: 'Accepted',
    email: 'maria.garcia@email.com'
  },
  {
    id: 3,
    candidateName: 'David Chen',
    position: 'DevOps Engineer',
    department: 'Engineering',
    salary: 1100000,
    dateIssued: '2025-09-10',
    joiningDate: '2025-09-30',
    status: 'Pending',
    email: 'david.chen@email.com'
  },
  {
    id: 4,
    candidateName: 'Sarah Williams',
    position: 'Marketing Manager',
    department: 'Marketing',
    salary: 800000,
    dateIssued: '2025-09-08',
    joiningDate: '2025-09-20',
    status: 'Declined',
    email: 'sarah.williams@email.com'
  },
  {
    id: 5,
    candidateName: 'Robert Brown',
    position: 'Data Scientist',
    department: 'Analytics',
    salary: 1350000,
    dateIssued: '2025-09-05',
    joiningDate: '2025-09-18',
    status: 'Accepted',
    email: 'robert.brown@email.com'
  }
];

export default function OfferLettersPage() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'accepted': return 'text-green-600 bg-green-50 border-green-200';
      case 'declined': return 'text-red-600 bg-red-50 border-red-200';
      case 'sent': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'accepted': return <CheckCircle className="w-4 h-4" />;
      case 'sent': return <Send className="w-4 h-4" />;
      case 'pending': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <SlideIn direction="up" duration={0.35}>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Offer Letters</h1>
          <p className="text-gray-600">Manage job offer letters and track responses</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Offer Letter
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Offer Letter</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="candidateName">Candidate Name</Label>
                  <Input id="candidateName" placeholder="Enter candidate name" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="candidate@email.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" placeholder="Job title" />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="salary">Annual Salary (₹)</Label>
                  <Input id="salary" type="number" placeholder="1000000" />
                </div>
                <div>
                  <Label htmlFor="joiningDate">Joining Date</Label>
                  <Input id="joiningDate" type="date" />
                </div>
              </div>

              <div>
                <Label htmlFor="additionalTerms">Additional Terms</Label>
                <Textarea 
                  id="additionalTerms" 
                  placeholder="Any additional terms or conditions..."
                  rows={3}
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="flex-1">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Draft
                </Button>
                <Button className="flex-1" variant="outline">
                  <Send className="w-4 h-4 mr-2" />
                  Generate & Send
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <DashboardCard title="Total Offers">
          <div className="flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <span className="text-3xl font-bold">{offerLetters.length}</span>
          </div>
        </DashboardCard>
        
        <DashboardCard title="Accepted">
          <div className="text-2xl font-bold text-green-600">
            {offerLetters.filter(o => o.status === 'Accepted').length}
          </div>
        </DashboardCard>
        
        <DashboardCard title="Pending">
          <div className="text-2xl font-bold text-yellow-600">
            {offerLetters.filter(o => o.status === 'Pending').length}
          </div>
        </DashboardCard>
        
        <DashboardCard title="Sent">
          <div className="text-2xl font-bold text-blue-600">
            {offerLetters.filter(o => o.status === 'Sent').length}
          </div>
        </DashboardCard>

        <DashboardCard title="Declined">
          <div className="text-2xl font-bold text-red-600">
            {offerLetters.filter(o => o.status === 'Declined').length}
          </div>
        </DashboardCard>
      </div>

      {/* Offer Letters Table */}
      <DashboardCard 
        title="Offer Letters" 
        headerAction={
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        }
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Date Issued</TableHead>
              <TableHead>Joining Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offerLetters.map((offer) => (
              <TableRow key={offer.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{offer.candidateName}</div>
                    <div className="text-sm text-gray-600">{offer.email}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{offer.position}</TableCell>
                <TableCell>
                  <Badge variant="outline">{offer.department}</Badge>
                </TableCell>
                <TableCell className="font-medium">
                  ₹{(offer.salary / 100000).toFixed(1)}L
                </TableCell>
                <TableCell>
                  {new Date(offer.dateIssued).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(offer.joiningDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(offer.status)}`}>
                    {getStatusIcon(offer.status)}
                    {offer.status}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" title="Download">
                      <Download className="w-4 h-4" />
                    </Button>
                    {offer.status === 'Pending' && (
                      <Button variant="ghost" size="sm" title="Send Reminder">
                        <Send className="w-4 h-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DashboardCard>

      {/* Recent Activity */}
      <DashboardCard title="Recent Activity">
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Maria Garcia accepted the offer</p>
              <p className="text-sm text-gray-600">Product Designer position • 2 days ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Send className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Offer letter sent to Alex Johnson</p>
              <p className="text-sm text-gray-600">Senior Frontend Developer position • 3 days ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Sarah Williams declined the offer</p>
              <p className="text-sm text-gray-600">Marketing Manager position • 5 days ago</p>
            </div>
          </div>
        </div>
      </DashboardCard>
    </div>
    </SlideIn>
  );
}