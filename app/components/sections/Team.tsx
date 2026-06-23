"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { teamMembers } from "../../data/teamMembers";
import { TeamMember } from "../../types/team";
import { TeamMemberCard } from "../../team/TeamMemberCard";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filter] = useState<string>("all");

  const router = useRouter();

  const filteredMembers =
    filter === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.category === filter);

  return (
    <div className="relative isolate bg-[#050816]">
      {/* ================= BACK BUTTON (TOP LAYER) ================= */}
      <div className="fixed z-[9999] left-4 top-4 md:left-6 md:top-6 lg:left-10 lg:top-10">
        <button
          onClick={() => router.back()}
          className="
            group relative flex items-center justify-center
            h-11 w-11 md:h-12 md:w-12
            rounded-full
            bg-white/5 backdrop-blur-2xl
            border border-white/10
            transition-all duration-300
            hover:scale-110 active:scale-95
            cursor-pointer
          "
        >
          <span className="absolute inset-0 rounded-full bg-[#A45AFA]/20 blur-md animate-pulse" />
          <span className="absolute inset-0 rounded-full border border-[#A45AFA]/30 group-hover:rotate-45 transition-transform duration-700" />

          <ArrowLeft
            size={18}
            className="relative z-10 text-slate-300 group-hover:text-white transition-all duration-300 group-hover:-translate-x-0.5"
          />

          <span className="absolute  left-3 h-5 w-5 rounded-full bg-[#A45AFA] animate-ping" />
        </button>
      </div>

      {/* ================= BACKGROUND (LOWEST LAYER) ================= */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-[550px] w-[550px] rounded-full bg-[#A45AFA]/15 blur-[150px]" />
        <div className="absolute -right-32 bottom-0 h-[650px] w-[650px] rounded-full bg-[#A45AFA]/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(164,90,250,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(164,90,250,.35) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#A45AFA]/40 animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* ================= HEADER ================= */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] uppercase">
              Our Organizing Team
            </span>

            <h2 className="mt-8 text-5xl md:text-8xl font-black text-white leading-none">
              The Team Behind
              <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
                AWS SCD
              </span>
            </h2>

            <p className="mt-8 text-slate-400 text-base md:text-xl leading-relaxed">
              The core team behind AWS Student Community Day 2026 — building,
              designing, organizing, and delivering the experience from start to
              finish.
            </p>
          </motion.div>
        </div>
        {/* </section> */}

        {/* ================= TEAM GRID ================= */}
        <section className="relative z-10 pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  onClick={setSelectedMember}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
