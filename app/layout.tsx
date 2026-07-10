import type { Metadata } from "next";

import LayoutWrapper from "./components/layout/LayoutWrapper";

import {
  Inter,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

import AnimatedBackground from "./AnimatedBackground";
import SplashManager from "./components/starter/SplashManager";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AWS Student Community Day Bhilai 2026",
  description:
    "A day of learning, networking, and innovation with AWS technologies in Bhilai, India",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
          min-h-screen flex flex-col
        `}
      >
        <SplashManager>
          {/* ===== Animated Background ===== */}
          <AnimatedBackground />

          {/* ===== CONTENT ===== */}
          <div className="relative z-10 flex-1 flex flex-col">
            <LayoutWrapper>{children}</LayoutWrapper>
          </div>
        </SplashManager>
      </body>
    </html>
  );
}
