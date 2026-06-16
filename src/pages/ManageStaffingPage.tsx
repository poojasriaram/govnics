import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";
import { 
  CheckCircle2, ShieldCheck, ClipboardCheck, Clock, BarChart3,
  Users, ArrowRightLeft, Settings, Layers,
  ArrowRight, AlertCircle, Info, Briefcase, Activity, Star, Shield,
  Terminal, Database, Send, Sparkles, Building, BriefcaseIcon
} from "lucide-react";

import { 
  skillTiers, engagementModels, industryMatrix, 
  detailedOfferings, screeningPhases, clientBenefits, hiringFormats 
} from "@/data/staffing-compendium-data";
import { getIndustryIcon } from "@/data/industries-data";

import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function ManageStaffingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "offerings";
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industryMatrix[0]>(industryMatrix[0]);
  const [selectedOfferingId, setSelectedOfferingId] = useState<string>(detailedOfferings[0].id);

  // Platform Simulator State
  const [simSector, setSimSector] = useState("manufacturing");
  const [simHeadcount, setSimHeadcount] = useState(25);
  const [simTier, setSimTier] = useState("medium");
  const [simUrgency, setSimUrgency] = useState("rapid");
  const [simQuoteSubmitted, setSimQuoteSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTab]);

  const handleTabChange = (tabId: string) => {
    setSearchParams({ tab: tabId });
  };

  const slides = [
    {
      badge: "Workforce Solutions",
      title: "Compliance-Integrated",
      highlight: "SLA Staffing",
      description: "Deploy domain-certified, pre-vetted compliance officers, audit teams, and operations staff managed under strict SLAs.",
      image: heroVerify,
    },
    {
      badge: "Compliance Vetting",
      title: "Triple-Layer Candidate",
      highlight: "Pre-Vetting Process",
      description: "Every candidate undergoes background checks, statutory verifications, and compliance knowledge test logs.",
      image: heroAiDriven,
    },
    {
      badge: "Rapid Deployment",
      title: "Contingency Staffing within",
      highlight: "48-72 Hours",
      description: "Access our pre-vetted talent pool of 12,000+ compliance professionals ready for immediate deployment.",
      image: heroCommand,
    },
    {
      badge: "Statutory Assurances",
      title: "Zero-Deviation GRC",
      highlight: "Statutory Operations",
      description: "Full management of statutory payroll (PF/ESIC/PT), labor law registers, and client-side reconciliation logs.",
      image: heroIntegration,
    }
  ];

  const stats = [
    { value: "↓ 40", suffix: "%", label: "Average Hiring Cost Reduction", icon: ShieldCheck },
    { value: "98.6", suffix: "%", label: "SLA-Backed Fill Rate", icon: ClipboardCheck },
    { value: "100", suffix: "%", label: "Statutory Payroll Compliance", icon: Clock },
    { value: "12,000", suffix: "+", label: "Pre-Vetted Talent Pool", icon: BarChart3 }
  ];

  const getTabIcon = (id: string) => {
    switch (id) {
      case "offering-perm": return Users;
      case "offering-contract": return Briefcase;
      case "offering-c2h": return ArrowRightLeft;
      case "offering-temp-cont": return Clock;
      case "offering-emergency": return Activity;
      case "offering-executive": return Star;
      case "offering-project": return Settings;
      case "offering-msp": return Layers;
      case "offering-rpo": return ClipboardCheck;
      default: return Users;
    }
  };



  const selectedOffering = detailedOfferings.find(o => o.id === selectedOfferingId) || detailedOfferings[0];
  const OfferingIcon = getTabIcon(selectedOffering.id);

  return (
    <Layout>
      <div className="bg-white pb-24 text-slate-600 relative">
        {/* Panel 1: Title & Hero Description Carousel */}
        <GrcSliderHero 
          slides={slides} 
          backLink={{ to: "/", label: "Back to Home" }} 
          categoryLabel="Manpower Services"
        />

        {/* Panel 2: Statistics Grid */}
        <section className="py-8 relative overflow-hidden bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 space-y-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                        <StatIcon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl font-black text-slate-900">
                          {stat.value}
                          {stat.suffix && <span className="text-lg text-slate-500 font-bold ml-0.5">{stat.suffix}</span>}
                        </div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Panel 3: Interactive Dashboard Navigation Tabs */}
        <section className="sticky top-20 bg-white/90 backdrop-blur-md z-30 border-b border-slate-200 py-4 shadow-sm">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: "offerings", label: "Service Offerings", icon: BriefcaseIcon },
                { id: "industries", label: "Sector Matrix", icon: Building },
                { id: "engagement-models", label: "Engagement & Tiers", icon: ArrowRightLeft },
                { id: "vetting", label: "Vetting & Quality", icon: ShieldCheck },
                { id: "platforms", label: "Staffing Platform (SLA)", icon: Sparkles }
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = currentTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Panel 4: Interactive Dashboard Content */}
        <div className="container mx-auto px-6 max-w-6xl mt-12">
          
          {/* TAB 1: SERVICE OFFERINGS */}
          {currentTab === "offerings" && (
            <div className="space-y-10 animate-fade-in">
              <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Compliance-Aware Staffing
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Detailed Service Offerings
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  Select one of our 9 specialized manpower and compliance staffing offerings to explore timelines, capabilities, and delivery workflows.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Side: Offerings Selector */}
                <div className="lg:w-1/3 grid grid-cols-1 gap-2.5 w-full">
                  {detailedOfferings.map((offering, idx) => {
                    const isActive = selectedOfferingId === offering.id;
                    const OffIcon = getTabIcon(offering.id);
                    return (
                      <button
                        key={offering.id}
                        onClick={() => setSelectedOfferingId(offering.id)}
                        className={`text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                          isActive
                            ? "bg-slate-950 border-slate-900 text-white shadow-xl"
                            : "bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isActive ? `bg-blue-600 text-white` : `bg-blue-500/10 text-blue-600`
                          }`}>
                            <OffIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className={`text-[8px] font-bold uppercase tracking-wider block ${
                              isActive ? "text-slate-400" : "text-slate-500"
                            }`}>
                              Category {idx + 1}
                            </span>
                            <span className="text-xs font-extrabold uppercase tracking-wide line-clamp-1">
                              {offering.title.split(" (")[0]}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isActive ? "text-blue-500" : "text-slate-400"
                        }`} />
                      </button>
                    );
                  })}
                </div>

                {/* Right Side: Dynamic Interactive Card */}
                <div className="lg:w-2/3 w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 text-left space-y-8 shadow-inner animate-fade-in" key={selectedOfferingId}>
                  <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-blue-600 text-white shadow-lg shadow-blue-500/10`}>
                      <OfferingIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase text-blue-600 tracking-wider">
                        SLA-Managed Compliance Workforce
                      </span>
                      <h3 className="font-extrabold text-slate-950 text-xl uppercase tracking-wider">
                        {selectedOffering.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                    {selectedOffering.overview}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 items-stretch">
                    {/* Capabilities */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-4 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-blue-600 text-[10px] uppercase tracking-widest border-l-2 border-blue-500 pl-2 mb-3">
                          Capabilities & Core Benefits
                        </h4>
                        <ul className="space-y-3">
                          {selectedOffering.benefits.map((item, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                              <div>
                                <strong className="text-slate-800">{item.title}:</strong> {item.desc}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* SLA Deploy Timelines */}
                      <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5 mt-4">
                        {Object.entries(selectedOffering.deployTime).map(([tier, time]) => (
                          <div key={tier} className="text-left bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider leading-none">{tier}</div>
                            <div className="text-[10px] text-slate-800 font-black mt-1">{time}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recruitment & Deployment Stepper */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="space-y-4">
                        <h4 className="font-extrabold text-slate-950 text-xs uppercase tracking-wider border-l-2 border-slate-900 pl-2 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>Recruitment & Deployment Workflow</span>
                        </h4>
                        <div className="relative border-l-2 border-slate-100 pl-4 ml-1 space-y-4">
                          {selectedOffering.processSteps.map((step, sIdx) => (
                            <div key={sIdx} className="relative">
                              <div className="absolute -left-[21px] top-0.5 w-2 h-2 rounded-full bg-blue-600 border border-white flex items-center justify-center shadow-md shadow-blue-500/30" />
                              <div className="space-y-0.5">
                                <div className="text-[10px] font-black text-slate-950 uppercase tracking-wide">
                                  Step {sIdx + 1}: {step.title.split(" (")[0]}
                                </div>
                                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <span>GRC Calibrated</span>
                        <span className="text-blue-600 flex items-center gap-1">
                          SLA-Backed <ShieldCheck className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SECTOR MATRIX */}
          {currentTab === "industries" && (
            <div className="space-y-10 animate-fade-in">
              <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Pre-Calibrated Configs
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Industry-Specific Solutions Matrix
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  Click any industry vertical below to load its pre-calibrated staffing configurations, recommended skill tiers, and compliance safeguards in the interactive preview panel.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {industryMatrix.map((ind) => {
                  const IconComp = getIndustryIcon(ind.id);
                  const isSelected = selectedIndustry.id === ind.id;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind)}
                      className={`flex flex-col items-center justify-between gap-3 p-5 rounded-3xl border transition-all hover:scale-[1.03] text-center ${
                        isSelected
                          ? "bg-slate-950 text-white border-slate-900 shadow-xl"
                          : "bg-white border-slate-200/80 hover:border-blue-500/25 hover:shadow-md text-slate-800"
                      }`}
                    >
                      <div className={`p-3 rounded-2xl shrink-0 transition-colors ${
                        isSelected ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600"
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-wider line-clamp-2 min-h-[30px] flex items-center justify-center">
                        {ind.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedIndustry && (
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 text-left shadow-inner space-y-6 animate-fade-in" key={selectedIndustry.id}>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-4 flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-blue-500/10 text-blue-600 rounded-2xl">
                        {(() => {
                          const IconComp = getIndustryIcon(selectedIndustry.id);
                          return <IconComp className="w-6 h-6" />;
                        })()}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-950 font-heading">
                          {selectedIndustry.title} Staffing Calibration
                        </h3>
                        <p className="text-[9px] font-black uppercase text-blue-600 tracking-wider">
                          Active Industry GRC Configuration Matrix
                        </p>
                      </div>
                    </div>
                    <Link to={`/industries/${selectedIndustry.id}`}>
                      <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/10">
                        View Full Sector Profile <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-sm">
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Low-Skill Roles</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedIndustry.lowSkill.roles.map((r) => (
                            <span key={r} className="text-[9px] font-extrabold bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1 text-slate-700">
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-100 text-[10px] space-y-1">
                        <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Hiring Format:</span> <span className="font-semibold text-slate-700">{selectedIndustry.lowSkill.category}</span></div>
                        <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Engagement Model:</span> <span className="font-semibold text-slate-700">{selectedIndustry.lowSkill.model}</span></div>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-sm">
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Medium-Skill Roles</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedIndustry.mediumSkill.roles.map((r) => (
                            <span key={r} className="text-[9px] font-extrabold bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1 text-slate-700">
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-100 text-[10px] space-y-1">
                        <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Hiring Format:</span> <span className="font-semibold text-slate-700">{selectedIndustry.mediumSkill.category}</span></div>
                        <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Engagement Model:</span> <span className="font-semibold text-slate-700">{selectedIndustry.mediumSkill.model}</span></div>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-sm">
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">High-Skill Roles</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedIndustry.highSkill.roles.map((r) => (
                            <span key={r} className="text-[9px] font-extrabold bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1 text-slate-700">
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-100 text-[10px] space-y-1">
                        <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Hiring Format:</span> <span className="font-semibold text-slate-700">{selectedIndustry.highSkill.category}</span></div>
                        <div><span className="font-bold text-slate-400 uppercase text-[8px] tracking-wider">Engagement Model:</span> <span className="font-semibold text-slate-700">{selectedIndustry.highSkill.model}</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-amber-800">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <h4 className="text-[10px] font-black uppercase tracking-wider">
                        Sector-Specific GRC Considerations
                      </h4>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {selectedIndustry.considerations.map((item, idx) => (
                        <li key={idx} className="text-xs font-semibold text-slate-700 flex items-start gap-1.5 leading-snug">
                          <Info className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ENGAGEMENT MODELS & TIERS */}
          {currentTab === "engagement-models" && (
            <div className="space-y-12 animate-fade-in">
              <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Business Relationships
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Hiring Formats & Strategic Engagement Models
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  Explore how talent is sourced, compensated, managed, and legally secured under Govenics GRC architectures.
                </p>
              </div>

              {/* Engagement Models Grid */}
              <div className="space-y-4 text-left">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest border-b pb-2">
                  Strategic Engagement Models
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {engagementModels.map((model) => (
                    <div 
                      key={model.id}
                      className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                          {model.title.split(" (")[0]}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                          {model.howItWorks}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-200 space-y-1.5">
                        {model.details.map((detail, idx) => (
                          <div key={idx} className="text-[10px] font-semibold text-slate-700 flex items-start gap-1.5 leading-snug">
                            <CheckCircle2 className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hiring Formats & Skill Tiers */}
              <div className="grid lg:grid-cols-2 gap-8 text-left">
                {/* Hiring Formats */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest border-b pb-2">
                    Hiring Formats
                  </h3>
                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                    {hiringFormats.map((format) => (
                      <div key={format.id} className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">{format.title.split(" (")[0]}</span>
                          <span className="text-[8px] font-bold bg-slate-100 border text-slate-500 px-2 py-0.5 rounded-full">{format.urgency.split(" (")[0]}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-semibold">{format.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill Tiers */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest border-b pb-2">
                    Skill Tiers
                  </h3>
                  <div className="space-y-4">
                    {skillTiers.map((tier, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-250 rounded-2xl p-5 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-black text-slate-950 uppercase tracking-wider">Tier {idx + 1}: {tier.title.split(" ")[0]}</span>
                          <span className="text-[8px] font-bold bg-blue-50 border border-blue-200 text-blue-600 px-2 py-0.5 rounded-full">Pre-Vetted</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{tier.profile}</p>
                        <div className="pt-2 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[10px]">
                          {Object.entries(tier.roles).map(([domain, roles]) => (
                            <div key={domain} className="bg-white/60 p-2 rounded-lg border border-slate-200/50">
                              <div className="font-bold text-blue-600 uppercase text-[8px] tracking-wider">{domain}</div>
                              <div className="text-slate-700 font-semibold truncate" title={roles.join(", ")}>{roles.join(", ")}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: VETTING & BENEFITS */}
          {currentTab === "vetting" && (
            <div className="space-y-12 animate-fade-in">
              <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Zero GRC Deviation
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Vetting Process & Advantages
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  How we screen candidates and ensure full statutorypayroll and labor law reconciliations.
                </p>
              </div>

              {/* Vetting Phases */}
              <div className="space-y-4 text-left">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest border-b pb-2">
                  5-Phase Vetting Process
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {screeningPhases.map((phase, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left flex flex-col justify-between hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-[8px] font-black uppercase text-blue-600 tracking-wider">
                            {phase.phase}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-slate-950 text-xs uppercase tracking-wide leading-snug">
                          {phase.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div className="space-y-4 text-left max-w-4xl mx-auto">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest border-b pb-2 text-center">
                  Key Strategic Advantages
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {clientBenefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 text-left flex items-start gap-4 hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-wide">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PLATFORMS (NEW MOCKUP) */}
          {currentTab === "platforms" && (
            <div className="space-y-10 animate-fade-in">
              <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Govenics Portal Live Simulation
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  SLA-Backed Staffing Portal
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  Configure workforce size, skill levels, and compliance rules dynamically to test Govenics deployment bandwidth in real-time.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-stretch text-left">
                {/* Form Inputs (Left) */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-5 shadow-inner flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider flex items-center gap-2 border-b pb-2">
                      <Settings className="w-4 h-4 text-blue-600" />
                      <span>Requirements Configurator</span>
                    </h3>

                    {/* Sector */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">Target Industry Sector</label>
                      <select 
                        value={simSector} 
                        onChange={(e) => { setSimSector(e.target.value); setSimQuoteSubmitted(false); }}
                        className="w-full bg-white border border-slate-350 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="manufacturing">Manufacturing & Automobiles</option>
                        <option value="healthcare">Healthcare & Clinical Sciences</option>
                        <option value="it-services">IT & Digital Infrastructure</option>
                        <option value="real-estate-infra">Mission-Critical Facilities</option>
                        <option value="construction">Industrial Construction</option>
                        <option value="bfsi">BFSI & Fiduciary Operations</option>
                      </select>
                    </div>

                    {/* Headcount */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Required Headcount</label>
                        <span className="text-xs font-extrabold text-blue-600 bg-blue-50 border px-2 py-0.5 rounded">{simHeadcount} Staff</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="250" 
                        value={simHeadcount}
                        onChange={(e) => { setSimHeadcount(parseInt(e.target.value)); setSimQuoteSubmitted(false); }}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>

                    {/* Skill Tier */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">Skill Tier Profile</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "low", label: "Low Skill", desc: "Assembly/Warehouse" },
                          { id: "medium", label: "Medium Skill", desc: "Technicians/Analyst" },
                          { id: "high", label: "High Skill", desc: "Advisors/Superintendent" }
                        ].map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => { setSimTier(t.id); setSimQuoteSubmitted(false); }}
                            className={`p-2 rounded-xl border text-center transition-all ${
                              simTier === t.id
                                ? "bg-slate-900 border-slate-900 text-white"
                                : "bg-white border-slate-200 text-slate-800 hover:border-slate-350"
                            }`}
                          >
                            <div className="text-[10px] font-black">{t.label}</div>
                            <div className="text-[7px] text-slate-400 font-bold truncate mt-0.5">{t.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Urgency */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">Deployment Urgency</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "standard", label: "Standard", desc: "2-4 Weeks" },
                          { id: "rapid", label: "Rapid SLA", desc: "48-72 Hours" },
                          { id: "emergency", label: "Crisis Dispatch", desc: "2-12 Hours" }
                        ].map((u) => (
                          <button
                            key={u.id}
                            type="button"
                            onClick={() => { setSimUrgency(u.id); setSimQuoteSubmitted(false); }}
                            className={`p-2 rounded-xl border text-center transition-all ${
                              simUrgency === u.id
                                ? "bg-slate-900 border-slate-900 text-white"
                                : "bg-white border-slate-200 text-slate-800 hover:border-slate-350"
                            }`}
                          >
                            <div className="text-[10px] font-black">{u.label}</div>
                            <div className="text-[7px] text-slate-400 font-bold truncate mt-0.5">{u.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSimQuoteSubmitted(true)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider rounded-2xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all"
                  >
                    <span>Deploy Telemetry Query</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Telemetry Output (Right) */}
                <div className="lg:col-span-7 bg-slate-900 border border-slate-950 rounded-3xl p-6 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
                  {/* Grid overlay background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-blue-500 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">SLA BANDWIDTH TELEMETRY LOG</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[8px] font-bold font-mono uppercase tracking-wider animate-pulse">
                        ONLINE
                      </span>
                    </div>

                    {!simQuoteSubmitted ? (
                      <div className="h-[250px] flex flex-col items-center justify-center text-center space-y-3">
                        <Database className="w-10 h-10 text-slate-600 animate-bounce" />
                        <div>
                          <h4 className="text-xs font-bold uppercase text-slate-400">Waiting for query submission...</h4>
                          <p className="text-[10px] text-slate-500 max-w-xs mx-auto mt-1">Configure your staffing requirements on the left and submit to view live pre-vetted bench capacity checks.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 animate-fade-in font-mono text-xs text-slate-350">
                        <div className="space-y-1">
                          <div className="text-[8px] text-blue-500 font-bold tracking-widest uppercase">Target Calibration Config</div>
                          <div className="text-white font-semibold">Sector: GRC_STAFFING_VETTING_{simSector.toUpperCase()}</div>
                          <div className="text-white font-semibold">Requirement: {simHeadcount} Headcount ({simTier.toUpperCase()}_SKILL_TIER)</div>
                          <div className="text-white font-semibold">SLA Category: {simUrgency.toUpperCase()}_DISPATCH_MODE</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
                          <div>
                            <div className="text-[8px] text-slate-400 font-bold tracking-widest uppercase">Pre-Vetted Bench Availability</div>
                            <div className="text-lg font-bold text-white mt-1">
                              {simTier === "low" ? 1420 : simTier === "medium" ? 845 : 312} Candidates Mapped
                            </div>
                          </div>
                          <div>
                            <div className="text-[8px] text-slate-400 font-bold tracking-widest uppercase">Est. SLA Fill Speed</div>
                            <div className="text-lg font-bold text-emerald-400 mt-1">
                              {simUrgency === "emergency" ? "Under 4 Hours" : simUrgency === "rapid" ? "48 Hours" : "5 Business Days"}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 pt-3 border-t border-white/10">
                          <div className="text-[8px] text-slate-400 font-bold tracking-widest uppercase">Active GRC & Statutory Safeguards Mapped:</div>
                          <div className="flex items-center gap-1.5 text-[10px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>100% PF / ESIC / PT Statutory Payroll Management Active</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>Zero Co-employment Liability Indemnity Mapped</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>Triple-Layer Vetting Check logs established</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-6 flex justify-between items-center text-[9px] font-mono text-slate-500">
                    <span>GOVENICS.AI GRC V2.1</span>
                    {simQuoteSubmitted && (
                      <Link to="/contact">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[9px] font-bold tracking-wider uppercase transition-all font-sans">
                          Request formal quote <ArrowRight className="w-3 h-3" />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Panel 18: CTA Bottom Section */}
        <section className="py-16 bg-slate-50/50 border-t border-slate-100 mt-16">
          <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              Ready to deploy compliance-integrated staffing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-lg mx-auto">
              Initiate a custom staffing requirement assessment and configure your SLA-backed GRC workforce.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 mx-auto text-sm tracking-wide">
                  Schedule Staffing Requirements Audit
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
