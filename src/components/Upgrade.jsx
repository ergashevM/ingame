"use client";
import Image from "next/image";
import PosterOne from "@/assets/upgradePoster.svg";
import PinkLight1 from "@/assets/pinkLight2.svg";
import React from "react";
import Link from "next/link";
import Icon1 from "@/assets/icon1.svg";
import Icon2 from "@/assets/icon2.svg";
import Icon3 from "@/assets/icon3.svg";
import Icon4 from "@/assets/icon4.svg";

const UpgradeService = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[#000] overflow-hidden lg:pb-73">
      {/* Breadcrumbs */}
      <div className="text-white font-clashDisplay text-[16px] flex items-center gap-x-2 px-4 lg:px-0 lg:pl-44 bg-[#1A1A1A] py-2">
        <Link
          href="/"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Главная
        </Link>
        <span className="text-[#D3176D] text-[10px]">●</span>
        <span className="opacity-80 hover:opacity-100">Услуги</span>
        <span className="text-[#D3176D] text-[10px]">●</span>
        <span>Апгрейд компьютеров</span>
      </div>

      {/* Kontent */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1600px] mx-auto px-4 lg:px-44 py-8 lg:py-0 relative">
        {/* Chap qism */}
        <div className="lg:w-1/2 text-white space-y-4 mb-8 lg:mb-0 font-clashDisplay">
          <h2 className="font-medium text-4xl sm:text-5xl lg:text-[60px]">
            Апгрейд <br /> компьютеров
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-base">
            Здесь наши специалисты с многолетним опытом подарят новую «жизнь»
            вашему верному стальному другу. Усовершенствуют его технические
            характеристики, а также сделают его стильным и выделяющимся по
            вашему желанию!
          </p>
          <button className="bg-transparent border border-pink-500 px-6 py-2 font-medium text-base sm:text-lg">
            Заказать апгрейд
          </button>
        </div>

        {/* O‘ng qism */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
          <Image
            src={PosterOne}
            alt="Upgrade Image"
            width={600}
            height={400}
            className="w-full h-auto rounded-md shadow-md relative z-10"
          />
          <Image
            src={PinkLight1}
            alt="background"
            className="absolute top-0 -left-10 w-[600px] h-auto"
          />
          <Image
            src={PinkLight1}
            alt="background"
            className="absolute top-0 left-20 w-[600px] h-auto"
          />
        </div>
      </div>
      {/* Pastki boxlar */}
      <div className="relative lg:absolute lg:top-[500px] w-full max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-center lg:justify-between px-4 lg:px-44 gap-y-8 sm:gap-x-6 mt-20 lg:pb-0 pb-20 lg:mb-0 md:mb-0 mb-10">
        <InfoBox icon={Icon1} title="Проблемы с мощностью?" />
        <InfoBox icon={Icon2} title="Неполадки в работе системы?" />
        <InfoBox icon={Icon3} title="Не устраивает внешний вид?" />
        <InfoBox icon={Icon4} title="Долго добираться до офиса?" />
      </div>
    </div>
  );
};

const InfoBox = ({ icon, title }) => {
  return (
    <div className="w-[200px] h-[231px] relative group">
      <span className="absolute -top-[25px] left-[9px] font-thin text-[46px] rotate-[20deg] text-[#D3176D] z-40">
        /
      </span>
      <span className="absolute -bottom-4 right-[5px] font-thin text-[49px] rotate-[22deg] text-[#D3176D] z-40">
        /
      </span>
      {/* Asosiy box qutisi */}
      <div className="w-full h-full bg-[#1A1A1A] text-white px-4 py-6 custom-box-border relative transition-all duration-300 border-2 border-[#D3176D] cut flex flex-col items-center justify-center">
        {" "}
        {/* flex qo'shildi */}
        {/* Icon */}
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
          {" "}
          {/* Rasm uchun o'lcham */}
          <Image src={icon} alt={title} width={40} height={40} />{" "}
          {/* width va height moslashtirilishi mumkin */}
        </div>
        {/* Title */}
        <h4 className="text-[16px] font-medium text-center">{title}</h4>
        {/* Pastki tugma */}
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-pink-500 text-black rounded-full flex items-center justify-center">
          ➜
        </div>
      </div>
    </div>
  );
};

export default UpgradeService;
