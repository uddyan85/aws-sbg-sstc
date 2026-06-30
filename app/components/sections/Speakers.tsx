"use client";

import { Mic, Sparkles } from "lucide-react";
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

export default function Speakers() {
  return (
    <motion.section
      id="speakers"
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
            SPEAKERS
          </motion.span>

          <motion.h2
            className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white"
            variants={itemVariants}
          >
            Industry
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Experts
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400"
            variants={itemVariants}
          >
            Learn directly from AWS Community Leaders, Builders, Cloud
            Architects, AI Experts and Industry Professionals.
          </motion.p>
        </motion.div>

        {/* SPEAKER REVEAL */}
        <motion.div
          className="relative mt-24 overflow-hidden rounded-[40px] border border-[#A45AFA]/20 bg-white/[0.03] backdrop-blur-xl"
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
                <Mic className="h-10 w-10 text-[#A45AFA]" />
              </div>
            </motion.div>

            <motion.h3
              className="mt-10 text-center text-4xl md:text-6xl font-black text-white"
              variants={itemVariants}
            >
              Speaker Lineup
              <span className="block text-[#A45AFA]">Revealing Soon</span>
            </motion.h3>

            <motion.p
              className="mx-auto mt-8 max-w-3xl text-center text-lg text-slate-400"
              variants={itemVariants}
            >
              We are bringing together AWS Community Builders, User Group
              Leaders, Solution Architects, AI Specialists, Startup Founders and
              Industry Experts for an unforgettable learning experience.
            </motion.p>

            {/* SPEAKER PLACEHOLDERS */}
            <motion.div
              className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#A45AFA]/30
                  "
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(164, 90, 250, 0.5)",
                    boxShadow: "0 20px 60px rgba(164, 90, 250, 0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#A45AFA]/15 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      className="mx-auto h-28 w-28 rounded-full border border-[#A45AFA]/20 bg-gradient-to-b from-[#A45AFA]/10 to-transparent"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1, ease: "linear" }}
                    />

                    <div className="mt-8 h-4 rounded bg-white/10" />

                    <div className="mt-4 h-3 w-24 mx-auto rounded bg-[#A45AFA]/20" />

                    <p className="mt-4 text-center text-sm uppercase tracking-[0.25em] text-slate-500">
                      Coming Soon
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
