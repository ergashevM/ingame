// Desktops.jsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Basket from "@/assets/basket.svg";
import Connect from "@/assets/connect.svg";
import Corner from "@/assets/corner.svg";
import Processor from "@/assets/Processor.svg";
import VideoCard from "@/assets/VideoCard.svg";
import Cooling from "@/assets/Cooling.svg";
import Memory from "@/assets/Memory.svg";
import Comparison from "@/assets/comparison.svg";
import { useCart } from "@/context/CartContext"; // useCart hookini import qiling

const Desktops = () => {
  const [desktops, setDesktops] = useState([]);
  const { addToCart } = useCart(); // useCart hookidan addToCart funksiyasini olish

  useEffect(() => {
    const fetchDesktops = async () => {
      try {
        const response = await axios.get(
          "https://api.mirmakhmudoff.uz/api/desktops/"
        );
        const filtered = response.data.filter((item) => item.id <= 3);
        setDesktops(filtered);
      } catch (error) {
        console.error("API dan maʼlumot olishda xatolik:", error);
      }
    };

    fetchDesktops();
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[#1A1A1A] pb-15 px-4 lg:px-30">
      <h1 className="font-semibold font-clashDisplay text-[32px] sm:text-[36px] md:text-[40px] text-white pt-10 sm:pt-12 pl-0 sm:pl-10 mb-10 text-center sm:text-left">
        Наши ПК
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {desktops.map((desktop) => (
          <div
            key={desktop.id}
            className="h-auto w-full sm:w-[48%] lg:w-[32%] max-w-[399px] p-4 transition bg-[#1E1E1E]"
          >
            <div className="relative">
              <div className="relative w-full h-64 flex items-center justify-center mb-4">
                <div className="absolute w-58 h-58 bg-white opacity-20 blur-2xl rounded-full"></div>
                <Image
                  width={297}
                  height={138}
                  src={desktop.image}
                  alt={desktop.name_ru}
                  className="relative z-10 w-full h-64 object-contain"
                />
              </div>
              <div className="flex items-center justify-between relative mb-8 mt-10">
                <span className="bg-[#D3176D] text-white rounded-4xl p-2 font-semibold text-[10px] font-clashDisplay">
                  12 КОМПЛЕКТАЦИЙ
                </span>
                <div className="price-button h-[42px] pt-1.5 px-4">
                  <p className="mb-5 text-sm">{`от ${desktop.price_uzs} сум`}</p>
                  <Image
                    className="absolute top-0 -right-1 rotate-7"
                    src={Connect}
                    alt="connent line"
                  />
                </div>
                <Image
                  className="absolute top-0 right-0 rotate-4"
                  src={Corner}
                  alt="connent line"
                />
              </div>
              <hr className="absolute border border-[#D9D9D933] w-full left-4 -bottom-5" />
            </div>

            <h2 className="text-[#D3176D] font-semibold text-[20px] leading-snug mb-1 font-[family-name:var(--font-orbitron)]">
              {desktop.id === 1
                ? (() => {
                    const words = desktop.name_ru.split(" ");
                    const firstLine = words.slice(0, -2).join(" ");
                    const lastTwoWords = words.slice(-2).join(" ");
                    return (
                      <>
                        {firstLine}
                        <br />
                        {lastTwoWords}
                      </>
                    );
                  })()
                : desktop.name_ru}
            </h2>

            <p className="font-medium font-clashDisplay text-sm text-white">
              {desktop.description_ru}
            </p>
            <div className="flex flex-col mt-6 gap-y-4">
              {/* Har bir xususiyat satri uchun */}
              {[
                ["Процессоры", Processor, desktop.processor],
                ["Видеокарты", VideoCard, desktop.videocard],
                ["Охлаждение", Cooling, desktop.cooler],
                ["Память", Memory, desktop.memory],
              ].map(([title, icon, value], index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <Image src={icon} alt="icon" />
                  <div>
                    <h6 className="text-[#AAA7A7] text-[12px] font-clashDisplay">
                      {title}
                    </h6>
                    <span className="text-white text-sm font-clashDisplay">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-6 border text-white font-clashDisplay">
              <div className="flex items-center justify-between border-b px-2 py-1">
                <p>Игра/FPS</p>
                <p>{desktop.resolution}</p>
              </div>
              <div className="flex items-center justify-between px-2 py-1">
                <p>GTA V</p>
                <p>{desktop.fps}</p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-end gap-4 mt-6">
              <Image
                className="border-white border w-[36px] h-[35px] p-1.5 cursor-pointer"
                src={Basket}
                alt="basket"
                onClick={() => addToCart({ ...desktop, cartId: `desktop-${desktop.id}` })}
 // Mahsulotni savatga qo'shish
              />
              <Image src={Comparison} alt="comparison" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktops;