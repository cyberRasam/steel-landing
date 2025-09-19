export default function Steel() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--diba-primary)] mb-4 text-center">
          فروش فولاد آلیاژی
        </h2>
        <p className="text-justify leading-8 mb-4">
          عرضه انواع میلگردهای آلیاژی، تسمه‌های فولادی و ورق‌های صنعتی با
          استانداردهای ملی و بین‌المللی. محصولات ما شامل CK45، MO40، ST52،
          VCN150 و ورق ST37 می‌باشد.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-gray-50 rounded shadow">
            <h4 className="font-semibold">CK45 / MO40</h4>
            <p className="text-sm">محصولات نوردی و تراشکاری صنعتی</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <h4 className="font-semibold">ST52 / VCN150</h4>
            <p className="text-sm">مناسب برای سازه و کاربردهای فشارپذیر</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <h4 className="font-semibold">ورق ST37</h4>
            <p className="text-sm">ورق سیاه فولاد مبارکه برای صنایع سنگین</p>
          </div>
        </div>
      </div>
    </section>
  );
}
