"use client";

import { motion } from "framer-motion";
import { Users, Mic, LayoutGrid, Ticket } from "lucide-react";

const stats = [
  { value: "300+", label: "Students", icon: Users, gradient: "from-[#FF9900]/20 to-[#FF9900]/5" },
  { value: "15+", label: "Speakers", icon: Mic, gradient: "from-[#3B82F6]/20 to-[#3B82F6]/5" },
  { value: "4", label: "Tracks", icon: LayoutGrid, gradient: "from-[#10B981]/20 to-[#10B981]/5" },
  { value: "Free", label: "Registration", icon: Ticket, gradient: "from-[#F59E0B]/20 to-[#F59E0B]/5" },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className={`relative group rounded-xl bg-gradient-to-br ${stat.gradient} border border-white/10 p-4 text-center transition-all duration-300 hover:border-[#FF9900]/30 hover:shadow-lg hover:shadow-[#FF9900]/5`}
        >
          <stat.icon className="w-5 h-5 text-[#FF9900] mx-auto mb-2 opacity-70 group-hover:opacity-100 transition-opacity" />
          <strong className="block text-xl font-bold text-white">{stat.value}</strong>
          <span className="text-xs text-gray-400">{stat.label}</span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF9900]/0 via-[#FF9900]/5 to-[#FF9900]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  );
}