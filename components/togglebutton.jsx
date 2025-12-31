"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(id);
    }, []);

    if (!mounted) return null;

    return (
        <button
            variant="outline"
            className='cursor-pointer pt-2'
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <>  <Moon className="h-5 w-5" /></>
            ) : (
                <> <Sun className="h-5 w-5" /></>
            )}
        </button>
    );
}
