import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Settings,
  DollarSign,
  Truck,
  ShieldAlert,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Zap,
  Scale,
  Leaf,
  Cpu,
  Users
} from "lucide-react";

const riskCategories = [
  {
    id: "regulatory",
    icon: AlertTriangle,
    color: "from-red-500 to-rose-600",
    bgLight: "bg-red-50",
    borderLight: "border-red-100",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
    label: "Regulatory Risk",
    description: "Failure to comply with laws, rules, or government standards.",
    businessImpact: [
      "Non-compliance with tax laws, labor laws, or industry-specific regulations.",
      "Regulatory fines, penalties, and license revocations",
    ],
    solutions: [
      "Real-time regulatory change monitoring",
      "Regulatory advisory and gap analysis",
    ],
    ctaLabel: "Explore Regulatory Solutions",
    ctaHref: "/services/regulatory-compliance",
  },
  {
    id: "operational",
    icon: Settings,
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-100",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    label: "Operational Risk",
    description: "Gaps in processes, training, or controls leading to violations.",
    businessImpact: [
      "Untrained staff mishandling data, missed reporting deadlines.",
      "Operational disruptions and production stoppages",
    ],
    solutions: [
      "Process risk assessment and control mapping",
      "Internal audit frameworks and SOPs",
    ],
    ctaLabel: "Explore Operational Solutions",
    ctaHref: "/services/internal-audit",
  },
  {
    id: "governance",
    icon: Scale,
    color: "from-fuchsia-500 to-pink-600",
    bgLight: "bg-fuchsia-50",
    borderLight: "border-fuchsia-100",
    iconBg: "bg-fuchsia-500/10",
    iconColor: "text-fuchsia-600",
    label: "Governance Risk",
    description: "Weak board oversight or poor internal controls.",
    businessImpact: [
      "Misclassified revenue, inaccurate financial reporting.",
      "Reputational damage leading to loss of business",
    ],
    solutions: [
      "Corporate governance frameworks",
      "Board reporting and oversight mechanisms",
    ],
    ctaLabel: "Explore Governance Solutions",
    ctaHref: "/services/governance-framework",
  },
  {
    id: "financial",
    icon: DollarSign,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    label: "Financial Risk",
    description: "Errors in accounting, reporting, or disclosures.",
    businessImpact: [
      "SEC penalties, investor lawsuits.",
      "Tax penalties and GST non-compliance fines",
    ],
    solutions: [
      "LODR and SEBI disclosure compliance",
      "Financial reporting governance frameworks",
    ],
    ctaLabel: "Explore Financial Solutions",
    ctaHref: "/services/taxation-trade-compliance",
  },
  {
    id: "vendor",
    icon: Truck,
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    borderLight: "border-violet-100",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    label: "Vendor / Third-Party Risk",
    description: "Exposure from suppliers or partners failing compliance.",
    businessImpact: [
      "Vendor data breach triggering GDPR fines.",
      "Supply chain disruption from non-compliant vendors",
    ],
    solutions: [
      "Vendor due diligence and onboarding frameworks",
      "Supplier risk scoring and continuous monitoring",
    ],
    ctaLabel: "Explore Vendor Solutions",
    ctaHref: "/services/vendor-risk-management",
  },
  {
    id: "cybersecurity",
    icon: ShieldAlert,
    color: "from-teal-500 to-cyan-600",
    bgLight: "bg-teal-50",
    borderLight: "border-teal-100",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600",
    label: "Cybersecurity & Data Protection Risk",
    description: "Breaches of personal or sensitive data.",
    businessImpact: [
      "GDPR/HIPAA fines, reputational damage.",
      "CERT-In violation penalties and audit orders",
    ],
    solutions: [
      "DPDP Act and GDPR compliance implementation",
      "VAPT, red teaming, and threat monitoring",
    ],
    ctaLabel: "Explore Cyber Solutions",
    ctaHref: "/services/data-privacy-dpdp",
  },
  {
    id: "esg",
    icon: Leaf,
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-100",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    label: "ESG Risk",
    description: "Misreporting or failing sustainability obligations.",
    businessImpact: [
      "Greenwashing accusations, BRSR misalignment.",
      "Investor backlash and loss of market trust",
    ],
    solutions: [
      "BRSR and ESG reporting frameworks",
      "Environmental and EHS compliance",
    ],
    ctaLabel: "Explore ESG Solutions",
    ctaHref: "/services/environmental-compliance",
  },
  {
    id: "ai-technology",
    icon: Cpu,
    color: "from-cyan-500 to-blue-600",
    bgLight: "bg-cyan-50",
    borderLight: "border-cyan-100",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
    label: "AI & Technology Risk",
    description: "Bias, privacy, or transparency failures in AI systems.",
    businessImpact: [
      "Algorithmic discrimination, lack of explainability.",
      "Regulatory action under emerging AI laws",
    ],
    solutions: [
      "AI governance and ethical frameworks",
      "Technology risk assessments",
    ],
    ctaLabel: "Explore Tech Solutions",
    ctaHref: "/services/enterprise-risk-management",
  },
  {
    id: "people",
    icon: Users,
    color: "from-orange-500 to-amber-600",
    bgLight: "bg-orange-50",
    borderLight: "border-orange-100",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    label: "People Risk",
    description: "Human error, unclear roles, or insufficient training.",
    businessImpact: [
      "91% of compliance incidents stem from staff mistakes.",
      "High turnover affecting control effectiveness",
    ],
    solutions: [
      "HR policy governance and compliance",
      "Interactive training portals and awareness programs",
    ],
    ctaLabel: "Explore People Solutions",
    ctaHref: "/services/hr-policy-governance",
  }
];

