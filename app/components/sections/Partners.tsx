"use client";

import Link from "next/link";
import {
  Users,
  Globe,
  Code2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const communityPartners = [
  // {
  //   name: "AWS User Group Bhilai",
  //   type: "AWS Community",
  //   icon: Globe,
  //   logo: "https://via.placeholder.com/200x100?text=AWS+UG",
  // },
  // {
  //   name: "Cloud Native Community",
  //   type: "CNCF Ecosystem",
  //   icon: Users,
  //   logo: "https://via.placeholder.com/200x100?text=CNCF",
  // },
  {
    name: "Coming Soon",
    type: "Community Partner",
    icon: Users,
    logo: "https://via.placeholder.com/200x100?text=Soon",
  },
];

export default function CommunityPartners() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#050816] py-32"
    >

      {/* BACKGROUND GRID + GLOW */}
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

        {/* floating dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#A45AFA]/40 animate-pulse"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            COMMUNITY PARTNERS
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            Built by
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Communities
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            A strong ecosystem of developer communities, student groups,
            and open-source organizations powering innovation together.
          </p>
        </div>

        {/* COMMUNITY GRID */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {communityPartners.map((partner) => {
            const Icon = partner.icon;

            return (
              <div
                key={partner.name}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#A45AFA]/30"
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#A45AFA]/15 blur-3xl" />
                </div>

                {/* icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-[#A45AFA]" />
                  <span className="text-xs tracking-widest text-slate-400">
                    {partner.type}
                  </span>
                </div>

                {/* logo */}
                <div className="relative z-10 mt-8 flex h-24 items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>

                {/* name */}
                <div className="relative z-10 mt-6 text-center">
                  <h3 className="font-semibold text-white">
                    {partner.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}