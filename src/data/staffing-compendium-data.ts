export interface SkillTier {
  title: string;
  profile: string;
  characteristics: string[];
  roles: { [domain: string]: string[] };
}

export interface HiringFormat {
  id: string;
  title: string;
  definition: string;
  whenToUse: string[];
  urgency: string;
}

export interface EngagementModel {
  id: string;
  title: string;
  howItWorks: string;
  details: string[];
}

export interface IndustryMatrixItem {
  id: string;
  title: string;
  lowSkill: { roles: string[]; category: string; model: string };
  mediumSkill: { roles: string[]; category: string; model: string };
  highSkill: { roles: string[]; category: string; model: string };
  considerations: string[];
}

export interface DetailedOffering {
  id: string;
  title: string;
  overview: string;
  processSteps: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  deployTime: { [tier: string]: string };
}

export interface ScreeningPhase {
  phase: string;
  title: string;
  desc: string;
}

export interface ClientBenefit {
  title: string;
  desc: string;
}

export const skillTiers: SkillTier[] = [
  {
    title: "Blue Collar Manpower",
    profile: "High-school diploma or GED equivalent; fewer than 2 years of professional experience; requires minimal on-the-job training or task-specific orientation.",
    characteristics: [
      "Task-oriented, process-driven roles with clearly defined instructions",
      "Supervised execution with limited autonomous decision-making",
      "Physical labor, repetitive processes, or basic administrative functions"
    ],
    roles: {
      "Manufacturing": ["Assembly line worker", "Material handler", "Packaging associate", "Machine feeder"],
      "Logistics": ["Warehouse picker", "Loader/unloader", "Inventory counter", "Dock worker"],
      "Facilities": ["Janitor", "Groundskeeper", "Porter", "Basic maintenance helper"],
      "Retail": ["Stock clerk", "Shelf replenisher", "Cashier", "Greeter"],
      "Administration": ["Data entry clerk", "Filing assistant", "Mail room sorter"],
      "Construction": ["General laborer", "Site cleanup crew", "Flagging/traffic control"]
    }
  },
  {
    title: "Grey Collar Manpower",
    profile: "Vocational diploma, technical certification, associate degree, or trade apprenticeship; 2–5 years of hands-on experience; capable of operating specialized equipment or applying domain-specific knowledge under moderate supervision.",
    characteristics: [
      "Applies technical knowledge to operate machinery, systems, or processes",
      "Requires certification or licensure for compliance (e.g., HVAC, CDL, phlebotomy)",
      "Capable of troubleshooting within defined parameters",
      "May supervise small teams of blue collar workers"
    ],
    roles: {
      "Manufacturing": ["CNC machinist", "Quality inspector", "Welding technician", "PLC programmer"],
      "Healthcare": ["Medical assistant", "Phlebotomist", "Radiology technician", "Certified nursing assistant (CNA)"],
      "IT": ["Help-desk technician", "Network support specialist", "QA tester", "Junior developer"],
      "Facilities": ["HVAC technician", "Electrician (journeyman)", "Fire alarm technician", "Building engineer"],
      "Construction": ["Licensed electrician", "Plumber", "Heavy equipment operator", "Crane operator"],
      "Logistics": ["Forklift certified operator", "Warehouse supervisor", "Dispatch coordinator", "Fleet mechanic"],
      "Finance": ["Compliance analyst", "Loan processor", "Underwriting assistant", "Accounts payable specialist"],
      "Professional Services": ["Junior consultant", "Project coordinator", "Paralegal", "HR generalist"]
    }
  },
  {
    title: "White Collar Manpower",
    profile: "Bachelor's degree, Master's degree, or Doctorate; professional certifications (PMP, CPA, PE, CFA); 5+ years of progressive experience; capable of strategic decision-making, team leadership, and P&L accountability.",
    characteristics: [
      "Strategic, autonomous decision-making with organizational impact",
      "Cross-functional leadership and stakeholder management",
      "Deep domain expertise combined with business acumen",
      "Accountable for revenue targets, operational KPIs, or regulatory outcomes"
    ],
    roles: {
      "Manufacturing": ["Plant manager", "Director of operations", "VP of manufacturing", "Lean Six Sigma master black belt"],
      "Healthcare": ["Clinical specialist", "Chief nursing officer", "Hospital administrator", "Chief medical officer"],
      "IT": ["Software architect", "CTO", "VP of engineering", "Data science lead", "Cybersecurity director"],
      "Facilities": ["Director of facilities management", "VP of real estate & operations"],
      "Construction": ["Project superintendent", "VP of construction", "Director of estimating"],
      "Logistics": ["Director of supply chain", "VP of logistics", "Chief procurement officer"],
      "Finance": ["VP of risk", "CFO", "Chief compliance officer", "Portfolio manager"],
      "Professional Services": ["Senior partner", "Managing director", "Practice lead"]
    }
  }
];

