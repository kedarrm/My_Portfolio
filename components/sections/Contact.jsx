"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

/* animation variants */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-2 sm:space-y-4"
    >
      {/* Heading */}
      <motion.h2
        variants={item}
        className="text-xl sm:text-2xl font-bold"
      >
        Contact Me
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={item}
        className="text-sm sm:text-base text-muted-foreground max-w-2xl"
      >
        Have a project in mind, want to collaborate, or just say hello?
        Feel free to reach out.
      </motion.p>

      {/* Form */}
      <motion.form
        variants={container}
        className="space-y-5 w-full max-w-full sm:max-w-2xl"
      >
        {/* Name + Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}
          <motion.div variants={item} className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 text-sm" />
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border bg-background
                         pl-9 pr-4 py-2.5
                         text-sm outline-none transition
                         focus:ring-2 focus:ring-accent/90"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={item} className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 text-sm" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border bg-background
                         pl-9 pr-4 py-2.5
                         text-sm outline-none transition
                         focus:ring-2 focus:ring-accent/90"
            />
          </motion.div>
        </div>

        {/* Message */}
        <motion.div variants={item} className="relative">
            {/* <FaEnvelope className="absolute left-3 top-5 -translate-y-1/2 text-green-400 text-sm" /> */}
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full rounded-lg border bg-background
                       px-6 py-2.5
                       text-sm outline-none resize-none transition
                       focus:ring-2 focus:ring-accent/90"
          />
        </motion.div>

        {/* Submit */}
        <motion.button
          variants={item}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                     rounded-lg bg-accent hover:bg-accent/40
                     px-6 py-2.5 text-sm font-medium
                     text-foreground/70 transition
                     ring-1 ring-offset-2 ring-foreground/20
                     ring-offset-background cursor-pointer"
        >
          <FaPaperPlane className="text-xs text-green-400" />
          Send message
        </motion.button>
      </motion.form>

     
    </motion.section>
  );
}
