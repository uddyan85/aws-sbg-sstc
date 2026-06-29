"use client";

import {
  BrainCircuit,
  Users,
  Rocket,
  Trophy,
  Gift,
  Network,
  MessageSquare,
  Sparkles,
  MapPin,
  Award,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
  useMotionValueEvent,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const pillars = [
  {
    id: "01",
    title: "Learn",
    icon: BrainCircuit,
    description:
      "Explore Cloud, AI, DevOps, Security, Serverless and modern AWS technologies.",
  },
  {
    id: "02",
    title: "Connect",
    icon: Users,
    description:
      "Meet AWS Community leaders, builders, professionals and students from across India.",
  },
  {
    id: "03",
    title: "Belong",
    icon: Rocket,
    description:
      "Become part of a thriving ecosystem where learning, mentorship and collaboration continue long after the event.",
  },
];

const features = [
  {
    icon: BrainCircuit,
    title: "Technical Sessions",
    description: "Deep-dive talks on AWS, AI/ML, DevOps & more.",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with 1000+ builders & industry experts.",
  },
  {
    icon: Gift,
    title: "AWS Swag Kit",
    description: "Exclusive goodies & merchandise for attendees.",
  },
  {
    icon: Trophy,
    title: "Quiz & Rewards",
    description: "Win exciting prizes and recognition.",
  },
];

// ------------------------------------------------------------
// Animation Helpers
// ------------------------------------------------------------

const containerVariants: Variants = {
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ------------------------------------------------------------
// Animated Counter Component
// ------------------------------------------------------------

function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setCount(Math.round(latest));
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.div ref={ref} variants={itemVariants} className="text-center">
      <div className="relative inline-block">
        <span
          className="
            absolute
            inset-0
            text-6xl
            sm:text-7xl
            md:text-8xl
            font-black
            text-transparent
            [-webkit-text-stroke:1px_rgba(164,90,250,.15)]
          "
        >
          {value}
        </span>
        <span className="relative text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-[#A45AFA] to-[#F0E1FF] bg-clip-text text-transparent tabular-nums">
          {count}
        </span>
        <span className="relative text-6xl sm:text-7xl md:text-8xl font-black text-[#A45AFA]">
          +
        </span>
      </div>
      <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}

// ------------------------------------------------------------
// Main Component
// ------------------------------------------------------------

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-20 sm:py-20 md:py-30"
    >
      {/* ============================================================ */}
      {/* BACKGROUND - Unchanged                                       */}
      {/* ============================================================ */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#A45AFA]/25 blur-[150px] md:blur-[180px]" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#7C3AED]/20 blur-[150px] md:blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#A45AFA]/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(164,90,250,.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(164,90,250,.4) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
        <div className="hidden md:block">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#A45AFA]/30 animate-pulse"
              style={{
                left: `${(i * 23) % 100}%`,
                top: `${(i * 37) % 100}%`,
                animationDelay: `${i * 0.12}s`,
                animationDuration: `${2 + (i % 4)}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* CONTENT                                                     */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* ------------------------------------------------------------
             TWO-COLUMN LAYOUT: Left = SCD, Right = Why Attend?
          ------------------------------------------------------------ */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {/* --- LEFT COLUMN: WHAT IS SCD --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col justify-center"
          >
            {/* Responsive SCD Watermark */}
            <div className="absolute -top-4 -left-2 sm:-top-8 sm:-left-4 md:-top-12 md:-left-8 lg:-top-16 lg:-left-12 xl:-top-20 xl:-left-16 text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[12vw] xl:text-[10vw] font-black text-white/5 select-none pointer-events-none whitespace-nowrap">
              SCD
            </div>

            <div className="relative">
              <div className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
                WHAT IS SCD
              </div>

              <h2 className="mt-6 sm:mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-white">
                One Day to
                <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
                  Level Up
                </span>
              </h2>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 max-w-xl">
                <span className="text-[#ffb347] font-bold">
                  AWS Student Community Day Bhilai 2026
                </span>{" "}
                brings together ambitious students, cloud builders, AWS leaders,
                and industry experts for a day of hands-on learning, meaningful
                networking, and innovation.
              </p>

              {/* Compact Timeline (without vertical line) */}
              <div className="mt-8 space-y-4">
                {pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex items-start gap-4 group">
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-lg border border-[#A45AFA]/20 bg-[#A45AFA]/10 text-[#A45AFA] text-xs font-bold">
                        {item.id}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-[#DDBEFF] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: WHY ATTEND? --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
                WHY ATTEND?
              </div>

              {/* <h3 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white">
                Everything that
                <span className="block bg-gradient-to-r from-[#A45AFA] to-[#F0E1FF] bg-clip-text text-transparent">
                  makes it worth
                </span>
                <span className="block text-white">your day.</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                From hands-on sessions to community building — here's what
                awaits you at SCD Bhilai 2026.
              </p> */}
            </div>

            {/* Feature Cards - 2x2 grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-1 gap-4"
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-[#A45AFA]/40 hover:bg-[#A45AFA]/10 hover:shadow-xl hover:shadow-[#A45AFA]/10 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-[#A45AFA]/20 to-[#7C3AED]/10" />
                    <div className="relative z-10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A45AFA]/10 border border-[#A45AFA]/20">
                        <Icon size={18} className="text-[#A45AFA]" />
                      </div>
                      <h5 className="mt-3 text-base font-bold text-white group-hover:text-[#DDBEFF] transition-colors">
                        {feature.title}
                      </h5>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------
             DIVIDER (kept as subtle separator before stats)
          ------------------------------------------------------------ */}

        <div className="relative my-10 sm:my-10 md:my-15 flex items-center justify-center">
          <div className="h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-[#A45AFA]/50 to-transparent" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 360 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center 
            
            "
          >
            {/* rounded-full border-2 border-[#A45AFA]/30 bg-[#050816] shadow-2xl shadow-[#A45AFA]/20 */}
            {/* <Sparkles size={18} className="text-[#A45AFA]" /> */}
          </motion.div>
        </div>

        {/* ------------------------------------------------------------
             STATS (Ghost design with increased numbers)
          ------------------------------------------------------------ */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8"
        >
          <AnimatedCounter value={400} label="Builders" />
          <AnimatedCounter value={8} label="Speakers" />
          <AnimatedCounter value={3} label="Tracks" />
        </motion.div>
      </div>
    </section>
  );
}
