"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

interface ImageItem {
  src: string;
  alt?: string;
}

interface Props {
  images: (string | ImageItem)[];
  speed?: number;          // pixels per second
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

export default function ImageMarqueeStrip({
  images,
  speed = 60,
  direction = "left",
  className = "",
  pauseOnHover = true,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const [copies, setCopies] = useState(2); // start with a safe minimum

  // Normalize images once – memoized to avoid recreating on each render
  const normalized = useMemo(
    () => images.map((img) =>
      typeof img === "string" ? { src: img, alt: "Logo" } : img
    ),
    [images]
  );

  // Calculate the minimal number of copies needed to fill the viewport + one extra group
  const updateCopies = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Get width of the first group (the first child of the track)
    const firstGroup = track.children[0] as HTMLElement;
    if (!firstGroup) return;

    const containerWidth = container.clientWidth;
    const groupWidth = firstGroup.offsetWidth;

    // We need enough copies so total width >= containerWidth + groupWidth
    // Add 1 for safety margin
    const needed = Math.ceil((containerWidth + groupWidth) / groupWidth) + 1;
    setCopies(Math.max(needed, 1000)); 
  }, []);

  // Use ResizeObserver for container size changes (more reliable than window.resize)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Observe the container – if it resizes, recalculate copies
    const resizeObserver = new ResizeObserver(() => {
      updateCopies();
    });
    resizeObserver.observe(container);

    // Also recalc on mount
    updateCopies();

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateCopies]);

  // Animation loop – uses modulo for seamless infinite scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let last = performance.now();

    const animate = (time: number) => {
      const delta = (time - last) / 1000;
      last = time;

      if (!paused.current) {
        const totalWidth = track.scrollWidth;
        if (totalWidth > 0) {
          // Move position based on direction and speed
          position += direction === "left" ? speed * delta : -speed * delta;
          // Wrap using modulo to keep in [0, totalWidth)
          position = ((position % totalWidth) + totalWidth) % totalWidth;

          // Use translate3d for GPU acceleration and will-change hint
          const translateX = direction === "left" ? -position : position;
          track.style.transform = `translate3d(${translateX}px, 0, 0)`;
        }
      }

      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [speed, direction]);

  // The Logo group – memoized with useMemo to prevent unnecessary re-renders
  const Logos = useMemo(
    () => (
      <>
        {normalized.map((img, i) => (
          <div
            key={i}
            className="
              flex-shrink-0
              mx-1 sm:mx-5 md:mx-1
              w-[100px] h-[60px]
              sm:w-[140px] sm:h-[90px]
              md:w-[180px] md:h-[100px]
              lg:w-[220px] lg:h-[110px]
              xl:w-[260px] xl:h-[110px]
            "
          >
            <div className="relative w-full h-full rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md overflow-hidden shadow-lg">
              <Image
                src={img.src}
                alt={img.alt ?? ""}
                fill
                className="object-contain p-5 transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 640px) 100px, (max-width: 768px) 140px, (max-width: 1024px) 180px, (max-width: 1280px) 220px, 260px"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </>
    ),
    [normalized]
  );

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden py-2 md:py-2 
        bg-gradient-to-r from-slate-950 via-slate-900 to-black
        ${className}`}
      aria-hidden="true"  // decorative, so screen readers ignore
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
          onMouseEnter={() => {
            if (pauseOnHover) paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
          // Optional: also pause on touch for mobile
          onTouchStart={() => {
            if (pauseOnHover) paused.current = true;
          }}
          onTouchEnd={() => {
            paused.current = false;
          }}
        >
          {Array.from({ length: copies }).map((_, idx) => (
            <div key={idx} className="flex">
              {Logos}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}