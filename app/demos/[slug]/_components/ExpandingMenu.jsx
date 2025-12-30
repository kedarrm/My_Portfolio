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
  return (
    <nav
      aria-label="Main Menu"
      className="
        flex gap-4 p-2 rounded-xl
        bg-neutral-100 backdrop-blur-xl
        shadow-xl
        ring-1 ring-offset-4 ring-foreground/10 ring-offset-background
        dark:bg-background/50
      "
    >
      {menuItems.map(({ label, icon: Icon }) => (
        <a
          key={label}
          href="#"
          className="
            group flex items-center
            h-12.5 w-13 overflow-hidden rounded-xl
            font-medium
            text-muted-foreground
            transition-all duration-300 ease-in-out

            hover:w-36
            hover:bg-accent
            hover:text-accent-foreground
            hover:shadow-xl

            focus-visible:w-37.5
            focus-visible:bg-accent
            focus-visible:text-accent-foreground
            outline-none
          "
        >
          {/* Icon */}
          <Icon
            size={26}
            className="
              ml-4 shrink-0
              transition-transform duration-300
              group-hover:scale-110
              group-hover:text-accent-foreground
            "
          />

          {/* Label */}
          <span
            className="
              ml-3 whitespace-nowrap text-sm
              opacity-0 translate-x-2
              transition-all duration-300

              group-hover:opacity-100
              group-hover:translate-x-0

              group-focus-visible:opacity-100
              group-focus-visible:translate-x-0
            "
          >
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
}
