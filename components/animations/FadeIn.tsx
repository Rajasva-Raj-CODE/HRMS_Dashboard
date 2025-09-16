import AnimatedComponent, { AnimatedComponentProps } from './AnimatedComponent';

const FadeIn: React.FC<Omit<AnimatedComponentProps, 'animationType'>> = (props) => {
  return <AnimatedComponent animationType="fade" {...props} />;
};

export default FadeIn;
