import React from "react";
import Image from "next/image";

// Import rasmlarni
import ComputerImage from "@/assets/computer-image.svg";
import ClockIcon from "@/assets/clock-icon.svg";
import ChartIcon from "@/assets/chart-icon.svg";
import WalletIcon from "@/assets/wallet-icon.svg";
import QuestionIcon from "@/assets/question-icon.svg";
import WarningIcon from "@/assets/warning-icon.svg";
import ThermometerIcon from "@/assets/thermometer-icon.svg";

const ComputerCare = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-44 py-10 bg-[#1A1A1A] text-white font-clashDisplay">
      <div className="text-center font-clashDisplay">
        <h2 className="text-2xl lg:text-[40px] font-semibold">
          Забота о вашем компьютере
        </h2>
        <p className="text-sm lg:text-[20px]">
          Компьютер, так же, как и любая другая машина, нуждается в регулярном
          техническом <br /> обслуживании. Это залог стабильной, эффективной и
          долгой работы всей системы. Не стоит <br /> пренебрегать состоянием
          своего ПК, так как это может привести к необратимым последствиям.
        </p>
        <div className="w-[134px] h-[2px] bg-pink-600 mx-auto mt-2"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-start mt-15">
        {/* Chap qism: Matn */}
        <div className="flex justify-center -mt-10">
          <Image
            src={ComputerImage}
            alt="Компьютер"
            className="w-full max-w-[400px]"
          />
        </div>

        {/* O'ng qism: Rasm */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <Image
                src={ClockIcon}
                alt="Сокращение срока службы ПК"
                width={24}
                height={24}
              />
              <span>Сокращение срока службы ПК</span>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <Image
                src={QuestionIcon}
                alt="Потеря ценных данных из-за вирусных программ"
                width={24}
                height={24}
              />
              <span>Потеря ценных данных из-за вирусных программ</span>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <Image
                src={ChartIcon}
                alt="Снижение работоспособности компьютера"
                width={24}
                height={24}
              />
              <span>Снижение работоспособности компьютера</span>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <Image
                src={WarningIcon}
                alt="Короткое замыкание"
                width={24}
                height={24}
              />
              <span>Короткое замыкание</span>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <Image
                src={WalletIcon}
                alt="Дорогостоящий ремонт"
                width={24}
                height={24}
              />
              <span>Дорогостоящий ремонт</span>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <Image
                src={ThermometerIcon}
                alt="Перегрев и поломка комплектующих"
                width={24}
                height={24}
              />
              <span>Перегрев и поломка комплектующих</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerCare;
