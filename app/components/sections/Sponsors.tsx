"use client";

import Link from "next/link";
import {
  Trophy,
  Star,
  Shield,
  Medal,
  Users,
  Globe,
  ArrowRight,
  Handshake,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type Variants,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ─── Data ──────────────────────────────────────────────────────────────
const sponsorsData = [
  {
    name: "Amazon Web Services",
    logo: "AWS.png",
    category: "Title",
  },
  {
    name: "Meetio",
    logo: "meetio.png",
    category: "Technology",
  },
];

// Community partner data
const communityPartnersData = [
  {
    name: "AWS SBG Amity",
    logo: "Amity.png",
    category: "Community",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Sponsors() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // ─── Filter state ──────────────────────────────────────────────────
  // Get unique categories from sponsors data
  const sponsorCategories = [
    "All",
    ...new Set(sponsorsData.map((s) => s.category)),
  ];
  const [selectedSponsorCategory, setSelectedSponsorCategory] = useState("All");

  const filteredSponsors =
    selectedSponsorCategory === "All"
      ? sponsorsData
      : sponsorsData.filter((s) => s.category === selectedSponsorCategory);

  // Community partners filter
  const partnerCategories = [
    "All",
    ...new Set(communityPartnersData.map((p) => p.category)),
  ];
  const [selectedPartnerCategory, setSelectedPartnerCategory] = useState("All");

  const filteredPartners =
    selectedPartnerCategory === "All"
      ? communityPartnersData
      : communityPartnersData.filter(
          (p) => p.category === selectedPartnerCategory,
        );

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] py-20 md:py-25"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ─── Header ─── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-6 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl"
          >
            SPONSORS
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-white"
          >
            Powered By
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Amazing Partners
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-400"
          >
            Organizations supporting the next generation of cloud builders,
            innovators and future technology leaders.
          </motion.p>
        </motion.div>

        {/* ─── Partners Section with Filter ─── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-4xl md:text-5xl font-black text-white">
              Partners
            </h3>
          </motion.div>

          {/* Sponsor Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
          >
            {filteredSponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                style={{
                  perspective: "800px",
                  transform: `rotateX(${mousePos.y * 8}deg) rotateY(${mousePos.x * 8}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="group relative w-full max-w-xs"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700" />
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-[#0a0a1a]/80 backdrop-blur-sm rounded-3xl p-8 border-purple-500/30 group-hover:border-transparent transition-all duration-300">
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#A45AFA] to-[#E9D5FF] px-3 py-2 text-[14px] font-semibold text-black shadow-lg">
                      {/* <Trophy className="h-3 w-3" /> */}
                      <span>{sponsor.category}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center h-48">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#A45AFA] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="relative max-h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="mt-6 text-lg font-bold text-white transition-colors duration-300">
                      {sponsor.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── Community Partners Section with Filter ─── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-6 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
              COMMUNITY PARTNERS
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
          >
            {filteredPartners.map((partner) => (
              <motion.div
                key={partner.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl bg-[#0a0a1a]/80 backdrop-blur-sm border border-white/5 hover:border-[#A45AFA]/30 transition-all duration-300 p-8 w-full max-w-xs"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#A45AFA]/0 via-[#A45AFA]/0 to-[#A45AFA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#A45AFA] to-[#E9D5FF] px-3 py-2 text-[14px] font-semibold text-black shadow-lg">
                    <Users className="h-3 w-3" />
                    <span>{partner.category}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center h-48">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#A45AFA] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="relative max-h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-6 text-lg font-bold text-white transition-colors duration-300">
                    {partner.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── CTA ─── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-[40px] border border-purple-500/20 bg-[#0a0a1a]/80 backdrop-blur-sm p-12 md:p-16"
            whileHover={{ boxShadow: "0 0 80px -20px rgba(164,90,250,0.4)" }}
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#A45AFA]/20 blur-[160px]" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#7C3AED]/15 blur-[160px]" />

            <div className="relative z-10 text-center">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#A45AFA]/20 bg-[#A45AFA]/10"
              >
                <Handshake className="h-10 w-10 text-[#A45AFA]" />
              </motion.div>

              <h3 className="mt-8 text-4xl md:text-5xl font-black text-white">
                Become a Sponsor
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                Connect your brand with hundreds of students, developers,
                builders and future cloud professionals. Showcase your company,
                opportunities and products to a highly engaged technical
                audience.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-block"
              >
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-3 rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#A45AFA]/20 hover:shadow-[0_0_40px_-8px_rgba(164,90,250,0.5)]"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A45AFA] to-[#F0E1FF] opacity-0 hover:opacity-20 blur-md transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center gap-3">
                    Join as a Sponsor
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Custom Styles ─── */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          100% {
            transform: translate(20px, -30px) scale(1.5);
            opacity: 0.8;
          }
        }
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin 30s linear infinite reverse;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradientShift 4s ease-in-out infinite;
        }
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-pulse {
          animation: pulse 8s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
