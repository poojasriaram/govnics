import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";
import { 
  CheckCircle2, ShieldCheck, Clock, BarChart3,
  ArrowRight, Activity, Shield, Lock, Search, 
  Zap, RefreshCw, Sliders, Check, X, FileText
} from "lucide-react";

import { 
  securityOfferings, 
  nistFunctionsList 
} from "@/data/cybersecurity-compendium-data";

import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function CyberSecurityPage() {
  const [searchParams] = useSearchParams();
  const [selectedNist, setSelectedNist] = useState<string>("Govern");
  const [selectedOfferingId, setSelectedOfferingId] = useState<string>("offering-grc");
  const [activeSubTab, setActiveSubTab] = useState<string>("overview");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const matched = securityOfferings.find(o => o.id === hash);
      if (matched) {
        setSelectedNist(matched.nistFunction);
        setSelectedOfferingId(matched.id);
      }
    } else {
      const offParam = searchParams.get("offering");
      if (offParam) {
        const matched = securityOfferings.find(o => o.id === offParam);
        if (matched) {
          setSelectedNist(matched.nistFunction);
          setSelectedOfferingId(matched.id);
        }
      }
    }
  }, [searchParams]);

  useEffect(() => {
    // When NIST category changes, automatically select the first offering in that category
    const offerings = securityOfferings.filter(o => o.nistFunction === selectedNist);
    if (offerings.length > 0 && !offerings.some(o => o.id === selectedOfferingId)) {
      setSelectedOfferingId(offerings[0].id);
    }
  }, [selectedNist]);

  const slides = [
    {
      badge: "NIST CSF 2.0 Aligned",
      title: "End-to-End",
      highlight: "AI Security Value Chain",
      description: "A comprehensive portfolio of 15 integrated offerings covering the complete AI security lifecycle — from governance through quantum-safe readiness.",
      image: heroVerify,
    },
    {
      badge: "Continuous Exploit Validation",
      title: "Continuous AI Penetration",
      highlight: "Testing as a Service",
      description: "Autonomous AI agents and continuous red-teaming to actively probe and harden model endpoints, LLMs, and RAG databases.",
      image: heroAiDriven,
    },
    {
      badge: "Future-Proof Defense",
      title: "Quantum-Safe Readiness for",
      highlight: "Proprietary AI Models",
      description: "Safeguard AI intellectual property and training data history against quantum decryption threats with post-quantum cryptography.",
      image: heroCommand,
    },
    {
      badge: "Machine-Speed Overwatch",
      title: "Autonomous Threat Hunting &",
      highlight: "Agentic SOC Defense",
      description: "Shift to self-driving security operations using collaborative LLM agents to investigate, contain, and remediate alerts in seconds.",
      image: heroIntegration,
    }
  ];

  const getNistColor = (nistFunc: string) => {
    switch (nistFunc) {
      case "Govern": return { bg: "bg-rose-50 border-rose-100 text-rose-600", text: "text-rose-600", border: "border-rose-200", iconBg: "bg-rose-500/10 text-rose-500", rawColor: "rose" };
      case "Identify": return { bg: "bg-blue-50 border-blue-100 text-blue-600", text: "text-blue-600", border: "border-blue-200", iconBg: "bg-blue-500/10 text-blue-500", rawColor: "blue" };
      case "Protect": return { bg: "bg-emerald-50 border-emerald-100 text-emerald-600", text: "text-emerald-600", border: "border-emerald-200", iconBg: "bg-emerald-500/10 text-emerald-500", rawColor: "emerald" };
      case "Detect": return { bg: "bg-amber-50 border-amber-100 text-amber-600", text: "text-amber-600", border: "border-amber-200", iconBg: "bg-amber-500/10 text-amber-500", rawColor: "amber" };
      case "Respond": return { bg: "bg-purple-50 border-purple-100 text-purple-600", text: "text-purple-600", border: "border-purple-200", iconBg: "bg-purple-500/10 text-purple-500", rawColor: "purple" };
      case "Recover": return { bg: "bg-indigo-50 border-indigo-100 text-indigo-600", text: "text-indigo-600", border: "border-indigo-200", iconBg: "bg-indigo-500/10 text-indigo-500", rawColor: "indigo" };
      case "Cross-cutting": return { bg: "bg-cyan-50 border-cyan-100 text-cyan-600", text: "text-cyan-600", border: "border-cyan-200", iconBg: "bg-cyan-500/10 text-cyan-500", rawColor: "cyan" };
      default: return { bg: "bg-slate-50 border-slate-100 text-slate-600", text: "text-slate-600", border: "border-slate-200", iconBg: "bg-slate-500/10 text-slate-500", rawColor: "slate" };
    }
  };

  const getNistIcon = (nistFunc: string) => {
    switch (nistFunc) {
      case "Govern": return Shield;
      case "Identify": return Search;
      case "Protect": return Lock;
      case "Detect": return Activity;
      case "Respond": return Zap;
      case "Recover": return RefreshCw;
      case "Cross-cutting": return Sliders;
      default: return Shield;
    }
  };

  const currentOffering = securityOfferings.find(o => o.id === selectedOfferingId) || securityOfferings[0];
  const { bg: nistBg } = getNistColor(currentOffering.nistFunction);
  const CurrentOfferingIcon = getNistIcon(currentOffering.nistFunction);

  return (
    <Layout>
      <div className="bg-white pb-24 text-slate-600 relative">
        
        {/* Panel 1: Title & Hero Description Slider */}
        <div id="overview-hero">
          <GrcSliderHero 
            slides={slides} 
            backLink={{ to: "/", label: "Back to Home" }} 
            categoryLabel="AI Security Services"
          />
        </div>

        {/* Panel 2: Interactive NIST CSF 2.0 Mapping Matrix & Dashboard */}
        <section className="py-16 bg-slate-50/50 border-y border-slate-100 scroll-mt-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Security Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                NIST CSF 2.0 Security Operations Dashboard
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Click any NIST lifecycle function or select an offering below to explore our continuous threat validation workflows, audit alignments, and SLAs.
              </p>
            </div>

            {/* NIST Category Selectors */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {nistFunctionsList.map((f) => {
                const IconComp = getNistIcon(f.id);
                const isSelected = selectedNist === f.id;
                const offeringCount = securityOfferings.filter(o => o.nistFunction === f.id).length;
                return (
                  <button
                    key={f.id}
                    onClick={() => { setSelectedNist(f.id); }}
                    className={`flex flex-col items-center justify-between gap-2 p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? `bg-slate-950 border-slate-950 text-white shadow-lg`
                        : "bg-white border-slate-200/80 hover:border-blue-500/25 hover:shadow-md text-slate-800"
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl shrink-0 ${
                      isSelected ? "bg-white/20 text-white" : `bg-${f.color}-500/10 text-${f.color}-600`
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-center leading-tight">
                      {f.label}
                    </div>
                    <span className={`text-[8px] font-bold px-2 py-0.5 rounded ${
                      isSelected ? "bg-white/10 text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      {offeringCount} {offeringCount === 1 ? "offering" : "offerings"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Dashboard Panel */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch text-left">
              
              {/* Left Side: Offerings in selected NIST Category */}
              <div className="lg:col-span-4 flex flex-col gap-2.5 w-full">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2 mb-1">
                  Active category: {selectedNist}
                </h3>
                {securityOfferings
                  .filter((o) => o.nistFunction === selectedNist)
                  .map((o) => {
                    const isOfferingSelected = selectedOfferingId === o.id;
                    return (
                      <button
                        key={o.id}
                        onClick={() => setSelectedOfferingId(o.id)}
                        className={`text-left p-4 rounded-2xl border transition-all flex items-start justify-between group ${
                          isOfferingSelected
                            ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/15"
                            : "bg-white border-slate-200/85 hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        <div className="space-y-1 pr-2">
                          <span className={`text-[8px] font-black uppercase tracking-wider ${
                            isOfferingSelected ? "text-blue-200" : "text-blue-600"
                          }`}>
                            Offering {o.offeringNumber} of 15
                          </span>
                          <span className="text-xs font-extrabold leading-snug block uppercase tracking-wide">
                            {o.title}
                          </span>
                        </div>
                        <ArrowRight className={`w-4 h-4 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1 ${
                          isOfferingSelected ? "text-white" : "text-slate-450"
                        }`} />
                      </button>
                    );
                  })}
              </div>

              {/* Right Side: Active Offering Details Panel */}
              <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between" key={selectedOfferingId}>
                
                {/* Offering Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/10 text-blue-600`}>
                      <CurrentOfferingIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                          Offering {currentOffering.offeringNumber} / 15
                        </span>
                        <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${nistBg}`}>
                          NIST Lifecycle: {currentOffering.nistFunction}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-slate-950 text-lg uppercase tracking-wider mt-1">
                        {currentOffering.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Inner Sub-Tabs for details */}
                <div className="flex gap-2 border-b border-slate-100 py-3 mt-4">
                  {[
                    { id: "overview", label: "Overview & Value", icon: FileText },
                    { id: "components", label: "Service Components", icon: Sliders },
                    { id: "alignment", label: "Regulatory Matrix", icon: ShieldCheck },
                    { id: "telemetry", label: "Timeline & KPIs", icon: BarChart3 }
                  ].map((subTab) => {
                    const SubTabIcon = subTab.icon;
                    const isSubActive = activeSubTab === subTab.id;
                    return (
                      <button
                        key={subTab.id}
                        onClick={() => setActiveSubTab(subTab.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-colors ${
                          isSubActive
                            ? "bg-slate-900 text-white"
                            : "bg-slate-50 text-slate-655 hover:bg-slate-100"
                        }`}
                      >
                        <SubTabIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{subTab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Sub-Tab Panel content */}
                <div className="mt-6 flex-1 min-h-[300px]">
                  
                  {activeSubTab === "overview" && (
                    <div className="space-y-5 animate-fade-in">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                        {currentOffering.overview}
                      </p>

                      <div className="border-l-4 border-blue-600 bg-blue-600/5 p-4 rounded-r-2xl">
                        <p className="text-xs text-slate-800 italic font-bold">
                          &ldquo;{currentOffering.statementOfValue}&rdquo;
                        </p>
                      </div>

                      {/* Before / Target comparison */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-rose-500/[0.02] border border-rose-500/10 rounded-2xl">
                          <span className="text-[8px] font-black uppercase text-rose-500 tracking-wider flex items-center gap-1 mb-2">
                            <X className="w-3.5 h-3.5" /> Before Govenics
                          </span>
                          <ul className="space-y-1.5 text-[11px] text-slate-500 font-semibold leading-relaxed">
                            {currentOffering.before.slice(0, 4).map((b, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-rose-400">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-emerald-500/[0.02] border border-emerald-500/10 rounded-2xl">
                          <span className="text-[8px] font-black uppercase text-emerald-500 tracking-wider flex items-center gap-1 mb-2">
                            <Check className="w-3.5 h-3.5" /> Target Posture
                          </span>
                          <p className="text-[11px] text-slate-700 font-semibold leading-relaxed">
                            {currentOffering.situation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSubTab === "components" && (
                    <div className="space-y-4 animate-fade-in">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Service Delivery Components
                      </h4>
                      <ul className="grid sm:grid-cols-1 gap-3">
                        {currentOffering.components.map((comp, cIdx) => {
                          const [title, desc] = comp.split(": ");
                          return (
                            <li key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-655 text-slate-600 font-semibold leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                              <div>
                                <strong className="text-slate-800">{title}:</strong> {desc}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {activeSubTab === "alignment" && (
                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in items-start">
                      {/* Regulatory Align Table */}
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Regulatory Alignment
                        </h4>
                        <table className="w-full text-left text-xs divide-y divide-slate-100">
                          <thead>
                            <tr className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">
                              <th className="py-2">Standard</th>
                              <th className="py-2 text-right">Coverage</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                            {currentOffering.regulatoryAlignment.map((reg, rIdx) => (
                              <tr key={rIdx}>
                                <td className="py-2 pr-2">{reg.requirement.split(" (")[0]}</td>
                                <td className="py-2 text-right">
                                  <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded text-emerald-600 text-[8px] font-black uppercase tracking-wider">
                                    {reg.coverage}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Continuous Pentest */}
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 shadow-inner">
                        <span className="text-[8px] font-black uppercase text-blue-600 tracking-wider bg-blue-100/60 px-2 py-0.5 rounded border border-blue-200">
                          AI-Driven Pentesting Integration
                        </span>
                        <p className="text-xs font-semibold text-slate-655 leading-relaxed mt-2 text-slate-650">
                          {currentOffering.pentestIntegration}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeSubTab === "telemetry" && (
                    <div className="space-y-6 animate-fade-in">
                      {/* Timeline stepper */}
                      <div className="space-y-3 text-left">
                        <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>Engagement Timeline & Milestones</span>
                        </h4>
                        <div className="relative border-l-2 border-slate-150 pl-4 ml-1 space-y-3.5">
                          {currentOffering.timeline.map((step, sIdx) => {
                            const [phase, phaseDesc] = step.split(": ");
                            return (
                              <div key={sIdx} className="relative">
                                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600 border border-white flex items-center justify-center shadow-md shadow-blue-500/30" />
                                <div className="space-y-0.5">
                                  <div className="text-[9px] font-black text-slate-900 uppercase tracking-wide">
                                    {phase}
                                  </div>
                                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                                    {phaseDesc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Metrics comparison */}
                      <div className="space-y-3 text-left">
                        <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-blue-600" />
                          <span>Performance KPIs (Before vs After)</span>
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {currentOffering.statistics.slice(0, 3).map((stat, sIdx) => (
                            <div key={sIdx} className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 flex flex-col justify-between space-y-2">
                              <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-snug line-clamp-1">
                                {stat.kpi}
                              </div>
                              <div className="flex items-baseline justify-between pt-1 border-t border-slate-250">
                                <div>
                                  <div className="text-[7px] text-slate-400 font-bold uppercase">Before</div>
                                  <div className="text-[10px] font-bold text-rose-500 line-through">{stat.before}</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-[7px] text-slate-400 font-bold uppercase">After</div>
                                  <div className="text-xs font-black text-emerald-600">{stat.after}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Footer GRC Calibration info */}
                <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-400">
                  <span>Cyber Security Framework</span>
                  <span className="text-blue-600 flex items-center gap-1">
                    SLA-Backed <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>

            </div>

            {/* Cross-Cutting Footer Alert */}
            <div className="mt-8 bg-blue-600/5 border border-blue-500/15 rounded-3xl p-6 flex items-start gap-4 text-left">
              <div className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl shrink-0">
                <Sliders className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider">
                  Cross-Cutting Tier: Offering 12 AI-Driven Penetration Testing
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Continuous validation, red/purple teaming, and simulation frameworks run horizontally across all categories to continuously test controls under adversarial conditions and verify SLA compliance.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Panel 18: CTA Bottom Section */}
        <section id="cta-bottom" className="py-16 bg-slate-50/50 border-t border-slate-100 scroll-mt-20">
          <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              Ready to secure your enterprise AI deployments?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-lg mx-auto">
              Initiate a comprehensive AI Security Requirements Audit and design your NIST CSF 2.0 aligned security posture.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="group bg-blue-600 hover:bg-blue-750 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 mx-auto text-sm tracking-wide">
                  Schedule AI Security Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
