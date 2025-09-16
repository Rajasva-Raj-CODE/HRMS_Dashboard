'use client';

import { FileText, Download, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardCard from '@/components/DashboardCard';
import PageContainer from '@/components/common/PageContainer';
import PageHeader from '@/components/common/PageHeader';
import { SlideIn } from '@/components/animations';
import SearchBar from '@/components/common/SearchBar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const policies = [
  {
    id: 1,
    title: 'Leave Policy',
    category: 'HR Policies',
    version: '2.1',
    lastUpdated: '2025-08-15',
    description: 'Comprehensive guidelines for annual leave, sick leave, maternity/paternity leave, and other time-off policies.',
    content: `
      **Annual Leave**: All full-time employees are entitled to 21 days of annual leave per year.
      
      **Sick Leave**: Employees can take up to 10 days of sick leave per year with medical certificate.
      
      **Emergency Leave**: Up to 3 days per year for family emergencies.
      
      **Maternity/Paternity Leave**: As per government regulations - 26 weeks for maternity, 15 days for paternity.
    `
  },
  {
    id: 2,
    title: 'Work From Home Policy',
    category: 'Work Policies',
    version: '1.5',
    lastUpdated: '2025-07-20',
    description: 'Guidelines for remote work, including eligibility, equipment, and productivity expectations.',
    content: `
      **Eligibility**: Employees with 6+ months tenure can apply for WFH.
      
      **Equipment**: Company provides laptop, internet allowance of ₹2000/month.
      
      **Working Hours**: Must maintain core hours 10 AM - 4 PM IST.
      
      **Communication**: Daily check-ins required, weekly team meetings mandatory.
    `
  },
  {
    id: 3,
    title: 'IT Security Policy',
    category: 'Security',
    version: '3.0',
    lastUpdated: '2025-09-01',
    description: 'Information security guidelines, password policies, and data protection measures.',
    content: `
      **Password Policy**: Minimum 12 characters with special characters, changed every 90 days.
      
      **Data Access**: Access granted on need-to-know basis only.
      
      **Device Security**: All devices must have encryption enabled and automatic lock.
      
      **Incident Reporting**: Security incidents must be reported within 2 hours.
    `
  },
  {
    id: 4,
    title: 'Expense Reimbursement Policy',
    category: 'Finance',
    version: '2.0',
    lastUpdated: '2025-06-10',
    description: 'Guidelines for submitting and approving expense reimbursements.',
    content: `
      **Eligible Expenses**: Travel, meals (with clients), internet bills, office supplies.
      
      **Submission**: Expenses must be submitted within 30 days with valid receipts.
      
      **Approval Limits**: Up to ₹5000 - Team Lead, Up to ₹25000 - Manager, Above ₹25000 - Director.
      
      **Processing Time**: Approved claims processed within 7 business days.
    `
  },
  {
    id: 5,
    title: 'Code of Conduct',
    category: 'Ethics',
    version: '1.8',
    lastUpdated: '2025-05-15',
    description: 'Professional behavior expectations, anti-harassment policies, and ethical guidelines.',
    content: `
      **Professional Behavior**: Treat all colleagues with respect and dignity.
      
      **Anti-Harassment**: Zero tolerance policy for any form of harassment or discrimination.
      
      **Confidentiality**: Maintain confidentiality of company and client information.
      
      **Reporting**: Anonymous reporting system available for violations.
    `
  },
  {
    id: 6,
    title: 'Performance Review Policy',
    category: 'HR Policies',
    version: '2.2',
    lastUpdated: '2025-04-01',
    description: 'Annual performance evaluation process, goal setting, and career development guidelines.',
    content: `
      **Review Cycle**: Annual reviews in March, mid-year check-ins in September.
      
      **Evaluation Criteria**: Goal achievement, technical skills, leadership, collaboration.
      
      **Rating Scale**: Exceeds Expectations, Meets Expectations, Below Expectations.
      
      **Career Development**: Individual development plans created based on review outcomes.
    `
  }
];

export default function PoliciesPage() {
  return (
    <SlideIn direction="up" duration={0.35}>
    <PageContainer>
      <PageHeader
        title="Policies"
        subtitle="Company policies and guidelines"
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>
        }
      />

      {/* Search Bar */}
      <SearchBar placeholder="Search policies..." />

      {/* Policy Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Policies">
          <div className="flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <span className="text-3xl font-bold">{policies.length}</span>
          </div>
        </DashboardCard>
        <DashboardCard title="HR Policies">
          <div className="text-2xl font-bold text-green-600">
            {policies.filter(p => p.category === 'HR Policies').length}
          </div>
        </DashboardCard>
        <DashboardCard title="Security Policies">
          <div className="text-2xl font-bold text-red-600">
            {policies.filter(p => p.category === 'Security').length}
          </div>
        </DashboardCard>
        <DashboardCard title="Recently Updated">
          <div className="text-2xl font-bold text-purple-600">2</div>
        </DashboardCard>
      </div>

      {/* Policies Accordion */}
      <DashboardCard title="Company Policies">
        <Accordion type="single" collapsible className="w-full">
          {policies.map((policy) => (
            <AccordionItem key={policy.id} value={`policy-${policy.id}`} className="border-b border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full mr-4">
                  <div className="flex items-center gap-3 text-left">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{policy.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{policy.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge variant="outline" className="dark:border-gray-700">{policy.category}</Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400">v{policy.version}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-3">
                    <div>
                      <span className="font-medium">Version:</span> {policy.version}
                    </div>
                    <div>
                      <span className="font-medium">Last Updated:</span> {new Date(policy.lastUpdated).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <div className="whitespace-pre-line text-gray-700 dark:text-gray-200">
                      {policy.content}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-3 border-t">
                    <Button size="sm" variant="outline" className="dark:border-gray-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button size="sm" variant="outline" className="dark:border-gray-700">
                      Share
                    </Button>
                    <Button size="sm" variant="outline" className="dark:border-gray-700">
                      Print
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DashboardCard>

      {/* Policy Categories */}
      <DashboardCard title="Policy Categories">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['HR Policies', 'Work Policies', 'Security', 'Finance', 'Ethics'].map((category) => {
            const categoryPolicies = policies.filter(p => p.category === category);
            
            return (
              <div key={category} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="font-medium">{category}</h3>
                </div>
                <div className="text-2xl font-bold mb-1">{categoryPolicies.length}</div>
                <p className="text-sm text-gray-600">
                  {categoryPolicies.length === 1 ? 'policy' : 'policies'}
                </p>
              </div>
            );
          })}
        </div>
      </DashboardCard>
    </PageContainer>
    </SlideIn>
  );
}