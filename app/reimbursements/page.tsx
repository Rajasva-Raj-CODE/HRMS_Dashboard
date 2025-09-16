'use client';

import { useState } from 'react';
import { Plus, Receipt, Upload, Download, Calendar } from 'lucide-react';
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

const reimbursements = [
  {
    id: 1,
    date: '2025-09-15',
    category: 'Travel',
    description: 'Client meeting taxi fare',
    amount: 450,
    status: 'Approved',
    submittedDate: '2025-09-15',
    receipt: 'taxi_receipt.pdf'
  },
  {
    id: 2,
    date: '2025-09-12',
    category: 'Meals',
    description: 'Team lunch during client visit',
    amount: 2800,
    status: 'Pending',
    submittedDate: '2025-09-13',
    receipt: 'restaurant_bill.jpg'
  },
  {
    id: 3,
    date: '2025-09-10',
    category: 'Internet',
    description: 'Home internet bill for WFH',
    amount: 1200,
    status: 'Approved',
    submittedDate: '2025-09-10',
    receipt: 'internet_bill.pdf'
  },
  {
    id: 4,
    date: '2025-09-08',
    category: 'Office Supplies',
    description: 'Printer cartridge for home office',
    amount: 850,
    status: 'Rejected',
    submittedDate: '2025-09-08',
    receipt: 'supplies_receipt.jpg'
  },
  {
    id: 5,
    date: '2025-09-05',
    category: 'Travel',
    description: 'Airport parking fees',
    amount: 320,
    status: 'Approved',
    submittedDate: '2025-09-06',
    receipt: 'parking_receipt.pdf'
  }
];

export default function ReimbursementsPage() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'text-green-600 bg-green-50 border-green-200';
      case 'rejected': return 'text-red-600 bg-red-50 border-red-200';
      case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const totalAmount = reimbursements.reduce((sum, item) => sum + item.amount, 0);
  const approvedAmount = reimbursements
    .filter(item => item.status === 'Approved')
    .reduce((sum, item) => sum + item.amount, 0);
  const pendingAmount = reimbursements
    .filter(item => item.status === 'Pending')
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <SlideIn direction="up" duration={0.35}>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reimbursements</h1>
          <p className="text-gray-600">Track and submit expense reimbursements</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Submit Claim
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Submit Reimbursement Claim</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="meals">Meals</SelectItem>
                    <SelectItem value="internet">Internet</SelectItem>
                    <SelectItem value="office-supplies">Office Supplies</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input id="amount" type="number" placeholder="0.00" />
              </div>
              <div>
                <Label htmlFor="date">Expense Date</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your expense" />
              </div>
              <div>
                <Label htmlFor="receipt">Upload Receipt</Label>
                <div className="flex items-center gap-2">
                  <Input id="receipt" type="file" accept="image/*,.pdf" />
                  <Button type="button" variant="outline" size="sm">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Button className="w-full">Submit Claim</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Claims" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="space-y-2">
            <div className="text-3xl font-bold">₹{totalAmount.toLocaleString()}</div>
            <p className="text-blue-100 text-sm">This month</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Approved" className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="space-y-2">
            <div className="text-3xl font-bold">₹{approvedAmount.toLocaleString()}</div>
            <p className="text-green-100 text-sm">Ready for payout</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Pending" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <div className="space-y-2">
            <div className="text-3xl font-bold">₹{pendingAmount.toLocaleString()}</div>
            <p className="text-yellow-100 text-sm">Under review</p>
          </div>
        </DashboardCard>

        <DashboardCard title="This Month" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <div className="space-y-2">
            <div className="text-3xl font-bold">{reimbursements.length}</div>
            <p className="text-purple-100 text-sm">Total claims</p>
          </div>
        </DashboardCard>
      </div>

      {/* Reimbursements Table */}
      <DashboardCard 
        title="Recent Claims" 
        headerAction={
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        }
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Receipt</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reimbursements.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {new Date(item.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{item.category}</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {item.description}
                </TableCell>
                <TableCell className="font-medium">
                  ₹{item.amount.toLocaleString()}
                </TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${getStatusColor(item.status)}`}>
                    {item.status}
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    <Receipt className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {item.status === 'Pending' && (
                      <>
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                      </>
                    )}
                    {item.status === 'Approved' && (
                      <Button variant="ghost" size="sm" className="text-green-600">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DashboardCard>

      {/* Category Breakdown */}
      <DashboardCard title="Expense Categories">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Travel', 'Meals', 'Internet', 'Office Supplies'].map((category) => {
            const categoryTotal = reimbursements
              .filter(item => item.category === category)
              .reduce((sum, item) => sum + item.amount, 0);
            const categoryCount = reimbursements.filter(item => item.category === category).length;

            return (
              <div key={category} className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Receipt className="w-5 h-5 text-blue-600" />
                  <h3 className="font-medium">{category}</h3>
                </div>
                <div className="text-2xl font-bold">₹{categoryTotal.toLocaleString()}</div>
                <p className="text-sm text-gray-600">{categoryCount} claims</p>
              </div>
            );
          })}
        </div>
      </DashboardCard>
    </div>
    </SlideIn>
  );
}