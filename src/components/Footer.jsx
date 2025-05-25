"use client";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Map from "@/assets/map.svg";

const Footer = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[#131212] font-clashDisplay">
      <div className="w-full max-w-[1200px] mx-auto bg-[#131212] px-6 py-10 text-white flex justify-between items-start flex-wrap gap-10">
        <div className="flex gap-20 flex-wrap">
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +998 97 481 00 99
              </li>
              <li className="flex items-center gap-2">
                <FaClock /> 10:00-20:00
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Ташкент, Юнусабадский район, <br /> Малая
                кольцевая дорога, 50 этаж цокольный
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Наши соц. сети</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="https://www.instagram.com/ingameuz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ingameuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaTelegramPlane /> Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative w-[507px] h-[190px]">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-[4px] border-l-[4px] border-[#D3176D]" />

          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-[4px] border-r-[4px] border-[#D3176D]" />
          <Image
            src={Map}
            alt="location map"
            width={507}
            height={190}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
