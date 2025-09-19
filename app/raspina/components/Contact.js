"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setResp(null);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await r.json();
      setResp(data);
      if (r.ok) setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setResp({ success: false, error: "خطا در ارتباط با سرور" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">تماس با ما</h2>

        <form onSubmit={submit} className="grid gap-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            placeholder="نام شما"
            className="p-3 border rounded"
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            type="email"
            placeholder="ایمیل"
            className="p-3 border rounded"
          />
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="تلفن (اختیاری)"
            className="p-3 border rounded"
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows="6"
            placeholder="پیام شما"
            className="p-3 border rounded"
          />
          <button
            disabled={loading}
            className="bg-[var(--raspina-primary)] text-white py-3 rounded"
          >
            {loading ? "در حال ارسال..." : "ارسال پیام"}
          </button>
        </form>

        {resp && (
          <div
            className={`mt-4 p-3 rounded ${
              resp.success
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {resp.success ? resp.message : resp.error || "خطا"}
          </div>
        )}
      </div>
    </section>
  );
}
