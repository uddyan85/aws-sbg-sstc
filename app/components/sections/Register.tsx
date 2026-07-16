"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Ticket, ExternalLink, X, ShieldCheck } from "lucide-react";

// --- Feature Flags ---
const FEATURE_FLAGS = {
  showTimer: true,
  showAllocation: false,
};

// --- Types & Data ---
type TicketTier = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  features: string[];
  buttonText: string;
  glowColor: string;
  ticketsClaimed: number;
  totalTickets: number;
  paymentLink: string;
};

// Top Tiers – now using p-10 and consistent spacing
const topTiers: TicketTier[] = [
  {
    id: "early-bird",
    name: "EARLY BIRD",
    price: 259,
    badge: "Limited Time",
    buttonText: "Secure Early Bird",
    glowColor: "#a45afa",
    ticketsClaimed: 185,
    totalTickets: 200,
    paymentLink:
      "https://meetio.online/events/53dbbc84-29f6-490d-93b3-bf791b893c00/ticket",
    features: [
      "Full Event Access",
      "AWS Expert Sessions",
      "AWS Student Swag Kit",
      "Event Badge",
      "Participation Certificate",
      "Breakfast & Lunch",
      "High Tea Included",
      "Networking Opportunities",
      "Best Available Price",
    ],
  },
  {
    id: "regular",
    name: "REGULAR",
    price: 299,
    buttonText: "Book Standard",
    glowColor: "#a45afa",
    ticketsClaimed: 120,
    totalTickets: 300,
    paymentLink:
      "https://meetio.online/events/53dbbc84-29f6-490d-93b3-bf791b893c00/ticket",
    features: [
      "Full Event Access",
      "AWS Expert Sessions",
      "AWS Student Swag Kit",
      "Event Badge",
      "Participation Certificate",
      "Breakfast & Lunch",
      "High Tea Included",
      "AWS Credits & Giveaway Eligibility",
      "Networking Opportunities",
    ],
  },
];

