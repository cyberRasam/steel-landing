export default function Zalamid() {
  return (
    <section className="bg-gradient-to-r from-[var(--diba-accent)]/10 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--diba-primary)] mb-4 text-center">
          زلامید — نایلون صنعتی
        </h2>
        <p className="leading-8 text-justify mb-4">
          زلامید (Zlamyd) یک پلی‌آمید روغنی است که برای قطعاتی طراحی شده که
          امکان روغن‌کاری ندارند. با توزیع همگن روغن روان‌کننده در ماتریس پلیمر،
          قطعات ساخته شده با زلامید دارای...
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold mb-2">خواص مکانیکی</h4>
            <ul className="list-disc pr-4 space-y-2 text-sm">
              <li>مقاومت سایشی بسیار بالا</li>
              <li>ضریب اصطکاک پایین</li>
              <li>ثبات ابعادی و مقاومت در برابر رطوبت</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold mb-2">موارد کاربرد</h4>
            <ul className="list-disc pr-4 space-y-2 text-sm">
              <li>چرخ‌دنده‌ها و یاتاقه‌ها</li>
              <li>قطعات ماشین‌آلات و صنایع دریایی</li>
              <li>کاربردهای خودرو و حمل و نقل</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
