'use client'

import Link from "next/link";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Who can attend AWS SCD?',
    answer:
      'The event is open to university students, researchers, and early-career developers who are passionate about exploring cloud computing and building skills in modern cloud technologies.',
  },
  {
    question:'Do I need prior AWS experience?',
    answer:'No. The event is beginner-friendly. Sessions are designed for all levels, including those new to cloud computing.',
  },
  {
    question: 'Is there an age or year restriction?',
    answer: 'There are no strict age limits. The event is open to all college students (any year or branch) and recent graduates within the past year, regardless of institution. ',
  },
  {
    question: 'What should I bring?',
    answer:'Bring your laptop (fully charged), student ID, and lots of enthusiasm. All workshops are hands-on, so having your own machine is essential for participation. ',
  },
  {
    question: 'What will I get as an attendee?',
    answer:'A full day of immersive learning with access to all sessions, along with breakfast, lunch, and refreshments, an official swag kit, and exclusive sponsor giveaways. Beyond the perks, you’ll also have valuable opportunities to connect and network with community leaders, fellow builders, and industry experts. ',
  },
  {
    question: 'Will certificates be provided?',
    answer:'Yes, every attendee will receive a Certificate of Participation, along with a Credly badge that can be showcased on your professional profile.',
  },
  {
    question: 'I want to sponsor or partner with the event. Where should I reach out?',
    answer:'Email "aws.sbg.sstc@gmail.com" to express your interest in sponsorship or partnership, and the team will share the necessary details and next steps with you. ',
  },
]

export default function Faq() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section 
    id="faq"
    className="relative py-20 bg-[#050816] overflow-hidden text-white">

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