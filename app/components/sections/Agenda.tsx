"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Clock,
  MapPin,
  CalendarDays,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// ---------- Data ----------
const agendaData = [
  {
    time: "08:00 AM - 09:00 AM",
    title: "Registration & Networking Breakfast",
    description:
      "Attendee check-in, welcome kit collection, breakfast, and networking with fellow cloud enthusiasts.",
    track: "All",
    location: "Registration Area",
  },
  {
    time: "09:00 AM - 09:20 AM",
    title: "Opening Ceremony",
    description:
      "Welcome note from organizers, sponsor introductions, and event overview.",
    track: "All",
    location: "Main Hall",
  },
  {
    time: "09:20 AM - 10:00 AM",
    title: "Keynote: Building the Future on AWS",
    description:
      "Industry leaders discuss cloud innovation, AI transformation, and the future of AWS technologies.",
    track: "Keynote",
    location: "Main Hall",
  },
  {
    time: "10:00 AM - 10:45 AM",
    title: "Modern Cloud Architecture",
    description:
      "Learn how organizations build resilient, scalable, and secure applications on AWS.",
    track: "Architecture",
    location: "Hall A",
  },
  {
    time: "10:45 AM - 11:00 AM",
    title: "Fun Activity & Audience Engagement",
    description:
      "Fun Activity & Audience Engagement with Builders, speakers, sponsors, and community members.",
    track: "All",
    location: "Networking Lounge",
  },
  {
    time: "11:00 AM - 11:45 AM",
    title: "Generative AI with Amazon Bedrock",
    description:
      "Discover how to build and deploy generative AI applications using Amazon Bedrock and foundation models.",
    track: "AI/ML",
    location: "Hall B",
  },
  {
    time: "11:45 AM - 12:30 PM",
    title: "Serverless at Scale",
    description:
      "Best practices for designing event-driven and serverless applications using AWS services.",
    track: "Serverless",
    location: "Hall A",
  },
  {
    time: "12:30 PM - 01:30 PM",
    title: "Lunch + Networking + Booth Visit",
    description:
      "Enjoy lunch while connecting with attendees, AWS User Groups, and community leaders.",
    track: "All",
    location: "Dining Area",
  },
  {
    time: "01:30 PM - 02:15 PM",
    title: "Containers & Kubernetes on AWS",
    description:
      "Explore Amazon EKS, container orchestration, deployment strategies, and observability.",
    track: "DevOps",
    location: "Hall B",
  },
  {
    time: "02:15 PM - 03:00 PM",
    title: "Cloud Security Best Practices",
    description:
      "Learn how to secure cloud workloads with IAM, GuardDuty, Security Hub, and Zero Trust principles.",
    track: "Security",
    location: "Hall A",
  },
  {
    time: "03:00 PM - 04:00 PM",
    title: "Career Growth & AWS Certifications",
    description:
      "Guidance on certification paths, interview preparation, and building a cloud career.",
    track: "Career",
    location: "Hall B",
  },
  {
    time: "04:00 PM - 04:40 PM",
    title: "Community Success Stories",
    description:
      "Real-world experiences and lessons learned from builders, startups, and AWS community leaders.",
    track: "Community",
    location: "Main Hall",
  },
  {
    time: "04:40 PM - 05:00 PM",
    title: "Closing Ceremony & Group Photo",
    description:
      "Event wrap-up, sponsor acknowledgements, giveaways, certificates, and community photo session.",
    track: "All",
    location: "Main Hall",
  },
];

// Track colour mapping for visual variety (gradient borders)
const trackColors: Record<string, string> = {
  All: "from-purple-500 to-pink-500",
  Keynote: "from-blue-500 to-cyan-400",
  Architecture: "from-indigo-500 to-purple-500",
  "AI/ML": "from-emerald-400 to-teal-500",
  Serverless: "from-orange-400 to-amber-500",
  DevOps: "from-rose-400 to-pink-500",
  Security: "from-red-500 to-orange-400",
  Career: "from-violet-500 to-fuchsia-500",
  Community: "from-cyan-400 to-blue-500",
};

