"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

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
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xpwoezvv",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Failed");

      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out. I’ll reply soon.",
      });

      form.reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-2 sm:space-y-4"
    >
      <motion.h2 variants={item} className="text-xl sm:text-2xl font-bold">
        Contact Me
      </motion.h2>

      <motion.p
        variants={item}
        className="text-sm sm:text-base text-muted-foreground max-w-2xl"
      >
        Have a project in mind, want to collaborate, or just say hello?
        Feel free to reach out.
      </motion.p>

      <motion.form
        variants={container}
        onSubmit={handleSubmit}
        className="space-y-5 w-full max-w-full sm:max-w-2xl"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div variants={item} className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 text-sm" />
            <input
              required
              name="name"     
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border bg-background
                         pl-9 pr-4 py-2.5 text-sm outline-none transition
                         focus:ring-2 focus:ring-accent/90"
            />
          </motion.div>

          <motion.div variants={item} className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 text-sm" />
            <input
              required
              name="email" 
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border bg-background
                         pl-9 pr-4 py-2.5 text-sm outline-none transition
                         focus:ring-2 focus:ring-accent/90"
            />
          </motion.div>
        </div>

        <motion.div variants={item}>
          <textarea
            required
            name="message"
            placeholder="Your message"
            rows={4}
            className="w-full rounded-lg border bg-background
                       px-6 py-2.5 text-sm outline-none resize-none transition
                       focus:ring-2 focus:ring-accent/90"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={item}
          whileHover={!isSending ? { y: -2 } : {}}
          whileTap={!isSending ? { scale: 0.97 } : {}}
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2
                     rounded-lg bg-accent hover:bg-accent/40
                     px-6 py-2.5 text-sm font-medium
                     text-foreground/70 transition
                     ring-1 ring-offset-2 ring-foreground/20
                     ring-offset-background cursor-pointer
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-green-400" />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane className="text-xs text-green-400" />
              Send message
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
