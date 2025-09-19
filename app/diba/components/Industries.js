export default function Industries() {
  const list = [
    "نساجی و ماشین‌آلات سبک",
    "خودرو و سیستم‌های کابلی",
    "کشتی‌سازی و صنایع دریایی",
    "تولید قطعات صنعتی تحت فشار",
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-[var(--diba-primary)] mb-4 text-center">
          صنایع هدف
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {list.map((l, i) => (
            <div key={i} className="p-4 bg-white rounded shadow">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
