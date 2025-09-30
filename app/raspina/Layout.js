import "../globals.css";
import { Helmet } from "react-helmet";

export const metadata = {
  title: "گسترش تجارت راسپینا | فروش انواع فولاد آلیاژی",
  description:
    "خرید و فروش فولاد آلیاژی و پلیمرهای مهندسی با بهترین قیمت. فروش میلگرد CK45, MO40, ST52، ورق سیاه ST37 و فولاد SPK.",
  keywords:
    "فروش فولاد, گسترش تجارت راسپینا, میلگرد CK45, فولاد SPK, ورق سیاه ST37",
};

export default function RaspinaLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="title" content={metadata.title} />
        <meta name="author" content="گسترش تجارت راسپینا" />
        <title>{metadata.title}</title>
      </Helmet>
      <div className="bg-gray-50 text-gray-800" dir="rtl">
        {children}
      </div>
    </>
  );
}
