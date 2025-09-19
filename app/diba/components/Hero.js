export default function Hero() {
  return (
    <section className="relative">
      <img
        src="./images/hero.png"
        alt="صنعت فولاد"
        className="w-full h-64 md:h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--diba-accent)]">
          جهانتاب صنعت دیبا
        </h1>
        <p className="mt-3 text-lg text-white/90">
          تامین فولاد آلیاژی و پلیمرهای مهندسی برای صنعت
        </p>
      </div>
    </section>
  );
}
