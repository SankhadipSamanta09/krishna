"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-header > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-header",
          start: "top 80%",
        },
      });

      gsap.from(".team-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="team-section relative w-full py-20 sm:py-24 md:py-32 lg:py-40 px-[4%] sm:px-[5%] overflow-hidden"
      style={{ background: "#0a0e1a", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[120px] md:blur-[180px] opacity-10 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(212, 168, 83, 0.3) 0%, transparent 70%)" }}
      ></div>

      <div className="team-container relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="team-header text-center mb-12 sm:mb-16 md:mb-20">
          <span
            className="team-label inline-block text-[#d4a853] text-[11px] sm:text-[13px] font-semibold tracking-[3px] uppercase mb-3 sm:mb-4 px-5 sm:px-6 py-2 sm:py-[10px] rounded-full"
            style={{
              background: "rgba(212, 168, 83, 0.1)",
              border: "1px solid rgba(212, 168, 83, 0.3)",
            }}
          >
            Leadership
          </span>
          <h2
            className="team-title text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.2] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet the{" "}
            <span
              className="gold-text"
              style={{
                background: "linear-gradient(135deg, #d4a853 0%, #f0d78c 50%, #d4a853 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Founder
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="team-grid flex justify-center">
          <div
            className="team-card team-card-featured group relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] rounded-[24px] overflow-hidden transition-all duration-[400ms] ease-out hover:-translate-y-2.5"
            style={{
              background: "linear-gradient(145deg, #1a1f35, #121628)",
              border: "1px solid rgba(212, 168, 83, 0.25)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(212, 168, 83, 0.5)";
              el.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 168, 83, 0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(212, 168, 83, 0.25)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Top Gold Line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] rounded-b-[4px] z-20"
              style={{ background: "linear-gradient(90deg, transparent, #d4a853, transparent)" }}
            ></div>

            {/* Image Wrapper - FIX: / se start kiya path */}
            <div className="team-card-image-wrapper relative w-full aspect-[3/4] overflow-hidden">
              <img
                src="/Sankhadip.jpg"  // ✅ FIX: / se start kiya
                alt="Mr. Samanta"
                className="team-card-image w-full h-full object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="team-card-overlay absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to top, rgba(10, 14, 26, 0.95) 0%, rgba(10, 14, 26, 0.4) 40%, transparent 70%)",
                }}
              ></div>

              {/* Shine Effect */}
              <div
                className="team-card-shine absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(212, 168, 83, 0.1) 45%, rgba(212, 168, 83, 0.2) 50%, rgba(212, 168, 83, 0.1) 55%, transparent 60%)",
                  backgroundSize: "200% 200%",
                }}
              ></div>
            </div>

            {/* Info */}
            <div className="team-card-info relative z-30 -mt-20 sm:-mt-24 px-6 sm:px-8 pb-8 sm:pb-10 text-center">
              <h3
                className="team-card-name text-white text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mr. Samanta
              </h3>
              <span
                className="team-card-role inline-block text-[#d4a853] text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-4 sm:mb-5 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(212, 168, 83, 0.1)",
                  border: "1px solid rgba(212, 168, 83, 0.3)",
                }}
              >
                Founder & Master Craftsman
              </span>
              <p className="team-card-desc text-white/70 text-sm sm:text-base leading-[1.7] sm:leading-[1.8] font-light">
                With over 40 years of experience in fine jewellery craftsmanship,
                Mr. Samanta has built a legacy of trust, quality, and timeless
                elegance. His vision continues to guide every piece we create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;