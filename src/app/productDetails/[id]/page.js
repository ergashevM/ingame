"use client";

import { useParams } from "next/navigation";
import allData from "@/data/allProducts";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProductInfo from "@/components/ProductInfo";
import SimilarProducts from "@/components/SimilarProducts";
import ClientReviews from "@/components/ClientReviews";
import Footer from "@/components/Footer";

const ProductDetails = () => {
  const { id } = useParams(); // 🛠️ to'g'ri destructuring
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    const allProducts = [
      ...allData.gamingPCs,
      ...allData.laptops,
      ...allData.accessories,
      ...allData.headsets,
      ...allData.furniture,
      ...allData.components,
      ...allData.monitors,
      ...allData.tables,
      ...allData.mouses,
      ...allData.keyboards,
    ];

    const foundProduct = allProducts.find(
      (item) => item.id.toString() === id.toString()
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="text-white text-center mt-10">
        Загрузка данных о продукте...
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto h-auto bg-[#1A1A1A]">
      <Navigation />
      <ProductInfo product={product} />
      <SimilarProducts products={allData.accessories.slice(0, 4)} />
      <ClientReviews />
      <Footer />
    </div>
  );
};

export default ProductDetails;
