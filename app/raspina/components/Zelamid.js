// export default function Zalamid() {
//   return (
//     <section className="bg-white py-12 md:py-20 px-6 md:px-0">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-[var(--raspina-primary)] mb-4 text-center">
//           زلامید — خرید، فروش، قیمت و مشخصات
//         </h2>

//         <p className="text-justify leading-8 mb-4">
//           زلامید (Zlamyd) نوعی پلی آمید روغنی اصلاح‌شده است که به دلیل خواص
//           خود-روان‌کنندگی، جذب رطوبت پایین و مقاومت بسیار بالا در برابر سایش، در
//           صنایع سنگین و مکانیک مهندسی کاربرد فراوان دارد. این ماده در واقع یک
//           PA6 اصلاح‌شده همراه با درصد بالایی از روغن روان‌کننده است که توزیع
//           یکنواخت ذرات روغن را در ساختار پلیمر ممکن می‌سازد.
//         </p>

//         <h3 className="font-semibold mt-4 mb-2">ویژگی‌های کلیدی زلامید</h3>
//         <ul className="list-disc pr-6 mb-4 text-justify space-y-2">
//           <li>خاصیت خود روان‌کنندگی بسیار بهتر نسبت به PA6 معمولی</li>
//           <li>
//             مقاومت سایشی حدوداً ۱۰ برابر بالاتر نسبت به پلی آمیدهای معمولی
//           </li>
//           <li>کاهش ضریب اصطکاک تا حدود ۵۰٪</li>
//           <li>مناسب برای قطعاتی که روغن‌کاری مداوم برایشان ممکن نیست</li>
//           <li>افزایش ثبات ابعادی و کاهش جذب رطوبت</li>
//         </ul>

//         <h3 className="font-semibold mt-4 mb-2">کاربردهای متداول</h3>
//         <ul className="list-disc pr-6 mb-4 space-y-2">
//           <li>بوش‌ها و یاتاقان‌های غیرروغنکاری</li>
//           <li>چرخ‌دنده‌ها و قرقره‌ها</li>
//           <li>قطعات ماشین‌آلات و تجهیزات تولید</li>
//           <li>سیستم‌های کابلی خودرو و صنایع دریایی</li>
//         </ul>

//         <p className="text-justify leading-7">
//           زلامید برای قطعات تحت فشار و سرعت پایین که امکان روغن‌کاری خارجی
//           ندارند، طراحی شده است. اگر به دنبال جایگزینی برای برنز، برنج یا برخی
//           آلیاژهای فلزی در قطعات سایشی هستید، زلامید گزینه‌ای کم‌حرفه، سبک و
//           مقرون‌به‌صرفه است.
//         </p>
//       </div>
//     </section>
//   );
// }

export default function Zelamid() {
  return (
    <section className="bg-gray-100 py-16 px-6 rounded-lg mx-4 md:mx-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          زلامید — خرید، فروش و مشخصات
        </h2>

        <img
          src="/placeholder-zlamid.jpg"
          alt="Zalamid"
          className="mx-auto mb-6 rounded shadow-lg w-full max-w-md"
        />

        <p className="text-justify text-gray-700 leading-relaxed mb-4">
          زلامید (Zlamyd) یک پلی آمید روغنی اصلاح‌شده است که خاصیت خود
          روان‌کنندگی، مقاومت در برابر سایش و جذب رطوبت پایین دارد و در صنایع
          مهندسی و مکانیک کاربرد فراوان دارد.
        </p>

        <h3 className="font-semibold mt-4 mb-2">ویژگی‌های کلیدی</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
          <li>خاصیت خود روان‌کنندگی بهتر نسبت به PA6 معمولی</li>
          <li>مقاومت سایشی ۱۰ برابر بالاتر</li>
          <li>کاهش ضریب اصطکاک تا ۵۰٪</li>
          <li>افزایش ثبات ابعادی و کاهش جذب رطوبت</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">کاربردها</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li>بوش‌ها و یاتاقان‌های بدون روغن‌کاری</li>
          <li>چرخ‌دنده‌ها و قرقره‌ها</li>
          <li>قطعات ماشین‌آلات و تجهیزات تولید</li>
          <li>سیستم‌های کابلی خودرو و صنایع دریایی</li>
        </ul>
      </div>
    </section>
  );
}
