'use client';

import React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse error hic cum consequatur officia cupiditate quasi soluta officiis! Inventore aperiam distinctio obcaecati fuga ipsam perferendis dolores, iste magnam earum magni!";

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      },
      {
        duration: 0.45,
        ease: 'easeOut',
        delay: stagger(0.045),
      }
    );
  }, [animate]);

  return (
    <section
      ref={scope}
      className="
        flex items-center justify-center
        text-foreground
      "
    >
      <p
        className="
          max-w-xl text-center
          text-xl 
          font-bold
          leading-relaxed
          text-muted-foreground
        "
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            style={{
              opacity: 0,
              filter: 'blur(10px)',
              y: 10,
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </section>
  );
};

export default AnimatedText;
