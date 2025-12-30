'use client'

import { motion } from "framer-motion";
import { Download, DownloadCloud } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="flex justify-center items-center flex-col gap-6 text-xl text-muted-foreground">
      <div className="flex flex-row gap-6">
      <motion.a
        href="https://github.com/kedarrm"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="hover:text-foreground"
        aria-label="GitHub"
      >
        <FaGithub />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/kedar-mahamure/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="hover:text-foreground"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </motion.a>

      <motion.a
        href="mailto:kedarm@gmail.com"
        whileHover={{ scale: 1.15, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="hover:text-foreground"
        aria-label="Email"
      >
        <FaEnvelope />
      </motion.a>
      </div>

      <div>
        <a href="/Kedar_Resume.pdf" download className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-2 text-sm      font-medium text-foreground/70 transition hover:bg-accent/40 ring-1 ring-offset-2 ring-foreground/20 ring-offset-background cursor-pointer">
          <DownloadCloud className="h-4 w-4 text-green-400" />
          Download My Resume
        </a>
      </div>
    </div>
  );
}
