import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { GrcCarousel } from "@/components/ui/GrcCarousel";
import { screeningPhases } from "@/data/staffing-compendium-data";
import { Shield, CheckCircle2, ChevronRight, Briefcase } from "lucide-react";
import heroVerify from "@/assets/hero-verify.jpg";
import heroCommand from "@/assets/command_center_1.jpg";
import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import verticalsFacility from "@/assets/verticals-facility.jpg";
import heroDrone from "@/assets/hero-drone.jpg";

interface StaffingItem {
  title: string;
  subCategory: string;
  desc: string;
  keyPoints: string[];
  linkTab?: string;
}

export default function ManageStaffingPage() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const heroSlides = [
    {
      title: "Statutory Workforce Sourcing & Deployment",
      highlight: "SLA-Managed Contract Staffing",
      description: "Deploy domain-vetted blue, grey, and white-collar talent across 28+ Indian states under structured operational compliance SLAs.",
      image: heroVerify,
      badge: "Contract Staffing"
    },
    {
      title: "Employer of Record & Statutory Payrolling",
      highlight: "Principal Employer Shield",
      description: "Absorb PF, ESIC, PT, and compensation liabilities with legal indemnity, shielding your business from co-employment litigation.",
      image: heroCommand,
      badge: "Risk Transfer"
    },
    {
      title: "Pre-Vetted GRC & Cybersecurity Bench",
      highlight: "GRC Talent-as-a-Service (TaaS)",
      description: "On-demand dispatch of CISOs, SOC analysts, ISO 27001 coordinators, ESG reporting leads, and factory EHS auditors.",
      image: heroAiDriven,
      badge: "GRC Talent"
    },
    {
      title: "Permanent Hiring & Direct Placements",
      highlight: "Mid-to-Senior Placements",
      description: "Identify and recruit domain-specific leaders, executive officers, and directors with certified compliance track records.",
      image: heroIntegration,
      badge: "Direct Hire"
    },
    {
      title: "Master Vendor Program Governance",
      highlight: "Managed Service Provider (MSP)",
      description: "Consolidate and govern tier-2/3 staffing sub-vendors, unify rate cards, and automate billing within a secure VMS dashboard.",
      image: verticalsFacility,
      badge: "Vendor Governance"
    },
    {
      title: "Embedded On-Site Recruitment",
      highlight: "Recruitment Process Outsourcing",
      description: "Deploy dedicated, scalable recruitment teams directly into your workspace to manage high-volume permanent talent pipelines.",
      image: heroDrone,
      badge: "RPO Services"
    }
  ];

  const stats = [
    { value: "↓ 40", suffix: "%", label: "Average Sourcing Cost Reduction" },
    { value: "98.6", suffix: "%", label: "SLA-Backed Fill Rate" },
    { value: "100", suffix: "%", label: "Statutory Payroll Compliance" },
    { value: "12,000", suffix: "+", label: "Pre-Vetted Talent Pool" }
  ];

  // Slider 2: Contract Staffing & Sourcing (6 items)
  const contractSourcingItems: StaffingItem[] = [
    {
      title: "Blue Collar Deployment",
      subCategory: "Compliant Contract Staffing",
      desc: "High-volume sourcing and deployment of factory floor assembly workers, warehousing material handlers, and facilities loading crews.",
      keyPoints: ["100% compliance with minimum wage grids", "On-site biometric attendance checks", "Automated ESI/PF registration checks"]
    },
    {
      title: "Grey Collar Deployment",
      subCategory: "Compliant Contract Staffing",
      desc: "Deployment of vocational technicians, machinery operators, lab assistants, and logistics coordinators.",
      keyPoints: ["Verifiable trade certifications check", "Safety training and PPE logs checks", "Dynamic billing rate cards"]
    },
    {
      title: "White Collar Sourcing",
      subCategory: "Compliant Contract Staffing",
      desc: "Providing project-based administrative staff, customer helpdesk teams, and back-office processors.",
      keyPoints: ["Rigorous background vetting logs", "Skill-based benchmark testing", "Standardized NDA sign-off protocols"]
    },
    {
      title: "Fixed-Term Hiring",
      subCategory: "Hiring Formats",
      desc: "Sourcing workforce under defined duration contracts to handle seasonal loads, factory expansions, or project milestones.",
      keyPoints: ["Compliant term contracts drafting", "Automatic contract end workflows", "Fringe benefits statutory compliance"]
    },
    {
      title: "Project-Based (SOW) Hiring",
      subCategory: "Hiring Formats",
      desc: "Deploying outcome-managed teams under clear statement of work parameters, linking billing directly to operational deliverables.",
      keyPoints: ["Outcome-based SLA scorecards", "Milestone validation checks", "Risk sharing deployment agreements"]
    },
    {
      title: "Temporary-to-Hire Placements",
      subCategory: "Hiring Formats",
      desc: "Evaluate candidates on the job before committing to direct-hire payroll, reducing bad hiring costs.",
      keyPoints: ["Smooth payroll transfer protocols", "Defined conversion timelines", "Risk-free talent validation periods"]
    }
  ];

  // Slider 3: Managed Payroll & Risk Transfer (6 items)
  const payrollRiskItems: StaffingItem[] = [
    {
      title: "Employer of Record (EOR) Payrolling",
      subCategory: "Risk Transfer",
      desc: "Outsource payroll processing and statutorily employ your workers under our corporate entity, absorbing complete payroll liabilities.",
      keyPoints: ["Statutory PF/ESIC absorption", "Zero client administrative overhead", "Pan-India wage management registers"]
    },
    {
      title: "Principal Employer Shield",
      subCategory: "Risk Transfer",
      desc: "Comprehensive legal indemnity shields protecting your business from co-employment claims and subcontractor labor disputes.",
      keyPoints: ["Contractor compliance audit tracking", "Full liability indemnity backing", "CLRA advisory and license setup"]
    },
    {
      title: "Multi-State Labour Compliance",
      subCategory: "Risk Transfer",
      desc: "Manage payroll regulations, wage rules, and filing registers across 28+ states through our centralized compliance grid.",
      keyPoints: ["Local labor board coordinates", "Timely monthly filings audits", "Audit-ready document archives"]
    },
    {
      title: "Vendor Consolidation",
      subCategory: "Risk Transfer",
      desc: "Consolidate multiple legacy staffing vendors under a single invoice, simplifying accounting and unifying compliance standards.",
      keyPoints: ["Unified monthly invoices", "Standardized SLA checklists", "Vendor performance audit registers"]
    },
    {
      title: "PF, ESI & Statutory Audits",
      subCategory: "Risk Transfer",
      desc: "Continuous checks on monthly PF, ESI, and Professional Tax deposit logs to guarantee zero-penalty compliance positions.",
      keyPoints: ["Pre-vetted deposit challans logs", "Direct filings verification", "Zero-deviation audit clearance certificates"]
    },
    {
      title: "Labor Dispute Resolution",
      subCategory: "Risk Transfer",
      desc: "Providing legal and regulatory advisory support to handle trade union representation, wage disputes, or labor board notices.",
      keyPoints: ["Expert labor attorneys advisory", "Formulation of response registers", "Audit gap corrective blueprints"]
    }
  ];

  // Slider 4: GRC & Tech Talent (6 items)
  const grcTalentItems: StaffingItem[] = [
    {
      title: "Fractional CISOs & IT Risk Officers",
      subCategory: "GRC Tech Talent",
      desc: "Access part-time or project-based Chief Information Security Officers to design frameworks, run audits, and report to boards.",
      keyPoints: ["Experienced security leads placement", "Prior corporate audit records", "Board presentation dashboards prep"]
    },
    {
      title: "SOC Analysts & Incident Responders",
      subCategory: "GRC Tech Talent",
      desc: "Deploy pre-vetted engineers to run security operations centers, analyze alerts, and execute breach containment playbooks.",
      keyPoints: ["Technical security certifications", "Pre-screened threat analysts", "24/7 rotation availability"]
    },
    {
      title: "ISO 27001 & SOC 2 Coordinators",
      subCategory: "GRC Tech Talent",
      desc: "Contract experts to compile evidence, define control gates, and coordinate with external certification auditors.",
      keyPoints: ["Proven audit execution histories", "Control tracking systems setup", "Documentation audit readiness"]
    },
    {
      title: "DPDP Privacy Officers",
      subCategory: "GRC Tech Talent",
      desc: "Place compliance managers to run data discovery mapping, database encryption projects, and statutory consent register APIs.",
      keyPoints: ["Indian privacy act training", "Data registry audits", "Breach notification playbooks"]
    },
    {
      title: "ESG & Sustainability Analysts",
      subCategory: "GRC Tech Talent",
      desc: "Contract analysts to compile carbon footprint data, calculate emissions inventories, and format SEBI-compliant BRSR reports.",
      keyPoints: ["GRI / SASB methodology training", "Emissions spreadsheet auditing", "Investor deck preparation support"]
    },
    {
      title: "EHS Inspectors & Factory Auditors",
      subCategory: "GRC Tech Talent",
      desc: "Deploy certified plant safety officers, EHS managers, and factory inspectors to audit local assembly lines.",
      keyPoints: ["Factories Act credentials checks", "Mock hazard drills logging", "HIRA register management"]
    }
  ];

  // Slider 5: Sourcing & Engagement Models (5 items)
  const engagementModelItems: StaffingItem[] = [
    {
      title: "Managed Service Provider (MSP)",
      subCategory: "Engagement Models",
      desc: "Consolidate and manage your entire contingent workforce program under a single point of control, unifying billing and vendor checks.",
      keyPoints: ["Master vendor program setup", "Unified contingent rate cards", "Unbiased vendor auditing registers"]
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      subCategory: "Engagement Models",
      desc: "Embed our recruitment teams directly into your HR operations to build custom talent pipelines and manage direct hiring.",
      keyPoints: ["Embedded talent teams deployment", "Optimized ATS tracking systems", "Scale permanent hiring pipelines"]
    },
    {
      title: "Executive Search & Direct Hire",
      subCategory: "Engagement Models",
      desc: "Retained search for C-suite officers, board directors, and critical compliance executives matching specific credentials.",
      keyPoints: ["C-Suite target mapping registries", "Psychometric testing checkmarks", "Comprehensive reference verification logs"]
    },
    {
      title: "Vendor Management System (VMS) Integration",
      subCategory: "Engagement Models",
      desc: "Deploying cloud portals to track supplier SLA scores, manage invoices, check compliance, and evaluate workforce rosters.",
      keyPoints: ["Direct API database connectors", "Automatic alert notifications", "Consolidated billing dashboards"]
    },
    {
      title: "Domain-Specific Talent Acquisition",
      subCategory: "Engagement Models",
      desc: "Targeted sourcing for highly technical disciplines such as electronics cleanroom safety, SCADA network protection, or clinical audit boards.",
      keyPoints: ["Domain expert vetting protocols", "Industry standard tests logs", "Rapid matching pipelines database"]
    }
  ];

  // Partners & Associations (Slider 6)
  const partners = [
    { name: "DSCI", cat: "Data Security Council" },
    { name: "NASSCOM", cat: "Tech Association" },
    { name: "CII", cat: "Industry Association" },
    { name: "FICCI", cat: "Trade Association" },
    { name: "ASSOCHAM", cat: "Chamber of Commerce" },
    { name: "Bureau Veritas", cat: "Compliance Partner" },
    { name: "SGS India", cat: "Labor Audit Partner" },
    { name: "DNV", cat: "Risk Advisory Partner" }
  ];

  const renderCard = (item: StaffingItem, idx: number) => (
    <div 
      key={idx} 
      className="group h-full relative bg-white border border-slate-200/80 hover:border-blue-500/30 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl p-6 select-none min-h-[300px]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
      <div className="space-y-4 relative z-10 text-left">
        <span className="text-[9px] font-black tracking-widest text-blue-500 uppercase">
          {item.subCategory}
        </span>
        <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs text-slate-605 line-clamp-3 leading-relaxed font-semibold">
          {item.desc}
        </p>
        <div className="space-y-1 pt-2 border-t border-slate-100">
          <ul className="space-y-1">
            {item.keyPoints.slice(0, 2).map((pt, i) => (
              <li key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between relative z-10 text-[9px] font-black text-slate-400 uppercase tracking-widest">
        <span>SLA Mapped</span>
        <span className="text-blue-600 flex items-center gap-0.5">
          Indemnified <Shield className="w-3 h-3 text-blue-500" />
        </span>
      </div>
    </div>
  );

  const contractCards = contractSourcingItems.map((item, idx) => renderCard(item, idx));
  const payrollCards = payrollRiskItems.map((item, idx) => renderCard(item, idx));
  const grcCards = grcTalentItems.map((item, idx) => renderCard(item, idx));
  const engagementCards = engagementModelItems.map((item, idx) => renderCard(item, idx));

  const partnerCards = partners.map((logo, idx) => (
    <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm text-center flex flex-col justify-center items-center hover:border-blue-500/20 transition-all aspect-[5/3] select-none">
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 text-blue-600 font-black text-xs">
        {logo.name.substring(0, 2).toUpperCase()}
      </div>
      <h4 className="text-xs font-black text-slate-800">{logo.name}</h4>
      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{logo.cat}</p>
    </div>
  ));

  return (
    <Layout>
      <div className="bg-slate-50/50 pb-24 text-slate-600 relative overflow-hidden">
        
        {/* Slider 1: Hero Carousel Section */}
        <section className="relative h-[65dvh] flex items-center bg-white border-b border-slate-200/85">
          <GrcCarousel
            autoplay
            autoplayInterval={6000}
            showArrows={false}
            showDots
            items={heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className="relative w-screen h-[65dvh] flex items-center bg-cover bg-center select-none"
                style={{ backgroundImage: `url(${slide.image})`, width: "100%" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent/10 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10" />
                <div className="container mx-auto px-6 md:px-12 relative z-20 text-left max-w-5xl">
                  <div className="space-y-4 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-650 rounded-full">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-extrabold tracking-widest uppercase">
                        Manpower Services • {slide.badge}
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight font-heading">
                      {slide.title.split("Sourcing")[0]}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-black block">
                        {slide.highlight}
                      </span>
                    </h1>
                    <p className="text-xs md:text-sm text-slate-550 leading-relaxed font-semibold">
                      {slide.description}
                    </p>
                    <div className="pt-2">
                      <a href="#contracting" className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-500/20 text-xs font-bold transition-all hover:scale-[1.02]">
                        Explore Solutions <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          />
        </section>

        {/* Panel 2: Statistics Grid */}
        <section className="py-8 relative overflow-hidden bg-slate-50 border-b border-slate-200/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm text-center flex flex-col items-center">
                  <div className="text-2xl font-black text-slate-900 leading-none">
                    {stat.value}
                    <span className="text-blue-600 text-lg font-bold">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sliders */}
        <div className="container mx-auto px-6 max-w-7xl pt-16 space-y-20">
          
          {/* Slider 2: Compliant Contract Staffing */}
          <section id="contracting" className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Sourcing & SOW</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Compliant Contract Staffing</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                Deploy blue, grey, and white-collar contractors with 100% wage compliance, statutory checks, and structured Statement of Work deliverables.
              </p>
            </div>
            <GrcCarousel items={contractCards} />
          </section>

          {/* Slider 3: Managed Payroll & Risk Transfer */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Co-employment Shield</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Managed Payroll & Risk Transfer</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                Employer of Record payrolling, principal employer legal shields, vendor audit reconciliations, and multi-state dispute resolution.
              </p>
            </div>
            <GrcCarousel items={payrollCards} />
          </section>

          {/* Slider 4: GRC & Tech Talent-as-a-Service */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Experts on Demand</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">GRC & Tech Talent-as-a-Service</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                On-demand deployment of fractional CISOs, security analysts, DPDP privacy officers, ESG disclosure leads, and certified EHS auditors.
              </p>
            </div>
            <GrcCarousel items={grcCards} />
          </section>

          {/* Slider 5: Strategic Sourcing & SOW Models */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">HR Engagement</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Engagement & Sourcing Models</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                MSP consolidation programs, embedded RPO hiring pipelines, executive retained searches, and vendor management systems configurations.
              </p>
            </div>
            <GrcCarousel items={engagementCards} />
          </section>

          {/* Vetting Phases Layout (Standard 5-Phase Vetting) */}
          <section className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Quality Vetting</span>
              <h3 className="text-xl font-black text-slate-900 font-heading">Our 5-Phase Candidate Vetting & Quality Check</h3>
              <p className="text-xs text-slate-500 font-semibold max-w-xl mx-auto">Click a vetting phase below to explore how we screen and verify compliance talent before deployment.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3 flex flex-col gap-2">
                {screeningPhases.map((phase, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhase(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                      selectedPhase === idx
                        ? "bg-slate-950 text-white border-slate-950 shadow-xl"
                        : "bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                      selectedPhase === idx ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                    }`}>{idx + 1}</span>
                    <span className="text-[10px] font-black uppercase tracking-wider">{phase.title}</span>
                  </button>
                ))}
              </div>
              <div className="lg:w-2/3 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between text-left min-h-[220px]">
                <div className="space-y-3">
                  <span className="text-[9px] font-black text-blue-550 uppercase tracking-wider block">Phase {selectedPhase + 1} Vetting • {screeningPhases[selectedPhase].phase}</span>
                  <h4 className="text-base font-black text-slate-900">{screeningPhases[selectedPhase].title}</h4>
                  <p className="text-xs text-slate-605 leading-relaxed font-semibold">{screeningPhases[selectedPhase].desc}</p>
                </div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider pt-4 border-t border-slate-150 mt-4 block">Govenics Vetting Standards</span>
              </div>
            </div>
          </section>

          {/* Slider 6: Partners & Associations */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Industry Ties</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Associations & Staffing Partners</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                Collaborating with leading industry associations and certification bodies to deliver pre-screened, legal, and compliance-aware workforces.
              </p>
            </div>
            <GrcCarousel items={partnerCards} />
          </section>

        </div>
      </div>
    </Layout>
  );
}
