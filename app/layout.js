import Theme1 from "@/app/raspina/Layout";
import Theme2 from "@/app/diba/Layout";
import "./globals.css";

export const metadata = {
  title: "فروش انواع مقاطع فولادی - شرکت فولاد",
  description:
    "فروش میلگرد CK45, MO40, ST52، فولاد SPK، ورق سیاه ST37 و فولاد آلیاژی",
  keywords:
    "فروش انواع مقاطع فولادی, میلگرد فولاد CK45, MO40, ST52, فولاد SPK, ورق سیاه ST37",
};

export default function RootLayout({ children }) {
  const domain = typeof window !== "undefined" ? window.location.hostname : "";
  const Theme = domain.includes("domain1.com") ? Theme1 : Theme2;

  return (
    <html lang="fa" dir="rtl">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
