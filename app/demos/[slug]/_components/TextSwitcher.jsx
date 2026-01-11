'use client'

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const TextSwitcher = () => {
    const words = ['Beautiful', 'Better', 'Amazing', 'Stunning'];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center items-center h-screen'>

            <div className='bg-foreground/10 p-3 w-84 rounded-xl'>
                <p className='bg-foreground/20 p-4 rounded-xl text-muted-accent/40 shadow-xl'>
                    Craft{' '}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={words[currentWord]}
                            initial={{ y: 20, opacity: 0, filter: "blur(20px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: -20, opacity: 0, filter: "blur(20px)" }}
                            transition={{ duration: 1 }}
                        >
                            {words[currentWord]}<br />
                        </motion.span>
                    </AnimatePresence>
                    interfaces with clarity and purpose.
                </p>
            </div>
        </div>
    )
}

export default TextSwitcher