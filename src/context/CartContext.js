// context/CartContext.jsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (e) {
          console.error("Failed to parse cart items from localStorage", e);
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && cartItems !== null) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // addToCart funksiyasini qayta o'zgartiramiz
  const addToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      // Mahsulotning noyobligini tekshirish uchun bir nechta maydonlarni solishtiramiz
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === productToAdd.id && // id bir xil bo'lsa
          item.name_uz === productToAdd.name_uz && // nomi ham bir xil bo'lsa
          item.price_uzs === productToAdd.price_uzs // narxi ham bir xil bo'lsa
          // Agar mahsulotda boshqa muhim noyob xususiyatlar bo'lsa (masalan, 'color', 'size', 'sku'), ularni ham shu yerga qo'shing
      );

      if (existingItemIndex > -1) {
        // Agar bir xil (id, name_uz, price_uzs) kombinatsiyaga ega mahsulot topilsa, miqdorini oshiramiz
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        // Agar buncha xususiyati bilan bir xil mahsulot topilmasa, uni yangi element sifatida qo'shamiz
        return [...prevItems, { ...productToAdd, cartId: uuidv4(), quantity: 1 }];
      }
    });
  };

  const removeFromCart = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId)
    );
  };

  const increaseQuantity = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (cartId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.cartId === cartId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
