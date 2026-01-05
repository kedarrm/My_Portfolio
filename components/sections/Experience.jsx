"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
} from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { TbServer } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";

const techStack = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "EmailJS", icon: FaEnvelope },
    { name: "Hostinger", icon: TbServer },
];

export default function ExperienceTimeline() {
    const [showPreview, setShowPreview] = useState(false);
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">Experience</h2>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
            >
                {/* Card */}
                <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="
            rounded-xl border border-border
            bg-background/60 backdrop-blur
            p-3 sm:p-4
            hover:bg-muted/40
            transition
          "
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div className="flex items-center gap-2">
                            <div className="relative h-10 w-10 rounded-md overflow-hidden border bg-background">
                                <Image
                                    src="/logo7.png"
                                    alt="Farmers Choice"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div
                                className="relative inline-block"
                                onMouseEnter={() => setShowPreview(true)}
                                onMouseLeave={() => setShowPreview(false)}
                            >
                                <h2 className="text-md font-bold sm:text-xl sm:font-extrabold cursor-pointer">
                                    Full Stack Developer
                                </h2>

                                {/* Tooltip Image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={
                                        showPreview
                                            ? { opacity: 1, y: 0, scale: 1 }
                                            : { opacity: 0, y: 8, scale: 0.96 }
                                    }
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-lg border bg-background shadow-xl overflow-hidden"
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative h-40 w-full">
                                        <Image
                                            src="/fc.png"
                                            alt="Farmers Choice Preview"
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Overlay Text */}
                                        <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-black/60 via-black/20 to-transparent">
                                            <p className="mb-2 text-sm font-semibold text-white">
                                                Farmers Choice
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-0">
                            <span className="text-xs text-muted-foreground">
                                Jul 2025 – Nov 2025

                            </span>
                            <a
                                href="https://www.farmerschoice.in/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition"
                            >
                                View Live Project
                                <ExternalLink className="h-3.5 w-3.5 text-green-500" />
                            </a>
                        </div>
                    </div>



                    <p className="mt-1 text-sm text-muted-foreground">
                       Freelance Client Project · Farmers Choice (Agriculture Products Platform)
                    </p>

                    {/* Responsibilities */}
                    <motion.ul
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: { staggerChildren: 0.08 },
                            },
                        }}
                        className="mt-3 space-y-1 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                    >
                        {[
                            "Built and delivered a production-ready web application for an agriculture-based company.",
                            "Improved SEO and performance using optimized assets, reusable UI components, and clean semantic structure.",
                            "Collaborated with the client on requirements, site structure, and iterative progress updates.",
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 6 },
                                    show: { opacity: 1, y: 0 },
                                }}
                            >
                                • {item}
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Tech Stack */}
                    <div className="mt-4 flex flex-wrap gap-4">
                        {techStack.map(({ name, icon: Icon }) => (
                            <motion.span
                                key={name}
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="
                  inline-flex items-center gap-1.5
                  rounded-md 
                  px-2.5 py-1
                  text-xs text-muted-foreground
                  bg-background
                  hover:bg-muted
                  transition
                  ring-1 ring-offset-2 ring-foreground/20 ring-offset-background
                "
                            >
                                <Icon className="h-3.5 w-3.5" />
                                {name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
