// components/animations/StaggeredContainer.tsx
import { motion, MotionProps, Variants } from 'framer-motion';
import React from 'react';

interface StaggeredContainerProps extends MotionProps {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}

const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className,
  ...motionProps
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default StaggeredContainer;
