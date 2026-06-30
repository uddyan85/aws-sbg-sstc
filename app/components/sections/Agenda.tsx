"use client";

import { useState, useEffect } from "react";
import {
    CalendarDays,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── STATS DATA ────────────────────────────────────────────────────────────────
const statsData = [
    { value: 9, label: "Hours",  suffix: "+" },
    { value: 12, label: "Sessions", suffix: "+" },
    { value: 8, label: "Speakers", suffix: "+" },
    { value: 400, label: "Builders", suffix: "+" },
];

// ─── STAT CARD ────────────────────────────────────────────────────────────────
const StatCard = ({
    value,
    label,
    suffix,
    index,
}: {
    value: number;
    label: string;
    suffix: string;
    index: number;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const stepValue = value / steps;
        const stepTime = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.7 }}
            whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            className="group relative rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl overflow-hidden hover:border-[#A45AFA]/30 transition-all duration-500"
        >
            {/* Hover glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#A45AFA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[28px]"
                initial={false}
            />

            {/* Value */}
            <motion.div
                className="bg-gradient-to-r from-[#A45AFA] to-white bg-clip-text text-5xl font-black text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6, type: "spring" }}
            >
                {count}
                {suffix}
            </motion.div>

            {/* Label */}
            <div className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400 font-medium">
                {label}
            </div>

            {/* Animated border glow */}
            <motion.div
                className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#A45AFA] to-transparent group-hover:w-3/4 transition-all duration-700 -translate-x-1/2"
            />
        </motion.div>
    );
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Agenda() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section
            id="agenda"
            className="relative min-h-screen overflow-hidden bg-[#050816] py-15 md:py-20"
        >

            {/* ─── CONTENT ────────────────────────────────────────────────── */}
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* ─── HEADER ────────────────────────────────────────────────── */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm tracking-[0.3em] text-[#DDBEFF] backdrop-blur-sm"
                    >
                        <CalendarDays size={16} />
                        EVENT AGENDA
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="mt-8 text-6xl md:text-8xl font-black text-white leading-[1.1]"
                    >
                        Command
                        <span className="block bg-gradient-to-r from-[#A45AFA] via-white to-[#A45AFA] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Timeline
                        </span>
                    </motion.h2>
                </div>

                {/* ─── COMING SOON CARD ────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                    className="relative mt-12"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Animated border glow */}
                    <motion.div
                        className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-[#A45AFA]/0 via-[#A45AFA]/60 to-[#A45AFA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            backgroundSize: "200% 100%",
                        }}
                    />

                    <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-12 sm:px-14 sm:py-16 text-center backdrop-blur-2xl shadow-[0_0_80px_rgba(164,90,250,0.12)] overflow-hidden">
                        {/* Inner glow */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#A45AFA]/5 via-transparent to-transparent"
                            animate={{
                                opacity: isHovering ? 0.6 : 0.3,
                            }}
                            transition={{ duration: 0.6 }}
                        />

                        {/* Title */}
                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-wide"
                            animate={{
                                scale: isHovering ? 1.02 : 1,
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            COMING SOON
                        </motion.h1>

                        {/* Divider */}
                        <motion.div
                            className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-[#A45AFA] to-transparent"
                            animate={{
                                width: isHovering ? 200 : 128,
                            }}
                            transition={{ duration: 0.6 }}
                        />

                        {/* Description */}
                        <motion.p
                            className="mt-6 text-sm text-slate-300 max-w-md mx-auto"
                            animate={{
                                opacity: isHovering ? 0.9 : 0.7,
                            }}
                        >
                            The agenda is being finalized.
                            <br />
                            <span className="text-slate-400">
                                Stay tuned for updates.
                            </span>
                        </motion.p>

                        {/* Pulse ring */}
                        <motion.div
                            className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#A45AFA]/5 blur-3xl"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </motion.div>

                {/* ─── STATS ──────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {statsData.map((stat, idx) => (
                        <StatCard
                            key={stat.label}
                            {...stat}
                            index={idx}
                        />
                    ))}
                </motion.div>

                {/* ─── BOTTOM DECORATIVE LINE ──────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-[#A45AFA]/30 to-transparent"
                />
            </div>
        </section>
    );
}