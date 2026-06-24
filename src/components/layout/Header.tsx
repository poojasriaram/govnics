import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ArrowRight, ShieldCheck, ChevronDown,
  Scale, Building, CreditCard, Factory, Users, ShieldAlert, UserPlus, FileSpreadsheet, Leaf,
  Calendar, BookOpen, FileText, Megaphone, Heart, Video, Coins, Percent, Clock, CalendarCheck, Globe,
  Calculator, User, LogOut
} from "lucide-react";
import { industriesData } from "@/data/industries-data";
import { servicesData } from "@/data/services-data";
import { useAuth } from "@/context/AuthContext";


export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setProfileDropdownOpen(false);
  }, [pathname]);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    const baseClass = "px-2 xl:px-1.5 2xl:px-3 h-full flex items-center text-[13px] 2xl:text-sm font-bold transition-colors duration-200 whitespace-nowrap";
    return `${baseClass} ${isActive ? "text-blue-600" : "text-black hover:text-blue-600"}`;
  };

  const getNavItemClass = () => {
    const baseClass = "px-2 xl:px-1.5 2xl:px-3 h-full flex items-center gap-1 text-[13px] 2xl:text-sm font-bold transition-colors duration-200 whitespace-nowrap";
    return `${baseClass} text-black hover:text-blue-600`;
  };

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md"
        : "bg-transparent"
        }`}
    >
      {/* Top Info Bar */}
      <div
        className={`border-b transition-all duration-300 ${scrolled
          ? "h-0 opacity-0 overflow-hidden"
          : "h-10 opacity-100 border-slate-200 bg-slate-50 text-slate-600"
          }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-center text-[11px] font-bold tracking-wider uppercase text-center">
          <span className="text-slate-500">
            Governance, Risk & Compliance Excellence
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-xl font-black tracking-tight transition-colors font-heading text-slate-900 group-hover:text-blue-600"
            >
              GOVENICS
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] -mt-1 uppercase text-slate-400">
              GRC Consulting
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-stretch gap-1 h-full">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>

          {/* GRC Dropdown (Replaces Solutions) */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/grc" className={getNavItemClass()}>
              GRC <ChevronDown className="w-4 h-4 text-current" />
            </Link>
            {activeDropdown === "services" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[98dvw] max-w-7xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-6 gap-5 animate-slide-up-dropdown mt-1 text-left">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="col-span-6 pb-3 mb-1 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    Governance, Risk & Compliance Division (GRC)
                  </h3>
                </div>

                {/* Column 1: Compliance Services */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      Compliance Services
                    </h4>
                    <p className="text-[9px] text-slate-450 font-medium pl-2.5 mt-0.5 leading-snug">
                      Regulatory mapping & audits
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-1.5">
                    {[
                      { id: "labour-law-compliance", label: "Labour & Employment", items: "PF, ESI • POSH Setup" },
                      { id: "environmental-compliance", label: "Environmental & EHS", items: "PCB Consents • Safety • EPR" },
                      { id: "taxation-trade-compliance", label: "Taxation & Trade", items: "GST E-Invoicing • EXIM" },
                      { id: "data-privacy-dpdp", label: "Data Privacy & Cyber", items: "DPDP Act • ISO 27001" },
                      { id: "esg-sustainability", label: "ESG & Sustainability", items: "BRSR Disclosures • Audits" },
                      { id: "accreditation-services", label: "Accreditations", items: "NABH, NABL & NAAC • ISO" }
                    ].map((item) => {
                      const serv = servicesData.find((s) => s.id === item.id);
                      if (!serv) return null;
                      return (
                        <Link
                          key={serv.id}
                          to={`/services/${serv.id}`}
                          onClick={() => setActiveDropdown(null)}
                          className="flex flex-col p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </span>
                          <span className="text-[9px] text-slate-455 leading-snug mt-0.5 font-medium">
                            {item.items}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Managed Payroll & HR */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      Managed Payroll & HR
                    </h4>
                    <p className="text-[9px] text-slate-455 font-medium pl-2.5 mt-0.5 leading-snug">
                      Processing & HR governance
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-1.5">
                    {[
                      { id: "statutory-payroll-compliance", label: "Statutory Payroll", items: "Processing • Audits" },
                      { id: "hr-data-privacy-security", label: "HR Data Privacy", items: "HRIS Encryption • PII" },
                      { id: "hr-policy-governance", label: "Policy & Governance", items: "Drafting • Handbooks" },
                      { id: "advanced-taxation-perquisites", label: "Comp. & Benefits", items: "ESOP/RSU • FBT" },
                      { id: "managed-staffing-risk-shield", label: "Staffing & Vendor Gov.", items: "Risk Shield • CLRA Audits" }
                    ].map((item) => {
                      const serv = servicesData.find((s) => s.id === item.id);
                      if (!serv) return null;
                      return (
                        <Link
                          key={serv.id}
                          to={`/services/${serv.id}`}
                          onClick={() => setActiveDropdown(null)}
                          className="flex flex-col p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </span>
                          <span className="text-[9px] text-slate-455 leading-snug mt-0.5 font-medium">
                            {item.items}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: GRC BPO & Governance */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      GRC BPO & Governance
                    </h4>
                    <p className="text-[9px] text-slate-455 font-medium pl-2.5 mt-0.5 leading-snug">
                      Outsourcing & board oversight
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] font-black text-slate-450 uppercase tracking-wider block pl-2">BPO Services</span>
                    <div className="flex flex-col gap-1 pl-1.5">
                      {[
                        { id: "compliance-processing-bpo", label: "Compliance Processing" },
                        { id: "hr-helpdesk-servicing", label: "HR Helpdesk" },
                        { id: "back-office-operations-bpo", label: "Back-Office Ops" },
                        { id: "document-record-management", label: "Document Registry BPO" }
                      ].map((item) => {
                        const serv = servicesData.find((s) => s.id === item.id);
                        if (!serv) return null;
                        return (
                          <Link
                            key={serv.id}
                            to={`/services/${serv.id}`}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors py-0.5 pl-1.5 block"
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[9px] font-black text-slate-450 uppercase tracking-wider block pl-2">Governance & Risk</span>
                    <div className="flex flex-col gap-1 pl-1.5">
                      {[
                        { id: "governance-framework", label: "Corporate Governance" },
                        { id: "enterprise-risk-management", label: "Enterprise Risk (ERM)" },
                        { id: "internal-audit", label: "Internal Audit" },
                        { id: "anti-fraud-investigation", label: "Anti-Fraud & Ethics" }
                      ].map((item) => {
                        const serv = servicesData.find((s) => s.id === item.id);
                        if (!serv) return null;
                        return (
                          <Link
                            key={serv.id}
                            to={`/services/${serv.id}`}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors py-0.5 pl-1.5 block"
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Column 4: Statutory GRC (SGRC) Services */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      Statutory GRC (SGRC)
                    </h4>
                    <p className="text-[9px] text-slate-455 font-medium pl-2.5 mt-0.5 leading-snug">
                      Statutory & factory compliance
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-1 text-left">
                    <Link 
                      to="/sgrc/services"
                      onClick={() => setActiveDropdown(null)}
                      className="text-[9px] font-extrabold text-blue-600 hover:text-blue-750 uppercase tracking-wider pl-2 py-0.5 border-b border-slate-100 flex items-center gap-1.5 mb-1.5 shrink-0"
                    >
                      All SGRC Services &rarr;
                    </Link>
                    {[
                      { id: "compliance-risk-audit", label: "Compliance Risk Audit", icon: Scale },
                      { id: "establishment-compliances", label: "Establishment Compliances", icon: Building },
                      { id: "payroll-compliance", label: "Payroll Compliance", icon: CreditCard },
                      { id: "factory-compliance", label: "Factory Compliance", icon: Factory },
                      { id: "vendor-compliance", label: "Vendor Compliance", icon: Users },
                      { id: "mines-compliance", label: "Mines Compliance", icon: ShieldAlert },
                      { id: "flexi-staffing", label: "Flexi Staffing Services", icon: UserPlus },
                      { id: "payroll-services", label: "Payroll Services", icon: FileSpreadsheet },
                      { id: "ehs", label: "EHS (Environmental)", icon: Leaf }
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.id}
                          to={`/sgrc/services/${item.id}`}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-50 transition-all group"
                        >
                          <div className="p-1 bg-blue-500/10 text-blue-600 rounded group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                            {item.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 5: GRC Resources & Tools */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      GRC Resources & Tools
                    </h4>
                    <p className="text-[9px] text-slate-455 font-medium pl-2.5 mt-0.5 leading-snug">
                      Guides, calculators & circulars
                    </p>
                  </div>

                  <div className="space-y-2 pl-2">
                    <Link 
                      to="/sgrc/e-library"
                      onClick={() => setActiveDropdown(null)}
                      className="text-[10px] font-black text-slate-800 hover:text-blue-600 uppercase tracking-widest flex items-center gap-1.5 pb-1 border-b border-slate-100"
                    >
                      Explore e-Library &rarr;
                    </Link>
                    <div className="grid grid-cols-1 gap-1">
                      {[
                        { id: "minimum-wages", label: "Latest Minimum Wages", icon: Coins },
                        { id: "professional-tax", label: "Professional Tax", icon: Percent },
                        { id: "labour-welfare-fund", label: "Labour Welfare Fund", icon: Users },
                        { id: "leaves-working-hours", label: "Leave & Working Hours", icon: Clock },
                        { id: "holidays-list", label: "Holidays List", icon: Calendar },
                        { id: "calculators", label: "Statutory Calculators", icon: Calculator },
                        { id: "fcc", label: "FCC Compliance Calendar", icon: CalendarCheck },
                        { id: "lei", label: "LEI Compliance Calendar", icon: Globe }
                      ].map((item) => {
                        const Icon = item.icon;
                        const route = item.id === "calculators" ? "/sgrc/estimator" : `/sgrc/e-library?tab=${item.id}`;
                        return (
                          <Link
                            key={item.id}
                            to={route}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center gap-2 py-0.5 px-1 rounded-lg hover:bg-slate-50 transition-all group"
                          >
                            <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                            <span className="text-[11px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors truncate">
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Column 6: GRC Knowledge Hub */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      GRC Knowledge Hub
                    </h4>
                    <p className="text-[9px] text-slate-455 font-medium pl-2.5 mt-0.5 leading-snug">
                      Data sheets, case studies & news
                    </p>
                  </div>

                  <div className="space-y-2 pl-2">
                    <div className="flex flex-col gap-1 border-b border-slate-100 pb-1.5 text-left">
                      <Link 
                        to="/resources"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[10px] font-black text-slate-800 hover:text-blue-600 uppercase tracking-widest block"
                      >
                        Knowledge Hub &rarr;
                      </Link>
                      <Link 
                        to="/analytics"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[10px] font-black text-blue-600 hover:text-blue-750 uppercase tracking-widest block mt-1"
                      >
                        GRC Analytics &rarr;
                      </Link>
                      <Link 
                        to="/sgrc/resources"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[10px] font-black text-slate-800 hover:text-blue-600 uppercase tracking-widest block mt-1"
                      >
                        SGRC Resources List &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-1">
                      {[
                        { id: "events", label: "Events", icon: Calendar },
                        { id: "case-studies", label: "Case Studies", icon: BookOpen },
                        { id: "blog", label: "Blog", icon: FileText },
                        { id: "media", label: "Media & Press Release", icon: Megaphone },
                        { id: "csr", label: "CSR", icon: Heart },
                        { id: "webinar", label: "Webinars & Opinions", icon: Video }
                      ].map((item) => {
                        const Icon = item.icon;
                        const route = item.id === "webinar" ? "/sgrc/e-library?tab=webinar" : "/sgrc/resources";
                        return (
                          <Link
                            key={item.id}
                            to={route}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center gap-2 py-0.5 px-1 rounded-lg hover:bg-slate-50 transition-all group"
                          >
                            <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                            <span className="text-[11px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors truncate">
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Cybersecurity Dropdown */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("cybersecurity")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/cybersecurity" className={getNavItemClass()}>
              Cybersecurity <ChevronDown className="w-4 h-4 text-current" />
            </Link>
            {activeDropdown === "cybersecurity" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[95dvw] max-w-6xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-4 gap-6 animate-slide-up-dropdown mt-1 text-left">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="col-span-4 pb-3 mb-1 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    Cybersecurity & Offensive Security Division
                  </h3>
                </div>

                {/* Column 1: Cyber GRC & Compliance */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      Cyber GRC & Compliance
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-2.5">
                    <Link to="/cybersecurity#grc-compliance" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Framework Implementation</Link>
                    <Link to="/cybersecurity#grc-compliance" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Indian Regulatory Compliance</Link>
                    <Link to="/cybersecurity#grc-compliance" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Cyber Governance</Link>
                  </div>
                </div>

                {/* Column 2: Offensive Security (VAPT) */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      Offensive Security (VAPT)
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-2.5">
                    <Link to="/cybersecurity#offensive-security" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Core Penetration Testing</Link>
                    <Link to="/cybersecurity#offensive-security" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Advanced Attack Simulation</Link>
                    <Link to="/cybersecurity#offensive-security" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Cloud & Configuration</Link>
                  </div>
                </div>

                {/* Column 3: Incident Response & Defense */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      Incident Response & Defense
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-2.5">
                    <Link to="/cybersecurity#incident-defense" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Response & Retainer Services</Link>
                    <Link to="/cybersecurity#incident-defense" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Forensics & Evidence</Link>
                    <Link to="/cybersecurity#incident-defense" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Crisis Management</Link>
                  </div>
                </div>

                {/* Column 4: Specialized Cyber Solutions */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      Specialized Solutions
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-2.5">
                    <Link to="/cybersecurity#specialized-solutions" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">OT & Industrial Security</Link>
                    <Link to="/cybersecurity#specialized-solutions" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Ecosystem & Supply Chain</Link>
                    <Link to="/cybersecurity#specialized-solutions" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Transaction & Product Security</Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* ESG Dropdown */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("esg")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/esg" className={getNavItemClass()}>
              ESG <ChevronDown className="w-4 h-4 text-current" />
            </Link>
            {activeDropdown === "esg" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90dvw] max-w-4xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-6 animate-slide-up-dropdown mt-1 text-left">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="col-span-2 pb-3 mb-1 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    ESG Compliance & Sustainability Advisory Division
                  </h3>
                </div>

                {/* Column 1: ESG Compliance Services */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      ESG Compliance Services
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-2.5">
                    <Link to="/esg#ehs" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Environmental & EHS Regulatory</Link>
                    <Link to="/esg#labor" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Supply Chain & Labor Compliance</Link>
                    <Link to="/esg#privacy" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Global Data Privacy (G in ESG)</Link>
                    <Link to="/esg#privacy" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Mandatory Disclosure Readiness</Link>
                  </div>
                </div>

                {/* Column 2: Sustainability & Governance Advisory */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      Sustainability & Governance Advisory
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-2.5">
                    <Link to="/esg#climate" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Decarbonization & Climate Strategy</Link>
                    <Link to="/esg#advisory" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Global ESG Reporting Frameworks</Link>
                    <Link to="/esg#advisory" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Circular Economy & Resource Efficiency</Link>
                    <Link to="/esg#advisory" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Board Governance & ESG Integration</Link>
                    <Link to="/esg#advisory" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors">Transaction Advisory (M&A)</Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Industry Mega Dropdown */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/industries" className={getNavItemClass()}>
              Industries <ChevronDown className="w-4 h-4 text-current" />
            </Link>
            {activeDropdown === "industries" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[95dvw] max-w-6xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-4 gap-6 animate-slide-up-dropdown mt-1">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="col-span-4 pb-3 mb-1 border-b border-slate-100">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    Industry Segments & GRC Calibration
                  </h3>
                </div>
                {clusters.map((clusterName) => (
                  <div key={clusterName} className="space-y-2.5">
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider border-l-2 border-blue-500 pl-2">
                      {clusterName}
                    </h4>
                    <div className="flex flex-col gap-1.5 pl-2">
                      {industriesData
                        .filter((ind) => ind.cluster === clusterName)
                        .map((ind) => {
                          const IconComp = ind.icon;
                          return (
                            <Link
                              key={ind.id}
                              to={`/industries/${getClusterId(clusterName)}#${ind.id}`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors py-0.5 group/link"
                            >
                              <IconComp className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-blue-600 transition-colors shrink-0" />
                              <span className="truncate">{ind.title}</span>
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Manpower Services Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("staffing")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/staffing" className={getNavItemClass()}>
              Manpower Services <ChevronDown className="w-4 h-4 text-current" />
            </Link>
            {activeDropdown === "staffing" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 flex flex-col gap-2.5 animate-slide-up-dropdown mt-1">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="pb-1.5 mb-0.5 border-b border-slate-100">
                  <h3 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                    Manpower Solutions
                  </h3>
                </div>
                <Link to="/staffing?tab=offerings" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Offerings</Link>
                <Link to="/staffing?tab=industries" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Industries</Link>
                <Link to="/staffing?tab=engagement-models" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Engagement Models</Link>
                <Link to="/staffing?tab=platforms" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors">Platforms</Link>
              </div>
            )}
          </div>

          {/* Partners Link */}
          <Link to="/partners" className={getLinkClass("/partners")}>
            Partners
          </Link>

          {/* About Us Link */}
          <Link to="/about" className={getLinkClass("/about")}>
            About Us
          </Link>
        </div>

        {/* Action Buttons */}
        {!isAuthenticated ? (
          <div className="hidden xl:flex items-center gap-3">
            <Link to="/login" className="text-xs font-extrabold text-slate-800 hover:text-blue-600 transition-colors uppercase tracking-wider px-2 py-1">
              Sign In
            </Link>
            <Link to="/register">
              <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-500/25 text-xs font-bold tracking-wide transition-all hover:scale-[1.02]">
                Get Started <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        ) : (
          <div className="hidden xl:flex items-center gap-3 relative">
            <button 
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/80 hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-all cursor-pointer select-none"
            >
              <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-650 flex items-center justify-center text-white text-[10px] font-black shrink-0">
                {user?.fullName?.substring(0, 2).toUpperCase() || "US"}
              </div>
              <div className="flex flex-col text-left max-w-[120px]">
                <span className="text-[11px] font-black text-slate-900 truncate leading-tight">
                  {user?.fullName}
                </span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider truncate leading-none mt-0.5">
                  {user?.designation}
                </span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${profileDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {profileDropdownOpen && (
              <div className="absolute top-full right-0 w-64 bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 animate-slide-up-dropdown mt-1.5 text-left z-50">
                <div className="pb-3 border-b border-slate-100 mb-2">
                  <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">
                    Active GRC Session
                  </div>
                  <div className="text-xs font-black text-slate-800 mt-1 truncate">
                    {user?.fullName}
                  </div>
                  <div className="text-[10px] text-slate-450 font-bold leading-tight truncate">
                    {user?.designation} • {user?.companyName}
                  </div>
                  <div className="text-[9px] text-slate-400 font-medium truncate">
                    {user?.email}
                  </div>
                  {user?.primaryStandard && (
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 border border-blue-100 rounded text-[9px] font-bold text-blue-700 uppercase">
                      <ShieldCheck className="w-3 h-3 shrink-0" />
                      <span>{user.primaryStandard} Target</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-3">
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                    Calibrated GRC Scope
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {user?.grcScope?.slice(0, 3).map((scope, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 text-[8px] font-black text-slate-500 rounded uppercase">
                        {scope.split(" ")[0]}
                      </span>
                    ))}
                    {user?.grcScope && user.grcScope.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 text-[8px] font-black text-slate-500 rounded uppercase">
                        +{user.grcScope.length - 3} More
                      </span>
                    )}
                  </div>
                  <div className="text-[9px] text-slate-450 font-bold mt-1 flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Maturity: {user?.maturity}</span>
                    </div>
                    <div className="text-[8.5px] text-slate-400 font-medium">
                      Sector: {user?.industry}
                    </div>
                    <div className="text-[8.5px] text-slate-400 font-medium">
                      Scope: {user?.geoFootprint}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-1">
                  <Link 
                    to="/sgrc/e-library" 
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>My e-Library Portal</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 p-1.5 rounded-lg hover:bg-rose-50 text-xs font-bold text-rose-700 transition-colors text-left font-sans"
                  >
                    <LogOut className="w-3.5 h-3.5 text-rose-450" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 transition-colors text-slate-800 hover:text-slate-900"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200/80 p-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col gap-1.5">
            <Link to="/" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg">
              Home
            </Link>

            {/* Mobile Accordion for GRC */}
            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                <span>GRC</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="pl-4 my-1 flex flex-col gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100 max-h-[450px] overflow-y-auto">
                  <Link
                    to="/grc"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-blue-600 font-extrabold flex items-center gap-1 py-1 border-b border-slate-200/80 mb-2 animate-fade-in"
                  >
                    View Main GRC Page <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Compliance Services */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      Compliance Services
                    </div>
                    <div className="pl-2 flex flex-col gap-1.5">
                      {[
                        { id: "labour-law-compliance", label: "Labour & Employment" },
                        { id: "environmental-compliance", label: "Environmental & EHS" },
                        { id: "taxation-trade-compliance", label: "Taxation & Trade" },
                        { id: "data-privacy-dpdp", label: "Data Privacy & Cyber" },
                        { id: "esg-sustainability", label: "ESG & Sustainability" },
                        { id: "accreditation-services", label: "Accreditations" }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          to={`/services/${item.id}`}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Managed Payroll & HR */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      Managed Payroll & HR
                    </div>
                    <div className="pl-2 flex flex-col gap-1.5">
                      {[
                        { id: "statutory-payroll-compliance", label: "Statutory Payroll" },
                        { id: "hr-data-privacy-security", label: "HR Data Privacy & Security" },
                        { id: "hr-policy-governance", label: "HR Policy & Governance" },
                        { id: "advanced-taxation-perquisites", label: "Compensation & Benefits" },
                        { id: "managed-staffing-risk-shield", label: "Staffing & Vendor Gov." }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          to={`/services/${item.id}`}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* BPO Services */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      BPO Services
                    </div>
                    <div className="pl-2 flex flex-col gap-1.5">
                      {[
                        { id: "compliance-processing-bpo", label: "Compliance Processing" },
                        { id: "hr-helpdesk-servicing", label: "HR Helpdesk & Servicing" },
                        { id: "back-office-operations-bpo", label: "Back-Office Operations" },
                        { id: "document-record-management", label: "Document & Record BPO" }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          to={`/services/${item.id}`}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Governance & Risk */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      Governance & Risk
                    </div>
                    <div className="pl-2 flex flex-col gap-1.5">
                      {[
                        { id: "governance-framework", label: "Corporate Governance" },
                        { id: "enterprise-risk-management", label: "Enterprise Risk (ERM)" },
                        { id: "internal-audit", label: "Internal Audit" },
                        { id: "anti-fraud-investigation", label: "Anti-Fraud & Ethics" }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          to={`/services/${item.id}`}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Statutory GRC (SGRC) Services */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5 flex items-center justify-between">
                      <span>Statutory GRC (SGRC)</span>
                      <Link
                        to="/sgrc/services"
                        onClick={() => setMobileOpen(false)}
                        className="text-[9px] text-blue-500 font-bold hover:underline pr-1"
                      >
                        Explore All &rarr;
                      </Link>
                    </div>
                    <div className="pl-2 flex flex-col gap-1.5">
                      {[
                        { id: "compliance-risk-audit", label: "Compliance Risk Audit" },
                        { id: "establishment-compliances", label: "Establishment Compliances" },
                        { id: "payroll-compliance", label: "Payroll Compliance Services" },
                        { id: "factory-compliance", label: "Factory Compliance Services" },
                        { id: "vendor-compliance", label: "Vendor Compliance Services" },
                        { id: "mines-compliance", label: "Mines Compliance Services" },
                        { id: "flexi-staffing", label: "Flexi Staffing Services" },
                        { id: "payroll-services", label: "Payroll Services" },
                        { id: "ehs", label: "Environmental, Health & Safety (EHS)" }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          to={`/sgrc/services/${item.id}`}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* GRC Resources & Tools */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5 flex items-center justify-between">
                      <span>GRC Resources & Tools</span>
                      <Link
                        to="/resources"
                        onClick={() => setMobileOpen(false)}
                        className="text-[9px] text-blue-500 font-bold hover:underline pr-1"
                      >
                        Explore All &rarr;
                      </Link>
                    </div>
                    <div className="pl-2 flex flex-col gap-1.5">
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mt-1">e-Library & Calculators</div>
                      {[
                        { id: "minimum-wages", label: "Latest Minimum Wages", route: "/sgrc/e-library?tab=minimum-wages" },
                        { id: "professional-tax", label: "Professional Tax", route: "/sgrc/e-library?tab=professional-tax" },
                        { id: "labour-welfare-fund", label: "Labour Welfare Fund", route: "/sgrc/e-library?tab=labour-welfare-fund" },
                        { id: "leaves-working-hours", label: "Leave & Working Hours", route: "/sgrc/e-library?tab=leaves-working-hours" },
                        { id: "holidays-list", label: "Holidays List", route: "/sgrc/e-library?tab=holidays-list" },
                        { id: "calculators", label: "Statutory Calculators", route: "/sgrc/estimator" },
                        { id: "fcc", label: "FCC Compliance Calendar", route: "/sgrc/e-library?tab=fcc" },
                        { id: "lei", label: "LEI Compliance Calendar", route: "/sgrc/e-library?tab=lei" }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          to={item.route}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block"
                        >
                          {item.label}
                        </Link>
                      ))}

                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mt-2 pt-2 border-t border-slate-100">Knowledge Hub</div>
                      <Link
                        to="/analytics"
                        onClick={() => setMobileOpen(false)}
                        className="text-xs text-blue-600 hover:text-blue-750 font-bold py-0.5 block"
                      >
                        GRC Analytics & Data Sheet &rarr;
                      </Link>
                      <Link
                        to="/sgrc/resources"
                        onClick={() => setMobileOpen(false)}
                        className="text-xs text-slate-700 hover:text-blue-600 font-bold py-0.5 block"
                      >
                        SGRC Resources List &rarr;
                      </Link>
                      {[
                        { id: "events", label: "Events", route: "/sgrc/resources" },
                        { id: "case-studies", label: "Case Studies", route: "/sgrc/resources" },
                        { id: "blog", label: "Blog", route: "/sgrc/resources" },
                        { id: "media", label: "Media & Press Release", route: "/sgrc/resources" },
                        { id: "csr", label: "CSR", route: "/sgrc/resources" },
                        { id: "webinar", label: "Webinars & Opinions", route: "/sgrc/e-library?tab=webinar" }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          to={item.route}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Accordion for Cybersecurity */}
            <div>
              <button
                onClick={() => toggleDropdown("cybersecurity")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg text-left"
              >
                <span>Cybersecurity</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "cybersecurity" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "cybersecurity" && (
                <div className="pl-4 my-1 flex flex-col gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100 max-h-[300px] overflow-y-auto text-left">
                  <Link
                    to="/cybersecurity"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-blue-600 font-extrabold flex items-center gap-1 py-1 border-b border-slate-200/80 mb-2 animate-fade-in"
                  >
                    View Main Cybersecurity Page <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Cyber GRC & Compliance */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      Cyber GRC & Compliance
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <Link to="/cybersecurity#grc-compliance" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Framework Implementation</Link>
                      <Link to="/cybersecurity#grc-compliance" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Indian Regulatory Compliance</Link>
                      <Link to="/cybersecurity#grc-compliance" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Cyber Governance</Link>
                    </div>
                  </div>

                  {/* Offensive Security (VAPT) */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      Offensive Security (VAPT)
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <Link to="/cybersecurity#offensive-security" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Core Penetration Testing</Link>
                      <Link to="/cybersecurity#offensive-security" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Advanced Attack Simulation</Link>
                      <Link to="/cybersecurity#offensive-security" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Cloud & Configuration</Link>
                    </div>
                  </div>

                  {/* Incident Response & Defense */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      Incident Response & Defense
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <Link to="/cybersecurity#incident-defense" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Response & Retainer Services</Link>
                      <Link to="/cybersecurity#incident-defense" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Forensics & Evidence</Link>
                      <Link to="/cybersecurity#incident-defense" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Crisis Management</Link>
                    </div>
                  </div>

                  {/* Specialized Cyber Solutions */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      Specialized Solutions
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <Link to="/cybersecurity#specialized-solutions" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">OT & Industrial Security</Link>
                      <Link to="/cybersecurity#specialized-solutions" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Ecosystem & Supply Chain</Link>
                      <Link to="/cybersecurity#specialized-solutions" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Transaction & Product Security</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Accordion for ESG */}
            <div>
              <button
                onClick={() => toggleDropdown("esg")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg text-left"
              >
                <span>ESG</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "esg" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "esg" && (
                <div className="pl-4 my-1 flex flex-col gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100 max-h-[300px] overflow-y-auto text-left">
                  <Link
                    to="/esg"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-blue-600 font-extrabold flex items-center gap-1 py-1 border-b border-slate-200/80 mb-2 animate-fade-in"
                  >
                    View Main ESG Page <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* ESG Compliance Services */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      ESG Compliance Services
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <Link to="/esg#ehs" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Environmental & EHS Regulatory</Link>
                      <Link to="/esg#labor" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Supply Chain & Labor Compliance</Link>
                      <Link to="/esg#privacy" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Global Data Privacy (G in ESG)</Link>
                      <Link to="/esg#privacy" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Mandatory Disclosure Readiness</Link>
                    </div>
                  </div>

                  {/* Sustainability & Governance Advisory */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                      Sustainability & Advisory
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <Link to="/esg#climate" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Decarbonization & Climate Strategy</Link>
                      <Link to="/esg#advisory" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Global ESG Reporting Frameworks</Link>
                      <Link to="/esg#advisory" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Circular Economy & Resource Efficiency</Link>
                      <Link to="/esg#advisory" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Board Governance & ESG Integration</Link>
                      <Link to="/esg#advisory" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block">Transaction Advisory (M&A)</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Accordion for Industry */}
            <div>
              <button
                onClick={() => toggleDropdown("industries")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "industries" && (
                <div className="pl-4 my-1 flex flex-col gap-4 bg-slate-50 rounded-lg p-3 border border-slate-100 max-h-[350px] overflow-y-auto">
                  <Link
                    to="/industries"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-blue-600 font-extrabold flex items-center gap-1 py-1 border-b border-slate-200/80 mb-2 animate-fade-in"
                  >
                    View Main Industries Page <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {clusters.map((clusterName) => (
                    <div key={clusterName} className="space-y-1">
                      <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                        {clusterName}
                      </div>
                      <div className="pl-2 flex flex-col gap-1">
                        {industriesData
                          .filter((ind) => ind.cluster === clusterName)
                          .map((ind) => (
                            <Link
                               key={ind.id}
                               to={`/industries/${getClusterId(clusterName)}#${ind.id}`}
                               onClick={() => setMobileOpen(false)}
                               className="text-xs text-slate-700 hover:text-blue-600 font-semibold py-0.5 block"
                            >
                              {ind.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion for Manpower Services */}
            <div>
              <button
                onClick={() => toggleDropdown("staffing")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                <span>Manpower Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "staffing" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "staffing" && (
                <div className="pl-4 my-1 flex flex-col gap-2 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <Link
                    to="/staffing"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-blue-600 font-extrabold flex items-center gap-1 py-1 border-b border-slate-200/80 mb-2 animate-fade-in"
                  >
                    View Main Staffing Page <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/staffing?tab=offerings" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Offerings</Link>
                  <Link to="/staffing?tab=industries" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Industries</Link>
                  <Link to="/staffing?tab=engagement-models" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Engagement Models</Link>
                  <Link to="/staffing?tab=platforms" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-700">Platforms</Link>
                </div>
              )}
            </div>

            {/* Mobile Link for Partners */}
            <Link to="/partners" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg block">
              Partners
            </Link>

            {/* Mobile Link for About Us */}
            <Link to="/about" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg block">
              About Us
            </Link>
          </div>

          <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100 text-left">
            {!isAuthenticated ? (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="w-full">
                  <button className="w-full py-2.5 border border-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all hover:bg-slate-50">
                    Sign In to Portal
                  </button>
                </Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="w-full">
                  <button className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/20">
                    Create GRC Account
                  </button>
                </Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="w-full">
                  <button className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold">
                    Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </>
            ) : (
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Signed in as</div>
                  <div className="text-xs font-black text-slate-800 truncate">{user?.fullName}</div>
                  <div className="text-[10px] text-slate-500 font-bold leading-tight truncate">{user?.designation} at {user?.companyName}</div>
                  <div className="text-[9px] text-slate-400 font-medium truncate">{user?.email}</div>
                  <div className="mt-2 text-[9.5px] text-slate-650 font-bold">Target Standard: {user?.primaryStandard}</div>
                  <div className="text-[9px] text-slate-550 font-semibold">Maturity: {user?.maturity}</div>
                  <div className="text-[9px] text-slate-550 font-semibold">Sector: {user?.industry}</div>
                  <div className="text-[9px] text-slate-550 font-semibold">Scope: {user?.geoFootprint}</div>
                </div>
                <Link to="/sgrc/e-library" onClick={() => setMobileOpen(false)} className="w-full block">
                  <button className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>My e-Library Portal</span>
                  </button>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="w-full py-2.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
