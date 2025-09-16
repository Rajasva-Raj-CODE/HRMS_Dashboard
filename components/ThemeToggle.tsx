"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
      default:
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-blue-800/40 dark:hover:bg-gray-800/40 rounded-xl transition"
          >
            {getIcon()}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
