"use client";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "PostgreSQL", icon: SiPostgresql },
];

export default function SkillIcons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <div
            key={skill.name}
            className="group relative flex items-center justify-center"
          >
            {/* Icon */}
            <Icon
              className="h-6 w-6 text-muted-foreground transition
                         group-hover:text-foreground cursor-pointer"
            />

            {/* Tooltip */}
            <span
              className="pointer-events-none absolute -bottom-8
                         scale-0 rounded-md bg-foreground px-3 py-px
                         text-xs text-background transition
                         group-hover:scale-100"
            >
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
