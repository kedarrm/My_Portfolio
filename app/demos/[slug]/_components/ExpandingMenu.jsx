"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Folder,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Projects", icon: Folder },
  { label: "Messages", icon: MessageSquare },
  { label: "Settings", icon: Settings },
  { label: "Logout", icon: LogOut },
];

export default function Menu() {
  const [active, setActive] = useState(null);

  return (
    <nav
      className="
        flex gap-1 sm:gap-4 p-2 rounded-xl
        bg-neutral-100 dark:bg-background/50
        shadow-xl ring-1 ring-offset-4 ring-foreground/10 ring-offset-background overflow-hidden m-2
      "
    >
      {menuItems.map(({ label, icon: Icon }, index) => {
        const isActive = active === index;

        return (
          <button
            key={label}
            onClick={() => setActive(isActive ? null : index)}
            className={`
              group flex items-center
              h-12.5 overflow-hidden rounded-xl
              transition-[width,background,transform] duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] cursor-pointer

              ${
                  isActive
                    ? "w-32 bg-accent text-accent-foreground shadow-lg"
                    : "w-12"
                }
              `}
          >
            {/* Icon */}
            <Icon className="sm:ml-4 ml-2 shrink-0 " />

            {/* Label */}
            <span
              className={`
               ml-1 text-xs sm:ml-3 sm:text-sm whitespace-nowrap 
                transition-all duration-300
                ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
              `}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
