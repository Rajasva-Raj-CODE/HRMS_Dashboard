
import { motion, MotionProps, Variants } from 'framer-motion';
import React from 'react';

// Define animation types
export type AnimationType = 
  | 'fade' 
  | 'slide-up' 
  | 'slide-down' 
  | 'slide-left' 
  | 'slide-right' 
  | 'scale' 
  | 'bounce';

// Define props interface
export interface AnimatedComponentProps extends MotionProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

// Animation variants
const animationVariants: Record<AnimationType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-down': {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  bounce: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  }
};

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  animationType = 'fade',
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  ...motionProps
}) => {
  const variant = animationVariants[animationType];
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variant}
      transition={{
        delay,
        duration,
        ease: "easeOut"
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;