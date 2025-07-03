"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";
    if (!form.time) newErrors.time = "Time is required";
    if (!form.agree) newErrors.agree = "You must agree";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full border p-3 rounded"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            className="w-full border p-3 rounded"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <input
            className="w-full border p-3 rounded"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <textarea
            className="w-full border p-3 rounded"
            placeholder="What brings you here?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <input
            className="w-full border p-3 rounded"
            placeholder="Preferred time to reach you"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          />
          {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            />
            I agree to be contacted
          </label>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
