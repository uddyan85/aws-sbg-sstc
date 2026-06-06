"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import CountdownTimer from "../ui/CountdownTimer";
import FloatingParticles from "../ui/FloatingParticles";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100dvh]
        pt-[140px] 
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background */}
      <FloatingParticles />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6 text-center flex flex-col items-center">

        {/* AWS IMAGE (ONLY HERO FOCUS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div
            className="
              relative
              h-[110px]
              w-[110px]
              sm:h-[130px]
              sm:w-[130px]
              md:h-[150px]
              md:w-[150px]
              
              flex items-center justify-center
              group
            "
          >
             <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[sweep_2.4s_linear_infinite]" />
      </div>

            {/* image */}
            <Image
              src="/AWS-logo.png"
              alt="AWS"
              fill
              priority
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* ================= TITLE ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            xl:text-7xl
            font-black
            tracking-tight
            leading-[1.05]
          "
        >
          {/* <span className="block text-white">AWS</span> */}

          <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">
           Student Community Day
          </span>

         <span className="inline-block mt-2 font-medium text-[#ffb347] drop-shadow-[0_0_35px_rgba(255,179,71,1)] animate-pulse-slow">
  Bhilai 2026
</span>

          {/* <span className="block text-white mt-2">Bhilai 2026</span> */}

        </motion.h1>

        {/* ================= SUBTITLE ================= */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-gray-400"
        >
          A high-energy AWS event with workshops, labs, AI sessions, and real-world cloud learning.
        </motion.p>

        {/* ================= DATE / TIME (ONE LINE ALWAYS) ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-3
            flex-wrap
            text-sm
            sm:text-base
          "
        >
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            29 AUG, 2026
          </span>

          <span className="text-[#A45AFA]">•</span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            08:00 AM
          </span>

          <span className="text-[#A45AFA]">•</span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            IST
          </span>
        </motion.div>

        {/* ================= COUNTDOWN (RESPONSIVE CENTER GRID) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 w-full"
        >
          <CountdownTimer targetDate="2026-08-29T08:00:00" />
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#register"
            className="
              px-8 py-4
              rounded-full
              bg-[#A45AFA]
              text-white
              font-semibold
              hover:scale-105
              transition
              shadow-[0_0_30px_rgba(164,90,250,0.4)]
            "
          >
            Register Now <ArrowRight className="inline ml-2 w-4 h-4" />
          </Link>

          <Link
            href="#about"
            className="
              px-8 py-4
              rounded-full
              border border-white/10
              bg-white/5
              text-white
              hover:bg-white/10
              transition
            "
          >
            Learn More
          </Link>
        </motion.div>

      </div>
    </section>
  );
}