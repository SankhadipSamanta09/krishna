"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}

const ContactUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    gsap.fromTo(
      ".contact-header > *",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".contact-info-card",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      ".contact-form-wrapper",
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.4,
      }
    );
  }, [isVisible]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: "📍",
      title: "Visit Our Store",
      details: ["123 Jewelry Lane, Mumbai", "Maharashtra, India 400001"],
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 98765 43210", "+91 1800 123 4567 (Toll Free)"],
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["care@krishnajewelry.com", "support@krishnajewelry.com"],
    },
    {
      icon: "🕐",
      title: "Store Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="contact-section relative py-[120px] px-[5%] min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #070b14 0%, #0a0f1e 50%, #070b14 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(212, 168, 83, 0.03) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(184, 134, 11, 0.02) 0%, transparent 40%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(212, 168, 83, 0.08) 0%, transparent 70%)",
          top: "-200px",
          right: "-100px",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139, 90, 43, 0.06) 0%, transparent 70%)",
          bottom: "-150px",
          left: "-100px",
          filter: "blur(120px)",
        }}
      />

      {/* Floating Particles */}
      <div
        className="absolute text-[rgba(212,168,83,0.3)] pointer-events-none"
        style={{
          top: "15%",
          left: "8%",
          fontSize: "18px",
          textShadow: "0 0 20px rgba(212, 168, 83, 0.5)",
          animation: "particleFloat1 8s ease-in-out infinite",
        }}
      >
        ✦
      </div>
      <div
        className="absolute text-[rgba(212,168,83,0.3)] pointer-events-none"
        style={{
          top: "60%",
          right: "12%",
          fontSize: "14px",
          textShadow: "0 0 20px rgba(212, 168, 83, 0.5)",
          animation: "particleFloat2 10s ease-in-out infinite",
        }}
      >
        ✦
      </div>
      <div
        className="absolute text-[rgba(212,168,83,0.3)] pointer-events-none"
        style={{
          bottom: "25%",
          left: "15%",
          fontSize: "16px",
          textShadow: "0 0 20px rgba(212, 168, 83, 0.5)",
          animation: "particleFloat3 12s ease-in-out infinite",
        }}
      >
        ✦
      </div>

      <div className="relative z-[1] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="contact-header text-center mb-[70px]">
          <span className="inline-flex items-center gap-2 text-[#d4a853] text-xs font-semibold tracking-[4px] uppercase mb-5 px-7 py-2.5 bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.2)] rounded-full backdrop-blur-[10px]">
            Get In Touch
          </span>
          <h2
            className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold leading-[1.1] mb-[15px] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact{" "}
            <span className="bg-gradient-to-br from-[#d4a853] via-[#f0d78c] to-[#d4a853] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-[1.05rem] leading-[1.7] max-w-[500px] mx-auto mb-6 font-light">
            We&apos;d love to hear from you. Reach out for inquiries, appointments, or
            just to say hello.
          </p>
          <div className="flex items-center justify-center gap-[15px]">
            <span className="w-[50px] h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.5)] to-transparent" />
            <span className="w-2 h-2 bg-[#d4a853] rounded-full shadow-[0_0_15px_rgba(212,168,83,0.6)]" />
            <span className="w-[50px] h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.5)] to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[50px] mb-20">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-5">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="contact-info-card relative flex items-start gap-5 bg-gradient-to-br from-[rgba(25,30,50,0.9)] to-[rgba(15,20,40,0.95)] border border-[rgba(212,168,83,0.15)] rounded-[20px] p-[25px] overflow-hidden transition-all duration-[400ms] hover:translate-x-2.5 hover:border-[rgba(212,168,83,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(212,168,83,0.08)] group"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <div className="relative w-[55px] h-[55px] flex items-center justify-center flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[rgba(212,168,83,0.2)] to-[rgba(212,168,83,0.05)] border-2 border-[rgba(212,168,83,0.3)] rounded-2xl transition-all duration-[400ms] group-hover:rotate-0 group-hover:scale-110 group-hover:rounded-full"
                    style={{ transform: "rotate(45deg)" }}
                  />
                  <span className="relative z-[2] text-2xl transition-transform duration-[400ms] group-hover:scale-[1.2]">
                    {info.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-[1.15rem] font-semibold text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-[rgba(255,255,255,0.6)] text-[0.9rem] leading-[1.7] m-0">
                      {detail}
                    </p>
                  ))}
                </div>
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.03)] to-transparent transition-[left] duration-[600ms] pointer-events-none group-hover:left-full" />
              </div>
            ))}

            {/* Social Links */}
            <div className="mt-2.5 p-[25px] bg-gradient-to-br from-[rgba(25,30,50,0.9)] to-[rgba(15,20,40,0.95)] border border-[rgba(212,168,83,0.15)] rounded-[20px] text-center">
              <span className="block text-[rgba(255,255,255,0.6)] text-[0.85rem] font-medium uppercase tracking-[3px] mb-4">
                Follow Us
              </span>
              <div className="flex justify-center gap-4">
                {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-[45px] h-[45px] flex items-center justify-center bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.2)] rounded-full text-xl no-underline transition-all duration-[400ms] hover:bg-gradient-to-br hover:from-[#d4a853] hover:to-[#b8860b] hover:border-transparent hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_10px_25px_rgba(212,168,83,0.3)]"
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrapper relative bg-gradient-to-br from-[rgba(25,30,50,0.95)] to-[rgba(15,20,40,0.98)] border border-[rgba(212,168,83,0.2)] rounded-[24px] p-10 overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent"
            />

            <div className="mb-[30px]">
              <h3
                className="text-[1.5rem] font-semibold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send a Message
              </h3>
              <p className="text-[rgba(255,255,255,0.5)] text-[0.9rem] font-light">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-[0.85rem] font-medium mb-2 tracking-[0.5px]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(212,168,83,0.15)] rounded-xl px-[18px] py-[14px] text-white text-[0.95rem] outline-none transition-all duration-300 focus:border-[rgba(212,168,83,0.5)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_20px_rgba(212,168,83,0.1)] placeholder:text-[rgba(255,255,255,0.3)]"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-[0.85rem] font-medium mb-2 tracking-[0.5px]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(212,168,83,0.15)] rounded-xl px-[18px] py-[14px] text-white text-[0.95rem] outline-none transition-all duration-300 focus:border-[rgba(212,168,83,0.5)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_20px_rgba(212,168,83,0.1)] placeholder:text-[rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-[0.85rem] font-medium mb-2 tracking-[0.5px]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(212,168,83,0.15)] rounded-xl px-[18px] py-[14px] text-white text-[0.95rem] outline-none transition-all duration-300 focus:border-[rgba(212,168,83,0.5)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_20px_rgba(212,168,83,0.1)] placeholder:text-[rgba(255,255,255,0.3)]"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-[0.85rem] font-medium mb-2 tracking-[0.5px]">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(212,168,83,0.15)] rounded-xl px-[18px] py-[14px] text-white text-[0.95rem] outline-none transition-all duration-300 focus:border-[rgba(212,168,83,0.5)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_20px_rgba(212,168,83,0.1)] cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23d4a853' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 18px center",
                    }}
                  >
                    <option value="">Select subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="exchange">Gold Exchange</option>
                    <option value="custom">Custom Design</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-[rgba(255,255,255,0.7)] text-[0.85rem] font-medium mb-2 tracking-[0.5px]">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us what you need..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(212,168,83,0.15)] rounded-xl px-[18px] py-[14px] text-white text-[0.95rem] outline-none transition-all duration-300 focus:border-[rgba(212,168,83,0.5)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_20px_rgba(212,168,83,0.1)] placeholder:text-[rgba(255,255,255,0.3)] resize-y min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                className="relative flex items-center justify-center gap-3 bg-gradient-to-br from-[#d4a853] to-[#b8860b] text-[#0a0e1a] border-none px-10 py-4 rounded-full text-base font-semibold cursor-pointer overflow-hidden transition-all duration-[400ms] uppercase tracking-[1.5px] mt-2.5 hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(212,168,83,0.4)] group"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <span className="relative z-10">
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[5px]">
                  →
                </span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent transition-[left] duration-500 group-hover:left-full" />
                <span className="absolute inset-[-5px] bg-gradient-to-br from-[#d4a853] via-[#f0d78c] to-[#d4a853] rounded-full opacity-0 blur-[15px] -z-[1] transition-opacity duration-[400ms] group-hover:opacity-40" />
              </button>
            </form>

            {/* Success Message */}
            {submitted && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(10,14,26,0.95)] rounded-[24px]"
                style={{
                  animation: "contactFadeIn 0.5s ease forwards",
                }}
              >
                <span className="text-[4rem] mb-4">✓</span>
                <p className="text-white text-[1.2rem] font-medium">
                  Thank you! We&apos;ll contact you soon.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10">
          <div className="relative bg-gradient-to-br from-[rgba(25,30,50,0.9)] to-[rgba(15,20,40,0.95)] border border-[rgba(212,168,83,0.15)] rounded-[20px] p-[15px] overflow-hidden group">
            <div className="absolute top-[15px] left-[15px] w-[25px] h-[25px] border-t-2 border-l-2 border-[rgba(212,168,83,0.3)] z-[5] transition-all duration-[400ms] group-hover:w-[35px] group-hover:h-[35px] group-hover:border-[rgba(212,168,83,0.6)]" />
            <div className="absolute top-[15px] right-[15px] w-[25px] h-[25px] border-t-2 border-r-2 border-[rgba(212,168,83,0.3)] z-[5] transition-all duration-[400ms] group-hover:w-[35px] group-hover:h-[35px] group-hover:border-[rgba(212,168,83,0.6)]" />
            <div className="absolute bottom-[15px] left-[15px] w-[25px] h-[25px] border-b-2 border-l-2 border-[rgba(212,168,83,0.3)] z-[5] transition-all duration-[400ms] group-hover:w-[35px] group-hover:h-[35px] group-hover:border-[rgba(212,168,83,0.6)]" />
            <div className="absolute bottom-[15px] right-[15px] w-[25px] h-[25px] border-b-2 border-r-2 border-[rgba(212,168,83,0.3)] z-[5] transition-all duration-[400ms] group-hover:w-[35px] group-hover:h-[35px] group-hover:border-[rgba(212,168,83,0.6)]" />
            <div className="h-[250px] flex flex-col items-center justify-center bg-gradient-to-br from-[rgba(212,168,83,0.05)] to-[rgba(15,20,40,0.5)] rounded-xl gap-2.5">
              <span className="text-5xl">🗺️</span>
              <p
                className="text-white text-[1.3rem] font-semibold m-0"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Store Location Map
              </p>
              <span className="text-[rgba(255,255,255,0.5)] text-[0.9rem]">
                123 Jewelry Lane, Mumbai
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;