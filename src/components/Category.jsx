"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link"; // Link komponentini import qiling

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.mirmakhmudoff.uz/api/catalogs/")
      .then((res) => {
        const categoriesWithSlugs = res.data.map((cat) => ({
          ...cat,
          slug: generateCustomSlug(cat.name_ru), // Maxsus slug yaratish funksiyasi
        }));
        setCategories(categoriesWithSlugs);
      });
  }, []);

  // Maxsus slug yaratish funksiyasi
  const generateCustomSlug = (name) => {
    switch (name) {
      case "Монитор":
        return "monitor";
      case "Столы":
        return "tables";
      case "Кресла":
        return "furniture";
      case "Клавиатура":
        return "keyboard";
      case "Комплектующие":
        return "components";
      case "Гарнитура":
        return "headsets";
      case "Мышки":
        return "mouse";
      case "Аксессуары":
        return "accessories";
      default:
        return name.toLowerCase().replace(/\s+/g, '-'); // Agar mos kelmasa, oddiy slug yaratish
    }
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-20 py-10 bg-[#0F0F0F] text-white">
      <h2 className="text-center font-semibold text-2xl sm:text-3xl lg:text-[40px] font-[family-name:var(--font-orbitron)]">
        КАТАЛОГ INGAME.UZ
      </h2>
      <p className="text-center font-medium text-base sm:text-lg lg:text-[22px] font-clashDisplay mt-2">
        Выберите себе в каталоге для максимально комфортной игры
      </p>
      <span className="flex justify-center items-center mt-3">
        <hr className="w-[134px] border-t-2 border-[#D3176D] rounded-2xl" />
      </span>
      {/* First row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center mt-10 lg:px-30">
        {categories.slice(0, 4).map((cat) => (
          <Link
            key={cat.id}
            href={`/products/${cat.slug}`}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative">
              <Image
                src={cat.image}
                alt={cat.name_ru}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-[22px] font-medium font-clashDisplay">
              {cat.name_ru}
            </p>
          </Link>
        ))}
      </div>

      {/* Second row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center mt-10 lg:px-30">
        {categories.slice(4, 8).map((cat) => (
          <Link
            key={cat.id}
            href={`/products/${cat.slug}`}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative">
              <Image
                src={cat.image}
                alt={cat.name_ru}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-[22px] font-medium font-clashDisplay">
              {cat.name_ru}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
