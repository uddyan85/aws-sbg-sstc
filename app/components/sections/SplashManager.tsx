"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SplashScreen from "./SplashScreen";

export default function SplashManager({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // 1. Check if the user has already seen the splash screen this session
    const hasSeenSplash = sessionStorage.getItem("splashSeen");
    
    if (!hasSeenSplash) {
      setShowSplash(true); // Show it if they haven't seen it
    }
    
    // 2. Mark checking as complete so we can render either the splash or the site safely
    setIsChecking(false);
  }, []);

  const handleComplete = () => {
    // Save to session storage so it doesn't run on refresh
    sessionStorage.setItem("splashSeen", "true");
    setShowSplash(false);
  };

  // Prevent flash of unstyled content while we check local storage
  if (isChecking) {
    return <div className="min-h-screen bg-[#050816]" />;
  }

  return (
    <>
      {/* 1. Show the Splash Screen if active */}
      {showSplash && (
        <SplashScreen onComplete={handleComplete} />
      )}

      {/* 2. Fade in the Main Website immediately once splash is done */}
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Sped up the reveal
          className="relative z-0 min-h-screen bg-[#050816]"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}