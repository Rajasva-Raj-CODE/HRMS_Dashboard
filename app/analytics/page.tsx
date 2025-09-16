'use client';

import { BarChart3, TrendingUp, Users, Clock, DollarSign, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardCard from '@/components/DashboardCard';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { SlideIn } from '@/components/animations';

const attendanceData = [
  { month: 'Jan', attendance: 92, target: 95 },
  { month: 'Feb', attendance: 89, target: 95 },
  { month: 'Mar', attendance: 94, target: 95 },
  { month: 'Apr', attendance: 91, target: 95 },
  { month: 'May', attendance: 96, target: 95 },
  { month: 'Jun', attendance: 93, target: 95 },
];

const departmentData = [
  { department: 'Engineering', employees: 45, color: '#3B82F6' },
  { department: 'Design', employees: 12, color: '#10B981' },
  { department: 'Product', employees: 8, color: '#F59E0B' },
  { department: 'Marketing', employees: 15, color: '#EF4444' },
  { department: 'Sales', employees: 20, color: '#8B5CF6' },
  { department: 'HR', employees: 6, color: '#06B6D4' },
];

const attritionData = [
  { quarter: 'Q1 2024', attrition: 8.5 },
  { quarter: 'Q2 2024', attrition: 12.3 },
  { quarter: 'Q3 2024', attrition: 6.8 },
  { quarter: 'Q4 2024', attrition: 9.2 },
  { quarter: 'Q1 2025', attrition: 7.5 },
];

const genderData = [
  { name: 'Male', value: 65, color: '#3B82F6' },
  { name: 'Female', value: 35, color: '#EC4899' },
];

export default function AnalyticsPage() {
  return (
    <SlideIn direction="up" duration={0.35}>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">HR insights and workforce analytics</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Employees" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span className="text-3xl font-bold">106</span>
            </div>
            <p className="text-blue-100 text-sm">+5% from last month</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Avg Attendance" className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span className="text-3xl font-bold">93%</span>
            </div>
            <p className="text-green-100 text-sm">Target: 95%</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Attrition Rate" className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span className="text-3xl font-bold">7.5%</span>
            </div>
            <p className="text-red-100 text-sm">Q1 2025</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Avg Salary" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              <span className="text-3xl font-bold">₹8.2L</span>
            </div>
            <p className="text-purple-100 text-sm">Per annum</p>
          </div>
        </DashboardCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trends */}
        <DashboardCard title="Attendance Trends">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="attendance" fill="#3B82F6" name="Actual Attendance" />
                <Bar dataKey="target" fill="#10B981" name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        {/* Department Distribution */}
        <DashboardCard title="Headcount by Department">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => 
                    `${entry.department}: ${entry.employees} (${(entry.percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="employees"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attrition Rate */}
        <DashboardCard title="Attrition Rate Trend">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attritionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="attrition" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Attrition Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        {/* Gender Diversity */}
        <DashboardCard title="Gender Diversity Ratio">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
      </div>

      {/* Department Statistics */}
      <DashboardCard title="Department Statistics">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {departmentData.map((dept) => (
            <div key={dept.department} className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: dept.color }}
                />
                <h3 className="font-medium">{dept.department}</h3>
              </div>
              <div className="text-2xl font-bold">{dept.employees}</div>
              <p className="text-sm text-gray-600">employees</p>
              <div className="mt-2 text-xs text-gray-500">
                {((dept.employees / departmentData.reduce((sum, d) => sum + d.employees, 0)) * 100).toFixed(1)}% of total
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>

      {/* Key Metrics Summary */}
      <DashboardCard title="Key HR Metrics - Current Month">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">12</div>
            <p className="text-sm text-gray-600">New Hires</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">3</div>
            <p className="text-sm text-gray-600">Resignations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">45</div>
            <p className="text-sm text-gray-600">Training Hours</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">4.2</div>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </div>
        </div>
      </DashboardCard>
    </div>
    </SlideIn>
  );
}