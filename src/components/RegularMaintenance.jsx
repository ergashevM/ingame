import React from "react";
import Image from "next/image";

// Import ikonkalarni
import ShieldIcon from "@/assets/shield-icon.svg";
import ChartUpIcon from "@/assets/chart-up-icon.svg";
import DollarIcon from "@/assets/dollar-icon.svg";
import ClockIcon from "@/assets/clock-icon2.svg";
import SparklesIcon from "@/assets/sparkles-icon.svg";
import CheckmarkIcon from "@/assets/checkmark-icon.svg";
import iMacImage from "@/assets/imac.svg";

const WhyRegularMaintenance = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-44 py-10 bg-[#0A0A0A] text-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold">
          Почему важно регулярно проходить ТО
        </h2>
        <p className="text-sm lg:text-base text-gray-400 mt-2">
          Профессиональное техническое обслуживание компьютеров в HYPERPC
          гарантирует быстрое <br /> и безопасное устранение проблем. Благодаря
          регулярному ТО вы получаете «здоровое», <br /> продуктивное и
          эстетичное устройство, которое прослужит вам много лет.
        </p>
      </div>

      <div className="flex items-center justify-between px-10 flex-wrap">
        <div className="flex items-start justify-start flex-col gap-4">
          <div className="flex items-center gap-4 text-sm lg:text-base">
            <Image
              src={ShieldIcon}
              alt="Избавляет от вредоносных и неиспользуемых программ"
              width={32}
              height={32}
            />
            <span>
              Избавляет от вредоносных <br /> и неиспользуемых программ
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm lg:text-base">
            <Image
              src={ChartUpIcon}
              alt="Повышает производительность компьютера (до 15%)"
              width={32}
              height={32}
            />
            <span>
              Повышает производительность <br />
              компьютера (до 15%)
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm lg:text-base">
            <Image
              src={DollarIcon}
              alt="Экономит ваши время, деньги и нервы"
              width={32}
              height={32}
            />
            <span>
              Экономит ваши время, <br /> деньги и нервы
            </span>
          </div>
        </div>
        <div>
          <Image src={iMacImage} alt="iMac" className="w-full max-w-[400px]" />
        </div>
        <div className="flex items-start justify-start flex-col gap-4">
          <div className="flex items-center gap-4 text-sm lg:text-base">
            <Image
              src={ClockIcon}
              alt="Увеличивает срок службы компьютера"
              width={32}
              height={32}
            />
            <span>
              Увеличивает срок <br /> службы компьютера
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm lg:text-base">
            <Image
              src={SparklesIcon}
              alt="Поддерживает ПК в опрятном виде"
              width={32}
              height={32}
            />
            <span>
              Поддерживает ПК <br /> в опрятном виде
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm lg:text-base">
            <Image
              src={CheckmarkIcon}
              alt="Предупреждает поломку комплектующих"
              width={32}
              height={32}
            />
            <span>
              Предупреждает <br /> поломку комплектующих
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRegularMaintenance;
