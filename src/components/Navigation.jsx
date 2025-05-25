// components/Navigation.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@/assets/dropdown.svg";
import RightArrow from "@/assets/rightArrow.svg";
import Comparison from "@/assets/comparison.svg";
import Search from "@/assets/search.svg";
import Basket from "@/assets/basket.svg";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/close.svg";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import ApplicationForm from "./ApplicationForm"; // ApplicationForm komponentini import qiling

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Ru");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isSticky, setIsSticky] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false); // Yangi state
  const pathname = usePathname();

  const { cartItemCount } = useCart();

  useEffect(() => {
    // Mobil menu yoki Application modal ochiq bo'lsa, body scrollini o'chirish
    if (mobileMenuOpen || showApplicationModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, showApplicationModal]); 

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    setOpenDropdown(null);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setOpenDropdown(null);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modalni yopish funksiyasi
  const closeApplicationModal = () => {
    setShowApplicationModal(false);
  };

  return (
    <>
      <div
        className={`w-full max-w-[1600px] mx-auto bg-[#1A1A1A] text-white font-clashDisplay z-[1000] ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-md" : ""
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto">
          {/* Desktop Navbar */}
          <div className="hidden lg:flex h-[80px] items-center justify-around px-6">
            {/* Left section */}
            <ul className="flex items-center gap-x-8">
              <Link href="/" className="text-[22px] font-medium text-[#D3176D]">
                InGame<span className="text-white">.uz</span>
              </Link>

              <li className="relative cursor-pointer">
                <div
                  className="flex items-center gap-1"
                  onClick={() => toggleDropdown("products")}
                  style={{
                    color: pathname.startsWith("/products")
                      ? "#D3176D"
                      : "#fff",
                  }}
                >
                  <p className="text-[20px] leading-[20px]">Продукция</p>
                  <Image
                    src={Dropdown}
                    alt="arrow"
                    className={`transition-transform duration-300 ${
                      openDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openDropdown === "products" && (
                  <div className="fixed left-1/2 top-[80px] -translate-x-1/2 w-full max-w-[1600px] bg-[#0A0A0A] text-white shadow-lg py-5 flex flex-col gap-4 z-50 pl-50">
                    {[
                      { title: "Игровые ПК", slug: "gaming-pc" },
                      { title: "Ноутбуки", slug: "laptops" },
                      { title: "Аксессуары", slug: "accessories" },
                      { title: "Гарнитуры", slug: "headsets" },
                      { title: "Кресла", slug: "furniture" },
                      { title: "Комплектующие", slug: "components" },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={`/products/${item.slug}`}
                        scroll={false}
                        className="group w-[325px] flex items-center justify-between py-1 px-5 hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer rounded-2xl"
                      >
                        <div className="flex flex-col">
                          <p
                            className="font-semibold text-base transition-colors"
                            style={{
                              color: pathname.startsWith(
                                `/products/${item.slug}`
                              )
                                ? "#D3176D"
                                : "#fff",
                            }}
                          >
                            {item.title}
                          </p>
                          <p
                            className="text-sm text-[#9D9D9D] transition-colors"
                            style={{
                              color: pathname.startsWith(
                                `/products/${item.slug}`
                              )
                                ? "#D3176D"
                                : "#9D9D9D",
                            }}
                          >
                            У нас вы найдете самые лучшие.
                          </p>
                        </div>
                        <Image
                          className="rightHover"
                          src={RightArrow}
                          alt="arrow"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li className="relative cursor-pointer">
                <div
                  className="flex items-center gap-1"
                  onClick={() => toggleDropdown("services")}
                  style={{
                    color: pathname.startsWith("/services")
                      ? "#D3176D"
                      : "#fff",
                  }}
                >
                  <p className="text-[20px] leading-[20px]">Услуги</p>
                  <Image
                    src={Dropdown}
                    alt="arrow"
                    className={`transition-transform duration-300 ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openDropdown === "services" && (
                  <ul className="fixed left-1/2 top-[80px] -translate-x-1/2 w-full max-w-[1600px] bg-[#0A0A0A] shadow-lg py-5 flex flex-col gap-4 z-50 pl-50">
                    <Link
                      href="/services/upgradeComputers"
                      className="group w-[325px] flex items-center justify-between py-1 px-5 hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer rounded-2xl"
                    >
                      <span className="flex flex-col">
                        <p
                          className="font-semibold text-base transition-colors"
                          style={{
                            color: pathname.startsWith(
                              "/services/upgradeComputers"
                            )
                              ? "#D3176D"
                              : "#fff",
                          }}
                        >
                          Апгрейд компьютеров
                        </p>
                        <p
                          className="text-sm transition-colors"
                          style={{
                            color: pathname.startsWith(
                              "/services/upgradeComputers"
                            )
                              ? "#D3176D"
                              : "#9D9D9D",
                          }}
                        >
                          Модернизатция компьютера
                        </p>
                      </span>
                      <Image
                        className="rightHover"
                        src={RightArrow}
                        alt="arrow"
                      />
                    </Link>
                    <Link
                      href="/services/computerMaintenance"
                      className="group w-[325px] flex items-center justify-between py-1 px-5 hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer rounded-2xl"
                    >
                      <span className="flex flex-col">
                        <p
                          className="font-semibold text-base group-hover:text-[#D3176D] transition-colors"
                          style={{
                            color: pathname.startsWith(
                              "/services/computerMaintenance"
                            )
                              ? "#D3176D"
                              : "#fff",
                          }}
                        >
                          Обслуживание компьютеров
                        </p>
                        <p
                          className="text-sm text-[#9D9D9D] group-hover:text-[#D3176D] transition-colors"
                          style={{
                            color: pathname.startsWith(
                              "/services/computerMaintenance"
                            )
                              ? "#D3176D"
                              : "#9D9D9D",
                          }}
                        >
                          Техническое обслуживание ПК
                        </p>
                      </span>
                      <Image
                        className="rightHover"
                        src={RightArrow}
                        alt="arrow"
                      />
                    </Link>
                  </ul>
                )}
              </li>

              <li
                className="text-[20px] cursor-pointer"
                style={{
                  color: pathname.startsWith("/about") ? "#D3176D" : "#fff",
                }}
              >
                <Link href="/about">О бренде</Link>
              </li>
            </ul>

            {/* Right section */}
            <ul className="flex items-center gap-x-5">
              {/* "Связаться" tugmasini bosilganda modalni ochish */}
              <li
                className="border px-3 py-1 text-[20px] cursor-pointer hover:bg-[#D3176D] hover:border-[#D3176D] transition-colors duration-300"
                onClick={() => setShowApplicationModal(true)} // Modalni ochish
              >
                Связаться
              </li>
              <li
                className="relative cursor-pointer"
                onClick={() => toggleDropdown("lang")}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[20px]">{selectedLang}</p>
                  <Image
                    src={Dropdown}
                    alt="arrow"
                    className={`transition-transform duration-300 ${
                      openDropdown === "lang" ? "rotate-180" : ""
                    }`}
                    width={16}
                    height={16}
                  />
                </div>
                {openDropdown === "lang" && (
                  <div className="absolute top-full right-0 mt-2 bg-white text-black p-3 rounded shadow-lg z-20">
                    <p onClick={() => handleLangChange("Uz")}>Uz</p>
                    <p onClick={() => handleLangChange("Ru")}>Ru</p>
                  </div>
                )}
              </li>

              <li
                className="relative cursor-pointer"
                onClick={() => toggleDropdown("currency")}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[20px]">{selectedCurrency}</p>
                  <Image
                    src={Dropdown}
                    alt="arrow"
                    className={`transition-transform duration-300 ${
                      openDropdown === "currency" ? "rotate-180" : ""
                    }`}
                    width={16}
                    height={16}
                  />
                </div>
                {openDropdown === "currency" && (
                  <div className="absolute top-full right-0 mt-2 bg-white text-black p-3 rounded shadow-lg z-10">
                    <p onClick={() => handleCurrencyChange("UZS")}>UZS</p>
                    <p onClick={() => handleCurrencyChange("USD")}>USD</p>
                  </div>
                )}
              </li>

              <li>
                <Image src={Comparison} alt="comparison" />
              </li>
              <Link href={`/cart`} className="relative">
                <Image src={Basket} alt="basket" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D3176D] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </ul>
          </div>

          {/* Mobile Navbar */}
          <div className="lg:hidden flex items-center justify-between h-[60px] px-4">
            <Link href="/" className="text-[20px] font-medium text-[#D3176D]">
              InGame<span className="text-white">.uz</span>
            </Link>
            <div className="flex items-center gap-4">
              <Image src={Search} alt="search" />
              <Image src={Comparison} alt="comparison" />
              <li className="relative list-none">
                <Link href={`/cart`}>
                  <Image src={Basket} alt="basket" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#D3176D] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </li>
              <button onClick={() => setMobileMenuOpen(true)}>
                <Image src={MenuIcon} alt="menu" />
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          {mobileMenuOpen && (
            <div className="fixed top-0 right-0 w-[80%] max-w-[320px] h-[514px] bg-[#0A0A0A] text-white shadow-lg p-5 z-[100] overflow-y-auto">
              <div className="flex justify-end">
                <button onClick={() => setMobileMenuOpen(false)}>
                  <Image src={CloseIcon} alt="close" />
                </button>
              </div>

              <ul className="flex flex-col mt-6 gap-4">
                {/* Продукция */}
                <li>
                  <button
                    onClick={() => toggleDropdown("mobileProducts")}
                    className="w-full flex justify-between items-center"
                  >
                    <span
                      style={{
                        color: pathname.startsWith("/products")
                          ? "#D3176D"
                          : "#fff",
                      }}
                    >
                      Продукция
                    </span>
                    <Image
                      src={Dropdown}
                      alt="toggle"
                      className={`transition-transform duration-300 ${
                        openDropdown === "mobileProducts" ? "rotate-180" : ""
                      }`}
                      width={16}
                      height={16}
                    />
                  </button>
                  {openDropdown === "mobileProducts" && (
                    <ul className="mt-2 ml-3 flex flex-col gap-2 text-sm">
                      {[
                        { item: "Игровые ПК", slug: "gaming-pc" },
                        { item: "Ноутбуки", slug: "laptops" },
                        { item: "Аксессуары", slug: "accessories" },
                        { item: "Гарнитуры", slug: "headsets" },
                        { item: "Кресла", slug: "furniture" },
                        { item: "Комплектующие", slug: "components" },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={`/products/${item.slug}`}
                          style={{
                            color: pathname.startsWith(`/products/${item.slug}`)
                              ? "#D3176D"
                              : "#9D9D9D",
                          }}
                        >
                          {item.item}
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Услуги */}
                <li>
                  <button
                    onClick={() => toggleDropdown("mobileServices")}
                    className="w-full flex justify-between items-center"
                  >
                    <span
                      style={{
                        color: pathname.startsWith("/services")
                          ? "#D3176D"
                          : "#fff",
                      }}
                    >
                      Услуги
                    </span>
                    <Image
                      src={Dropdown}
                      alt="toggle"
                      className={`transition-transform duration-300 ${
                        openDropdown === "mobileServices" ? "rotate-180" : ""
                      }`}
                      width={16}
                      height={16}
                    />
                  </button>
                  {openDropdown === "mobileServices" && (
                    <ul className="mt-2 ml-3 flex flex-col gap-2 text-sm text-[#cccccc]">
                      <Link
                        href="/services/upgradeComputers"
                        style={{
                          color: pathname.startsWith(
                            "/services/upgradeComputers"
                          )
                            ? "#D3176D"
                            : "#9D9D9D",
                        }}
                      >
                        Апгрейд компьютеров
                      </Link>
                      <Link
                        href="/services/computerMaintenance"
                        style={{
                          color: pathname.startsWith(
                            "/services/computerMaintenance"
                          )
                            ? "#D3176D"
                            : "#9D9D9D",
                        }}
                      >
                        Обслуживание компьютеров
                      </Link>
                    </ul>
                  )}
                </li>

                <Link
                  href="/about"
                  style={{
                    color: pathname.startsWith("/about") ? "#D3176D" : "#fff",
                  }}
                >
                  О бренде
                </Link>
                {/* Mobile menudagi "Связаться" tugmasi */}
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    setMobileMenuOpen(false); // Mobile menuni yopish
                    setShowApplicationModal(true); // Modalni ochish
                  }}
                >
                  Связаться
                </li>

                <li className="flex gap-x-4">
                  <button
                    onClick={() => handleLangChange("Ru")}
                    className={`px-4 py-1 transition-colors duration-200 ${
                      selectedLang === "Ru"
                        ? "bg-[#D3176D] text-white border hover:border-[#D3176D] hover:bg-black"
                        : "bg-transparent text-white border hover:border-[#D3176D] hover:bg-black"
                    }`}
                  >
                    Ru
                  </button>
                  <button
                    onClick={() => handleLangChange("Uz")}
                    className={`px-4 py-1 transition-colors duration-200 ${
                      selectedLang === "Uz"
                        ? "bg-[#D3176D] text-white border hover:border-[#D3176D] hover:bg-black"
                        : "bg-transparent text-white border hover:border-[#D3176D] hover:bg-black"
                    }`}
                  >
                    Uz
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ApplicationForm modal sifatida */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[1001] p-4 sm:p-6 md:p-8">
          <div className="relative w-full max-w-md transparent p-6 rounded-lg shadow-lg">
            {/* Modalni yopish tugmasi */}
            <button
              onClick={closeApplicationModal}
              className="absolute top-0 -right-3 text-white text-2xl font-bold p-1 rounded-full hover:bg-red-700 transition-colors duration-200 z-10 cursor-pointer"
            >
              X
            </button>
            <ApplicationForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
