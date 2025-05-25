import React from "react";
import Image from "next/image";

// Import rasmlarni
import CircuitBoardImage from "@/assets/circuit-board.svg";
import HackedLaptopImage from "@/assets/hacked-laptop.svg";
import BrokenClockImage from "@/assets/broken-clock.svg";
import MoneyImage from "@/assets/money.svg";

const SelfRepairProblems = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-44 py-10 bg-[#1A1A1A] font-clashDisplay text-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold">
          Проблемы, возникающие при самостоятельном ремонте
        </h2>
        <div className="w-[134px] h-[2px] bg-pink-600 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-between px-10">
        {/* 1-muammo */}
        <div className="w-[225px] h-auto bg-[#0A0A0A] overflow-hidden shadow-md pb-3">
          <div className="relative w-full h-40">
            <Image
              className="p-3"
              src={CircuitBoardImage}
              alt="Риск поражения током"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center">
            <p className="text-sm lg:text-base font-semibold">
              Риск поражения током
            </p>
          </div>
        </div>

        {/* 2-muammo */}
        <div className="w-[225px] h-auto bg-[#0A0A0A] overflow-hidden shadow-md pb-3">
          <div className="relative w-full h-40">
            <Image
              className="p-3"
              src={HackedLaptopImage}
              alt="Потеря важных данных"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center">
            <p className="text-sm lg:text-base font-semibold">
              Потеря важных данных
            </p>
          </div>
        </div>

        {/* 3-muammo */}
        <div className="w-[225px] h-auto bg-[#0A0A0A] overflow-hidden shadow-md pb-3">
          <div className="relative w-full h-40">
            <Image
              className="p-3"
              src={BrokenClockImage}
              alt="Потеря времени"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center">
            <p className="text-sm lg:text-base font-semibold">Потеря времени</p>
          </div>
        </div>

        {/* 4-muammo */}
        <div className="w-[225px] h-auto bg-[#0A0A0A] overflow-hidden shadow-md pb-3">
          <div className="relative w-full h-40">
            <Image
              className="p-3"
              src={MoneyImage}
              alt="Непредвиденные траты"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center">
            <p className="text-sm lg:text-base font-semibold">
              Непредвиденные траты
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfRepairProblems;
