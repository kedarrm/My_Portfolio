import {  Sparkles } from 'lucide-react'
import React from 'react'

const Badge = () => {
    return (
        <div
            className="inline-flex items-center rounded-full px-4 py-px text-sm font-medium
            bg-accent/90 hover:bg-background text-foreground/70 transition ring-1 ring-offset-2 ring-foreground/10 ring-offset-background/70 gap-2"
        >
           <Sparkles className="h-4 w-4 text-xs"/> Mahamure Kedar
        </div>
    )
}

export default Badge