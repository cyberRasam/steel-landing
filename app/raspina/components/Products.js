export default function Products() {
  const items = [
    {
      title: "میلگرد CK45",
      desc: "مناسب برای قطعات ماشین‌سازی و پروفیل‌های ساختاری",
    },
    { title: "میلگرد MO40", desc: "پرکاربرد در ساخت انواع تسمه و پروفیل" },
    { title: "میلگرد ST52", desc: "فشارپذیری بالا، مناسب سازه" },
    {
      title: "ورق سیاه ST37",
      desc: "محصول کارخانه فولاد مبارکه، برش خورده و عمده",
    },
    { title: "فولاد SPK", desc: "آلیاژ مهندسی با خواص ویژه" },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--raspina-primary)] mb-6 text-center">
          فروش انواع مقاطع فولادی
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md"
            >
              <h4 className="font-semibold mb-2">{it.title}</h4>
              <p className="text-sm text-gray-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
