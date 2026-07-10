"use client";

import { GraduationCap } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Tracks() {
  return (
    <motion.section
      id="tracks"
      className="relative overflow-hidden bg-[#050816] py-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          variants={itemVariants}
        >
          <motion.span
            className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            LEARNING TRACKS
          </motion.span>

          <motion.h2
            className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white"
            variants={itemVariants}
          >
            Choose Your
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Cloud Journey
            </span>
          </motion.h2>
        </motion.div>

        {/* TRACK REVEAL */}
        <motion.div
          className="relative mt-20 overflow-hidden rounded-[40px] border border-[#A45AFA]/20 bg-white/[0.03] backdrop-blur-xl"
          variants={cardVariants}
          whileHover={{ borderColor: "rgba(164, 90, 250, 0.4)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#A45AFA]/15 blur-[150px]" />

          <div className="relative z-10 px-8 py-20 md:px-20">
            <motion.div
              className="flex justify-center"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10">
                <GraduationCap className="h-10 w-10 text-[#A45AFA]" />
              </div>
            </motion.div>

            <motion.h3
              className="mt-10 text-center text-4xl md:text-6xl font-black text-white"
              variants={itemVariants}
            >
              Learning Tracks
              <span className="block text-[#A45AFA]">Revealing Soon</span>
            </motion.h3>

            <motion.p
              className="mx-auto mt-8 max-w-3xl text-center text-lg text-slate-400"
              variants={itemVariants}
            >
              Learning tracks will be announced soon. Stay tuned!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
