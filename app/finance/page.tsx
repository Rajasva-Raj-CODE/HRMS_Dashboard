'use client';

import { DollarSign, Download, TrendingUp, TrendingDown, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardCard from '@/components/DashboardCard';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageContainer from '@/components/common/PageContainer';
import PageHeader from '@/components/common/PageHeader';
import { SlideIn } from '@/components/animations';

const salarySlips = [
  { month: 'September 2025', grossSalary: 75000, deductions: 15000, netSalary: 60000, status: 'Paid' },
  { month: 'August 2025', grossSalary: 75000, deductions: 15000, netSalary: 60000, status: 'Paid' },
  { month: 'July 2025', grossSalary: 75000, deductions: 15000, netSalary: 60000, status: 'Paid' },
  { month: 'June 2025', grossSalary: 75000, deductions: 15000, netSalary: 60000, status: 'Paid' },
];

const expenses = [
  { category: 'Travel', amount: 5000, percentage: 25 },
  { category: 'Food', amount: 3000, percentage: 15 },
  { category: 'Internet', amount: 2000, percentage: 10 },
  { category: 'Office Supplies', amount: 1500, percentage: 7.5 },
];

export default function FinancePage() {
  return (
    <SlideIn direction="up" duration={0.35}>
    <PageContainer>
      <PageHeader
        title="Finance"
        subtitle="Manage your payroll and expenses"
        actions={
          <Select defaultValue="2025">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Monthly Salary" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white dark:from-blue-600 dark:to-blue-700">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              <span className="text-2xl font-bold">₹60,000</span>
            </div>
            <p className="text-blue-100 text-sm">Net Pay - September</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Gross Salary" className="bg-gradient-to-r from-green-500 to-green-600 text-white dark:from-green-600 dark:to-green-700">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span className="text-2xl font-bold">₹75,000</span>
            </div>
            <p className="text-green-100 text-sm">Before deductions</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Deductions" className="bg-gradient-to-r from-red-500 to-red-600 text-white dark:from-red-600 dark:to-red-700">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-6 h-6" />
              <span className="text-2xl font-bold">₹15,000</span>
            </div>
            <p className="text-red-100 text-sm">Tax + PF + Insurance</p>
          </div>
        </DashboardCard>

        <DashboardCard title="YTD Earnings" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white dark:from-purple-600 dark:to-purple-700">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              <span className="text-2xl font-bold">₹5,40,000</span>
            </div>
            <p className="text-purple-100 text-sm">Year to date</p>
          </div>
        </DashboardCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Salary Slips */}
        <DashboardCard 
          title="Salary Slips" 
          headerAction={
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          }
        >
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Gross</TableHead>
                  <TableHead>Net</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salarySlips.map((slip, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{slip.month}</TableCell>
                    <TableCell>₹{slip.grossSalary.toLocaleString()}</TableCell>
                    <TableCell>₹{slip.netSalary.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {slip.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DashboardCard>

        {/* Expense Overview */}
        <DashboardCard title="Expense Categories">
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40">
                <div>
                  <p className="font-medium">{expense.category}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">₹{expense.amount.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{expense.percentage}%</div>
                  <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                    <div 
                      className="h-2 bg-blue-600 dark:bg-blue-500 rounded-full"
                      style={{ width: `${expense.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Payroll Summary */}
      <DashboardCard title="Payroll Breakdown - September 2025">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-green-600">Earnings</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Basic Salary</span>
                <span className="text-sm font-medium">₹40,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">HRA</span>
                <span className="text-sm font-medium">₹16,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Special Allowance</span>
                <span className="text-sm font-medium">₹19,000</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total Earnings</span>
                  <span>₹75,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-red-600">Deductions</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">PF</span>
                <span className="text-sm font-medium">₹4,800</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Professional Tax</span>
                <span className="text-sm font-medium">₹200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Income Tax</span>
                <span className="text-sm font-medium">₹10,000</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total Deductions</span>
                  <span>₹15,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-blue-600">Net Pay</h4>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600">₹60,000</div>
              <p className="text-sm text-blue-600 mt-1">Take home salary</p>
            </div>
          </div>
        </div>
      </DashboardCard>
    </PageContainer>
    </SlideIn>
  );
}