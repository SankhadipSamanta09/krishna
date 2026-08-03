"use client";

import React from "react";

const WhyChooseUs = () => {
  const features = [
    { icon: "💎", title: "Certified Jewelry", desc: "Every piece comes with authentic certification guaranteeing purity and quality." },
    { icon: "🏆", title: "40+ Years Experience", desc: "Four decades of expertise in crafting exquisite jewellery masterpieces." },
    { icon: "🔄", title: "Old Gold Exchange", desc: "Get the best market value for your old gold and upgrade to new designs." },
    { icon: "✨", title: "Handcrafted Designs", desc: "Each piece is meticulously handcrafted by our master artisans." },
    { icon: "🛡️", title: "Hallmarked Gold", desc: "BIS hallmarked gold ensuring the highest standards of purity." },
    { icon: "❤️", title: "10,000+ Happy Customers", desc: "A growing family of satisfied customers who trust us." },
  ];

  return (
    <section
      className="wc-section relative py-16 sm:py-20 md:py-24 lg:py-[100px] px-[4%] sm:px-[5%] overflow-hidden"
      style={{ background: "#0a0e1a", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(212, 168, 83, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(139, 90, 43, 0.05) 0%, transparent 50%)",
        }}
      ></div>

      {/* Background Orbs */}
      <div
        className="wc-orb orb-1 absolute rounded-full pointer-events-none z-0"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(212, 168, 83, 0.12) 0%, transparent 70%)",
          top: "-150px",
          right: "-100px",
          filter: "blur(100px)",
        }}
      ></div>
      <div
        className="wc-orb orb-2 absolute rounded-full pointer-events-none z-0"
        style={{
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(139, 90, 43, 0.08) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-100px",
          filter: "blur(100px)",
        }}
      ></div>

      {/* Floating Particles */}
      <div className="wc-particle p-1 absolute pointer-events-none z-0" style={{ top: "10%", left: "8%", fontSize: "18px", color: "rgba(212, 168, 83, 0.4)" }}>✦</div>
      <div className="wc-particle p-2 absolute pointer-events-none z-0" style={{ top: "25%", right: "12%", fontSize: "12px", color: "rgba(212, 168, 83, 0.4)" }}>✦</div>
      <div className="wc-particle p-3 absolute pointer-events-none z-0" style={{ top: "60%", left: "5%", fontSize: "16px", color: "rgba(212, 168, 83, 0.4)" }}>✦</div>
      <div className="wc-particle p-4 absolute pointer-events-none z-0" style={{ bottom: "20%", right: "8%", fontSize: "14px", color: "rgba(212, 168, 83, 0.4)" }}>✦</div>
      <div className="wc-particle p-5 absolute pointer-events-none z-0" style={{ bottom: "35%", left: "15%", fontSize: "10px", color: "rgba(212, 168, 83, 0.4)" }}>✦</div>

      <div className="wc-container relative z-[1] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="wc-header text-center mb-12 sm:mb-16 md:mb-20">
          <span
            className="wc-label inline-flex items-center gap-2 text-[#d4a853] text-[11px] sm:text-[13px] font-semibold tracking-[3px] uppercase mb-4 sm:mb-5 px-5 sm:px-6 py-2 sm:py-[10px] rounded-full"
            style={{
              background: "rgba(212, 168, 83, 0.1)",
              border: "1px solid rgba(212, 168, 83, 0.3)",
            }}
          >
            Why Choose Us
          </span>
          <h2
            className="wc-title text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.2] mb-3 sm:mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The <span
              className="gold-text"
              style={{
                background: "linear-gradient(135deg, #d4a853 0%, #f0d78c 50%, #d4a853 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >Krishna</span> Difference
          </h2>
          <p className="wc-subtitle text-white/60 text-sm sm:text-base leading-[1.7] max-w-[500px] mx-auto font-light">
            We don&apos;t just sell jewellery — we create heirlooms that last generations
          </p>
        </div>

        {/* Cards Grid */}
        <div className="wc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[400px] sm:max-w-none mx-auto sm:mx-0">
          {features.map((f, i) => (
            <div
              className="wc-card group relative text-center rounded-[20px] px-6 sm:px-[30px] py-8 sm:py-10 transition-all duration-[400ms] ease-out hover:-translate-y-2.5 z-[1]"
              key={i}
              style={{
                background: "linear-gradient(145deg, rgba(30, 35, 55, 0.9), rgba(20, 25, 45, 0.95))",
                border: "1px solid rgba(212, 168, 83, 0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(212, 168, 83, 0.5)";
                el.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 168, 83, 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(212, 168, 83, 0.2)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top gold line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] rounded-b-[4px] opacity-80"
                style={{ background: "linear-gradient(90deg, transparent, #d4a853, transparent)" }}
              ></div>

              {/* Icon */}
              <div
                className="wc-icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] mx-auto mb-4 sm:mb-5 flex items-center justify-center rounded-2xl transition-all duration-[400ms] ease-out group-hover:rotate-0 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(212, 168, 83, 0.15), rgba(212, 168, 83, 0.05))",
                  border: "2px solid rgba(212, 168, 83, 0.3)",
                  transform: "rotate(45deg)",
                }}
              >
                <span
                  className="wc-icon-inner text-[1.6rem] sm:text-[2rem] transition-all duration-[400ms] ease-out group-hover:rotate-0 group-hover:scale-[1.2]"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  {f.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                className="wc-card-title text-white text-[1.1rem] sm:text-[1.25rem] font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {f.title}
              </h3>

              {/* Description */}
              <p className="wc-card-desc text-white/65 text-[0.85rem] sm:text-[0.9rem] leading-[1.7] font-light mb-4 sm:mb-5">
                {f.desc}
              </p>

              {/* Footer */}
              <div className="wc-card-footer flex items-center justify-center gap-2.5">
                <div className="wc-footer-line w-[40px] h-[1px]" style={{ background: "rgba(212, 168, 83, 0.4)" }}></div>
                <span className="wc-footer-number text-[#d4a853]/80 text-[0.8rem] font-bold tracking-[2px]">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decor */}
        <div className="wc-bottom-decor flex items-center justify-center gap-5 mt-12 sm:mt-16 md:mt-20">
          <div className="wc-decor-line w-[60px] sm:w-[80px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(212, 168, 83, 0.4), transparent)" }}></div>
          <span className="wc-decor-icon text-[1.2rem] sm:text-[1.5rem] text-[#d4a853]">💎</span>
          <div className="wc-decor-line w-[60px] sm:w-[80px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(212, 168, 83, 0.4), transparent)" }}></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;