"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogNews = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.mirmakhmudoff.uz/api/news/"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Xatolik yangiliklarni olishda:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[#1A1A1A] font-clashDisplay py-10">
      <div className="w-full max-w-[1350px] mx-auto px-4 flex gap-10 relative">
        {/* Yangiliklar grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-1">
          {news.map((item, index) => {
            let displayDate = "";
            if (index === 0) displayDate = "08.03.2025";
            else if (index === 1) displayDate = "09.03.2025";
            else if (index === 2) displayDate = "10.03.2025";

            return (
              <div
                key={item.id}
                className="bg-[#111] text-white rounded overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title_ru}
                    className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                  />
                  <div className="absolute -bottom-4 border left-4 bg-pink-600 text-white text-sm font-semibold pl-1.5 py-2 w-[90px] h-[36px]">
                    {displayDate}
                  </div>
                </div>
                <div className="flex flex-col pt-6 px-4 pb-4 sm:pt-10 sm:px-5 sm:pb-5">
                  <h3 className="font-semibold text-[18px] sm:text-[20px] mb-2 line-clamp-2">
                    {item.title_ru}
                  </h3>
                  <p className="text-sm font-medium mb-3 sm:mb-4 line-clamp-3">
                    {item.description_ru}
                  </p>
                  <button
                    onClick={() => setSelectedNews(item)}
                    className="text-sm text-gray-400 underline hover:text-pink-600 flex items-center justify-start cursor-pointer"
                  >
                    Читать дальше
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fixed o'ng tomondagi podrobnee panel (ORQASI QORAYTIRMAYDI) */}
        {selectedNews && (
          <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-[#222] p-6 shadow-xl text-white overflow-y-auto z-[1005]">
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-pink-600 hover:text-pink-400 cursor-pointer"
              onClick={() => setSelectedNews(null)}
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold mb-4 mt-12">{selectedNews.title_ru}</h2>
            <p className="whitespace-pre-line">{selectedNews.description_ru}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogNews;
