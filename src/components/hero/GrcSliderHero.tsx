import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export interface Slide {
  badge: string;
  title: string;
  highlight: string;
  titleEnd?: string;
  description: string;
  image: string;
  icp?: string;
  outcome?: string;
  cta?: string;
}

interface GrcSliderHeroProps {
  slides: Slide[];
  backLink?: { to: string; label: string };
  categoryLabel?: string;
}

export const GrcSliderHero = ({ slides, backLink, categoryLabel = "Solution" }: GrcSliderHeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
  }, [slides.length]);

  const stopAutoPlay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isHovered, startAutoPlay, stopAutoPlay]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    stopAutoPlay();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    if (!isHovered) startAutoPlay();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    stopAutoPlay();
    setActiveIndex((prev) => (prev + 1) % slides.length);
    if (!isHovered) startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
    if (!isHovered) startAutoPlay();
  };

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const elementVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative min-h-[60dvh] md:h-[60dvh] flex items-center bg-white overflow-hidden pt-28 pb-16 md:py-0 select-none border-b border-slate-200/85"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Carousel Container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Double White Gradients overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent/10 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,82,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,82,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] z-10 pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center justify-center text-center w-full h-full">
        {backLink && (
          <div className="mb-4">
            <Link to={backLink.to}>
              <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:text-blue-600 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm">
                <ArrowLeft className="w-4 h-4" /> {backLink.label}
              </button>
            </Link>
          </div>
        )}

        <div className="max-w-3xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              className="space-y-4 md:space-y-5 flex flex-col items-center text-center"
            >
              {/* Premium GRC Badge & Target ICP */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <motion.div
                  variants={elementVariants}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100/90 border border-slate-200 rounded-full shadow-sm"
                >
                  <Shield className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[10px] sm:text-xs font-extrabold text-slate-700 tracking-[0.2em] uppercase">
                    {categoryLabel} • {slides[activeIndex].badge}
                  </span>
                </motion.div>
                {slides[activeIndex].icp && (
                  <motion.div
                    variants={elementVariants}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/90 border border-blue-200/50 rounded-full shadow-sm"
                  >
                    <span className="text-[10px] font-extrabold text-blue-750 tracking-[0.03em] uppercase">
                      Target: {slides[activeIndex].icp}
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Slide Heading with Highlight */}
              <motion.h1
                variants={elementVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.12] tracking-tight font-heading"
              >
                {slides[activeIndex].title}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent block sm:inline">
                  {slides[activeIndex].highlight}
                </span>{" "}
                {slides[activeIndex].titleEnd}
              </motion.h1>

              {/* Slide Description */}
              <motion.p
                variants={elementVariants}
                className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed font-medium"
              >
                {slides[activeIndex].description}
              </motion.p>

              {/* Tangible Outcome */}
              {slides[activeIndex].outcome && (
                <motion.div
                  variants={elementVariants}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-850 rounded-xl text-[10px] sm:text-xs font-bold shadow-sm animate-pulse-subtle"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Outcome: {slides[activeIndex].outcome}</span>
                </motion.div>
              )}

              {/* Dynamic CTA */}
              {slides[activeIndex].cta && (
                <motion.div variants={elementVariants} className="pt-2">
                  <a
                    href="#partner-form"
                    onClick={(e) => {
                      const formEl = document.getElementById("partner-form") || document.getElementById("contact-form") || document.getElementById("compliance");
                      if (formEl) {
                        e.preventDefault();
                        formEl.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-500/20 text-xs font-bold transition-all hover:scale-[1.02]"
                  >
                    {slides[activeIndex].cta}
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <div className="absolute right-8 bottom-12 z-20 hidden md:flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 rounded-xl transition-all shadow-md active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 rounded-xl transition-all shadow-md active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Interactive Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`relative h-1.5 rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "w-8 bg-blue-600"
                : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {activeIndex === index && (
              <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 z-20">
        <div
          className="h-full bg-blue-600 transition-all duration-700 ease-out"
          style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};
