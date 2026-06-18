"use client";

import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // hide on team page
  const hideLayout = pathname === "/team";

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="min-h-screen">{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}