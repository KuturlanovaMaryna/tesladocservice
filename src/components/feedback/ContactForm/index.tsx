"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget; 

  setLoading(true);
  setSuccess("");

  const formData = new FormData(form);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    }),
  });

  setLoading(false);

  if (res.ok) {
    setSuccess("Сообщение отправлено!");
    form.reset(); 
  } else {
    alert("Ошибка отправки");
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[392px] bg-white px-4 py-5 rounded-[20px] flex flex-col gap-4 shadow-xl"
      >
          <p className="font-montserrat font-bold text-lg text-center text-darktext">Напишите нам</p>
      <input
        name="name"
        required
        placeholder="Имя*"
        className="border border-inputstrokedefault text-inputstrokedefault px-6 py-4 rounded-2xl text-base font-light font-manrope"
      />

      <input
        name="phone"
        type="phone"
        required
        placeholder="Номер телефона*"
        className="border border-inputstrokedefault  text-inputstrokedefault px-6 py-4 rounded-2xl text-base font-light font-manrope"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email*"
        className="border border-inputstrokedefault  text-inputstrokedefault px-6 py-4 rounded-2xl text-base font-light font-manrope"
      />

      <textarea
        name="message"
        required
        placeholder="Текст сообщение*"
        className="border border-inputstrokedefault  text-inputstrokedefault px-6 py-4 rounded-2xl h-[180px] text-base font-light font-manrope"
      />

      <button
        disabled={loading}
        className="bg-red text-white font-bold px-6 py-4 rounded-2xl h-[54px]"
      >
        {loading ? "Отправка..." : "Задать вопрос"}
      </button>

      {success && <p className="text-green-600 text-center">{success}</p>}
    </form>
  );
}