export const hiringFormats: HiringFormat[] = [
  {
    id: "permanent",
    title: "Permanent Staffing (Direct Hire)",
    definition: "Full-time, indefinite employment where the candidate is placed directly onto the client's payroll from day one, receiving the client's full benefits package, equity eligibility, and career progression path.",
    whenToUse: [
      "Building the foundational, core workforce",
      "Succession planning and leadership development",
      "Roles requiring deep institutional knowledge and long-term loyalty",
      "When the client has the internal HR infrastructure to onboard and retain"
    ],
    urgency: "Standard Search (2-4 weeks)"
  },
  {
    id: "contract",
    title: "Contract Staffing (Fixed-Term)",
    definition: "Talent hired for a specific, predetermined duration (typically 3, 6, 9, or 12 months) to execute a defined project, cover a planned absence (e.g., maternity leave, sabbatical), or address a predictable seasonal demand spike. The worker is employed on the staffing agency's payroll.",
    whenToUse: [
      "Project-based work with a clear start and end date",
      "Maternity/paternity leave backfills",
      "Seasonal production ramp-ups (e.g., holiday retail, agricultural harvest)",
      "System implementations (ERP, CRM) requiring temporary specialist capacity"
    ],
    urgency: "Rapid Deployment (5-10 days)"
  },
  {
    id: "short-term",
    title: "Short-Term Staffing",
    definition: "Tactical placements lasting a few days to a few weeks. Designed for immediate, transient operational needs without any long-term commitment or complex onboarding.",
    whenToUse: [
      "Weekend or holiday retail surges",
      "Event staffing (conferences, trade shows, product launches)",
      "Short-duration administrative tasks (mailing campaigns, inventory counts)",
      "Bridging a gap between an outgoing and incoming permanent employee"
    ],
    urgency: "Immediate Dispatch (1-3 days)"
  },
  {
    id: "contingency",
    title: "Contingency Staffing",
    definition: "A flexible, pre-vetted bench of workers deployed strictly when variable demand materializes. The client incurs labor costs only when the workers are actively performing work. When demand subsides, the contingency pool is released.",
    whenToUse: [
      "Unpredictable production volumes driven by volatile order books",
      "E-commerce fulfillment centers with erratic demand cycles",
      "Agricultural processing with harvest-dependent labor needs",
      "Any environment where demand forecasting is inherently unreliable"
    ],
    urgency: "Dynamic Scaling (24-48 hours)"
  },
  {
    id: "emergency",
    title: "Emergency Staffing",
    definition: "Rapid-deployment crisis staffing designed to prevent operational shutdowns. Candidates are deployed within hours—often within 24 hours—to fill sudden, unexpected vacancies caused by call-outs, no-shows, facility emergencies, or disaster response.",
    whenToUse: [
      "Unplanned absences that threaten production continuity",
      "Natural disaster response (flood, fire, storm damage requiring immediate labor)",
      "Sudden facility breakdowns requiring specialized repair labor",
      "SLA-critical environments where any downtime incurs financial penalties"
    ],
    urgency: "Critical Crisis (2-12 hours)"
  },
  {
    id: "on-call",
    title: "On-Call Staffing",
    definition: "Workers scheduled on an as-needed basis with little to no guaranteed minimum hours. They maintain readiness to report on short notice, often within 2–4 hours of notification.",
    whenToUse: [
      "Healthcare facilities with unpredictable patient census",
      "Hospitality venues with weather-dependent or event-dependent demand",
      "Security operations requiring 24/7 standby coverage",
      "Emergency maintenance for mission-critical facilities"
    ],
    urgency: "Standby Alert (2-4 hours)"
  },
  {
    id: "per-diem",
    title: "Temporary / Per-Diem Staffing",
    definition: "Day-labor or hourly placements paid strictly on a daily basis, typically sourced to handle immediate backfills, peak-hour rushes, or one-day operational needs. The engagement may or may not extend beyond the initial day.",
    whenToUse: [
      "Daily warehouse fulfillment spikes",
      "Construction site labor that varies by weather and phase",
      "Agricultural harvest labor",
      "Catering and banquet event staff"
    ],
    urgency: "Daily Dispatch (Same day)"
  }
];

