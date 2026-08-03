"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-image-wrapper", {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".story-content > *", {
        x: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="story-section relative w-full py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[120px] md:blur-[180px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)" }}
      ></div>

      <div className="story-container relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
        
        {/* Image Wrapper */}
        <div className="story-image-wrapper relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          {/* Decorative Border Frame */}
          <div
            className="story-image-border absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-full h-full border border-[#d4af37]/30 rounded-sm"
            style={{ maxWidth: "calc(100% - 1rem)" }}
          ></div>

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=700&fit=crop"
            alt="Samanta Jewelry craftsmanship"
            className="story-image relative z-10 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-full h-auto object-cover rounded-sm shadow-2xl shadow-black/50"
          />

          {/* Experience Badge */}
          <div className="story-experience-badge absolute -bottom-6 sm:-bottom-8 -right-2 sm:-right-4 md:right-4 lg:-right-6 z-20 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#d4af37]/40 rounded-sm px-4 sm:px-6 py-3 sm:py-4 shadow-xl shadow-black/40 flex flex-col items-center min-w-[100px] sm:min-w-[120px]">
            <span className="badge-number text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#d4af37] leading-none">40+</span>
            <span className="badge-text text-[10px] sm:text-xs text-gray-400 text-center leading-tight mt-1 tracking-wide uppercase">
              Years of<br />Excellence
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="story-content w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <span className="story-label inline-block text-[#d4af37] text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light mb-4 sm:mb-6">
            Our Story
          </span>

          <h2 className="story-title text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-serif font-light leading-tight sm:leading-[1.15] md:leading-[1.1] text-white mb-6 sm:mb-8">
            A Legacy of <span className="gold-text text-[#d4af37] italic">Trust</span> & Craftsmanship
          </h2>

          <p className="story-text text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed sm:leading-[1.7] md:leading-[1.8] mb-4 sm:mb-5">
            Founded in 1985, Samanta Jewelry has been a symbol of trust,
            craftsmanship, and elegance for generations. What started as a small
            family business has grown into one of the most trusted names in fine
            jewellery.
          </p>

          <p className="story-text text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed sm:leading-[1.7] md:leading-[1.8]">
            For over 40 years, we have specialized in creating handcrafted gold,
            diamond, and gemstone jewelry that celebrates life&apos;s most precious
            moments. Every piece tells a story — your story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;