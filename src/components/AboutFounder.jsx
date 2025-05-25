import Image from "next/image";
import Ingame from "@/assets/shodiyev.png";
import Quotation from "@/assets/quotation.svg";

const AboutFounder = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-40 py-12 bg-[#1A1A1A]">
      {/* Title */}
      <h2 className="text-white font-semibold text-[40px] sm:text-4xl text-center mb-10 relative w-fit mx-auto">
        Про нас
        <div className="w-[120px] h-[2px] bg-pink-600 mx-auto mt-2 mb-10"></div>
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left: Founder Image */}

          <Image
            src={Ingame}
            alt="Founder"
            width={300}
            height={300}
            className="w-full lg:w-[300px] h-[300px] rounded-md object-contain"
          />


        {/* Right: Text Content */}
        <div className="flex-1 text-[#B2B2B2]  space-y-4 text-[16px] leading-relaxed">
          <p>Здравствуйте, я — Шахзод Шодиев, основатель компании inGame</p>
          <p>
            Я прошел все этапы работы: сам продавал, собирал и доставлял
            компьютеры клиентам. Как никто другой знаю, как это делать
            правильно. За 7 лет работы мы построили компанию одним из лучших
            производителей компьютеров премиум класса в Узбекистане.
          </p>
          <p>
            За это время мы собрали мощную команду единомышленников, с которыми
            дружим и работаем с самого основания компании.
          </p>

          {/* Mission Box */}
          <div className="border-2 border-[#D3176D] p-4 relative mt-6 bg-[#141414]">
            <div className="font-semibold text-white mb-2">Наша миссия</div>
            <p className="text-white">
              Создавать лучшие компьютеры, которые будут дарить геймерам и
              творческим профессионалам удовольствие от использования. inGame
              это восхитительный дизайн, высокая производительность, безупречное
              качество и персональный сервис
            </p>
            <span className="quotation text-[#D3176D] text-4xl absolute -top-2 right-4">
              <Image src={Quotation} alt="quotation" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
