import {
  Home,
  Calendar,
  DollarSign,
  Users,
  FileText,
  Receipt,
  Shield,
  CheckSquare,
  Clock,
  FileCheck,
  UserMinus,
  BarChart3,
  UserCheck,
  Settings,
} from "lucide-react";

export type NavItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: DollarSign, label: "Finance", href: "/finance" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: FileText, label: "Requests", href: "/requests" },
  { icon: Receipt, label: "Reimbursements", href: "/reimbursements" },
  { icon: Shield, label: "Policies", href: "/policies" },
  { icon: CheckSquare, label: "Approvals", href: "/approvals" },
  { icon: Clock, label: "Timesheet", href: "/timesheet" },
  { icon: FileCheck, label: "Offer Letters", href: "/offer-letters" },
  { icon: UserMinus, label: "Resignation", href: "/resignation" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: UserCheck, label: "HR", href: "/hr" },
  { icon: Settings, label: "Admin", href: "/admin" },
];


