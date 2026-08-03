"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const values = [
    {
      title: "Trust",
      points: ["Transparent pricing", "Certified products"],
    },
    {
      title: "Quality",
      points: ["Premium craftsmanship", "Finest materials"],
    },
    {
      title: "Customer First",
      points: ["Personalized service", "Lifetime support"],
    },
  ];

  useEffect(() => {
    // Intersection Observer — reliable trigger
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Header animation
    gsap.fromTo(
      ".mission-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    // Quote animation
    gsap.fromTo(
      ".mission-statement",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Cards animation — fromTo se start value fixed
    gsap.fromTo(
      ".values-card",
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.5)",
        delay: 0.4,
      }
    );
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="mission-section relative py-16 sm:py-20 md:py-24 lg:py-[100px] px-[4%] sm:px-[5%] overflow-hidden"
      style={{ background: "#0a0e1a", fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="mission-container relative z-[1] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mission-header text-center mb-10 sm:mb-12 md:mb-[50px]">
          <span
            className="mission-label inline-block text-[#d4a853] text-[11px] sm:text-[13px] font-semibold tracking-[3px] uppercase mb-3 sm:mb-4 px-5 sm:px-6 py-2 sm:py-[10px] rounded-full"
            style={{
              background: "rgba(212, 168, 83, 0.1)",
              border: "1px solid rgba(212, 168, 83, 0.3)",
            }}
          >
            Our Purpose
          </span>
          <h2
            className="mission-title text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.2] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mission &{" "}
            <span
              className="gold-text"
              style={{
                background: "linear-gradient(135deg, #d4a853 0%, #f0d78c 50%, #d4a853 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Values
            </span>
          </h2>
        </div>

        {/* Mission Statement */}
        <div
          className="mission-statement relative max-w-[800px] mx-auto mb-10 sm:mb-12 md:mb-[60px] px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-[50px] rounded-3xl text-center"
          style={{
            background: "linear-gradient(145deg, #1a1f35, #121628)",
            border: "1px solid rgba(212, 168, 83, 0.2)",
          }}
        >
          <div
            className="mission-quote-mark text-[3rem] sm:text-[3.5rem] md:text-[4rem] leading-none mb-3 sm:mb-4 opacity-80"
            style={{
              color: "#d4a853",
              textShadow: "0 0 20px rgba(212, 168, 83, 0.3)",
            }}
          >
            ❝
          </div>
          <p
            className="mission-text text-white text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] leading-[1.8] italic m-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            To create timeless jewelry that combines tradition, craftsmanship, and
            modern elegance while maintaining complete transparency and trust.
          </p>
        </div>

        {/* Values Grid */}
        <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[400px] sm:max-w-none mx-auto sm:mx-0">
          {values.map((item, index) => (
            <div
              key={index}
              className="values-card group relative rounded-[20px] px-6 sm:px-[30px] py-8 sm:py-10 overflow-hidden transition-all duration-[400ms] ease-out hover:-translate-y-2.5"
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
              {/* Top Accent Line */}
              <div
                className="values-card-accent absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] rounded-b-[4px]"
                style={{ background: "linear-gradient(90deg, transparent, #d4a853, transparent)" }}
              ></div>

              {/* Title */}
              <h3
                className="values-card-title text-white text-[1.3rem] sm:text-[1.5rem] font-semibold mb-4 sm:mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>

              {/* List */}
              <ul className="values-card-list list-none p-0 m-0">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-white/70 text-[0.9rem] sm:text-[0.95rem] leading-[2.2] flex items-center gap-3"
                  >
                    <span className="values-check text-[#d4a853] font-bold text-[1.1rem] flex-shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Number */}
              <div
                className="values-card-number absolute bottom-[15px] right-5 text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-black leading-none"
                style={{ color: "rgba(212, 168, 83, 0.08)" }}
              >
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;