"use client";

import Theme1 from "@/app/raspina/Layout";
import Theme2 from "@/app/diba/Layout";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const domain = typeof window !== "undefined" ? window.location.hostname : "";
  const Theme = domain.includes("raspina.shop") ? Theme1 : Theme2;

  useEffect(() => {
    // 🔹 Ping immediately on page load
    fetch("/api/ping")
      .then((res) => console.log("Initial ping:", res.status))
      .catch((err) => console.error("Initial ping error:", err));

    // 🔹 Schedule periodic ping every 14 minutes
    const interval = setInterval(() => {
      fetch("/api/ping")
        .then((res) => console.log("Periodic ping:", res.status))
        .catch((err) => console.error("Periodic ping error:", err));
    }, 14 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
