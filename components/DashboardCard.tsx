import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
}

export default function DashboardCard({ 
  title, 
  children, 
  className,
  headerAction 
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
    >
      <Card className={cn('h-fit transition-shadow', className)}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {headerAction && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
              >
                {headerAction}
              </motion.div>
            )}
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
}