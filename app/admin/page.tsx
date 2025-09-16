'use client';

import { Shield, Users, Key, Settings, Server, Database, CreditCard, Bell, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import DashboardCard from '@/components/DashboardCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SlideIn } from '@/components/animations';

const systemStats = {
  totalUsers: 106,
  activeUsers: 98,
  storageUsed: 2.3, // GB
  apiCalls: 15420,
  uptime: 99.9
};

const userRoles = [
  { id: 1, name: 'Admin', users: 3, permissions: 'All Access' },
  { id: 2, name: 'HR Manager', users: 5, permissions: 'HR Modules' },
  { id: 3, name: 'Team Lead', users: 12, permissions: 'Team Management' },
  { id: 4, name: 'Employee', users: 86, permissions: 'Basic Access' }
];

const systemSettings = [
  { id: 1, setting: 'Email Notifications', description: 'Send system notifications via email', enabled: true },
  { id: 2, setting: 'SMS Alerts', description: 'Send urgent alerts via SMS', enabled: false },
  { id: 3, setting: 'Auto Backup', description: 'Automated daily database backup', enabled: true },
  { id: 4, setting: 'Two-Factor Auth', description: 'Require 2FA for admin users', enabled: true },
  { id: 5, setting: 'API Access', description: 'Allow external API access', enabled: false }
];

const apiTokens = [
  { id: 1, name: 'Payroll Integration', created: '2025-08-15', lastUsed: '2025-09-16', status: 'Active' },
  { id: 2, name: 'Time Tracking App', created: '2025-07-20', lastUsed: '2025-09-15', status: 'Active' },
  { id: 3, name: 'Mobile App API', created: '2025-06-10', lastUsed: '2025-09-14', status: 'Expired' }
];

export default function AdminPage() {
  return (
    <SlideIn direction="up" duration={0.35}>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">System administration and configuration</p>
        </div>
        <Badge variant="outline" className="text-green-600 border-green-600">
          System Healthy
        </Badge>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <DashboardCard title="Total Users" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span className="text-3xl font-bold">{systemStats.totalUsers}</span>
            </div>
            <p className="text-blue-100 text-sm">{systemStats.activeUsers} active</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Storage Used" className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Database className="w-6 h-6" />
              <span className="text-3xl font-bold">{systemStats.storageUsed}GB</span>
            </div>
            <p className="text-green-100 text-sm">of 50GB available</p>
          </div>
        </DashboardCard>

        <DashboardCard title="API Calls" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Server className="w-6 h-6" />
              <span className="text-3xl font-bold">{systemStats.apiCalls.toLocaleString()}</span>
            </div>
            <p className="text-purple-100 text-sm">This month</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Uptime" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="space-y-2">
            <div className="text-3xl font-bold">{systemStats.uptime}%</div>
            <p className="text-orange-100 text-sm">Last 30 days</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Security" className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-bold">Secure</span>
            </div>
            <p className="text-red-100 text-sm">All systems protected</p>
          </div>
        </DashboardCard>
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="settings">System Settings</TabsTrigger>
          <TabsTrigger value="api">API Management</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <DashboardCard title="User Statistics">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{systemStats.totalUsers}</div>
                <p className="text-sm text-gray-600">Total Users</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">{systemStats.activeUsers}</div>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{systemStats.totalUsers - systemStats.activeUsers}</div>
                <p className="text-sm text-gray-600">Inactive Users</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-purple-600">5</div>
                <p className="text-sm text-gray-600">New This Week</p>
              </div>
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <DashboardCard title="User Roles & Permissions">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role Name</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userRoles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell className="font-medium">{role.name}</TableCell>
                    <TableCell>{role.users}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{role.permissions}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">Permissions</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <DashboardCard title="System Configuration">
            <div className="space-y-6">
              {systemSettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{setting.setting}</h3>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </div>
                  <Switch checked={setting.enabled} />
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Company Settings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" defaultValue="Rnvpindia Technologies" />
                </div>
                <div>
                  <Label htmlFor="workingHours">Working Hours per Day</Label>
                  <Input id="workingHours" type="number" defaultValue="8" />
                </div>
                <div>
                  <Label htmlFor="weeklyHours">Working Days per Week</Label>
                  <Input id="weeklyHours" type="number" defaultValue="5" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Company Address</Label>
                  <Input id="address" defaultValue="123 Tech Street, Bangalore" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 80 1234 5678" />
                </div>
                <div>
                  <Label htmlFor="email">Admin Email</Label>
                  <Input id="email" type="email" defaultValue="admin@rnvpindia.com" />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button>Save Changes</Button>
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <DashboardCard 
            title="API Tokens"
            headerAction={
              <Button>
                <Key className="w-4 h-4 mr-2" />
                Generate New Token
              </Button>
            }
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token Name</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiTokens.map((token) => (
                  <TableRow key={token.id}>
                    <TableCell className="font-medium">{token.name}</TableCell>
                    <TableCell>{new Date(token.created).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(token.lastUsed).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={token.status === 'Active' ? 'default' : 'destructive'}
                      >
                        {token.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm" className="text-red-600">Revoke</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <DashboardCard title="Subscription & Billing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg text-center">
                <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Current Plan</h3>
                <div className="text-2xl font-bold text-blue-600">Enterprise</div>
                <p className="text-sm text-gray-600">₹25,000/month</p>
              </div>
              
              <div className="p-6 border rounded-lg text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Users</h3>
                <div className="text-2xl font-bold text-green-600">{systemStats.totalUsers}/150</div>
                <p className="text-sm text-gray-600">Active users</p>
              </div>
              
              <div className="p-6 border rounded-lg text-center">
                <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Next Billing</h3>
                <div className="text-2xl font-bold text-purple-600">Oct 15</div>
                <p className="text-sm text-gray-600">2025</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <Button>Manage Subscription</Button>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
    </SlideIn>
  );
}