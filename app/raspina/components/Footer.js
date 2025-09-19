export default function Footer() {
  return (
    <footer className="bg-[var(--raspina-primary)] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="font-bold">گسترش تجارت راسپینا</h4>
        <p className="text-sm mt-2">
          فروش انواع مقاطع فولادی - تماس: ۰۹۱۲-XXX-XXXX - ایمیل:
          contact@raspina.example
        </p>
        <p className="text-xs mt-3 opacity-80">
          © {new Date().getFullYear()} تمام حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
