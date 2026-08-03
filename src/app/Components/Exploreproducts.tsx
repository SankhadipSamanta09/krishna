"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Gem,
  Gift,
  CreditCard,
  Percent,
  ShoppingBag,
  Award,
} from "lucide-react";
import Link from "next/link";

// ─── Data ───────────────────────────────────────────────
const exploreProducts = [
  {
    id: 1,
    image: "/Ex1.png",
    title: "Diamond Earrings",
    category: "Earrings",
  },
  {
    id: 2,
    image: "/Ex2.png",
    title: "Diamond Necklace Set",
    category: "Necklace",
  },
  {
    id: 3,
    image: "/Ex3.png",
    title: "Bridal Pendant Set",
    category: "Pendant",
  },
  {
    id: 4,
    image: "/Ex4.png",
    title: "Diamond Necklace Collection",
    category: "Collection",
  },
];

const trustFeatures = [
  {
    icon: Award,
    title: "100% Certified Jewellery",
    sub: "BIS Hallmarked",
  },
  {
    icon: Gem,
    title: "Platinum Certified Jewellery",
    sub: "Pure Quality",
  },
  {
    icon: Gift,
    title: "Convenient Gifting",
    sub: "Premium Packaging",
  },
  {
    icon: CreditCard,
    title: "Secure & Cashless",
    sub: "Safe Payments",
  },
  {
    icon: Percent,
    title: "Zero% Deduction",
    sub: "Best Exchange Value",
  },
  {
    icon: ShoppingBag,
    title: "Best Shopping Experience",
    sub: "Happy Customers",
  },
];

// ─── Component ──────────────────────────────────────────
export default function ExploreProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full bg-white">
      {/* ── Explore Products Section ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a3a3a] mb-4">
            Explore More Products
          </h2>
          <p className="text-sm md:text-base text-[#5a7a7a] max-w-2xl mx-auto font-light">
            Celebrate your special moments with us alluring jewellery collection.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {exploreProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-[#e8f4f4] to-[#d0e8e8]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a3a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-xs md:text-sm font-medium tracking-wider uppercase">
                      {product.category}
                    </p>
                    <p className="text-white text-sm md:text-base font-semibold mt-1">
                      {product.title}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Trust Features Strip ── */}
      <div className="bg-gradient-to-r from-[#4ecdc4] via-[#45b7aa] to-[#4ecdc4] py-8 md:py-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative mb-3 md:mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/40 rounded-full" />
                </div>

                {/* Text */}
                <h4 className="text-white text-xs md:text-sm font-semibold leading-tight mb-0.5">
                  {feature.title}
                </h4>
                <p className="text-white/70 text-[10px] md:text-xs">
                  {feature.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}