"use client";

import Link from "next/link";
import {
  MapPin,
  Navigation,
  Train,
  Bus,
  Car,
  Accessibility,
  Building2,
} from "lucide-react";

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-[#050816] py-15"
    >

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            EVENT VENUE
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            Where We
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Meet & Build
            </span>
          </h2>

          {/* <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            Join hundreds of builders, students, developers and AWS community
            members at one of Bhilai's most accessible venues.
          </p> */}
        </div>

        {/* VENUE GRID */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* MAP */}
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl h-[500px]">
            <div className="h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps?q=Shri+Shankaracharya+Medical+College+Auditorium+Bhilai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-[#A45AFA]" />
                <h3 className="text-3xl font-black text-white">
                  Shri Shankaracharya Technical Campus Bhilai
                </h3>
              </div>

              <div className="mt-6 flex gap-3 text-slate-400">
                <MapPin className="mt-1 h-5 w-5 text-[#A45AFA]" />
                <div>
                  <p>Junwani Road</p>
                  <p>Bhilai, Chhattisgarh 490020</p>
                  <p>India</p>
                </div>
              </div>

              <Link
                href="https://www.google.com/maps?q=Shri+Shankaracharya+Medical+College+Auditorium+Bhilai&output=embed"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#A45AFA]/20"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </Link>
            </div>

            {/* TRANSPORT */}
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Train,
                  title: "Railway",
                  desc: "Bhilai Power House & Durg stations nearby",
                },
                {
                  icon: Bus,
                  title: "Bus",
                  desc: "Connected through all major city routes",
                },
                {
                  icon: Car,
                  title: "Parking",
                  desc: "Parking facilities available on-site",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                  >
                    <Icon className="h-6 w-6 text-[#A45AFA]" />

                    <h4 className="mt-4 font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.desc}
                    </p>
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
