"use client";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/assets/loading.gif";
import { useCart } from "@/context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const CartItemsTable = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  // Loading holati: cartItems hali ma'lumot olmagan (null yoki undefined)
  if (!cartItems) {
    return (
      <div className="w-full max-w-[1600px] mx-auto flex justify-center items-center h-auto bg-[#1A1A1A]">
        <Image
          className="loading"
          src={Loading}
          alt="Loading..."
          width={120}
          height={120}
        />
      </div>
    );
  }

  // Agar savat bo'sh bo'lsa (ya'ni array bo'sh)
  if (cartItems.length === 0) {
    return (
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-40 pb-20 bg-[#1A1A1A] text-white text-center py-20">
        <p className="text-lg mb-6">У вас пока нет товаров в корзине.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded text-white font-semibold transition"
        >
          Вернуться на главную
        </Link>
      </div>
    );
  }

  // Agar ma'lumot mavjud bo'lsa, umumiy summani hisoblaymiz
  const total = cartItems.reduce(
    (acc, item) => acc + item.price_uzs * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-40 pb-20 bg-[#1A1A1A]">
      {/* Breadcrumb */}
      <div className="text-white font-clashDisplay text-sm sm:text-base flex items-center gap-x-2 mb-6">
        <Link href="/" className="opacity-70">
          Главная
        </Link>
        <span className="text-[#D3176D] text-[10px]">●</span>
        <span className="text-white font-semibold">Корзина</span>
      </div>

      {/* Table Header for Large Screens */}
      <div className="hidden lg:grid grid-cols-4 gap-4 text-[#D1D1D1] bg-[#2D2D2D] py-3 px-4 font-semibold text-sm">
        <span>Товар</span>
        <span className="lg:ml-20">Наличие</span>
        <span>Количество</span>
        <span>Цена</span>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div
          key={item.cartId}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 border-b border-[#D3176D] py-6 px-2 sm:px-4"
        >
          {/* Товар */}
          <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-300 pb-5 lg:border-b-0 lg:pb-0">
            <span className="lg:hidden text-[#D1D1D1] block mb-1 font-extrabold">
              Товар:
            </span>
            <div className="md:flex md:items-center">
              <Image src={item.image} alt="product" width={100} height={100} />
              <div>
                <p className="text-white text-sm lg:text-base font-semibold lg:mt-0 mt-2">
                  {item.name_ru}
                </p>
                <p className="text-[#CCCCCC] font-[family-name:var(--font-orbitron)] text-sm">
                  {item.quantity}x
                </p>
              </div>
            </div>
          </div>

          {/* Наличие */}
          <div className="text-white text-sm lg:text-base lg:ml-20 border-b border-gray-300 pb-5 lg:border-b-0 lg:pb-0">
            <span className="lg:hidden text-[#D1D1D1] block mb-1 font-extrabold">
              Наличие:
            </span>
            Заказ
            <br />
            <span className="text-[#CCCCCC] text-sm">4-7 дней</span>
          </div>

          {/* Количество */}
          <div className="border-b border-gray-300 pb-5 lg:border-b-0 lg:pb-0">
            <span className="lg:hidden text-[#D1D1D1] block mb-1 font-extrabold">
              Количество:
            </span>
            <div className="flex items-center font-[family-name:var(--font-orbitron)]">
              <button
                onClick={() => decreaseQuantity(item.cartId)}
                className="w-[25px] h-[30px] bg-[#2D2D2D] text-white flex items-center justify-center cursor-pointer"
              >
                -
              </button>
              <span className="w-[25px] h-[30px] bg-[#262626] text-white flex items-center justify-center">
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQuantity(item.cartId)}
                className="w-[25px] h-[30px] bg-[#2D2D2D] text-white flex items-center justify-center cursor-pointer"
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.cartId)}>
                <FaTrashAlt className="cursor-pointer ml-5 text-red-500" />
              </button>
            </div>
          </div>

          {/* Цена */}
          <div className="text-white font-clashDisplay text-sm lg:text-base font-semibold">
            <span className="lg:hidden text-[#D1D1D1] block mb-1 font-extrabold">
              Цена:
            </span>
            {(item.price_uzs * item.quantity).toLocaleString()} сум
          </div>
        </div>
      ))}

      {/* Total Summary */}
      <div className="max-w-[500px] ml-auto mt-10 bg-black p-4 sm:p-6 h-fit">
        <div className="flex justify-between items-center text-base sm:text-lg mb-4 sm:mb-6">
          <span className="text-white font-bold text-[16px] sm:text-[18px] leading-[20px]">
            Итого:
          </span>
          <span className="font-clashDisplay text-white font-semibold text-[18px] sm:text-[20px] leading-[20px]">
            {total.toLocaleString()} сум
          </span>
        </div>
        <Link href="/checkout">
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 sm:py-3 font-semibold transition cursor-pointer">
            Продолжить
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItemsTable;
