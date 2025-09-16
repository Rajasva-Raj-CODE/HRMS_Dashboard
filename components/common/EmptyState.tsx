import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export default function EmptyState({ icon, title, description, className }: EmptyStateProps) {
  return (
    <div className={cn("text-center py-8 text-gray-500 dark:text-gray-400", className)}>
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      {title && <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">{title}</p>}
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}


