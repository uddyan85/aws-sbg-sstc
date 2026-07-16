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
        pt-[150px] 
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background */}
      {/* <FloatingParticles /> */}

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2" />

      {/* ================= BACKGROUND BOTTOM ILLUSTRATION ================= */}
      <div className="absolute bottom-[-109px] left-0 w-full h-[500px] sm:h-[580px] lg:h-[350px] z-0 overflow-hidden pointer-events-none flex items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-full"
        >
          {/* Fade Overlay: Makes the image blend into the dark hero background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
          
          <Image
            src="/theme.png" // REPLACE THIS WITH YOUR ACTUAL FILENAME
            alt="Bottom Landscape"
            fill
            className="object-cover object-bottom"
            priority={false}
          />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6 text-center flex flex-col items-center">
        {/* AWS IMAGE (ONLY HERO FOCUS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-1"
        >
          <div
            className="
              relative
              h-[150px]
              w-[150px]
              sm:h-[170px]
              sm:w-[170px]
              md:h-[180px]
              md:w-[180px]
              
              flex items-center justify-center
              group
            "
          >
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm animate-[sweep_2.4s_linear_infinite]" />
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
          <span className="bg-gradient-to-r font-bold text-white bg-clip-text text-transparent">
            Student Community Day
          </span>

          <span className="inline-block mt-2 font-medium text-[#FF9900] drop-shadow-[0_0_35px_rgba(255,179,71,1)] animate-pulse-slow">
            Bhilai 2026
          </span>
        </motion.h1>

        {/* ================= SUBTITLE ================= */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-gray-400"
        >
          One day. One stage. Chhattisgarh’s largest AWS community gathering
          where future builders, industry leaders, and cloud innovators come
          together.
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
          <span className="px-4 py-2 rounded-full bg-white/5 border border-purple-500/30">
          26 SEP, 2026
            {/* COMING */}
          </span>

          <span className="text-[#A45AFA]">•</span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-purple-500/30">
          08:00 AM
            {/* SOON */}
          </span>

          <span className="text-[#A45AFA]">•</span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-purple-500/30">
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
          <CountdownTimer targetDate="2026-09-26T08:00:00" />
        </motion.div>

        {/* ================= CTA (REGISTER BUTTON) ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 mb-14 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#registration"
            className="
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden

    rounded-full
    px-8
    py-4

    font-bold
    text-black

    bg-gradient-to-b
    from-[#FFB238]
    via-[#FF9900]
    to-[#CC7000]

    border border-[#FFD27A]/30
    backdrop-blur-xl

    shadow-[0_8px_30px_rgba(255,153,0,0.35)]
    transition-all
    duration-500

    hover:scale-105
    hover:shadow-[0_0_30px_rgba(255,153,0,0.8),0_0_60px_rgba(255,153,0,0.65),0_0_120px_rgba(255,153,0,0.45)]
  "
          >
            {/* Bright Glass Reflection */}
            <span
              className="
      absolute
      inset-0
      rounded-full
      bg-gradient-to-b
      from-white/35
      via-white/10
      to-transparent
      pointer-events-none
    "
            />

            {/* Bloom */}
            <span
              className="
      absolute
      -inset-5
      rounded-full
      bg-[#FF9900]
      blur-3xl
      opacity-20
      transition-all
      duration-500
      group-hover:opacity-70
      group-hover:scale-125
    "
            />

            {/* Animated Shine */}
            <span
              className="
      absolute
      -left-32
      top-0
      h-full
      w-20
      rotate-12
      bg-white/50
      blur-md
      transition-all
      duration-700
      group-hover:left-[130%]
    "
            />

            <span className="relative z-10 flex items-center">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}