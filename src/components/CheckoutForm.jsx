// components/checkout/CheckoutForm.jsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ products, totalPrice, clearCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(""); // Xabar matni
  const [showModal, setShowModal] = useState(false); // Modal oynani ko'rsatish/yashirish holati
  const router = useRouter();

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
    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Номер телефона обязателен.";
    } else if (!/^\+?\d{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone =
        "Неверный формат номера телефона. Пример: +998901234567";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Адрес обязателен.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitMessage("Пожалуйста, заполните все обязательные поля.");
      setShowModal(true); // Xatolik xabarini darhol ko'rsatish
      setTimeout(() => setShowModal(false), 3000); // 3 soniyadan keyin yopish
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(""); // Eski xabarni tozalash

    const orderDetails = {
      customerInfo: formData,
      products: products.map((p) => ({
        id: p.id,
        name_uz: p.name_uz,
        price_uzs: p.price_uzs,
        quantity: p.quantity,
        cartId: p.cartId,
      })),
      totalPrice: totalPrice,
      orderDate: new Date().toISOString(),
    };

    console.log("Детали заказа:", orderDetails);

    try {
      // API chaqiruvi (imitatsiya)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 soniya kutish

      // Muvaffaqiyatli holda:
      setSubmitMessage(
        "Ваш заказ успешно принят! Мы свяжемся с вами в ближайшее время."
      );
      setShowModal(true); // Modal oynani ko'rsatish

      // Modal ko'ringandan so'ng 3 soniyadan keyin savatni tozalash va yo'naltirish
      setTimeout(() => {
        clearCart(); // Savatni tozalash
        setFormData({ name: "", phone: "", address: "", comment: "" }); // Formani tozalash
        setShowModal(false); // Modal oynani yashirish
        router.push("/"); // Asosiy sahifaga yo'naltirish
      }, 3000); // 3 soniyadan keyin modal yopiladi va yo'naltiriladi
    } catch (error) {
      // Xatolik holda:
      setSubmitMessage(
        "Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз."
      );
      console.error("Ошибка отправки заказа:", error);
      setShowModal(true); // Xatolik bo'lganda ham modalni ko'rsatish
      setTimeout(() => {
        setShowModal(false);
      }, 5000); // Xatolik xabari biroz uzoqroq turishi mumkin
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-4">
        Информация для заказа
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Имя Фамилия:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border ${
              errors.name ? "border-red-500" : "border-gray-600"
            } rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-[#3A3A3A]`}
            placeholder="Введите ваше имя"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Номер телефона:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`shadow appearance-none border ${
              errors.phone ? "border-red-500" : "border-gray-600"
            } rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-[#3A3A3A]`}
            placeholder="+998 XX XXX XX XX"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Адрес:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className={`shadow appearance-none border ${
              errors.address ? "border-red-500" : "border-gray-600"
            } rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-[#3A3A3A]`}
            placeholder="Адрес доставки"
            required
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-xs italic mt-1">{errors.address}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="comment"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Комментарий (необязательно):
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="3"
            className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-[#3A3A3A]"
            placeholder="Дополнительная информация о заказе"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Оформить заказ"}
          </button>
          {/* submitMessage endi modal ichida ko'rsatiladi */}
        </div>
      </form>

      {/* Modal oyna */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div
            className={`bg-[#2A2A2A] p-8 rounded-lg shadow-xl text-center max-w-sm w-full
                        ${
                          submitMessage.includes("успешно")
                            ? "border-t-4 border-green-500"
                            : "border-t-4 border-red-500"
                        }`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                submitMessage.includes("успешно")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {submitMessage.includes("успешно") ? "Успех!" : "Ошибка!"}
            </h3>
            <p className="text-white text-lg mb-6">{submitMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
