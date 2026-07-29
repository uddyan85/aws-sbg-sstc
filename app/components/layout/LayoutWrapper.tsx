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

  // pages where navbar/footer should be hidden
  const hideLayoutRoutes = ["/team", "/contact", "/code-of-conduct", "/privacy-policy", "/registration",];

  const hideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="min-h-screen">{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}