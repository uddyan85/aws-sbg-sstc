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

          {/* <p className="mx-auto mt-8 max-w-3xl text-slate-400">
            Premium conference schedule designed as a cloud mission control
            timeline.
          </p> */}
        </div>

        {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-[#A45AFA]/20 blur-[180px]" />
      </div>

      {/* SINGLE BLUR BOX */}
      <div className="relative mt-7 z-10">

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-14 py-12 text-center backdrop-blur-2xl shadow-[0_0_60px_rgba(164,90,250,0.15)]">

          <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide">
            COMING SOON
          </h1>

          <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-[#A45AFA] to-transparent" />

          <p className="mt-6 text-sm text-slate-300">
            The agenda is being finalized. Stay tuned for updates.
          </p>

        </div>

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