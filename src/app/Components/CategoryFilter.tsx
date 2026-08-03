"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  badge: string | null;
}

const CategoryFilter = () => {
  const [category, setCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    "All",
    "Gold",
    "Diamond",
    "Rings",
    "Necklaces",
    "Earrings",
    "Bracelets",
    "Wedding",
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Royal Gold Ring",
      category: "Gold",
      price: "₹45,999",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Diamond Crown Ring",
      category: "Diamond",
      price: "₹1,25,000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
      badge: "New",
    },
    {
      id: 3,
      name: "Luxury Necklace",
      category: "Necklaces",
      price: "₹89,999",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
      badge: null,
    },
    {
      id: 4,
      name: "Wedding Bracelet",
      category: "Wedding",
      price: "₹67,500",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
      badge: "Popular",
    },
    {
      id: 5,
      name: "Diamond Earrings",
      category: "Earrings",
      price: "₹34,999",
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=500",
      badge: "New",
    },
    {
      id: 6,
      name: "Gold Bracelet",
      category: "Bracelets",
      price: "₹78,000",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
      badge: null,
    },
    {
      id: 7,
      name: "Luxury Diamond Necklace",
      category: "Diamond",
      price: "₹2,45,000",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500",
      badge: "Premium",
    },
    {
      id: 8,
      name: "Royal Wedding Ring",
      category: "Rings",
      price: "₹95,999",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
      badge: "Bestseller",
    },
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((item) => item.category === category);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    gsap.fromTo(
      ".category-section .section-header > *",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".filter-btn",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, [isVisible]);

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { y: 30, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.2)",
      }
    );
  }, [category]);

  const getBadgeClass = (badge: string | null) => {
    switch (badge?.toLowerCase()) {
      case "bestseller":
        return "bg-gradient-to-br from-[#d4a853] to-[#b8860b] text-[#0a0e1a]";
      case "new":
        return "bg-gradient-to-br from-[#4ade80] to-[#22c55e] text-[#0a0e1a]";
      case "popular":
        return "bg-gradient-to-br from-[#f472b6] to-[#ec4899] text-white";
      case "premium":
        return "bg-gradient-to-br from-[#a78bfa] to-[#8b5cf6] text-white";
      default:
        return "";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="category-section relative py-[120px] px-[5%] bg-[#070b14] overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(212, 168, 83, 0.04) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(184, 134, 11, 0.03) 0%, transparent 40%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(212, 168, 83, 0.08) 0%, transparent 70%)",
          top: "-100px",
          right: "-100px",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(139, 90, 43, 0.06) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-100px",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-[1] max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="section-header text-center mb-[60px]">
          <span className="inline-block text-[#d4a853] text-xs font-semibold tracking-[4px] uppercase mb-[15px] px-7 py-2.5 bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.2)] rounded-full">
            Luxury Collection
          </span>
          <h2
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white leading-[1.2] mb-[15px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Browse By{" "}
            <span className="bg-gradient-to-br from-[#d4a853] via-[#f0d78c] to-[#d4a853] bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-[1.05rem] leading-[1.7] max-w-[550px] mx-auto mb-6 font-light">
            Discover our premium handcrafted jewelry collections designed for
            elegance and timeless beauty.
          </p>
          <div className="flex items-center justify-center gap-[15px]">
            <span className="w-[50px] h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.5)] to-transparent" />
            <span className="w-2 h-2 bg-[#d4a853] rounded-full shadow-[0_0_15px_rgba(212,168,83,0.6)]" />
            <span className="w-[50px] h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.5)] to-transparent" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-[50px]">
          {categories.map((item) => (
            <button
              key={item}
              className={`filter-btn relative px-7 py-3 rounded-full text-[0.9rem] font-medium tracking-[0.5px] cursor-pointer overflow-hidden transition-all duration-[400ms] ${
                category === item
                  ? "bg-gradient-to-br from-[#d4a853] to-[#b8860b] text-[#0a0e1a] font-semibold shadow-[0_10px_30px_rgba(212,168,83,0.3)] border-transparent"
                  : "bg-[rgba(255,255,255,0.03)] border border-[rgba(212,168,83,0.15)] text-[rgba(255,255,255,0.7)] hover:border-[rgba(212,168,83,0.4)] hover:text-[#f0d78c] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              }`}
              style={{
                transitionTimingFunction:
                  "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              onClick={() => setCategory(item)}
            >
              <span className="relative z-10">{item}</span>
              {category === item && (
                <span
                  className="absolute inset-[-2px] bg-gradient-to-br from-[#d4a853] via-[#f0d78c] to-[#d4a853] rounded-full opacity-50 blur-[8px] -z-[1]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px]">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card relative bg-gradient-to-br from-[rgba(25,30,50,0.9)] to-[rgba(15,20,40,0.95)] border border-[rgba(212,168,83,0.1)] rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[rgba(212,168,83,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(212,168,83,0.08)]"
              style={{
                transitionTimingFunction:
                  "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(212,168,83,0.06)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />

              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-[15px] left-[15px] px-3.5 py-1.5 rounded-[20px] text-[0.7rem] font-semibold uppercase tracking-[1px] z-10 ${getBadgeClass(
                    product.badge
                  )}`}
                >
                  {product.badge}
                </div>
              )}

              {/* Image Box */}
              <div className="relative p-[15px]">
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Frame Corners */}
                  <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-[rgba(212,168,83,0.3)] z-[5] transition-all duration-[400ms] group-hover:w-[30px] group-hover:h-[30px] group-hover:border-[rgba(212,168,83,0.6)]" />
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-[rgba(212,168,83,0.3)] z-[5] transition-all duration-[400ms] group-hover:w-[30px] group-hover:h-[30px] group-hover:border-[rgba(212,168,83,0.6)]" />
                  <div className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-[rgba(212,168,83,0.3)] z-[5] transition-all duration-[400ms] group-hover:w-[30px] group-hover:h-[30px] group-hover:border-[rgba(212,168,83,0.6)]" />
                  <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-[rgba(212,168,83,0.3)] z-[5] transition-all duration-[400ms] group-hover:w-[30px] group-hover:h-[30px] group-hover:border-[rgba(212,168,83,0.6)]" />

                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={280}
                    className="w-full h-[280px] object-cover block transition-transform duration-[600ms] hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,14,26,0.8)] to-transparent pointer-events-none" />
                </div>

                {/* Card Actions */}
                <div
                  className={`absolute top-[25px] right-[25px] flex flex-col gap-2.5 z-10 transition-all duration-[400ms] ${
                    hoveredCard === product.id
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2.5"
                  }`}
                >
                  <button className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(10,14,26,0.8)] text-white text-[1.1rem] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-[#d4a853] hover:to-[#b8860b] hover:border-transparent hover:scale-110 backdrop-blur-[10px]">
                    ♡
                  </button>
                  <button className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(10,14,26,0.8)] text-white text-[1.1rem] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-[#d4a853] hover:to-[#b8860b] hover:border-transparent hover:scale-110 backdrop-blur-[10px]">
                    👁
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="px-5 pb-6 relative z-[2]">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[#d4a853] text-[0.75rem] font-semibold uppercase tracking-[2px] px-3 py-1 bg-[rgba(212,168,83,0.1)] rounded-[20px]">
                    {product.category}
                  </span>
                  <span className="text-[#f0d78c] text-[1.1rem] font-bold">
                    {product.price}
                  </span>
                </div>
                <h3
                  className="text-[1.15rem] font-semibold text-white mb-2 leading-[1.3]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#d4a853] text-[0.9rem] tracking-[2px]">
                    ★★★★★
                  </span>
                  <span className="text-[rgba(255,255,255,0.5)] text-[0.8rem]">
                    (128)
                  </span>
                </div>
                <button className="relative w-full flex items-center justify-center gap-2.5 bg-transparent border border-[rgba(212,168,83,0.3)] text-[#d4a853] px-5 py-3 rounded-full text-[0.85rem] font-semibold cursor-pointer overflow-hidden transition-all duration-[400ms] uppercase tracking-[1px] hover:bg-gradient-to-br hover:from-[#d4a853] hover:to-[#b8860b] hover:border-transparent hover:text-[#0a0e1a] hover:shadow-[0_10px_30px_rgba(212,168,83,0.3)] group/btn">
                  <span className="relative z-10">View Details</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-[5px]">
                    →
                  </span>
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transition-[left] duration-500 group-hover/btn:left-full" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-[60px]">
          <button className="relative inline-flex items-center gap-3 bg-gradient-to-br from-[#d4a853] to-[#b8860b] text-[#0a0e1a] border-none px-10 py-4 rounded-full text-[0.95rem] font-semibold cursor-pointer overflow-hidden transition-all duration-[400ms] uppercase tracking-[1.5px] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,168,83,0.4)]"
            style={{
              transitionTimingFunction:
                "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <span className="relative z-10">View All Collections</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;