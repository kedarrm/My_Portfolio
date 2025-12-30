'use client'

import { Atom, Layers, Server, Wind } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const icons = {
    React: Atom,
    "Next.js": Layers,
    Tailwind: Wind,
    Django: Server,
  };

  return (
    <div className="relative w-64" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex justify-between items-center
          px-4 py-2 rounded-lg
          bg-background
          shadow-sm
          cursor-pointer
          ring-1 ring-offset-2 ring-foreground/10 ring-offset-background
          text-muted-foreground
          hover:bg-muted hover:text-foreground
          transition-colors
        "
      >
        Select Option
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
              absolute mt-3 w-full z-10
              bg-background
              rounded-lg rounded-b-sm
              shadow-lg
              overflow-hidden
              cursor-pointer
              ring-1 ring-offset-2 ring-foreground/10 ring-offset-background
              divide-y divide-border
            "
          >
            {["React", "Next.js", "Tailwind", "Django"].map((item) => {
              const Icon = icons[item];

              return (
                <li
                  key={item}
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center gap-3
                    px-4 py-2
                    cursor-pointer
                    text-muted-foreground
                    hover:bg-muted hover:text-foreground
                    transition-colors
                  "
                >
                  <Icon size={16} />
                  <span>{item}</span>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