// VIP Tiers (Golden removed)
const vipTiers: TicketTier[] = [
  {
    id: "premium",
    name: "PREMIUM",
    price: 499,
    buttonText: "Upgrade to Premium",
    glowColor: "#a45afa",
    ticketsClaimed: 85,
    totalTickets: 100,
    paymentLink:
      "https://meetio.online/events/53dbbc84-29f6-490d-93b3-bf791b893c00/ticket",
    features: [
      "Reserved seating area (front)",
      "Exclusive AWS Community T-shirt",
      "Exclusive Professional Networking Group",
      "Post-Event AMA with AWS Experts",
      "Priority Check-In",
      "Full Event Access",
      "AWS Expert Sessions",
      "AWS Student Swag Kit",
      "Event Badge",
      "Participation Certificate",
      "Breakfast & Lunch",
      "High Tea Included",
      "Giveaway & Lucky Draw Eligibility",
    ],
  },
  {
    id: "patron",
    name: "COMMUNITY PATRON",
    price: 3999,
    badge: "Ultimate",
    buttonText: "Become a Patron",
    glowColor: "#a45afa",
    ticketsClaimed: 8,
    totalTickets: 25,
    paymentLink:
      "https://meetio.online/events/53dbbc84-29f6-490d-93b3-bf791b893c00/ticket",
    features: [
      "Full Event Access",
      "VIP Check-In",
      "Includes All PREMIUM Ticket Benefits",
      "VIP Seating Throughout The Event",
      "Recognition During Opening Ceremony",
      "Appreciation Memento",
      "Exclusive Swag Box",
      "Speaker Meet & Greet",
      "Name On Event Website",
      "Name Displayed On Venue Screen",
      "Exclusive Speaker Group Photo",
      "Networking with AWS Heroes, Community Builders",
    ],
  },
];

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 0,
    minutes: 41,
    seconds: 44,
  });

  useEffect(() => {
    const targetDate = new Date("August 29, 2026 08:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8 overflow-hidden rounded-xl border border-white/5 bg-black/40 p-4">
      <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Offer Ends In
      </p>
      <div className="flex justify-center gap-4 text-white">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Mins", value: timeLeft.minutes },
          { label: "Secs", value: timeLeft.seconds },
        ].map((time, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-2xl font-bold tracking-wider tabular-nums">
              {time.value.toString().padStart(2, "0")}
            </span>
            <span className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">
              {time.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- BULLETPROOF PORTAL COMPONENT ---
const AbsolutePortal = ({ children }: { children: React.ReactNode }) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    el.id = "absolute-top-modal-root";
    el.style.position = "fixed";
    el.style.inset = "0";
    el.style.zIndex = "2147483647";
    el.style.pointerEvents = "none";

    document.body.appendChild(el);
    setPortalElement(el);

    return () => {
      if (document.body.contains(el)) {
        document.body.removeChild(el);
      }
    };
  }, []);

  if (!portalElement) return null;
  return createPortal(children, portalElement);
};

export default function Registration() {
  const [selectedTier, setSelectedTier] = useState<TicketTier | null>(null);

  useEffect(() => {
    if (selectedTier) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedTier]);

  return (
    <>
      <section
        id="registration"
        className="relative w-full bg-[#050816] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="text-center mb-24 space-y-6 flex flex-col items-center">
          <motion.div className="mx-auto max-w-5xl text-center">
            <motion.span
              className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] uppercase"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Register
            </motion.span>

            <motion.h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
              Claim Your
              <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
                Cloud Pass
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 mt-6 leading-relaxed"
            >
              Limited seats across all tiers. Secure your spot before allocation
              runs out.
            </motion.p>
          </motion.div>

          {/* Top Tiers – now with p-10, mr-3, mb-12 to match VIP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10">
            {topTiers.map((tier, idx) => {
              const fillPercentage = Math.round(
                (tier.ticketsClaimed / tier.totalTickets) * 100,
              );

              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -12 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col rounded-[32px] border border-purple-500/30 bg-white/[0.03] p-10 transition-[border-color] duration-500 hover:border-purple-500 overflow-hidden"
                >
                  {tier.badge && (
                    <div className="absolute top-6 -right-11 z-20 rotate-45 overflow-hidden">
                      <div
                        className="px-10 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-black shadow-xl border-y border-white/20"
                        style={{
                          background:
                            "linear-gradient(135deg, #FFB84D 0%, #FF9900 50%, #E67E00 100%)",
                        }}
                      >
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  <div className="mb-8 flex items-center justify-between relative z-10">
                    <h3 className="text-xl font-bold tracking-[0.2em] text-purple-400 uppercase">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mr-3">
                      <span className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                        ₹{tier.price}
                      </span>
                    </div>
                  </div>

                  <ul className="mb-12 flex-1 space-y-4 text-sm text-slate-300 relative z-10">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 "
                          style={{ color: tier.glowColor }}
                        />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto relative z-10">
                    {FEATURE_FLAGS.showTimer && tier.id === "early bird" && (
                      <Countdown />
                    )}

                    {FEATURE_FLAGS.showAllocation &&
                      tier.id !== "early-bird" && (
                        <div className="mb-6">
                          <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-medium">
                            <span>Allocation</span>
                            <span>{fillPercentage}% Claimed</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${fillPercentage}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.5,
                                delay: 0.5,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full"
                              style={{
                                backgroundColor: tier.glowColor,
                              }}
                            />
                          </div>
                        </div>
                      )}

                    <button
                      onClick={() => setSelectedTier(tier)}
                      className="
    group
    relative
    w-full
    overflow-hidden

    rounded-xl
    py-4

    flex
    items-center
    justify-center
    gap-2

    text-sm
    font-bold
    text-black

    bg-gradient-to-b
    from-[#FFB238]
    via-[#FF9900]
    to-[#CC7000]

    border
    border-[#FFD27A]/20

    backdrop-blur-xl

    shadow-[0_4px_20px_rgba(255,153,0,0.35)]

    transition-all
    duration-500

    hover:scale-[1.03]
    hover:-translate-y-0.5
    hover:shadow-[0_0_25px_rgba(255,153,0,0.7),0_0_50px_rgba(255,153,0,0.45),0_0_100px_rgba(255,153,0,0.25)]

    active:scale-[0.98]
    cursor-pointer
  "
                    >
                      {/* Glass Highlight */}
                      <span
                        className="
      absolute
      inset-0
      rounded-xl
      bg-gradient-to-b
      from-white/30
      via-white/10
      to-transparent
    "
                      />

                      {/* Bloom */}
                      <span
                        className="
      absolute
      -inset-4
      rounded-xl
      bg-[#FF9900]/40
      blur-2xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:scale-125
    "
                      />

                      {/* Shine */}
                      <span
                        className="
      absolute
      -left-20
      top-0
      h-full
      w-12
      rotate-12
      bg-white/40
      blur-sm
      transition-all
      duration-700
      group-hover:left-[120%]
    "
                      />

                      {/* Button Text */}
                      <span className="relative z-10">{tier.buttonText}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* VIP Tiers – unchanged */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vipTiers.map((tier, idx) => {
              const fillPercentage = Math.round(
                (tier.ticketsClaimed / tier.totalTickets) * 100,
              );
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -12 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: 0.4 + idx * 0.15,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col rounded-[32px] border border-purple-500/30 bg-white/[0.03] p-10 transition-[border-color] duration-500 hover:border-purple-500 overflow-hidden"
                >
                  {tier.badge && (
                    <div className="absolute top-6 -right-11 z-20 rotate-45 overflow-hidden">
                      <div
                        className="px-10 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-black shadow-xl border-y border-white/20"
                        style={{
                          background:
                            "linear-gradient(135deg, #FFB84D 0%, #FF9900 50%, #E67E00 100%)",
                        }}
                      >
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  <div className="mb-8 flex items-center justify-between relative z-10">
                    <h3 className="text-xl font-bold tracking-[0.2em] text-purple-400 uppercase">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mr-3">
                      <span className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                        ₹{tier.price}
                      </span>
                    </div>
                  </div>

                  <ul className="mb-12 flex-1 space-y-4 text-sm text-slate-400 relative z-10">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0"
                          style={{ color: tier.glowColor }}
                        />
                        <span className="leading-snug text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto relative z-10">
                    {FEATURE_FLAGS.showAllocation && (
                      <div className="mb-6">
                        <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-medium">
                          <span>VIP Allocation</span>
                          <span>{fillPercentage}% Claimed</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${fillPercentage}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: 0.5,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: tier.glowColor,
                            }}
                          />
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedTier(tier)}
                      className="
    group
    relative
    w-full
    overflow-hidden

    rounded-xl
    py-4

    flex
    items-center
    justify-center
    gap-2

    text-sm
    font-bold
    text-black

    bg-gradient-to-b
    from-[#FFB238]
    via-[#FF9900]
    to-[#CC7000]

    border
    border-[#FFD27A]/20

    backdrop-blur-xl

    shadow-[0_4px_20px_rgba(255,153,0,0.35)]

    transition-all
    duration-500

    hover:scale-[1.03]
    hover:-translate-y-0.5
    hover:shadow-[0_0_25px_rgba(255,153,0,0.7),0_0_50px_rgba(255,153,0,0.45),0_0_100px_rgba(255,153,0,0.25)]

    active:scale-[0.98]
    cursor-pointer
  "
                    >
                      {/* Glass Highlight */}
                      <span
                        className="
      absolute
      inset-0
      rounded-xl
      bg-gradient-to-b
      from-white/30
      via-white/10
      to-transparent
    "
                      />

                      {/* Bloom */}
                      <span
                        className="
      absolute
      -inset-4
      rounded-xl
      bg-[#FF9900]/40
      blur-2xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:scale-125
    "
                      />

                      {/* Shine */}
                      <span
                        className="
      absolute
      -left-20
      top-0
      h-full
      w-12
      rotate-12
      bg-white/40
      blur-sm
      transition-all
      duration-700
      group-hover:left-[120%]
    "
                      />

                      {/* Button Text */}
                      <span className="relative z-10">{tier.buttonText}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal – updated per requirements */}
      <AbsolutePortal>
        <AnimatePresence>
          {selectedTier && (
            <motion.div
              key="modal-root"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ pointerEvents: "auto" }}
              className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
            >
              <div
                onClick={() => setSelectedTier(null)}
                className="absolute inset-0 bg-black/80 cursor-pointer"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                // Responsive sizing: larger max-width, better height for laptop/tablet
                className="relative w-full max-w-5xl h-[90vh] max-h-[900px] flex flex-col overflow-hidden rounded-[32px] border border-purple-900/50 bg-[#050816] shadow-2xl"
              >
                {/* Header */}
                <div
                  className="relative flex flex-col overflow-hidden rounded-t-[32px] border-b"
                  style={{
                    background: `linear-gradient(135deg, ${selectedTier.glowColor}cc 0%, ${selectedTier.glowColor}33 100%), #050816`,
                    borderBottomColor: `${selectedTier.glowColor}60`,
                  }}
                >
                  <div className="relative z-10 px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
                    {/* Left: only "Register · AWS SCD Bhilai2026" + "Secure Link" badge */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-900">
                        <ShieldCheck
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          style={{ color: selectedTier.glowColor }}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <h2 className="text-base sm:text-xl font-black text-white tracking-wide whitespace-nowrap">
                          Register · AWS SCD Bhilai 2026
                        </h2>
                        <span
                          className="
    inline-flex w-fit items-center gap-1.5
    rounded-xl
    border border-white/10
    bg-slate-800/80
    px-3 py-1
    text-[10px] sm:text-xs
    font-semibold uppercase tracking-wider
    text-slate-300
    whitespace-nowrap
  "
                        >
                          <span
                            className="h-2 w-2 rounded-full animate-pulse"
                            style={{ backgroundColor: selectedTier.glowColor }}
                          />
                          Secure Link
                        </span>
                      </div>
                    </div>

                    {/* Right: "Open in new tab" + close button */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <a
                        href={selectedTier.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                      >
                        Open in new tab
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>

                      <button
                        onClick={() => setSelectedTier(null)}
                        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-slate-400 transition-colors hover:bg-red-500/20 hover:text-red-400 cursor-pointer"
                      >
                        <X className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile helper link */}
                <div className="sm:hidden flex items-center justify-center py-2 bg-slate-950 border-b border-white/5">
                  <a
                    href={selectedTier.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white"
                  >
                    Having trouble viewing? Open in new tab
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Iframe */}
                <div className="flex-1 w-full relative bg-[#050816]">
                  <iframe
                    src={selectedTier.paymentLink}
                    className="absolute inset-0 w-full h-full border-0"
                    title={`Checkout for ${selectedTier.name}`}
                    allow="payment"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AbsolutePortal>
    </>
  );
}