export const engagementModels: EngagementModel[] = [
  {
    id: "placement",
    title: "Placement (Contingency & Retained)",
    howItWorks: "The agency sources and screens candidates for a permanent role. The client hires the candidate directly onto their own payroll. The agency charges a one-time placement fee, typically 15–30% of the candidate's first-year annual salary.",
    details: [
      "Contingency Search: Fee is paid only upon successful hire. No upfront cost.",
      "Retained Search: Fee is paid in milestones (e.g., 1/3 engagement, 1/3 shortlist, 1/3 hire). Used exclusively for senior leadership."
    ]
  },
  {
    id: "eor",
    title: "Contract Staffing (Employer of Record — EOR)",
    howItWorks: "The agency legally employs the worker—placing them on the agency's payroll, managing all tax withholdings, statutory benefits, insurance, and compliance obligations. The client directs the worker's day-to-day tasks and pays the agency an hourly or monthly bill rate.",
    details: [
      "Full mitigation of legal co-employment risks.",
      "Agency manages all PF, ESIC, PT, workers compensation, and tax logs.",
      "Monthly standardized markup rate."
    ]
  },
  {
    id: "c2h",
    title: "Contract-to-Hire (C2H)",
    howItWorks: "A hybrid model. The candidate begins as a contract employee (employed and paid by the agency) for a defined trial period—typically 90, 120, or 180 days. At the end of the trial, if both parties are satisfied, the client transfers the employee to their permanent payroll.",
    details: [
      "Allows full evaluation of performance and culture fit before permanent commitment.",
      "Reduced conversion/buyout fee applies based on contract duration already served.",
      "Zero termination friction during the trial period."
    ]
  },
  {
    id: "performance",
    title: "Performance Staffing",
    howItWorks: "The agency's fee structure is tied directly to measurable outcomes—worker retention milestones (e.g., 30/60/90 days), production output metrics, quality KPIs, or successful permanent conversion.",
    details: [
      "Aligns staffing incentives directly with client operational output.",
      "Guarantees workforce reliability and performance metrics.",
      "Reduces direct overhead for underperforming workers."
    ]
  },
  {
    id: "project-team",
    title: "Project Team Staffing (Out-Tasking)",
    howItWorks: "Rather than providing individual workers, the agency assembles and delivers an entire, self-managed project team—including a dedicated Team Lead or Project Manager—to execute a specific scope of work.",
    details: [
      "The client defines deliverables and milestones; the agency manages scheduling and performance.",
      "Billing is milestone-based or deliverable-based, not timesheet-based.",
      "Zero management overhead for the client's internal team."
    ]
  },
  {
    id: "msp",
    title: "Managed Services Program (MSP)",
    howItWorks: "The agency assumes end-to-end management of the client's entire contingent workforce ecosystem. Acting as the 'Master Vendor', we consolidate all staffing suppliers under a centralized governance structure.",
    details: [
      "Audits and consolidates all existing staffing vendors.",
      "Standardizes rate cards, negotiations, and compliance registers.",
      "Deploys a Vendor Management System (VMS) technology platform."
    ]
  },
  {
    id: "rpo",
    title: "Recruitment Process Outsourcing (RPO)",
    howItWorks: "The agency embeds its recruiters (on-site or virtually) into the client's organization to function as the client's complete internal talent acquisition team. The RPO team manages the entire recruiting lifecycle.",
    details: [
      "Recruiters act under the client's employer brand.",
      "Full lifecycle management from sourcing to pre-boarding.",
      "Hired candidates go onto the client's payroll directly."
    ]
  }
];

