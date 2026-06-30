"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

const tracks = [
  {
    level: "Beginner",
    title: "AWS Foundations",
    description:
      "Explore core AWS services like EC2, S3, IAM, and cloud fundamentals while building a strong foundation for your cloud journey.",
    topics: [
      "AWS Console Fundamentals",
      "Launch EC2 Instances",
      "Store Data with Amazon S3",
      "Secure Resources using IAM",
    ],
    color: "from-emerald-500 to-teal-500",
    gradient: "emerald",
  },
  {
    level: "Intermediate",
    title: "Cloud & AI Workshops",
    description:
      "Dive into hands-on sessions covering serverless architectures, AI/ML with Amazon Bedrock, infrastructure automation, and observability.",
    topics: [
      "Serverless Application Design",
      "AI/ML with Amazon Bedrock",
      "Infrastructure as Code",
      "Monitoring & Observability",
    ],
    color: "from-sky-500 to-cyan-500",
    gradient: "sky",
  },
  {
    level: "Career",
    title: "Career Growth",
    description:
      "Learn how to build your professional profile, prepare for certifications, and connect with industry experts and recruiters.",
    topics: [
      "Resume & Portfolio Reviews",
      "LinkedIn & GitHub Optimization",
      "Interview Preparation",
      "AWS Certification Roadmap",
    ],
    color: "from-violet-500 to-pink-500",
    gradient: "violet",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3,
    },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0.4,
    },
  },
};

const floatingParticles = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  x: (i * 37) % 100,
  y: (i * 53) % 100,
  size: 2 + (i % 4),
  duration: 8 + (i % 7),
  delay: (i * 0.3) % 3,
}));

const glowOrbs = [
  { x: -10, y: 10, size: 500, opacity: 0.12, delay: 0 },
  { x: 80, y: 70, size: 400, opacity: 0.08, delay: 2 },
  { x: 50, y: 20, size: 350, opacity: 0.06, delay: 4 },
];

