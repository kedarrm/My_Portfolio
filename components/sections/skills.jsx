"use client";

import { motion } from "framer-motion";
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
import { TbBrandFramer, TbBrandFramerMotion } from "react-icons/tb";

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
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Clerk", icon: PiPersonArmsSpreadFill },
      { name: "Inngest", icon: FaCloud },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Claude", icon: FaCloud },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: SiVscodium },
    ],
  },
];

// animation variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section className="space-y-2 sm:space-y-2">
      {/* Section title */}
      <h2 className="text-xl sm:text-2xl font-bold">
        Skills & Technologies
      </h2>

      <div className="space-y-2 sm:space-y-4">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-sm sm:text-base font-medium text-muted-foreground tracking-wide">
              {group.title}
            </h3>

            <motion.div className="flex flex-wrap gap-3 sm:gap-3">
              {group.items.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ y: -2 }}
                    className="group flex items-center sm:mt-0 mt-1 sm:gap-1.5 gap-1 rounded-sm sm:rounded-md px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-muted-foreground bg-accent/50 hover:bg-accent hover:text-foreground transition ring-1 ring-offset-2 ring-foreground/20 ring-offset-background"
                  >
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      className="text-foreground"
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      
                    </motion.span>

                    <span className="font-normal">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
