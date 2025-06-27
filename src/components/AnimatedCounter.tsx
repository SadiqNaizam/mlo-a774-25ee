import React, { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  /**
   * The number to animate to.
   */
  to: number;
  /**
   * Optional class names for styling the number.
   */
  className?: string;
  /**
   * The duration of the animation in seconds.
   * @default 2
   */
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  to,
  className,
  duration = 2,
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    console.log('AnimatedCounter loaded. Target:', to);

    if (isInView && nodeRef.current) {
      const node = nodeRef.current;

      // Start animation
      const controls = animate(0, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          // Update the text content of the span with the rounded number
          node.textContent = Math.round(value).toLocaleString();
        },
      });

      // Return a cleanup function to stop the animation if the component unmounts
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return (
    <span ref={nodeRef} className={className}>
      0
    </span>
  );
};

export default AnimatedCounter;