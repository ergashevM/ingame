"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CompareIcon from "@/assets/comparison.svg";
import StarIcon from "@/assets/star.svg";
import DeliveryIcon from "@/assets/delivery.svg";
import QuestionIcon from "@/assets/question.svg";
import { useCart } from "@/context/CartContext";

const ProductInfo = ({ product }) => {
  const { addToCart } = useCart();

  const availableThumbnails =
    product.thumbnails && product.thumbnails.length > 0
      ? product.thumbnails
      : [product.image];

  const [currentImage, setCurrentImage] = useState(
    availableThumbnails[0] || product.image
  );

  useEffect(() => {
    setCurrentImage(availableThumbnails[0] || product.image);
  }, [product, availableThumbnails]);

  const hasOldPrice =
    product.oldPriceUzs && product.oldPriceUzs !== product.price_uzs;
  const discountPercentage = hasOldPrice
    ? Math.round(
        ((Number(product.oldPriceUzs.toString().replace(/\s/g, "")) -
          Number(product.price_uzs.toString().replace(/\s/g, ""))) /
          Number(product.oldPriceUzs.toString().replace(/\s/g, ""))) *
          100
      )
    : 0;

  const categoryName = product.category
    ? product.category.charAt(0).toUpperCase() +
      product.category.slice(1).toLowerCase()
    : "Категория";

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div className="w-full max-w-[1600px] mx-auto h-auto lg:px-20 bg-[#1A1A1A] text-white  pb-0 mb-0">
      {/* Breadcrumbs */}
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-24">
        <div className="text-white font-clashDisplay text-[16px] flex items-center gap-x-2">
          <Link href="/" className="opacity-80">
            Главная
          </Link>
          <span className="text-[#D3176D] text-[10px]">●</span>
          <span className="opacity-80">{categoryName}</span>
          <span className="text-[#D3176D] text-[10px]">●</span>
          <span>{product.name_ru}</span>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-14 py-10 flex flex-col  lg:flex-row gap-x-12">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6">
          <div className="flex flex-row md:flex-col justify-between gap-4 overflow-x-auto md:overflow-y-auto scrollbar-hide">
            {availableThumbnails.slice(0, 3).map((imgSrc, index) => (
              <div
                key={index}
                className={`relative w-[100px] h-[100px] bg-[#1E1E1E] flex-shrink-0 border transition-all duration-200 cursor-pointer ${
                  currentImage === imgSrc
                    ? "border-[#D3176D]"
                    : "border-transparent hover:border-gray-500"
                }`}
                onClick={() => setCurrentImage(imgSrc)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={imgSrc}
                    alt={`${product.name_ru} - ${index + 1}`}
                    fill
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex-grow w-full lg:max-w-[460px] h-[320px] lg:h-[403px] bg-[#1E1E1E] flex items-center justify-center">
            {hasOldPrice && (
              <div className="absolute top-4 left-4 border border-[#D3176D] text-[#D3176D] px-3 py-2 text-sm font-bold font-[family-name:var(--font-orbitron)] z-10">
                -{discountPercentage}%
              </div>
            )}

            <Image
              src={currentImage}
              alt="thumbnail images"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="font-[family-name:var(--font-orbitron)] text-[30px] font-semibold leading-tight mb-2">
            {product.name_ru}
          </h2>

          <p className="font-clashDisplay text-xl text-gray-400 mb-2">
            {product.brand}
          </p>

          <div className="flex items-center gap-x-6 mb-3">
            <button className="flex items-center gap-x-2 text-gray-400 text-sm">
              <Image src={CompareIcon} alt="Сравнить" width={16} height={16} />
              Сравнить
            </button>
          </div>

          <div className="flex items-center gap-x-1">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={StarIcon}
                alt="Star"
                width={30}
                height={30}
                className={
                  i < (product.rating || 4) ? "opacity-100" : "opacity-50"
                }
              />
            ))}
            <span className="ml-2 text-[18px] text-gray-400 font-clashDisplay">
              ({product.reviewsCount || 1323} отзывов)
            </span>
          </div>

          <p className="text-sm text-white opacity-90 leading-[20px] mb-3">
            <span className="line-clamp-3">{product.description_ru}</span>
            <span
              className="text-[#D3176D] cursor-pointer ml-1"
              onClick={() => setIsDescriptionOpen(true)}
            >
              Читать далее...
            </span>
          </p>

          <div className="mb-5">
            <p className="font-clashDisplay text-[30px] font-semibold text-[#FFFFFF]">
              {product.price_uzs} сум
            </p>
          </div>

          <div className="flex gap-4 mb-7">
            <button className="border-2 border-[#D3176D] text-white font-semibold text-lg w-[110px] h-[50px] hover:bg-[#D3176D] transition-colors duration-300 cursor-pointer">
              Купить
            </button>
            <button
              onClick={() => addToCart(product)}
              className="border-2 border-[#D3176D] text-white font-semibold text-lg w-[143px] h-[50px] hover:bg-[#D3176D] transition-colors duration-300 cursor-pointer"
            >
              Корзинка
            </button>
          </div>

          <div className="flex items-center gap-x-6 text-gray-400">
            <Link href="/about#delivery" className="flex items-center gap-x-2">
              <span className="border border-[#929292] w-[26px] h-[26px] flex items-center justify-center">
                <Image
                  src={DeliveryIcon}
                  alt="Доставка"
                  width={15}
                  height={11}
                />
              </span>
              <span className="text-sm">Доставка</span>
            </Link>

            <Link href="/about#question" className="flex items-center gap-x-2">
              <span className="border border-[#929292] w-[26px] h-[26px] flex items-center justify-center">
                <Image
                  src={QuestionIcon}
                  alt="Вопросы"
                  width={17}
                  height={17}
                />
              </span>
              <span className="text-sm">Задать вопрос</span>
            </Link>
            {isDescriptionOpen && (
              <div className="fixed top-0 right-0 w-full max-w-md h-full bg-[#1A1A1A] text-white shadow-lg border-l border-[#333] transition-all duration-300 z-[1010]">
                <div className="flex justify-between items-center p-4 border-b border-[#333]">
                  <h2 className="text-xl font-bold">Описание</h2>
                  <button
                    onClick={() => setIsDescriptionOpen(false)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    &times;
                  </button>
                </div>
                <div className="p-4 overflow-y-auto max-h-[calc(100vh-60px)]">
                  <p className="text-sm leading-6 text-gray-300 whitespace-pre-line">
                    {product.description_ru}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
