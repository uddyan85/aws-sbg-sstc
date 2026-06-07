"use client";

import {
  BrainCircuit,
  Users,
  Rocket,
  Trophy,
  Gift,
  Network,
  Cloud,
  MessageSquare,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Learn",
    icon: BrainCircuit,
    description:
      "Explore Cloud, AI, DevOps, Security, Serverless and modern AWS technologies through expert-led sessions and keynotes.",
  },
  {
    number: "02",
    title: "Connect",
    icon: Users,
    description:
      "Meet AWS Community leaders, builders, professionals and students from across India.",
  },
  {
    number: "03",
    title: "Belong",
    icon: Rocket,
    description:
      "Become part of a thriving ecosystem where learning, mentorship and collaboration continue long after the event.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* ===================== */}
      {/* BACKGROUND */}
      {/* ===================== */}

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

        {/* Floating Particles */}
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
        {/* ===================== */}
        {/* HEADER */}
        {/* ===================== */}

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="absolute left-1/2 top-1/2 h-px w-72 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A45AFA]/60 to-transparent" />

          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            WHAT IS SCD
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            One Day to
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Level Up
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            Student Community Day Bhilai 2026 brings together students,
            builders, AWS Community leaders and industry experts for a full day
            of cloud learning, networking and innovation.
          </p>
        </div>

        {/* ===================== */}
        {/* TIMELINE */}
        {/* ===================== */}

        <div className="relative mt-28 max-w-5xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#A45AFA] via-[#A45AFA]/40 to-transparent" />

          <div className="space-y-16">
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative pl-24"
                >
                  <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 backdrop-blur-xl">
                    <Icon
                      size={24}
                      className="text-[#A45AFA]"
                    />
                  </div>

                  <span className="text-sm font-semibold tracking-[0.35em] text-[#A45AFA]">
                    {item.number}
                  </span>

                  <h3 className="mt-2 text-4xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================== */}
        {/* WHY ATTEND */}
        {/* ===================== */}

        <div className="mt-32">
          <div className="mb-12 text-center">
            <h3 className="text-5xl font-black text-white">
              Why Attend?
            </h3>

            <p className="mt-4 text-slate-400">
              Everything that makes SCD Bhilai worth your day.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-[#A45AFA]/20 bg-white/[0.03] backdrop-blur-xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A45AFA]/10 blur-[120px]" />

            <div className="relative z-10 grid gap-5 p-8 lg:grid-cols-4">
              {/* Featured Block */}

              <div className="group lg:col-span-2 lg:row-span-2 rounded-3xl border border-[#A45AFA]/20 bg-[#A45AFA]/5 p-8">
                <Cloud className="h-10 w-10 text-[#A45AFA]" />

                <h4 className="mt-6 text-4xl font-black text-white">
                  AWS Community
                  <span className="block text-[#A45AFA]">
                    Leaders & Experts
                  </span>
                </h4>

                <p className="mt-5 text-slate-400 leading-relaxed">
                  Learn directly from AWS Community Builders, User Group
                  leaders and experienced cloud professionals sharing practical
                  insights and real-world experiences.
                </p>
              </div>

              <Mini
                icon={BrainCircuit}
                title="Technical Sessions"
              />

              <Mini
                icon={Network}
                title="Networking"
              />

              <Mini
                icon={Gift}
                title="AWS Swag Kit"
              />

              <Mini
                icon={Trophy}
                title="Quiz & Rewards"
              />

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 lg:col-span-2">
                <MessageSquare className="h-7 w-7 text-[#A45AFA]" />

                <h5 className="mt-4 text-lg font-semibold text-white">
                  Community Photo & Builder Network
                </h5>

                <p className="mt-3 text-slate-400">
                  Meet hundreds of builders, students and professionals while
                  creating connections that continue beyond the event.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* STATS */}
        {/* ===================== */}

        <div className="mt-32">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                value: "399+",
                ghost: "499",
                label: "Builders",
              },
              {
                value: "11+",
                ghost: "11",
                label: "Speakers",
              },
              {
                value: "4+",
                ghost: "4",
                label: "Tracks",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="relative inline-block">
                  <span
                    className="
                      absolute
                      inset-0
                      text-8xl
                      font-black
                      text-transparent
                      [-webkit-text-stroke:1px_rgba(164,90,250,.18)]
                    "
                  >
                    {stat.ghost}
                  </span>

                  <span className="relative text-6xl font-black bg-gradient-to-r from-[#A45AFA] to-[#F0E1FF] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>

                <p className="mt-5 text-sm uppercase tracking-[0.4em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({
  icon: Icon,
  title,
}: {
  icon: any;
  title: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#A45AFA]/30">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#A45AFA]/15 blur-2xl" />
      </div>

      <div className="relative z-10">
        <Icon className="h-6 w-6 text-[#A45AFA]" />
        <h5 className="mt-4 font-semibold text-white">{title}</h5>
      </div>
    </div>
  );
}