export const industryMatrix: IndustryMatrixItem[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    lowSkill: {
      roles: ["Assembly associate", "Material handler", "Packer", "Machine feeder"],
      category: "Temporary/Per-Diem, Emergency",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["CNC operator", "Quality inspector", "Welding tech", "Maintenance tech"],
      category: "Contract, Short-Term Contract",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Plant manager", "Director of operations", "Continuous improvement lead"],
      category: "Permanent",
      model: "Placement, RPO"
    },
    considerations: [
      "High turnover in blue collar tiers demands always-on contingency bench strength",
      "Safety certifications (OSHA 10/30) are mandatory for all deployed workers",
      "Seasonal demand spikes (e.g. automotive model changeovers) require flexible contract ramp-ups"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    lowSkill: {
      roles: ["Patient transporter", "Dietary aide", "Housekeeping", "Unit clerk"],
      category: "On-Call, Emergency, Per-Diem",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Medical assistant", "CNA", "Radiology tech", "Phlebotomist"],
      category: "Contract, Short-Term Contract",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Clinical specialist", "Nurse practitioner", "Hospital administrator"],
      category: "Permanent, On-Call",
      model: "Placement, Retained Search"
    },
    considerations: [
      "Credential verification (licenses, immunizations, background logs) is legally mandated",
      "Emotional stability and resilience testing are critical for patient-facing roles",
      "24/7 on-call staffing pools are essential for hospital operations",
      "HIPAA compliance training is required for all deployed workers"
    ]
  },
  {
    id: "it-services",
    title: "IT / Software",
    lowSkill: {
      roles: ["Help-desk tech", "PC refresh technician", "Data entry clerk"],
      category: "Contingency, Temporary",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Cloud engineer", "DevOps engineer", "QA automation engineer", "Business analyst"],
      category: "Contract, C2H",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Software architect", "CTO", "VP of engineering", "Data science lead"],
      category: "Permanent, Project Team",
      model: "Placement, Project Team, RPO"
    },
    considerations: [
      "Rapid technology obsolescence demands continuous skills verification",
      "Project Team Staffing is highly effective for software development pods",
      "Remote/hybrid work models expand the talent pool geographically",
      "IP protection and NDA execution are mandatory before deployment"
    ]
  },
  {
    id: "real-estate-infra",
    title: "Mission-Critical Facilities",
    lowSkill: {
      roles: ["Security guard", "Fire watch", "Janitorial crew", "Parking attendant"],
      category: "On-Call, Emergency",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["HVAC technician", "Electrician", "Fire alarm tech", "Building engineer"],
      category: "Short-Term Contract, On-Call",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Plant manager", "Director of facilities", "Chief building engineer"],
      category: "Permanent",
      model: "Placement, Retained Search"
    },
    considerations: [
      "24/7/365 coverage models are standard; on-call rosters must be perpetually maintained",
      "Background checks are intensified (government clearances for military/government facilities)",
      "Emergency staffing response times must be under 4 hours for critical infrastructure",
      "Workers must carry site-specific certifications (e.g. SCIF clearance, TWIC card)"
    ]
  },
  {
    id: "construction",
    title: "Construction",
    lowSkill: {
      roles: ["General laborer", "Site cleanup crew", "Flagging assistant", "Demolition helper"],
      category: "Temporary, Emergency",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Licensed electrician", "Plumber", "Heavy equipment operator", "Crane operator"],
      category: "Contract, Short-Term",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Project superintendent", "VP of construction", "Director of estimating"],
      category: "Permanent",
      model: "Placement, RPO"
    },
    considerations: [
      "OSHA compliance is non-negotiable; all workers must carry valid safety certifications",
      "Weather-dependent scheduling creates highly variable labor demand",
      "Prevailing wage compliance (Davis-Bacon Act) is required for government projects",
      "Drug screening and physical fitness testing are standard pre-deployment requirements"
    ]
  },
  {
    id: "logistics-supply-chain",
    title: "Logistics & Warehousing",
    lowSkill: {
      roles: ["Warehouse picker", "Loader/unloader", "Sorter", "Dock worker"],
      category: "Contingency, Temporary, Emergency",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Forklift operator", "Warehouse supervisor", "Dispatch coordinator", "Fleet mechanic"],
      category: "Contract, Short-Term Contract",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Director of supply chain", "VP of logistics", "Chief procurement officer"],
      category: "Permanent",
      model: "Placement, RPO"
    },
    considerations: [
      "E-commerce peak seasons (Black Friday, Prime Day) demand massive contingency scale-ups",
      "Forklift and equipment certifications must be verified pre-deployment",
      "Shift flexibility (24/7 operations) is a baseline expectation",
      "Performance Staffing models are effective for fulfillment center throughput KPIs"
    ]
  },
  {
    id: "bfsi",
    title: "Finance & Banking",
    lowSkill: {
      roles: ["Bank teller", "Mail clerk", "Document processor", "Receptionist"],
      category: "Per-Diem, Temporary",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Compliance analyst", "Loan processor", "Underwriting assistant", "Internal auditor"],
      category: "Contract, C2H",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["VP of risk", "CFO", "Chief compliance officer", "Portfolio manager"],
      category: "Permanent",
      model: "Placement, Retained Search"
    },
    considerations: [
      "Credit checks and financial background screenings are mandatory for fiduciary roles",
      "Regulatory compliance (SOX, SOX II, Dodd-Frank, AML/KYC) is non-negotiable",
      "Confidentiality and data security clearances are required pre-deployment",
      "Culture fit is paramount—financial services firms have highly specific risk-appetite cultures"
    ]
  },
  {
    id: "professional-services",
    title: "Professional Services",
    lowSkill: {
      roles: ["Administrative assistant", "Receptionist", "Filing clerk"],
      category: "Temporary, Per-Diem",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Junior consultant", "Paralegal", "Staff accountant", "HR generalist"],
      category: "Contract, C2H",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Senior partner", "Managing director", "Practice area lead", "Tax director"],
      category: "Permanent",
      model: "Retained Search, Placement"
    },
    considerations: [
      "Client-facing roles require exceptional communication and presentation skills",
      "Professional certifications (CPA, bar admission, SHRM-CP) must be verified",
      "Billable-hour utilization rates are a key performance metric"
    ]
  },
  {
    id: "retail-ecommerce",
    title: "Retail & Consumer Goods",
    lowSkill: {
      roles: ["Cashier", "Shelf stocker", "Sales associate", "Visual merchandiser"],
      category: "Temporary, Per-Diem, Short-Term, Emergency",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Store manager", "Inventory planner", "Buyer assistant"],
      category: "Contract, C2H",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["VP of retail operations", "Director of merchandising", "Regional VP"],
      category: "Permanent",
      model: "Placement, RPO"
    },
    considerations: [
      "High seasonal volatility (holidays) requires fast temporary staffing access",
      "Point of Sale (POS) tool competency must be checked pre-deployment",
      "Customer service emotional intelligence checks are vital"
    ]
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    lowSkill: {
      roles: ["Grounds maintenance", "Meter reader helper", "Laborer"],
      category: "Temporary, Emergency",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Lineman", "Field technician", "Pipeline inspector", "SCADA technician"],
      category: "Contract, On-Call",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Director of grid operations", "VP of energy trading", "Chief safety officer"],
      category: "Permanent",
      model: "Placement, Retained Search"
    },
    considerations: [
      "Workers must pass emergency grid response and safety assessments",
      "Drug and alcohol screenings are strictly mandated and run dynamically",
      "Technical certifications must be kept perpetually live in the client database"
    ]
  },
  {
    id: "education",
    title: "Education",
    lowSkill: {
      roles: ["Classroom aide", "Cafeteria worker", "After-school monitor"],
      category: "Temporary, Per-Diem",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Substitute teacher", "School counselor", "Librarian", "Lab technician"],
      category: "Contract, Short-Term",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["Principal", "Superintendent", "Dean of academic affairs"],
      category: "Permanent",
      model: "Placement, RPO"
    },
    considerations: [
      "Background checks include deep child protection index validation",
      "State-specific certifications for teaching and counselor profiles are required",
      "Standard first aid and safety certifications are prerequisite"
    ]
  },
  {
    id: "hospitality",
    title: "Hospitality & Food Services",
    lowSkill: {
      roles: ["Housekeeper", "Banquet server", "Dishwasher", "Line cook"],
      category: "Temporary, Per-Diem, On-Call, Emergency",
      model: "Contingency (EOR)"
    },
    mediumSkill: {
      roles: ["Sous chef", "Front desk supervisor", "Event coordinator"],
      category: "Contract, C2H",
      model: "Contract (EOR), C2H"
    },
    highSkill: {
      roles: ["General manager", "Executive chef", "Director of operations"],
      category: "Permanent",
      model: "Placement"
    },
    considerations: [
      "Food handling certifications (ServSafe or local equivalent) are verified",
      "Background vetting is prioritized for employees handling cash or guest rooms",
      "High flexibility is required for events and seasonal occupancy surges"
    ]
  }
];

