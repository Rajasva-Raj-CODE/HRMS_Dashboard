'use client';

import { useState } from 'react';
import { Users, Search, Filter, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardCard from '@/components/DashboardCard';
import { SlideIn } from '@/components/animations';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    department: 'Engineering',
    email: 'sarah.johnson@company.com',
    phone: '+1 234-567-8901',
    location: 'New York',
    joinDate: '2023-01-15',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
    status: 'online'
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Product Manager',
    department: 'Product',
    email: 'mike.chen@company.com',
    phone: '+1 234-567-8902',
    location: 'San Francisco',
    joinDate: '2022-08-20',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
    status: 'away'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'UX Designer',
    department: 'Design',
    email: 'emily.davis@company.com',
    phone: '+1 234-567-8903',
    location: 'Seattle',
    joinDate: '2023-03-10',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
    status: 'offline'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'DevOps Engineer',
    department: 'Engineering',
    email: 'james.wilson@company.com',
    phone: '+1 234-567-8904',
    location: 'Austin',
    joinDate: '2022-11-05',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
    status: 'online'
  },
];

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <SlideIn direction="up" duration={0.35}>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-600">Manage your team members and organization</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search team members..."
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
            <SelectItem value="HR">HR</SelectItem>
            <SelectItem value="Sales">Sales</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      <Tabs defaultValue="directory" className="w-full">
        <TabsList>
          <TabsTrigger value="directory">Team Directory</TabsTrigger>
          <TabsTrigger value="org-chart">Organization Chart</TabsTrigger>
          <TabsTrigger value="my-team">My Team</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-6">
          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <DashboardCard title="Total Members">
              <div className="flex items-center gap-2">
                <Users className="w-8 h-8 text-blue-600" />
                <span className="text-3xl font-bold">{teamMembers.length}</span>
              </div>
            </DashboardCard>
            <DashboardCard title="Online Now">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-2xl font-bold">
                  {teamMembers.filter(m => m.status === 'online').length}
                </span>
              </div>
            </DashboardCard>
            <DashboardCard title="Departments">
              <div className="text-2xl font-bold">5</div>
            </DashboardCard>
            <DashboardCard title="New This Month">
              <div className="text-2xl font-bold">2</div>
            </DashboardCard>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <DashboardCard key={member.id} title="">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <Badge variant="outline" className="text-xs">{member.department}</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {new Date(member.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-3 border-t">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              </DashboardCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="org-chart" className="space-y-6">
          <DashboardCard title="Organization Structure">
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Organization chart view coming soon</p>
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="my-team" className="space-y-6">
          <DashboardCard title="My Direct Reports">
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">You don't have any direct reports</p>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
    </SlideIn>
  );
}