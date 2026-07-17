import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { industriesData } from "@/data/industries-data";
import { Shield, ArrowRight, Star } from "lucide-react";


export const GrcIndustries = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"challenges" | "regulations">("challenges");
  const [activeCluster, setActiveCluster] = useState<string>("Manufacturing & Industrial");

  const clusters = [
    "Manufacturing & Industrial",
    "Technology & Electronics",
    "Infrastructure & Construction",
    "Energy & Utilities",
    "Financial Services",
    "Healthcare & Life Sciences",
    "Consumer & Retail",
    "Media & Services"
  ];

  const getClusterId = (name: string) => {
    return name.toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-");
  };

  const filteredIndustries = industriesData.filter(
    (ind) => ind.cluster === activeCluster
  );

  return (
    <section id="industries" className="py-8 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
            Industry Verticals
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
            Securing 40+ Industry Sectors
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            We deliver targeted governance frameworks, audit controls, and risk consulting calibrated specifically for your industry cluster's compliance demands.
          </p>
        </div>

        {/* Priority Industries Banner */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
            <div className="flex items-center gap-1.5 shrink-0">
              <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                Priority Industries
              </span>
            </div>
            {[
              { label: "Food Processing", emoji: "🥩" },
              { label: "Pharmaceuticals", emoji: "💊" },
              { label: "Healthcare", emoji: "🏥" },
            ].map((ind) => (
              <span
                key={ind.label}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-200/60 rounded-full text-[11px] font-black text-slate-700 shadow-sm"
              >
                <span>{ind.emoji}</span>
                {ind.label}
              </span>
            ))}
            <span className="text-[10px] text-slate-400 font-medium ml-2 hidden sm:inline">
              + Manufacturing • IT • BFSI • Logistics • Retail • Professional Services • Energy & Utilities
            </span>
          </div>
        </div>

        {/* Cluster Tabs Selector */}

        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto pb-4 border-b border-slate-100">
          {clusters.map((clusterName) => {
            const isActive = activeCluster === clusterName;
            return (
              <button
                key={clusterName}
                onClick={() => {
                  setActiveCluster(clusterName);
                  setHoveredCard(null); // Reset hover state
                }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all duration-350 ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20"
                    : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                {clusterName}
              </button>
            );
          })}
        </div>

        {/* Industry Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredIndustries.map((ind) => {
              const IconComp = ind.icon;
              const isHovered = hoveredCard === ind.id;

              return (
                <motion.div
                  key={ind.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredCard(ind.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-white border border-slate-200/85 hover:border-blue-500/20 rounded-3xl transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-xl"
                >
                  {/* Visual Accent Card Header */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${ind.color}`} />

                  {/* Primary Card View */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    
                    {/* Icon & Title */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-blue-600 group-hover:scale-105 transition-all duration-300">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="flex items-center gap-1">
                          {ind.regulations.slice(0, 1).map((reg, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-slate-50 border border-slate-200/60 rounded text-[8px] font-bold text-slate-500 uppercase">
                              {reg}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-0.5 text-left">
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading leading-tight line-clamp-2 min-h-[2.5rem]">
                          {ind.title}
                        </h3>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                          {ind.cluster.split(" & ")[0]}
                        </p>
                      </div>
                    </div>

                    {/* Expanding mini landing page view content inside the card on hover */}
                    <div className="relative overflow-hidden transition-all duration-500 flex-grow text-left">
                      <AnimatePresence mode="wait">
                        {!isHovered ? (
                          <motion.div
                            key="default"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-2 pt-2 border-t border-slate-50"
                          >
                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                              <Shield className="w-3 h-3 text-blue-600 shrink-0" /> Focus Segment
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-4 font-semibold">
                              {ind.subtitle}
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="expanded"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="space-y-2 pt-2 border-t border-slate-100 h-full flex flex-col justify-between"
                          >
                            <div className="flex border-b border-slate-100 pb-1">
                              <button
                                onClick={(e) => { e.preventDefault(); setActiveTab("challenges"); }}
                                className={`text-[9px] font-black uppercase tracking-wider mr-3 pb-0.5 ${activeTab === "challenges" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-400"}`}
                              >
                                Risks
                              </button>
                              <button
                                onClick={(e) => { e.preventDefault(); setActiveTab("regulations"); }}
                                className={`text-[9px] font-black uppercase tracking-wider pb-0.5 ${activeTab === "regulations" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-400"}`}
                              >
                                Standards
                              </button>
                            </div>

                            {activeTab === "challenges" ? (
                              <ul className="space-y-1">
                                {ind.challenges.slice(0, 2).map((ch, idx) => (
                                  <li key={idx} className="text-[10px] text-slate-600 leading-snug flex items-start gap-1 font-semibold">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <span className="line-clamp-2">{ch}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className="flex flex-wrap gap-1">
                                {ind.regulations.slice(0, 3).map((reg, idx) => (
                                  <span key={idx} className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[8px] font-black text-blue-600 uppercase tracking-widest">
                                    {reg}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                  {/* Card Footer Clickable */}
                  <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                    <Link
                      to={`/industries/${getClusterId(ind.cluster)}#${ind.id}`}
                      className="w-full flex items-center justify-between text-[10px] font-black text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider"
                    >
                      <span>Sector GRC</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Consultation CTA */}
      <div className="container mx-auto px-6 max-w-7xl pt-10 pb-6 relative z-10">
        <div className="rounded-2xl bg-slate-900 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-[10px] font-black uppercase tracking-widest text-blue-400">
              Industry-Specific Compliance
            </div>
            <h3 className="text-xl font-black text-white">
              Want Industry-Specific Compliance Guidance?
            </h3>
            <p className="text-sm text-slate-400 font-medium">
              Our experts build scalable compliance frameworks tailored to your sector.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/contact"
              id="industries-cta-consultation"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/20 hover:scale-[1.02] whitespace-nowrap"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="#lead-capture"
              id="industries-cta-demo"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-sm font-bold transition-all hover:scale-[1.02] whitespace-nowrap"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
