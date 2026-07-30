"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Sparkles, Star, MoveRight, MessageSquare } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// ─── Speakers Data ──────────────────────────────────────────────
const speakers = [
  // {
  //   id: 1,
  //   name: "ABC",
  //   company: "AWS Community Builder",
  //   category: "keynote",
  //   current_designation: "Principal Cloud Architect",
  //   // bio: "Building resilient cloud systems at scale.",
  //   topic: "abcd",
  //   image: "/abc.png",
  //   socials: { linkedin: "#" },
  // },
  {
    id: 1,
    name: "Nikita Mourya",
    company: "AWS Community Builder",
    category: "speaker",
    current_designation: "Staff Cloud Platform Engineer",
    topic: "The Building Blocks of AI Agents with Amazon Bedrock",
    image: "/nikita_mourya.png",
    // socials: { linkedin: "#" },
  },
];

const keynoteSpeakers = speakers.filter((s) => s.category === "keynote");
const regularSpeakers = speakers.filter((s) => s.category === "speaker");

// ─── Animation Variants ─────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 80, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// ─── Component ───────────────────────────────────────────────
export default function Speakers() {
  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-[#050816] py-30"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ─── HEADER ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-6 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            SPEAKERS
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            Industry
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent animate-gradient">
              Experts
            </span>
          </h2>
        </motion.div>

        {/* ─── SPEAKER GRIDS ────────────────────────────── */}
        <div className="mt-15 space-y-25">
          {/* Keynote Speakers */}
          {keynoteSpeakers.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
            >
              <div className="mb-12 text-center">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-block rounded-full border border-[#A45AFA]/40 bg-[#A45AFA]/20 px-8 py-2 text-sm font-bold uppercase tracking-widest text-[#DDBEFF] backdrop-blur-sm shadow-lg shadow-[#A45AFA]/10"
                >
                  Keynote Speakers
                </motion.span>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {keynoteSpeakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="w-full sm:w-[340px] lg:w-[360px]"
                  >
                    <SpeakerCard speaker={speaker} isKeynote />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Speakers */}
          {regularSpeakers.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
            >
              <div className="mb-12 text-center">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-block rounded-full border border-[#A45AFA]/40 bg-[#A45AFA]/20 px-8 py-2 text-sm font-bold uppercase tracking-widest text-[#DDBEFF] backdrop-blur-sm shadow-lg shadow-[#A45AFA]/10"
                >
                  Speakers
                </motion.span>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {regularSpeakers.map((speaker) => (
                  <div key={speaker.id} className="w-full max-w-[360px]">
                    <SpeakerCard speaker={speaker} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Speaker Card Component ──────────────────────────────────
function SpeakerCard({
  speaker,
  isKeynote = false,
}: {
  speaker: any;
  isKeynote?: boolean;
}) {
  // 3D tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  // Spotlight glow
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setSpotlight({ x, y });
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setSpotlight({ x: 0, y: 0 });
  };

  // Purple accent color
  const purple = "#A45AFA";
  const purpleLight = "#DDBEFF";

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative overflow-hidden rounded-3xl
        border border-[#A45AFA] bg-white/[0.04]
        backdrop-blur-md
        p-0 transition-all duration-500
        hover:border-[#A45AFA]/60 hover:shadow-2xl hover:shadow-[#A45AFA]/25
        ${isKeynote ? "md:col-span-1 lg:col-span-1" : ""}
        cursor-default
        flex flex-col
      `}
    >
      {/* Animated gradient border on hover - Purple */}
      <div className="absolute border-2 inset-0 rounded-3xl p-[1px] border-2 bg-gradient-to-r from-transparent via-[#A45AFA] to-transparent opacity-0 transition-opacity duration-700 blur-sm" />

      {/* Spotlight glow - Purple */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 opacity-0"
        style={{
          top: spotlight.y - 150,
          left: spotlight.x - 150,
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(164,90,250,0.20) 0%, transparent 70%)",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center p-6 pb-8 [transform:translateZ(20px)]">
        {/* ─── Avatar ────────────────────────────────── */}
        <div className="relative">
          <div
            className={`
              relative flex items-center justify-center rounded-full
              border-2 border-[#A45AFA]/30
              bg-gradient-to-b from-[#A45AFA]/15 to-transparent
              shadow-lg shadow-[#A45AFA]/10
              transition-all duration-500
              group-hover:border-[#A45AFA]/70 group-hover:shadow-[#A45AFA]/30
              ${isKeynote ? "h-45 w-45" : "h-40 w-40"}
              overflow-hidden
            `}
          >
            {speaker.image ? (
              <>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  quality={100}
                  priority
                  unoptimized={false}
                  className="
      object-cover
      object-center
      transition-transform
      duration-700
      ease-out
      group-hover:scale-105
    "
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                />

                {/* Subtle hover overlay */}
                <div
                  className="
      absolute inset-0
      bg-gradient-to-t
      from-[#050816]/20
      via-transparent
      to-transparent
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
                />
              </>
            ) : (
              <span className="text-4xl font-bold text-white">
                {speaker.name.charAt(0)}
              </span>
            )}
            {/* Animated pulse ring - Purple */}
            <span className="absolute inset-0 rounded-full border-2 border-[#A45AFA]/30 animate-ping opacity-30" />
          </div>
        </div>

        {/* ─── Name ────────────────────────────────── */}
        <h4 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-[#DDBEFF]">
          {speaker.name}
        </h4>

        {/* ─── Company & current_designation ────────────────────── */}
        <div className="mt-2 flex flex-col items-center gap-1">
          <span className="inline-block rounded-full border border-[#A45AFA]/20 bg-[#A45AFA]/10 px-4 py-1 text-xs font-medium text-[#DDBEFF] backdrop-blur-sm">
            {speaker.company}
          </span>
          {speaker.current_designation && (
            <p className="text-sm text-slate-400">
              {speaker.current_designation}
            </p>
          )}
        </div>

        {/* ─── TOPIC — Purple Highlight ────── */}
        {speaker.topic && (
          <div className="mt-5 w-full rounded-2xl border border-[#A45AFA]/20 bg-gradient-to-br from-[#A45AFA]/5 via-[#A45AFA]/8 to-transparent p-4 transition-all duration-500 group-hover:border-[#A45AFA]/40 group-hover:shadow-inner group-hover:shadow-[#A45AFA]/10">
            <div className="flex items-start gap-3">
              {/* Topic icon */}
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#A45AFA]/20 text-[#A45AFA]">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                {/* "TOPIC" label with Purple */}
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A45AFA]">
                  Topic
                </span>
                {/* Topic text */}
                <p className="mt-1 text-sm font-medium leading-snug text-white/90 line-clamp-2 group-hover:text-white transition-colors">
                  {speaker.topic}
                </p>
              </div>
            </div>
            {/* Decorative purple gradient line */}
            {/* <div className="mt-3 h-[2px] w-full bg-gradient-to-r from-[#A45AFA]/0 via-[#A45AFA]/60 to-[#A45AFA]/0" /> */}
          </div>
        )}
      </div>
    </motion.div>
  );
}
