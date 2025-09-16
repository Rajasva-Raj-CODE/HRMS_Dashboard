import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
};

export default function PageHeader({ title, subtitle, actions, className }: PageHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
        )}
      </motion.div>
      {actions && (
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {actions}
        </motion.div>
      )}
    </div>
  );
}


