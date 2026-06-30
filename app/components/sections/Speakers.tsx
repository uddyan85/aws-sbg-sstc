"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Sparkles, Star, MoveRight } from "lucide-react";
// import { FaLinkedinIn, FaInstagram, FaMeetup, FaXTwitter, } from "react-icons/fa6";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";

// ─── Speakers Data ──────────────────────────────────────────────
const speakers = [
  {
    id: 1,
    name: "Dr. ABC",
    company: "AWS Community Builder",
    category: "keynote",
    title: "Principal Cloud Architect",
    bio: "Building resilient cloud systems at scale.",
    image: "/AWS.png",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "xyz",
    company: "Startup Founder",
    category: "keynote",
    title: "AI/ML Specialist",
    bio: "Transforming ideas into AI-powered products.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Mr. ABC",
    company: "AWS",
    category: "speaker",
    title: "Senior Developer Advocate",
    bio: "Helping developers build with cloud native tools.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Dr. ABC",
    company: "AWS",
    category: "speaker",
    title: "Solutions Architect",
    bio: "Designing hybrid and multi‑cloud solutions.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 5,
    name: "xyz",
    company: "Independent Consultant",
    category: "speaker",
    title: "DevOps & Serverless Expert",
    bio: "Automating everything with serverless.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 6,
    name: "Dr. ABC",
    company: "AWS User Group Leader",
    category: "speaker",
    title: "Cloud Educator",
    bio: "Teaching cloud to the next generation.",
    socials: { twitter: "#", linkedin: "#" },
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

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            Learn directly from AWS Community Leaders, Builders, Cloud
            Architects, AI Experts and Industry Professionals.
          </p>
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
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {keynoteSpeakers.map((speaker) => (
                  <SpeakerCard key={speaker.id} speaker={speaker} isKeynote />
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
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {regularSpeakers.map((speaker) => (
                  <SpeakerCard key={speaker.id} speaker={speaker} />
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
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
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
      // Update tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const offsetX = (x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setSpotlight({ x: 0, y: 0 });
  };

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
        border border-white/10 bg-white/[0.03] 
        backdrop-blur-md
        p-6 transition-all duration-500
        hover:border-[#A45AFA]/50 hover:shadow-2xl hover:shadow-[#A45AFA]/20
        ${isKeynote ? "md:col-span-1 lg:col-span-1" : ""}
        cursor-default
      `}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-[#A45AFA] to-transparent opacity-0 group-hover:opacity-0 transition-opacity duration-700 blur-sm" />

      {/* Spotlight glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-0"
        style={{
          top: spotlight.y - 150,
          left: spotlight.x - 150,
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(164,90,250,0.25) 0%, transparent 70%)",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* Glow orbs inside */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#A45AFA]/20 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#A45AFA]/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center [transform:translateZ(20px)]">
        {/* Avatar / Image with enhanced styling */}
        <div className="relative">
          <div
            className={`
              relative flex items-center justify-center rounded-full 
              border-2 border-[#A45AFA]/30 
              bg-gradient-to-b from-[#A45AFA]/20 to-transparent
              shadow-lg shadow-[#A45AFA]/10
              transition-all duration-500
              group-hover:border-[#A45AFA]/70 group-hover:shadow-[#A45AFA]/30
              ${isKeynote ? "h-45 w-45" : "h-45 w-45"}
              overflow-hidden
            `}
          >
            {speaker.image ? (
              <>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[-3deg]"
                  sizes="(max-width: 768px) 112px, 128px"
                />
                {/* Glass overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            ) : (
              <span className="text-4xl font-bold text-white">
                {speaker.name.charAt(0)}
              </span>
            )}
            {/* Animated pulse ring */}
            <span className="absolute inset-0 rounded-full border-2 border-[#A45AFA]/30 animate-ping opacity-30" />
          </div>

          {/* Keynote badge with floating animation */}
          {/* {isKeynote && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute -top-2 -right-2 flex items-center gap-1 rounded-full bg-gradient-to-r from-[#A45AFA] to-[#DDBEFF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#050816] shadow-lg shadow-[#A45AFA]/30 animate-float"
            >
              <Star className="h-3 w-3 fill-current" />
              Keynote
            </motion.div>
          )} */}
        </div>

        {/* Name */}
        <h4 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-[#DDBEFF]">
          {speaker.name}
        </h4>

        {/* Company with pill */}
        <span className="mt-2 inline-block rounded-full border border-[#A45AFA]/20 bg-[#A45AFA]/10 px-4 py-1 text-xs font-medium text-[#A45AFA] backdrop-blur-sm">
          {speaker.company}
        </span>

        {/* Title */}
        {speaker.title && (
          <p className="mt-3 text-sm text-slate-400">{speaker.title}</p>
        )}

        {/* Bio */}
        {speaker.bio && (
          <p className="mt-3 text-xs text-slate-500 line-clamp-2">
            {speaker.bio}
          </p>
        )}

        {/* Social icons */}
        {/* {(speaker.socials?.twitter || speaker.socials?.linkedin) && (
          <div className="mt-5 flex gap-3">
            {speaker.socials.twitter && (
              <a
                href={speaker.socials.twitter}
                className="rounded-full bg-white/5 p-2 text-slate-400 transition-colors hover:bg-[#A45AFA]/20 hover:text-[#DDBEFF]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            )}
            {speaker.socials.linkedin && (
              <a
                href={speaker.socials.linkedin}
                className="rounded-full bg-white/5 p-2 text-slate-400 transition-colors hover:bg-[#A45AFA]/20 hover:text-[#DDBEFF]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            )}
          </div>
        )} */}

        {/* Decorative line with animated arrow */}
        <div className="mt-6 flex justify-center">
          <div className="h-px w-28 flex">
            <div className="w-1/2 bg-gradient-to-r from-transparent to-[#A45AFA]/70" />
            <div className="w-1/2 bg-gradient-to-l from-transparent to-[#A45AFA]/70" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
