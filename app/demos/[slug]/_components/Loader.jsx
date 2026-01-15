"use client";

import { motion } from "framer-motion";

const ROW_COUNT = 4;
const rows = Array.from({ length: ROW_COUNT });

export default function VerticalSkeletonLoader() {
  return (
    <div className="mask-t-from-80% mask-b-from-60%">
      <div className="relative left-15 h-64 w-72 overflow-hidden">

        <div className="space-y-6">
          {rows.map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: i * 0.15,
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
            >
              <SkeletonRow />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="flex items-center justify-center gap-3 ">
      <div
        className="h-8 w-8 rounded-lg
        bg-foreground/10
        animate-pulse"
      />

      <div className="flex-1 space-y-2">
        <div
          className="h-2.5 w-2/4 rounded-md
          bg-foreground/10
          animate-pulse"
        />
        <div
          className="h-2 w-1/3 rounded-md
          bg-foreground/5
          animate-pulse"
        />
      </div>
    </div>
  );
}
