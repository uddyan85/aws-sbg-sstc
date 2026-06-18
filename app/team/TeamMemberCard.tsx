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
    <div className="flex justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}
        whileHover={{ y: -6 }}
        onClick={() => onClick(member)}
        className="
          group
          relative
          w-full
          max-w-sm
          sm:max-w-md
          md:max-w-sm
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          hover:bg-white/[0.08]
          hover:border-[#A45AFA]/40
          hover:shadow-[0_0_40px_rgba(164,90,250,0.18)]
          transition-all duration-300
          cursor-pointer
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#A45AFA]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Avatar */}
        <div className="relative flex justify-center pt-6 sm:pt-8 px-4">
          <div
            className="
              relative
    w-[296px] h-[336px]
    sm:w-[320px] sm:h-[360px]
    md:w-[300px] md:h-[336px]
    rounded-2xl
    overflow-hidden
    ring-4 ring-[#A45AFA]
    group-hover:ring-[#A45AFA]/50
    transition-all duration-300
            "
          >
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 sm:p-6 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {member.name}
          </h3>

          <p className="text-[#A45AFA] font-medium text-sm sm:text-base mt-1">
            {member.role}
          </p>

          <p className="text-white font-extrabold uppercase text-base sm:text-lg mt-2 relative inline-block
            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
            after:bg-gradient-to-r after:from-[#A45AFA] after:via-purple-500 after:to-transparent
            after:animate-pulse"
          >
            {member.title}
          </p>

          {/* Social */}
          {hasSocial && (
            <div className="flex justify-center gap-3 mt-5">
              {Object.entries(member.social).map(([platform, url]) => {
                if (!url) return null;

                const Icon =
                  socialIcons[platform as keyof typeof socialIcons];

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
                      border border-white/10
                      text-white/70
                      hover:bg-[#A45AFA]/20
                      hover:text-white
                      transition-all
                    "
                    aria-label={`${member.name} ${platform}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}