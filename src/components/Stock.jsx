"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heart from "@/assets/heart.svg";
import RedHeart from "@/assets/redHeart.png";
import Basket from "@/assets/basket.svg";
import stockProducts from "@/data/stockProducts";

const Stock = () => {
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto py-10 bg-[#1A1A1A] px-4 lg:px-30">
      <h1 className="font-semibold font-clashDisplay text-[32px] sm:text-[36px] md:text-[40px] text-white pt-10 sm:pt-12 pl-0 sm:pl-10 mb-10 text-center sm:text-left">
        Акции
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stockProducts.map((product) => (
            <div
              key={product.id}
              className="relative w-[300px] h-[561px] text-white shadow-md overflow-hidden bg-[#1E1E1E] mx-auto"
            >
              {/* Акции */}
              <div className="absolute top-2 left-2 text-white px-2 py-2 mt-2 font-semibold border-2 border-[#D3176D] w-[90px] h-[36px] text-center font-clashDisplay text-base leading-[20px]">
                Акции
              </div>

              {/* Heart */}
              <div
                className="absolute top-2 right-2 p-3 cursor-pointer z-10"
                onClick={() => toggleLike(product.id)}
              >
                <Image
                  src={likedProducts[product.id] ? RedHeart : Heart}
                  alt="heart"
                  width={24}
                  height={24}
                />
              </div>

              {/* Product image */}
              <div className="relative w-full h-64 flex items-center justify-center mb-4">
                <div className="absolute w-38 h-38 bg-white opacity-20 blur-2xl rounded-full"></div>
                <Image
                  src={product.image}
                  alt={product.name_ru}
                  width={164}
                  height={251}
                  className="relative w-full h-60 object-contain p-10 mt-10"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h2 className="font-clashDisplay font-semibold text-[20px] line-clamp-1">
                  {product.name_ru}
                </h2>
                <div className="flex flex-col mt-4 font-semibold">
                  <p className="font-clashDisplay text-[18px] line-through -mb-2">
                    4 500 000 сум
                  </p>
                  <p className="font-clashDisplay font-semibold text-[20px] text-[#D3176D]">
                    {product.price_uzs} сум
                  </p>
                </div>
                <p className="text-base font-light text-white font-clashDisplay mt-2 line-clamp-3">
                  {product.description_ru}
                </p>
              </div>

              {/* Bottom buttons */}
              <div className="flex items-center justify-end gap-x-3 px-5">
                <button className="border-3 border-[#D3176D] w-[90px] h-[36px] cursor-pointer">
                  Купить
                </button>
                <Image
                  className="border-white border w-[36px] h-[35px] p-1.5 cursor-pointer"
                  src={Basket}
                  alt="basket"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stock;
