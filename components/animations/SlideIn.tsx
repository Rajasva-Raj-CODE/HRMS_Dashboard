// components/animations/SlideIn.tsx
import AnimatedComponent, { AnimatedComponentProps } from './AnimatedComponent';

export type SlideDirection = 'up' | 'down' | 'left' | 'right';

interface SlideInProps extends Omit<AnimatedComponentProps, 'animationType'> {
  direction?: SlideDirection;
}

const SlideIn: React.FC<SlideInProps> = ({ direction = 'up', ...props }) => {
  return <AnimatedComponent animationType={`slide-${direction}`} {...props} />;
};

export default SlideIn;