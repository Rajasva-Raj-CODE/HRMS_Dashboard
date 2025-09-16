'use client';

import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardCard from '@/components/DashboardCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import PageContainer from '@/components/common/PageContainer';
import PageHeader from '@/components/common/PageHeader';
import { SlideIn } from '@/components/animations';

const events = [
  { id: 1, title: 'Team Meeting', date: '2025-09-16', type: 'meeting', color: 'bg-blue-500' },
  { id: 2, title: 'John\'s Birthday', date: '2025-09-18', type: 'birthday', color: 'bg-green-500' },
  { id: 3, title: 'Project Deadline', date: '2025-09-20', type: 'work', color: 'bg-red-500' },
  { id: 4, title: 'Holiday - Diwali', date: '2025-09-25', type: 'holiday', color: 'bg-purple-500' },
];

export default function CalendarPage() {
  const [currentView, setCurrentView] = useState<'month' | 'week' | 'day'>('month');
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <SlideIn direction="up" duration={0.35}>
    <PageContainer>
      <PageHeader
        title="Calendar"
        subtitle="Manage your events and schedules"
        actions={
          <>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Event Title</Label>
                  <Input id="title" placeholder="Enter event title" />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Event description" />
                </div>
                <Button className="w-full">Create Event</Button>
              </div>
            </DialogContent>
          </Dialog>
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <DashboardCard 
            title="September 2025"
            headerAction={
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <Tabs value={currentView} onValueChange={(v: 'month' | 'week' | 'day') => setCurrentView(v)}>
                  <TabsList>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="day">Day</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            }
          >
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-600 dark:text-gray-400 border-b dark:border-gray-700 pb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="py-2">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center text-sm min-h-[400px]">
                {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => {
                  const dateEvents = events.filter(event => 
                    new Date(event.date).getDate() === date
                  );
                  
                  return (
                    <div
                      key={date}
                      className="min-h-[80px] p-1 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mx-auto ${
                        date === 16 ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {date}
                      </div>
                      <div className="space-y-1 mt-1">
                        {dateEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded text-white/90 truncate ${event.color}`}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </DashboardCard>
        </div>

        <div className="space-y-6">
          <DashboardCard title="Upcoming Events">
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className={`w-3 h-3 rounded-full ${event.color}`} />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Event Categories">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm">Meetings</span>
                </div>
                <Badge variant="outline">3</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm">Birthdays</span>
                </div>
                <Badge variant="outline">2</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span className="text-sm">Holidays</span>
                </div>
                <Badge variant="outline">1</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-sm">Deadlines</span>
                </div>
                <Badge variant="outline">4</Badge>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </PageContainer>
    </SlideIn>
  );
}