"use client";

import Link from "next/link";
import {
  MapPin,
  Navigation,
  Train,
  Bus,
  Car,
  Building2,
  ArrowUpRight
} from "lucide-react";

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-[#050816] py-15"
    >
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A45AFA]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            EVENT VENUE
          </span>

          <h2 className="mt-8 text-6xl font-black leading-none tracking-tight text-white md:text-8xl">
            Where We{" "}
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Meet & Build
            </span>
          </h2>
        </div>

        {/* VENUE GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          
          {/* ======================================= */}
          {/* LEFT COLUMN - PREMIUM MAP CARD */}
          {/* ======================================= */}
          <div className="group flex h-full min-h-[600px] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0C10] shadow-2xl transition-all duration-500 hover:border-[#A45AFA]/30 hover:shadow-[0_0_40px_rgba(164,90,250,0.15)]">
            
            <div className="flex-1 w-full min-h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59510.7023299734!2d81.3069307!3d21.2152314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d0fd98b5f0f%3A0xf5808c843a7ce7e2!2sSSTC!5e0!3m2!1sen!2sin!4v1783620776532!5m2!1sen!2sin"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="relative z-10 flex-none bg-[#0B0C10] p-8 sm:p-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A45AFA]">
                <MapPin className="h-4 w-4" />
                Location
              </div>

              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                Shri Shankaracharya Technical Campus
              </h3>

              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  href="https://maps.app.goo.gl/vEpXtcHghvcgarPy7"
                  target="_blank"
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#A45AFA]/50 hover:bg-[#A45AFA]/20"
                >
                  <Navigation className="h-4 w-4 text-[#A45AFA]" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="h-5 w-5 text-[#A45AFA] transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* ======================================= */}
          {/* RIGHT COLUMN */}
          {/* ======================================= */}
          <div className="flex flex-col justify-between space-y-6">
            
            <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all hover:bg-white/[0.04]">
              
              <div className="mb-6 w-full overflow-hidden rounded-2xl h-64 sm:h-72 relative border border-white/5 bg-white/5">
                <img 
                  src="/sstc.jpg" 
                  alt="Campus View" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#A45AFA]/20 bg-[#A45AFA]/10">
                  <Building2 className="h-6 w-6 text-[#A45AFA]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Shri Shankaracharya Technical Campus
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-[#A45AFA]" />
                    <span className="line-clamp-1">
                      Junwani Rd, Bhilai, Chhattisgarh 490020
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================= */}
            {/* TRANSPORT SECTION (Restored Theme & Layout) */}
            {/* ======================================= */}
            <div className="grid h-full gap-4 grid-cols-1 md:grid-cols-3">
              {[
                {
                  icon: Train,
                  title: "Railway",
                  desc: (
                    <>
                      {/* Mobile Specific Text */}
                      <span className="flex flex-col items-start gap-1.5 md:hidden">
                        <span>
                          Durg <span className="font-semibold text-[#A45AFA]">3.7 km</span>
                        </span>
                        <span>
                          Bhilai <span className="font-semibold text-[#A45AFA]">4.7 km</span>
                        </span>
                      </span>
                      {/* Web Specific Text */}
                      <span className="hidden md:block">
                        Bhilai Power House & Durg stations nearby
                      </span>
                    </>
                  ),
                },
                {
                  icon: Bus,
                  title: "Bus",
                  desc: "Well connected via all major city routes",
                },
                {
                  icon: Car,
                  title: "Parking",
                  desc: "Ample parking available on-site",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex flex-col justify-between rounded-[32px] border border-white/10 bg-white/[0.02] p-6 md:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#A45AFA]/30 hover:bg-white/[0.05] hover:shadow-[0_10px_30px_rgba(164,90,250,0.1)] text-left h-auto md:h-full"
                  >
                    <div className="flex flex-row items-center md:flex-col md:items-start gap-5 w-full">
                      
                      {/* Icon container: Restored your exact styling! */}
                      <div className="flex-shrink-0 inline-flex h-16 w-16 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#A45AFA]/10 md:bg-transparent text-[#A45AFA] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#A45AFA]/20 md:group-hover:bg-transparent">
                        <Icon className="h-7 w-7 md:h-8 md:w-8" />
                      </div>

                      {/* Text block */}
                      <div className="flex-1 md:flex-none w-full">
                        <h4 className="text-xl font-bold text-white md:mb-2">
                          {item.title}
                        </h4>
                        <div className="mt-1 md:mt-0 text-sm leading-relaxed text-slate-400">
                          {item.desc}
                        </div>
                      </div>
                    </div>

                    {/* Decorative dash: Retained your design element */}
                    <div className="hidden md:block mt-6 h-1 w-8 rounded-full bg-[#A45AFA]/30 transition-all duration-300 group-hover:w-full group-hover:bg-[#A45AFA]/80" />
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}