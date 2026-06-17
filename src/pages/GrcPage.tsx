import { Layout } from "@/components/layout/Layout";
import { GrcCarousel } from "@/components/ui/GrcCarousel";
import { servicesData } from "@/data/services-data";
import { Link } from "react-router-dom";
import { Shield, ArrowRight, CheckCircle2, ChevronRight, Briefcase, FileText, Scale, Settings } from "lucide-react";
import heroVerify from "@/assets/hero-verify.jpg";
import heroAiDriven from "@/assets/hero-ai-driven.jpg";
import heroCommand from "@/assets/command_center_1.jpg";
import heroIntegration from "@/assets/hero-integration.jpg";
import verticalsFacility from "@/assets/verticals-facility.jpg";
import heroDrone from "@/assets/hero-drone.jpg";

export default function GrcPage() {
  // Slider 1: Hero Slides (6 slides)
  const heroSlides = [
    {
      title: "Enterprise Governance, Risk & Compliance",
      highlight: "Unified GRC Ecosystem",
      description: "Establish robust board-level oversight, risk dashboards, and statutory alignments across multi-state factory floors and corporate entities.",
      image: heroVerify,
      badge: "Governance"
    },
    {
      title: "Regulatory Adherence & Certifications",
      highlight: "Compliance Assurance",
      description: "Automate and coordinate audit-ready postures for labor, environmental laws, certifications, and taxation mandates with zero slippage.",
      image: heroCommand,
      badge: "Compliance"
    },
    {
      title: "Managed Payroll & HR Operations",
      highlight: "Statutory Risk Absorption",
      description: "End-to-end statutory payroll processing, EOR risk transfer, and multi-state compliance auditing managed by domain experts.",
      image: heroAiDriven,
      badge: "Managed Payroll"
    },
    {
      title: "Data Privacy & Cybersecurity Risk",
      highlight: "Digital Trust Architecture",
      description: "Align IT operations with DPDP Act, ISO 27001, CERT-In directive, and SEBI cyber policies to defend digital assets.",
      image: heroIntegration,
      badge: "Cyber Security"
    },
    {
      title: "Transaction & Supply Chain Due Diligence",
      highlight: "Risk Intelligence",
      description: "Deep-dive vendor risk assessments, Scope 3 due diligence, and M&A compliance evaluation to protect corporate assets.",
      image: verticalsFacility,
      badge: "Advisory"
    },
    {
      title: "Transactional Helpdesk & Back-Office BPO",
      highlight: "Operational Scaling",
      description: "Outsource high-volume statutory filings, claims processing, onboarding checks, and database management to secure service centers.",
      image: heroDrone,
      badge: "BPO Services"
    }
  ];

  // Helper to filter and map service cards
  const renderServiceCard = (serviceId: string, icon: React.ReactNode) => {
    const serv = servicesData.find(s => s.id === serviceId);
    if (!serv) return null;
    return (
      <div className="group h-full relative bg-white border border-slate-200/80 hover:border-blue-500/30 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl p-6 select-none min-h-[380px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
        <div className="space-y-4 relative z-10 text-left">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-blue-50 border border-blue-100 rounded-xl text-blue-600">
              {icon}
            </div>
            <span className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[8px] font-bold text-slate-500 uppercase">
              {serv.standards[0] || "GRC Standard"}
            </span>
          </div>
          <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
            {serv.title}
          </h3>
          <p className="text-xs text-slate-650 line-clamp-3 leading-relaxed font-semibold">
            {serv.problem}
          </p>
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Deliverables Include:</span>
            <ul className="space-y-1">
              {serv.benefits.slice(0, 2).map((ben, i) => (
                <li key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{ben}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between relative z-10">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            {serv.category.split(" ")[0]} Division
          </span>
          <Link
            to={`/services/${serv.id}`}
            className="flex items-center gap-1 text-[10px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider"
          >
            <span>Read Detail</span>
            <ArrowRight className="w-3 h-3 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    );
  };

  // Sub-sections filtering
  const complianceItems = [
    renderServiceCard("regulatory-compliance", <Scale className="w-5 h-5" />),
    renderServiceCard("labour-law-compliance", <Briefcase className="w-5 h-5" />),
    renderServiceCard("environmental-compliance", <Settings className="w-5 h-5" />),
    renderServiceCard("taxation-trade-compliance", <FileText className="w-5 h-5" />),
    renderServiceCard("data-privacy-dpdp", <Shield className="w-5 h-5" />),
    renderServiceCard("esg-sustainability", <Scale className="w-5 h-5" />),
    renderServiceCard("accreditation-services", <Briefcase className="w-5 h-5" />)
  ].filter(Boolean) as React.ReactNode[];

  const payrollItems = [
    renderServiceCard("statutory-payroll-compliance", <Briefcase className="w-5 h-5" />),
    renderServiceCard("hr-data-privacy-security", <Shield className="w-5 h-5" />),
    renderServiceCard("hr-policy-governance", <FileText className="w-5 h-5" />),
    renderServiceCard("advanced-taxation-perquisites", <Settings className="w-5 h-5" />),
    renderServiceCard("managed-staffing-risk-shield", <Scale className="w-5 h-5" />)
  ].filter(Boolean) as React.ReactNode[];

  const bpoItems = [
    renderServiceCard("compliance-processing-bpo", <Settings className="w-5 h-5" />),
    renderServiceCard("hr-helpdesk-servicing", <Briefcase className="w-5 h-5" />),
    renderServiceCard("back-office-operations-bpo", <FileText className="w-5 h-5" />),
    renderServiceCard("document-record-management", <Shield className="w-5 h-5" />)
  ].filter(Boolean) as React.ReactNode[];

  const riskItems = [
    renderServiceCard("governance-framework", <Scale className="w-5 h-5" />),
    renderServiceCard("enterprise-risk-management", <Shield className="w-5 h-5" />),
    renderServiceCard("internal-audit", <Settings className="w-5 h-5" />),
    renderServiceCard("anti-fraud-investigation", <FileText className="w-5 h-5" />)
  ].filter(Boolean) as React.ReactNode[];

  // Partner Logos (Slider 6)
  const partners = [
    { name: "ServiceNow", cat: "Technology & SaaS" },
    { name: "MetricStream", cat: "Technology & SaaS" },
    { name: "VComply", cat: "Technology & SaaS" },
    { name: "Persefoni", cat: "Technology & SaaS" },
    { name: "Qualys", cat: "Technology & SaaS" },
    { name: "Bureau Veritas", cat: "Certification Body" },
    { name: "SGS India", cat: "Certification Body" },
    { name: "DNV", cat: "Certification Body" }
  ];

  const partnerItems = partners.map((p, idx) => (
    <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm text-center flex flex-col justify-center items-center hover:border-blue-500/20 transition-all aspect-[5/3] select-none">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3 text-blue-600 font-black text-sm">
        {p.name.substring(0, 2).toUpperCase()}
      </div>
      <h4 className="text-xs font-black text-slate-800">{p.name}</h4>
      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{p.cat}</p>
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-600 rounded-full">
                      <Shield className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-extrabold tracking-widest uppercase">
                        GRC Division • {slide.badge}
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight font-heading">
                      {slide.title.split(",")[0]}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-black block">
                        {slide.highlight}
                      </span>
                    </h1>
                    <p className="text-xs md:text-sm text-slate-550 leading-relaxed font-semibold">
                      {slide.description}
                    </p>
                    <div className="pt-2">
                      <a href="#compliance" className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-500/20 text-xs font-bold transition-all hover:scale-[1.02]">
                        Explore Offerings <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          />
        </section>

        {/* Core Content Sliders */}
        <div className="container mx-auto px-6 max-w-7xl pt-16 space-y-20">
          
          {/* Slider 2: Compliance Services */}
          <section id="compliance" className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Regulatory Adherence</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Compliance Services</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                Structured monitoring frameworks, factory audits, consents, and legal reconciliation checklists designed for multi-state corporate and plant compliance.
              </p>
            </div>
            <GrcCarousel items={complianceItems} />
          </section>

          {/* Slider 3: Managed Payroll & HR */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Risk Absorption</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Managed Payroll & HR</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                Ensure compliance-integrated execution of payrolling, statutory PF/ESI, compensation structures, vendor security audits, and contractor risk shields.
              </p>
            </div>
            <GrcCarousel items={payrollItems} />
          </section>

          {/* Slider 4: BPO Services */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Operational Outsourcing</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">BPO Services</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                Outsource high-volume filings processing, onboarding query helpdesks, back-office record management, and document digitization.
              </p>
            </div>
            <GrcCarousel items={bpoItems} />
          </section>

          {/* Slider 5: Governance & Risk */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Executive Oversight</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Governance & Risk</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                Align board charters, design robust enterprise risk self-assessments (ERM), deploy key risk registers, and handle internal investigations.
              </p>
            </div>
            <GrcCarousel items={riskItems} />
          </section>

          {/* Slider 6: Partners & Integrations */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 text-left">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Integrations Network</span>
              <h2 className="text-2xl font-black text-slate-900 font-heading">GRC Integrations & Certifications</h2>
              <p className="text-xs text-slate-550 max-w-xl font-semibold mt-1">
                Integrating seamlessly with market-leading risk intelligence solutions and certification bodies to automate audit readiness.
              </p>
            </div>
            <GrcCarousel items={partnerItems} />
          </section>

        </div>
      </div>
    </Layout>
  );
}
