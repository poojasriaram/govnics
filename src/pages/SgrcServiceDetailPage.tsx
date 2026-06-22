import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { sgrcServices } from "@/data/sgrc-data";
import { 
  CheckCircle2, Scale, Shield, Building, CreditCard, 
  Factory, Users, ShieldAlert, UserPlus, FileSpreadsheet, 
  Leaf, HelpCircle, ArrowLeft, ArrowRight, ShieldCheck, Briefcase
} from "lucide-react";

export default function SgrcServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = sgrcServices.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  if (!service) {
    return <Navigate to="/sgrc/e-library" replace />;
  }

  // Helper to map Lucide Icons
  const getIcon = (id: string) => {
    switch (id) {
      case "compliance-risk-audit":
        return <Scale className="w-8 h-8 text-blue-600" />;
      case "establishment-compliances":
        return <Building className="w-8 h-8 text-blue-600" />;
      case "payroll-compliance":
        return <CreditCard className="w-8 h-8 text-blue-600" />;
      case "factory-compliance":
        return <Factory className="w-8 h-8 text-blue-600" />;
      case "vendor-compliance":
        return <Users className="w-8 h-8 text-blue-600" />;
      case "mines-compliance":
        return <ShieldAlert className="w-8 h-8 text-blue-600" />;
      case "flexi-staffing":
        return <UserPlus className="w-8 h-8 text-blue-600" />;
      case "payroll-services":
        return <FileSpreadsheet className="w-8 h-8 text-blue-600" />;
      case "ehs":
        return <Leaf className="w-8 h-8 text-blue-600" />;
      default:
        return <Shield className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <Layout>
      <div className="bg-slate-50/50 min-h-screen pb-24 text-slate-700 pt-28">
        
        {/* Navigation Breadcrumb */}
        <div className="container mx-auto px-6 max-w-5xl mb-6">
          <Link 
            to="/sgrc/e-library" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to SGRC Portal
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-5xl mb-12">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-md relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            {/* Spotlights */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="md:w-3/4 space-y-4 relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600">
                {getIcon(service.id)}
                <span className="text-xs font-extrabold uppercase tracking-widest">
                  Statutory GRC Division
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight">
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                {service.tagline}
              </p>
            </div>
            
            <div className="md:w-1/4 flex justify-center relative z-10">
              <div className="w-24 h-24 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-inner">
                {getIcon(service.id)}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="container mx-auto px-6 max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          
          {/* Left Column: Problem & Features (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* About / Problem Statement */}
            <div className="bg-white border border-slate-200/85 rounded-3xl p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-slate-900 font-heading border-l-4 border-blue-600 pl-3">
                Service Overview
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                {service.description}
              </p>
            </div>

            {/* Core Offerings / Features List */}
            <div className="bg-white border border-slate-200/85 rounded-3xl p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-slate-900 font-heading border-l-4 border-blue-600 pl-3">
                Our Comprehensive Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 border border-slate-150 rounded-2xl space-y-2 hover:border-blue-500/20 transition-all">
                    <h3 className="text-sm font-black text-slate-800 flex items-center gap-2">
                      <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion (If applicable) */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white border border-slate-200/85 rounded-3xl p-8 shadow-sm space-y-6">
                <h2 className="text-xl font-black text-slate-900 font-heading border-l-4 border-blue-600 pl-3">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 border border-slate-200/80 rounded-2xl space-y-3 bg-slate-50/50">
                      <h4 className="text-sm font-black text-slate-900 flex items-start gap-2 leading-snug">
                        <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-xs text-slate-550 leading-relaxed font-semibold pl-7">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar ICP & Benefits (1/3 width) */}
          <div className="space-y-8">
            {/* Who Needs This */}
            <div className="bg-white border border-slate-200/85 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                Who Needs This?
              </h3>
              <ul className="space-y-3 pt-2">
                {service.whoNeeds.map((need, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-bold leading-relaxed">
                    <Briefcase className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Business Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-6 shadow-xl space-y-5">
              <h3 className="text-sm font-black uppercase tracking-wider border-l-2 border-white/60 pl-2">
                Compliance Outcomes
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-bold leading-relaxed text-white/90">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link to="/contact">
                  <button className="w-full py-3 bg-white hover:bg-slate-100 text-blue-700 font-bold rounded-xl shadow-md text-xs uppercase tracking-wider transition-all">
                    Request Statutory Audit
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Direct Navigator to e-Library */}
            <div className="bg-slate-900 text-slate-200 rounded-3xl p-6 shadow-md space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-blue-400">
                Interactive e-Library
              </h3>
              <p className="text-xs text-slate-400 font-bold leading-relaxed">
                Need to quickly lookup live state-wise minimum wages, PT slabs, holidays, or Leave limits? Open our digital e-Library database.
              </p>
              <Link 
                to="/sgrc/e-library" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-wider"
              >
                Open e-Library <ArrowRight className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              </Link>
            </div>
          </div>

        </section>

      </div>
    </Layout>
  );
}
