"use client";

import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const ProductGrid = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Royal Gold Necklace",
      category: "Gold",
      price: "₹2,45,000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
    },
    {
      id: 2,
      name: "Diamond Ring",
      category: "Diamond",
      price: "₹1,85,000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    },
    {
      id: 3,
      name: "Luxury Earrings",
      category: "Earrings",
      price: "₹95,000",
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800",
    },
    {
      id: 4,
      name: "Wedding Bracelet",
      category: "Wedding",
      price: "₹1,25,000",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    },
    {
      id: 5,
      name: "Diamond Necklace",
      category: "Diamond",
      price: "₹3,50,000",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800",
    },
    {
      id: 6,
      name: "Gold Ring",
      category: "Gold",
      price: "₹75,000",
      image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800",
    },
    {
      id: 7,
      name: "Premium Bracelet",
      category: "Bracelets",
      price: "₹1,10,000",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
    },
    {
      id: 8,
      name: "Luxury Wedding Set",
      category: "Wedding",
      price: "₹4,99,000",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    },
  ];

  return (
    <section className="product-section px-[8%] py-[100px] bg-[#0d0d0d]">
      <div className="text-center mb-[60px]">
        <span className="text-[#d4af37] uppercase tracking-[3px] text-sm">
          Our Collection
        </span>
        <h2 className="text-[2.2rem] sm:text-[3rem] text-white my-[15px]">
          Featured Jewelry
        </h2>
        <p className="text-[#bfbfbf] max-w-[650px] mx-auto leading-[1.8]">
          Discover handcrafted luxury jewelry designed with elegance,
          perfection, and timeless beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card bg-[#151515] rounded-[20px] overflow-hidden transition-all duration-[400ms] border border-[#222] hover:-translate-y-2.5 hover:border-[#d4af37] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={320}
                className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              />

              <span className="absolute top-[15px] left-[15px] bg-[#d4af37] text-[#111] px-[15px] py-[8px] rounded-[30px] text-xs font-semibold">
                {product.category}
              </span>

              <button className="absolute top-[15px] right-[15px] w-10 h-10 border-none rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-[8px] text-white cursor-pointer text-lg transition-all duration-300 hover:bg-[#d4af37] hover:text-[#111] flex items-center justify-center">
                ♥
              </button>
            </div>

            <div className="p-[25px]">
              <h3 className="text-white text-[1.2rem] mb-[15px]">
                {product.name}
              </h3>

              <div className="flex justify-between items-center mb-5">
                <span className="text-[#d4af37] text-[1.4rem] font-bold">
                  {product.price}
                </span>
              </div>

              <button className="w-full py-[14px] border-none bg-[#d4af37] text-[#111] font-semibold rounded-xl cursor-pointer transition-all duration-[400ms] hover:bg-[#f5c84c] hover:-translate-y-0.5">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;