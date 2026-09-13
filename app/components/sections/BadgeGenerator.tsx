"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
} from "react";

import html2canvas from "html2canvas-pro";

const MAX_NAME = 40;
const MAX_FILE_MB = 5;
const MIN_SCALE = 1;
const MAX_SCALE = 3;

/* purple system */
const PURPLE = {
  deep: "#0B0417",
  base: "#1A0B2E",
  mid: "#2E1065",
  bright: "#4C1D95",
  accent: "#A855F7",
  glow: "#C084FC",
  soft: "#E9D5FF",
  muted: "#B4A0D6",
  orange: "#F97316",
} as const;

const SHARE_TEXT =
  "I'm attending AWS Student Community Day Bhilai 2026! 🚀 #AWSStudentCommunityDayBhilai";

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface IconProps {
  size?: IconSize | number;
  className?: string;
  title?: string;
}

export interface StrokeIconProps extends IconProps {
  strokeWidth?: number;
}

export interface SolidIconProps extends IconProps {
  opacity?: number;
}

const ICON_SIZES: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 40,
  "2xl": 64,
};

const resolveSize = (size: IconSize | number): number =>
  typeof size === "number" ? size : ICON_SIZES[size];

interface IconBaseProps extends IconProps {
  children: React.ReactNode;
  viewBox?: string;
}

