'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X, Cloud } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Agenda', href: '#agenda' },
  { name: 'Venue', href: '#venue' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#about')
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const navRefs = useRef<Record<string, HTMLElement | null>>({})
  const ticking = useRef(false)

  const handleClick = (href: string) => {
    const el = document.querySelector(href)
    if (!el) return

    const top = (el as HTMLElement).offsetTop - 80

    window.scrollTo({
      top,
      behavior: 'smooth',
    })

    setActive(href)
    setOpen(false)
  }

  const updateActive = useCallback(() => {
    if (ticking.current) return
    ticking.current = true

    requestAnimationFrame(() => {
      let current = '#about'

      for (const item of navItems) {
        const el = document.querySelector(item.href)
        if (!el) continue

        const rect = el.getBoundingClientRect()

        if (rect.top <= 120 && rect.bottom > 120) {
          current = item.href
          break
        }
      }

      setActive(current)
      ticking.current = false
    })
  }, [])

  const moveIndicator = useCallback(() => {
    const el = navRefs.current[active]
    if (!el) return

    setIndicator({
      left: el.offsetLeft,
      width: el.offsetWidth,
    })
  }, [active])

  useEffect(() => {
    window.addEventListener('scroll', updateActive, {
      passive: true,
    })

    updateActive()

    return () =>
      window.removeEventListener('scroll', updateActive)
  }, [updateActive])

  useEffect(() => {
    moveIndicator()
  }, [active, moveIndicator])

  return (
    <>
     {/* TOP MARQUEE */}
<div className="fixed top-0 left-0 w-full z-[60]">
  <div className="relative overflow-hidden border-b border-white/10 bg-black/40 backdrop-blur-2xl">

    {/* glow background */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#A45AFA]/10 via-transparent to-purple-500/10 animate-pulse" />

    {/* edge fade */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />

    {/* ticker */}
    <div className="group overflow-hidden whitespace-nowrap py-2">

      {/* FIRST LAYER */}
      <div className="flex min-w-max items-center gap-12 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">

        {/* LIVE */}
        <span className="flex items-center gap-2 text-xs text-white/80">
          <span className="relative">
            <span className="relative z-10 rounded-full bg-red-500/15 px-2 py-0.5 text-[14px] font-bold text-red-500 h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse">
               ● LIVE
            </span>
            <span className="absolute inset-0 rounded-full border border-red-400/40 animate-pulse" />
            <span className="absolute inset-0 rounded-full bg-red-500/10 blur-md" />
          </span>

          AWS STUDENT COMMUNITY DAY 2026
        </span>

        {/* EXPERT */}
        <span className="flex items-center gap-2 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse" />
          EXPERT SESSIONS
        </span>

        {/* REGISTER */}
        <span className="flex items-center gap-2 text-xs">
          <span className="relative">
            <span className="relative z-10 rounded-full bg-red-500/15 px-2 py-0.5 text-[14px] font-bold text-red-500 h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse">
              REGISTER NOW
            </span>
            <span className="absolute inset-0 rounded-full border border-red-400/40 animate-pulse" />
            <span className="absolute inset-0 rounded-full bg-red-500/10 blur-md" />
          </span>

          LIMITED SEATS AVAILABLE
        </span>

        {/* PANEL */}
        <span className="flex items-center gap-2 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse" />
          PANEL DISCUSSIONS
        </span>

        {/* HOSTED */}
        <span className="flex items-center gap-2 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse" />
          Hosted by AWS SBG SSTC
        </span>

        {/* DUPLICATE (ONLY ONCE — FOR SEAMLESS LOOP) */}
        <span className="flex items-center gap-2 text-xs text-white/80">
          <span className="relative">
            <span className="relative z-10 rounded-full bg-red-500/15 px-2 py-0.5 text-[14px] font-bold text-red-500 h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse">
               ● LIVE
            </span>
            <span className="absolute inset-0 rounded-full border border-red-400/40 animate-pulse" />
            <span className="absolute inset-0 rounded-full bg-red-500/10 blur-md" />
          </span>

          AWS STUDENT COMMUNITY DAY 2026
        </span>

        <span className="flex items-center gap-2 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse" />
          EXPERT SESSIONS
        </span>

        <span className="flex items-center gap-2 text-xs">
          <span className="relative">
            <span className="relative z-10 rounded-full bg-red-500/15 px-2 py-0.5 text-[14px] font-bold text-red-500 h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse">
              REGISTER NOW
            </span>
            <span className="absolute inset-0 rounded-full border border-red-400/40 animate-pulse" />
            <span className="absolute inset-0 rounded-full bg-red-500/10 blur-md" />
          </span>

          LIMITED SEATS AVAILABLE
        </span>

        <span className="flex items-center gap-2 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse" />
          PANEL DISCUSSIONS
        </span>

      </div>
    </div>

    {/* 🔥 BOTTOM PREMIUM LINE */}
    <div className="absolute bottom-0 left-0 h-[3px] w-full">
      <div className="h-full w-full bg-gradient-to-r from-transparent via-[#A45AFA] to-transparent animate-pulse" />
    </div>

  </div>
</div>


{/* ---------------------------------------------------------------------------- */}
      {/* NAVBAR */}
      <header className="fixed top-[44px] sm:top-[37px] left-1/2 z-50 w-[96%] max-w-6xl -translate-x-1/2">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-3xl px-4 py-4 shadow-[0_10px_50px_rgba(164,90,250,0.20)]">

          {/* Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-0 h-32 w-32 rounded-full bg-[#A45AFA]/20 blur-3xl" />
            <div className="absolute right-10 top-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
          </div>

          {/* LOGO */}
          <Link href="/" className="flex items-center justify-center gap-2 relative z-10">
            <div className="flex h-12 w-12 items-center justify-center">
              <img src="/AWS.png" alt="AWS Image" />
            </div>
            
            <div className="flex h-8 w-8 items-center justify-center">
              <img src="/AWS_SBG.png" alt="AWS SBG Image" />
            </div>

            <div className="leading-tight">
              <h1 className="text-lg font-semibold text-white">
                AWS SBG SSTC
              </h1>
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
              const isActive = active === item.href

              return (
                <button
                  key={item.name}
                  ref={(el) => {
                    navRefs.current[item.href] = el
                  }}
                  onClick={() => handleClick(item.href)}
                  className={`relative z-10 px-3 py-2 text-sm font-medium transition uppercase ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleClick('#register')}
            className="hidden lg:block rounded-lg bg-gradient-to-r from-[#A45AFA] to-purple-700 px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition"
          >
            Register
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
              ? 'max-h-[420px] opacity-100 scale-100'
              : 'max-h-0 opacity-0 scale-95'
          }`}
        >
          <div className="p-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className={`block w-full text-left rounded-lg px-3 py-2 text-sm transition ${
                  active === item.href
                    ? 'bg-[#A45AFA]/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleClick('#register')}
              className="mt-2 w-full rounded-lg bg-gradient-to-r from-[#A45AFA] to-purple-700 py-2 text-sm font-semibold text-white"
            >
              Register Now
            </button>
          </div>
        </div>
      </header>
    </>
  )
}