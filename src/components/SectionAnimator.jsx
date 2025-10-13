import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionAnimator = ({ children, direction = 'left' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const getInitialState = () => {
    switch (direction) {
      case 'right':
        return { opacity: 0, x: 100 };
      case 'up':
        return { opacity: 0, y: 100 };
      case 'down':
        return { opacity: 0, y: -100 };
      case 'left':
      default:
        return { opacity: 0, x: -100 };
    }
  };

  const variants = {
    hidden: getInitialState(),
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionAnimator;
