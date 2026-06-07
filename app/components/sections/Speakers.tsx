"use client";

import { Mic, Sparkles } from "lucide-react";

export default function Speakers() {
  return (
    <section
      id="speakers"
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
            SPEAKERS
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            Industry
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Experts
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            Learn directly from AWS Community Leaders, Builders,
            Cloud Architects, AI Experts and Industry Professionals.
          </p>
        </div>

        {/* SPEAKER REVEAL */}

        <div className="relative mt-24 overflow-hidden rounded-[40px] border border-[#A45AFA]/20 bg-white/[0.03] backdrop-blur-xl">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#A45AFA]/15 blur-[150px]" />

          <div className="relative z-10 px-8 py-20 md:px-20">
            <div className="flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10">
                <Mic className="h-10 w-10 text-[#A45AFA]" />
              </div>
            </div>

            <h3 className="mt-10 text-center text-4xl md:text-6xl font-black text-white">
              Speaker Lineup
              <span className="block text-[#A45AFA]">
                Revealing Soon
              </span>
            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-slate-400">
              We are bringing together AWS Community Builders,
              User Group Leaders, Solution Architects, AI Specialists,
              Startup Founders and Industry Experts for an unforgettable
              learning experience.
            </p>

            {/* SPEAKER PLACEHOLDERS */}

            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[].map((item) => (
                <div
                  key={item}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#A45AFA]/30
                  "
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#A45AFA]/15 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="mx-auto h-28 w-28 rounded-full border border-[#A45AFA]/20 bg-gradient-to-b from-[#A45AFA]/10 to-transparent" />

                    <div className="mt-8 h-4 rounded bg-white/10" />

                    <div className="mt-4 h-3 w-24 mx-auto rounded bg-[#A45AFA]/20" />

                    <div className="mt-6 flex justify-center">
                      <Sparkles className="h-5 w-5 text-[#A45AFA]" />
                    </div>

                    <p className="mt-4 text-center text-sm uppercase tracking-[0.25em] text-slate-500">
                      Coming Soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}