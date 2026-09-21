"use client";

import React from "react";
import { motion } from "framer-motion";

const agendaData = [
  {
    time: "08:00",
    ampm: "AM",
    dotColor: "bg-yellow-500",
    shadowColor: "shadow-[0_0_10px_rgba(234,179,8,0.8)]",
    title: "Registration, Networking & Breakfast",
    type: "CHECK-IN",
    typeColor: "text-purple-400",
    duration: "60 MIN",
  },
  {
    time: "09:00",
    ampm: "AM",
    dotColor: "bg-green-500",
    shadowColor: "shadow-[0_0_10px_rgba(34,197,94,0.8)]",
    title: "Opening Ceremony",
    type: "CEREMONY",
    typeColor: "text-purple-400",
    duration: "30 MIN",
    subtitle: "Welcome Address & Opening Remarks",
  },
  {
    time: "09:30",
    ampm: "AM",
    dotColor: "bg-blue-500",
    shadowColor: "shadow-[0_0_10px_rgba(59,130,246,0.8)]",
    title: "Praful Bagai",
    type: "OPENING KEYNOTE (Virtual)",
    typeColor: "text-purple-400",
    duration: "30 MIN",
    subtitle: "Head of DevRel – India & South Asia, Amazon Web Services",
  },
  {
    time: "10:00",
    ampm: "AM",
    dotColor: "bg-indigo-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Nikita Mourya",
    type: "Technical Session",
    typeColor: "text-purple-400",
    duration: "45 MIN",
    subtitle: "The Building Blocks of AI Agents with Amazon Bedrock",
  },
  {
    time: "10:45",
    ampm: "AM",
    dotColor: "bg-red-500",
    shadowColor: "shadow-[0_0_10px_rgba(239,68,68,0.8)]",
    title: "Varsha Verma",
    type: "Technical Session",
    typeColor: "text-purple-400",
    duration: "45 MIN",
    subtitle: "SOON TO BE ANNOUNCED",
  },
  {
    time: "11:30",
    ampm: "AM",
    dotColor: "bg-green-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Quiz 1",
    type: "Activity",
    typeColor: "text-purple-400",
    duration: "20 MIN",
    subtitle: "",
  },
  {
    time: "11:50",
    ampm: "AM",
    dotColor: "bg-teal-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Lunch & Networking",
    type: "Break",
    typeColor: "text-purple-400",
    duration: "80 MIN",
    subtitle: "Enjoy lunch while connecting with attendees.",
  },
  {
    time: "01:10",
    ampm: "PM",
    dotColor: "bg-pink-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Deepak Nishad",
    type: "Technical Session",
    typeColor: "text-purple-400",
    duration: "45 MIN",
    subtitle: "Scaling to 90 Million Users with AWS",
  },
  {
    time: "01:55",
    ampm: "PM",
    dotColor: "bg-emerald-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Anmoldeep Singh Arora",
    type: "Technical Session",
    typeColor: "text-purple-400",
    duration: "45 MIN",
    subtitle: "Agile AI with AWS",
  },
  {
    time: "02:40",
    ampm: "PM",
    dotColor: "bg-lime-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Panel Discussion: All Speakers",
    type: "Session",
    typeColor: "text-purple-400",
    duration: "45 MIN",
    subtitle: "",
  },
  {
    time: "03:25",
    ampm: "PM",
    dotColor: "bg-orange-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Quiz 2",
    type: "Activity",
    typeColor: "text-purple-400",
    duration: "20 MIN",
    subtitle: "",
  },
  {
    time: "03:45",
    ampm: "PM",
    dotColor: "bg-indigo-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Sponsor & Community Announcements",
    type: "Announcements",
    typeColor: "text-purple-400",
    duration: "20 MIN",
    subtitle: "",
  },
  {
    time: "04:00",
    ampm: "PM",
    dotColor: "bg-red-500",
    shadowColor: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    title: "Closing Ceremony & Group Photo",
    type: "CEREMONY",
    typeColor: "text-purple-400",
    duration: "30 MIN",
    subtitle: "Vote of thanks, volunteer felicitation and official AWS SCD 2026 group photo",
  },
];

export default function AgendaPage() {
  return (
    <div 
    id="agenda"
    className="relative w-full max-w-4xl mx-auto pt-10 pb-32 px-4 sm:px-6 z-10">
      
      {/* Header */}
      {/* HEADER */}
      <div className="relative mx-auto mb-6 max-w-5xl text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl"
        >
          AGENDA
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white"
        >
          Event
          <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
            Agenda
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-400"
        >
           Explore the sessions, speakers, and experiences planned for AWS Student Community Day Bhilai 2026
        </motion.p>
      </div>

      {/* Agenda List */}
      <div className="flex flex-col">
        {agendaData.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-4 sm:gap-6 items-stretch relative group"
          >
            
            {/* Time Column */}
            <div className="flex flex-col items-end w-14 sm:w-16 pt-4 shrink-0">
              <span className="text-[10px] font-bold text-orange-400 leading-none mb-1">
                {item.ampm}
              </span>
              <span className="text-2xl sm:text-3xl font-bold leading-none tracking-tight font-display text-white">
                {item.time}
              </span>
            </div>

            {/* Timeline Column (Dot & Line) */}
            <div className="relative flex flex-col items-center w-6 shrink-0 pt-5">
              {/* Dot */}
              <div 
                className={`w-3 h-3 rounded-full ${item.dotColor} ${item.shadowColor} z-10 ring-4 ring-[#0a0a0a] transition-transform group-hover:scale-125`} 
              />
              {/* Connecting Line (hidden for the last item) */}
              {index !== agendaData.length - 1 && (
                <div className="absolute top-[32px] bottom-[-24px] w-[2px] bg-gradient-to-b from-white/10 to-white/5" />
              )}
            </div>

            {/* Card Column */}
            <div className="flex-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 mb-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_20px_rgba(164,90,250,0.1)]">
              <h3 className="text-xl font-bold text-white mb-2 sm:text-2xl">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold ${item.typeColor} uppercase tracking-wider`}>
                  {item.type}
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">
                  • {item.duration}
                </span>
              </div>

              {item.subtitle && (
                <p className="text-gray-400 text-sm mt-3 font-inter">
                  {item.subtitle}
                </p>
              )}
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}