// ---------- Component ----------
export default function Agenda() {
  const allTracks = ["All", ...new Set(agendaData.map((item) => item.track))];
  const [selectedTrack, setSelectedTrack] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredAgenda = agendaData.filter(
    (item) => selectedTrack === "All" || item.track === selectedTrack
  );

  const totalCards = filteredAgenda.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;
      const cardWidth = 320 + 32; // width + gap
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    },
    []
  );

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, currentIndex - 1)
        : Math.min(totalCards - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scroll("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scroll("right");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, totalCards]);

  // Update currentIndex on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = 320 + 32;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== currentIndex && newIndex < totalCards) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex, totalCards]);

  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background – subtle glow and grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-250px] top-[-100px] h-[700px] w-[700px] rounded-full bg-[#A45AFA]/20 blur-[180px]" />
        <div className="absolute right-[-250px] bottom-[-100px] h-[700px] w-[700px] rounded-full bg-[#A45AFA]/15 blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#A45AFA]/5 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(164,90,250,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(164,90,250,.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm tracking-[0.3em] text-[#DDBEFF] backdrop-blur-sm">
            <CalendarDays size={16} />
            EVENT AGENDA
          </div>
          <h2 className="mt-8 text-6xl md:text-8xl font-black text-white">
            Command
            <span className="block bg-gradient-to-r from-[#A45AFA] via-white to-[#A45AFA] bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </div>

        {/* Dynamic Track Filters */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {allTracks.map((track) => {
            const isActive = selectedTrack === track;
            return (
              <button
                key={track}
                onClick={() => {
                  setSelectedTrack(track);
                  setCurrentIndex(0);
                  scrollToIndex(0);
                }}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#A45AFA]/30 border border-[#A45AFA]/60 text-white shadow-[0_0_30px_rgba(164,90,250,0.3)]"
                    : "bg-white/[0.03] border border-white/10 text-slate-400 hover:border-white/30"
                }`}
              >
                {track}
              </button>
            );
          })}
        </div>

        {/* Slider */}
        <div className="relative mt-28">
          {/* Timeline rail with animated flow */}
          <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-gradient-to-r from-[#A45AFA] via-[#A45AFA]/40 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A45AFA] to-transparent animate-[flow_4s_linear_infinite]" />
            <div className="absolute left-0 top-1/2 h-8 w-8 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#A45AFA]/40 blur-xl" />
            <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 -translate-x-1/2 rotate-45 rounded-sm border-2 border-[#A45AFA] bg-[#050816] animate-spin-slow" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 backdrop-blur-xl border border-[#A45AFA]/30 text-white transition-all duration-300 hover:scale-110 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed bg-[#A45AFA]/10"
                : "bg-[#A45AFA]/20 hover:bg-[#A45AFA]/40"
            }`}
            aria-label="Previous"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={currentIndex === totalCards - 1}
            className={`absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 backdrop-blur-xl border border-[#A45AFA]/30 text-white transition-all duration-300 hover:scale-110 ${
              currentIndex === totalCards - 1
                ? "opacity-30 cursor-not-allowed bg-[#A45AFA]/10"
                : "bg-[#A45AFA]/20 hover:bg-[#A45AFA]/40"
            }`}
            aria-label="Next"
          >
            <ArrowRight size={24} />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth pb-8 hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex gap-8 px-12 min-w-max">
              {filteredAgenda.map((item, index) => {
                const colorClass =
                  trackColors[item.track] || trackColors["All"];
                return (
                  <div
                    key={index}
                    className="relative w-80 flex-shrink-0 scroll-ml-4"
                    style={{ scrollSnapAlign: "center" }}
                  >
                    {/* Dot on the timeline */}
                    {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="h-4 w-4 rotate-45 rounded-sm border-2 border-[#A45AFA] bg-[#050816] shadow-[0_0_20px_rgba(164,90,250,0.5)]" />
                    </div> */}

                    {/* Card */}
                    <div
                      className="
                        group
                        relative
                        mt-12
                        overflow-hidden
                        rounded-[32px]
                        bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.02))]
                        backdrop-blur-2xl
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:shadow-[0_0_60px_rgba(164,90,250,0.25)]
                        p-[2px]
                      "
                    >
                      {/* Gradient border */}
                      <div
                        className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${colorClass} opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
                      />
                      <div className="relative rounded-[30px] bg-[#050816] p-6 h-full">
                        {/* Internal soft glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A45AFA]/5 to-transparent pointer-events-none" />

                        {/* Time badge with clock icon */}
                        <div className="flex items-center gap-2 rounded-full border border-[#A45AFA]/20 bg-[#0B1020] px-4 py-2 text-xs font-bold tracking-wider text-[#DDBEFF] w-fit">
                          <Clock size={14} />
                          {item.time}
                        </div>

                        {/* Track badge */}
                        <div className="mt-4 flex items-center gap-3">
                          <Sparkles size={18} className="text-[#A45AFA]" />
                          <span className="rounded-full border border-[#A45AFA]/20 bg-[#A45AFA]/10 px-3 py-1 text-xs text-[#DDBEFF]">
                            {item.track}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-black text-white leading-tight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm text-slate-400 line-clamp-3">
                          {item.description}
                        </p>

                        {/* Location */}
                        <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
                          <MapPin size={15} />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {filteredAgenda.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollToIndex(idx);
                }}
                className={`transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 h-2 bg-[#A45AFA] rounded-full"
                    : "w-2 h-2 rounded-full bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-28 grid gap-6 md:grid-cols-4">
          {[
            { value: "9+", label: "Hours" },
            { value: "12+", label: "Sessions" },
            { value: "9+", label: "Industry Speakers" },
            { value: "400+", label: "Builders" },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-[#A45AFA]/40 hover:shadow-[0_0_40px_rgba(164,90,250,0.1)]"
            >
              <div className="bg-gradient-to-r from-[#A45AFA] to-white bg-clip-text text-5xl font-black text-transparent">
                {item.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles for animations and hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}