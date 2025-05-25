"use client";
import Image from "next/image";
import PosterTwo from "@/assets/sectionTwo.svg";
import BlueLight from "@/assets/blueLight.svg";
import React from "react";
import Link from "next/link";

const Maintenance = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[#000] overflow-hidden">
      {/* Breadcrumbs */}
      <div className="text-white font-clashDisplay text-[16px] flex items-center gap-x-2 py-2 px-4 lg:px-0 lg:pl-44 bg-[#1A1A1A]">
        <Link
          href="/"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Главная
        </Link>
        <span className="text-[#D3176D] text-[10px]">●</span>
        <span className="opacity-80 hover:opacity-100">Услуги</span>
        <span className="text-[#D3176D] text-[10px]">●</span>
        <span>Обслуживание компьютеров</span>
      </div>

      {/* Kontent */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1600px] mx-auto px-4 lg:px-44 py-8 lg:py-10 relative">
        {/* Chap qism */}
        <div className="lg:w-1/2 text-white space-y-4 mb-8 lg:mb-0 font-clashDisplay">
          <h2 className="font-medium text-4xl sm:text-5xl lg:text-[60px]">
            Обслуживание <br /> компьютеров
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-base">
            Техническое обслуживание компьютера охватывает все действия,
            необходимые для эффективной и надежной работы вашего компьютера.  <br />
            <br /> Правильное обслуживание компьютера заключается не только в
            устранении неполадок, когда они возникают, но и в предотвращении
            проблем до их возникновения. Подумайте об этом как об обслуживании
            автомобиля: регулярная замена масла и настройка предотвращают
            серьезные поломки и дорогостоящий ремонт.
          </p>
        </div>

        {/* O‘ng qism */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
          <Image
            src={PosterTwo}
            alt="Upgrade Image"
            width={600}
            height={400}
            className="w-full h-auto rounded-md shadow-md relative z-10"
          />
          <Image
            src={BlueLight}
            alt="background"
            className="absolute top-0 -left-10 w-[600px] h-auto"
          />
          <Image
            src={BlueLight}
            alt="background"
            className="absolute top-0 left-20 w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
