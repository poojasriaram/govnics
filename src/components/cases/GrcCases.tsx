import { useState } from "react";
import { casesData } from "@/data/cases-data";
import { ChevronLeft, ChevronRight, FileCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const GrcCases = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? casesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === casesData.length - 1 ? 0 : prev + 1));
  };

  const activeCase = casesData[activeIndex];

  return (
    <section id="cases" className="py-14 bg-blue-50/35 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full">
              Proven Client Success
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
              Govenics GRC in Action
            </h2>
            <p className="text-slate-655 text-slate-600 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              Discover how we help national banks, factory networks, and healthcare centers audit controls and establish digital trust.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-500/30 transition-all shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-500/30 transition-all shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Case Study Card Panel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-2xl gap-8"
            >
              {/* Left Case Description (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-wider rounded-full">
                    {activeCase.industry} Case Study
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                  {activeCase.title}
                </h3>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> The Challenge
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      {activeCase.challenge}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> The Solution
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                {/* Audit Key results list */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Key Outcomes:
                  </div>
                  <ul className="space-y-2">
                    {activeCase.results.map((res, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2.5 leading-relaxed font-semibold">
                        <FileCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Big Metrics (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center gap-6 lg:border-l lg:border-slate-100 lg:pl-10">
                {activeCase.metrics.map((met, i) => (
                  <div
                    key={i}
                    className="p-6 bg-slate-50 border border-slate-150 rounded-2xl text-center space-y-1.5 hover:border-blue-500/20 hover:bg-white transition-all duration-300 shadow-sm"
                  >
                    <div className="text-3xl md:text-4xl font-black text-blue-600 tabular-nums">
                      {met.value}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      {met.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
