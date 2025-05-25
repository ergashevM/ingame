// components/ApplicationForm.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(""); // Xabar matni

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Пожалуйста, введите ваше Ф.И.О.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Пожалуйста, введите номер телефона.";
    } else if (!/^\+?\d{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone =
        "Неверный формат номера телефона. Пример: +998901234567";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitMessage("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    console.log("Отправляемые данные:", formData);

    try {
      // Haqiqiy API chaqiruvi o'rniga simulyatsiya
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitMessage(
        "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время."
      );
      setFormData({ fullName: "", phone: "" });
      setErrors({});
    } catch (error) {
      setSubmitMessage(
        "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз."
      );
      console.error("Ошибка при отправке заявки:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Bu div ApplicationForm komponentining asosiy konteyneri
    // Unga rasmga mos rang va `box-shadow` qo'shamiz
    <div
      className="w-full bg-[#0A0A0A] text-white text-center p-6 rounded-lg" // bg-[#0A0A0A] foni va padding, rounded-lg qo'shildi
      style={{
        boxShadow: "0 0 20px rgba(220, 38, 127, 0.6)", // Yonib turish effekti uchun pushti rangli soya
      }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
        <span className="text-[#E74694]">Оставьте заявку</span> и наш менеджер
        свяжется с Вами
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xl font-medium mb-2 text-left"
          >
            Как зовут?
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-3 bg-white text-black border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#E74694]`}
            placeholder="Ф.И.О."
            required
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xl font-medium mb-2 text-left"
          >
            Номер телефона
          </label>
          <div
            className={`flex items-center w-full bg-white text-black border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md focus-within:ring-2 focus-within:ring-[#E74694]`}
          >
            <span className="p-3 text-gray-500 border-r border-gray-300">
              +998
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-grow p-3 bg-transparent text-black focus:outline-none"
              placeholder="(__) ___ __ __"
              required
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.phone}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#E74694] text-white py-3 rounded-md text-xl font-semibold hover:bg-[#D73684] transition duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </form>

      {submitMessage && (
        <p
          className={`mt-6 text-lg font-medium ${
            submitMessage.includes("успешно")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {submitMessage}
        </p>
      )}

      <div className="mt-8 text-center">
        <p className="text-xl font-medium mb-3">Либо свяжитесь с нами</p>
        <Link
          href="https://t.me/ingameuz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xl font-medium text-white hover:text-[#E74694] transition duration-300"
        >
          {/* Telegram ikonkasi bo'lishi mumkin */}
          <span className="mr-2">в</span>
          <span>Telegram</span>
        </Link>
      </div>
    </div>
  );
};

export default ApplicationForm;
