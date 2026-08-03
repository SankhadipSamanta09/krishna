"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

// ─── Types ──────────────────────────────────────────────
interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  isNew?: boolean;
}

// ─── Data ───────────────────────────────────────────────
const products: Product[] = [
  { id: 1, image: "/Yc1.png", name: "Divine Rath Diamond Pendant", price: 20882, originalPrice: 23681, discount: 16, isNew: true },
  { id: 2, image: "/Yc2.png", name: "Blessed Lord Jagannath Diamond", price: 22908, originalPrice: 26383, discount: 13 },
  { id: 3, image: "/Yc3.png", name: "Blessed Conch Diamond Pendant", price: 23631, originalPrice: 26773, discount: 12 },
  { id: 4, image: "/Yc4.png", name: "Devotional Jagannath Diamond", price: 29230, originalPrice: 33070, discount: 12 },
  { id: 5, image: "/Yc5.png", name: "Sacred Temple Gold Pendant", price: 18999, originalPrice: 21999, discount: 14, isNew: true },
  { id: 6, image: "/Yc6.png", name: "Divine Lotus Diamond Pendant", price: 25499, originalPrice: 28999, discount: 12 },
  { id: 7, image: "/Yc7.png", name: "Spiritual Om Gold Pendant", price: 16500, originalPrice: 18999, discount: 13 },
  { id: 8, image: "/Yc8.png", name: "Heritage Peacock Diamond", price: 32150, originalPrice: 36500, discount: 12 },
  { id: 9, image: "/Yc9.png", name: "Traditional Temple Jewellery", price: 27800, originalPrice: 31500, discount: 12, isNew: true },
  { id: 10, image: "/Yc10.png", name: "Sacred Shankh Gold Pendant", price: 19800, originalPrice: 22500, discount: 12 },
  { id: 11, image: "/Yc11.png", name: "Divine Chakra Diamond", price: 26750, originalPrice: 30400, discount: 12 },
  { id: 12, image: "/Yc12.png", name: "Blessed Ganesha Gold Pendant", price: 22300, originalPrice: 25400, discount: 10 },
  { id: 13, image: "/Yc13.png", name: "Heritage Mahadev Diamond", price: 34500, originalPrice: 39200, discount: 12, isNew: true },
  { id: 14, image: "/Yc14.png", name: "Spiritual Nandi Gold Pendant", price: 18600, originalPrice: 21200, discount: 12 },
  { id: 15, image: "/Yc15.png", name: "Divine Krishna Diamond", price: 28900, originalPrice: 32800, discount: 12 },
  { id: 16, image: "/Yc16.png", name: "Sacred Tulsi Gold Pendant", price: 17500, originalPrice: 19900, discount: 19 },
  { id: 17, image: "/Yc17.png", name: "Oviform Gold Dangler Earrings", price: 31500, originalPrice: 35800, discount: 12, isNew: true },
  { id: 18, image: "/Yc18.png", name: "Pretty Wheel Beauty Diamond Studs", price: 47800, originalPrice: 77500, discount: 12 },
  { id: 19, image: "/Yc19.png", name: "Neela Chakra Diamond Pendant", price: 54800, originalPrice: 92500, discount: 12 },
  { id: 20, image: "/Yc20.png", name: "Gleam of Almighty Gold Pendant", price: 36499, originalPrice: 68999, discount: 13, isNew: true },
  
];

// ─── Format Price ───────────────────────────────────────
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

// ─── Component ──────────────────────────────────────────
export default function YatraCollection() {
  const { addToCart, cartItems } = useCart();
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Check if item is already in cart
  const isInCart = (id: number) => cartItems.some((item) => item.id === id);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleAddToCart = (product: Product) => {
    if (!isInCart(product.id)) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        quantity: 1,
        category: "Yatra",
      });
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#faf8f5] to-[#f5f0e8] py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-[#8b6914] text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Divine Heritage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2c1810] tracking-wide mb-4">
            Yatra Collection
          </h2>
          <div className="w-20 h-[1px] bg-[#8b6914] mx-auto mb-4" />
          <p className="text-[#6b5b4f] text-sm md:text-base max-w-lg mx-auto font-light">
            Sacred designs inspired by spiritual journeys and timeless devotion
          </p>
        </motion.div>

        {/* ── Products Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#e8e0d5]"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* ── Image Container ── */}
              <div className="relative aspect-square bg-gradient-to-b from-[#faf8f5] to-white p-3 md:p-4">
                {/* New Badge */}
                {product.isNew && (
                  <span className="absolute top-2 left-2 z-10 bg-[#8b6914] text-white text-[10px] md:text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full tracking-wider uppercase font-medium">
                    New
                  </span>
                )}

                {/* Discount Badge */}
                <span className="absolute top-2 right-2 z-10 bg-[#c41e3a] text-white text-[10px] md:text-xs px-2 py-0.5 md:px-2 md:py-0.5 rounded-full font-medium">
                  -{product.discount}%
                </span>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-2 ${product.isNew ? "left-14 md:left-16" : "left-2"} z-20 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    wishlist.has(product.id)
                      ? "bg-[#c41e3a] text-white shadow-md"
                      : "bg-white/80 backdrop-blur-sm text-[#8b6914] hover:bg-[#c41e3a] hover:text-white shadow-sm"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className="w-3.5 h-3.5 md:w-4 md:h-4"
                    fill={wishlist.has(product.id) ? "currentColor" : "none"}
                  />
                </button>

                {/* Product Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                {/* Hover Overlay with Quick View */}
                <AnimatePresence>
                  {hoveredId === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/5 flex items-center justify-center"
                    >
                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2c1810] shadow-lg hover:bg-[#8b6914] hover:text-white transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Product Info ── */}
              <div className="p-3 md:p-4 pt-2 md:pt-3">
                {/* Product Name */}
                <h3 className="text-[11px] md:text-sm font-medium text-[#2c1810] mb-1.5 md:mb-2 line-clamp-2 leading-tight min-h-[2rem] md:min-h-[2.5rem]">
                  {product.name}
                </h3>

                {/* Price Section */}
                <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                  <span className="text-sm md:text-base font-bold text-[#c41e3a]">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-[10px] md:text-xs text-[#9e9e9e] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-2 md:py-2.5 rounded-lg md:rounded-xl flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                    isInCart(product.id)
                      ? "bg-green-600 text-white cursor-default"
                      : "bg-[#f5f0e8] text-[#2c1810] hover:bg-[#8b6914] hover:text-white border border-[#e8e0d5] hover:border-[#8b6914]"
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {isInCart(product.id) ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── View All Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 md:mt-16"
        >
          <button className="px-8 py-3 md:px-10 md:py-3.5 bg-[#2c1810] text-white rounded-full text-sm md:text-base tracking-widest uppercase font-medium hover:bg-[#8b6914] transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}