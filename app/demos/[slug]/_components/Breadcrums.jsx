"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Contact2, File, Home, User } from "lucide-react";

const Breadcrumbs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/projects", icon: File },
    { label: "Contact", href: "/ui", icon: Contact2 },
    { label: "About", href: "/about", icon: User },
];

export default function Breadcrumb() {
    const pathname = usePathname();

    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center sm:gap-2 gap-1 sm:text-sm text-xs text-muted-foreground">
                {Breadcrumbs.map((item, index) => {
                    const isActive =
                        pathname === item.href ||
                        index === Breadcrumbs.length - 1;

                    return (
                        <li
                            key={`${item.label}-${index}`}
                            className="flex items-center gap-2"
                        >
                            {index !== 0 && (
                                <ChevronRight
                                    size={14}
                                    className="text-muted-foreground/60"
                                />
                            )}

                            {isActive ? (
                                <span className="relative font-medium text-foreground">
                                    <span className="flex items-center gap-1">
                                        {item.icon && <item.icon size={16} />}
                                        {item.label}
                                    </span>

                                    <motion.span
                                        layoutId="breadcrumb-underline"
                                        className="absolute -bottom-1 left-0 h-px w-full
                               rounded-full bg-foreground"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                </span>
                            ) : (
                                <Link href={item.href}>
                                    <motion.span
                                        whileHover={{ y: -1 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        className="flex items-center gap-1
                               hover:text-foreground
                               transition-colors"
                                    >
                                        {item.icon && <item.icon size={16} />}
                                        {item.label}
                                    </motion.span>
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
