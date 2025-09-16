'use client';

import { Clock, Users, Calendar, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardCard from '@/components/DashboardCard';
import HeroBanner from '@/components/HeroBanner';
import EmptyState from '@/components/common/EmptyState';
import PageContainer from '@/components/common/PageContainer';
import { SlideIn } from '@/components/animations';

export default function Dashboard() {
  return (
    <SlideIn direction="up" duration={0.35}>
    <PageContainer>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome to HRMS - GudionaSoftpedia</h1>
          <p className="text-gray-600 dark:text-gray-400">Dashboard Overview</p>
        </div>
      </div>

      {/* Hero Banner */}
      <HeroBanner />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Punch In/Out & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard title="Attendance">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <Clock className="w-4 h-4 mr-2" />
                    Punch In
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Clock className="w-4 h-4 mr-2" />
                    Punch Out
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Arrival on time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Avg Work Hours</p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="Quick Actions">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Pending Approvals</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Relax! No Approvals Pending</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <AlertCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">My Requests</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Great! No Requests is Pending</p>
                </div>
              </div>
            </DashboardCard>
          </div>

          {/* Timesheet */}
          <DashboardCard title="Timesheet">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">0</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Assign Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">0</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">No. of Days Timesheet Pending</p>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Fill Timesheet
              </Button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">September 2025</p>
            </div>
          </DashboardCard>

          {/* Employee Tabs */}
          <DashboardCard title="Team Status">
            <Tabs defaultValue="leave" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="leave">Employees On Leave</TabsTrigger>
                <TabsTrigger value="joiners">New Joinees</TabsTrigger>
                <TabsTrigger value="online">Who's Online</TabsTrigger>
              </TabsList>
              <TabsContent value="leave" className="mt-4">
                <EmptyState icon={<Users className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />} description="No user is on leave today." />
              </TabsContent>
              <TabsContent value="joiners" className="mt-4">
                <EmptyState icon={<Users className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />} description="No new joiners this month." />
              </TabsContent>
              <TabsContent value="online" className="mt-4">
                <EmptyState icon={<Users className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />} description="12 employees online." />
              </TabsContent>
            </Tabs>
          </DashboardCard>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Calendar */}
          <DashboardCard title="September 2025">
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div key={`day-${index}`} className="py-2">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
                  <button
                    key={date}
                    className={`py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded ${
                      date === 16 ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">No event at the moment.</p>
            </div>
          </DashboardCard>

          {/* News & Announcements */}
          <DashboardCard title="News & Announcement">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Star of the Month</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Oct 10</p>
                </div>
              </div>
            </div>
          </DashboardCard>

          {/* Birthdays & Anniversaries */}
          <DashboardCard title="Celebrations">
            <Tabs defaultValue="birthdays" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="birthdays">Birthdays</TabsTrigger>
                <TabsTrigger value="anniversaries">Work Anniversaries</TabsTrigger>
              </TabsList>
              <TabsContent value="birthdays" className="mt-4">
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-3">🎂</div>
                  <p>No upcoming birthdays</p>
                </div>
              </TabsContent>
              <TabsContent value="anniversaries" className="mt-4">
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-3">🎉</div>
                  <p>No work anniversaries this week</p>
                </div>
              </TabsContent>
            </Tabs>
          </DashboardCard>

          {/* Polls */}
          <DashboardCard title="Polls">
            <EmptyState icon={<div>📊</div>} description="No polls found" />
          </DashboardCard>
        </div>
      </div>
    </PageContainer>
    </SlideIn>
  );
}