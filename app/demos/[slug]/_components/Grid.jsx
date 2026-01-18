'use client'

import React from 'react'
import { motion } from 'framer-motion'

const GridLayout = () => {
  return (
    <motion.div
      className="
        relative h-72 w-full overflow-auto
        rounded-lg 
        m-3 mask-b-from-1
      "
      initial={{ opacity: 0, filter: "blur(24px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="columns-3 gap-1.5 px-1.5 py-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="mb-2 rounded-lg bg-foreground/10 shadow-sm"
            style={{
              height: `${110 + (i % 3) * 50}px`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default GridLayout
