import "../globals.css";
import "./raspina.css";

export const metadata = {
  title: "گسترش تجارت راسپینا | خرید و فروش فولاد و زلامید",
  description:
    "انواع مقاطع فولادی، میلگرد آلیاژی و پلیمر زلامید در سراسر ایران",
};

export default function RaspinaLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
