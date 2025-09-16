'use client';

import { useState } from 'react';
import { Clock, Plus, Calendar, BarChart3, CheckCircle } from 'lucide-react';
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

const timesheetEntries = [
  {
    id: 1,
    date: '2025-09-16',
    project: 'Project Alpha - Frontend',
    task: 'Implement user dashboard',
    hours: 8,
    status: 'Submitted'
  },
  {
    id: 2,
    date: '2025-09-13',
    project: 'Project Beta - Backend',
    task: 'API development and testing',
    hours: 7.5,
    status: 'Approved'
  },
  {
    id: 3,
    date: '2025-09-12',
    project: 'Project Alpha - Frontend',
    task: 'Bug fixes and optimization',
    hours: 6,
    status: 'Approved'
  },
  {
    id: 4,
    date: '2025-09-11',
    project: 'Training',
    task: 'React advanced concepts learning',
    hours: 4,
    status: 'Submitted'
  },
  {
    id: 5,
    date: '2025-09-10',
    project: 'Project Gamma - Mobile',
    task: 'Mobile app wireframes',
    hours: 8,
    status: 'Approved'
  }
];

const projects = [
  { id: 1, name: 'Project Alpha - Frontend', code: 'PA-FE' },
  { id: 2, name: 'Project Beta - Backend', code: 'PB-BE' },
  { id: 3, name: 'Project Gamma - Mobile', code: 'PG-MOB' },
  { id: 4, name: 'Training', code: 'TRN' },
  { id: 5, name: 'Internal - Meetings', code: 'INT-MEET' }
];

export default function TimesheetPage() {
  const totalHours = timesheetEntries.reduce((sum, entry) => sum + entry.hours, 0);
  const approvedHours = timesheetEntries
    .filter(entry => entry.status === 'Approved')
    .reduce((sum, entry) => sum + entry.hours, 0);
  const pendingHours = timesheetEntries
    .filter(entry => entry.status === 'Submitted')
    .reduce((sum, entry) => sum + entry.hours, 0);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'text-green-600 bg-green-50 border-green-200';
      case 'submitted': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'rejected': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <SlideIn direction="up" duration={0.35}>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Timesheet</h1>
          <p className="text-gray-600">Track your working hours and project time</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Log Hours
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Log Working Hours</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              <div>
                <Label htmlFor="project">Project</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project.id} value={project.code}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="hours">Hours Worked</Label>
                <Input id="hours" type="number" step="0.5" min="0" max="24" placeholder="8.0" />
              </div>
              <div>
                <Label htmlFor="task">Task Description</Label>
                <Textarea id="task" placeholder="Describe what you worked on..." />
              </div>
              <Button className="w-full">Log Hours</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Hours" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span className="text-3xl font-bold">{totalHours}h</span>
            </div>
            <p className="text-blue-100 text-sm">This month</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Approved Hours" className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-3xl font-bold">{approvedHours}h</span>
            </div>
            <p className="text-green-100 text-sm">Ready for payroll</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Pending Hours" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span className="text-3xl font-bold">{pendingHours}h</span>
            </div>
            <p className="text-yellow-100 text-sm">Awaiting approval</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Avg Daily Hours" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              <span className="text-3xl font-bold">7.6h</span>
            </div>
            <p className="text-purple-100 text-sm">This month</p>
          </div>
        </DashboardCard>
      </div>

      {/* Calendar View */}
      <DashboardCard title="September 2025 - Hours Overview">
        <div className="space-y-4">
          <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-600 border-b pb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-sm min-h-[200px]">
            {Array.from({ length: 30 }, (_, i) => {
              const date = i + 1;
              const hasEntry = timesheetEntries.some(entry => 
                new Date(entry.date).getDate() === date
              );
              const dayHours = timesheetEntries
                .filter(entry => new Date(entry.date).getDate() === date)
                .reduce((sum, entry) => sum + entry.hours, 0);
              
              return (
                <div
                  key={date}
                  className={`min-h-[60px] p-1 border border-gray-100 hover:bg-gray-50 ${
                    date === 16 ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mx-auto mb-1 ${
                    date === 16 ? 'bg-blue-600 text-white' : 'text-gray-700'
                  }`}>
                    {date}
                  </div>
                  {hasEntry && (
                    <div className="text-xs">
                      <div className="bg-green-100 text-green-800 px-1 rounded">
                        {dayHours}h
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </DashboardCard>

      {/* Timesheet Entries */}
      <DashboardCard title="Recent Entries">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Hours</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {timesheetEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">
                  {new Date(entry.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{entry.project}</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {entry.task}
                </TableCell>
                <TableCell className="font-medium">
                  {entry.hours}h
                </TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${getStatusColor(entry.status)}`}>
                    {entry.status}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {entry.status === 'Submitted' && (
                      <>
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                      </>
                    )}
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DashboardCard>

      {/* Project Breakdown */}
      <DashboardCard title="Hours by Project">
        <div className="space-y-4">
          {projects.slice(0, 4).map((project) => {
            const projectHours = timesheetEntries
              .filter(entry => entry.project.includes(project.name.split(' - ')[0]))
              .reduce((sum, entry) => sum + entry.hours, 0);
            const percentage = totalHours > 0 ? (projectHours / totalHours * 100) : 0;

            return (
              <div key={project.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{project.name}</p>
                  <p className="text-sm text-gray-600">{projectHours} hours</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{percentage.toFixed(1)}%</div>
                  <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                    <div 
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DashboardCard>
    </div>
    </SlideIn>
  );
}