export const detailedOfferings: DetailedOffering[] = [
  {
    id: "offering-perm",
    title: "Permanent Staffing (Direct Hire)",
    overview: "Permanent staffing is the acquisition of full-time, indefinite employees placed directly onto the client's organization payroll from day one. This is the foundational offering for building core workforce structures that define organizational culture and drive long-term strategic objectives.",
    processSteps: [
      { title: "Job Profiling & Needs Analysis (Days 1–3)", desc: "A dedicated Account Manager conducts an in-depth consultation with the client's hiring manager and HR team to define technical and cultural requirements, compensation benchmarks, and success metrics." },
      { title: "Talent Sourcing & Headhunting (Days 3–14)", desc: "Mining pre-vetted databases and headhunting passive talent via direct industry outreach, active sourcing networks, and referral channels." },
      { title: "Advanced Screening (Days 7–18)", desc: "Shortlisted candidates pass through our 5-phase screening, including cognitive, emotional, and background verifications." },
      { title: "Client Presentation & Coordinator (Days 14–25)", desc: "Presenting a shortlist of 3-5 candidates with Fit Scorecards, coordinating interviews, and gathering post-interview feedback." },
      { title: "Offer Management & Negotiation (Days 21–30)", desc: "Structuring salary offers, managing expectations, navigating counter-offers, and facilitating acceptance agreements." },
      { title: "Onboarding Handover & Follow-Up (Days 30–45)", desc: "Transitioning the candidate to client's HR, conducting 30/60/90-day post-placement checks, and activating guarantee replacement if necessary." }
    ],
    benefits: [
      { title: "Cultural Foundation", desc: "Permanent employees become the cultural backbone of your organization, driving values and building institutional memory." },
      { title: "Long-Term Cost Efficiency", desc: "The lowest cost-per-hour over a multi-year tenure, as the placement fee is amortized over years of productive work." },
      { title: "Full Control", desc: "The client retains complete control over the employee's benefits, training investment, and career trajectory." },
      { title: "Guarantee Protection", desc: "90-day replacement guarantee eliminates financial risk if the hire departs." },
      { title: "Succession Planning", desc: "Enables the client to build leadership pipelines and promote from within over time." },
      { title: "Deep Integration", desc: "Permanent hires integrate more deeply into teams, absorb company knowledge, and develop long-term client relations." }
    ],
    deployTime: {
      "Low-Skill": "2 to 3 weeks",
      "Medium-Skill": "3 to 5 weeks",
      "High-Skill / Leadership": "4 to 8 weeks",
      "Executive Search": "8 to 16 weeks"
    }
  },
  {
    id: "offering-contract",
    title: "Contract Staffing (Fixed-Term)",
    overview: "Contract staffing places qualified professionals on our payroll for a defined project duration (typically 3-12 months). Govenics acts as the Employer of Record (EOR), handling all payroll, taxes, insurance, and labor law compliance.",
    processSteps: [
      { title: "Scope & Duration Alignment (Days 1–2)", desc: "Define timelines, bill rates, deliverables, required certifications, and SLA structures. Execute Master Service Agreement." },
      { title: "Rapid Talent Sourcing (Days 2–7)", desc: "Pull from pre-vetted, deployment-ready contractor databases for immediate matches, or active fast-track sourcing." },
      { title: "Compliance & Payroll Setup (Days 5–9)", desc: "Process tax documents, direct deposits, benefits enrollment, and verify required licenses." },
      { title: "Deployment & Integration (Days 7–14)", desc: "Worker reports to client site. Run site-specific orientations, safety protocols, and verify tools/systems access." },
      { title: "Lifecycle Management (Ongoing)", desc: "Weekly timesheet approvals, performance audits, contract extensions, or smooth offboarding." }
    ],
    benefits: [
      { title: "Financial Flexibility", desc: "Converts fixed labor costs (salaries, benefits, liabilities) into variable, project-aligned operational expenses." },
      { title: "Zero Employment Liability", desc: "The agency absorbs all co-employment risk, severance obligations, and benefit continuation costs." },
      { title: "Niche Expertise On-Demand", desc: "Access specialized skills (e.g., SAP consultant, certified welder) only for the duration they're needed." },
      { title: "Speed to Deploy", desc: "Pre-vetted contractor pools enable rapid deployment, often within 1–2 weeks." },
      { title: "Scalability", desc: "Easily scale teams up or down as project phases evolve." },
      { title: "Compliance Shield", desc: "The agency assumes responsibility for labor law compliance, tax filings, and workers' compensation." }
    ],
    deployTime: {
      "Low-Skill": "3 to 5 business days",
      "Medium-Skill": "5 to 10 business days",
      "High-Skill": "1 to 3 weeks"
    }
  },
  {
    id: "offering-c2h",
    title: "Contract-to-Hire (C2H)",
    overview: "Contract-to-Hire is a hybrid model where candidates start as contract employees on our payroll for a trial period (typically 90-180 days). Clients convert them to permanent payroll after evaluating real-world performance.",
    processSteps: [
      { title: "KPI & Conversion Framework Design (Days 1–3)", desc: "Set target performance metrics, conversion fees, and conversion timeline." },
      { title: "Targeted Sourcing (Days 3–10)", desc: "Source candidates motivated by long-term permanent roles and run screening." },
      { title: "Contract Deployment (Days 10–14)", desc: "Deploy candidate on our payroll. Initiate 30/60/90-day progress check loops." },
      { title: "Structured Evaluation Loop (Days 30, 60, 90)", desc: "Assess early integration, performance trajectories, and conversion readiness." },
      { title: "Conversion or Conclusion (Days 90–180)", desc: "Process the buyout, facilitate payroll transfer, and transition employee benefits." }
    ],
    benefits: [
      { title: "Try Before You Buy", desc: "Eliminates the risk and financial cost (1.5-3x salary) of bad permanent hires." },
      { title: "Faster Start", desc: "Bypasses lengthy internal approval processes; talent begins contributing immediately." },
      { title: "Motivated Performers", desc: "Candidates work at peak efficiency knowing a permanent job is the goal." },
      { title: "Cost-Effective Conversion", desc: "Buyout fees are significantly lower than standard placement costs." },
      { title: "Reduced Onboarding Risk", desc: "The candidate is already integrated into the team, tools, and culture by the time they convert." },
      { title: "Flexibility", desc: "If the candidate isn't the right fit, the engagement ends cleanly with zero severance." }
    ],
    deployTime: {
      "Initial Contract Start": "1 to 2 weeks",
      "Trial Period": "90 to 180 days",
      "Conversion Processing": "Same Day"
    }
  },
  {
    id: "offering-temp-cont",
    title: "Temporary / Per-Diem & Contingency Staffing",
    overview: "High-volume, immediate staffing addressing volatile demand cycles. Provides day-labor or shift-based workers matched against real-time demand peaks, managed end-to-end.",
    processSteps: [
      { title: "Talent Pool Curation (Ongoing)", desc: "Maintain a dynamic, safety-trained bench of low-to-medium skill workers." },
      { title: "Real-Time Demand Ordering (As Needed)", desc: "Client submits shift requirements (headcount, location, skill) via portal." },
      { title: "Instant Matching & Dispatch (Within Hours)", desc: "System auto-matches and dispatches available workers with PPE and site protocols." },
      { title: "On-Site Deployment & Attendance (Real-Time)", desc: "Workers check-in via mobile. Standby replacements dispatched for no-shows." },
      { title: "Invoicing & Reporting (Weekly)", desc: "Weekly timesheet consolidation and monthly utilization audit reports." }
    ],
    benefits: [
      { title: "Ultimate Scalability", desc: "Scale teams up or down by hundreds of workers within a single day." },
      { title: "Zero Idle Cost", desc: "Pay only for active hours worked. Eliminate unabsorbed labor capacity." },
      { title: "Turnover Absorption", desc: "We absorb the administrative costs of recruitment and high turnover." },
      { title: "Speed", desc: "Standard deployments within 24-48 hours; emergency deployments within 2-12 hours." },
      { title: "Quality Assurance", desc: "Every worker on our bench has been pre-screened, background-verified, and safety-trained." },
      { title: "Administrative Relief", desc: "All payroll, tax withholding, and statutory benefits are managed by the agency." }
    ],
    deployTime: {
      "Planned Shift Request": "24 to 48 hours",
      "Same-Day Dispatch": "Under 4 hours",
      "Emergency Replacements": "2 to 12 hours"
    }
  },
  {
    id: "offering-emergency",
    title: "Emergency & On-Call Staffing",
    overview: "Rapid-deployment crisis staffing designed to prevent operational shutdowns. Candidates are dispatched within hours to fill sudden vacancies caused by call-outs, disaster recovery, or security gaps.",
    processSteps: [
      { title: "Rapid Response Roster Maintenance (Ongoing)", desc: "Maintain an active standby pool pre-vetted for immediate crisis deployment." },
      { title: "Crisis Alert Activation (Immediate)", desc: "Client triggers alert via 24/7 hotline, SMS, or emergency portal button." },
      { title: "Expedited Matching & Vetting (Within 1–2 Hours)", desc: "Select pre-cleared, site-certified candidates matching client compliance profile." },
      { title: "Immediate Dispatch (Within 2–12 Hours)", desc: "Direct worker to report immediately to site with relevant safety gears." },
      { title: "Post-Deployment Reporting (Within 24 Hours)", desc: "Provide response time logs and compile permanent backup staffing advice." }
    ],
    benefits: [
      { title: "Business Continuity", desc: "Prevents production line shutdowns, SLA breaches, and data center gaps." },
      { title: "24/7 Standby Support", desc: "Instant response for night shifts, holidays, and sudden weather crises." },
      { title: "Stress Reduction", desc: "Eliminates the burden of calling in favors from exhausted staff or scrambling at 2 AM." },
      { title: "Locked-In Emergency Rates", desc: "All emergency rates are pre-negotiated in the MSA—no surge pricing." },
      { title: "Safety Compliance", desc: "Pre-vetted workers arrive with current safety certifications and PPE knowledge." },
      { title: "Regulatory Compliance", desc: "Healthcare, security, and facilities workers arrive with current licenses and clearances." }
    ],
    deployTime: {
      "Emergency Placements": "2 to 12 hours",
      "Pre-Scheduled On-Call": "2 to 4 hours"
    }
  },
  {
    id: "offering-executive",
    title: "Executive Search & Retained Placement",
    overview: "Discreet and highly consultative retained search for C-suite, VP, and Director-level leadership roles. Built on deep market mapping, psychometrics, and 360-degree reference networks.",
    processSteps: [
      { title: "Position Architecture (Weeks 1–2)", desc: "Board-level immersion to define strategic mandates, culture fit, and P&L KPIs." },
      { title: "Market Mapping (Weeks 2–4)", desc: "Conducting organizational audits of target competitors and identifying passive leaders." },
      { title: "Discreet Outreach (Weeks 4–8)", desc: "One-on-one executive conversations focusing on motivations and alignment." },
      { title: "Executive Assessment (Weeks 6–10)", desc: "In-depth cognitive, psychometric, emotional intelligence, and 360-degree referencing." },
      { title: "Shortlist Presentation & Interviews (Weeks 8–12)", desc: "Coordinate multi-round interviews and present fit dossiers to stakeholders." },
      { title: "Offer Negotiation & Transition (Weeks 12–16)", desc: "Structuring complex equity and bonus offers, and managing transition/onboarding." }
    ],
    benefits: [
      { title: "Access Passive Markets", desc: "Connect with the top 70% of executives who are not on standard job boards." },
      { title: "Total Confidentiality", desc: "Protects brand positioning and prevents internal/market disruption." },
      { title: "Strategic Advisory", desc: "The search process itself often clarifies the organization's strategic direction." },
      { title: "90%+ Completion Rate", desc: "Retained search guarantees dedicated resources until the role is filled." },
      { title: "Reduced Risk of Mis-Hire", desc: "Our rigorous assessment process minimizes the risk of hiring the wrong executive." },
      { title: "Board-Ready Candidates", desc: "Every presented candidate has been vetted for board presentation." }
    ],
    deployTime: {
      "Director / VP Level": "8 to 12 weeks",
      "C-Suite / Executive": "12 to 16 weeks",
      "Board-Level Search": "12 to 20 weeks"
    }
  },
  {
    id: "offering-project",
    title: "Project Team Staffing (Out-Tasking)",
    overview: "We deliver an entire, self-managed team headed by an experienced Team Lead or Project Manager. The client defines the milestones and deliverables, while we manage scheduling, quality, and output.",
    processSteps: [
      { title: "SOW & Metric Definition (Weeks 1–2)", desc: "Align on deliverables, timelines, quality gates, and milestone checklists." },
      { title: "Complementary Team Assembly (Weeks 2–4)", desc: "Select specialists with matching chemical dynamics and prior collaboration logs." },
      { title: "Team Onboarding & Kickoff (Weeks 4–5)", desc: "Complete group onboarding, credential setups, and initialize milestones." },
      { title: "Milestone Execution (Ongoing)", desc: "Team operates semi-autonomously under Team Lead tracking. Review weekly logs." },
      { title: "Project Delivery & Handover (Project End)", desc: "Run final validation checks, execute knowledge handover, and demobilize team." }
    ],
    benefits: [
      { title: "Outcome-Based Security", desc: "You purchase completed milestones, not unmanaged contractor hours." },
      { title: "Minimized Management", desc: "Manage one Team Lead rather than resolving issues for 20 individual workers." },
      { title: "Speed to Market", desc: "Pre-formed teams execute faster than individually onboarded contractors." },
      { title: "No Management Overhead", desc: "The client's internal team focuses on strategic direction, not daily tasks." },
      { title: "Risk Transfer", desc: "If a worker leaves, Govenics replaces them immediately with zero project lag." },
      { title: "Scalable Scope", desc: "Teams can be expanded or contracted as project phases evolve." }
    ],
    deployTime: {
      "Small Team (2-5 members)": "2 to 4 weeks",
      "Medium Team (6-15 members)": "3 to 6 weeks",
      "Large Team (16-50+ members)": "6 to 10 weeks"
    }
  },
  {
    id: "offering-msp",
    title: "Managed Services Program (MSP)",
    overview: "A comprehensive workforce partnership where we act as the Master Vendor managing your entire contingent labor spend, sub-vendors, standardized rate cards, compliance, and VMS technologies.",
    processSteps: [
      { title: "Spend & Vendor Audit (Weeks 1–4)", desc: "Audit existing supplier terms, identify rate variances, and compliance gaps." },
      { title: "Vendor panel Selection (Weeks 4–6)", desc: "Establish primary and secondary supplier panels and standardize bill rates." },
      { title: "VMS Platform Integration (Weeks 6–10)", desc: "Configure a Vendor Management System (e.g. Fieldglass) with approvals and rate logs." },
      { title: "Transition & Launch (Weeks 10–12)", desc: "Migrate legacy agency workers into the MSP ecosystem. Train hiring managers." },
      { title: "Continuous Optimization (Ongoing)", desc: "Review vendor scorecards, analyze spend savings, and refine workforce forecasts." }
    ],
    benefits: [
      { title: "10-20% Savings", desc: "Eliminates rogue spending and enforces standardized competitive markups." },
      { title: "Unified Compliance", desc: "Guarantees all sub-contractors adhere to labor law compliance registers." },
      { title: "Total Visibility", desc: "One dashboard showing every contingent worker in the organization." },
      { title: "Vendor Performance Management", desc: "Objective, data-driven vendor scorecards replace subjective relationships." },
      { title: "Scalability", desc: "The MSP model scales seamlessly as the organization grows." },
      { title: "Strategic Planning", desc: "Analytics reveal patterns in contingent labor demand, enabling proactive planning." }
    ],
    deployTime: {
      "Audit & Spend Mapping": "2 to 4 weeks",
      "Vendor Alignment & VMS": "4 to 8 weeks",
      "Full Program Launch": "8 to 12 weeks",
      "Steady State Optimization": "Ongoing"
    }
  },
  {
    id: "offering-rpo",
    title: "Recruitment Process Outsourcing (RPO)",
    overview: "Recruitment Process Outsourcing embeds recruiters, sourcing experts, and ATS coordinators into your talent acquisition department. The RPO team runs the full hiring lifecycle for permanent placements directly on your payroll.",
    processSteps: [
      { title: "Program Design & SLA (Weeks 1–4)", desc: "Map recruitment metrics (time-to-fill, cost-per-hire) and setup SLA structures." },
      { title: "Branding & Sourcing Activation (Weeks 4–6)", desc: "Integrate ATS platforms, build candidate pipelines under client's employer brand." },
      { title: "Multidimensional Screening (Weeks 6–10)", desc: "Execute resume scoring, automated video interviews, and technical pre-vetting." },
      { title: "Client Interviews & Coordination (Weeks 10–12)", desc: "Schedule shortlists, compile evaluation reports, and manage panel reviews." },
      { title: "Pre-boarding & Integration (Ongoing)", desc: "Assist with background verification checks, contract execution, and first-day setups." }
    ],
    benefits: [
      { title: "Scalable Sourcing Teams", desc: "Scale the recruiting squad up or down based on your hiring volumes." },
      { title: "Lower Cost Per Hire", desc: "Substantial savings compared to traditional contingency recruiter fees." },
      { title: "Lower Offer Dropouts", desc: "Integrated candidate engagement keeps dropout rates below 20%." }
    ],
    deployTime: {
      "Program Setup": "2 to 4 weeks",
      "Process Launch & Integration": "4 to 8 weeks",
      "Steady State Recruiting": "Ongoing"
    }
  }
];

