"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { mainNavigation } from "@/lib/navigation";

type SidebarProps = {
  isExpanded: boolean;
};

export default function Sidebar({ isExpanded }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "hidden md:flex flex-col transition-all duration-500 ease-in-out sticky top-16 h-[calc(100vh-4rem)]",
          "bg-gradient-to-b from-blue-900/60 to-blue-950/80 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-2xl border-r border-blue-700/40 dark:border-gray-700/40 shadow-2xl",
          isExpanded ? "w-64" : "w-20"
        )}
      >
        <TooltipProvider delayDuration={150}>
          <nav className="flex-1 py-6 space-y-3">
            {mainNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              const content = (
                <motion.div
                  whileHover={{ scale: 1.05, x: 4 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 mx-3 rounded-xl group transition-all duration-300",
                    "hover:bg-blue-700/40 dark:hover:bg-gray-700/40",
                    isActive &&
                      "bg-gradient-to-r from-blue-600 to-blue-500 dark:from-gray-600 dark:to-gray-500 shadow-lg"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-6 h-6 flex-shrink-0 transition-transform duration-300",
                      "group-hover:scale-110",
                      isActive
                        ? "text-white drop-shadow-md"
                        : "text-blue-200 dark:text-gray-300"
                    )}
                  />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-base font-medium tracking-wide text-white"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              );

              if (!isExpanded) {
                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        {content}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      align="center"
                      sideOffset={12}
                      collisionPadding={16}
                      className="bg-blue-900/90 text-white border-blue-700/50 max-w-[220px] whitespace-nowrap"
                    >
                      <span className="block truncate">{item.label}</span>
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return (
                <Link key={item.href} href={item.href}>
                  {content}
                </Link>
              );
            })}
          </nav>
        </TooltipProvider>
      </motion.div>

      {/* Mobile Bottom Navigation */
      }
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-600 dark:bg-gray-800 border-t border-blue-500 dark:border-gray-700 z-50">
        <div className="flex items-center justify-around py-2">
          {mainNavigation.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex flex-col items-center gap-1 p-2 rounded-lg",
                    "text-white hover:bg-blue-500 dark:hover:bg-gray-700",
                    isActive && "bg-blue-700 dark:bg-gray-600"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
