"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar
        isSidebarExpanded={isSidebarExpanded}
        onToggleSidebar={() => setIsSidebarExpanded((prev) => !prev)}
      />
      <div className="flex">
        <Sidebar isExpanded={isSidebarExpanded} />
        <main className="flex-1 md:ml-0 mb-16 md:mb-0">
          {children}
        </main>
      </div>
    </div>
  );
}


