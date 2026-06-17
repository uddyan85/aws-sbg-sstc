"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TeamMember } from "../types/team";

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
  index: number;
}

const categoryColors = {
  organiser: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  operations: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  pr: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
  technical: "bg-green-500/20 text-green-300 border border-green-500/30",
  design: "bg-pink-500/20 text-pink-300 border border-pink-500/30",
  Social: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
} as const;

const socialIcons = {
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  website: Globe,
};

export function TeamMemberCard({
  member,
  onClick,
  index,
}: TeamMemberCardProps) {
  const hasSocial = Object.values(member.social).some(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(member)}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        hover:bg-white/[0.08]
        hover:border-[#A45AFA]/40
        hover:shadow-[0_0_40px_rgba(164,90,250,0.15)]
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {/* Purple Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A45AFA]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category Badge */}
      {/* <div className="absolute top-4 right-4 z-10">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[member.category]}`}
        >
          {member.category}
        </span>
      </div> */}

      {/* Avatar */}
      <div className="relative pt-8 px-6 flex justify-center">
        <div className="relative w-100 h-110 rounded-3xl  overflow-hidden ring-4 ring-[#A45AFA] group-hover:ring-[#A45AFA]/50 transition-all duration-300">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 text-center">
        <h3 className="text-xl font-bold text-purple">{member.name}</h3>

        <p className="text-[#A45AFA] font-medium mt-1">{member.role}</p>

        <p
          className="text-xl md:text-xl font-black uppercase
text-white relative inline-block
after:content-[''] after:absolute after:-bottom-1 after:left-0
after:w-full before:w-full after:h-[2px] after:bg-gradient-to-r
after:from-[#A45AFA] after:via-purple-500 after:to-transparent
after:animate-pulse"
        >
          {member.title}
        </p>

        {/* <p className="text-sm text-white/70 mt-3 line-clamp-3">{member.bio}</p> */}

        {/* Social Icons */}
        {hasSocial && (
          <div className="flex items-center justify-center gap-2 mt-5">
            {Object.entries(member.social).map(([platform, url]) => {
              if (!url) return null;

              const Icon = socialIcons[platform as keyof typeof socialIcons];

              if (!Icon) return null;

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    p-2
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-white/70
                    hover:bg-[#A45AFA]/20
                    hover:text-white
                    transition-colors
                  "
                  aria-label={`${member.name}'s ${platform}`}
                >
                  <Icon className="w-8 h-5" />
                </a>
              );
            })}
          </div>
        )}

        {/* <div className="mt-5 text-sm text-[#C89BFF] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View Details →
        </div> */}
      </div>
    </motion.div>
  );
}
