"use client";

import React from "react";
import Image from "next/image";

const CollectionHero = () => {
  return (
    <section className="collection-hero relative min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2c1f14] overflow-hidden flex items-center px-[8%] py-20 md:py-0">
      {/* Overlay Glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(212, 175, 55, 0.15)",
          filter: "blur(150px)",
          top: "-100px",
          right: "-100px",
        }}
      />

      <div className="relative z-[2] max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[60px]">
        {/* Hero Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block px-[18px] py-[10px] bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.3)] text-[#d4af37] rounded-[30px] mb-5 text-sm">
            ✨ Luxury Jewelry Collection
          </span>

          <h1 className="text-[2.3rem] sm:text-[3rem] lg:text-[4rem] text-white leading-[1.1] mb-5 font-bold">
            Our <span className="text-[#d4af37]">Exclusive</span> Collection
          </h1>

          <p className="text-[#cfcfcf] text-[1.05rem] sm:text-[1.1rem] leading-[1.8] max-w-[600px] mb-9 mx-auto lg:mx-0">
            Discover timeless gold, diamond, and gemstone jewelry crafted with
            perfection. Designed to celebrate elegance, beauty, and every
            special moment of your life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
            <button className="px-[35px] py-[15px] border-none bg-[#d4af37] text-[#111] text-base font-semibold rounded-full cursor-pointer transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
              Shop Now
            </button>
            <button className="px-[35px] py-[15px] bg-transparent border border-[#d4af37] text-[#d4af37] rounded-full cursor-pointer transition-all duration-[400ms] hover:bg-[#d4af37] hover:text-[#111]">
              Explore More
            </button>
          </div>

          <div className="flex flex-wrap gap-8 sm:gap-[50px] justify-center lg:justify-start">
            <div>
              <h3 className="text-[#d4af37] text-[1.5rem] sm:text-[2rem] font-bold">
                500+
              </h3>
              <span className="text-[#aaa] text-sm">Luxury Designs</span>
            </div>
            <div>
              <h3 className="text-[#d4af37] text-[1.5rem] sm:text-[2rem] font-bold">
                10K+
              </h3>
              <span className="text-[#aaa] text-sm">Happy Customers</span>
            </div>
            <div>
              <h3 className="text-[#d4af37] text-[1.5rem] sm:text-[2rem] font-bold">
                99%
              </h3>
              <span className="text-[#aaa] text-sm">
                Customer Satisfaction
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-[550px]">
            <Image
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
              alt="Luxury Jewelry"
              width={550}
              height={550}
              className="w-full h-auto rounded-[30px] object-cover shadow-[0_20px_60px_rgba(212,175,55,0.2)] transition-transform duration-500 hover:scale-[1.03]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionHero;