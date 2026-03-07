'use client'

import { motion } from "framer-motion";

const images = [
  {src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb", title:"Mountain View"},
  {src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", title:"Nature"},
  {src:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", title:"Portrait"},
  {src:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", title:"City"},
  {src:"https://images.unsplash.com/photo-1519681393784-d120267933ba", title:"Forest"},
  {src:"https://images.unsplash.com/photo-1492724441997-5dc865305da7", title:"Landscape"},
  {src:"https://images.unsplash.com/photo-1517841905240-472988babdf9", title:"Smile"},
  {src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330", title:"Photography"},
];

function MasonryGrid() {
  return (
      <motion.div
      className="
        relative h-82 w-full overflow-auto
        rounded-lg m-2 mask-b-from-1"
      initial={{ opacity: 0, filter: "blur(24px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    > <div className="columns-3 gap-2 px-1.5 py-2">

        {images.map((item, i) => (
          <motion.div
            key={i}
            className="mb-2 break-inside-avoid overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            
            <div className="relative group cursor-pointer">

              <img
                src={item.src}
                alt="gallery"
                className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                style={{
                  height: `${110 + (i % 4) * 40}px`
                }}
              />

              {/* Hover Overlay */}
              <div className="
                absolute inset-0 
                bg-black/40 
                flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition duration-300
                rounded-lg
              ">
                <p className="text-white text-sm font-medium">
                  {item.title}
                </p>
              </div>

            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ImageGrid() {
  return (
    <div className="h-full">
      <MasonryGrid />
    </div>
  );
}