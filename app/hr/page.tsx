'use client';

import { useState } from 'react';
import { Users, Search, Filter, Plus, Star, Building, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardCard from '@/components/DashboardCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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

const employees = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@company.com',
    position: 'Senior Developer',
    department: 'Engineering',
    joinDate: '2023-01-15',
    salary: 1200000,
    rating: 4.8,
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    position: 'Product Manager',
    department: 'Product',
    joinDate: '2022-08-20',
    salary: 1500000,
    rating: 4.9,
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike.wilson@company.com',
    position: 'UX Designer',
    department: 'Design',
    joinDate: '2023-03-10',
    salary: 950000,
    rating: 4.6,
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    position: 'Marketing Specialist',
    department: 'Marketing',
    joinDate: '2023-06-01',
    salary: 750000,
    rating: 4.3,
    status: 'On Leave',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  }
];

const reviews = [
  {
    id: 1,
    employeeName: 'John Smith',
    reviewer: 'Sarah Johnson',
    period: 'Q2 2025',
    rating: 4.8,
    status: 'Completed',
    dueDate: '2025-09-30'
  },
  {
    id: 2,
    employeeName: 'Mike Wilson',
    reviewer: 'Sarah Johnson',
    period: 'Q2 2025',
    rating: 4.6,
    status: 'In Progress',
    dueDate: '2025-09-30'
  }
];

const trainingPrograms = [
  {
    id: 1,
    title: 'React Advanced Training',
    duration: '3 days',
    participants: 15,
    startDate: '2025-10-15',
    status: 'Upcoming'
  },
  {
    id: 2,
    title: 'Leadership Development',
    duration: '1 week',
    participants: 8,
    startDate: '2025-09-25',
    status: 'Ongoing'
  }
];

export default function HRPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <SlideIn direction="up" duration={0.35}>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">HR Management</h1>
          <p className="text-gray-600">Manage employees, reviews, and training programs</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="Enter full name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="employee@company.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Position</label>
                  <Input placeholder="Job title" />
                </div>
                <div>
                  <label className="text-sm font-medium">Department</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Joining Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="text-sm font-medium">Salary</label>
                  <Input type="number" placeholder="Annual salary" />
                </div>
              </div>
              <Button className="w-full">Add Employee</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Employees">
          <div className="flex items-center gap-2">
            <Users className="w-8 h-8 text-blue-600" />
            <span className="text-3xl font-bold">{employees.length}</span>
          </div>
        </DashboardCard>

        <DashboardCard title="Active Employees">
          <div className="text-2xl font-bold text-green-600">
            {employees.filter(e => e.status === 'Active').length}
          </div>
        </DashboardCard>

        <DashboardCard title="Departments">
          <div className="text-2xl font-bold text-purple-600">
            {new Set(employees.map(e => e.department)).size}
          </div>
        </DashboardCard>

        <DashboardCard title="Avg Rating">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-600" />
            <span className="text-2xl font-bold">
              {(employees.reduce((sum, e) => sum + e.rating, 0) / employees.length).toFixed(1)}
            </span>
          </div>
        </DashboardCard>
      </div>

      <Tabs defaultValue="directory" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="directory">Employee Directory</TabsTrigger>
          <TabsTrigger value="reviews">Performance Reviews</TabsTrigger>
          <TabsTrigger value="training">Training Programs</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Product">Product</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DashboardCard title="Employee List">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={employee.avatar} />
                          <AvatarFallback>
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className="text-sm text-gray-600">{employee.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{employee.department}</Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(employee.joinDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{employee.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={employee.status === 'Active' ? 'default' : 'secondary'}
                      >
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">View Profile</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <DashboardCard title="Performance Reviews">
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{review.employeeName}</p>
                      <p className="text-sm text-gray-600">
                        Reviewed by {review.reviewer} • {review.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{review.rating}</span>
                    </div>
                    <Badge variant={review.status === 'Completed' ? 'default' : 'secondary'}>
                      {review.status}
                    </Badge>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          <DashboardCard title="Training Programs">
            <div className="space-y-4">
              {trainingPrograms.map((program) => (
                <div key={program.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">{program.title}</p>
                      <p className="text-sm text-gray-600">
                        {program.duration} • {program.participants} participants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      {new Date(program.startDate).toLocaleDateString()}
                    </span>
                    <Badge variant={program.status === 'Ongoing' ? 'default' : 'secondary'}>
                      {program.status}
                    </Badge>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <DashboardCard title="HR Documents">
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Employee documents and contracts</p>
              <Button className="mt-4" variant="outline">Upload Document</Button>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
    </SlideIn>
  );
}