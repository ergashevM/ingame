"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import ButtonImage from "@/assets/buttonImage.svg";

const BannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("https://api.mirmakhmudoff.uz/api/banners/").then((res) => {
      setBanners(res.data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto lg:h-[660px] h-auto relative overflow-hidden bg-black px-4 md:px-10 lg:px-20">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "block" : "hidden"
          } flex flex-col lg:flex-row items-center justify-between w-full h-full px-6 lg:px-20`}
        >
          <div className="lg:w-1/2 w-full text-left space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-[60px] font-medium text-white font-[family-name:var(--font-orbitron)]">
              {banner.title_ru}
            </h2>

            <p className="text-sm md:text-base lg:text-xl text-white">
              {banner.description_ru}
            </p>

            <button className="p-0 border-none bg-transparent cursor-pointer w-[120px] md:w-[150px] mt-2 hover:scale-110">
              <a href="https://t.me/ingameuz">
              <Image
                src={ButtonImage}
                alt="Button"
                width={150}
                height={50}
                className="w-full h-auto"
              />
              </a>
            </button>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0 ml-10">
            <Image
              src={banner.image}
              alt="banner"
              width={600}
              height={400}
              className="object-contain rounded-xl w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
            />
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-10">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-[9px] md:w-[11px] h-[9px] md:h-[11px] ${
              index === currentIndex ? "bg-[#D3176D]" : "bg-white/30"
            } cursor-pointer transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
