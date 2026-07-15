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
  const [activeSubTab, setActiveSubTab] = useState<string>("");
  const [activeOfferTab, setActiveOfferTab] = useState<string>("grc");
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

  useEffect(() => {
    if (activeDropdown === "what-we-offer") {
      setActiveOfferTab("compliance");
      setActiveSubTab("compliance-services");
    } else if (activeDropdown === "whom-we-serve") {
      setActiveSubTab("manufacturing-industrial");
    } else {
      setActiveSubTab("");
    }
  }, [activeDropdown]);

  useEffect(() => {
    if (activeOfferTab === "compliance") {
      setActiveSubTab("compliance-services");
    } else if (activeOfferTab === "risk") {
      setActiveSubTab("risk-services");
    } else if (activeOfferTab === "governance") {
      setActiveSubTab("governance-services");
    } else if (activeOfferTab === "cybersecurity") {
      setActiveSubTab("grc-compliance");
    } else if (activeOfferTab === "esg") {
      setActiveSubTab("esg-compliance");
    } else if (activeOfferTab === "staffing") {
      setActiveSubTab("");
    }
  }, [activeOfferTab]);

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
          <img
            src="/logo.png"
            alt="GOVENICS GRC"
            className="h-14 w-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-stretch gap-1 h-full">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>

          {/* What We Offer Dropdown */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("what-we-offer")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className={getNavItemClass() + " cursor-pointer"}>
              What We Offer <ChevronDown className="w-4 h-4 text-current" />
            </div>
            {activeDropdown === "what-we-offer" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[98dvw] max-w-7xl bg-white border border-slate-200 shadow-2xl rounded-2xl flex overflow-hidden animate-slide-up-dropdown mt-1 text-left z-50">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />

                {/* Level 1 Sidebar - Divisions */}
                <div className="w-[22%] bg-slate-900 text-white p-6 flex flex-col justify-between border-r border-slate-800">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.25em] leading-tight">
                        What We Offer
                      </h3>
                      <p className="text-[10px] text-slate-400 mt-1 font-bold leading-relaxed">
                        Explore our compliance, security, ESG, and staffing solutions.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {[
                        { id: "compliance", label: "Compliance" },
                        { id: "risk", label: "Risk" },
                        { id: "governance", label: "Governance" },
                        { id: "staffing", label: "Manpower Services" },
                        { id: "cybersecurity", label: "Cybersecurity" },
                        { id: "esg", label: "ESG & Sustainability" }
                      ].map((offer) => (
                        <button
                          key={offer.id}
                          onMouseEnter={() => setActiveOfferTab(offer.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black transition-all flex items-center justify-between group ${
                            activeOfferTab === offer.id
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/15"
                              : "text-slate-350 hover:text-white hover:bg-slate-800/60"
                          }`}
                        >
                          <span>{offer.label}</span>
                          <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${activeOfferTab === offer.id ? "opacity-100" : ""}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Level 2 Submenus */}
                {activeOfferTab === "compliance" && (
                  <div className="flex-1 flex overflow-hidden bg-white">
                    {/* Left Sub-sidebar */}
                    <div className="w-[30%] bg-slate-50/80 border-r border-slate-100 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest leading-tight">
                            Compliance Services
                          </h3>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {[
                            { id: "compliance-services", label: "Regulatory Compliance" },
                            { id: "payroll", label: "Managed Payroll & HR" },
                            { id: "bpo", label: "GRC BPO Services" },
                            { id: "sgrc", label: "Statutory GRC (SGRC)" },
                            { id: "resources", label: "GRC Resources & Tools" },
                            { id: "knowledge", label: "GRC Knowledge Hub" }
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onMouseEnter={() => setActiveSubTab(tab.id)}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center justify-between group ${
                                activeSubTab === tab.id
                                  ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100/50"
                              }`}
                            >
                              <span>{tab.label}</span>
                              <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${activeSubTab === tab.id ? "opacity-100 text-blue-600" : "text-slate-400"}`} />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Content Pane */}
                    <div className="w-[70%] p-8 flex flex-col justify-between bg-white min-h-[450px]">
                      <div className="flex-1">
                        {activeSubTab === "compliance-services" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Compliance Services</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
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
                                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                  >
                                    <div className="flex flex-col text-left">
                                      <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {item.label}
                                      </span>
                                      <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-snug">
                                        {item.items}
                                      </span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "payroll" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Managed Payroll & HR</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
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
                                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                  >
                                    <div className="flex flex-col text-left">
                                      <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {item.label}
                                      </span>
                                      <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-snug">
                                        {item.items}
                                      </span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "bpo" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">GRC BPO Services</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { id: "compliance-processing-bpo", label: "Compliance Processing", items: "High-Volume Filings • Registrations" },
                                { id: "hr-helpdesk-servicing", label: "HR Helpdesk Support", items: "Employee Query Resolution • Ticketing" },
                                { id: "back-office-operations-bpo", label: "Back-Office Operations", items: "Data Validation • Transaction Audit" },
                                { id: "document-record-management", label: "Document Registry BPO", items: "Record Digitization • Compliance Safe" }
                              ].map((item) => {
                                const serv = servicesData.find((s) => s.id === item.id);
                                if (!serv) return null;
                                return (
                                  <Link
                                    key={serv.id}
                                    to={`/services/${serv.id}`}
                                    onClick={() => setActiveDropdown(null)}
                                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                  >
                                    <div className="flex flex-col text-left">
                                      <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {item.label}
                                      </span>
                                      <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-snug">
                                        {item.items}
                                      </span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "sgrc" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Statutory GRC (SGRC)</h4>
                              <Link 
                                to="/sgrc/services"
                                onClick={() => setActiveDropdown(null)}
                                className="text-xs font-extrabold text-blue-600 hover:text-blue-750 flex items-center gap-1"
                              >
                                <span>All SGRC Services</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {[
                                { id: "compliance-risk-audit", label: "Compliance Risk Audit", icon: Scale },
                                { id: "establishment-compliances", label: "Establishment Compliances", icon: Building },
                                { id: "payroll-compliance", label: "Payroll Compliance", icon: CreditCard },
                                { id: "factory-compliance", label: "Factory Compliance", icon: Factory },
                                { id: "vendor-compliance", label: "Vendor Compliance", icon: Users },
                                { id: "mines-compliance", label: "Mines Compliance", icon: ShieldAlert },
                                { id: "flexi-staffing", label: "Flexi Staffing", icon: UserPlus },
                                { id: "payroll-services", label: "Payroll Services", icon: FileSpreadsheet },
                                { id: "ehs", label: "EHS (Environmental)", icon: Leaf }
                              ].map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.id}
                                    to={`/sgrc/services/${item.id}`}
                                    onClick={() => setActiveDropdown(null)}
                                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                  >
                                    <div className="p-1.5 bg-blue-500/10 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                                      {item.label}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "resources" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                              <h4 className="text-xs font-extrabold text-slate-455 uppercase tracking-wider">Resources & Tools</h4>
                              <Link 
                                to="/sgrc/e-library"
                                onClick={() => setActiveDropdown(null)}
                                className="text-xs font-extrabold text-blue-600 hover:text-blue-750 flex items-center gap-1"
                              >
                                <span>Explore e-Library</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {[
                                { id: "minimum-wages", label: "Latest Minimum Wages", icon: Coins },
                                { id: "professional-tax", label: "Professional Tax", icon: Percent },
                                { id: "labour-welfare-fund", label: "Labour Welfare Fund", icon: Users },
                                { id: "leaves-working-hours", label: "Leave & Working Hours", icon: Clock },
                                { id: "holidays-list", label: "Holidays List", icon: Calendar },
                                { id: "calculators", label: "Statutory Calculators", icon: Calculator },
                                { id: "fcc", label: "FCC Compliance", icon: CalendarCheck },
                                { id: "lei", label: "LEI Compliance Calendar", icon: Globe }
                              ].map((item) => {
                                const Icon = item.icon;
                                const route = item.id === "calculators" ? "/sgrc/estimator" : `/sgrc/e-library?tab=${item.id}`;
                                return (
                                  <Link
                                    key={item.id}
                                    to={route}
                                    onClick={() => setActiveDropdown(null)}
                                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                  >
                                    <div className="p-1.5 bg-slate-100 text-slate-500 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                                      {item.label}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "knowledge" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3 flex flex-wrap gap-x-4 gap-y-2 items-center">
                              <h4 className="text-xs font-extrabold text-slate-455 uppercase tracking-wider">Knowledge Hub</h4>
                              <div className="flex gap-3 text-xs font-bold ml-auto">
                                <Link to="/resources" onClick={() => setActiveDropdown(null)} className="text-blue-600 hover:underline">Knowledge Hub &rarr;</Link>
                                <Link to="/analytics" onClick={() => setActiveDropdown(null)} className="text-blue-600 hover:underline">GRC Analytics &rarr;</Link>
                                <Link to="/sgrc/resources" onClick={() => setActiveDropdown(null)} className="text-blue-600 hover:underline">SGRC Resources &rarr;</Link>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {[
                                { id: "events", label: "Events", icon: Calendar },
                                { id: "case-studies", label: "Case Studies", icon: BookOpen },
                                { id: "blog", label: "Blog", icon: FileText },
                                { id: "media", label: "Media & Press", icon: Megaphone },
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
                                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                  >
                                    <div className="p-1.5 bg-slate-100 text-slate-500 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                                      {item.label}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Contact Us Banner */}
                      <div className="mt-8 bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium">
                          Need help choosing the right compliance services?
                        </span>
                        <Link
                          to="/contact"
                          onClick={() => setActiveDropdown(null)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/10"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeOfferTab === "risk" && (
                  <div className="flex-1 p-8 bg-white min-h-[350px] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="border-b border-slate-100 pb-3">
                        <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Risk Management</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { id: "enterprise-risk-management", label: "Enterprise Risk (ERM)", items: "ISO 31000 • Risk Register • RCSA" },
                          { id: "internal-audit", label: "Internal Audit", items: "Operational Auditing • Control Testing" },
                          { id: "vendor-risk-management", label: "Vendor & Third-Party Risk", items: "Supply Chain Audits • Due Diligence" },
                          { id: "anti-fraud-investigation", label: "Anti-Fraud & Ethics", items: "Whistleblower Setup • Investigations" }
                        ].map((item) => {
                          const serv = servicesData.find((s) => s.id === item.id);
                          if (!serv) return null;
                          return (
                            <Link
                              key={serv.id}
                              to={`/services/${serv.id}`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                            >
                              <div className="flex flex-col text-left">
                                <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                  {item.label}
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-snug">
                                  {item.items}
                                </span>
                              </div>
                              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    {/* Contact Us Banner */}
                    <div className="mt-8 bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        Need help with enterprise risk management?
                      </span>
                      <Link
                        to="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/10"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}

                {activeOfferTab === "governance" && (
                  <div className="flex-1 p-8 bg-white min-h-[350px] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="border-b border-slate-100 pb-3">
                        <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Governance Framework</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { id: "governance-framework", label: "Corporate Governance", items: "Board Charters • Disclosures • DoA" },
                          { id: "hr-policy-governance", label: "HR Policy & Governance", items: "Handbooks • POSH • Labour Codes" },
                          { id: "regulatory-compliance", label: "Regulatory Governance", items: "Multi-agency • Statutory Monitoring" },
                          { id: "clinical-governance", label: "Clinical Governance", items: "ICH-GCP • NMC • Adverse Events" }
                        ].map((item) => {
                          const serv = servicesData.find((s) => s.id === item.id);
                          if (!serv) return null;
                          return (
                            <Link
                              key={serv.id}
                              to={`/services/${serv.id}`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                            >
                              <div className="flex flex-col text-left">
                                <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                  {item.label}
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-snug">
                                  {item.items}
                                </span>
                              </div>
                              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    {/* Contact Us Banner */}
                    <div className="mt-8 bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        Need help designing your governance framework?
                      </span>
                      <Link
                        to="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/10"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}

                {activeOfferTab === "cybersecurity" && (
                  <div className="flex-1 flex overflow-hidden bg-white">
                    {/* Cybersecurity Sub-sidebar */}
                    <div className="w-[30%] bg-slate-50/80 border-r border-slate-100 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest leading-tight">
                            Cybersecurity
                          </h3>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {[
                            { id: "grc-compliance", label: "Cyber GRC & Compliance" },
                            { id: "vapt", label: "Offensive Security (VAPT)" },
                            { id: "incident", label: "Incident Response & Defense" },
                            { id: "specialized", label: "Specialized Solutions" }
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onMouseEnter={() => setActiveSubTab(tab.id)}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center justify-between group ${
                                activeSubTab === tab.id
                                  ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100/50"
                              }`}
                            >
                              <span>{tab.label}</span>
                              <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${activeSubTab === tab.id ? "opacity-100 text-blue-600" : "text-slate-400"}`} />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Pane */}
                    <div className="w-[70%] p-8 flex flex-col justify-between bg-white min-h-[350px]">
                      <div className="flex-1">
                        {activeSubTab === "grc-compliance" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Cyber GRC & Compliance</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { label: "Framework Implementation", desc: "ISO 27001, SOC 2, and NIST alignments" },
                                { label: "Indian Regulatory Compliance", desc: "CERT-In, RBI IT Guidelines, SEBI cyber norms" },
                                { label: "Cyber Governance", desc: "Policies, risk registers, and threat modeling" }
                              ].map((item, idx) => (
                                <Link
                                  key={idx}
                                  to="/cybersecurity#grc-compliance"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                >
                                  <div className="flex flex-col text-left">
                                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] text-slate-455 font-medium mt-0.5">
                                      {item.desc}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "vapt" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Offensive Security (VAPT)</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { label: "Core Penetration Testing", desc: "Web applications, mobile apps, API, and network testing" },
                                { label: "Advanced Attack Simulation", desc: "Red teaming, phishing simulations, and social engineering" },
                                { label: "Cloud & Configuration", desc: "AWS, Azure, and GCP security reviews" }
                              ].map((item, idx) => (
                                <Link
                                  key={idx}
                                  to="/cybersecurity#offensive-security"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                >
                                  <div className="flex flex-col text-left">
                                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] text-slate-455 font-medium mt-0.5">
                                      {item.desc}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "incident" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-455 uppercase tracking-wider">Incident Response & Defense</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { label: "Response & Retainer Services", desc: "Emergency handling and retainer-based support" },
                                { label: "Forensics & Evidence", desc: "Digital forensics, log analyses, and root-cause mapping" },
                                { label: "Crisis Management", desc: "Incident messaging, regulatory reports, and recovery setups" }
                              ].map((item, idx) => (
                                <Link
                                  key={idx}
                                  to="/cybersecurity#incident-defense"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                >
                                  <div className="flex flex-col text-left">
                                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] text-slate-455 font-medium mt-0.5">
                                      {item.desc}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "specialized" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Specialized Solutions</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { label: "OT & Industrial Security", desc: "SCADA systems, factories, and operational network security" },
                                { label: "Ecosystem & Supply Chain", desc: "Third-party risk monitoring and code integrations" },
                                { label: "Transaction & Product Security", desc: "Payment gateways, secure SDLC, and threat assessments" }
                              ].map((item, idx) => (
                                <Link
                                  key={idx}
                                  to="/cybersecurity#specialized-solutions"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                >
                                  <div className="flex flex-col text-left">
                                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] text-slate-455 font-medium mt-0.5">
                                      {item.desc}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Contact Us Banner */}
                      <div className="mt-8 bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium">
                          Need help securing your systems?
                        </span>
                        <Link
                          to="/contact"
                          onClick={() => setActiveDropdown(null)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/10"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeOfferTab === "esg" && (
                  <div className="flex-1 flex overflow-hidden bg-white">
                    {/* ESG Sub-sidebar */}
                    <div className="w-[30%] bg-slate-50/80 border-r border-slate-100 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest leading-tight">
                            ESG & Sustainability
                          </h3>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {[
                            { id: "esg-compliance", label: "ESG Compliance Services" },
                            { id: "sustainability-advisory", label: "Sustainability & Advisory" }
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onMouseEnter={() => setActiveSubTab(tab.id)}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center justify-between group ${
                                activeSubTab === tab.id
                                  ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100/50"
                              }`}
                            >
                              <span>{tab.label}</span>
                              <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${activeSubTab === tab.id ? "opacity-100 text-blue-600" : "text-slate-400"}`} />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Pane */}
                    <div className="w-[70%] p-8 flex flex-col justify-between bg-white min-h-[350px]">
                      <div className="flex-1">
                        {activeSubTab === "esg-compliance" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">ESG Compliance Services</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { id: "ehs", label: "Environmental & EHS Regulatory", desc: "Consents, emissions, and safety compliance" },
                                { id: "labor", label: "Supply Chain & Labor Compliance", desc: "Workplace conditions, audits, and social codes" },
                                { id: "privacy", label: "Global Data Privacy (G in ESG)", desc: "Information controls, consent models, and safety" },
                                { id: "readiness", label: "Mandatory Disclosure Readiness", desc: "BRSR audits and regulatory readiness reviews" }
                              ].map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={`/esg#${item.id}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                >
                                  <div className="flex flex-col text-left">
                                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] text-slate-455 font-medium mt-0.5">
                                      {item.desc}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "sustainability-advisory" && (
                          <div className="space-y-4">
                            <div className="border-b border-slate-100 pb-3">
                              <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">Sustainability & Governance Advisory</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { id: "climate", label: "Decarbonization & Climate Strategy", desc: "Net-zero mapping, offsets, and carbon tracking" },
                                { id: "reporting", label: "Global ESG Reporting Frameworks", desc: "GRI, TCFD, and SASB disclosures preparation" },
                                { id: "circular", label: "Circular Economy & Resource Efficiency", desc: "Waste reductions, circular paths, and energy saves" },
                                { id: "integration", label: "Board Governance & ESG Integration", desc: "Strategy charters, metrics dashboard, and audits" },
                                { id: "mna", label: "Transaction Advisory (M&A)", desc: "ESG due diligence and post-merger integration" }
                              ].map((item, idx) => (
                                <Link
                                  key={idx}
                                  to="/esg#advisory"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                >
                                  <div className="flex flex-col text-left">
                                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] text-slate-455 font-medium mt-0.5">
                                      {item.desc}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Contact Us Banner */}
                      <div className="mt-8 bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium">
                          Need help choosing the right ESG framework?
                        </span>
                        <Link
                          to="/contact"
                          onClick={() => setActiveDropdown(null)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/10"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeOfferTab === "staffing" && (
                  <div className="flex-1 p-8 bg-white min-h-[350px] flex flex-col justify-between">
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-1 border-r border-slate-100 pr-4 text-left">
                        <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">
                          Manpower Solutions
                        </h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          Flexible staffing and execution modules mapped to your project needs.
                        </p>
                      </div>
                      <div className="col-span-3 grid grid-cols-2 gap-4">
                        <Link to="/staffing?tab=offerings" onClick={() => setActiveDropdown(null)} className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group flex flex-col text-left">
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600">Offerings</span>
                          <span className="text-[10px] text-slate-400 font-semibold mt-1">Permanent, Contract, and Project staffing models</span>
                        </Link>
                        <Link to="/staffing?tab=industries" onClick={() => setActiveDropdown(null)} className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group flex flex-col text-left">
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600">Industries</span>
                          <span className="text-[10px] text-slate-400 font-semibold mt-1">Staffing calibrated for IT, Pharma, Retail, and Mfg</span>
                        </Link>
                        <Link to="/staffing?tab=engagement-models" onClick={() => setActiveDropdown(null)} className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group flex flex-col text-left">
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600">Engagement Models</span>
                          <span className="text-[10px] text-slate-400 font-semibold mt-1">SLA-backed RPO, MSP, and managed hiring</span>
                        </Link>
                        <Link to="/staffing?tab=platforms" onClick={() => setActiveDropdown(null)} className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group flex flex-col text-left">
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600">Platforms</span>
                          <span className="text-[10px] text-slate-400 font-semibold mt-1">Vendor portals, background screening, and ATS</span>
                        </Link>
                      </div>
                    </div>
                    {/* Contact Us Banner */}
                    <div className="mt-8 bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        Need help choosing the right staffing engagement?
                      </span>
                      <Link
                        to="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/10"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Whom We Serve Dropdown (Industries) */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("whom-we-serve")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className={getNavItemClass() + " cursor-pointer"}>
              Whom We Serve <ChevronDown className="w-4 h-4 text-current" />
            </div>
            {activeDropdown === "whom-we-serve" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[98dvw] max-w-7xl bg-white border border-slate-200 shadow-2xl rounded-2xl flex overflow-hidden animate-slide-up-dropdown mt-1 text-left z-50">
                {/* Bridge to prevent hover loss */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />

                {/* Left Sidebar */}
                <div className="w-[30%] bg-slate-50/80 border-r border-slate-100 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest leading-tight">
                        Whom We Serve
                      </h3>
                      <p className="text-[10px] text-slate-500 mt-1.5 font-medium leading-relaxed">
                        GRC calibration and frameworks tailored for your specific industry sector.
                      </p>
                    </div>
                    
                    {/* Sidebar Tabs */}
                    <div className="flex flex-col gap-1 max-h-[350px] overflow-y-auto pr-1">
                      {clusters.map((clusterName) => {
                        const cid = getClusterId(clusterName);
                        return (
                          <button
                            key={clusterName}
                            onMouseEnter={() => setActiveSubTab(cid)}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                              activeSubTab === cid
                                ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                                : "text-slate-600 hover:text-blue-600 hover:bg-slate-100/50"
                            }`}
                          >
                            <span className="truncate">{clusterName}</span>
                            <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${activeSubTab === cid ? "opacity-100 text-blue-600" : "text-slate-400"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Pane */}
                <div className="w-[70%] p-8 flex flex-col justify-between bg-white min-h-[420px]">
                  {/* Grid of items */}
                  <div className="flex-1">
                    <div className="border-b border-slate-100 pb-3 mb-4">
                      <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider">
                        {clusters.find(c => getClusterId(c) === activeSubTab) || "Selected Segment"}
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {industriesData
                        .filter((ind) => getClusterId(ind.cluster) === activeSubTab)
                        .map((ind) => {
                          const IconComp = ind.icon;
                          return (
                            <Link
                              key={ind.id}
                              to={`/industries/${getClusterId(ind.cluster)}#${ind.id}`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-55 border border-transparent hover:border-slate-100 transition-all group"
                            >
                              <div className="flex items-center gap-3 text-left">
                                <div className="p-2 bg-slate-50 text-slate-450 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                                    {ind.title}
                                  </span>
                                  <span className="text-[10px] text-slate-450 font-medium mt-0.5 line-clamp-1">
                                    {ind.subtitle}
                                  </span>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                            </Link>
                          );
                        })}
                    </div>
                  </div>

                  {/* Contact Us Banner */}
                  <div className="mt-8 bg-slate-55 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      Need help choosing the right industries?
                    </span>
                    <Link
                      to="/contact"
                      onClick={() => setActiveDropdown(null)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/10"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
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

          {/* Contact Link */}
          <Link to="/contact" className={getLinkClass("/contact")}>
            Contact
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

            {/* Mobile Accordion for What We Offer */}
            <div>
              <button
                onClick={() => toggleDropdown("what-we-offer")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg text-left"
              >
                <span>What We Offer</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "what-we-offer" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "what-we-offer" && (
                <div className="pl-4 my-1 flex flex-col gap-4 bg-slate-50 rounded-lg p-3 border border-slate-150 max-h-[500px] overflow-y-auto text-left">
                  
                  {/* Compliance */}
                  <div className="space-y-2 pb-2 border-b border-slate-200/60">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-black text-slate-800 uppercase tracking-wider">Compliance</span>
                      <Link to="/grc" onClick={() => setMobileOpen(false)} className="text-[10px] text-blue-600 font-bold hover:underline">Go to GRC &rarr;</Link>
                    </div>
                    <div className="space-y-1">
                      <div className="pl-2 flex flex-col gap-1">
                        {[
                          { id: "labour-law-compliance", label: "Labour & Employment" },
                          { id: "environmental-compliance", label: "Environmental & EHS" },
                          { id: "taxation-trade-compliance", label: "Taxation & Trade" },
                          { id: "data-privacy-dpdp", label: "Data Privacy & Cyber" },
                          { id: "accreditation-services", label: "Accreditations" }
                        ].map((item) => (
                          <Link
                            key={item.id}
                            to={`/services/${item.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Risk */}
                  <div className="space-y-2 pb-2 border-b border-slate-200/60">
                    <span className="text-[10.5px] font-black text-slate-800 uppercase tracking-wider">Risk</span>
                    <div className="space-y-1">
                      <div className="pl-2 flex flex-col gap-1">
                        {[
                          { id: "enterprise-risk-management", label: "Enterprise Risk (ERM)" },
                          { id: "internal-audit", label: "Internal Audit" },
                          { id: "vendor-risk-management", label: "Vendor & Third-Party Risk" },
                          { id: "anti-fraud-investigation", label: "Anti-Fraud & Ethics" }
                        ].map((item) => (
                          <Link
                            key={item.id}
                            to={`/services/${item.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Governance */}
                  <div className="space-y-2 pb-2 border-b border-slate-200/60">
                    <span className="text-[10.5px] font-black text-slate-800 uppercase tracking-wider">Governance</span>
                    <div className="space-y-1">
                      <div className="pl-2 flex flex-col gap-1">
                        {[
                          { id: "governance-framework", label: "Corporate Governance" },
                          { id: "hr-policy-governance", label: "HR Policy & Governance" },
                          { id: "regulatory-compliance", label: "Regulatory Governance" },
                          { id: "clinical-governance", label: "Clinical Governance" }
                        ].map((item) => (
                          <Link
                            key={item.id}
                            to={`/services/${item.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cybersecurity */}
                  <div className="space-y-2 pb-2 border-b border-slate-200/60">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-black text-slate-800 uppercase tracking-wider">Cybersecurity</span>
                      <Link to="/cybersecurity" onClick={() => setMobileOpen(false)} className="text-[10px] text-blue-600 font-bold hover:underline">Go to Cyber &rarr;</Link>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9.5px] font-bold text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                        Cyber GRC & Compliance
                      </div>
                      <div className="pl-2 flex flex-col gap-1">
                        <Link to="/cybersecurity#grc-compliance" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block">Framework Implementation</Link>
                        <Link to="/cybersecurity#grc-compliance" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block">Indian Regulatory Compliance</Link>
                      </div>
                    </div>
                    <div className="space-y-1 pt-1.5">
                      <div className="text-[9.5px] font-bold text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                        Offensive Security (VAPT)
                      </div>
                      <div className="pl-2 flex flex-col gap-1">
                        <Link to="/cybersecurity#offensive-security" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block">Penetration Testing</Link>
                        <Link to="/cybersecurity#offensive-security" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block">Attack Simulation</Link>
                      </div>
                    </div>
                  </div>

                  {/* ESG */}
                  <div className="space-y-2 pb-2 border-b border-slate-200/60">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-black text-slate-800 uppercase tracking-wider">ESG & Sustainability</span>
                      <Link to="/esg" onClick={() => setMobileOpen(false)} className="text-[10px] text-blue-600 font-bold hover:underline">Go to ESG &rarr;</Link>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9.5px] font-bold text-blue-600 uppercase tracking-widest border-l-2 border-blue-500 pl-1.5">
                        ESG Compliance
                      </div>
                      <div className="pl-2 flex flex-col gap-1">
                        <Link to="/esg#ehs" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block">Environmental & EHS Regulatory</Link>
                        <Link to="/esg#labor" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 hover:text-blue-600 font-medium py-0.5 block">Supply Chain & Labor</Link>
                      </div>
                    </div>
                  </div>

                  {/* Manpower Services */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-black text-slate-800 uppercase tracking-wider">Manpower Services</span>
                      <Link to="/staffing" onClick={() => setMobileOpen(false)} className="text-[10px] text-blue-600 font-bold hover:underline">Go to Staffing &rarr;</Link>
                    </div>
                    <div className="pl-2 flex flex-col gap-1 text-xs font-semibold text-slate-700">
                      <Link to="/staffing?tab=offerings" onClick={() => setMobileOpen(false)} className="py-0.5 block">Offerings</Link>
                      <Link to="/staffing?tab=industries" onClick={() => setMobileOpen(false)} className="py-0.5 block">Industries</Link>
                      <Link to="/staffing?tab=engagement-models" onClick={() => setMobileOpen(false)} className="py-0.5 block">Engagement Models</Link>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Mobile Accordion for Whom We Serve */}
            <div>
              <button
                onClick={() => toggleDropdown("whom-we-serve")}
                className="w-full flex justify-between items-center p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg text-left"
              >
                <span>Whom We Serve</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "whom-we-serve" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "whom-we-serve" && (
                <div className="pl-4 my-1 flex flex-col gap-4 bg-slate-50 rounded-lg p-3 border border-slate-100 max-h-[350px] overflow-y-auto text-left">
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

            {/* Mobile Link for Partners */}
            <Link to="/partners" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg block text-left">
              Partners
            </Link>

            {/* Mobile Link for About Us */}
            <Link to="/about" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg block text-left">
              About Us
            </Link>

            {/* Mobile Link for Contact */}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="p-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg block text-left">
              Contact
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
