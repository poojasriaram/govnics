import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Localized copies of main project high-fidelity slide assets
import heroAiDriven from "../../assets/hero-ai-driven.jpg";
import heroSoc from "../../assets/hero-soc.jpg";
import heroVerify from "../../assets/hero-verify.jpg";
import heroIntegration from "../../assets/hero-integration.jpg";
import heroDrone from "../../assets/hero-drone.jpg";
import heroFacility from "../../assets/verticals-facility.jpg";
import heroCommand from "../../assets/command_center_1.jpg";

const grcSlides = [
  {
    badge: "Command Center",
    title: "Stop Juggling GRC Tools.",
    highlight: "Start Commanding Them.",
    titleEnd: "",
    description: "One AI-powered dashboard that turns fragmented governance, risk, and compliance data into board-ready intelligence—no more spreadsheet chaos, no more blind spots.",
    outcome: "Cut GRC reporting time by 50% and eliminate audit surprises",
    icp: "CROs & Board Members at India's Top 500 Enterprises",
    cta: "Explore the Platform",
    image: heroCommand,
  },
  {
    badge: "Cyber GRC",
    title: "Your Security Team Fights Threats.",
    highlight: "Who Fights the Regulators?",
    titleEnd: "",
    description: "Bridge the gap between technical cyber defense and Indian CERT-In mandates, ISO 27001, and global standards—so your CISO sleeps at night and your auditors smile.",
    outcome: "Achieve audit readiness 3x faster with zero regulatory gaps",
    icp: "CISOs in BFSI, IT, and Critical Infrastructure",
    cta: "Secure My Network",
    image: heroSoc,
  },
  {
    badge: "ESG Advisory",
    title: "CSR Is Dead.",
    highlight: "ESG Is Your New Valuation Engine.",
    titleEnd: "",
    description: "Move beyond checkbox sustainability to investor-grade ESG reporting that drives capital allocation, stakeholder trust, and long-term enterprise value.",
    outcome: "Increase ESG scores by 40% and unlock green financing",
    icp: "CSOs & CFOs in Manufacturing Conglomerates",
    cta: "Start Your ESG Journey",
    image: heroIntegration,
  },
  {
    badge: "Managed Payroll",
    title: "Payroll Errors Cost More Than Money—",
    highlight: "They Cost Trust.",
    titleEnd: "",
    description: "Eliminate manual payroll processing, statutory remittance failures, and labor law penalties with a fully managed, zero-error payroll engine.",
    outcome: "Reduce payroll compliance costs by 30% and eliminate penalty risk",
    icp: "CHROs in Mid-Market Enterprises (500–5,000 employees)",
    cta: "Optimize Payroll Now",
    image: heroAiDriven,
  },
  {
    badge: "Compliance Staffing",
    title: "Scale Your Workforce",
    highlight: "Without Absorbing Their Liabilities.",
    titleEnd: "",
    description: "Deploy pre-vetted professionals across blue, grey, and white-collar roles while we carry 100% of statutory, labor, and compliance risk.",
    outcome: "Fill critical roles in under 21 days with zero co-employment exposure",
    icp: "HR Heads in E-Commerce, Logistics & Quick Commerce",
    cta: "Hire Talent Now",
    image: heroFacility,
  },
  {
    badge: "Labour Advisory",
    title: "India's New Labour Codes Are Here.",
    highlight: "Is Your Organization Ready?",
    titleEnd: "",
    description: "We rewrite your HR policies, contracts, and shop act registrations to align with all four new labour codes—before the enforcement hammer falls.",
    outcome: "Complete code migration in 60 days with zero disruption",
    icp: "Legal Heads in Multi-State Operations",
    cta: "Get Compliance Ready",
    image: heroVerify,
  },
  {
    badge: "DPDP & Privacy",
    title: "Your Customer Data Is an Asset.",
    highlight: "Treat It Like One.",
    titleEnd: "",
    description: "Build consent-first data architectures, automated data mapping, and breach-proof PII protection that turns DPDP compliance into competitive advantage.",
    outcome: "Prevent 100% of data breach fines and build customer trust",
    icp: "DPOs & CTOs in SaaS, HealthTech & Fintech",
    cta: "Assess Privacy Risk",
    image: heroSoc,
  },
  {
    badge: "Sector Intelligence",
    title: "Generic Compliance Advice Kills.",
    highlight: "Sector-Specific Intelligence Wins.",
    titleEnd: "",
    description: "Deep operational expertise in BFSI, Healthcare, Manufacturing, and IT regulatory landscapes—because a pharmaceutical company and a bank don't face the same risks.",
    outcome: "Decrease regulatory inquiries by 60% and accelerate market entry",
    icp: "Compliance Managers in Listed Companies & MNCs",
    cta: "View My Industry",
    image: heroDrone,
  },
];

