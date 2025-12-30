"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import { AnimatedWords } from "../Animated";
import SkillIcons from "../SkillIcons";
import { Ripple } from "@/app/demos/[slug]/_components/RippleEffect";


const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
        >
            {/* Main Row */}
            <motion.div
                variants={item}
                className="
          flex flex-col
          sm:flex-row
          items-center sm:items-start
          gap-6 sm:gap-8
        "
            >
                {/* IMAGE */}
                <div className="shrink-0 flex justify-center w-full sm:w-auto">
                    <Ripple rippleColor="rgba(59,130,246,0.35)">
                        <Image
                            src="/kedarAi.png"
                            alt="Mahamure Kedar"
                            priority
                            width={144}
                            height={144}
                            className="
                rounded-lg object-cover
                w-42 h-52
                sm:w-20 sm:h-20
                md:w-36 md:h-56
                shadow-2xl cursor-pointer
              "
                        />
                    </Ripple>
                </div>

                {/* CONTENT */}
                <motion.div
                    variants={item}
                    className="
            flex flex-col
            gap-4
            text-center sm:text-left
            items-center sm:items-start
          "
                >
                    {/* Heading */}
                    <div className="space-y-1">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                            Hi, I&apos;m Mahamure Kedar
                        </h1>

                        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground">
                            I build <AnimatedWords /> web experiences.
                        </h2>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap justify-center sm:justify-start items-center sm:gap-3 gap-6">
                        <a
                            href="https://www.linkedin.com/in/kedar-mahamure/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-2 bg-accent hover:bg-accent/40 px-4 sm:px-6 py-1.5 text-xs sm:text-sm font-medium text-foreground/70 transition ring-1 ring-offset-2 ring-foreground/20 ring-offset-background rounded-md">
                            <motion.span
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 260 }}
                                className="relative flex h-2 w-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 blur-xs scale-150 animate-[pulse_1s_ease-in-out_infinite]" /> 
                                        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-[ping_1s_ease-in-out_infinite]" /> 
                                        <span className="relative h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                                    </span>
                                </span>
                            </motion.span>

                            <span className="group-hover:text-foreground transition">
                                Open to Work
                            </span>
                        </a>

                        <SkillIcons />

                        <Link
                            href="/MyWork"
                            className="flex items-center gap-2 bg-accent hover:bg-accent/40 px-4 sm:px-6 py-1.5 text-xs sm:text-sm font-medium text-foreground/70 transition ring-1 ring-offset-2 ring-foreground/20 ring-offset-background rounded-md"
                        >
                            <Folder className="h-4 w-4 text-green-400" />
                            My Work
                        </Link>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground sm:max-w-xl max-w-6xl text-xs sm:text-base">
                        Frontend Developer specializing in responsive, high-performance web
                        applications, crafting accessible interfaces and seamless user
                        experiences through clean design and smart API integration.
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
