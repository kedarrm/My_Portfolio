"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbSchool, TbCertificate, TbTimeline } from "react-icons/tb";

const educationData = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    college: "Nims Institute of Engineering and Technology, Jaipur, Rajasthan",
    year: "2021 – 2025",
    description:
      "B.Tech graduate in Computer Science and Engineering with expertise in full-stack development, software architecture, and problem solving, and proven experience building production-ready AI-driven applications.",
    icon: TbSchool,
  },
  {
    title: "Senior Secondary School (Class 12)",
    college: "Sri Chaitanya Jr College, Hyderabad, Telangana",
    year: "2019 – 2021",
    description:
      "Completed Higher Secondary Education with specialization in MPC (Maths, Physics, Chemistry). Developed early interest in programming and computer technologies.",
    icon: TbCertificate,
  },
  {
    title: "Secondary School (Class 10)",
    college: "Dr. R.L.R School, Zaheerabad, Telangana",
    year: "2018 – 2019",
    description:
      "Completed foundational school education with strong performance and involvement in science and mathematics.",
    icon: TbTimeline,
  },
];

export default function EducationSection() {
  return (
    <section className="w-full py-4">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl font-bold mb-6"
      >
        Education
      </motion.h2>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="absolute left-3 sm:left-6 top-0 bottom-0 w-px
                     origin-top
                     bg-linear-to-b
                     from-foreground/30
                     via-foreground/10
                     to-transparent"
        />

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <TimelineItem key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


function TimelineItem({ edu, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = edu.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="relative pl-10 sm:pl-16 md:pl-20"
    >
      <div
        className="absolute left-1.5 sm:left-3 top-2
                   h-8 w-8 md:h-10 md:w-10
                   rounded-full flex items-center justify-center
                   bg-background/70 backdrop-blur
                   border border-border shadow-sm"
      >
        <Icon className="text-green-400 text-lg md:text-xl" />
      </div>


      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 220 }}
        className="relative rounded-lg sm:rounded-lg
                   border border-border
                   bg-background/60 backdrop-blur
                   p-2 sm:p-3 md:p-3
                   hover:bg-muted/40 transition"
      >

        <div className="relative inline-block">
          <h3
            className="text-base sm:text-[16px] font-medium sm:font-bold cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {edu.title}
          </h3>

          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 top-full mt-3
                           w-65 sm:w-130
                           rounded-lg
                           bg-background/90 backdrop-blur
                           border border-border
                           p-2
                           text-sm text-muted-foreground
                           shadow-xl z-50"
              >
                {edu.description}

                <div
                  className="absolute -top-1.5 left-6 w-3 h-3
                             rotate-45
                             bg-background
                             border-l border-t border-border"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          {edu.college}
        </p>

        <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
          {edu.year}
        </p>
      </motion.div>
    </motion.div>
  );
}
