import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* ================= AWS + AMAZON STYLE FONT STACK ================= */

// Primary UI font (AWS console feel)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Premium event / hero headings (more modern than Jakarta)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

// Secondary fallback heading font (kept for layering)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// Code / infra / cloud logs style
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AWS Student Community Day Bhilai 2026",
  description:
    "A day of learning, networking, and innovation with AWS technologies in Bhilai, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          ${jakarta.variable}
          ${mono.variable}
          aws-body
        `}
      >
        {/* ================= BACKGROUND ================= */}
        <div className="background-wrapper">
          <div className="background-base" />

          {/* Aurora Orbs */}
          <div className="gradient-layer gradient-1" />
          <div className="gradient-layer gradient-2" />
          <div className="gradient-layer gradient-3" />

          {/* Aurora Waves */}
          <div className="aurora-wave aurora-wave-1" />
          <div className="aurora-wave aurora-wave-2" />

          {/* Glow layers */}
          <div className="center-glow" />
          <div className="top-glow" />
          <div className="extra-glow-left" />
          <div className="extra-glow-right" />

          {/* Interactive light */}
          <div className="light-field" />

          {/* Grid + noise */}
          <div className="grid-overlay" />
          <div className="noise-overlay" />
        </div>

        {/* ================= CONTENT ================= */}
        <Navbar />

        <main className="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
