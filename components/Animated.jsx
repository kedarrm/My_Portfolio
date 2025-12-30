"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedWords = () => {
  const words = ["Modern", "Scalable", "Clean", "Performant"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[currentWord]}
        initial={{ y: 16, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        exit={{ y: -16, opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-block font-semibold text-foreground"
      >
        {words[currentWord]}
      </motion.span>
    </AnimatePresence>
  );
};
