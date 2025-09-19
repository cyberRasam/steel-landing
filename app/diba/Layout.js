import "../globals.css";
import "./diba.css";

export const metadata = {
  title: "جهانتاب صنعت دیبا | خرید و فروش فولاد و پلیمر",
  description:
    "فروش فولاد و پلیمرهای مهندسی با کیفیت بالا، میلگرد MO40، ST52 و ورق سیاه ST37. خدمات سریع و قیمت رقابتی.",
  keywords: "فروش فولاد, جهانتاب صنعت دیبا, میلگرد MO40, ST52, ورق سیاه",
};

export default function DibaLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
