"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import allData from "@/data/allProducts"; // allProducts.js dan ma'lumotlarni import qiling
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import Filter from "@/assets/filter.png";
import Basket from "@/assets/basket.svg";
import ComputerPicker from "@/components/ComputerPicker";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogNews from "@/components/BlogNews";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Loading from "@/assets/loading.gif"; // Loading GIF import qilinishi
import { useCart } from "@/context/CartContext"; // useCart hookini import qiling

const UZS_TO_USD_RATE = 12882.97; // Dollarning so'mdagi kursini aniqlaymiz

const ProductsByCategory = () => {
  const { slug } = useParams();
  const { addToCart } = useCart(); // addToCart funksiyasini useCart'dan olamiz

  const [allCategoryProducts, setAllCategoryProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true); // Yuklanish holati

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true); // Yuklanish boshlandi
    let categoryData = [];
    switch (slug) {
      case "gaming-pc":
        categoryData = allData.gamingPCs;
        break;
      case "laptops":
        categoryData = allData.laptops;
        break;
      case "accessories":
        categoryData = allData.accessories;
        break;
      case "headsets":
        categoryData = allData.headsets;
        break;
      case "furniture":
        categoryData = allData.furniture;
        break;
      case "components":
        categoryData = allData.components;
        break;
      case "monitor":
        categoryData = allData.monitors;
        break;
      case "tables":
        categoryData = allData.tables;
        break;
      case "mouse":
        categoryData = allData.mouses;
        break;
      case "keyboard":
        categoryData = allData.keyboards;
        break;
      default:
        categoryData = [];
    }

    // Har bir mahsulotga price_uzs va price_usd ni qo'shamiz
    const productsWithPrices = categoryData.map((product) => {
      // price string bo'lishi mumkin, uni raqamga aylantirish
      const priceUzsNum = parseFloat(
        product.price_uzs.toString().replace(/\s/g, "")
      );
      const oldPriceUzsNum = parseFloat(
        product.oldPriceUzs?.toString().replace(/\s/g, "") || "0"
      ); // oldPrice bo'lmasa 0 ni olamiz

      return {
        ...product,
        price_uzs: priceUzsNum,
        price_usd: (priceUzsNum / UZS_TO_USD_RATE).toFixed(2),
        old_price_uzs: oldPriceUzsNum, // eski narxni ham raqam formatida saqlash
        oldPrice_usd: (oldPriceUzsNum / UZS_TO_USD_RATE).toFixed(2), // eski narxni ham dollarda saqlash
      };
    });

    setAllCategoryProducts(productsWithPrices);
    setFilteredProducts(productsWithPrices); // Dastlabki filtrlashda ham yangi narxlar bo'lsin
    setIsLoading(false); // Yuklanish yakunlandi
  }, [slug]);

  const categoryNames = {
    "gaming-pc": "Игровые ПК",
    laptops: "Ноутбуки",
    accessories: "Аксессуары",
    headsets: "Гарнитуры",
    furniture: "Кресла",
    components: "Комплектующие",
    mouse: "Мышки",
    keyboard: "Клавиатура",
    tables: "Столы",
    monitor: "Монитор",
  };

  const handleApplyFilter = (filters) => {
    const {
      priceFrom,
      priceTo,
      brands,
      monitors,
      mouse,
      colors,
      loadCapacities,
      keyboard,
    } = filters;

    const filtered = allCategoryProducts.filter((product) => {
      // Filtrni price_uzs asosida tekshiramiz
      const priceMatch =
        (!priceFrom || product.price_uzs >= Number(priceFrom)) &&
        (!priceTo || product.price_uzs <= Number(priceTo));
      const brandMatch = brands.length === 0 || brands.includes(product.brand);
      const monitorMatch =
        monitors.length === 0 || monitors.includes(product.monitorSize);
      const mouseMatch = !mouse || product.mouseType === mouse;
      const keyboardMatch = !keyboard || product.typeKeyboard === keyboard;
      const colorMatch =
        colors.length === 0 ||
        (product.color && product.color.some((c) => colors.includes(c)));
      const capacityMatch =
        loadCapacities.length === 0 ||
        loadCapacities.includes(product.loadCapacity);
      return (
        priceMatch &&
        brandMatch &&
        monitorMatch &&
        mouseMatch &&
        colorMatch &&
        capacityMatch &&
        keyboardMatch
      );
    });

    setFilteredProducts(filtered);
    setIsFilterOpen(false);
  };

  const renderFilter = () => (
    <CategoryFilter
      category={categoryNames[slug]}
      onApply={handleApplyFilter}
    />
  );

  return (
    <div>
      <Navigation />

      {/* Mobilda filtr ochish tugmasi */}
      <div className="lg:hidden px-4 flex justify-end bg-[#1A1A1A]">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="text-white px-4 py-2 text-sm font-medium cursor-pointer flex items-center"
        >
          <Image src={Filter} alt="filter" className="w-5 h-5 mr-2" />
          Фильтр
        </button>
      </div>

      {/* Filter Sidebar (mobil) */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="fixed top-0 left-0 w-[85%] h-full z-50 bg-[#1A1A1A] p-4 overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg font-semibold">Фильтр</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="text-white w-6 h-6" />
              </button>
            </div>
            {renderFilter()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Asosiy kontent */}
      <div className="w-full max-w-[1600px] mx-auto h-auto bg-[#1A1A1A] pb-10 lg:px-30">
        {/* Breadcrumb */}
        <div className="text-white font-clashDisplay text-[16px] flex items-center gap-x-2 ml-4 sm:ml-6 lg:ml-14 mb-6">
          <Link href="/" className="opacity-80">
            Главная
          </Link>
          <span className="text-[#D3176D] text-[10px]">●</span>
          <span>{categoryNames[slug] || "Категория"}</span>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-x-6 lg:gap-x-10">
          {/* Desktop filtr */}
          <div className="hidden lg:block w-1/4">
            <CategoryFilter
              category={categoryNames[slug]}
              onApply={handleApplyFilter}
            />
          </div>

          {/* Mahsulotlar */}
          <div className="w-full h-auto">
            <h1 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl font-clashDisplay ml-4 sm:ml-6 lg:ml-0 mb-8">
              {categoryNames[slug] || "Категория"}
            </h1>
            <div className="flex flex-wrap gap-4 sm:gap-6 w-full h-auto justify-center lg:justify-start">
              {isLoading ? ( // Agar isLoading true bo'lsa, loading GIFni ko'rsatamiz
                <div className="w-full flex justify-center items-center lg:ml-0 md:ml-0 ml-5 h-64">
                  <Image
                    className="loading"
                    src={Loading}
                    alt="Loading..."
                    width={120}
                    height={120}
                  />
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="text-white text-xl font-semibold mt-10 max-w-[500px] mx-auto w-full text-center flex items-center justify-center">
                  К сожалению, в настоящее время у нас нет на складе товаров,
                  соответствующих выбранному вами ценовому диапазону или цвету.
                  😕
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[300px] max-w-[350px] h-[561px] text-white shadow-md overflow-hidden bg-[#1E1E1E] flex flex-col justify-between" // flex-col justify-between qo'shildi
                  >
                    <div className="relative w-full h-64 flex items-center justify-center mb-4">
                      <div className="absolute w-38 h-38 bg-white opacity-20 blur-2xl rounded-full"></div>
                      <Image
                        src={product.image}
                        alt="product"
                        layout="fill"
                        objectFit="contain"
                        className="p-10 mt-10" // Paddingni kamaytirish kerak bo'lishi mumkin
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      {" "}
                      {/* flex-grow qo'shildi */}
                      <h2 className="font-clashDisplay font-semibold text-[18px] sm:text-[20px] line-clamp-2">
                        {product.name_ru}
                      </h2>
                      <div className="flex flex-col mt-3 sm:mt-4 font-semibold">
                        {product.oldPriceUzs > 0 && ( // Agar oldPrice_uzs mavjud bo'lsa ko'rsatamiz
                          <p className="font-clashDisplay text-[16px] sm:text-[18px] line-through -mb-2">
                            {product.oldPriceUzs.toLocaleString("ru-RU")}{" "}
                            сум
                          </p>
                        )}
                        <p className="font-clashDisplay font-semibold text-[18px] sm:text-[20px] text-[#D3176D]">
                          {product.price_uzs.toLocaleString("ru-RU")} сум
                        </p>
                      </div>
                      <p className="text-sm font-light text-white font-clashDisplay mt-1 sm:mt-2 line-clamp-3">
                        {product.description_ru}
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-x-2 sm:gap-x-3 px-4 sm:px-5 pb-4">
                      {" "}
                      {/* Pastki padding qo'shildi */}
                      <Link href={`/productDetails/${product.id}`}>
                        <button className="border-2 sm:border-3 border-[#D3176D] w-[80px] sm:w-[90px] h-[32px] sm:h-[36px] cursor-pointer text-[12px] sm:text-sm">
                          Подробнее
                        </button>
                      </Link>
                      <button

                        className="border-2 sm:border-3 border-[#D3176D] w-[80px] sm:w-[90px] h-[32px] sm:h-[36px] cursor-pointer text-[12px] sm:text-sm"
                      >
                        Купить
                      </button>
                      <Image
                        className="border-white border w-[32px] sm:w-[36px] h-[31px] sm:h-[35px] p-1 cursor-pointer"
                        src={Basket}
                        alt="basket"
                        onClick={() => addToCart(product)} // Savat tugmasini bosganda ham mahsulot qo'shilsin
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <ComputerPicker />
      <Services />
      <Testimonials />
      <FAQ />
      <BlogNews />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ProductsByCategory;
