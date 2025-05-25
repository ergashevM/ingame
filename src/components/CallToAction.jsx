import Image from "next/image";
import Background from "@/assets/background.svg";

const CallToAction = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto h-auto bg-[#1A1A1A] text-white font-clashDisplay px-4 py-10">
      <div className="w-full max-w-[1320px] mx-auto h-auto lg:h-[420px] bg-[#0F0F0F] flex flex-col justify-center items-center text-center relative rounded-xl px-4 lg:px-12 py-10 lg:py-0 overflow-hidden">
        {/* Blur Background */}
        <div className="absolute top-[200px] right-[10px] w-[200px] h-[150px] sm:w-[280px] sm:h-[180px] lg:w-[320px] lg:h-[200px] bg-[#D3176D] opacity-20 blur-2xl rounded-full z-0"></div>

        {/* SVG Background Image */}
        <div className="absolute top-[200px] right-0 z-0 hidden sm:block">
          <Image
            src={Background}
            alt="background"
            className="w-[220px] sm:w-[300px] lg:w-[380px] h-auto"
          />
        </div>

        {/* Text Content */}
        <h2 className="relative z-10 text-[28px] sm:text-[34px] lg:text-[38px] font-semibold mb-6 leading-tight">
          Одним онлайн-звонком мы изменим ваш <br />
          игровой опыт навсегда
        </h2>
        <p className="relative z-10 text-[16px] sm:text-[18px] font-normal mb-6 leading-relaxed">
          Назначим звонок, узнаем о ваших запросах, предложим подходящую
          конфигурацию. <br />
          После разбора мы возьмем на себя все заботы по поддержке и <br />
          дальнейшей доставке и сбору ПК
        </p>
        <button className="relative z-10 w-full max-w-[246px] h-[52px] bg-pink-600 hover:bg-pink-700 transition text-white text-[18px] sm:text-[20px] font-semibold rounded flex items-center justify-center gap-2 cursor-pointer">
          <span>⚡</span> Заказать звонок
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
