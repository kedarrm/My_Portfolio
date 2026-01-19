'use client';

import { motion } from "framer-motion";
import {
  Info,
  MapPin,
  Sparkles,
  Cpu,
  CheckCircle2,
  Atom,
  Layers,
  Wind,
} from "lucide-react";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


const techIcons = {
  "React": Atom,
  "Next.js": Layers,
  "Framer Motion": TbBrandFramerMotion,
  "Tailwind CSS": SiTailwindcss,
  "Lucide Icons": Sparkles,
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function DescriptionSection({ details }) {
  if (!details) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="pt-14 space-y-10"
    >

      {/* Overview */}
      <motion.section
        variants={sectionVariants}
        whileHover={{ y: -2 }}
        className="
          relative rounded-lg border border-border
          bg-muted/40 p-5
          transition
          hover:shadow-md
        "
      >
        <div className="flex items-center gap-2 mb-2">
          <motion.span variants={iconVariants}>
            <Info className="h-4 w-4 text-primary" />
          </motion.span>
          <h2 className="text-lg font-semibold">Overview</h2>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 0.6 }}
          className="h-0.5 mb-3 bg-linear-to-r from-primary to-transparent"
        />

        <p className="text-muted-foreground leading-relaxed">
          {details.overview}
        </p>
      </motion.section>

      {/* Where to Use */}
      <motion.section
        variants={sectionVariants}
        whileHover={{ y: -2 }}
        className="
          rounded-lg border border-border
          bg-background p-5
          hover:shadow-md transition
        "
      >
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-4 w-4 text-primary" />
          <h2 className="text-lg font-semibold">Where to Use</h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-muted-foreground">
          {details.useCases.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Why Use */}
      <motion.section
        variants={sectionVariants}
        whileHover={{ y: -2 }}
        className="
          rounded-lg border border-border
          bg-muted/40 p-5
          hover:shadow-md transition
        "
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-lg font-semibold">
            Why Use This Component
          </h2>
        </div>

        <ul className="space-y-2 text-muted-foreground">
          {details.whyUse.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-2 items-start"
            >
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        variants={sectionVariants}
        className="
          rounded-lg border border-border
          bg-background p-5
          hover:shadow-md transition
        "
      >
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="h-4 w-4 text-primary" />
          <h2 className="text-lg font-semibold">Built With</h2>
        </div>

        <div className="flex flex-wrap gap-5">
          {details.tech.map((tech) => {
            const Icon = techIcons[tech];

            return (
              <motion.span
                key={tech}
                className="group flex items-center gap-2 cursor-default rounded-lg bg-accent/60 hover:bg-accent/40 px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground shadow-sm ring-1 ring-offset-2 ring-foreground/20 ring-offset-background transition"
              >
                {Icon && (
                  <Icon
                    className="
              h-4 w-4
              text-primary
              transition-transform
              group-hover:scale-110
            "
                  />
                )}
                <span>{tech}</span>
              </motion.span>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
}
