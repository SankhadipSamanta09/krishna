"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".about-hero-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".about-hero-title span",
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
          },
          "-=0.5"
        )
        .from(
          ".about-hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".about-hero-line",
          {
            scaleX: 0,
            duration: 1,
            transformOrigin: "left",
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="about-hero relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0d0d0d]"
    >
      {/* Background Orbs */}
      <div className="about-hero-bg absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="about-hero-orb orb-1 absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[120px] md:blur-[160px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
        ></div>
        <div
          className="about-hero-orb orb-2 absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px] opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
            bottom: "-15%",
            right: "-10%",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="about-hero-content relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
        <span className="about-hero-label inline-block text-[#d4af37] text-xs sm:text-sm md:text-base tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light mb-6 sm:mb-8">
          ✦ About Krishna Jewelry
        </span>

        <h1 className="about-hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight sm:leading-[1.1] md:leading-[1.05] mb-6 sm:mb-8">
          <span className="block text-white">Crafting</span>
          <span className="block text-white">Timeless</span>
          <span className="gold-text block text-[#d4af37] italic">Elegance</span>
          <span className="block text-white">Since 1985</span>
        </h1>

        <p className="about-hero-subtitle text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide max-w-2xl mx-auto mb-8 sm:mb-10">
          A legacy of trust, craftsmanship, and unparalleled beauty
        </p>

        <div className="about-hero-line w-24 sm:w-32 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="about-hero-scroll absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <div className="scroll-mouse w-6 h-10 sm:w-7 sm:h-11 border border-[#d4af37]/40 rounded-full flex justify-center pt-2">
          <div className="scroll-wheel w-[3px] h-[6px] sm:w-[4px] sm:h-[8px] bg-[#d4af37] rounded-full animate-bounce"></div>
        </div>
        <span className="text-[#d4af37]/60 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default AboutHero;