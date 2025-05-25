"use client";
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import BannerSlider from "@/components/Banners";
import Category from "@/components/Category";
import Desktops from "@/components/Desktops";
import NewProducts from "@/components/NewProducts";
import ComputerPicker from "@/components/ComputerPicker";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogNews from "@/components/BlogNews";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Image from "next/image";
import Loading from "@/assets/loading.gif"; // Loading GIF import qilinishi

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Bu yerda sizning API dan ma'lumot olish logikangiz bo'lishi kerak
    // Misol uchun:
    const fetchData = async () => {
      try {
        // await Promise.all([
        //   fetch('/api/banners'),
        //   fetch('/api/categories'),
        //   // ... boshqa API so'rovlari
        // ]);
        // Agar barcha ma'lumotlar yuklansa, setIsLoading(false) ni chaqiring
        // Hozircha sun'iy kechikish bilan simulyatsiya qilamiz
        setTimeout(() => {
          setIsLoading(false);
        }, 2000); // 2 soniyadan keyin yuklanishni to'xtatamiz
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik:", error);
        setIsLoading(false); // Xatolik yuz berganda ham loadingni to'xtatamiz
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navigation />
      {isLoading ? (
        <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center bg-[#1A1A1A]">
          <Image className="loading" src={Loading} alt="Loading..." width={120} height={120} />
        </div>
      ) : (
        <div>
          <BannerSlider />
          <Category />
          <Desktops />
          <NewProducts />
          <ComputerPicker />
          <Services />
          <Testimonials />
          <FAQ />
          <BlogNews />
          <CallToAction />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;