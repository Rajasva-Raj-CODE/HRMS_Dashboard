"use client";

import { Bell, Calendar, Settings, HelpCircle, PanelLeft, PanelRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProfileDropdown from "./ProfileDropdown";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import IconButton from "@/components/common/IconButton";
import SearchBar from "@/components/common/SearchBar";
import { motion } from "framer-motion";
import { StaggeredContainer, SlideIn } from "@/components/animations";

type NavbarProps = {
  isSidebarExpanded?: boolean;
  onToggleSidebar?: () => void;
};

export default function Navbar({ isSidebarExpanded, onToggleSidebar }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-900/70 to-blue-950/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl border-b border-blue-700/40 dark:border-gray-700/40 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-lg transition-colors"
    >
      <StaggeredContainer staggerChildren={0.06} className="w-full flex items-center justify-between">
        {/* Left: Sidebar Toggle + Logo */}
        <SlideIn direction="down" duration={0.45}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/guidona-logo.svg"
              alt="Logo"
              width={64}
              height={64}
              className="h-16 w-16 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
            <span className="ml-3 text-xl font-semibold text-white tracking-wide hidden sm:block">
              HRMS
            </span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                ariaLabel="Toggle sidebar"
                onClick={onToggleSidebar}
                className="hidden md:inline-flex"
                icon={
                  isSidebarExpanded ? (
                    <PanelLeft className="w-6 h-6 text-blue-200 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition" />
                  ) : (
                    <PanelRight className="w-6 h-6 text-blue-200 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition" />
                  )
                }
              />
            </motion.div>
          </motion.div>
        </SlideIn>

        {/* Search Bar */}
        <SlideIn direction="down" duration={0.5} className="flex-1">
          <div className="flex-1 max-w-2xl mx-8 hidden md:flex items-center gap-3">
            <motion.div whileFocus={{ scale: 1.02 }} className="relative flex-1">
              <SearchBar />
            </motion.div>
            <Select defaultValue="all">
              <SelectTrigger className="w-36 rounded-xl bg-blue-800/40 dark:bg-gray-800/40 border border-blue-700/50 dark:border-gray-700/50 text-white dark:text-gray-100 shadow-inner">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-blue-900 dark:bg-gray-900 text-white dark:text-gray-100 shadow-xl rounded-xl border border-blue-700/50 dark:border-gray-700/50">
                <SelectItem value="all">Search in</SelectItem>
                <SelectItem value="people">People</SelectItem>
                <SelectItem value="docs">Documents</SelectItem>
                <SelectItem value="policies">Policies</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </SlideIn>

        {/* Right Side Icons */}
        <SlideIn direction="down" duration={0.55}>
          <div className="flex items-center gap-3">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <IconButton
                ariaLabel="Notifications"
                icon={<Bell className="w-6 h-6 text-blue-200 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition" />}
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center shadow-md shadow-red-600/50">
                3
              </span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 250, damping: 18 }}>
              <IconButton
                ariaLabel="Calendar"
                icon={<Calendar className="w-6 h-6 text-blue-200 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition" />}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 250, damping: 18 }}>
              <IconButton
                ariaLabel="Settings"
                icon={<Settings className="w-6 h-6 text-blue-200 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition" />}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 250, damping: 18 }}>
              <IconButton
                ariaLabel="Help"
                icon={<HelpCircle className="w-6 h-6 text-blue-200 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition" />}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 220, damping: 16 }}>
              <ThemeToggle />
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 220, damping: 16 }}>
              <ProfileDropdown />
            </motion.div>
          </div>
        </SlideIn>
      </StaggeredContainer>
    </motion.nav>
  );
}
