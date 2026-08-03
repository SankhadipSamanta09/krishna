"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".cta-buttons button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".cta-buttons",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cta-section relative w-full py-20 sm:py-24 md:py-32 lg:py-40 px-[4%] sm:px-[5%] overflow-hidden flex items-center justify-center"
      style={{ background: "#0a0e1a", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Orb */}
      <div
        className="cta-bg-orb absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] sm:blur-[120px] md:blur-[160px] opacity-15 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(212, 168, 83, 0.4) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Particles */}
      <div className="cta-particles absolute inset-0 pointer-events-none z-0">
        <span className="absolute w-1 h-1 rounded-full bg-[#d4a853]/30" style={{ top: "15%", left: "10%" }}></span>
        <span className="absolute w-1.5 h-1.5 rounded-full bg-[#d4a853]/20" style={{ top: "25%", right: "15%" }}></span>
        <span className="absolute w-1 h-1 rounded-full bg-[#d4a853]/25" style={{ top: "60%", left: "8%" }}></span>
        <span className="absolute w-2 h-2 rounded-full bg-[#d4a853]/15" style={{ bottom: "20%", right: "12%" }}></span>
        <span className="absolute w-1 h-1 rounded-full bg-[#d4a853]/20" style={{ bottom: "35%", left: "20%" }}></span>
      </div>

      {/* Content */}
      <div className="cta-content relative z-10 text-center max-w-3xl mx-auto">
        <span
          className="cta-label inline-block text-[#d4a853] text-[11px] sm:text-[13px] font-semibold tracking-[3px] uppercase mb-4 sm:mb-5 px-5 sm:px-6 py-2 sm:py-[10px] rounded-full"
          style={{
            background: "rgba(212, 168, 83, 0.1)",
            border: "1px solid rgba(212, 168, 83, 0.3)",
          }}
        >
          Begin Your Journey
        </span>

        <h2
          className="cta-title text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.2] mb-4 sm:mb-5 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready To Find Your{" "}
          <span
            className="gold-text"
            style={{
              background: "linear-gradient(135deg, #d4a853 0%, #f0d78c 50%, #d4a853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Perfect Jewelry
          </span>
          ?
        </h2>

        <p className="cta-desc text-white/60 text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-[1.8] font-light max-w-xl mx-auto mb-8 sm:mb-10">
          Explore our latest collection today and discover pieces that speak to your soul.
        </p>

        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            className="cta-btn-primary w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold tracking-wide uppercase rounded-full text-[#0a0e1a] transition-all duration-[400ms] ease-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,168,83,0.4)] active:scale-95"
            style={{
              background: "linear-gradient(135deg, #d4a853 0%, #f0d78c 50%, #d4a853 100%)",
            }}
          >
            View Collection
          </button>
          <button
            className="cta-btn-secondary w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold tracking-wide uppercase rounded-full text-[#d4a853] transition-all duration-[400ms] ease-out hover:bg-[#d4a853]/10 hover:scale-105 active:scale-95"
            style={{
              background: "transparent",
              border: "2px solid rgba(212, 168, 83, 0.5)",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;