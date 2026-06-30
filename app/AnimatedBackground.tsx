"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const glowOrbs = [
  { size: "700px", x: -10, y: -10, opacity: 0.25, delay: 0 },
  { size: "600px", x: 80, y: 10, opacity: 0.2, delay: 2 },
  { size: "500px", x: 40, y: 70, opacity: 0.15, delay: 4 },
];

const floatingParticles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: `${1 + (i % 3)}px`, // 1px, 2px, 3px
  x: 5 + (i * 3) % 90,
  y: 10 + (i * 7) % 80,
  duration: 8 + (i % 6) * 2,
  delay: (i * 0.3) % 5,
}));

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glowing Orbs */}
      {glowOrbs.map((orb, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-[#A45AFA] blur-[150px]"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            opacity: orb.opacity,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 15 + idx * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Grid Dots */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(164,90,250,.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(164,90,250,.35) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating Particles */}
      {floatingParticles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[#A45AFA]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0.2 + (p.id % 5) * 0.06,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, -10, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Mouse‑following glow */}
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full bg-[#A45AFA]/8 blur-[180px] pointer-events-none"
        animate={{
          x: mousePosition.x * 60,
          y: mousePosition.y * 60,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 80,
        }}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}