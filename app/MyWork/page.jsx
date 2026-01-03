"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Dropdown from "../demos/[slug]/_components/Dropdown";
import RippleEffect from "../demos/[slug]/_components/RippleEffect";
import Menu from "../demos/[slug]/_components/ExpandingMenu";
import Toolbar from "../demos/[slug]/_components/Toolbar";
import AnimatedText from "../demos/[slug]/_components/Text";
import {
  Github,
  Linkedin,
  Mail,
  LayoutGrid,
  Sparkles,
  Navigation,
  Type,
  PanelTop,
  Wind,
  Atom,
  Cpu,
  BadgeAlert,
} from "lucide-react";
import PageLoader from "@/components/Loader";
import Badge from "../demos/[slug]/_components/Badge";


const categories = [
  "All",
  "Dropdown",
  "Effect",
  "Navbar",
  "Text",
  "Toolbar",
  "Badge",
];

const categoryIcons = {
  All: LayoutGrid,
  Dropdown: Navigation,
  Effect: Sparkles,
  Navbar: PanelTop,
  Text: Type,
  Toolbar: LayoutGrid,
  Badge: BadgeAlert,
};

const techIcons = {
  React: Atom,
  Tailwind: Wind,
  "Framer Motion": Cpu,
  CSS: Sparkles,
};

const componentsData = [
  {
    id: 1,
    name: "Animated Dropdown",
    category: "Dropdown",
    description: "DropDown Menu in React with Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    slug: "dropdown",
  },
  {
    id: 2,
    name: "Ripple Button",
    category: "Effect",
    description: "Material-style ripple effect on click.",
    tech: ["React", "Tailwind"],
    slug: "ripple",
  },
  {
    id: 3,
    name: "Expanding Menu",
    category: "Navbar",
    description: "Expanding Menu or Navbar with subtle expanding names.",
    tech: ["React", "Tailwind"],
    slug: "menu",
  },
  {
    id: 4,
    name: "Animated Text",
    category: "Text",
    description: "Animated text with blur effect that smoothly reveals content.",
    tech: ["React", "Tailwind", "Framer Motion"],
    slug: "text",
  },
  {
    id: 5,
    name: "Directional Toolbar",
    category: "Toolbar",
    description: "Contextual toolbar appearing from different directions.",
    tech: ["React", "Framer Motion"],
    slug: "toolbar",
  },
  {
    id: 6,
    name: "Badge",
    category: "Badge",
    description: "Minimilistic Badge with React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    slug: "badge",
  },
];

const previewMap = {
  "Animated Dropdown": <Dropdown />,
  "Ripple Button": <RippleEffect />,
  "Expanding Menu": <Menu />,
  "Animated Text": <AnimatedText />,
  "Directional Toolbar": <Toolbar />,
  "Badge": <Badge />,
};


export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredComponents = componentsData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <>
      {loading && <PageLoader />}
      <div className="min-h-screen bg-background text-foreground">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
            Component Library
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            A curated collection of reusable, production-ready UI components built
            with React, Tailwind CSS, and Framer Motion.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground pt-3">More components will be adding soon...</p>
        </header>


        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category];

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group mt-3 px-4 py-1.5 flex items-center gap-2
                    rounded-sm text-xs sm:text-sm transition cursor-pointer
                    ring-1 ring-offset-2 ring-foreground/20 ring-offset-background
                    ${activeCategory === category
                      ? "bg-foreground/50 text-background/90"
                      : "bg-background text-muted-foreground hover:bg-muted"
                    }`}
                >
                  {Icon && (
                    <Icon className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </div>


        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filteredComponents.map((component) => (
                <motion.div
                  key={component.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl border border-border bg-background p-4 sm:p-5 hover:bg-muted/40 transition"
                >
                  {/* Preview */}
                  <div className="relative group h-64 sm:h-80 lg:h-96 rounded-lg bg-muted overflow-hidden mb-3">
                    <div className="flex items-center justify-center h-full scale-90">
                      {previewMap[component.name]}
                    </div>

                    <div className="absolute inset-0 bg-background/80 backdrop-blur opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <Link
                        href={`/demos/${component.slug}`}
                        className="text-xs bg-accent rounded-lg px-4 py-2"
                      >
                        Try Live →
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-medium mb-1">
                    {component.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                    {component.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-3 mb-3">
                    {component.tech.map((tech) => {
                      const TechIcon = techIcons[tech];

                      return (
                        <span
                          key={tech}
                          className="flex items-center gap-1.5
                            text-[10px] sm:text-xs bg-accent hover:bg-accent/40
                            rounded-sm px-2 py-1 text-muted-foreground ring-1 ring-offset-2 ring-foreground/20 ring-offset-background"
                        >
                          {TechIcon && <TechIcon className="h-3 w-3" />}
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action */}
                  <Link
                    href={`/demos/${component.slug}`}
                    className="text-xs sm:text-sm font-semibold text-foreground/70 hover:text-foreground transition"
                  >
                    View Component
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <footer className="border-t border-border py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="hidden sm:block text-xs sm:text-sm text-muted-foreground transition-opacity duration-300">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <motion.p className="text-foreground/20 text-3xl sm:text-5xl lg:text-7xl font-extrabold text-center mask-b-from-10">
              MAHAMURE KEDAR
            </motion.p>

            <div className="flex gap-5 text-sm">
              <a
                href="https://github.com/kedarrm"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kedar-mahamure/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href="mailto:kedarm@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>

  );
}
