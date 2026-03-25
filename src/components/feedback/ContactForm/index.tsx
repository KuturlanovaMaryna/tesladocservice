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
      className="lg:w-[392px] md:w-[312px] bg-white px-4 py-5 rounded-[20px] flex flex-col gap-4 shadow-xl border-[1.5px] border-darkcardbcg"
      >
          <p className="font-montserrat sm:font-semibold md:font-bold sm:text-base md:text-lg text-center text-darktext">Напишите нам</p>
      <input
        name="name"
        required
        placeholder="Ваше Имя*"
        className="border border-inputstrokedefault text-inputstrokedefault lg:px-6 lg:py-3 md:px-5 md:py-2 sm:px-5 sm:py-2  lg:rounded-2xl md:rounded-xl sm:rounded-xl md:text-base sm:text-sm font-light font-manrope"
      />

      <input
        name="phone"
        type="phone"
        required
        placeholder="Номер телефона*"
        className="border border-inputstrokedefault text-inputstrokedefault lg:px-6 lg:py-3 md:px-5 md:py-2 sm:px-5 sm:py-2  lg:rounded-2xl md:rounded-xl sm:rounded-xl md:text-base sm:text-sm font-light font-manrope"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email*"
        className="border border-inputstrokedefault text-inputstrokedefault lg:px-6 lg:py-3 md:px-5 md:py-2 sm:px-5 sm:py-2  lg:rounded-2xl md:rounded-xl sm:rounded-xl md:text-base sm:text-sm font-light font-manrope"
      />

      <textarea
        name="message"
        required
        placeholder="Текст сообщение*"
        className="border border-inputstrokedefault  text-inputstrokedefault lg:px-6 lg:py-3 md:px-5 md:py-2 sm:px-5 sm:py-2  lg:rounded-2xl md:rounded-xl sm:rounded-xl md:text-base sm:text-sm  lg:h-[180px] md:h-[100px] sm:h-[120px] font-light font-manrope"
      />

      <button
        disabled={loading}
        className="bg-red text-white font-bold lg:px-6 lg:py-4 md:px-4 md:py-3 lg:rounded-2xl md:rounded-xl sm:rounded-xl md:h-[54px] sm:h-11"
      >
        {loading ? "Отправка..." : "Задать вопрос"}
      </button>

      {success && <p className="text-green-600 text-center">{success}</p>}
    </form>
  );
}
