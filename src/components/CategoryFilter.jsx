"use client";
import { useState, useEffect } from "react";
import { filterConfigs } from "@/data/filterConfigs";

const CategoryFilter = ({ category, onApply }) => {
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    brands: [],
    monitors: [],
    mouse: "",
    colors: [],
    loadCapacities: [],
    keyboard: "", // Klaviatura filtri uchun state
  });

  const config = filterConfigs[category] || {}; // Get category specific filter config

  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => {
      const currentValues = prev[section];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [section]: updatedValues };
    });
  };

  const handleRadioChange = (section, value) => {
    setFilters((prev) => ({ ...prev, [section]: value }));
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    onApply(filters); // Callback to parent component
  };

  const resetFilters = () => {
    setFilters({
      priceFrom: "",
      priceTo: "",
      brands: [],
      monitors: [],
      mouse: "",
      colors: [],
      loadCapacities: [],
      keyboard: "", // Klaviatura filtrini tozalash
    });
  };

  // useEffect hook filterni tozalash uchun (agar kategoriya o'zgarsa)
  useEffect(() => {
    resetFilters();
  }, [category]);

  return (
    <div className="text-white bg-[#1E1E1E] p-4 rounded-lg w-full max-w-xs font-[family-name:var(--font-orbitron)]">
      {/* Price */}
      {config.price && (
        <>
          <h3 className="font-bold text-[14px] mb-2 font-[family-name:var(--font-orbitron)]">Цена</h3>
          <div className="flex gap-2 mb-4 font-[family-name:var(--font-orbitron)]">
            <input
              type="number"
              name="priceFrom"
              placeholder="от"
              value={filters.priceFrom}
              onChange={handlePriceChange}
              className="bg-transparent border px-2 py-1 w-full text-white text-sm"
            />
            <input
              type="number"
              name="priceTo"
              placeholder="до"
              value={filters.priceTo}
              onChange={handlePriceChange}
              className="bg-transparent border px-2 py-1 w-full text-white text-sm"
            />
          </div>
        </>
      )}

      <hr className="border-gray-600 mb-4" />

      {/* Brands */}
      {config.brands && (
        <>
          <h3 className="font-bold text-[14px] mb-2 font-[family-name:var(--font-orbitron)]">Бренды</h3>
          {config.brands.map((brand) => (
            <div key={brand} className="mb-2 font-[family-name:var(--font-orbitron)]">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleCheckboxChange("brands", brand)}
                  className="form-checkbox mr-2"
                />
                {brand}
              </label>
            </div>
          ))}
        </>
      )}

      <hr className="border-gray-600 my-4" />

      {/* Monitors */}
      {config.monitors && (
        <>
          <h3 className="font-bold text-[14px] mb-2 font-[family-name:var(--font-orbitron)]">Мониторы</h3>
          {config.monitors.map((size) => (
            <div key={size} className="mb-2 font-[family-name:var(--font-orbitron)]">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={filters.monitors.includes(size)}
                  onChange={() => handleCheckboxChange("monitors", size)}
                  className="form-checkbox mr-2"
                />
                {size}
              </label>
            </div>
          ))}
          <hr className="border-gray-600 my-4" />
        </>
      )}

      {/* Load Capacities */}
      {config.loadCapacities?.length > 0 && (
        <>
          <h3 className="font-bold text-[14px] mb-2 font-[family-name:var(--font-orbitron)]">Грузоподъемность</h3>
          {config.loadCapacities.map((capacity) => (
            <div key={capacity} className="mb-2 font-[family-name:var(--font-orbitron)]">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={filters.loadCapacities.includes(capacity)}
                  onChange={() =>
                    handleCheckboxChange("loadCapacities", capacity)
                  }
                  className="form-checkbox mr-2"
                />
                {capacity}
              </label>
            </div>
          ))}
          <hr className="border-gray-600 my-4" />
        </>
      )}

      {/* Colors */}
      {config.colors?.length > 0 && (
        <>
          <h3 className="font-bold text-[14px] mb-2 font-[family-name:var(--font-orbitron)]">Цвета</h3>
          {config.colors.map((color) => (
            <div key={color} className="mb-2 font-[family-name:var(--font-orbitron)]">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color.trim())}
                  onChange={() => handleCheckboxChange("colors", color.trim())}
                  className="form-checkbox mr-2"
                />
                {color}
              </label>
            </div>
          ))}
          <hr className="border-gray-600 my-4" />
        </>
      )}

      {/* Mouse */}
      {config.mouse && (
        <>
          <h3 className="font-bold text-[14px] mb-2 font-[family-name:var(--font-orbitron)]">Мышка</h3>
          {config.mouse.map((type) => (
            <div key={type} className="mb-2 font-[family-name:var(--font-orbitron)]">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="mouse"
                  checked={filters.mouse === type}
                  onChange={() => handleRadioChange("mouse", type)}
                  className="form-radio mr-2"
                />
                {type}
              </label>
            </div>
          ))}
          <hr className="border-gray-600 my-4" />
        </>
      )}

      {/* Keyboard */}
      {config.keyboard && (
        <>
          <h3 className="font-bold text-[14px] mb-2 font-[family-name:var(--font-orbitron)]">Тип клавиатуры</h3>
          {config.keyboard.map((type) => (
            <div key={type} className="mb-2 font-[family-name:var(--font-orbitron)]">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="keyboard"
                  checked={filters.keyboard === type}
                  onChange={() => handleRadioChange("keyboard", type)} // ✅ To'g'ri funksiya
                  className="form-radio mr-2"
                />
                {type}
              </label>
            </div>
          ))}
          <hr className="border-gray-600 my-4" />
        </>
      )}

      {/* Apply + Reset */}
      <button
        onClick={applyFilters}
        className="bg-[#FF007A] hover:bg-pink-600 text-white px-4 py-2 mt-4 w-full border-2 border-white cursor-pointer"
      >
        Применить
      </button>

      <button
        onClick={resetFilters}
        className="text-sm text-gray-400 mt-2 underline w-full"
      >
        Сбросить фильтр
      </button>
    </div>
  );
};

export default CategoryFilter;