"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Basket from "@/assets/basket.svg";
import { useCart } from "@/context/CartContext"; // ✅ Qo‘shildi

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("https://api.mirmakhmudoff.uz/api/products/")
      .then((res) => {
        const sliced = res.data.slice(0, 4);
        setProducts(sliced);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative w-full max-w-[1600px] mx-auto py-10 bg-[#1A1A1A] px-4 lg:px-30">
      <h1 className="font-semibold font-clashDisplay text-[32px] sm:text-[36px] md:text-[40px] text-white pt-10 sm:pt-12 pl-0 sm:pl-10 mb-10 text-center sm:text-left">
        Новинки
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-[300px] h-[561px] text-white shadow-md overflow-hidden bg-[#1E1E1E] mx-auto"
            >
              <div className="absolute top-2 left-2 text-white px-2 py-2 mt-2 font-semibold border-2 border-[#D3176D] w-[90px] h-[36px] text-center font-clashDisplay text-base leading-[20px]">
                Новинки
              </div>

              <div className="relative w-full h-64 flex items-center justify-center mb-4">
                <div className="absolute w-38 h-38 bg-white opacity-20 blur-2xl rounded-full"></div>
                <Image
                  src={product.image}
                  alt={product.name_ru}
                  width={164}
                  height={251}
                  className="relative w-full h-60 object-contain p-4 mt-10"
                />
              </div>

              <div className="p-4">
                <h2 className="font-clashDisplay font-semibold text-[20px]">
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

              <div className="flex items-center justify-end gap-x-3 px-5">
                <button
                  className="border-3 border-[#D3176D] w-[100px] h-[36px] cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  Подробнее
                </button>
                <Image
                  className="border-white border w-[36px] h-[35px] p-1.5 cursor-pointer"
                  src={Basket}
                  alt="basket"
                  onClick={() =>
                    addToCart({
                      ...product,
                      cartId: `newproduct-${product.id}`,
                    })
                  }
                  // ✅ Faqat shu qo‘shildi
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-[#1E1E1E] text-white z-[1005] shadow-xl p-6 overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-3xl font-bold text-white cursor-pointer"
            onClick={() => setSelectedProduct(null)}
          >
            ×
          </button>

          <div className="relative w-full h-[300px] flex justify-center items-center mb-6 mt-6">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name_ru}
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <h2 className="font-clashDisplay text-2xl font-semibold mb-4 text-center">
            {selectedProduct.name_ru}
          </h2>

          <p className="font-clashDisplay text-base whitespace-pre-line">
            {selectedProduct.description_ru}
          </p>
        </div>
      )}
    </div>
  );
};

export default NewProducts;
