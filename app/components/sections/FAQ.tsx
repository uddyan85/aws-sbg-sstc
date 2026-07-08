"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

const faqs = [
  {
    question: "Who can attend AWS SCD?",
    answer:
      "The event is open to university students, researchers, and early-career developers who are passionate about exploring cloud computing and building skills in modern cloud technologies.",
  },
  {
    question: "Do I need prior AWS experience?",
    answer:
      "No. The event is beginner-friendly. Sessions are designed for all levels, including those new to cloud computing.",
  },
  {
    question: "Is there an age or year restriction?",
    answer:
      "There are no strict age limits. The event is open to all college students (any year or branch) and recent graduates within the past year, regardless of institution. ",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop (fully charged), student ID, and lots of enthusiasm. All workshops are hands-on, so having your own machine is essential for participation. ",
  },
  // {
  //   question: "What will I get as an attendee?",
  //   answer:
  //     "A full day of immersive learning with access to all sessions, along with breakfast, lunch, and refreshments, an official swag kit, and exclusive sponsor giveaways. Beyond the perks, you’ll also have valuable opportunities to connect and network with community leaders, fellow builders, and industry experts. ",
  // },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes, every attendee will receive a Certificate of Participation, along with a Credly badge that can be showcased on your professional profile.",
  },
  {
    question:
      "I want to sponsor or partner with the event. Where should I reach out?",
    answer: (
      <>
        Email{" "}
        <a
          href="mailto:aws.sbg.sstc@gmail.com"
          className="text-[#A45AFA] hover:underline font-semibold"
        >
          aws.sbg.sstc@gmail.com{" "}
        </a>{" "}
        to express your interest in sponsorship or partnership, and the team
        will share the necessary details and next steps with you.
      </>
    ),
  },
];

// Staggered entrance for the entire bundle
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// Each chip springs in
const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 22 },
  },
};

export default function Faq() {
  // 👇 Now no FAQ is open on first load
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-15 bg-[#050816] overflow-hidden text-white"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A45AFA] opacity-[0.07] rounded-full blur-3xl" />
      </div>

      {/* HEADER */}
      <div className="relative mx-auto mb-12 max-w-5xl text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl"
        >
          FAQ
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white"
        >
          Frequently Asked
          <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-400"
        >
          Everything you need to know before joining
        </motion.p>
      </div>

      {/* FAQ BUNDLE */}
      <motion.div
        className="relative max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {faqs.map((faq, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                layout
                variants={chipVariants}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className={`
                  relative rounded-2xl backdrop-blur-xl transition-all duration-300
                  ${
                    isOpen
                      ? "w-full bg-white/10 border border-[#A45AFA]/50 shadow-[0_0_40px_rgba(164,90,250,0.15)]"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#A45AFA]/30 hover:shadow-[0_0_20px_rgba(164,90,250,0.08)]"
                  }
                `}
                onClick={() => toggle(i)}
                whileHover={!isOpen ? { scale: 1.04, y: -2 } : {}}
                whileTap={!isOpen ? { scale: 0.96 } : {}}
              >
                {/* CHIP / QUESTION (closed state) */}
                <div
                  className={`flex items-center justify-between p-3 ${isOpen ? "px-6 pt-6" : ""}`}
                >
                  <h3
                    className={`
                      text-sm md:text-base font-semibold transition-colors
                      ${isOpen ? "text-[#A45AFA]" : "text-white"}
                    `}
                  >
                    {faq.question}
                  </h3>

                  {!isOpen && (
                    <ChevronDown className="w-4 h-4 text-[#A45AFA] ml-2 flex-shrink-0 transition-transform" />
                  )}
                  {isOpen && (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      {/* <span className="text-xs text-slate-400 hidden sm:inline">
                        close
                      </span> */}
                      <X className="w-5 h-5 text-[#A45AFA]" />
                    </motion.div>
                  )}
                </div>

                {/* ANSWER (expanded) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 28,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* active glow border (doubles) */}
                {isOpen && (
                  <div className="absolute inset-0 rounded-2xl pointer-events-none border border-[#A45AFA]/20 animate-pulse" />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
