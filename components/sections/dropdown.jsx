"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiDjango,
  SiFlask,
  SiGit,
  SiVscodium,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
} from "react-icons/si";
import { FaDatabase, FaCloud } from "react-icons/fa";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { TbBrandFramer } from "react-icons/tb";
import { ChevronDown } from "lucide-react";

/* ------------------ Skill Data ------------------ */
const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: SiVscodium },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "Clerk", icon: PiPersonArmsSpreadFill },
      { name: "Inngest", icon: FaCloud },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Claude", icon: FaCloud },
      { name: "Motion", icon: TbBrandFramer },
    ],
    
  },
];

const dropdown = {
  hidden: { opacity: 0, height: 0, filter: "blur(6px)" },
  show: {
    opacity: 1,
    height: "auto",
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    filter: "blur(6px)",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function DropSkillsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold">
        Skills & Technologies
      </h2>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillGroups.map((group, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={group.title}
              className={`
                rounded-xl border bg-background/60 backdrop-blur transition
                ${group.title === "Others" ? "sm:col-span-2 sm:flex sm:justify-center" : ""}
              `}
            >
              {/* Inner wrapper for centered last card */}
              <div className={group.title === "Others" ? "sm:w-1/2" : ""}>
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between
                             px-4 py-3 text-left
                             hover:bg-muted/40 transition
                             rounded-xl"
                >
                  <span className="text-sm sm:text-base font-medium">
                    {group.title}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-muted-foreground"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                {/* Dropdown */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      variants={dropdown}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="overflow-hidden px-4 py-4"
                    >
                      <motion.div
                        variants={{
                          show: { transition: { staggerChildren: 0.06 } },
                        }}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap gap-2 sm:gap-3"
                      >
                        {group.items.map((skill) => {
                          const Icon = skill.icon;

                          return (
                            <motion.div
                              key={skill.name}
                              variants={item}
                              whileHover={{ y: -2 }}
                              className="flex items-center gap-2
                                         rounded-md sm:rounded-lg
                                         px-2.5 sm:px-3
                                         py-1.5 sm:py-2
                                         text-xs sm:text-sm
                                         text-muted-foreground
                                         bg-background hover:bg-muted
                                         transition
                                         ring-1 ring-foreground/10
                                         ring-offset-1 ring-offset-background"
                            >
                              <Icon className="h-4 w-4 text-foreground" />
                              <span className="font-medium">
                                {skill.name}
                              </span>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
