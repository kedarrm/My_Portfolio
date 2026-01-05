"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { FaDatabase, FaImage, FaUserShield } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";
import { PiVideoCameraFill } from "react-icons/pi";

const techIcons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  "Tailwind CSS": SiTailwindcss,
  Vonage: PiVideoCameraFill,
  "React Hook Form": FaDatabase,
  "Convex DB": FaDatabase,
  ImageKit: FaImage,
  Fabric: TbBrandVercel,
  Clerk: FaUserShield,
};

const projects = [
  {
    title: "Doctor Appointment Platform",
    subtitle: "Doctor Appointment Platform",
    year: "2023",
    link: "https://doc-meet-six.vercel.app/",
    image: "/medimeet.png",
    description:
      "Developed a responsive healthcare platform enabling users to book appointments, consult via video, and manage healthcare digitally. Solved video integration challenges and ensured a secure, seamless experience.",
    tech: [
      "React",
      "Next.js",
      "Vonage",
      "PostgreSQL",
      "Prisma",
      "React Hook Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "Pixxel AI Image Editor",
    subtitle: "AI Image Editing Platform",
    year: "2024",
    link: "https://pixxel-silk.vercel.app/",
    image: "/pixxel.png",
    description:
      "Built an AI-powered image editor with subscriptions, autosave, and real-time updates. Improved performance by fixing bottlenecks, resulting in 40% faster load and response times.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Convex DB",
      "ImageKit",
      "Fabric",
      "Clerk",
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

const techContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const techItem = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  return (
    <section className="space-y-4 sm:space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold">Projects</h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="group block rounded-xl border
                       p-2 sm:p-3
                       bg-background transition
                       hover:bg-muted/40
                       focus-visible:outline-none
                       focus-visible:ring-2
                       focus-visible:ring-foreground
                       focus-visible:ring-offset-2"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm sm:text-lg md:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle} • {project.year}
                </p>
              </div>

              <motion.span
                className="text-muted-foreground"
                whileHover={{ x: 4, y: -4 }}
                transition={{ type: "spring", stiffness: 260 }}
              >
                <ArrowUpRight className="hidden sm:block h-4 w-4 text-green-400" />
              </motion.span>
            </div>

            {/* Image */}
            <motion.div
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mt-2 aspect-video overflow-hidden rounded-lg border shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 668px) 100vw, 700px"
                className="object-cover transition-all duration-500
                           group-hover:scale-[1.04]
                           group-hover:blur-[1.5px]"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0
                              group-hover:opacity-100 transition" />

              <div className="absolute inset-0 flex items-center justify-center
                              opacity-0 group-hover:opacity-100 transition">
                <span className="rounded-full bg-background/80 px-4 py-1.5
                                 text-xs font-medium backdrop-blur text-green-400">
                  View Project →
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <p className="mt-2 text-xs sm:text-[14px] text-muted-foreground leading-relaxed max-w-full md:max-w-3xl">
              {project.description}
            </p>

            {/* Tech Stack */}
            <motion.div
              variants={techContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-2 flex flex-wrap gap-3 sm:gap-3"
            >
              {project.tech.map((tech) => {
                const Icon = techIcons[tech];
                return (
                  <motion.span
                    key={tech}
                    variants={techItem}
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2 rounded-md mt-2
                               px-2.5 py-1 text-xs
                               text-muted-foreground transition
                               ring-1 ring-offset-2 ring-foreground/20 ring-offset-background
                               hover:bg-muted hover:text-foreground "
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    {tech}
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
