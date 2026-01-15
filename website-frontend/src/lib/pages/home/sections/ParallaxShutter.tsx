"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const slides = [
  { id: 1, title: "Velocity", color: "#FF3E00", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f" },
  { id: 2, title: "Precision", color: "#00E5FF", img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: 3, title: "Adaptation", color: "#7000FF", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
  { id: 4, title: "Resilience", color: "#FF007A", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f" },
];

export default function HorizontalStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        
        {/* --- LEFT SIDE: Horizontal Image Stack --- */}
        <div className="relative w-3/5 h-[60vh] ml-12 overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
          {slides.map((slide, i) => {
            // This logic controls when each image "slides in"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const xOffset = useTransform(
              scrollYProgress,
              [i * 0.25 - 0.2, i * 0.25], 
              ["100%", "0%"]
            );

            // Subtle parallax zoom for the image inside
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(
              scrollYProgress,
              [i * 0.25, (i + 1) * 0.25],
              [1.2, 1]
            );

            return (
              <motion.div
                key={slide.id}
                style={{ x: i === 0 ? 0 : xOffset }} // First image is already there
                className="absolute inset-0 z-[i] h-full w-full"
              >
                <motion.img
                  src={slide.img}
                  style={{ scale }}
                  className="h-full w-full object-cover"
                  alt={slide.title}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption inside the image area */}
                <motion.div className="absolute bottom-8 left-8">
                  <span className="text-xs font-mono text-white/50 tracking-widest uppercase">
                    Module_0{slide.id}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* --- RIGHT SIDE: Content Reveal --- */}
        <div className="w-2/5 h-full relative">
          {slides.map((slide, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(
              scrollYProgress,
              [i * 0.25 - 0.1, i * 0.25, i * 0.25 + 0.1],
              [0, 1, 0]
            );

            return (
              <motion.div
                key={slide.id}
                style={{ opacity }}
                className="absolute inset-0 flex flex-col justify-center px-16"
              >
                <h2 className="text-6xl font-bold text-white mb-4 tracking-tighter">
                  {slide.title}
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  Experience a seamless transition between complex data modules using 
                  our proprietary horizontal layering engine.
                </p>
                <div 
                  className="h-1 w-12" 
                  style={{ backgroundColor: slide.color }} 
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}