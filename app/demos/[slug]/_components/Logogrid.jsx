'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  {
    id: "openai",
    render: () => (
      <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#888880]" style={{ fontFamily: "'Sora', sans-serif" }}>
        OpenAI
      </span>
    ),
  },
  {
    id: "hellopatient",
    render: () => (
      <span className="italic text-[15px] sm:text-[17px] text-[#888880]" style={{ fontFamily: "'Libre Baskerville', serif" }}>
        Claude
      </span>
    ),
  },
  {
    id: "granola",
    render: () => (
      <span className="text-lg sm:text-xl text-[#888880] flex items-center" style={{ fontFamily: "'Sora', sans-serif" }}>
        granola
      </span>
    ),
  },
  {
    id: "characterai",
    render: () => (
      <span className="font-light text-[13px] sm:text-[15px] text-[#888880]" style={{ fontFamily: "'Sora', sans-serif" }}>
        character.ai
      </span>
    ),
  },
  {
    id: "oracle",
    render: () => (
      <span className="text-[11px] sm:text-[13px] text-[#888880] uppercase tracking-[0.18em]" style={{ fontFamily: "'Sora', sans-serif" }}>
        Oracle
      </span>
    ),
  },
  {
    id: "portola",
    render: () => (
      <span className="font-semibold text-[18px] sm:text-[21px] text-[#888880] tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
        Portola™
      </span>
    ),
  },
];

const DELAYS = [0, 120, 240, 100, 300, 180];

const borderClasses = [
  "border-t-0 border-l-0",
  "border-t-0",
  "border-t-0 border-r-0",
  "border-b-0 border-l-0",
  "border-b-0",
  "border-b-0 border-r-0",
];

function LogoCell({ logo, index, animate }) {
  return (
    <motion.div
      className={`flex items-center justify-center px-3 py-6 sm:px-6 sm:py-8 border border-foreground/30 ${borderClasses[index]}`}
      initial={{ opacity: 0, filter: "blur(12px)", scale: 0.96 }}
      animate={
        animate
          ? { opacity: 1, filter: "blur(0px)", scale: 1 }
          : { opacity: 0, filter: "blur(12px)", scale: 0.96 }
      }
      transition={{
        duration: 0.7,
        delay: animate ? DELAYS[index] / 1000 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {logo.render()}
    </motion.div>
  );
}

export default function LogoGrid() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const replay = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 100);
  };

  return (
    <div className="flex flex-col items-center gap-5 sm:py-10 sm:px-4">
      <div className="rounded-2xl px-2 py-4 sm:px-4 sm:py-6 grid grid-cols-3 max-w-2xl">
        {logos.map((logo, i) => (
          <LogoCell key={logo.id} logo={logo} index={i} animate={animate} />
        ))}
      </div>

      <button
        onClick={replay}
        className="text-xs tracking-wide px-5 py-1.5 rounded-md border text-foreground bg-background transition-colors duration-200 cursor-pointer"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Replay
      </button>
    </div>
  );
}