export const GrcHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % grcSlides.length);
    }, 5500);
  }, []);

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
    setActiveIndex((prev) => (prev - 1 + grcSlides.length) % grcSlides.length);
    if (!isHovered) startAutoPlay();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    stopAutoPlay();
    setActiveIndex((prev) => (prev + 1) % grcSlides.length);
    if (!isHovered) startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
    if (!isHovered) startAutoPlay();
  };

  // Stagger variants for slide contents
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
      className="relative h-[100dvh] min-h-[600px] bg-white overflow-hidden select-none"
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
            style={{ backgroundImage: `url(${grcSlides[activeIndex].image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Double White Gradients overlay for elite light layout integration */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent/10 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />

      {/* Decorative Grid Lines to match the clean grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,82,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,82,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] z-10 pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="absolute inset-0 flex items-center pt-28 md:pt-32 lg:pt-36 z-20">
        <div className="container mx-auto px-6 md:px-12 w-full">
          <div className="max-w-5xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              className="space-y-4 md:space-y-5 flex flex-col items-start text-left"
            >
              {/* Premium GRC Badge & Target ICP */}
              <div className="flex flex-wrap items-center justify-start gap-2.5">
                <motion.div
                  variants={elementVariants}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100/90 border border-slate-200 rounded-full shadow-sm"
                >
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-extrabold text-slate-700 tracking-[0.2em] uppercase">
                    {grcSlides[activeIndex].badge}
                  </span>
                </motion.div>
                {grcSlides[activeIndex].icp && (
                  <motion.div
                    variants={elementVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/90 border border-blue-200/50 rounded-full shadow-sm"
                  >
                    <span className="text-xs font-extrabold text-blue-750 tracking-[0.03em] uppercase">
                      Target: {grcSlides[activeIndex].icp}
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Slide Heading with Highlight */}
              <motion.h1
                variants={elementVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight font-heading text-left"
              >
                {grcSlides[activeIndex].title}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent block sm:inline">
                  {grcSlides[activeIndex].highlight}
                </span>{" "}
                {grcSlides[activeIndex].titleEnd}
              </motion.h1>

              {/* Slide Description */}
              <motion.p
                variants={elementVariants}
                className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl font-sans leading-relaxed font-medium text-left"
              >
                {grcSlides[activeIndex].description}
              </motion.p>

              {/* Tangible Outcome upgraded indicator */}
              {grcSlides[activeIndex].outcome && (
                <motion.div
                  variants={elementVariants}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-50/90 border border-emerald-200/60 text-emerald-800 rounded-2xl text-xs sm:text-sm font-bold shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Outcome: {grcSlides[activeIndex].outcome}</span>
                </motion.div>
              )}

              {/* CTA Buttons */}
              <motion.div
                variants={elementVariants}
                className="flex flex-row flex-wrap items-center justify-start gap-4 pt-2 w-full"
              >
                <Link to="/contact" className="shrink-0">
                  <button className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-bold tracking-wide transition-all shadow-lg shadow-blue-500/20 hover:scale-[1.02]">
                    {grcSlides[activeIndex].cta} <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <a href="#industries" className="shrink-0">
                  <button className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-2xl text-sm font-bold tracking-wide transition-all hover:scale-[1.02]">
                    Explore Verticals
                  </button>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={elementVariants}
                className="flex flex-wrap md:flex-nowrap justify-start gap-x-5 md:gap-x-8 gap-y-3 pt-6 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 border-t border-slate-100 w-full"
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span className="text-slate-600">100% Statutory Assurance</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span className="text-slate-600">15+ Enterprise Industries</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span className="text-slate-600">SLA & Cyber Guaranteed</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>

      {/* Manual Slide Navigation Arrows */}
      <div className="absolute right-8 bottom-12 z-20 hidden md:flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 bg-white/90 hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 rounded-xl transition-all shadow-md active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 bg-white/90 hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 rounded-xl transition-all shadow-md active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Interactive Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {grcSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "w-10 bg-blue-600"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {activeIndex === index && (
              <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar showing active indicator level */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 z-20">
        <div
          className="h-full bg-blue-600 transition-all duration-700 ease-out"
          style={{ width: `${((activeIndex + 1) / grcSlides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};
