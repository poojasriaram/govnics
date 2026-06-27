import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Activity, CheckCircle2,
  Lock, TrendingDown, Check
} from "lucide-react";

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  pills: string[];
  visualTag: string;
}

const stages: Stage[] = [
  {
    number: "01",
    title: "Intake & Compliance Mapping",
    subtitle: "COMPLIANCE MAPPING",
    description: "Map dynamic regulatory frameworks (RBI, SEBI, Factories Act, etc.) directly to your operational checklists. Automatically routes rule updates to compliance registers.",
    pills: ["Checklist Mapping", "Rule Filings", "Audit Task Routing"],
    visualTag: "MAPPING"
  },
  {
    number: "02",
    title: "Risk & Control Assessment",
    subtitle: "RISK REGISTER",
    description: "Conduct ongoing Risk & Control Self-Assessments (RCSA). Establish real-time Key Risk Indicator (KRI) telemetry and threshold violation alerts.",
    pills: ["RCSA Auditing", "Threshold Alerts", "KRI Telemetry"],
    visualTag: "RISK RADAR"
  },
  {
    number: "03",
    title: "Policy & Governance Charters",
    subtitle: "BOARD GOVERNANCE",
    description: "Establish corporate charters, delegation of authority (DoA) matrices, and policy compliance. Manage disclosures, conflicts of interest, and POSH setup.",
    pills: ["DoA Matrices", "POSH Setup", "Disclosure Logs"],
    visualTag: "POLICY v2.4"
  },
  {
    number: "04",
    title: "Statutory & Site Auditing",
    subtitle: "STATUTORY GRC",
    description: "Run automated site audits for labor regulations, EHS codes, and third-party contractor pay. Generate compliance registers for labor inspections.",
    pills: ["Establishment Audits", "Contractor Payroll", "EHS Safety"],
    visualTag: "AUDIT LOG"
  },
  {
    number: "05",
    title: "Cybersecurity & VAPT",
    subtitle: "OFFENSIVE SECURITY",
    description: "Execute continuous penetration testing (VAPT) and configuration reviews across cloud clusters. Build certified compliance readiness for SOC 2 and ISO 27001.",
    pills: ["VAPT Testing", "Cloud Audit", "ISO 27001 Certification"],
    visualTag: "SYSTEM SHIELD"
  },
  {
    number: "06",
    title: "ESG & Carbon Disclosures",
    subtitle: "SUSTAINABILITY",
    description: "Collect resource telemetry to automate SEBI BRSR reports and decarbonization strategies.",
    pills: ["BRSR Reports", "Carbon Credit Logs", "Resource Telemetry"],
    visualTag: "SUSTAINABILITY"
  }
];

