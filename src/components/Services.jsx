import Link from "next/link";
import Image from "next/image";
import SectionOne from "@/assets/sectionOne.svg";
import SectionTwo from "@/assets/sectionTwo.svg";

const servicesData = [
  {
    id: 1,
    name: "Апгрейд компьютеров",
    description:
      "Здесь наши специалисты с многолетним опытом подарят новую «жизнь» вашему верному стальному другу. Усовершенствуют его технические характеристики, а также сделают его стильным и выделяющимся по вашему желанию!",
    details: [
      "Увеличение производительности с помощью SSD и нового процессора",
      "Установка мощной видеокарты для игр и работы с графикой",
      "Обновление системы охлаждения для стабильной работы",
      "Расширение памяти с помощью SSD или HDD",
    ],
    image: SectionOne,
    link: "/services/upgradeComputers", // qo‘shildi
  },
  {
    id: 2,
    name: "Обслуживание компьютеров",
    description:
      "Это комплекс мер, направленных на обеспечение стабильной и бесперебойной работы компьютерной техники, программного обеспечения и приложений, периферийных устройств и сетевого оборудования.",
    details: [
      "Установка ПО и ОС.",
      "Обеспечение безопасности и обновление антивирусной защиты.",
      "Настройка резервного копирования.",
      "Обслуживание аппаратной части.",
    ],
    image: SectionTwo,
    link: "/services/computerMaintenance", // qo‘shildi
  },
];

const Services = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto py-10 bg-[#1A1A1A] px-4 lg:px-30">
      <h1 className="font-semibold font-clashDisplay text-[32px] sm:text-[36px] md:text-[40px] text-white pt-10 sm:pt-12 pl-0 sm:pl-10 mb-10 text-center sm:text-left">
        Услуги
      </h1>
      <div className="flex justify-start items-center flex-wrap">
        <div className="flex items-center justify-start flex-wrap gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative w-[300px] h-[591px] text-white shadow-md overflow-hidden bg-[#1E1E1E] mx-auto"
            >
              {/* Image */}
              <div className="relative w-full h-64 flex items-center justify-center mb-4">
                <div className="absolute w-38 h-38 bg-white opacity-20 blur-2xl rounded-full"></div>
                <Image
                  src={service.image}
                  alt={service.name}
                  width={164}
                  height={251}
                  className="relative w-full h-60 object-contain p-10 mt-10"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h2 className="font-clashDisplay font-semibold text-[20px] line-clamp-1 text-[#D3176D]">
                  {service.name}
                </h2>
                <p className="text-base font-light text-white font-clashDisplay mt-2 line-clamp-2">
                  {service.description}
                </p>
                <ul className="mt-4 text-sm text-white font-clashDisplay space-y-1">
                  {service.details.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-white mt-[2px] mr-2">•</span>
                      <span
                        className="line-clamp-1"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                          overflow: "hidden",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button with Link */}
              <div className="flex justify-end mt-4 pr-6">
                <Link href={service.link}>
                  <button className="border-2 border-white px-4 py-1 mt-2 text-white hover:bg-[#D3176D] hover:border-[#D3176D] cursor-pointer">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

