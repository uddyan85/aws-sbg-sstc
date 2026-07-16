"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Cloud } from "lucide-react";

import { useRouter } from "next/navigation";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Speakers", href: "#speakers" },
  // { name: "Team", href: "/team" },
  { name: "Agenda", href: "#agenda" },
  { name: "Venue", href: "#venue" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const navRefs = useRef<Record<string, HTMLElement | null>>({});
  const ticking = useRef(false);

  const router = useRouter();

  const handleClick = (href: string) => {
    // FULL PAGE ROUTES
    if (href.startsWith("/")) {
      router.push(href);
      setOpen(false);
      return;
    }

    // SECTION SCROLL
    const el = document.querySelector(href);

    if (!el) return;

    const top = (el as HTMLElement).offsetTop - 80;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActive(href);
    setOpen(false);
  };

  const updateActive = useCallback(() => {
    if (ticking.current) return;

    ticking.current = true;

    requestAnimationFrame(() => {
      let current = "#about";

      for (const item of navItems) {
        // Skip pages
        if (!item.href.startsWith("#")) continue;

        const el = document.querySelector(item.href);

        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom > 120) {
          current = item.href;
          break;
        }
      }

      setActive(current);
      ticking.current = false;
    });
  }, []);

  const moveIndicator = useCallback(() => {
    if (!active.startsWith("#")) return;

    const el = navRefs.current[active];

    if (!el) return;

    setIndicator({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [active]);

  useEffect(() => {
    window.addEventListener("scroll", updateActive, {
      passive: true,
    });

    updateActive();

    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  useEffect(() => {
    moveIndicator();
  }, [active, moveIndicator]);

  return (
    <>
      {/* Live MARQUEE */}

      {/* ---------------------------------------------------------------------------- */}
      {/* NAVBAR */}
      <header className="fixed top-[6px] sm:top-[6px] left-1/2 z-50 w-[96%] max-w-6xl -translate-x-1/2">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-3xl px-4 py-4 shadow-[0_10px_50px_rgba(164,90,250,0.20)]">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-0 h-32 w-32 rounded-full bg-[#A45AFA]/20 blur-3xl" />
            <div className="absolute right-10 top-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 relative z-10"
          >
            <div className="flex h-12 w-12 items-center justify-center">
              <img src="/AWS.png" alt="AWS Image" />
            </div>

            <div className="flex h-8 w-8 items-center justify-center">
              <img src="/AWS_SBG.png" alt="AWS SBG Image" />
            </div>

            <div className="leading-tight">
              <h1 className="text-lg font-semibold text-white">AWS SBG SSTC</h1>
              <p className="text-[12px] text-white/50">
                Bhilai
                {/* AWS Community Day */}
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center relative tracking-wide text-sm font-medium">
            <div
              className="absolute top-1/2 -translate-y-1/2 h-8 rounded-lg bg-[#A45AFA]/20 transition-all duration-300"
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
            />

            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <button
                  key={item.name}
                  ref={(el) => {
                    navRefs.current[item.href] = el;
                  }}
                  onClick={() => handleClick(item.href)}
                  className={`relative z-10 px-3 py-2 text-sm font-medium transition uppercase cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white cursor-pointer"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleClick("#registration")}
            className="
    hidden lg:inline-flex
    group
    relative
    items-center
    justify-center
    overflow-hidden

    rounded-xl
    px-6
    py-2

    font-semibold
    text-black

    bg-gradient-to-b
    from-[#FFB238]
    via-[#FF9900]
    to-[#CC7000]

    border border-[#FFD27A]/20
    backdrop-blur-xl

    shadow-[0_4px_20px_rgba(255,153,0,0.35)]

    transition-all
    duration-500

    hover:scale-105
    hover:-translate-y-0.5
    hover:shadow-[0_0_25px_rgba(255,153,0,0.7),0_0_50px_rgba(255,153,0,0.45),0_0_100px_rgba(255,153,0,0.25)]

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

            <span className="relative z-10">Register</span>
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-lg bg-white/10 p-2 text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* MOBILE DROPDOWN */}
        <div
          className={`lg:hidden mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-3xl transition-all duration-300 ${
            open
              ? "max-h-[420px] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="p-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className={`block w-full text-left rounded-lg px-3 py-2 text-sm transition ${
                  active === item.href
                    ? "bg-[#A45AFA]/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleClick("#registration")}
              className="
    group
    relative
    
    flex
    w-full
    items-center
    justify-center
    overflow-hidden

    rounded-xl
    py-2.5

    font-semibold
    text-black

    bg-gradient-to-b
    from-[#FFB238]
    via-[#FF9900]
    to-[#CC7000]

    border border-[#FFD27A]/20
    backdrop-blur-xl

    shadow-[0_4px_20px_rgba(255,153,0,0.35)]

    transition-all
    duration-500

    hover:scale-[1.02]
    hover:-translate-y-0.5
    hover:shadow-[0_0_25px_rgba(255,153,0,0.7),0_0_50px_rgba(255,153,0,0.45),0_0_100px_rgba(255,153,0,0.25)]

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

              <span className="relative z-10">Register Now</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
