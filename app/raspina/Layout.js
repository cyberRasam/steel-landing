import "../globals.css";

export const metadata = {
  title: "گسترش تجارت راسپینا | فروش انواع فولاد آلیاژی",
  description:
    "خرید و فروش فولاد آلیاژی و پلیمرهای مهندسی با بهترین قیمت. فروش میلگرد CK45, MO40, ST52، ورق سیاه ST37 و فولاد SPK.",
  keywords:
    "فروش فولاد, گسترش تجارت راسپینا, میلگرد CK45, فولاد SPK, ورق سیاه ST37",
};

export default function RaspinaLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