export default function Tracks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tracks"
      className="relative overflow-hidden bg-[#050816] py-10"
    >
      

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ===== HEADER ===== */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute left-1/2 top-14 h-px w-72 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A45AFA]/60 to-transparent" />

          <motion.span
            className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-6 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            LEARNING TRACKS
          </motion.span>

          <motion.h2
            className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Choose Your
            <motion.span
              className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Cloud Journey
            </motion.span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Whether you&apos;re beginning your cloud journey, exploring
            AI-powered solutions, or preparing for your next career milestone,
            there&apos;s a dedicated track built for you.
          </motion.p>
        </motion.div>

        {/* ===== TRACKS ===== */}
        <motion.div
          className="mt-24 grid gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tracks.map((track, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const springX = useSpring(x, { damping: 20, stiffness: 200 });
            const springY = useSpring(y, { damping: 20, stiffness: 200 });

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              const rotateX = (e.clientY - centerY) / 12;
              const rotateY = (e.clientX - centerX) / 12;
              x.set(-rotateY);
              y.set(rotateX);
            };

            const handleMouseLeave = () => {
              x.set(0);
              y.set(0);
            };

            const gradientColors = {
              emerald: "from-emerald-500/20 via-emerald-500/5 to-transparent",
              sky: "from-sky-500/20 via-sky-500/5 to-transparent",
              violet: "from-violet-500/20 via-violet-500/5 to-transparent",
            };

            const borderColors = {
              emerald: "hover:border-emerald-500/40",
              sky: "hover:border-sky-500/40",
              violet: "hover:border-violet-500/40",
            };

            const glowColors = {
              emerald: "group-hover:bg-emerald-500/20",
              sky: "group-hover:bg-sky-500/20",
              violet: "group-hover:bg-violet-500/20",
            };

            return (
              <motion.div
                key={track.title}
                ref={cardRef}
                variants={cardVariants}
                className="group relative"
                style={{
                  perspective: "800px",
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  className={`
                                        relative
                                        overflow-hidden
                                        rounded-[32px]
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        backdrop-blur-xl
                                        transition-all
                                        duration-500
                                        hover:-translate-y-3
                                        ${borderColors[track.gradient as keyof typeof borderColors]}
                                    `}
                  style={{
                    rotateX: springY,
                    rotateY: springX,
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={{
                    boxShadow: `0 25px 60px -15px rgba(164,90,250,0.2)`,
                  }}
                >
                  {/* HOVER GLOW */}
                  <div
                    className={`
                                            absolute
                                            inset-0
                                            opacity-0
                                            transition-opacity
                                            duration-500
                                            group-hover:opacity-100
                                            ${glowColors[track.gradient as keyof typeof glowColors]}
                                        `}
                  />

                  {/* Animated Gradient Border Glow */}
                  <motion.div
                    className={`
                                            absolute -inset-[2px] rounded-[34px] opacity-0
                                            transition-opacity duration-500 group-hover:opacity-100
                                            bg-gradient-to-r ${track.color}
                                        `}
                    style={{ zIndex: -1 }}
                    animate={{
                      opacity: [0, 0.15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />

                  {/* TOP ACCENT BAR */}
                  <motion.div
                    className={`h-1.5 w-full bg-gradient-to-r ${track.color}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.8 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* NUMBER */}
                  <div className="absolute right-6 top-5 text-7xl font-black text-white/25 select-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 p-8">
                    <motion.span
                      className={`
                                                inline-flex rounded-full border border-white/10
                                                px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em]
                                                text-[#A45AFA] bg-white/5
                                            `}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {track.level}
                    </motion.span>

                    <motion.h3
                      className="mt-6 text-3xl font-black text-white"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.15 }}
                    >
                      {track.title}
                    </motion.h3>

                    <p className="mt-5 text-slate-400 leading-relaxed">
                      {track.description}
                    </p>

                    {/* TOPICS */}
                    <div className="mt-8 border-t border-[#A45AFA]/30 pt-6">
                      <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A45AFA]">
                        Learning Outcomes
                      </p>

                      <div className="space-y-4">
                        {track.topics.map((topic, idx) => (
                          <motion.div
                            key={idx}
                            className="flex gap-4 items-start"
                            initial={{ opacity: 0, x: -15 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              delay: 0.9 + index * 0.15 + idx * 0.08,
                              duration: 0.4,
                            }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              className="mt-2 h-2.5 w-2.5 rounded-full bg-[#A45AFA] flex-shrink-0"
                              whileHover={{
                                scale: 1.5,
                                boxShadow: "0 0 20px rgba(164, 90, 250, 0.5)",
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                              }}
                            />
                            <span className="text-slate-300">{topic}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM BAR */}
                    <motion.div
                      className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#A45AFA]/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 1.1 + index * 0.15, duration: 0.8 }}
                    />

                    {/* Progress indicator */}
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        {track.topics.length} modules
                      </span>
                      <motion.div
                        className="h-1.5 w-24 rounded-full bg-white/5 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.2 + index * 0.15 }}
                      >
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${track.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{
                            delay: 1.4 + index * 0.15,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ===== ROADMAP STRIP ===== */}
        <motion.div
          className="mt-24 overflow-hidden rounded-[40px] border border-[#A45AFA]/20 bg-white/[0.03] backdrop-blur-xl relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {/* Animated gradient border glow */}
          <motion.div
            className="absolute -inset-[1px] rounded-[41px] opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(164,90,250,0.3), rgba(240,225,255,0.1), rgba(164,90,250,0.3))",
              zIndex: -1,
            }}
            animate={{
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative">
            <motion.div
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#A45AFA]/15 blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-10 lg:flex-row">
              <div>
                <motion.p
                  className="text-sm uppercase tracking-[0.35em] text-[#A45AFA]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Builder Progression
                </motion.p>

                <motion.h3
                  className="mt-4 text-4xl md:text-5xl font-black text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  Learn → Build → Grow
                </motion.h3>

                <motion.p
                  className="mt-5 max-w-2xl text-slate-400 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  Progress from cloud fundamentals to AI-powered applications
                  and career-ready skills through a carefully curated learning
                  experience designed by AWS community leaders.
                </motion.p>
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-7xl md:text-8xl font-black text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  AWS
                </motion.div>

                <p className="mt-2 text-sm uppercase tracking-[0.4em] text-slate-500">
                  COMMUNITY DAY
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ===== STATS ===== */}
        <motion.div
          className="mt-28 grid gap-10 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { value: 3, label: "Learning Tracks", suffix: "" },
            { value: 12, label: "Hands-on Sessions", suffix: "+" },
            { value: 100, label: "Community Driven", suffix: "%" },
          ].map((item, idx) => {
            const [count, setCount] = useState(0);

            useEffect(() => {
              if (isInView) {
                let start = 0;
                const end = item.value;
                const duration = 1500;
                const increment = end / (duration / 16);
                const timer = setInterval(() => {
                  start += increment;
                  if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                  } else {
                    setCount(Math.floor(start));
                  }
                }, 16);
                return () => clearInterval(timer);
              }
            }, [isInView, item.value]);

            return (
              <motion.div
                key={item.label}
                variants={statVariants}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-[#A45AFA] to-[#F0E1FF] bg-clip-text text-6xl font-black text-transparent inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {count}
                  {item.suffix}
                </motion.div>

                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-400">
                  {item.label}
                </p>

                <motion.div
                  className="mt-3 h-0.5 w-12 mx-auto rounded-full bg-gradient-to-r from-[#A45AFA]/0 via-[#A45AFA]/50 to-[#A45AFA]/0"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8 + idx * 0.1, duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