export const ComplianceRisk = () => {
  const [expandedId, setExpandedId] = useState<string | null>("regulatory");

  return (
    <section id="compliance-risk" className="py-16 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.04),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-bold uppercase tracking-widest rounded-full">
            <TrendingDown className="w-3.5 h-3.5" />
            Enterprise Compliance Risk
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
            5 Critical Compliance Risks{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Enterprises Face Today
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Understanding your risk landscape is the first step to building a resilient compliance program. Click each risk to see business impact and our solutions.
          </p>
        </div>

        {/* Risk Categories */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {riskCategories.map((risk, idx) => {
            const IconComp = risk.icon;
            const isExpanded = expandedId === risk.id;

            return (
              <motion.div
                key={risk.id}
                layout
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? `${risk.bgLight} ${risk.borderLight} shadow-lg`
                    : "bg-white border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300"
                }`}
              >
                {/* Card Header — always visible */}
                <button
                  id={`risk-toggle-${risk.id}`}
                  onClick={() => setExpandedId(isExpanded ? null : risk.id)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black text-slate-400 border border-slate-200 bg-white shrink-0 transition-all ${
                        isExpanded ? "opacity-0 w-0 p-0 border-0" : ""
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    {/* Icon */}
                    <div
                      className={`p-2.5 rounded-xl ${risk.iconBg} shrink-0 transition-all`}
                    >
                      <IconComp className={`w-5 h-5 ${risk.iconColor}`} />
                    </div>
                    {/* Label */}
                    <div>
                      <div className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                        {risk.label}
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5 max-w-xl leading-relaxed">
                        {risk.description}
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 ml-4 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* Expanded Detail */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-slate-200/60 pt-5 grid md:grid-cols-2 gap-6">
                          {/* Business Impact */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-red-500 shrink-0" />
                              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                                Business Impact
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {risk.businessImpact.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-slate-700 font-semibold leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Compliance Solutions */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                                Compliance Solutions
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {risk.solutions.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-slate-700 font-semibold leading-relaxed"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between flex-wrap gap-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Govenics GRC • {risk.label}
                          </span>
                          <Link
                            to={risk.ctaHref}
                            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/15 hover:scale-[1.02]"
                          >
                            {risk.ctaLabel}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
