export interface GrcService {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  benefits: string[];
  standards: string[];
  industries: string[];
}

export const servicesData: GrcService[] = [
  {
    id: "regulatory-compliance",
    title: "Regulatory Compliance Management",
    category: "Governance & Risk Advisory",
    problem: "Organizations face dynamic compliance standards across agencies (RBI, SEBI, TRAI, CPCB, FSSAI) with fragmented operations, leading to severe audit penalties, legal litigation, and brand loss.",
    solution: "We provide end-to-end, dynamic compliance tracking and advisory. Our system maps every operational task against statutory rules, automates register filings, and monitors audit-readiness in real-time.",
    benefits: [
      "Significant reduction in statutory penalties and compliance slippage.",
      "Always-audit-ready corporate postures across local and international standards.",
      "Clear accountability with role-based internal task routing."
    ],
    standards: ["Factories Act", "RBI Master Circulars", "SEBI ICDR", "FSSAI Guidelines", "TRAI QoS"],
    industries: ["bfsi", "manufacturing", "healthcare", "food-processing", "government-psu", "energy-utilities", "telecom"]
  },
  {
    id: "enterprise-risk-management",
    title: "Enterprise Risk Management (ERM)",
    category: "Governance & Risk Advisory",
    problem: "Risk assessments are traditionally static, reactive and siloed across departments, exposing boards to unexpected market liabilities, operational failures, and asset damage.",
    solution: "We design and deploy futuristic ERM frameworks. By integrating operational telemetry with risk thresholds, we build dynamic RCSA (Risk Control Self-Assessment) and KRI (Key Risk Indicator) dashboards.",
    benefits: [
      "Board-level foresight with predictive risk indicators and real-time triggers.",
      "Standardized risk taxonomy across all departments and assets.",
      "Stronger risk mitigation with pre-mapped contingency SOPs."
    ],
    standards: ["ISO 31000", "COSO Framework", "DGMS Guidelines", "RAMS Protocols"],
    industries: ["bfsi", "manufacturing", "healthcare", "mining", "energy-utilities", "real-estate-infra"]
  },
  {
    id: "governance-framework",
    title: "Governance Framework Design",
    category: "Governance & Risk Advisory",
    problem: "Siloed management layers, weak policy tracking, and disconnected boards lead to failures in fiduciary accountability, investor litigation, and internal fraud.",
    solution: "We codify robust corporate governance charters and operational workflows, integrating board-level committees with physical checkmarks to enforce transparency and compliance.",
    benefits: [
      "Enhanced transparency and corporate reputation, boosting investor appeal.",
      "Clear policy orchestration and conflict-of-interest prevention.",
      "Standardized delegation of authority (DoA) matrices."
    ],
    standards: ["Companies Act 2013", "SEBI LODR", "CVC Guidelines", "GFR Rules"],
    industries: ["bfsi", "government-psu", "telecom", "pharma-sciences", "education"]
  },
  {
    id: "internal-audit",
    title: "Internal Audit Services",
    category: "Audit & Assurance",
    problem: "Generic annual audits lack sector-specific GRC context, failing to identify operational loopholes, control bypasses, and leakage until a breach or investigation occurs.",
    solution: "Our compliance-integrated internal audit engine validates physical controls, software logic, and contractor SLAs on a continuous cycle with automated action tracking.",
    benefits: [
      "Proactive discovery of control gaps before statutory regulators inspect.",
      "Actionable dashboard tracing management corrective responses.",
      "Strict financial and operational leak prevention."
    ],
    standards: ["ISO 19011", "CAG Guidelines", "GFR Rules", "COSO Internal Controls"],
    industries: ["bfsi", "manufacturing", "healthcare", "government-psu", "real-estate-infra"]
  },
  {
    id: "data-privacy-dpdp",
    title: "Data Privacy & DPDP Compliance",
    category: "Digital Trust & Cybersecurity",
    problem: "Under India's Digital Personal Data Protection (DPDP) Act, organizations handling customer or student records face penalties of up to ₹250 Crores for lack of consent governance or data leaks.",
    solution: "We provide comprehensive DPDP and HIPAA audits, data classification, consent manager installations, and robust client/patient breach response plans.",
    benefits: [
      "100% legal compliance with the DPDP Act and global GDPR norms.",
      "Secure consent architecture that enhances user trust and privacy.",
      "Audit-proof data processing registers and mapping."
    ],
    standards: ["DPDP Act 2023", "GDPR Compliance", "HIPAA Rules", "21 CFR Part 11"],
    industries: ["bfsi", "healthcare", "it-services", "retail-ecommerce", "education", "telecom"]
  },
  {
    id: "cybersecurity-iso27001",
    title: "Cybersecurity & ISO 27001",
    category: "Digital Trust & Cybersecurity",
    problem: "Rapidly expanding IT infrastructure creates security blindspots, exposing client records and intellectual properties to network extortion, data leaks, and service outages.",
    solution: "We build and certify custom Information Security Management Systems (ISMS). We run penetration testing, establish secure developer networks, and coordinate ISO 27001/SOC 2 reviews.",
    benefits: [
      "ISO 27001 and SOC 2 certifications unlocking premium enterprise contracts.",
      "Always-active risk tracking across networks, databases and clouds.",
      "Drastic reduction in incident and breach probability."
    ],
    standards: ["ISO 27001", "SOC 2 (Type II)", "CERT-In Directives", "NIST CSF"],
    industries: ["it-services", "bfsi", "healthcare", "retail-ecommerce", "telecom"]
  },
  {
    id: "vendor-risk-management",
    title: "Vendor & Third-Party Risk Management",
    category: "Governance & Risk Advisory",
    problem: "Enterprises rely heavily on vendor stacks and third-party developers, yet they lack central systems to audit subcontractor security, resulting in critical data links and SLA breaches.",
    solution: "We deploy ongoing third-party due diligence and security questionnaire audits. We track supplier performance and coordinate incident responses across your entire supply chain.",
    benefits: [
      "Total supply chain transparency and contract liability tracking.",
      "Prevention of downstream database exploits from vendor access points.",
      "Automated vendor health scores and alerts."
    ],
    standards: ["ISO 27001 (A.15)", "RBI IT Outsourcing Norms", "HIPAA Business Associate Rules"],
    industries: ["bfsi", "it-services", "healthcare", "logistics-supply-chain", "retail-ecommerce"]
  },
  {
    id: "esg-sustainability",
    title: "ESG & Sustainability Reporting",
    category: "Governance & Risk Advisory",
    problem: "Global investors and regulators are demanding detailed ESG and BRSR (Business Responsibility & Sustainability Reporting) logs, yet firms lack unified pipelines to track waste, water and carbon footprints.",
    solution: "We integrate utilities telemetry with ESG frameworks to automate environmental reporting, audit waste registers, and prepare audit-proof filings.",
    benefits: [
      "Full alignment with SEBI BRSR, GRI and TCFD reporting guidelines.",
      "Access to premium global capital and sustainability-first funding.",
      "Enhanced brand positioning as an ethical market leader."
    ],
    standards: ["BRSR Standards", "GRI Framework", "TCFD Guidelines", "ISO 50001", "ESG Rules"],
    industries: ["manufacturing", "food-processing", "mining", "energy-utilities", "real-estate-infra"]
  },
  {
    id: "incident-response",
    title: "Incident Response & CERT-In Support",
    category: "Digital Trust & Cybersecurity",
    problem: "Under CERT-In directives, cybersecurity incidents must be reported within 6 hours. Delay or lack of forensics protocols leads to heavy regulatory penalties and litigation.",
    solution: "We build 6-hour response plans, run forensic checks, conduct simulated drills, and act as your dedicated incident liaison during critical network events.",
    benefits: [
      "Guaranteed regulatory compliance during emergency cyber events.",
      "Rapid threat isolation preserving business continuity.",
      "Post-incident forensic analysis to patch security vulnerabilities."
    ],
    standards: ["CERT-In Directions 2022", "NIST SP 800-61", "ISO 27035"],
    industries: ["it-services", "bfsi", "telecom", "retail-ecommerce", "government-psu"]
  },
  {
    id: "accreditation-services",
    title: "Accreditation & Certification Services",
    category: "Audit & Assurance",
    problem: "Obtaining elite institutional stamps (NABH, NAAC, NABL) is highly complex, involving massive paperwork, gap analyses, and structural audits with high rejection rates.",
    solution: "We act as your dedicated accreditation command team: running gap assessments, codifying policy checklists, training staff, and coordinating mock inspector audits.",
    benefits: [
      "Higher pass rates and top-tier rankings on first-attempt inspections.",
      "Standardized operations conforming to premium national guidelines.",
      "Enhanced brand credibility in healthcare and higher education."
    ],
    standards: ["NABH Standards", "NAAC Guidelines", "NABL ISO 17025", "NBA Accreditations"],
    industries: ["healthcare", "education"]
  },
  {
    id: "supply-chain-compliance",
    title: "Supply Chain Compliance",
    category: "Audit & Assurance",
    problem: "Global brands face massive reputational damage and import bans if subcontractors use unsafe sites, child labor, or purchase non-compliant materials.",
    solution: "We execute on-site and dynamic supply chain due diligence, auditing third-party working conditions, wage records, and safety controls against standard buyer norms.",
    benefits: [
      "Protection against brand boycotts and export customs blockades.",
      "Fully documented, ethical supplier networks attracting premium buyers.",
      "Flawless compliance with BSCI, OEKO-TEX, and social audit codes."
    ],
    standards: ["BSCI Audit Codes", "GOTS Certification", "OEKO-TEX Norms", "Export Acts"],
    industries: ["textiles", "manufacturing", "food-processing", "retail-ecommerce", "logistics-supply-chain"]
  },
  {
    id: "labour-law-compliance",
    title: "Labour Law Compliance",
    category: "Audit & Assurance",
    problem: "Adhering to CLRA, Minimum Wages, PF, and ESIC standards is extremely complex when managing thousands of contract laborers, exposing companies to strikes and heavy penalties.",
    solution: "We manage statutory registers, audit sub-contractor wage slips, track PF/ESIC filings, and prepare organizations for inspection under the Contract Labour Act.",
    benefits: [
      "Elimination of labor litigation and unexpected factory shutdown risks.",
      "100% compliant workforce registers and statutory audits.",
      "Clear, ethical branding as an employer of choice."
    ],
    standards: ["CLRA Act 1970", "Minimum Wages Act", "BOCW Act", "PF & ESIC Rules"],
    industries: ["manufacturing", "textiles", "mining", "real-estate-infra", "logistics-supply-chain"]
  },
  {
    id: "environmental-compliance",
    title: "Environmental Compliance",
    category: "Audit & Assurance",
    problem: "Dyeing units, processing plants, and heavy factories face closure orders if they fail SPCB consents or breach Zero Liquid Discharge (ZLD) norms.",
    solution: "We monitor effluent data, manage CPCB/SPCB consent renewals, audit waste pathways, and ensure industrial processing units meet local environmental clearances.",
    benefits: [
      "Zero stop-work environment orders from regulatory boards.",
      "Documented green performance credentials supporting corporate goals.",
      "Secure, long-term operational license continuity."
    ],
    standards: ["EPA 1986", "Water & Air Acts", "SPCB Consent Norms", "ZLD Rules"],
    industries: ["textiles", "manufacturing", "food-processing", "mining", "energy-utilities"]
  },
  {
    id: "rera-compliance",
    title: "RERA Compliance Management",
    category: "Governance & Risk Advisory",
    problem: "Real estate companies risk massive project freezes and heavy buyer lawsuits for late filings, escrow accounts deviations, or changing plans without approval.",
    solution: "We manage monthly project status filings, escrow balance audits, customer grievance response systems, and coordinate standard project closures.",
    benefits: [
      "Total buyer confidence and zero regulatory warning alerts under RERA.",
      "Safe, audit-proof project cash routing inside escrow structures.",
      "Smooth project handovers with clean regulatory documentation."
    ],
    standards: ["RERA Act 2016", "Building Bye-Laws", "BOCW Safety Guidelines"],
    industries: ["real-estate-infra"]
  },
  {
    id: "clinical-governance",
    title: "Clinical Governance",
    category: "Audit & Assurance",
    problem: "Hospitals face severe liabilities and clinical trust breakdown if standard protocols are bypassed, resulting in patient complications or ethical trial disputes.",
    solution: "We standardise clinical workflows, manage Adverse Event reporting systems, and establish research guidelines under global ICH-GCP codes.",
    benefits: [
      "Maximized patient safety and minimized medical liability claims.",
      "Shorter clinical trial approvals with robust ethics workflows.",
      "Tamper-proof incident logging and root-cause analysis."
    ],
    standards: ["ICH-GCP Guidelines", "NMC Rules", "CDSCO Trial Codes", "NABH Guidelines"],
    industries: ["healthcare", "pharma-sciences"]
  },
  {
    id: "telecom-compliance",
    title: "Telecom Compliance",
    category: "Governance & Risk Advisory",
    problem: "Telecom networks face heavy specturm penalties and license cancellations for delayed QoS reporting or customer grievance NCCP portal issues.",
    solution: "We automate network QoS metric collections, coordinate spectrum filings, audit EMF tower emissions, and build TRAI-compliant consumer portals.",
    benefits: [
      "Protected specturm assets with zero regulatory QoS penalties.",
      "Perfect scorecards in TRAI grid audits.",
      "Smooth tower deployment with right-of-way clearances."
    ],
    standards: ["TRAI Spectrum Rules", "USOF Guidelines", "NCCP Portal Codes"],
    industries: ["telecom"]
  },
  {
    id: "taxation-trade-compliance",
    title: "Taxation & Trade Compliance",
    category: "Audit & Assurance",
    problem: "Navigating GST reconciliation, e-invoicing mandates, customs valuations, and import-export licenses creates operational friction and exposes companies to tax penalties and supply chain delays.",
    solution: "We automate GST reconciliations, integrate e-invoicing pipelines, manage DGFT and Customs licenses, and establish trade controls to ensure zero-day delay in customs.",
    benefits: [
      "Elimination of double taxation and automated input tax credit (ITC) recovery.",
      "Seamless import-export clearings with structured DGFT licensing.",
      "Zero-day penalty exposure for GST and Excise filings."
    ],
    standards: ["GST Act 2017", "Customs Act 1962", "DGFT Guidelines", "FEMA Regulations"],
    industries: ["manufacturing", "logistics-supply-chain", "retail-ecommerce"]
  },
  {
    id: "statutory-payroll-compliance",
    title: "Statutory Payroll Compliance",
    category: "Audit & Assurance",
    problem: "Fragmented payroll runs and manual statutory calculations lead to inaccurate PF, ESI, and TDS deductions, triggering employee grievances, regulatory notices, and severe financial penalties.",
    solution: "A managed statutory payroll framework that automates deductions, maps transactions to GL entries, and generates perpetual audit-ready trails.",
    benefits: [
      "Zero statutory penalties with automated PF/ESI/TDS filings.",
      "Continuous audit-ready payroll archives and automatic Form 16 generation.",
      "Real-time notice management and response representation."
    ],
    standards: ["PF Act 1952", "ESI Act 1948", "Income Tax Act Sec 192", "Payment of Bonus Act"],
    industries: ["bfsi", "it-services", "manufacturing", "healthcare", "retail-ecommerce"]
  },
  {
    id: "hr-data-privacy-security",
    title: "HR Data Privacy & Security",
    category: "Digital Trust & Cybersecurity",
    problem: "Employee PII (Aadhaar, PAN, medical records, bank accounts) stored in unsecured HRIS portals is vulnerable to data breaches, risking severe compliance fines under the DPDP Act 2023.",
    solution: "We implement end-to-end data mapping, consent management architectures, role-based access control, and specialized PII breach response playbooks.",
    benefits: [
      "100% compliance with the DPDP Act 2023 for employee data privacy.",
      "Secure, encrypted database architectures preventing internal and external leaks.",
      "Rapid, automated incident response procedures to meet the 72-hour reporting mandate."
    ],
    standards: ["DPDP Act 2023", "ISO 27001", "Information Technology Act"],
    industries: ["bfsi", "it-services", "healthcare", "telecom"]
  },
  {
    id: "hr-policy-governance",
    title: "HR Policy & Governance",
    category: "Governance & Risk Advisory",
    problem: "Outdated employee handbooks and unmapped labor policies expose companies to co-employment lawsuits, compliance non-conformities, and POSH disputes.",
    solution: "We structure airtight HR policies, draft employee handbooks, manage multi-state Shop & Establishment licenses, and set up mandatory POSH frameworks.",
    benefits: [
      "Fully updated policy structures aligned with the new 4 Labour Codes.",
      "Compliant POSH committees with robust training logs and SOPs.",
      "Mitigation of co-employment and contractor liability exposures."
    ],
    standards: ["POSH Act 2013", "New Labour Codes", "Shop & Establishment Acts"],
    industries: ["bfsi", "it-services", "manufacturing", "healthcare"]
  },
  {
    id: "advanced-taxation-perquisites",
    title: "Advanced Taxation & Perquisites",
    category: "Audit & Assurance",
    problem: "Managing complex taxation for ESOPs, RSUs, expat cross-border mobility, and GST on employee reimbursements leads to tax leakages and regulatory auditing.",
    solution: "We provide specialized advisory and execution on stock options taxation, expat social security totalizations, and reimbursement tax optimization.",
    benefits: [
      "Accurate taxation of complex equity compensation (ESOPs/RSUs).",
      "Compliant cross-border mobility structures with tax equalization.",
      "Optimized Input Tax Credit (ITC) on staff welfare and canteens."
    ],
    standards: ["Income Tax Act", "Double Taxation Avoidance Agreement (DTAA)", "FEMA Rules"],
    industries: ["it-services", "bfsi", "telecom"]
  },
  {
    id: "managed-staffing-risk-shield",
    title: "Managed Staffing & Risk Shield",
    category: "Governance & Risk Advisory",
    problem: "Unvetted third-party contractors and invalid licenses expose the principal employer to direct legal penalties and compliance liabilities.",
    solution: "We establish a Co-Employment Avoidance framework, run continuous CLRA contractor payroll audits, and verify license validities.",
    benefits: [
      "Principal employer legal protection against contractor violations.",
      "Unified workforce dashboard showing direct and contract staff metrics.",
      "100% contractor validation against regulatory guidelines."
    ],
    standards: ["CLRA Act 1970", "Factories Act", "Payment of Wages Act"],
    industries: ["manufacturing", "logistics-supply-chain", "real-estate-infra"]
  },
  {
    id: "compliance-processing-bpo",
    title: "Compliance Processing BPO",
    category: "Audit & Assurance",
    problem: "High-volume statutory filings, PF/ESI claim processing, and license renewals consume significant internal bandwidth and lead to execution bottlenecks.",
    solution: "Our transactional BPO center handles high-volume filings, processes PF/ESI claims, and coordinates license renewals under strict SLAs.",
    benefits: [
      "99.9% processing accuracy and zero backlog for filings.",
      "Reduced internal administrative overhead by up to 60%.",
      "Accelerated claim settlements and license renewals."
    ],
    standards: ["PF Rules", "ESIC Regulations", "Licensing Acts"],
    industries: ["manufacturing", "retail-ecommerce", "logistics-supply-chain"]
  },
  {
    id: "hr-helpdesk-servicing",
    title: "HR Helpdesk & Servicing",
    category: "Governance & Risk Advisory",
    problem: "Delays in onboarding data verification, slow resolution of employee tax queries, and manual Full & Final (FnF) processing degrade the employee experience.",
    solution: "We deploy dedicated HR helpdesks, manage onboarding verification, resolve employee tax queries, and process FnF exits.",
    benefits: [
      "Highly satisfied workforce with sub-24hr query resolutions.",
      "Airtight background checks and data verification.",
      "Compliant, zero-error Full & Final exit processing."
    ],
    standards: ["Employment Standing Orders", "Income Tax Act", "Payment of Gratuity Act"],
    industries: ["it-services", "bfsi", "telecom"]
  },
  {
    id: "back-office-operations-bpo",
    title: "Back-Office Operations BPO",
    category: "Audit & Assurance",
    problem: "High overhead costs and errors in routine back-office tasks like data entry, expense processing, and bank reconciliations affect financial visibility.",
    solution: "We deliver SLA-managed back-office processing for invoices, expense reports, database entries, and bank reconciliations.",
    benefits: [
      "Over 50% operational cost savings in back-office administration.",
      "Zero backlog for invoice and bank reconciliations.",
      "High-quality, standardized data formats for corporate reporting."
    ],
    standards: ["Accounting Standards", "GAAP Guidelines", "Internal Control Systems"],
    industries: ["logistics-supply-chain", "retail-ecommerce", "bfsi"]
  },
  {
    id: "document-record-management",
    title: "Document & Record BPO",
    category: "Audit & Assurance",
    problem: "Physical record clutter and non-compliant document retention policies create legal risks and drag down search retrieval speeds during audits.",
    solution: "We digitize statutory registers, establish secure archival nodes, and execute automated retention policies.",
    benefits: [
      "Auditor-ready digital archives accessible in seconds.",
      "Compliant record disposal schedules avoiding legal liabilities.",
      "Secure, role-based access to sensitive historical logs."
    ],
    standards: ["Information Technology Act", "Companies Act 2013", "ISO 15489"],
    industries: ["bfsi", "healthcare", "government-psu", "manufacturing"]
  },
  {
    id: "labour-law-compliance",
    title: "Labour & Employment Law Compliance",
    category: "Governance & Risk Advisory",
    problem: "Navigating complex state and central labor laws (PF, ESI, Minimum Wages) leads to frequent notices and contractor liability issues.",
    solution: "We manage end-to-end statutory labor compliance, including contractor audits and seamless representation during inspections.",
    benefits: [
      "Zero contractor liability for principal employers.",
      "100% adherence to Provident Fund and ESI norms.",
      "Smooth relations with local labor commissioners."
    ],
    standards: ["EPF & MP Act", "ESI Act", "Factories Act", "Minimum Wages Act"],
    industries: ["manufacturing", "food-processing", "construction", "it-services", "retail-ecommerce"]
  },
  {
    id: "taxation-trade-compliance",
    title: "Taxation & Trade Compliance",
    category: "Governance & Risk Advisory",
    problem: "Inconsistent filings in GST, TDS, and SEZ regulations trigger massive financial penalties and disrupt export-import operations.",
    solution: "We provide comprehensive tax advisory, execute seamless monthly filings, and ensure strict compliance with SEZ export-import mandates.",
    benefits: [
      "Timely ITC (Input Tax Credit) realization.",
      "Avoidance of costly transfer pricing litigation.",
      "Uninterrupted supply chain through compliant customs clearance."
    ],
    standards: ["CGST/SGST Act", "Income Tax Act", "SEZ Rules", "FEMA"],
    industries: ["manufacturing", "it-services", "retail-ecommerce", "logistics-supply-chain"]
  },
  {
    id: "environmental-ehs",
    title: "Environmental & EHS Compliance",
    category: "Governance & Risk Advisory",
    problem: "Failure to secure CTO/CTE or mishandling hazardous waste results in immediate factory closures and severe NGT penalties.",
    solution: "We secure necessary environmental consents, manage hazardous waste registers, and conduct rigorous fire and workplace safety audits.",
    benefits: [
      "Guaranteed operational continuity without NGT interference.",
      "Streamlined renewal processes for CTE/CTO.",
      "Enhanced workplace safety leading to lower insurance premiums."
    ],
    standards: ["Water & Air Act", "Hazardous Waste Rules", "Factories Act (Safety)"],
    industries: ["manufacturing", "mining", "food-processing", "energy-utilities", "real-estate-infra"]
  },
  {
    id: "supply-chain-compliance",
    title: "Supply Chain & Logistics Compliance",
    category: "Governance & Risk Advisory",
    problem: "Vendors and logistics partners frequently bypass statutory regulations, legally exposing the principal employer to third-party defaults.",
    solution: "We audit and secure compliance across your entire vendor and distributor network, implementing robust pre-onboarding checks.",
    benefits: [
      "Complete shielding from third-party vendor defaults.",
      "Transparent tracking of distributor compliance metrics.",
      "Strict adherence to motor transport and warehousing laws."
    ],
    standards: ["Motor Transport Workers Act", "Warehousing Rules", "Contract Labour Act"],
    industries: ["logistics-supply-chain", "retail-ecommerce", "manufacturing", "food-processing"]
  },
  {
    id: "financial-risk",
    title: "Financial Risk Advisory",
    category: "Governance & Risk Advisory",
    problem: "Unexpected market volatility, credit defaults, and poor liquidity management can rapidly deplete capital structures.",
    solution: "We run advanced scenario stress tests and build predictive modeling tools to manage credit, market, and liquidity exposures.",
    benefits: [
      "Optimized capital adequacy and liquidity buffers.",
      "Proactive hedging against currency and interest rate fluctuations.",
      "Stronger credit profiling for counterparty risk mitigation."
    ],
    standards: ["Basel III Norms", "Ind AS / IFRS", "RBI Risk Guidelines"],
    industries: ["bfsi", "real-estate-infra", "manufacturing", "energy-utilities"]
  },
  {
    id: "operational-risk",
    title: "Operational Resilience & BCP",
    category: "Governance & Risk Advisory",
    problem: "Process breakdowns, system outages, or natural disasters can halt operations and cause irreparable reputational damage.",
    solution: "We identify single points of failure, establish robust Business Continuity Plans (BCP), and track historical loss data.",
    benefits: [
      "Minimal downtime during catastrophic events.",
      "Rapid recovery protocols restoring critical business functions.",
      "Reduction in recurrent operational errors through root-cause analysis."
    ],
    standards: ["ISO 22301 (BCMS)", "RBI Operational Risk Framework"],
    industries: ["it-services", "bfsi", "telecom", "healthcare", "government-psu"]
  },
  {
    id: "it-governance",
    title: "IT Governance & Strategy",
    category: "Governance & Risk Advisory",
    problem: "Misaligned IT investments and shadow IT create structural vulnerabilities, inflating budgets without delivering business value.",
    solution: "We align IT strategies with corporate objectives, audit software lifecycles, and advise boards on secure digital transformations.",
    benefits: [
      "Maximum ROI on enterprise software and hardware investments.",
      "Clear accountability through standardized IT frameworks.",
      "Seamless alignment with corporate growth objectives."
    ],
    standards: ["COBIT 2019", "ITIL v4", "ISO 38500"],
    industries: ["it-services", "bfsi", "telecom", "retail-ecommerce"]
  },
  {
    id: "board-advisory",
    title: "Board Advisory Services",
    category: "Governance & Risk Advisory",
    problem: "Independent directors face increasing regulatory scrutiny and personal liability without adequate real-time counsel.",
    solution: "We provide expert counsel on fiduciary duties, evaluate committee effectiveness, and draft zero-tolerance ethics charters.",
    benefits: [
      "Protection of directors from regulatory and legal liabilities.",
      "Enhanced board efficiency and strategic decision-making.",
      "Stronger anti-bribery and corporate ethics culture."
    ],
    standards: ["Companies Act 2013", "SEBI LODR", "Corporate Governance Code"],
    industries: ["bfsi", "manufacturing", "government-psu", "healthcare"]
  },
  {
    id: "vapt-testing",
    title: "VAPT & Penetration Testing",
    category: "Digital Trust & Cybersecurity",
    problem: "Undiscovered vulnerabilities in web and mobile applications provide easy entry points for ransomware and data exfiltration.",
    solution: "We conduct simulated ethical hacking, deep code reviews, and network scans to identify and patch flaws before they are exploited.",
    benefits: [
      "Prevention of high-profile data breaches and ransomware.",
      "Secure deployment of customer-facing applications.",
      "Actionable remediation roadmaps for developer teams."
    ],
    standards: ["OWASP Top 10", "CERT-In Empanelment Guidelines", "SANS Top 25"],
    industries: ["it-services", "bfsi", "retail-ecommerce", "telecom", "healthcare"]
  },
  {
    id: "cloud-security",
    title: "Cloud & Infrastructure Security",
    category: "Digital Trust & Cybersecurity",
    problem: "Misconfigured cloud storage buckets and weak IAM policies lead to unauthorized access and massive data leaks.",
    solution: "We audit AWS, Azure, and GCP environments, enforcing strict Zero Trust policies and 24/7 threat surveillance.",
    benefits: [
      "Bulletproof protection against cloud infrastructure hijacking.",
      "Automated detection of compliance drift in cloud configurations.",
      "Secure remote access architecture for distributed workforces."
    ],
    standards: ["CSA STAR", "CIS Benchmarks", "ISO 27017"],
    industries: ["it-services", "bfsi", "retail-ecommerce", "telecom"]
  },
  {
    id: "carbon-footprint",
    title: "Carbon Footprint & Net Zero",
    category: "Governance & Risk Advisory",
    problem: "Organizations struggle to accurately quantify Scope 1, 2, and 3 emissions, missing critical sustainability targets and investor expectations.",
    solution: "We map complete emission inventories, develop actionable reduction strategies, and advise on verified carbon credit markets.",
    benefits: [
      "Clear, quantifiable pathways to achieving Net Zero.",
      "Enhanced attractiveness to ESG-focused global investors.",
      "Compliance with international greenhouse gas protocols."
    ],
    standards: ["GHG Protocol", "Science Based Targets (SBTi)", "ISO 14064"],
    industries: ["manufacturing", "mining", "energy-utilities", "logistics-supply-chain"]
  },
  {
    id: "green-audits",
    title: "Green & Energy Audits",
    category: "Governance & Risk Advisory",
    problem: "Inefficient energy and water usage inflates operational costs and violates emerging environmental conservation mandates.",
    solution: "We assess facility resource consumption, implement Zero Liquid Discharge (ZLD) plans, and integrate circular economy principles.",
    benefits: [
      "Significant reduction in monthly power and water utility costs.",
      "Statutory compliance with energy conservation regulations.",
      "Measurable improvements in facility sustainability scores."
    ],
    standards: ["ISO 50001 (Energy)", "ISO 14001 (Environment)", "BEE Guidelines"],
    industries: ["manufacturing", "food-processing", "real-estate-infra", "energy-utilities"]
  },
  {
    id: "csr-management",
    title: "CSR Strategy & Implementation",
    category: "Governance & Risk Advisory",
    problem: "Mandatory CSR funds are often misallocated to non-compliant NGOs, failing to generate measurable impact or meet statutory reporting requirements.",
    solution: "We design strategic CSR programs, conduct due diligence on NGO partners, and perform third-party impact assessments.",
    benefits: [
      "100% compliance with Companies Act CSR expenditure rules.",
      "Maximized social return on investment (SROI).",
      "Enhanced corporate reputation through verified impact reporting."
    ],
    standards: ["Companies Act (CSR Rules)", "Social Audit Standards"],
    industries: ["manufacturing", "bfsi", "it-services", "mining", "energy-utilities"]
  }
];

export const getServiceById = (id: string) => {
  return servicesData.find(serv => serv.id === id);
};

