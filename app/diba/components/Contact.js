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

  async function onSubmit(e) {
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
    <section className="bg-white py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-[var(--diba-primary)] mb-4 text-center">
          درخواست قیمت / تماس
        </h3>

        <form onSubmit={onSubmit} className="grid gap-3">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            placeholder="نام و نام خانوادگی"
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
            placeholder="تلفن"
            className="p-3 border rounded"
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows="5"
            placeholder="متن درخواست"
            className="p-3 border rounded"
          />
          <button
            disabled={loading}
            className="bg-[var(--diba-primary)] text-white py-3 rounded"
          >
            {loading ? "در حال ارسال..." : "ارسال درخواست"}
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
