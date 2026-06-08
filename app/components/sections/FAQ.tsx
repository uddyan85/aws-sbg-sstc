'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Who can attend?',
    answer:
      'Students, professionals, and anyone interested in cloud computing can attend.',
  },
  {
    question: 'Do I need a laptop?',
    answer:
      'Not mandatory, but recommended for hands-on workshops.',
  },
  {
    question: 'Will certificates be provided?',
    answer:
      'Yes, participation certificates will be given to all attendees.',
  },
]

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="relative py-28 bg-[#050816] overflow-hidden text-white">

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

      {/* HEADER */}
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            FAQ
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            Frequently Asked
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            Everything you need to know before joining
          </p>
        </div>

      {/* FAQ LIST */}
      <div className="relative max-w-3xl mx-auto space-y-4 px-4">

        {faqs.map((faq, i) => {
          const isOpen = active === i

          return (
            <motion.div
              key={i}
              layout
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className={`
                relative rounded-2xl border backdrop-blur-xl
                transition-all duration-300 cursor-pointer
                ${isOpen
                  ? 'border-[#A45AFA]/50 bg-white/10 shadow-[0_0_40px_rgba(164,90,250,0.15)]'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
                }
              `}
              onClick={() => setActive(isOpen ? null : i)}
            >
              {/* QUESTION */}
              <div className="flex items-center justify-between p-6">
                <h3
                  className={`text-base md:text-lg font-semibold transition-colors ${
                    isOpen ? 'text-[#A45AFA]' : 'text-white'
                  }`}
                >
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#A45AFA]" />
                </motion.div>
              </div>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* GLOW BORDER EFFECT */}
              {isOpen && (
                <div className="absolute inset-0 rounded-2xl pointer-events-none border border-[#A45AFA]/20" />
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}