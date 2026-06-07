"use client";

import { useState } from "react";
import {
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  CalendarDays,
  Sparkles,
} from "lucide-react";

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

export default function Agenda() {
  const [selectedTrack, setSelectedTrack] = useState("All");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const tracks = ["All", "Beginner", "Intermediate", "Career"];

  const filteredAgenda = agendaData.filter(
    (item) =>
      selectedTrack === "All" || item.track === selectedTrack
  );

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-250px] top-[-100px] h-[700px] w-[700px] rounded-full bg-[#A45AFA]/15 blur-[180px]" />
        <div className="absolute right-[-250px] bottom-[-100px] h-[700px] w-[700px] rounded-full bg-[#A45AFA]/10 blur-[200px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(164,90,250,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(164,90,250,.25) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm tracking-[0.3em] text-[#DDBEFF]">
            <CalendarDays size={16} />
            EVENT AGENDA
          </div>

          <h2 className="mt-8 text-6xl md:text-8xl font-black text-white">
            Command
            <span className="block bg-gradient-to-r from-[#A45AFA] via-white to-[#A45AFA] bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-slate-400">
            Premium conference schedule designed as a cloud mission control
            timeline.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setSelectedTrack(track)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                selectedTrack === track
                  ? "bg-[#A45AFA]/20 border border-[#A45AFA]/40 text-white"
                  : "bg-white/[0.03] border border-white/10 text-slate-400"
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mt-28 max-w-6xl mx-auto">
          {/* Rail */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2">
            <div className="relative h-full w-[3px] bg-gradient-to-b from-[#A45AFA] via-[#A45AFA]/40 to-transparent">
              <div className="absolute left-1/2 h-32 w-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-[#A45AFA] to-transparent animate-pulse" />
            </div>
          </div>

          {filteredAgenda.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Connector */}
              <div
                className={`absolute top-16 h-px bg-gradient-to-r from-[#A45AFA] to-transparent ${
                  index % 2 === 0
                    ? "left-6 md:right-1/2 md:left-auto w-20"
                    : "left-6 md:left-1/2 md:right-auto w-20"
                }`}
              />

              {/* Diamond Node */}
              <div className="absolute left-0 md:left-1/2 top-12 md:-translate-x-1/2">
                <div className="absolute inset-0 h-8 w-8 rounded-full bg-[#A45AFA]/40 blur-xl" />

                <div className="relative h-8 w-8 rotate-45 rounded-md border border-[#A45AFA] bg-[#050816]" />
              </div>

              {/* Card */}
              <div
                className="
                group
                relative
                ml-14
                md:ml-0
                w-full
                md:w-[46%]
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]
                p-8
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#A45AFA]/40
                hover:shadow-[0_0_40px_rgba(164,90,250,.15)]
              "
              >
                {/* Accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A45AFA] to-transparent" />

                {/* Time Badge */}
                <div className="absolute right-6 top-6 rounded-full border border-[#A45AFA]/20 bg-[#0B1020] px-4 py-2 text-xs font-bold tracking-wider text-[#DDBEFF]">
                  {item.time}
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles
                    size={18}
                    className="text-[#A45AFA]"
                  />
                  <span className="rounded-full border border-[#A45AFA]/20 bg-[#A45AFA]/10 px-3 py-1 text-xs text-[#DDBEFF]">
                    {item.track}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-slate-500">
                  <MapPin size={15} />
                  {item.location}
                </div>

                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-6 flex items-center gap-2 text-[#A45AFA]"
                >
                  {expandedItems.includes(index) ? (
                    <>
                      View Less
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      View Details
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>

                {expandedItems.includes(index) && (
                  <div className="mt-6 border-t border-white/10 pt-6 text-slate-400">
                    Session materials, speaker profiles,
                    learning objectives, and certification
                    guidance will appear here.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-28 grid gap-6 md:grid-cols-4">
          {[
            { value: "9+", label: "Hours" },
            { value: "12+", label: "Sessions" },
            { value: "9+", label: "Industry Speakers" },
            { value: "400+", label: "Builders" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
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
    </section>
  );
}