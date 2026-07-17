import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Building,
  Building2,
  Globe,
  Landmark,
} from "lucide-react";

const sizeSegments = [
  {
    id: "starter",
    icon: Users,
    range: "20 – 100",
    unit: "Employees",
    label: "Startup & SME",
    gradient: "from-emerald-500 to-teal-600",
    bgCard: "bg-emerald-50 border-emerald-100 hover:border-emerald-300",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    tagColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    challenges: [
      "Limited internal compliance capacity",
      "Basic labour law & PF/ESI obligations",
      "FSSAI, MSME, Shop Act registrations",
    ],
    recommended: ["Labour Law Compliance", "Statutory Payroll", "Registrations"],
  },
  {
    id: "growth",
    icon: Building,
    range: "100 – 500",
    unit: "Employees",
    label: "Growth Stage",
    gradient: "from-blue-500 to-indigo-600",
    bgCard: "bg-blue-50 border-blue-100 hover:border-blue-300",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    tagColor: "bg-blue-100 text-blue-700 border-blue-200",
    challenges: [
      "Multi-location compliance tracking",
      "Contract labour and vendor management",
      "HR policy standardization across branches",
    ],
    recommended: ["GRC BPO Services", "Vendor Risk Mgmt", "HR Policy Governance"],
  },
  {
    id: "midmarket",
    icon: Building2,
    range: "500 – 3,000",
    unit: "Employees",
    label: "Mid-Market",
    gradient: "from-violet-500 to-purple-600",
    bgCard: "bg-violet-50 border-violet-100 hover:border-violet-300",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    tagColor: "bg-violet-100 text-violet-700 border-violet-200",
    challenges: [
      "Multi-state regulatory filings across 10+ states",
      "Enterprise Risk Management (ERM) structure",
      "Internal audit and SOC readiness",
    ],
    recommended: ["Enterprise Risk Mgmt", "Internal Audit", "Governance Framework"],
  },
  {
    id: "enterprise",
    icon: Landmark,
    range: "3,000 – 10,000",
    unit: "Employees",
    label: "Enterprise",
    gradient: "from-slate-700 to-slate-900",
    bgCard: "bg-slate-50 border-slate-200 hover:border-slate-400",
    iconBg: "bg-slate-200",
    iconColor: "text-slate-700",
    tagColor: "bg-slate-100 text-slate-700 border-slate-200",
    challenges: [
      "Board-level governance and ESG disclosures",
      "ISO 27001, SOC 2 and cyber compliance",
      "Pan-India multi-plant CLRA and EHS audits",
    ],
    recommended: ["Corporate Governance", "Cyber GRC", "BRSR / ESG Reporting"],
  },
  {
    id: "global",
    icon: Globe,
    range: "10,000+",
    unit: "Employees",
    label: "Global Enterprise",
    gradient: "from-blue-600 to-cyan-600",
    bgCard: "bg-cyan-50 border-cyan-100 hover:border-cyan-300",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    tagColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
    challenges: [
      "Multi-jurisdiction regulatory complexity",
      "Global ESG and TCFD reporting obligations",
      "Cross-border data privacy (GDPR, DPDP, CCPA)",
    ],
    recommended: ["Global GRC Advisory", "Data Privacy", "ESG & Sustainability"],
  },
];

export const CompanySize = () => {
  return (
    <section id="company-size" className="py-16 bg-slate-50/70 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
            <Users className="w-3.5 h-3.5" />
            Compliance By Company Size
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-heading">
            We Serve Every Stage of{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Enterprise Growth
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Your compliance obligations evolve as your organization scales. Our frameworks are calibrated to your exact headcount band and industry footprint.
          </p>
        </div>

        {/* Size Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {sizeSegments.map((seg, idx) => {
            const IconComp = seg.icon;
            return (
              <motion.div
                key={seg.id}
                id={`size-${seg.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className={`group relative bg-white border rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col ${seg.bgCard}`}
              >
                {/* Top color bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${seg.gradient}`} />

                <div className="p-6 flex flex-col flex-1 space-y-4">
                  {/* Icon + Tag */}
                  <div className="flex items-start justify-between">
                    <div className={`p-2.5 rounded-xl ${seg.iconBg}`}>
                      <IconComp className={`w-5 h-5 ${seg.iconColor}`} />
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${seg.tagColor}`}>
                      {seg.label}
                    </span>
                  </div>

                  {/* Size Range */}
                  <div>
                    <div className="text-2xl font-black text-slate-900 leading-tight">
                      {seg.range}
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {seg.unit}
                    </div>
                  </div>

                  {/* Compliance Challenges */}
                  <div className="flex-1 space-y-2">
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                      Key Challenges
                    </div>
                    <ul className="space-y-1.5">
                      {seg.challenges.map((ch, i) => (
                        <li
                          key={i}
                          className="text-[10px] text-slate-600 font-semibold leading-snug flex items-start gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                          {ch}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Services */}
                  <div className="space-y-2">
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                      Recommended
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {seg.recommended.map((rec, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 bg-blue-500/8 border border-blue-500/15 rounded text-[8px] font-black text-blue-600 uppercase tracking-widest"
                        >
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 pb-5 pt-0">
                  <Link
                    to="#lead-capture"
                    id={`company-size-cta-${seg.id}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-md shadow-blue-500/15 hover:scale-[1.02]"
                  >
                    Get Assessment <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
