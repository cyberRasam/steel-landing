// export default function Hero() {
//   return (
//     <section className="bg-[var(--color-primary)] text-white py-20 text-center">
//       <h1 className="text-5xl font-bold">گسترش تجارت راسپینا</h1>
//       <p className="mt-4 text-lg">
//         خرید و فروش فولاد آلیاژی و پلیمرهای مهندسی با بهترین قیمت
//       </p>
//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-28 px-6 text-center relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          گسترش تجارت راسپینا
        </h1>
        <p className="text-lg md:text-xl">
          خرید و فروش فولاد آلیاژی و پلیمرهای مهندسی با بهترین قیمت و کیفیت
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded shadow hover:shadow-lg transition">
          مشاهده محصولات
        </button>
      </div>
      {/* Placeholder image */}
      <img
        src="/placeholder-hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="bg-blue-500 text-white p-8 font-bold">Tailwind Test</div>
      <div className="bg-blue-500 text-red p-8 font-bold text-center">
        TAILWIND WORKS
      </div>
    </section>
  );
}
