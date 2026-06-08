"use client";

import Link from "next/link";
import {
  Trophy,
  Sparkles,
  Building2,
  ArrowRight,
  Handshake,
  Users,
} from "lucide-react";

const sponsorTiers = [
  {
    title: "Platinum Sponsors",
    icon: Trophy,
    glow: "from-[#A45AFA] to-[#E9D5FF]",
    sponsors: [
      {
        name: "AWS",
        logo: "AWS-logo.png",
      },
    ],
  },
  // {
  // title: "Gold Sponsors",
  // icon: Sparkles,
  // glow: "from-[#A45AFA]/80 to-pink-400",
  // sponsors: [
  // {
  // name: "Coming Soon",
  // logo: "https://via.placeholder.com/220x100?text=Coming+Soon",
  // }
  // ],
  // },
  // {
  // title: "Silver Sponsors",
  // icon: Building2,
  // glow: "from-[#A45AFA]/60 to-slate-300",
  // sponsors: [
  // {
  // name: "Coming Soon",
  // logo: "https://via.placeholder.com/200x80?text=Coming+Soon",
  // }
  // ],
  // },
];

const communityPartners = [
  // {
  //   name: "AWS User Group Bhilai",
  //   type: "AWS Community",
  //   icon: Globe,
  //   logo: "",
  // },
  // {
  //   name: "Cloud Native Community",
  //   type: "CNCF Ecosystem",
  //   icon: Users,
  //   logo: "",
  // },
  {
    name: "Coming Soon",
    type: "Community Partner",
    icon: Users,
    logo: "https://via.placeholder.com/200x100?text=Soon",
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
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
        {/* HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            SPONSORS
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            Powered By
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Amazing Partners
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            Organizations supporting the next generation of cloud builders,
            innovators and future technology leaders.
          </p>
        </div>

        {/* SPONSOR TIERS */}
        <div className="mt-24 space-y-16">
          {sponsorTiers.map((tier) => {
            const Icon = tier.icon;

            return (
              <div key={tier.title}>
                <div className="mb-10 flex items-center justify-center gap-4">
                  <Icon className="h-7 w-7 text-[#A45AFA]" />

                  <h3 className="text-3xl font-black text-white">
                    {tier.title}
                  </h3>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {tier.sponsors.map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#A45AFA]/30"
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#A45AFA]/15 blur-3xl" />
                      </div>

                      <div className="relative z-10 flex h-32 items-center justify-center">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-h-20 w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                      </div>

                      <div className="mt-3 text-center">
                        <h4 className="font-semibold text-white">
                          {sponsor.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>


        {/* COMMUNITY PARTNERS */}

        <div className="mt-20">
          {/* HEADER */}
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
              COMMUNITY PARTNERS
            </span>
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
                    <h3 className="font-semibold text-white">{partner.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 overflow-hidden rounded-[40px] border border-[#A45AFA]/20 bg-white/[0.03] backdrop-blur-xl">
          <div className="relative p-12 md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#A45AFA]/15 blur-[140px]" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#A45AFA]/20 bg-[#A45AFA]/10">
                <Handshake className="h-10 w-10 text-[#A45AFA]" />
              </div>

              <h3 className="mt-8 text-4xl font-black text-white">
                Become a Sponsor
              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
                Connect your brand with hundreds of students, developers,
                builders and future cloud professionals. Showcase your company,
                opportunities and products to a highly engaged technical
                audience.
              </p>

              <Link
                href="#contact"
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#A45AFA]/20"
              >
                Partner With Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
