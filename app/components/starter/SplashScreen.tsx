"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Much faster, balanced timings
    // Screen 1: "जय जोहार, भिलाई!" (0 to 1.5s)
    const timer1 = setTimeout(() => setStep(1), 1500);
    
    // Screen 2: "तैयार हव ना?" (1.5s to 3.0s)
    const timer2 = setTimeout(() => setStep(2), 3000);
    
    // Exit sequence and instantly load main page (3.0s to 3.5s)
    const timer3 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  // Smoother, slightly faster staggering
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      y: -15,
      filter: "blur(10px)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    },
  };

  return (
    <AnimatePresence>
      {step < 2 && (
        <motion.div
          key="splash-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(15px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816] overflow-hidden"
        >
          {/* --- TOP PROGRESS BAR (Matched to new timing) --- */}
          <motion.div 
            className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#A45AFA] to-[#FF9900] z-50 shadow-[0_0_15px_rgba(255,153,0,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "linear" }}
          />

          {/* --- 3D ANIMATED TECH GRID --- */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ y: 0 }}
            animate={{ y: "70px" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute inset-[-100%] opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(164,90,250,.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(164,90,250,.5) 1px, transparent 1px)
                `,
                backgroundSize: "70px 70px",
                transform: "perspective(600px) rotateX(60deg) translateY(-100px) scale(2.5)",
                transformOrigin: "top center",
              }}
            />
          </motion.div>

          {/* --- AMBIENT GLOWING ORBS --- */}
          <motion.div
            className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#A45AFA] rounded-full blur-[160px] opacity-20"
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-[#FF9900] rounded-full blur-[150px] opacity-[0.15]"
            animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* --- DEEP VIGNETTE OVERLAY --- */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" 
            style={{ background: "radial-gradient(circle at center, transparent 10%, #050816 90%)" }} 
          />

          {/* --- CONTENT CONTAINER --- */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center font-black">
            <AnimatePresence mode="wait">
              
              {/* SCREEN 1: जय जोहार, भिलाई! */}
              {step === 0 && (
                <motion.div
                  key="screen1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl"
                >
                  {/* <motion.span variants={letterVariants} className="text-[#A45AFA]/40 font-mono font-light hidden md:inline-block pr-2">{"<"}</motion.span> */}
                  
                  <motion.span variants={letterVariants}>जय</motion.span>
                  <motion.span variants={letterVariants}>जोहार,</motion.span>
                  <motion.span variants={letterVariants} className="text-[#FF9900] drop-shadow-[0_0_30px_rgba(255,153,0,0.5)]">
                    भिलाई!
                  </motion.span>

                  {/* <motion.span variants={letterVariants} className="text-[#A45AFA]/40 font-mono font-light hidden md:inline-block pl-2">{"/>"}</motion.span> */}
                </motion.div>
              )}
              
              {/* SCREEN 2: तैयार हव ना? */}
              {step === 1 && (
                <motion.div
                  key="screen2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl"
                >
                  <motion.span variants={letterVariants}>तैयार</motion.span>
                  <motion.span variants={letterVariants}>हव</motion.span>
                  <motion.span variants={letterVariants} className="text-[#A45AFA] drop-shadow-[0_0_30px_rgba(164,90,250,0.7)] relative pr-6 md:pr-10">
                    ना?
                    {/* Retro Blinking Dev Cursor */}
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="absolute right-0 bottom-[10%] w-[5px] md:w-[8px] h-[80%] bg-[#A45AFA] shadow-[0_0_15px_rgba(164,90,250,0.8)]"
                    />
                  </motion.span>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}