"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";

import { teamMembers } from "../../data/teamMembers";
import { TeamMember } from "../../types/team";
import { TeamMemberCard } from "../../team/TeamMemberCard";
import { TeamMemberModal } from "../../team/TeamMemberModal";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // const categories = ['all', ...new Set(teamMembers.map((m) => m.category))];

  const filteredMembers =
    filter === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.category === filter);

  return (
    <section className="relative py-20 overflow-hidden bg-[#050816]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* HEADER */}
          <div className="mx-auto mt-18 max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl uppercase">
              Our Organizing Team
            </span>

            {/* <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            The Team Behind
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              AWS SCD
            </span>
          </h2> */}

            <p className="mx-auto mt-8 max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-slate-400">
              The core team behind AWS Student Community Day 2026 — building,
              designing, organizing, and delivering the experience from start to
              finish.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
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

      {/* <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      /> */}
    </section>
  );
}
