"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 40, suffix: "+", label: "Years Experience", icon: "🏆" },
    { number: 10000, suffix: "+", label: "Happy Customers", icon: "❤️" },
    { number: 5000, suffix: "+", label: "Unique Designs", icon: "✨" },
    { number: 100, suffix: "%", label: "Hallmarked Gold", icon: "🛡️" },
  ];

  useEffect(() => {
    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Counter animation
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out quad
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(easeProgress * end);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      // Stagger start
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, index * 200);
    });

    // GSAP card animation
    gsap.fromTo(
      ".stat-card",
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.5)",
        delay: 0.2,
      }
    );

    // Header animation
    gsap.fromTo(
      ".stats-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="stats-section relative py-16 sm:py-20 md:py-24 lg:py-[100px] px-[4%] sm:px-[5%] overflow-hidden"
      style={{ background: "#0a0e1a", fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="stats-container relative z-[1] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="stats-header text-center mb-10 sm:mb-12 md:mb-[60px]">
          <span
            className="stats-label inline-block text-[#d4a853] text-[11px] sm:text-[13px] font-semibold tracking-[3px] uppercase mb-3 sm:mb-4 px-5 sm:px-6 py-2 sm:py-[10px] rounded-full"
            style={{
              background: "rgba(212, 168, 83, 0.1)",
              border: "1px solid rgba(212, 168, 83, 0.3)",
            }}
          >
            By The Numbers
          </span>
          <h2
            className="stats-title text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.2] mb-3 sm:mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{" "}
            <span
              className="gold-text"
              style={{
                background: "linear-gradient(135deg, #d4a853 0%, #f0d78c 50%, #d4a853 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Legacy
            </span>{" "}
            in Numbers
          </h2>
          <div className="stats-title-line flex items-center justify-center gap-3 sm:gap-4">
            <span className="w-[35px] sm:w-[50px] h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(212, 168, 83, 0.6), transparent)" }}></span>
            <span className="stats-dot w-2 h-2 rounded-full bg-[#d4a853]" style={{ boxShadow: "0 0 15px rgba(212, 168, 83, 0.6)" }}></span>
            <span className="w-[35px] sm:w-[50px] h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(212, 168, 83, 0.6), transparent)" }}></span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[350px] sm:max-w-none mx-auto sm:mx-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative text-center rounded-[20px] px-5 sm:px-[25px] py-8 sm:py-10 transition-all duration-[400ms] ease-out hover:-translate-y-2.5"
              style={{
                background: "linear-gradient(145deg, #1a1f35, #121628)",
                border: "1px solid rgba(212, 168, 83, 0.25)",
                opacity: 1,
                transform: "translateY(0)",
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
                className="stat-accent-top absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] rounded-b-[4px]"
                style={{ background: "linear-gradient(90deg, transparent, #d4a853, transparent)" }}
              ></div>

              {/* Icon Circle */}
              <div
                className="stat-icon-circle w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] mx-auto mb-4 sm:mb-5 flex items-center justify-center rounded-full transition-all duration-[400ms] ease-out group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(212, 168, 83, 0.2), rgba(212, 168, 83, 0.05))",
                  border: "2px solid rgba(212, 168, 83, 0.4)",
                }}
              >
                <span className="stat-icon text-[1.6rem] sm:text-[2rem]">{stat.icon}</span>
              </div>

              {/* Number */}
              <div className="stat-number-wrapper flex items-baseline justify-center gap-[5px] mb-2 sm:mb-2.5">
                <span
                  className="stat-number text-white text-[2rem] sm:text-[2.2rem] md:text-[2.8rem] font-bold leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {counts[index].toLocaleString()}
                </span>
                <span
                  className="stat-suffix text-[#d4a853] text-[1.2rem] sm:text-[1.4rem] font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="stat-label text-white/70 text-[0.9rem] sm:text-[0.95rem] font-normal mb-4 sm:mb-5">
                {stat.label}
              </div>

              {/* Bottom Progress Bar */}
              <div className="stat-bottom-bar w-full h-[3px] rounded-[3px] overflow-hidden" style={{ background: "rgba(212, 168, 83, 0.15)" }}>
                <div
                  className="stat-progress h-full rounded-[3px] transition-[width] duration-100 ease-linear"
                  style={{
                    width: `${(counts[index] / stat.number) * 100}%`,
                    background: "linear-gradient(90deg, #d4a853, #f0d78c)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;