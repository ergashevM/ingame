"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SimilarProducts = ({ products }) => {
  return (
    <div className="bg-[#1A1A1A] py-4 lg:px-33 text-white lg:mx-0 md:mx-0 mx-5">
      <h2 className="text-2xl font-semibold mb-6">Похожие товары</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-[304px] h-auto bg-[#1E1E1E] p-4 rounded-lg shadow-sm shadow-white"
          >
            <Link
              href={`/productDetails/${product.id}`}
              className="relative w-full h-48 mb-4 flex items-center justify-center hover:scale-110"
            >
              <Image
                src={product.image}
                alt="product"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </Link>
            <h3 className="font-clashDisplay text-base font-medium text-left pl-5">
              {product.name_ru}
            </h3>
            <p className="text-[20px] font-semibold font-clashDisplay text-left pl-5">
              {product.price_uzs} сум
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