function IconBase({
  size = "md",
  className,
  title,
  viewBox = "0 0 24 24",
  children,
}: IconBaseProps) {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox={viewBox}
      fill="none"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

function StrokeIcon({
  strokeWidth = 1.7,
  children,
  ...rest
}: StrokeIconProps & { children: React.ReactNode }) {
  return (
    <IconBase {...rest}>
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      >
        {children}
      </g>
    </IconBase>
  );
}

function SolidIcon({
  opacity = 1,
  children,
  ...rest
}: SolidIconProps & { children: React.ReactNode }) {
  return (
    <IconBase {...rest}>
      <g fill="currentColor" opacity={opacity}>
        {children}
      </g>
    </IconBase>
  );
}

/* ------------------------------- outline ------------------------------- */

export const CloudIcon = (p: StrokeIconProps) => (
  <StrokeIcon {...p}>
    <path d="M17.4 18.5a4.25 4.25 0 0 0 .35-8.48 5.9 5.9 0 0 0-11.2 1.36A3.98 3.98 0 0 0 7 18.5h10.4Z" />
  </StrokeIcon>
);

export const BoltIcon = (p: StrokeIconProps) => (
  <StrokeIcon {...p}>
    <path d="M13.2 2.5 4.8 13.4h5.9L10 21.5l8.4-10.9h-5.9l.7-8.1Z" />
  </StrokeIcon>
);

export const ServerIcon = (p: StrokeIconProps) => (
  <StrokeIcon {...p}>
    <rect x="3" y="4" width="18" height="6.5" rx="2" />
    <rect x="3" y="13.5" width="18" height="6.5" rx="2" />
    <path d="M7 7.25h.01M7 16.75h.01" />
  </StrokeIcon>
);

export const UsersIcon = (p: StrokeIconProps) => (
  <StrokeIcon {...p}>
    <path d="M15.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path d="M4 19.5a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6" />
  </StrokeIcon>
);

export const LayersIcon = (p: StrokeIconProps) => (
  <StrokeIcon {...p}>
    <path d="m12 3 8.5 4.7L12 12.4 3.5 7.7 12 3Z" />
    <path d="m3.5 12.3 8.5 4.7 8.5-4.7M3.5 16.6l8.5 4.7 8.5-4.7" />
  </StrokeIcon>
);

export const SparkleSolid = (p: SolidIconProps) => (
  <SolidIcon {...p}>
    <path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9L12 2.5Z" />
  </SolidIcon>
);

export const HexagonSolid = (p: SolidIconProps) => (
  <SolidIcon {...p}>
    <path d="M12 2.2l8.6 5v9.6l-8.6 5-8.6-5V7.2l8.6-5Z" />
  </SolidIcon>
);

/* ================================================================== */
/*  BRAND LOGOS                                                       */
/* ================================================================== */

interface BrandLogoProps {
  className?: string;
  height?: number | string;
}

function AwsLogo({
  className = "",
  height = "clamp(100px, 0.4cqw, 30px)",
}: BrandLogoProps) {
  return (
    <img
      src="/scd.png"
      alt="Amazon Web Services"
      draggable={false}
      crossOrigin="anonymous"
      className={`w-auto select-none object-contain ${className}`}
      style={{ height, width: "auto", maxWidth: "100%" }}
    />
  );
}

function SbgLogo({
  className = "",
  height = "clamp(45px, 10.6cqw, 44px)",
}: BrandLogoProps) {
  return (
    <img
      src="/AWS_SBG.png"
      alt="AWS Student Builder Group SSTC Bhilai"
      draggable={false}
      crossOrigin="anonymous"
      className={`w-auto select-none object-contain ${className}`}
      style={{ height, width: "auto", maxWidth: "100%" }}
    />
  );
}

/* ================================================================== */
/*  SMALL UI PIECES                                                   */
/* ================================================================== */

function Spinner() {
  return (
    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Label({
  step,
  children,
}: {
  step: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/15 text-[10px] font-bold text-purple-300">
        {step}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
        {children}
      </span>
    </div>
  );
}

function SheetButton({
  onClick,
  label,
  emoji,
}: {
  onClick: () => void;
  label: string;
  emoji: string;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm font-semibold text-white/85 transition-all hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-purple-500/10"
    >
      <span className="text-lg leading-none">{emoji}</span>
      {label}
    </button>
  );
}

export default function BadgeGenerator() {
  const [fullName, setFullName] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const [dropActive, setDropActive] = useState(false);
  const [busy, setBusy] = useState<null | "download" | "share">(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toast, setToast] = useState<{
    msg: string;
    tone: "ok" | "err";
  } | null>(null);

  const badgeRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragState = useRef<{
    x: number;
    y: number;
    panX: number;
    panY: number;
    halfRange: number;
  } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string, tone: "ok" | "err" = "ok") => {
    setToast({ msg, tone });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    [],
  );

  const resetAdjust = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const readFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) {
        showToast("That file is not an image.", "err");
        return;
      }
      if (file.size > MAX_FILE_MB * 1024 * 1024) {
        showToast(`Image must be under ${MAX_FILE_MB}MB.`, "err");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
        resetAdjust();
        showToast("Photo added");
      };
      reader.readAsDataURL(file);
    },
    [resetAdjust, showToast],
  );

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
    e.target.value = "";
  };

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const item = Array.from(e.clipboardData?.items ?? []).find((i) =>
        i.type.startsWith("image/"),
      );
      const file = item?.getAsFile();
      if (file) readFile(file);
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, [readFile]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!photo) return;
    const w = frameRef.current?.clientWidth ?? 0;
    const h = frameRef.current?.clientHeight ?? 0;
    const halfRangeX = (w * (scale - 1)) / 2;
    const halfRangeY = (h * (scale - 1)) / 2;
    if (halfRangeX <= 0 && halfRangeY <= 0) return;

    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
      halfRange: Math.max(halfRangeX, halfRangeY, 1),
    };
    setDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragState.current;
    if (!d) return;
    setPan({
      x: clamp(d.panX + (e.clientX - d.x) / d.halfRange, -1, 1),
      y: clamp(d.panY + (e.clientY - d.y) / d.halfRange, -1, 1),
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current) return;
    dragState.current = null;
    setDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    const el = frameRef.current;
    if (!el || !photo) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScale((s) =>
        clamp(+(s - e.deltaY * 0.0016).toFixed(3), MIN_SCALE, MAX_SCALE),
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [photo]);

  const imageStyle: CSSProperties = {
    position: "absolute",
    width: `${scale * 100}%`,
    height: `${scale * 100}%`,
    left: `${50 * (scale - 1) * (pan.x - 1)}%`,
    top: `${50 * (scale - 1) * (pan.y - 1)}%`,
    objectFit: "cover",
    maxWidth: "none",
    userSelect: "none",
    pointerEvents: "none",
  };

  const createBadgeBlob = useCallback(async (): Promise<Blob | null> => {
    const node = badgeRef.current;
    if (!node) {
      console.error("[badge] badgeRef is missing");
      return null;
    }

    // Make sure custom fonts (if any) are ready before snapshotting
    if (typeof document !== "undefined" && (document as any).fonts?.ready) {
      try {
        await (document as any).fonts.ready;
      } catch {
        /* ignore */
      }
    }

    // Make sure every <img> inside the badge is fully loaded
    const imgs = Array.from(node.querySelectorAll("img"));
    await Promise.all(
      imgs.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete && img.naturalWidth > 0) return resolve();
            const done = () => resolve();
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
          }),
      ),
    );

    const canvas = await html2canvas(node, {
      scale: 3,
      backgroundColor: null,
      useCORS: true,
      allowTaint: true,
      logging: false,
      imageTimeout: 15000,
      // give html2canvas-pro a couple of passes for stubborn oklch values
      onclone: (doc) => {
        // Force a solid fallback background behind the badge inside the clone
        const cloned = doc.querySelector(
          "[data-badge-root]",
        ) as HTMLElement | null;
        if (cloned) cloned.style.backgroundColor = "transparent";
      },
    });

    if (!canvas.width || !canvas.height) {
      throw new Error("html2canvas produced an empty canvas");
    }

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob((b) => resolve(b), "image/png", 1.0),
    );
    if (!blob) throw new Error("canvas.toBlob returned null");
    return blob;
  }, []);

  const fileName = useMemo(() => {
    const slug =
      fullName
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "attendee";
    return `aws-scd-bhilai-${slug}.png`;
  }, [fullName]);

  const triggerDownload = useCallback((blob: Blob, name: string) => {
    const url = URL.createObjectURL(blob);

    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (typeof navigator !== "undefined" &&
        navigator.platform === "MacIntel" &&
        navigator.maxTouchPoints > 1);

    if (isIOS) {
      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      return;
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();

    // Clean up a bit later so the browser has time to start the download
    setTimeout(() => {
      if (a.parentNode) a.parentNode.removeChild(a);
      URL.revokeObjectURL(url);
    }, 2500);
  }, []);

  const handleDownload = async () => {
    setBusy("download");
    try {
      console.log("[badge] generating PNG…");
      const blob = await createBadgeBlob();
      if (!blob) throw new Error("empty blob");
      console.log("[badge] PNG ready:", blob.size, "bytes");
      triggerDownload(blob, fileName);
      showToast("Badge downloaded");
    } catch (err) {
      console.error("[badge] download failed:", err);
      showToast(
        "Could not generate the badge. Check the console for details.",
        "err",
      );
    } finally {
      setBusy(null);
    }
  };

  const handleShare = async () => {
    setBusy("share");
    try {
      const blob = await createBadgeBlob();
      if (!blob) throw new Error("no blob");
      const file = new File([blob], fileName, { type: "image/png" });

      if (
        typeof navigator !== "undefined" &&
        navigator.canShare?.({ files: [file] })
      ) {
        await navigator.share({
          files: [file],
          title: "AWS SCD Bhilai",
          text: SHARE_TEXT,
        });
        showToast("Shared 🚀");
      } else {
        setSheetOpen(true);
      }
    } catch (err) {
      if ((err as Error)?.name !== "AbortError") setSheetOpen(true);
    } finally {
      setBusy(null);
    }
  };

  const copyImageToClipboard = async (): Promise<boolean> => {
    try {
      const blob = await createBadgeBlob();
      if (!blob) return false;
      const ClipboardItemCtor = (window as any).ClipboardItem;
      if (!navigator.clipboard?.write || !ClipboardItemCtor) return false;
      await navigator.clipboard.write([
        new ClipboardItemCtor({ "image/png": blob }),
      ]);
      return true;
    } catch {
      return false;
    }
  };

  const shareTo = async (network: "x" | "whatsapp" | "linkedin") => {
    const copied = await copyImageToClipboard();
    const text = encodeURIComponent(SHARE_TEXT);
    const urls = {
      x: `https://twitter.com/intent/tweet?text=${text}`,
      whatsapp: `https://wa.me/?text=${text}`,
      linkedin: "https://www.linkedin.com/feed/?shareActive=true",
    } as const;
    window.open(urls[network], "_blank", "noopener,noreferrer");
    setSheetOpen(false);
    showToast(
      copied
        ? "Image copied — just paste it in your post!"
        : "Opened share page — attach your downloaded badge.",
    );
  };

  const handleCopyImage = async () => {
    const ok = await copyImageToClipboard();
    setSheetOpen(false);
    showToast(
      ok ? "Badge copied to clipboard" : "Copy not supported here.",
      ok ? "ok" : "err",
    );
  };

  const handleNativeShareFromSheet = async () => {
    setSheetOpen(false);
    await handleShare();
  };

  const nameForBadge = fullName.trim() || "Your Name";
  const nameIsPlaceholder = !fullName.trim();
  const canReset = scale !== 1 || pan.x !== 0 || pan.y !== 0;

  return (
    <main
      id="BadgeGenerator"
      className="relative min-h-screen overflow-x-hidden bg-[#0B0417] font-sans text-white"
    >
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* header */}
        <header className="mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-6 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl uppercase ">
            Participation Badge
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-white">
            Make your{" "}
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Attendee Badge
            </span>
          </h1>
        </header>

        <div className="grid items-start pt-8 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* ======================= BADGE PREVIEW ======================= */}
          <div className="lg:sticky lg:top-8">
            <div className="mx-auto w-full max-w-md">
              <div
                ref={badgeRef}
                data-badge-root
                style={{ containerType: "inline-size" }}
                className="relative aspect-[3/4] w-full select-none overflow-hidden rounded-[28px] shadow-[0_30px_70px_-20px_rgba(88,28,135,0.9)]"
              >
                {/* Background / Photo Layer */}
                <div
                  ref={frameRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  className={`absolute inset-0 overflow-hidden bg-gradient-to-b from-[#14002E] to-[#2B0B56] ${photo ? (dragging ? "cursor-grabbing" : "cursor-grab") : ""}`}
                  style={{ touchAction: photo ? "none" : "auto" }}
                >
                  {photo ? (
                    <img
                      src={photo}
                      alt=""
                      style={imageStyle}
                      draggable={false}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-purple-200/30">
                      <UsersIcon size="xl" />
                      <span className="text-sm font-semibold uppercase tracking-widest">
                        Your Photo
                      </span>
                    </div>
                  )}
                </div>

                {/* Top Logos */}
                <div
                  className="absolute left-0 right-0 top-0 z-20 flex items-start justify-between"
                  style={{ padding: "clamp(0px, 0.1cqw, 0px)" }}
                >
                  <div
                    className="rounded-xl"
                    style={{
                      padding:
                        "clamp(30px, 1.1cqw, 2px) clamp(15px, 2.2cqw, 1px)",
                    }}
                  >
                    <SbgLogo />
                  </div>
                  <div
                    className="rounded-xl "
                    style={{
                      padding:
                        "clamp(0px, 0.2cqw, 0px) clamp(5px, 1.2cqw, 1px)",
                    }}
                  >
                    <AwsLogo />
                  </div>
                </div>

                {/* Bottom Wave & Text */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[34%]">
                  <svg
                    className="absolute bottom-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="bottomWave"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#32023e" />
                        <stop offset="50%" stopColor="#661896" />
                        <stop offset="100%" stopColor="#cf93f2" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,30 Q50,80 100,0 L100,100 L0,100 Z"
                      fill="url(#bottomWave)"
                    />
                  </svg>

                  <div
                    className="absolute left-0 right-0 z-10 text-center truncate  font-extrabold tracking-[0.15em]"
                    style={{
                      bottom: "70%",
                      fontFamily: "'Chakra Petch', sans-serif",
                      fontSize: "clamp(12px, 4.2cqw, 22px)",
                      lineHeight: 1.4,
                      // WebkitTextStroke: "0.45px rgba(0,0,0,0.9)",
                      letterSpacing: "0.09em",
                      color: "#ffffff",
                      textShadow: `
      0 1px 1px rgba(0,0,0,1),
      0 2px 3px rgba(0,0,0,1),
    `,
                    }}
                    title={nameForBadge}
                  >
                    {nameForBadge}
                  </div>

                  <div
                    className="absolute inset-0 flex h-full flex-col justify-end"
                    style={{ padding: "clamp(10px, 3.6cqw, 24px)" }}
                  >
                    <div className="flex items-end justify-between gap-2">
                      <p
                        className="font-black leading-[1.15] text-white drop-shadow-md"
                        style={{
                          fontSize: "clamp(10px, 3.35cqw, 20px)",
                          maxWidth: "66%",
                        }}
                      >
                        I&apos;m Attending
                        <br />
                        <p className="font-bold !text-[#FF9900] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                          AWS Student Community Day Bhilai 2026
                        </p>
                      </p>

                      <div className="flex flex-col items-end gap-1">
                          <span
                            className="inline-block shrink-0 whitespace-nowrap rounded-full border border-purple-900 bg-white font-bold tracking-[0.14em] text-purple-900 backdrop-blur-sm"
                            style={{
                              fontSize: "clamp(7px, 2.8cqw, 10px)",
                              padding:
                                "clamp(3px, 1.4cqw, 7px) clamp(6px, 2.4cqw, 12px)",
                            }}
                          >
                            SEPTEMBER 26, 2026
                          </span>
                        <span
                          className="whitespace-nowrap font-bold uppercase tracking-[0.15em] !text-black"
                          style={{
                            fontSize: "clamp(7px, 2.8cqw, 7px)",
                            padding:
                              "clamp(3px, 1.4cqw, 7px) clamp(1px, 0.1cqw, 0px)",
                          }}
                        >
                          {/* BHILAI, INDIA */}
                          AWS Student Builder Group 
                          <br/>
                          SSTC, Bhilai
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-4 h-6 w-3/4 rounded-full bg-purple-500/20 blur-2xl" />
            </div>
          </div>

          {/* =========================== FORM =========================== */}
          <section className="rounded-3xl border border-purple-300/15 bg-white/[0.03] p-5 shadow-2xl shadow-purple-900/40 backdrop-blur-xl sm:p-7">
            <div className="mb-7">
              <Label step="1">Full name</Label>
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  maxLength={MAX_NAME}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-purple-300/20 bg-white/[0.05] px-4 py-3 pr-16 text-white placeholder-white/30 outline-none transition focus:border-purple-400/70 focus:ring-2 focus:ring-purple-500/30"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[11px] tabular-nums text-white/30">
                  {fullName.length}/{MAX_NAME}
                </span>
              </div>
            </div>

            <div className="mb-7">
              <Label step="2">Photo upload</Label>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDropActive(true);
                }}
                onDragLeave={() => setDropActive(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDropActive(false);
                  const f = e.dataTransfer.files?.[0];
                  if (f) readFile(f);
                }}
                className={`group relative flex h-36 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition-all sm:h-44 ${dropActive ? "border-purple-400 bg-purple-500/15" : "border-purple-300/20 bg-white/[0.03] hover:border-purple-400/50 hover:bg-purple-500/10"}`}
              >
                {photo ? (
                  <>
                    <img
                      src={photo}
                      alt="Preview"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0B0417]/60 transition group-hover:bg-[#0B0417]/45">
                      <span className="rounded-lg bg-black/60 px-4 py-2 text-sm font-semibold text-white/90">
                        Change photo
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhoto(null);
                        resetAdjust();
                      }}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white/80 transition hover:bg-red-500 hover:text-white cursor-pointer"
                      aria-label="Remove photo"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <>
                    <CloudIcon
                      size="xl"
                      strokeWidth={1.4}
                      className="mb-2 text-purple-300/40"
                    />
                    <span className="text-sm font-medium text-white/60">
                      Drop a photo, paste, or click to upload
                    </span>
                    <span className="mt-1 text-[11px] text-white/30">
                      JPG · PNG · GIF — up to {MAX_FILE_MB}MB
                    </span>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>

              {photo && (
                <div className="mt-4 rounded-xl border border-purple-300/15 bg-purple-500/[0.06] p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-purple-200/60">
                      Zoom
                    </span>
                    <span className="text-[11px] tabular-nums text-white/40">
                      {scale.toFixed(1)}×
                    </span>
                  </div>
                  <input
                    type="range"
                    min={MIN_SCALE}
                    max={MAX_SCALE}
                    step={0.01}
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="mt-2 w-full accent-purple-400"
                  />
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-[11px] text-white/35">
                      Drag the photo to reposition
                    </p>
                    <button
                      type="button"
                      onClick={resetAdjust}
                      disabled={!canReset}
                      className="rounded-lg border border-purple-300/20 px-2.5 py-1 text-[11px] font-semibold text-purple-100/70 transition hover:border-purple-300/50 hover:text-white disabled:opacity-30 cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleDownload}
                disabled={busy !== null}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 px-6 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-purple-700/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-600/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 cursor-pointer"
              >
                {busy === "download" ? (
                  <Spinner />
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                )}
                Download badge
              </button>
              <button
                onClick={handleShare}
                disabled={busy !== null}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-300/25 bg-purple-500/10 px-6 py-4 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 cursor-pointer"
              >
                {busy === "share" ? (
                  <Spinner />
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                )}
                Share badge
              </button>
            </div>
            <p className="mt-4 text-center text-[11px] text-white/30">
              Rendered at 3× resolution ·{" "}
              {photo ? "Badge ready" : "Add a photo to stand out"}
            </p>
          </section>
        </div>
      </div>

      {/* SHARE SHEET */}
      {sheetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#0B0417]/80 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setSheetOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-t-3xl border border-purple-300/20 bg-[#14082A] p-5 shadow-2xl sm:rounded-3xl sm:p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Share your badge</h3>
                <p className="text-xs text-white/40">
                  Pick a destination — we&apos;ll copy the image for you
                </p>
              </div>
              <button
                onClick={() => setSheetOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <SheetButton
                onClick={handleNativeShareFromSheet}
                label="Device share"
                emoji=""
              />
              <SheetButton
                onClick={handleCopyImage}
                label="Copy image"
                emoji=""
              />
              <SheetButton
                onClick={() => shareTo("x")}
                label="Post on X"
                emoji=""
              />
              <SheetButton
                onClick={() => shareTo("whatsapp")}
                label="WhatsApp"
                emoji=""
              />
              <SheetButton
                onClick={() => shareTo("linkedin")}
                label="LinkedIn"
                emoji=""
              />
              <SheetButton
                onClick={async () => {
                  setSheetOpen(false);
                  await handleDownload();
                }}
                label="Download"
                emoji=""
              />
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 px-4">
          <div
            className={`rounded-xl border px-4 py-2.5 text-sm font-medium shadow-2xl backdrop-blur-md ${toast.tone === "ok" ? "border-purple-400/30 bg-[#1A0B2E]/95 text-purple-100" : "border-red-500/30 bg-[#1a0a0a]/95 text-red-300"}`}
          >
            {toast.msg}
          </div>
        </div>
      )}
    </main>
  );
}
