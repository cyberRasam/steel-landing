import "../globals.css";
import "./diba.css";
import { Helmet } from "react-helmet";

export const metadata = {
  title: "جهانتاب صنعت دیبا | خرید و فروش فولاد و پلیمر",
  description:
    "فروش فولاد و پلیمرهای مهندسی با کیفیت بالا، میلگرد MO40، ST52 و ورق سیاه ST37. خدمات سریع و قیمت رقابتی.",
  keywords: "فروش فولاد, جهانتاب صنعت دیبا, میلگرد MO40, ST52, ورق سیاه",
};

export default function DibaLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="title" content={metadata.title} />
        <meta name="author" content="جهانتاب صنعت دیبا" />
        <title>{metadata.title}</title>
      </Helmet>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
