"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import User from "@/assets/user.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Anora",
    comment:
      "Отличный продукт! Пользуюсь им уже несколько месяцев и не могу нарадоваться. Рекомендую всем!",
    rating: 5,
  },
  {
    id: 2,
    name: "Dmitriy",
    comment:
      "Хорошее качество, но немного завышенная цена. В целом, покупка оправдала ожидания.",
    rating: 4,
  },
  {
    id: 3,
    name: "Gulnora",
    comment:
      "Продукт понравился, но доставка задержалась. Надеюсь, в следующий раз все будет быстрее.",
    rating: 3,
  },
  {
    id: 4,
    name: "Maxmud",
    comment:
      "Пользуюсь этим товаром и доволен. Отлично подходит для повседневного использования.",
    rating: 4,
  },
  {
    id: 5,
    name: "Dilshod",
    comment: "Не совсем то, что ожидала. Качество среднее, но в целом неплохо.",
    rating: 3,
  },
];

const ClientReviews = () => {
  const [index, setIndex] = useState(0);
  const [groupSize, setGroupSize] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setGroupSize(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groups = Array.from({ length: Math.ceil(reviews.length / groupSize) }, (_, i) =>
    reviews.slice(i * groupSize, i * groupSize + groupSize)
  );

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? groups.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === groups.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#0F0F0F] text-white py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Отзывы наших клиентов</h2>
        <p className="text-gray-300 mt-2">Об этом лучше всего расскажут сами наши клиенты!</p>
        <div className="mt-2 w-[134px] h-[2px] bg-pink-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative overflow-hidden w-full max-w-6xl mx-auto my-7">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="min-w-full flex justify-center gap-4">
              {group.map((review) => (
                <div
                  key={review.id}
                  className={`${
                    groupSize === 1 ? "w-full" : "w-[506px]"
                  } h-[192px] px-4`}
                >
                  <div className="border-6 border-white p-6 h-full bg-[#050505] flex items-center gap-3">
                    <div className="min-w-[85px] min-h-[85px]">
                      <Image width={85} height={85} src={User} alt="user" />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <h1 className="font-bold text-lg">{review.name}</h1>
                      <p className="text-sm text-gray-300">{review.comment}</p>
                      <div className="flex justify-center mt-auto">
                        {[...Array(5)].map((_, starIndex) => (
                          <span
                            key={starIndex}
                            className={`text-[28px] ${
                              starIndex < review.rating ? "text-[#D3176D]" : "text-gray-500"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {groups.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 cursor-pointer ${
              i === index ? "bg-pink-600" : "bg-white/30"
            }`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
