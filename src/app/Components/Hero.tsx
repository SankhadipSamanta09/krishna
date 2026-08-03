"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Types ──────────────────────────────────────────────
interface Slide {
  id: number;
  image: string;
  alt: string;
}

// ─── Data ───────────────────────────────────────────────
const slides: Slide[] = [
  { id: 1, image: "/He1.png", alt: "Jewelry 1" },
  { id: 2, image: "/He2.png", alt: "Jewelry 2" },
  { id: 3, image: "/He3.png", alt: "Jewelry 3" },
  { id: 4, image: "/He4.png", alt: "Jewelry 4" },
  { id: 5, image: "/He5.png", alt: "Jewelry 5" },
];

const SLIDE_DURATION = 5000;

// ─── Component ──────────────────────────────────────────
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // ─── Auto-play with progress bar ──────────────────────
  useEffect(() => {
    if (isPaused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    lastTimeRef.current = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      progressRef.current += delta;
      const pct = Math.min((progressRef.current / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (progressRef.current >= SLIDE_DURATION) {
        progressRef.current = 0;
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [current, isPaused]);

  // ─── Navigation ───────────────────────────────────────
  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      progressRef.current = 0;
      setProgress(0);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
    progressRef.current = 0;
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    progressRef.current = 0;
    setProgress(0);
  }, []);

  // ─── Touch / Swipe ────────────────────────────────────
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  // ─── Keyboard ─────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // ─── Framer Motion Variants ───────────────────────────
  const easeCurve = [0.25, 0.46, 0.45, 0.94] as const;
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
  duration: 0.7,
  ease: easeCurve,
},
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
  duration: 0.7,
  ease: easeCurve,
},
    }),
  };

  return (
    <section
      className="relative w-full bg-[#0a0a0a] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* 
        ── Slider Container ──
        MOBILE (default): h-auto — photo apna natural size lega, pura dikhega
        DESKTOP (md:): fixed height — ek screen pe fit hoga
      */}
      <div className="relative w-full overflow-hidden md:h-[85vh] md:max-h-[700px]">
        {/* ── Slides ── */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slides[current].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative w-full md:absolute md:inset-0 md:w-full md:h-full"
          >
            {/* 
              MOBILE: object-contain = pura photo dikhega, koi crop nahi
              DESKTOP: object-cover = container ko pura fill karega
            */}
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain md:w-full md:h-full md:object-cover"
              sizes="100vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Navigation Arrows ── */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 hover:border-white/40 transition-all duration-300 group cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 hover:border-white/40 transition-all duration-300 group cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* ── Dots Indicator ── */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              index === current
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ── Progress Bar ── */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-white/10 z-30">
        <motion.div
          className="h-full bg-white/60"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0 }}
        />
      </div>

      {/* ── Slide Counter ── */}
      <div className="absolute bottom-4 md:bottom-6 right-3 md:right-6 z-30 text-white/40 text-[10px] md:text-xs font-light tracking-widest">
        <span className="text-white/70">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-1.5">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}