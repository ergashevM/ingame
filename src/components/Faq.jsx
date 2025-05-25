"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Сколько примерно стоит средний ПК для игр?",
    answer:
      "Средний игровой ПК стоит от 800 до 1500 долларов в зависимости от конфигурации.",
  },
  {
    question: "Нужна ли водяная система охлаждения?",
    answer: "Для обычного геймера достаточно хорошего воздушного охлаждения.",
  },
  {
    question: "Какой процессор выбрать для игр?",
    answer:
      "Лучше всего подойдут Intel i5/i7 или AMD Ryzen 5/7 последних поколений.",
  },
  {
    question: "Сколько оперативной памяти нужно?",
    answer: "Для современных игр желательно минимум 16 ГБ оперативной памяти.",
  },
  {
    question: "Какая видеокарта оптимальна?",
    answer: "RTX 4060 / RX 7600 и выше — отличный выбор для 1080p и 1440p игр.",
  },
  {
    question: "Какой блок питания лучше?",
    answer:
      "Рекомендуется блок питания от 600 Вт с сертификатом 80+ Bronze и выше.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      id="question"
      className="w-full max-w-[1600px] mx-auto bg-[#1A1A1A] font-clashDisplay"
    >
      <div className="w-full max-w-[1350px] mx-auto px-4 py-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Часто задаваемые вопросы
        </h2>
        <div className="w-[134px] h-[2px] bg-pink-600 mx-auto mb-10"></div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-600 pb-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-base md:text-lg font-medium list-disc list-item list-inside">
                  {item.question}
                </p>
                <ChevronDown
                  className={`w-5 h-5 text-pink-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-300 text-sm md:text-base">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
