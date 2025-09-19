export default function Footer() {
  return (
    <footer className="bg-[var(--diba-primary)] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="font-bold">جهانتاب صنعت دیبا</h4>
        <p className="text-sm mt-2">
          تلفن: ۰۲۱-XXX-XXXX · ایمیل: info@diba.example
        </p>
        <p className="text-xs mt-3 opacity-80">
          © {new Date().getFullYear()} جهانتاب صنعت دیبا
        </p>
      </div>
    </footer>
  );
}
