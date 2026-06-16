import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GrcSliderHero } from "@/components/hero/GrcSliderHero";
import { 
  CheckCircle2, ShieldCheck, ClipboardCheck, Clock, BarChart3,
  ArrowRight, AlertCircle, Info, Shield, Leaf, Heart, Globe,
  Settings, Send, Terminal
} from "lucide-react";

import heroIntegration from "@/assets/hero-integration.jpg";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";

export default function ESGPage() {
  const [activePillar, setActivePillar] = useState<"E" | "S" | "G">("E");
  
  // Telemetry simulator state
  const [simSector, setSimSector] = useState("manufacturing");
  const [simEnergyMix, setSimEnergyMix] = useState(30); // % renewable
  const [simWasteAudit, setSimWasteAudit] = useState("compliant");
  const [telemetryCalculated, setTelemetryCalculated] = useState(false);

  const slides = [
    {
      badge: "SEBI BRSR & GRI Aligned",
      title: "Audit-Ready ESG &",
      highlight: "Sustainability Reporting",
      description: "Integrate carbon telemetry, waste logs, and social compliance metrics into unified, board-ready BRSR pipelines.",
      image: heroVerify,
    },
    {
      badge: "Decarbonization GRC",
      title: "Carbon Accounting &",
      highlight: "Scope 1-2-3 Telemetry",
      description: "Track emissions across operations and supply chains dynamically to prove environmental compliance under ISO 14064.",
      image: heroCommand,
    },
    {
      badge: "Social Safeguards",
      title: "Labor Law & Social Responsibility",
      highlight: "Verification Audits",
      description: "Audit working conditions, wage records, and safety standards across your supplier network to eliminate social liabilities.",
      image: heroIntegration,
    }
  ];

  const stats = [
    { value: "0", suffix: " Deviation", label: "BRSR Filing Audits Pass Rate", icon: ShieldCheck },
    { value: "↓ 25", suffix: "%", label: "Reporting Telemetry Overhead", icon: Clock },
    { value: "100", suffix: "%", label: "Supply Chain Social Compliance", icon: ClipboardCheck },
    { value: "SEBI", suffix: " Mapped", label: "Core Reporting Alignment", icon: BarChart3 }
  ];

  const esgAdvisoryServices = [
    {
      title: "BRSR Framework Design",
      desc: "Codification of corporate reporting frameworks mapping SEBI LODR, GRI, TCFD, and ISSB rules. We set up audit-ready policy registers and KPI mapping.",
      icon: Globe
    },
    {
      title: "Carbon Accounting & Telemetry",
      desc: "Automated emissions tracking (Scope 1, 2, and 3) by integrating utility sensors, shipping logs, and vendor invoices directly into GRC metrics engines.",
      icon: Leaf
    },
    {
      title: "Social & Supply Chain Audits",
      desc: "On-site and digital validation of subcontractor working conditions, wage codes (CLRA), and safety profiles to secure export licenses and brand trust.",
      icon: Heart
    },
    {
      title: "Environmental Consent Auditing",
      desc: "Continuous monitoring of industrial effluents, water recycling (ZLD) telemetry, and SPCB/CPCB compliance consent registers to prevent closure alerts.",
      icon: Shield
    }
  ];

  return (
    <Layout>
      <div className="bg-white pb-24 text-slate-600 relative">
        
        {/* Panel 1: Hero Carousel */}
        <GrcSliderHero 
          slides={slides} 
          backLink={{ to: "/", label: "Back to Home" }} 
          categoryLabel="ESG & Sustainability"
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
                        <div className="flex items-baseline gap-0.5 text-2xl sm:text-3xl font-black text-slate-900">
                          {stat.value}
                          {stat.suffix && <span className="text-sm text-slate-500 font-bold ml-0.5">{stat.suffix}</span>}
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

        {/* Panel 3: Interactive ESG Pillars Dashboard */}
        <section className="py-16 bg-slate-50/50 border-b border-slate-100 text-left">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Triple Bottom Line
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Interactive ESG Pillars Dashboard
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Click a pillar tab below to inspect how Govenics pre-configures environmental, social, and governance compliance controls.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Left Side: Pillar Selectors */}
              <div className="lg:w-1/3 flex flex-col gap-3 w-full justify-center">
                {[
                  { id: "E", label: "Environmental (E)", desc: "Carbon, Water, Waste Telemetry", icon: Leaf, color: "emerald" },
                  { id: "S", label: "Social (S)", desc: "Labor Law, Safety, Diversity", icon: Heart, color: "rose" },
                  { id: "G", label: "Governance (G)", desc: "Anti-Bribery, Board, whistleblower", icon: Shield, color: "blue" }
                ].map((pillar) => {
                  const PilIcon = pillar.icon;
                  const isSelected = activePillar === pillar.id;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(pillar.id as "E" | "S" | "G")}
                      className={`text-left p-5 rounded-3xl border transition-all flex items-center gap-4 group ${
                        isSelected
                          ? "bg-slate-950 border-slate-900 text-white shadow-xl"
                          : "bg-white border-slate-200 hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                        isSelected ? `bg-${pillar.color}-500/20 text-white` : `bg-${pillar.color}-500/10 text-${pillar.color}-600`
                      }`}>
                        <PilIcon className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-wider">{pillar.label}</h4>
                        <p className="text-[10px] text-slate-400 font-bold mt-0.5">{pillar.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Side: Dynamic Content Card */}
              <div className="lg:w-2/3 w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm animate-fade-in" key={activePillar}>
                
                {activePillar === "E" && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">Environmental Pillar</span>
                      <h3 className="text-lg font-black text-slate-950 uppercase mt-2">Carbon Accounting & Waste Auditing</h3>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      We automate data collection and audits for critical environmental indices. Telemetry from factory smart meters and waste registers are directly compiled into SEBI BRSR Principle 6 reporting standards.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 space-y-1.5">
                        <div className="text-[8px] font-black uppercase text-emerald-600 tracking-wider">Scope 1, 2, 3 Emissions</div>
                        <p className="text-[11px] text-slate-600 font-semibold">Sensor integrations mapping fuel usage, electricity grid metrics, and downstream vendor supply chain transportation logs.</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 space-y-1.5">
                        <div className="text-[8px] font-black uppercase text-emerald-600 tracking-wider">ZLD & effluent Tracking</div>
                        <p className="text-[11px] text-slate-600 font-semibold">Zero Liquid Discharge (ZLD) pipeline auditing and continuous chemical oxygen demand logs for water processing centers.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activePillar === "S" && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <span className="text-[9px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">Social Pillar</span>
                      <h3 className="text-lg font-black text-slate-950 uppercase mt-2">Labor Law & Human Capital Compliance</h3>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      We secure human-capital compliance by mapping deployed workforce registers against Contract Labor Act (CLRA), Minimum Wages, and statutory benefits logs.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 space-y-1.5">
                        <div className="text-[8px] font-black uppercase text-rose-600 tracking-wider">Workforce Safety Audits</div>
                        <p className="text-[11px] text-slate-600 font-semibold">Mapping plant operations to OSHA standards, auditing personal protective equipment (PPE) compliance logs, and scheduling training drills.</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 space-y-1.5">
                        <div className="text-[8px] font-black uppercase text-rose-600 tracking-wider">Statutory Pay Verification</div>
                        <p className="text-[11px] text-slate-600 font-semibold">Triple-checked subcontractor wage logs tracking PF, ESIC, and PT clearances to prevent administrative blockades and strikes.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activePillar === "G" && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">Governance Pillar</span>
                      <h3 className="text-lg font-black text-slate-950 uppercase mt-2">Ethics, Transparency & Whistleblower Auditing</h3>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      We design board-level governance frameworks, codifying code of conduct guidelines, establishing secure whistleblowing channels, and auditing vendor due diligence profiles.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 space-y-1.5">
                        <div className="text-[8px] font-black uppercase text-blue-600 tracking-wider">Anti-Bribery Audit Registers</div>
                        <p className="text-[11px] text-slate-600 font-semibold">Codifying strict procurement approval tiers, auditing donation ledgers, and matching processes against Companies Act 2013 protocols.</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 space-y-1.5">
                        <div className="text-[8px] font-black uppercase text-blue-600 tracking-wider">Whistleblower Protections</div>
                        <p className="text-[11px] text-slate-600 font-semibold">Encrypted, anonymous digital complaint routing portals that guarantee security and board-level review logs for ethics inquiries.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-100 mt-6 flex justify-between items-center text-[10px] font-bold text-slate-400">
                  <span>Audit Standard Mapped: SEBI BRSR / GRI / TCFD</span>
                  <span className="text-blue-600 flex items-center gap-1">
                    SLA-Backed GRC <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Panel 4: ESG Telemetry Simulator */}
        <section className="py-16 bg-white text-left">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Decarbonization Modeling
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                BRSR Decarbonization Telemetry Simulator
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Adjust manufacturing renewable energy mix and check audit ratings in Govenics carbon telemetry console mock.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Form Configurator (Left) */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-5 shadow-inner flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider flex items-center gap-2 border-b pb-2">
                    <Settings className="w-4 h-4 text-blue-600" />
                    <span>Telemetry Configurator</span>
                  </h3>

                  {/* Sector */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">Target Industrial Sector</label>
                    <select 
                      value={simSector} 
                      onChange={(e) => { setSimSector(e.target.value); setTelemetryCalculated(false); }}
                      className="w-full bg-white border border-slate-350 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="manufacturing">Heavy Manufacturing</option>
                      <option value="energy">Energy & Utilities Grid</option>
                      <option value="mining">Mining & Resource Sourcing</option>
                      <option value="textiles">Textile Processing Units</option>
                      <option value="bfsi">BFSI Corporate Headquarters</option>
                    </select>
                  </div>

                  {/* Renewable Energy Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Renewable Energy Mix Ratio</label>
                      <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">{simEnergyMix}% Green</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="100" 
                      value={simEnergyMix}
                      onChange={(e) => { setSimEnergyMix(parseInt(e.target.value)); setTelemetryCalculated(false); }}
                      className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  {/* Waste Audit Register */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">Waste Audit Register Log</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "compliant", label: "Compliant ZLD", desc: "Full water recycling active" },
                        { id: "deviation", label: "Control Drift", desc: "Effluent threshold exceeded" }
                      ].map((w) => (
                        <button
                          key={w.id}
                          type="button"
                          onClick={() => { setSimWasteAudit(w.id); setTelemetryCalculated(false); }}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            simWasteAudit === w.id
                              ? "bg-slate-900 border-slate-900 text-white"
                              : "bg-white border-slate-200 text-slate-800 hover:border-slate-350"
                          }`}
                        >
                          <div className="text-[10px] font-black">{w.label}</div>
                          <div className="text-[7px] text-slate-400 font-bold leading-tight mt-0.5">{w.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setTelemetryCalculated(true)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
                >
                  <span>Verify ESG Audit Rating</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Console Output (Right) */}
              <div className="lg:col-span-7 bg-slate-900 border border-slate-950 rounded-3xl p-6 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                
                <div className="space-y-6 relative z-10 font-mono">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-emerald-500 animate-pulse" />
                      <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">BRSR COMPLIANCE OVERWATCH</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[8px] font-bold uppercase tracking-wider animate-pulse">
                      ACTIVE
                    </span>
                  </div>

                  {!telemetryCalculated ? (
                    <div className="h-[230px] flex flex-col items-center justify-center text-center space-y-3 font-sans">
                      <Leaf className="w-10 h-10 text-slate-650 text-slate-600 animate-bounce" />
                      <div>
                        <h4 className="text-xs font-bold uppercase text-slate-400">Waiting for configuration verifications...</h4>
                        <p className="text-[10px] text-slate-500 max-w-xs mx-auto mt-1">Adjust parameters on the left and submit to launch carbon telemetry simulation checkpoints.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fade-in text-xs text-slate-350">
                      <div className="space-y-1">
                        <div className="text-[8px] text-emerald-500 font-bold tracking-widest uppercase">Pillar Assessment Config</div>
                        <div className="text-white font-semibold">Sector Mapped: GRC_ESG_BRSR_{simSector.toUpperCase()}</div>
                        <div className="text-white font-semibold">P1 Renewable mix: {simEnergyMix}% Energy Sourced</div>
                        <div className="text-white font-semibold">P2 Waste profile: Waste audit status is {simWasteAudit.toUpperCase()}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
                        <div>
                          <div className="text-[8px] text-slate-400 font-bold tracking-widest uppercase">Est. Carbon Credits Offset</div>
                          <div className="text-lg font-bold text-white mt-1">
                            +{simEnergyMix * 250} Metric Tons
                          </div>
                        </div>
                        <div>
                          <div className="text-[8px] text-slate-400 font-bold tracking-widest uppercase">SEBI BRSR Compliance Rating</div>
                          <div className={`text-lg font-bold mt-1 ${
                            simWasteAudit === "deviation"
                              ? "text-rose-500"
                              : simEnergyMix > 50
                              ? "text-emerald-400"
                              : "text-amber-400"
                          }`}>
                            {simWasteAudit === "deviation" ? "Grade D (Action Alert)" : simEnergyMix > 50 ? "Grade A (Optimal)" : "Grade B (Compliant)"}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-white/10 text-[10px] leading-relaxed">
                        <div className="text-[8px] text-slate-400 font-bold tracking-widest uppercase">Compliance Diagnostic Logs:</div>
                        {simWasteAudit === "deviation" ? (
                          <div className="flex items-start gap-1.5 text-rose-400">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span>Warning: Waste audit register shows threshold bypass in local effluent discharges. CPCB/SPCB warning active.</span>
                          </div>
                        ) : (
                          <div className="flex items-start gap-1.5 text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span>Environmental waste telemetry records zero deviation under local SPCB consent parameters.</span>
                          </div>
                        )}
                        <div className="flex items-start gap-1.5 text-slate-300">
                          <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>Supply chain social compliance check logs returned 100% statutory PF/ESIC verification pass.</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex justify-between items-center text-[9px] font-mono text-slate-500">
                  <span>GOVENICS.AI GRC V2.1</span>
                  {telemetryCalculated && (
                    <Link to="/contact">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] font-bold tracking-wider uppercase transition-all font-sans">
                        Request ESG Audit <ArrowRight className="w-3 h-3" />
                      </button>
                    </Link>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Panel 5: Advisory Service Offerings */}
        <section className="py-16 bg-slate-50/50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Specialized ESG Advisory Offerings
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Explore our core ESG advisory services built to design sustainability frameworks and automate compliance telemetry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              {esgAdvisoryServices.map((service, index) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white border border-slate-200/80 rounded-3xl p-6 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-slate-900 text-base uppercase tracking-wide">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Panel 6: CTA Bottom Section */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              Ready to secure your sustainability compliance postures?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-lg mx-auto">
              Initiate an audit-ready carbon telemetry assessment or schedule a vendor due diligence gap review with Govenics ESG partners.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="group bg-emerald-650 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 mx-auto text-sm tracking-wide">
                  Schedule ESG Alignment Audit
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
