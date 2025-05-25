"use client";
import Image from "next/image";
import whatWeDo from "@/data/whatWeDo";

const WhatWeDoBetter = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 py-16 bg-[#1A1A1A] lg:pt-50 lg:px-40">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">
        Что мы можем лучше остальных?
      </h2>
      <div className="border-t-2 border-pink-600 w-16 mx-auto mb-12"></div>

      <div className="grid md:grid-cols-2 gap-8">
        {whatWeDo.map((item, index) => (
          <div key={index} className="bg-black flex gap-4 p-4 rounded-md">
            <Image
              src={item.image}
              alt={item.title}
              width={136}
              height={160}
              className="object-cover "
            />
            <div>
              <h3 className="text-white text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white mb-2">{item.description}</p>
              <ul className="text-sm list-disc ml-5 space-y-1 text-gray-300">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoBetter;
