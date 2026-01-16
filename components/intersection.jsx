"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageLoader from './PageLoader';

export default function FrameBox({ children }) {
  const [loading, setLoading] = useState(true)

   useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); 
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
    {/* {loading && <PageLoader />} */}
      <div className="relative">

        {/* LEFT vertical line  */}
        <span className="absolute left-0 -top-16 -bottom-16 w-px bg-border" />

        {/* RIGHT vertical line  */}
        <span className="absolute right-0 -top-16 -bottom-16 w-px bg-border" />

        {/* TOP horizontal line  */}
        <span className="absolute top-0 -left-16 -right-16 h-px bg-border" />

        {/* BOTTOM horizontal line */}
        <span className="absolute bottom-0 -left-16 -right-16 h-px bg-border" />

        {/* Content */}
        <div className="relative px-4 py-8">
          {children}
        </div>

      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        tranisition={{ duration: 1.3 }}
        className="text-foreground/20 bg-clip-text text-3xl sm:text-7xl text-center font-extrabold mask-b-from-0 sm:mask-b-from-10 p-4"
      >
        MAHAMURE KEDAR
      </motion.p>
    </>

  );
}
