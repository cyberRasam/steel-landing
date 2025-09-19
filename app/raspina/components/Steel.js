export default function Steel() {
  return (
    <section className="bg-gray-50 py-12 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--raspina-primary)] mb-4 text-center">
          خرید فولاد آلیاژی
        </h2>
        <p className="text-justify leading-8 mb-4">
          فولاد آلیاژی (Alloy Steel) با افزودن عناصری مانند کروم، نیکل، منگنز،
          سیلیسیوم، مولیبدن و وانادیوم به دست می‌آید تا خواص مکانیکی آن بهبود
          یابد؛ از جمله مقاومت، سختی و چقرمگی. این تغییر خواص فولاد را برای
          کاربردهای صنعتی و مهندسی حساس مناسب می‌سازد.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold mb-2">محصولات قابل عرضه</h3>
            <ul className="list-disc pr-4 space-y-2 text-justify">
              <li>میلگرد CK45, MO40, ST52</li>
              <li>تسمه فولادی MO40</li>
              <li>ورق سیاه ST37 (فولاد مبارکه)</li>
              <li>فولاد SPK و فولاد گرمکار 1.2344</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold mb-2">خدمات و مزایا</h3>
            <ul className="list-disc pr-4 space-y-2 text-justify">
              <li>تحویل سریع و بسته‌بندی مناسب</li>
              <li>قیمت رقابتی در بازار عمده</li>
              <li>قابلیت برش و سفارش اختصاصی</li>
              <li>پشتیبانی فنی در انتخاب متریال مناسب</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
