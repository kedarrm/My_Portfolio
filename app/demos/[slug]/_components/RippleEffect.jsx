"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export function Ripple({
    children,
    className = "",
    rippleColor = "rgba(255, 255, 255, 0.4)",
    ...props
}) {
    const [ripples, setRipples] = useState([]);
    const containerRef = useRef(null);

    const createRipple = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const id = Date.now();

        setRipples((prev) => [...prev, { id, size, x, y }]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 600);
    };

    return (
        <div
            ref={containerRef}
            onClick={createRipple}
            className={`relative overflow-hidden select-none ${className}`}
            {...props}
        >
            {children}

            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    initial={{ scale: 0, opacity: 0.7 }}
                    animate={{ scale: 4, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        position: "absolute",
                        top: ripple.y,
                        left: ripple.x,
                        width: ripple.size,
                        height: ripple.size,
                        backgroundColor: rippleColor,
                        borderRadius: "50%",
                        pointerEvents: "none",
                    }}
                />
            ))}
        </div>
    );
}


export default function RippleEffect() {
    return (
        <Ripple
            rippleColor="rgba(59,130,246,0.35)"
            className="inline-flex items-center justify-center bg-accent rounded-lg shadow-md hover:shadow-2xl transition cursor-pointer"
        >
            <Image
                src="/comet.png"
                alt="Comet"
                width={150}
                height={150}
                className="rounded-sm grayscale hover:grayscale-0 transition"
            />
        </Ripple>
    );
}
