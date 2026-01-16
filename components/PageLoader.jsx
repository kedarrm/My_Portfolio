"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  const dotVariants = {
    animate: (i) => ({
      y: [0, -12, 0],
      scale: [1, 1.6, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 0.9,
        repeat: Infinity,
        delay: i * 0.18,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-accent">
      <div className="flex gap-4">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-4 w-4 rounded-full bg-foreground"
            variants={dotVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>
    </div>
  );
}