export const screeningPhases: ScreeningPhase[] = [
  {
    phase: "Phase 1",
    title: "AI-Driven Video Interviewing",
    desc: "Initial automated assessment checking oral skills, presentation, and basic technical concepts matching the target scorecard."
  },
  {
    phase: "Phase 2",
    title: "Psychometric Assessment",
    desc: "Standard tests analyzing cognitive aptitude, logical reasoning, and domain-specific leadership profiles."
  },
  {
    phase: "Phase 3",
    title: "Emotional Stability & Resilience",
    desc: "Clinical-grade stress tolerance mapping, essential for high-stress roles in patient care, security, and grid dispatching."
  },
  {
    phase: "Phase 4",
    title: "Culture Fit & Values Alignment",
    desc: "Structured behavioral panels measuring compliance safety habits, integrity metrics, and team integration compatibility."
  },
  {
    phase: "Phase 5",
    title: "Comprehensive Background Vetting",
    desc: "Rigorous statutory validation (PAN/Aadhaar validation, certifications audit, prior references verification, and police clearance logs)."
  }
];

export const clientBenefits: ClientBenefit[] = [
  {
    title: "SLA-Backed Performance Guarantee",
    desc: "Contractually committed candidate fill rates (e.g. >95%), turnaround times, and quality metrics tracked on dashboards."
  },
  {
    title: "Zero Deviation Statutory Protection",
    desc: "100% legal coverage for PF, ESIC, Professional Tax, and local Labor Welfare Funds managed directly under Govenics compliance EOR."
  },
  {
    title: "Cost & Labor Flexibility",
    desc: "Converts massive fixed labor costs into flexible operational expenses, matching exact manufacturing and logistics order books."
  },
  {
    title: "AI-Vetted Candidate Quality",
    desc: "Eliminates selection errors using our advanced five-phase verification pipeline covering psychometrics, skills, and background checks."
  }
];
