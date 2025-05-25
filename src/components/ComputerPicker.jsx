"use client";
import { useState } from "react";

const ComputerPicker = () => {
  const [activeTab, setActiveTab] = useState("price");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [toggles, setToggles] = useState({
    game: false,
    compact: false,
    forGames: false,
  });

  const tabs = [
    { id: "price", label: "По цене" },
    { id: "gpu", label: "По видеокарте" },
    { id: "cpu", label: "По процессору" },
  ];

  const optionsByTab = {
    price: [
      { id: 0, price: "5 550 000 сум" },
      { id: 1, price: "6 200 000 сум" },
      { id: 2, price: "7 000 000 сум" },
      { id: 3, price: "7 850 000 сум" },
      { id: 4, price: "8 500 000 сум" },
      { id: 5, price: "9 200 000 сум" },
      { id: 6, price: "10 000 000 сум" },
      { id: 7, price: "11 300 000 сум" },
    ],
    gpu: [
      { id: 0, price: "RTX 3050 - 6 500 000 сум" },
      { id: 1, price: "RTX 3060 - 8 000 000 сум" },
      { id: 2, price: "RTX 4060 - 9 200 000 сум" },
      { id: 3, price: "RTX 4070 - 12 000 000 сум" },
      { id: 4, price: "RTX 4080 - 17 000 000 сум" },
      { id: 5, price: "RTX 4090 - 25 000 000 сум" },
    ],
    cpu: [
      { id: 0, price: "Core i5 - 6 000 000 сум" },
      { id: 1, price: "Core i7 - 8 200 000 сум" },
      { id: 2, price: "Core i9 - 12 500 000 сум" },
      { id: 3, price: "Ryzen 5 - 6 500 000 сум" },
      { id: 4, price: "Ryzen 7 - 8 800 000 сум" },
      { id: 5, price: "Ryzen 9 - 11 900 000 сум" },
    ],
  };

  const handleOptionClick = (index) => {
    setSelectedOptions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleSwitch = (name) => {
    setToggles((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const options = optionsByTab[activeTab];

  return (
    <div className="w-full max-w-[1600px] mx-auto h-auto bg-[#0F0F0F] text-white py-15 text-center">
      <h2 className="text-3xl font-bold mb-6 font-clashDisplay">Подберем компьютер</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-4 text-lg font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-1 font-clashDisplay ${
              activeTab === tab.id ? "text-white" : "text-gray-400"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-500" />
            )}
          </button>
        ))}
      </div>

      {/* Options */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 max-w-4xl mx-auto font-clashDisplay">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={`cursor-pointer border-2 px-4 py-2 text-sm font-bold ${
              selectedOptions.includes(option.id)
                ? "border-pink-500 text-white"
                : "border-gray-500 text-white"
            }`}
          >
            от {option.price}
          </div>
        ))}
      </div>

      {/* Toggles */}
      <div className="flex justify-center gap-6 mb-6 items-center">
        <Toggle
          label="Игровые"
          active={toggles.game}
          onClick={() => toggleSwitch("game")}
        />
        <Toggle
          label="Компактные"
          active={toggles.compact}
          onClick={() => toggleSwitch("compact")}
        />
        <Toggle
          label="По играм"
          active={toggles.forGames}
          onClick={() => toggleSwitch("forGames")}
        />
      </div>

      {/* Done Button */}
      <button className="bg-pink-600 hover:bg-pink-700 text-white text-xl font-bold w-[242px] h-[52px] cursor-pointer">
        Готово
      </button>
    </div>
  );
};

const Toggle = ({ label, active, onClick }) => (
  <div className="flex items-center gap-2">
    <div
      onClick={onClick}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        active ? "bg-pink-500" : "bg-gray-700"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
          active ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
    <span>{label}</span>
  </div>
);

export default ComputerPicker;
