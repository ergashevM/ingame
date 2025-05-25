"use client";
import React, { useState } from "react";
import Image from "next/image";
import Symbol1 from "@/assets/symbol1.svg";
import Symbol2 from "@/assets/symbol2.svg";
import Symbol3 from "@/assets/symbol3.svg";
import Symbol4 from "@/assets/symbol4.svg";
import Symbol5 from "@/assets/symbol5.svg";
import Symbol6 from "@/assets/symbol6.svg";
import Symbol7 from "@/assets/symbol7.svg";
import Symbol8 from "@/assets/symbol8.svg";
import Symbol9 from "@/assets/symbol9.svg";
import Symbol10 from "@/assets/symbol10.svg";

const ServicePackages = () => {
  const [activeTab, setActiveTab] = useState("custom");
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 py-10 text-white font-sans bg-[#0F0F0F]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Пакеты обслуживания</h2>
        <p className="text-sm text-gray-400 mt-2 max-w-[700px] mx-auto">
          Мы предоставляем своим клиентам оптимальные по цене и набору опций
          сервис-пакеты. Выберите подходящий вам комплекс услуг или обратитесь к
          нам за помощью!
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-6 space-x-6 text-sm font-medium">
          <span
            onClick={() => setActiveTab("standard")}
            className={`cursor-pointer ${
              activeTab === "standard"
                ? "text-[#FF0066] border-b-2 border-[#FF0066]"
                : "text-gray-400"
            }`}
          >
            Стандартное охлаждение
          </span>

          <span
            onClick={() => setActiveTab("custom")}
            className={`cursor-pointer ${
              activeTab === "custom"
                ? "text-[#FF0066] border-b-2 border-[#FF0066]"
                : "text-gray-400"
            }`}
          >
            Кастомное охлаждение
          </span>

          <span
            onClick={() => setActiveTab("extra")}
            className={`cursor-pointer ${
              activeTab === "extra"
                ? "text-[#FF0066] border-b-2 border-[#FF0066]"
                : "text-gray-400"
            }`}
          >
            Дополнительные услуги
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Custom Plus */}
        <div className="bg-[#1E1E1E] p-6 shadow-lg w-[375px] h-[611px] flex flex-col justify-between">
          <div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-base font-semibold mb-4 text-center">
              HYPERPC SERVICE <br /> CUSTOM PLUS
            </h3>
            <p className="font-medium text-sm text-center mb-4">
              Расширенный и наиболее <br /> оптимальный пакет обслуживания
            </p>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex gap-x-2">
                <Image src={Symbol1} alt="icon" />
                Комплексная диагностика
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol2} alt="icon" /> Переустановка ОС
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol3} alt="icon" /> Замена термоинтерфейса
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol4} alt="icon" /> Замена охлаждающей жидкости
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol5} alt="icon" /> Замена термопрокладок
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol6} alt="icon" /> Отчет об обслуживании
              </li>
            </ul>
          </div>
          <div className="text-sm mt-6 border-t border-[#484848] pt-4">
            <label className="flex items-center space-x-2 mb-2">
              <input type="checkbox" className="accent-pink-600" />
              <span>Заказать забор и возврат ПК</span>
            </label>
            <div className="flex items-center justify-between">
              <span>
                <p className="text-sm">
                  Стоимость:{" "}
                  <span className="text-white font-semibold font-clashDisplay">
                    от 3 000 000 сум
                  </span>
                </p>
                <p className="text-[12px] text-gray-500">
                  Срок работы: до 10 дней
                </p>
              </span>
              <button className="border-2 border-[#D3176D] text-white cursor-pointer font-medium py-2 px-6 hover:scale-105">
                Заказать
              </button>
            </div>
          </div>
        </div>

        {/* Custom Premium */}
        <div className="bg-[#1E1E1E] p-6 shadow-lg w-[375px] h-[611px] flex flex-col justify-between">
          <div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-base font-semibold mb-4 text-center">
              HYPERPC SERVICE <br /> CUSTOM PREMIUM
            </h3>
            <p className="font-medium text-sm text-center mb-4">
              Полный набор услуг для <br /> решения комплексных проблем
            </p>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex gap-x-2">
                <Image src={Symbol1} alt="icon" />
                Комплексная диагностика
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol2} alt="icon" /> Переустановка ОС
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol3} alt="icon" /> Замена термоинтерфейса
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol4} alt="icon" /> Замена охлаждающей жидкости
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol5} alt="icon" /> Замена термопрокладок
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol6} alt="icon" /> Отчет об обслуживании
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol7} alt="icon" /> Чистка радиаторов
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol8} alt="icon" /> Чистка резервуара и помпы
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol9} alt="icon" /> Чистка водоблоков GPU/CPU
              </li>
              <li className="flex gap-x-2">
                <Image src={Symbol10} alt="icon" /> Обновление драйверов
              </li>
            </ul>
          </div>
          <div className="text-sm mt-6 border-t border-[#484848] pt-4">
            <label className="flex items-center space-x-2 mb-2">
              <input type="checkbox" className="accent-pink-600" />
              <span>Заказать забор и возврат ПК</span>
            </label>
            <div className="flex items-center justify-between">
              <span>
                <p className="text-sm">
                  Стоимость:{" "}
                  <span className="text-white font-semibold font-clashDisplay">
                    от 3 000 000 сум
                  </span>
                </p>
                <p className="text-[12px] text-gray-500">
                  Срок работы: до 10 дней
                </p>
              </span>
              <button className="border-2 border-[#D3176D] text-white cursor-pointer font-medium py-2 px-6 hover:scale-105">
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePackages;
