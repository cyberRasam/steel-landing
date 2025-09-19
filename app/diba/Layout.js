import "../globals.css";
import "./diba.css";

export const metadata = {
  title: "جهانتاب صنعت دیبا | فولاد آلیاژی و زلامید صنعتی",
  description: "تأمین کننده مستقیم فولاد آلیاژی و پلیمرهای مهندسی",
};

export default function DibaLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
