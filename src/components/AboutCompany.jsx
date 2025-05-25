import Image from "next/image";
import Link from "next/link";
import Gif from "@/assets/about-video.gif"; // ✅ GIF import

const AboutCompany = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto p-4 bg-black">
      {/* Breadcrumb — Chap tomonda */}
      <div className="text-white font-clashDisplay text-[16px] flex items-center gap-x-2 ml-4 sm:ml-6 lg:ml-40 mb-6">
        <Link href="/" className="opacity-80">
          Главная
        </Link>
        <span className="text-[#D3176D] text-[10px]">●</span>
        <span>О бренде</span>
      </div>

      {/* Title */}
      <h1 className="text-white text-3xl lg:text-4xl font-semibold mb-6 ml-4 sm:ml-6 lg:px-34">
        О компании
      </h1>

      {/* Description */}
      <div className="text-gray-300 space-y-4 mb-6 text-base leading-relaxed ml-4 sm:ml-6 lg:px-34">
        <p>
          Компания XYZ была основана в 2007 году. Мы — официальный партнер таких
          известных технологических гигантов, как NVIDIA, ASUS ROG, Sony и
          других.
        </p>
        <p>
          Главный офис XYZ находится в Ташкенте. Мы предлагаем широкий
          ассортимент компьютерной и периферийной продукции для пользователей.
          Наша команда работает как с частными, так и с корпоративными
          клиентами.
        </p>
      </div>

      {/* GIF o‘rnida video */}
      <div className="w-full flex justify-center mb-8 px-4 sm:px-6 lg:px-14">
        <Image
          src={Gif}
          alt="About Company"
          width={1157}
          height={700}
          className="rounded-lg shadow-lg object-cover w-full max-w-[1167px] h-auto"
        />
      </div>
    </div>
  );
};

export default AboutCompany;
