import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("p-6 space-y-6", className)}>{children}</div>
  );
}


