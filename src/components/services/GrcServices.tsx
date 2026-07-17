import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/services-data";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const GrcServices = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Governance & Risk Advisory", "Audit & Assurance", "Digital Trust & Cybersecurity"];

  const filteredServices = filter === "All"
    ? servicesData
    : servicesData.filter(serv => serv.category === filter);

  return (
    <section id="services" className="py-8 bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full">
              Specialized GRC Offerings
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
              Our Service Ecosystem
            </h2>
            <p className="text-slate-650 text-base leading-relaxed max-w-2xl mx-auto">
              We design and coordinate audit checklists, data privacy frameworks, industrial safety registers, and network cybersecurity architectures to secure your operational resilience.
            </p>
          </div>

          {/* Dynamic Filter Categories buttons */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-white text-slate-600 hover:text-blue-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((serv) => (
              <motion.div
                key={serv.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-slate-200/80 hover:border-blue-500/30 rounded-3xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-500/5 p-8"
              >
                {/* Visual hover spotlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-6 relative z-10">
                  {/* Category Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase">
                      {serv.category}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {serv.standards.slice(0, 2).map((std, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[9px] font-bold text-slate-500 uppercase">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {serv.title}
                  </h3>

                  {/* Problem & Solution block */}
                  <div className="space-y-3.5 pt-2">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> The Problem
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                        {serv.problem}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> The Govenics Solution
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                        {serv.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Benefits Bulletpoints */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Expected Business Benefits:
                    </div>
                    <ul className="space-y-1.5">
                      {serv.benefits.map((ben, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer linking to ServiceDetailPage */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-3 relative z-10">
                  <div className="flex flex-wrap gap-1">
                    {serv.industries.slice(0, 2).map((indId) => (
                      <span key={indId} className="px-2 py-0.5 bg-blue-500/5 text-blue-400/80 rounded text-[9px] font-bold uppercase tracking-wider border border-blue-500/10">
                        {indId.replace("-", " ")}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to="/contact"
                      id={`service-card-experts-${serv.id}`}
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[10px] font-bold tracking-wide transition-all shadow-md shadow-blue-500/15 hover:scale-[1.02]"
                    >
                      Talk To Experts
                    </Link>
                    <Link
                      to={`/services/${serv.id}`}
                      className="flex items-center gap-1 text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