export const GrcLifecycleSlider = () => {
  const [activeStage, setActiveStage] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);

  // Framer motion scroll binding for desktop
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Convert scroll progress (0-1) to numeric value (0-100) for CSS variable mapping
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Listen to scroll events to update stage highlight
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stage = Math.min(
      Math.floor(latest * stages.length),
      stages.length - 1
    );
    setActiveStage(stage);
  });

  const nextStage = () => {
    setActiveStage((prev) => (prev === stages.length - 1 ? 0 : prev + 1));
  };

  const prevStage = () => {
    setActiveStage((prev) => (prev === 0 ? stages.length - 1 : prev - 1));
  };

  // Helper to scroll to a specific stage on desktop
  const scrollToStage = (idx: number) => {
    if (targetRef.current) {
      const scrollHeight = targetRef.current.scrollHeight;
      const containerHeight = window.innerHeight;
      const scrollDistance = scrollHeight - containerHeight;
      const targetScrollY = targetRef.current.offsetTop + (idx / (stages.length - 1)) * scrollDistance;
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* DESKTOP VIEW: Scroll-Pinned Horizontal Slider */}
      <div 
        ref={targetRef} 
        className="relative bg-slate-50/20 border-b border-slate-100 h-[240vh] hidden lg:block"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            {/* Header Block */}
            <div className="flex items-end justify-between gap-6 mb-10">
              <div className="space-y-3 text-left">
                <span className="text-blue-600 text-[10px] font-mono uppercase tracking-[0.2em] py-1 px-3 border border-blue-200 rounded-full bg-blue-50">
                  The Govenics GRC Framework
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
                  One accountable lifecycle.
                </h2>
              </div>
              
              {/* Stage Counter */}
              <div className="flex items-center gap-4 shrink-0 font-sans">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                  Stage <strong className="text-blue-600 text-sm font-black font-sans">0{activeStage + 1}</strong> / 0{stages.length}
                </span>
              </div>
            </div>

            {/* Scrollable Track */}
            <div className="overflow-visible -mx-4 px-4 py-4">
              <motion.div 
                className="flex gap-6 w-max [--card-gap:24px] lg:[--card-width:860px] xl:[--card-width:960px]"
                style={{
                  "--scroll-progress": scrollProgress,
                  transform: "translate3d(calc(-0.05 * var(--scroll-progress) * (var(--card-width) + var(--card-gap))), 0px, 0px)"
                } as any}
              >
                {stages.map((stage, idx) => {
                  const isActive = idx === activeStage;
                  return (
                    <div 
                      key={idx}
                      className={`w-[var(--card-width)] shrink-0 bg-white border rounded-[36px] p-12 shadow-xl shadow-slate-100/40 flex gap-8 justify-between relative overflow-hidden transition-all duration-500 ${
                        isActive 
                          ? "border-slate-200/80 scale-100 opacity-100" 
                          : "border-slate-100/50 shadow-none scale-[0.98] opacity-75 cursor-pointer hover:opacity-100"
                      }`}
                      onClick={() => scrollToStage(idx)}
                    >
                      {/* Left Column: Details */}
                      <div className="flex-1 flex flex-col justify-between space-y-6 text-left relative z-10">
                        <div className="space-y-4">
                          {/* Big Faint Background Number */}
                          <div className="relative h-12 select-none">
                            <span className="absolute -top-10 left-0 text-8xl font-black text-slate-200/60 leading-none tracking-tighter">
                              {stage.number}
                            </span>
                          </div>
                          <span className="text-[10px] font-black tracking-widest text-slate-400 block uppercase font-mono">
                            {stage.subtitle}
                          </span>
                          <h3 className="text-3xl font-black text-slate-900 transition-colors">
                            {stage.title}
                          </h3>
                          <p className="text-sm text-slate-800 leading-relaxed font-semibold max-w-lg">
                            {stage.description}
                          </p>
                        </div>

                        {/* Badge Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {stage.pills.map((pill, pIdx) => (
                            <span 
                              key={pIdx}
                              className="px-3.5 py-1 rounded-full bg-white border border-slate-200/80 text-[10px] font-bold text-slate-500 tracking-wider font-mono whitespace-nowrap shadow-sm shadow-slate-50"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: Premium Illustrations (Real Designer Mockups) */}
                      <div className="w-[45%] h-[320px] bg-slate-50 border border-slate-200/40 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shrink-0">
                        
                        {/* Top Visual Tag */}
                        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                          <span className="inline-flex items-center gap-1.5 text-[8.5px] font-black text-blue-600 tracking-widest font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            GOVENICS ACTIVE
                          </span>
                          <span className="text-[8.5px] font-black text-slate-400 tracking-widest font-mono">
                            {stage.visualTag}
                          </span>
                        </div>

                        {/* Center Illustration Area */}
                        <div className="flex-1 flex items-center justify-center p-2">
                          {stage.number === "01" && (
                            <div className="w-full space-y-2 relative">
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-3/4 h-[1px] border-t border-dashed border-slate-200/80" />
                              </div>
                              <div className="flex items-center gap-3 p-2.5 bg-white border border-slate-200/60 rounded-xl shadow-sm relative z-10">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-[10px] font-bold text-slate-700 truncate font-mono">Compliance Audit Index</p>
                                </div>
                                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono border border-emerald-100">MAPPED</span>
                              </div>
                              <div className="flex items-center gap-3 p-2.5 bg-white border border-slate-200/60 rounded-xl shadow-sm relative z-10">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-[10px] font-bold text-slate-700 truncate font-mono">SEBI LODR Regulations</p>
                                </div>
                                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono border border-emerald-100">MAPPED</span>
                              </div>
                              <div className="flex items-center gap-3 p-2.5 bg-white border border-slate-200/60 rounded-xl shadow-sm relative z-10">
                                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-ping mx-1" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-[10px] font-bold text-slate-700 truncate font-mono">Factories EHS Checks</p>
                                </div>
                                <span className="text-[9px] font-black text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded font-mono border border-amber-100">PENDING</span>
                              </div>
                            </div>
                          )}

                          {stage.number === "02" && (
                            <div className="relative w-40 h-40 flex items-center justify-center">
                              <div className="absolute inset-0 rounded-full border border-blue-500/5 animate-ping" />
                              <div className="w-32 h-32 rounded-full border border-blue-500/10 flex items-center justify-center relative">
                                <div className="w-24 h-24 rounded-full border border-blue-500/20 flex items-center justify-center">
                                  <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 shadow-lg shadow-blue-500/40 flex items-center justify-center text-white">
                                      <Activity className="w-3 h-3" />
                                    </div>
                                  </div>
                                </div>
                                <span className="absolute top-0 right-0 text-[8px] font-black text-slate-400 font-mono">CYBER</span>
                                <span className="absolute bottom-1 left-0 text-[8px] font-black text-slate-400 font-mono">OPERATIONAL</span>
                                <span className="absolute top-1/2 -right-2 text-[8px] font-black text-rose-500 bg-rose-50 border border-rose-100 px-1 py-0.5 rounded font-mono">ALERT</span>
                              </div>
                            </div>
                          )}

                          {stage.number === "03" && (
                            <div className="w-full bg-white border border-slate-200/60 rounded-xl shadow-sm p-4 space-y-3.5">
                              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                <span className="text-[10px] font-bold text-slate-800 font-mono">Corporate Governance Charter</span>
                                <span className="text-[8px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-mono border border-blue-100">DRAFT</span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-[10px] font-semibold text-slate-500">
                                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                                    <Check className="w-2.5 h-2.5" />
                                  </div>
                                  <span className="font-mono">Legal Committee Approval</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-[10px] font-semibold text-slate-500">
                                  <div className="w-4 h-4 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 animate-pulse">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                  </div>
                                  <span className="font-mono">Awaiting Board Signature</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {stage.number === "04" && (
                            <div className="w-full space-y-3">
                              <div className="grid grid-cols-2 gap-2.5">
                                <div className="bg-white border border-slate-200/50 rounded-xl p-3 shadow-sm text-left">
                                  <span className="text-[8px] font-black text-slate-400 block uppercase font-mono">Shop Act</span>
                                  <span className="text-xs font-black text-slate-800 font-mono">14 Licenses</span>
                                  <span className="text-[8px] font-bold text-emerald-500 block mt-0.5 font-mono">ACTIVE</span>
                                </div>
                                <div className="bg-white border border-slate-200/50 rounded-xl p-3 shadow-sm text-left">
                                  <span className="text-[8px] font-black text-slate-400 block uppercase font-mono">Contractor PF</span>
                                  <span className="text-xs font-black text-slate-800 font-mono">98.5% Checked</span>
                                  <span className="text-[8px] font-bold text-blue-600 block mt-0.5 font-mono">VERIFIED</span>
                                </div>
                              </div>
                              <div className="bg-white border border-slate-200/50 rounded-xl p-2.5 shadow-sm flex items-center justify-between text-left">
                                <span className="text-[10px] font-bold text-slate-700 font-mono">EHS Safety Audit Score</span>
                                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 py-0.5 px-1.5 rounded font-mono">
                                  94% SECURE
                                </span>
                              </div>
                            </div>
                          )}

                          {stage.number === "05" && (
                            <div className="relative flex flex-col items-center gap-3">
                              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 relative z-10">
                                <Lock className="w-5 h-5 animate-pulse" />
                              </div>
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 py-1 px-3.5 rounded-full shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                <span className="text-[9px] font-black text-slate-700 font-mono">SOC 2 / ISO 27001 SECURE</span>
                              </div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-blue-500/20 rounded-full animate-spin" />
                            </div>
                          )}

                          {stage.number === "06" && (
                            <div className="w-full bg-white border border-slate-200/60 rounded-xl shadow-sm p-4 space-y-3">
                              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                <span className="text-[9px] font-bold text-slate-800 font-mono">BRSR ESG Emissions Tracker</span>
                                <span className="text-[8px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded font-mono font-bold font-sans">Scope 1 & 2</span>
                              </div>
                              <div className="flex items-end justify-between pt-1">
                                <div className="space-y-1">
                                  <span className="text-[8px] font-black text-slate-400 block uppercase font-mono">Emissions Trend</span>
                                  <span className="text-base font-black text-slate-800 flex items-center gap-1 leading-none font-sans">
                                    <TrendingDown className="w-4 h-4 text-emerald-500" /> -24.8%
                                  </span>
                                </div>
                                <div className="h-8 flex items-end gap-1.5 pb-0.5">
                                  <div className="w-2.5 h-6 bg-slate-100 rounded-sm" />
                                  <div className="w-2.5 h-8 bg-slate-100 rounded-sm" />
                                  <div className="w-2.5 h-5 bg-blue-400 rounded-sm" />
                                  <div className="w-2.5 h-3 bg-blue-600 rounded-sm" />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom Action Footer */}
                        <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/60 font-sans">
                          <span className="text-[9px] font-black text-slate-400 font-mono tracking-widest">GOVENICS ASSURANCE</span>
                          <Link 
                            to="/register"
                            className="text-[9px] font-black text-blue-650 hover:text-blue-700 flex items-center gap-0.5 transition-colors uppercase font-mono tracking-widest"
                          >
                            Try Portal <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Bottom Progress Bar Slider Track */}
            <div className="mt-12 max-w-3xl mx-auto flex items-center justify-between gap-6 relative z-10 font-sans">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] font-mono">IDENTIFY</span>
              
              <div className="flex-1 h-[2px] bg-slate-200 relative rounded-full">
                {/* Clickable Dots / Steps */}
                <div className="absolute inset-0 flex justify-between -top-[5px]">
                  {stages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToStage(idx)}
                      className={`w-3 h-3 rounded-full border-2 transition-all cursor-pointer ${
                        idx === activeStage 
                          ? "bg-blue-600 border-blue-600 scale-125 shadow-lg shadow-blue-500/20" 
                          : idx < activeStage
                            ? "bg-blue-600 border-blue-600"
                            : "bg-slate-55 border-slate-200 hover:border-slate-400"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Active Blue Progress Bar */}
                <motion.div 
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: progressWidth }}
                />
              </div>

              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] font-mono">ASSURE</span>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE VIEW: Traditional Swipe/Button Slider (Prevents scroll hijack & layout breaks on small viewports) */}
      <div className="py-20 bg-slate-50/20 border-b border-slate-100 lg:hidden relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Block */}
          <div className="flex flex-col gap-4 mb-8 text-left">
            <span className="text-blue-600 text-[10px] font-mono uppercase tracking-[0.2em] py-1 px-3 border border-blue-200 rounded-full bg-blue-50 w-fit">
              The Govenics GRC Framework
            </span>
            <h2 className="text-3xl font-black text-slate-900 leading-tight font-heading">
              One accountable lifecycle.
            </h2>
            
            {/* Controls */}
            <div className="flex items-center justify-between gap-4 mt-2 font-sans">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                Stage <strong className="text-blue-600 text-sm font-black">0{activeStage + 1}</strong> / 0{stages.length}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={prevStage}
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextStage}
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Track */}
          <div className="overflow-visible -mx-4 px-4 py-4">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out [--card-width:85vw] [--card-gap:24px]"
              style={{
                transform: `translate3d(calc(-${activeStage} * (var(--card-width) + var(--card-gap))), 0px, 0px)`
              }}
            >
              {stages.map((stage, idx) => {
                const isActive = idx === activeStage;
                return (
                  <div 
                    key={idx}
                    className={`w-[85vw] shrink-0 bg-white border rounded-[30px] p-6 shadow-xl shadow-slate-100/40 flex flex-col gap-6 justify-between relative overflow-hidden transition-all duration-500 ${
                      isActive 
                        ? "border-slate-200 scale-100 opacity-100" 
                        : "border-slate-100/50 shadow-none scale-[0.98] opacity-80 cursor-pointer"
                    }`}
                    onClick={() => {
                      if (!isActive) setActiveStage(idx);
                    }}
                  >
                    {/* Details */}
                    <div className="flex flex-col gap-4 text-left relative z-10">
                      <div className="relative h-10 select-none">
                        <span className="absolute -top-6 left-0 text-6xl font-black text-slate-200/50 leading-none tracking-tighter">
                          {stage.number}
                        </span>
                      </div>
                      <span className="text-[9px] font-black tracking-widest text-slate-400 block uppercase font-mono">
                        {stage.subtitle}
                      </span>
                      <h3 className="text-xl font-black text-slate-900">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                        {stage.description}
                      </p>

                      {/* Badge Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        {stage.pills.map((pill, pIdx) => (
                          <span 
                            key={pIdx}
                            className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200/80 text-[8.5px] font-bold text-slate-500 tracking-wider font-mono whitespace-nowrap shadow-sm"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Illustration Area */}
                    <div className="w-full h-[220px] bg-slate-50 border border-slate-200/40 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden shrink-0">
                      {/* Top Tag */}
                      <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                        <span className="inline-flex items-center gap-1.5 text-[8px] font-black text-blue-600 tracking-widest font-mono">
                          <span className="w-1 h-1 rounded-full bg-blue-600 animate-pulse" />
                          ACTIVE
                        </span>
                        <span className="text-[8px] font-black text-slate-400 tracking-widest font-mono">
                          {stage.visualTag}
                        </span>
                      </div>

                      {/* Content illustration */}
                      <div className="flex-1 flex items-center justify-center p-2">
                        {stage.number === "01" && (
                          <div className="w-full space-y-1.5">
                            <div className="flex items-center gap-2 p-2 bg-white border border-slate-200/60 rounded-lg shadow-sm text-left">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span className="text-[9px] font-bold text-slate-700 truncate font-mono">Audit Checklist</span>
                              <span className="text-[8px] font-black text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded font-mono ml-auto">MAPPED</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white border border-slate-200/60 rounded-lg shadow-sm text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 animate-ping mx-1" />
                              <span className="text-[9px] font-bold text-slate-700 truncate font-mono">Factories EHS Checks</span>
                              <span className="text-[8px] font-black text-amber-600 bg-amber-50 px-1 py-0.5 rounded font-mono ml-auto">PENDING</span>
                            </div>
                          </div>
                        )}

                        {stage.number === "02" && (
                          <div className="relative w-28 h-28 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border border-blue-500/10 flex items-center justify-center relative">
                              <div className="w-16 h-16 rounded-full border border-blue-500/20 flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                  <Activity className="w-3 h-3" />
                                </div>
                              </div>
                              <span className="absolute top-1 right-1 text-[7px] font-black text-rose-500 bg-rose-50 px-1 rounded font-mono">ALERT</span>
                            </div>
                          </div>
                        )}

                        {stage.number === "03" && (
                          <div className="w-full bg-white border border-slate-200/60 rounded-lg shadow-sm p-3 space-y-2 text-left">
                            <span className="text-[9px] font-bold text-slate-800 font-mono">Governance Policy</span>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-[8px] font-semibold text-slate-500">
                                <Check className="w-3 h-3 text-emerald-500" />
                                <span className="font-mono">Committee Approved</span>
                              </div>
                              <div className="flex items-center gap-2 text-[8px] font-semibold text-slate-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                <span className="font-mono">Awaiting Signature</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {stage.number === "04" && (
                          <div className="w-full space-y-2 text-left">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white border border-slate-200/50 rounded-lg p-2 shadow-sm">
                                <span className="text-[7px] font-black text-slate-400 block font-mono">SHOP ACT</span>
                                <span className="text-[10px] font-black text-slate-800 font-mono">ACTIVE</span>
                              </div>
                              <div className="bg-white border border-slate-200/50 rounded-lg p-2 shadow-sm">
                                <span className="text-[7px] font-black text-slate-400 block font-mono">WAGES</span>
                                <span className="text-[10px] font-black text-slate-800 font-mono">94% score</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {stage.number === "05" && (
                          <div className="relative flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                              <Lock className="w-4 h-4 animate-pulse" />
                            </div>
                            <span className="text-[8px] font-black text-slate-700 font-mono bg-white border border-slate-200 px-2 py-0.5 rounded-full shadow-sm">
                              SOC 2 / ISO SECURE
                            </span>
                          </div>
                        )}

                        {stage.number === "06" && (
                          <div className="w-full bg-white border border-slate-200/60 rounded-lg shadow-sm p-3 text-left">
                            <span className="text-[8px] font-black text-slate-400 font-mono uppercase">Emissions Trend</span>
                            <span className="text-sm font-black text-slate-800 flex items-center gap-0.5 mt-1 font-sans">
                              <TrendingDown className="w-3.5 h-3.5 text-emerald-500" /> -24.8%
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Tag */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 font-sans">
                        <span className="text-[8.5px] font-black text-slate-400 font-mono font-bold">GOVENICS</span>
                        <Link 
                          to="/register"
                          className="text-[8.5px] font-black text-blue-600 hover:text-blue-750 flex items-center gap-0.5 uppercase font-mono"
                        >
                          Portal <ArrowRight className="w-2.5 h-2.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="mt-8 flex items-center justify-between gap-4 font-sans">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">IDENTIFY</span>
            <div className="flex-1 h-[2px] bg-slate-200 relative rounded-full">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
              />
            </div>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">ASSURE</span>
          </div>

        </div>
      </div>
    </>
  );
};
