"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
};

export default function IconButton({ icon, onClick, className, ariaLabel }: IconButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="sm"
        aria-label={ariaLabel}
        onClick={onClick}
        className={cn(
          "hover:bg-blue-800/40 dark:hover:bg-gray-800/40 rounded-xl transition",
          className
        )}
      >
        {icon}
      </Button>
    </motion.div>
  );
}


