'use client';

import { User, Calendar, Key, Settings, CreditCard, LogOut, Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-blue-800/40 dark:hover:bg-gray-800/40">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <div className="flex items-center space-x-3 p-4 border-b">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john.doe@company.com</p>
            <p className="text-xs text-muted-foreground">Senior Manager HR</p>
          </div>
        </div>
        
        <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Account Settings
        </DropdownMenuLabel>
        
        <DropdownMenuItem>
          <Key className="mr-2 h-4 w-4" />
          <span>Manage API Tokens</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Calendar className="mr-2 h-4 w-4" />
          <span>My Calendar</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Shield className="mr-2 h-4 w-4" />
          <span>Change Password</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>uKnowva Configuration</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>My Subscription</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="text-red-600 focus:text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}