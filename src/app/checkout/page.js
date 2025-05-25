// components/checkout/CheckoutPage.jsx
"use client";
import React from "react";
import Image from "next/image";
import CheckoutForm from "@/components/CheckoutForm"; // Bu yo'l to'g'ri ekanligiga ishonch hosil qiling
import { useCart } from "../../context/CartContext"; // Bu yo'l to'g'ri ekanligiga ishonch hosil qiling
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CheckoutPage = () => {
  const { cartItems, cartItemCount, clearCart } = useCart(); // clearCart ni ham olamiz

  const calculateTotalPrice = () => {
    if (!cartItems) return 0;
    return cartItems.reduce(
      (total, product) => total + product.price_uzs * product.quantity,
      0
    );
  };

  if (cartItems === null) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center">
        <p className="text-xl">Загрузка данных корзины...</p>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-[#1A1A1A] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Оформление заказа
          </h1>

          {cartItemCount > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Список товаров */}
              <div
                className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg
                           max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
              >
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-4">
                  Товары в корзине ({cartItemCount})
                </h2>
                {cartItems.map((product) => (
                  <div
                    key={product.cartId}
                    className="flex items-center mb-6 last:mb-0 border-b border-gray-600 pb-4"
                  >
                    <Image
                      width={80}
                      height={80}
                      src={product.image}
                      alt="product"
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-medium">{product.name_uz}</h3>
                      <p className="text-gray-400">
                        Количество: {product.quantity}
                      </p>
                      <p className="text-xl font-bold text-blue-400">
                        {product.price_uzs.toLocaleString()} UZS
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-6 pt-4 flex justify-between items-center">
                  <span className="text-xl font-semibold">Итого:</span>
                  <span className="text-2xl font-bold text-green-400">
                    {calculateTotalPrice().toLocaleString()} UZS
                  </span>
                </div>
              </div>

              {/* Форма заказа */}
              <CheckoutForm
                products={cartItems}
                totalPrice={calculateTotalPrice()}
                clearCart={clearCart} // <-- clearCart funksiyasini prop sifatida uzatish
              />
            </div>
          ) : (
            <p className="text-center text-xl text-gray-400">
              В корзине нет товаров. Пожалуйста, выберите товары для покупки.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
