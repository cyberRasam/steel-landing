"use client";
import "./globals.css";

import Theme1 from "@/app/raspina/Layout";
import Theme2 from "@/app/diba/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [domain, setDomain] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set domain on client side to avoid hydration mismatch
    if (typeof window !== "undefined") {
      setDomain(window.location.hostname);
      setIsLoading(false);
    }
  }, []);

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

  // Determine which theme to use based on domain
  const getTheme = () => {
    if (domain === "raspina.shop" || domain === "www.raspina.shop") {
      return Theme1;
    }
    return Theme2;
    // Default fallback (you can set this to either Theme1 or Theme2)
  };

  const Theme = getTheme();

  const router = useRouter();

  console.log("Current domain:", domain);
  // Show loading or default theme while determining domain
  if (isLoading) {
    return (
      <html lang="fa" dir="rtl">
        <body>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="fa" dir="rtl">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
