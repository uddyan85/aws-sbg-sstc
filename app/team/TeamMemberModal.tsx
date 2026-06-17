"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, Globe } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TeamMember } from "../types/team";

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const socialIcons = {
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  website: Globe,
};

export function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (member) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [member]);

  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
            y: 20,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          exit={{
            scale: 0.9,
            opacity: 0,
            y: 20,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            max-w-2xl
            w-full
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            border
            border-white/10
            bg-[#0B1020]/1
            backdrop-blur-2xl
            shadow-[0_0_80px_rgba(164,90,250,0.2)]
          "
        >
          {/* Purple Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#A45AFA]/20 blur-[120px]" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute
              top-4
              right-4
              z-20
              p-2
              rounded-full
              bg-white/10
              border
              border-white/10
              hover:bg-white/20
              transition-colors
            "
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative z-10 p-8 md:p-10">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-[#A45AFA]/30 mb-6">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* Name */}
              <h2 className="text-3xl font-bold text-white">{member.name}</h2>

              {/* Role */}
              <p className="text-[#A45AFA] text-lg font-medium mt-2">
                {member.role}
              </p>

              {/* Title */}
              <p className="text-white/60">{member.title}</p>

              {/* Bio */}
              <div className="mt-6 max-w-xl">
                <p className="text-white/80 leading-relaxed">{member.bio}</p>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
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
                      className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-xl
                          bg-white/5
                          border
                          border-white/10
                          text-white/80
                          hover:bg-[#A45AFA]/20
                          hover:border-[#A45AFA]/40
                          transition-all
                        "
                    >
                      <Icon className="w-4 h-4" />
                      <span className="capitalize text-sm">{platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
