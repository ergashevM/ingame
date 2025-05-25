"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Play from "@/assets/play.svg";
import Quotation from "@/assets/quotation.svg";

const videoData = [
  {
    name: "Just Robotics",
    role: "Учебный центр",
    video: "/videos/video1.mp4",
    quote:
      "Для нашей школы мы закупили несколько моноблоков в ingame и это было отличное решение",
  },
  {
    name: "Intel Core 17",
    role: "Дружеский совет 💡",
    video: "/videos/video2.mp4",
    quote:
      "Как выбрать процессор? Что означают все эти i5 i7, на что обращать внимание? Ответили...",
  },
  {
    name: "Автоустановка программ",
    role: "Быстро, просто, удобно",
    video: "/videos/video3.mp4",
    quote:
      "При сборке нового компьютера, надо скачать множество программ с разных сайтов. Что бы вы не...",
  },
  {
    name: "Cougar Speeder",
    role: "Лучшее игровое кресло!",
    video: "/videos/video4.mp4",
    quote:
      "Cougar Speeder – лучшее рабочее и игровое кресло 2024 года! 🏆Эргономичная и удобная...",
  },
  {
    name: "Мгновенная реакция",
    role: "NVIDIA Reflex в деле",
    video: "/videos/video5.mp4",
    quote:
      "Знаете ли вы 🤔 Об этой функции NVIDIA Reflex? Она снижает задержку между вашими...",
  },
];

const Testimonials = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handlePause = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setPlayingIndex(null);
    }, 20000);
  };

  const handlePlay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-20 py-12 bg-[#0F0F0F]">
      <h2 className="text-2xl md:text-3xl font-bold font-clashDisplay text-white text-center mb-4">
        Все ли у нас надежное и качественное?
      </h2>
      <p className="text-center text-gray-300 mb-10 text-sm md:text-base font-clashDisplay">
        Лучше всего об этом вам расскажут сами наши сотрудники!
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop={true}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            index > 4 ? "" : `<span class="${className}"></span>`,
        }}
        className="!pb-12 custom-swiper rounded-none"
      >
        {videoData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full">
              <div className="bg-[#111] rounded-xl overflow-hidden shadow-lg p-4 text-white flex flex-col h-full relative">
                {playingIndex === index ? (
                  <video
                    src={item.video}
                    className="w-full rounded-md"
                    controls
                    autoPlay
                    onPlay={handlePlay}
                    onPause={() => handlePause(index)}
                    onEnded={() => setPlayingIndex(null)}
                  />
                ) : (
                  <div className="relative">
                    <video
                      src={item.video}
                      className="w-full rounded-md"
                      muted
                      preload="metadata"
                    />
                    <div className="absolute top-0 left-0 bg-pink-600 text-white text-xs md:text-sm font-clashDisplay p-2 md:p-3 font-semibold">
                      {item.quote}
                    </div>
                    <div className="hidden  absolute lg:block top-20 right-2">
                      <Image className="" src={Quotation} alt="quotation" />
                    </div>

                    <button
                      className="absolute bottom-4 left-4 bg-pink-600 hover:bg-pink-700 text-white text-xs md:text-sm font-semibold px-3 py-1 w-[80px] h-[30px] flex items-center justify-center gap-x-2 font-[family-name:var(--font-orbitron)] cursor-pointer"
                      onClick={() => setPlayingIndex(index)}
                    >
                      <span>Play</span>
                      <Image src={Play} alt="play" />
                    </button>
                  </div>
                )}
                <h3 className="mt-4 absolute bottom-25 left-8 font-[family-name:var(--font-inter)] font-bold text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {item.name}
                </h3>
                <p className="text-sm font-normal font-[family-name:var(--font-inter)] text-[#fff] mb-2 absolute bottom-18 left-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {item.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
