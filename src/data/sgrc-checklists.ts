export interface ChecklistItem {
  id: string;
  title: string;
  desc: string;
  severity: "High" | "Medium" | "Low";
  verificationMethod: string;
}

export const sgrcChecklistsData: Record<string, ChecklistItem[]> = {
  "compliance-risk-audit": [
    {
      id: "cra-01",
      title: "Director Shield & Board Indemnity",
      desc: "Verify that board resolutions, compliance calendars, and executive liability insurance (D&O policy) are updated.",
      severity: "High",
      verificationMethod: "Examine D&O policy limits, active board calendars, and sign-off logs."
    },
    {
      id: "cra-02",
      title: "Headcount Statutory Triggers",
      desc: "Reconcile active employee counts against statutory trigger points for POSH (10+), CLRA (20+), PF (20+), and Gratuity.",
      severity: "High",
      verificationMethod: "Audit consolidated master roll and payroll registers."
    },
    {
      id: "cra-03",
      title: "Vendor SLA Liability Review",
      desc: "Ensure that service agreements with payroll providers, security teams, and facility agencies contain clear indemnity clauses.",
      severity: "Medium",
      verificationMethod: "Read vendor agreements and contract clauses."
    },
    {
      id: "cra-04",
      title: "Business Closure Approvals",
      desc: "Check for pending statutory notifications or filings submitted to labor commissioners for closed operations.",
      severity: "High",
      verificationMethod: "Verify copy of closure notice acknowledgement from the Labor Department."
    }
  ],
  "establishment-compliances": [
    {
      id: "est-01",
      title: "Active Registration Certificates",
      desc: "Ensure valid Shop & Establishment registrations are displayed at all retail outlets, branches, and corporate offices.",
      severity: "High",
      verificationMethod: "Inspect display boards and renewal receipts of active licenses."
    },
    {
      id: "est-02",
      title: "Mandatory Notice Board Abstracts",
      desc: "Verify that abstracts of the Minimum Wages Act, Payment of Wages Act, and weekly holiday notices are displayed.",
      severity: "Medium",
      verificationMethod: "Visual inspection of employee notice boards at locations."
    },
    {
      id: "est-03",
      title: "Form F & G Leave Registers",
      desc: "Verify that annual leave credits, sick leaves, and calculations are logged accurately for each employee.",
      severity: "Medium",
      verificationMethod: "Inspect physical Form F/G binders or digital HRMS logs."
    },
    {
      id: "est-04",
      title: "National & Festival Holidays",
      desc: "Reconcile logs for paid national holidays (Jan 26, Aug 15, Oct 2) and verify compensatory rest options.",
      severity: "High",
      verificationMethod: "Review holiday rosters and attendance logs matching national holidays."
    }
  ],
  "payroll-compliance": [
    {
      id: "pay-01",
      title: "Monthly EPF Challans & Remittances",
      desc: "Confirm that employee and employer EPF contributions are deposited with the EPFO portal by the 15th of each month.",
      severity: "High",
      verificationMethod: "Match EPF Electronic Challan-cum-Receipt (ECR) files with bank receipt challans."
    },
    {
      id: "pay-02",
      title: "ESIC Contribution Limits",
      desc: "Verify ESIC deductions (0.75% employee, 3.25% employer) are processed correctly for eligible staff under the ₹21,000 threshold.",
      severity: "High",
      verificationMethod: "Examine ESIC portal deposit sheets and employee salary deductions."
    },
    {
      id: "pay-03",
      title: "State-wise Professional Tax (PT)",
      desc: "Ensure that Professional Tax deductions comply with state-specific PT slabs and annual return limits.",
      severity: "High",
      verificationMethod: "Verify PT payments matching slabs (e.g. ₹200/mo in Karnataka for gross > ₹25,000)."
    },
    {
      id: "pay-04",
      title: "LWF Contributions Audit",
      desc: "Verify that state-specific Labour Welfare Fund (LWF) filings match active payroll deductions.",
      severity: "Medium",
      verificationMethod: "Review LWF challans and deposit sheets."
    },
    {
      id: "pay-05",
      title: "Form 24Q Quarterly Return & Form 16",
      desc: "Check quarterly salary TDS deposits and annual Form 16 release records.",
      severity: "Medium",
      verificationMethod: "Verify Form 24Q filing receipts and Form 16 distribution reports."
    }
  ],
  "factory-compliance": [
    {
      id: "fac-01",
      title: "Factories Act License Validity",
      desc: "Ensure structural factory plans are approved and valid operational factory licenses are active.",
      severity: "High",
      verificationMethod: "Verify license validity date, HP limits, and capacity approvals."
    },
    {
      id: "fac-02",
      title: "Safety Committee Charters",
      desc: "Confirm that units employing 250+ workers hold regular safety committee sessions with equal worker representation.",
      severity: "High",
      verificationMethod: "Read safety committee minute books and safety audit logs."
    },
    {
      id: "fac-03",
      title: "Consent to Operate (SPCB CTO)",
      desc: "Verify active Air and Water Pollution Board consents are current and compliant with discharge limits.",
      severity: "High",
      verificationMethod: "Examine CTO certificates from State Pollution Control Board."
    },
    {
      id: "fac-04",
      title: "Form 3 Hazardous Waste Logs",
      desc: "Audit hazardous chemical disposal records and verify transport manifest logs.",
      severity: "High",
      verificationMethod: "Inspect Form 3 registers and hazardous cargo receipt files."
    },
    {
      id: "fac-05",
      title: "OSHA PPE Distribution Sheet",
      desc: "Confirm that personal protective equipment is issued and safety training is logged for all floor operators.",
      severity: "Medium",
      verificationMethod: "Review PPE distribution records and signature sheets."
    }
  ],
  "vendor-compliance": [
    {
      id: "ven-01",
      title: "Contractor CLRA Licenses",
      desc: "Ensure the principal employer registration covers active contractors, and contractors hold individual valid licenses.",
      severity: "High",
      verificationMethod: "Audit CLRA Form VI (Licenses) and Principal Employer Form V certificates."
    },
    {
      id: "ven-02",
      title: "Wage Payment Verification",
      desc: "Verify that contractor wages are paid directly to bank accounts on or before the 7th of the month.",
      severity: "High",
      verificationMethod: "Verify bank transfer files and Form B wage registers."
    },
    {
      id: "ven-03",
      title: "Contractor EPF/ESIC Challans",
      desc: "Cross-verify contractor EPF/ESIC challan sheets specifically against the muster roll deployed at the site.",
      severity: "High",
      verificationMethod: "Verify ECR printouts and challan receipts for the contractor code."
    },
    {
      id: "ven-04",
      title: "Mitigation of Co-employment Risk",
      desc: "Verify contractor supervisors coordinate daily worker schedules. Principal managers must not manage contractor staff directly.",
      severity: "Medium",
      verificationMethod: "Verify supervision logs and RACI project charts."
    }
  ],
  "mines-compliance": [
    {
      id: "min-01",
      title: "DGMS Statutory Mining Permits",
      desc: "Ensure active Directorate General of Mines Safety licenses and operational permits are valid.",
      severity: "High",
      verificationMethod: "Examine DGMS certificates and structural mine permits."
    },
    {
      id: "min-02",
      title: "Safety Drills & Disaster SOPs",
      desc: "Verify regular mine safety drills, fire mock drills, and disaster evacuation checklists are logged.",
      severity: "High",
      verificationMethod: "Read safety logs and audit mock drill records."
    },
    {
      id: "min-03",
      title: "Pit Air Quality & Noise Registers",
      desc: "Check daily dust concentration scans, noise decibel records, and gas monitoring registers.",
      severity: "Medium",
      verificationMethod: "Verify air quality logs and measurement reports."
    },
    {
      id: "min-04",
      title: "Statutory Vocational Training",
      desc: "Confirm all mining operators have active MVTC (Mine Vocational Training Center) certificates.",
      severity: "High",
      verificationMethod: "Inspect operator training files and renewal schedules."
    }
  ],
  "flexi-staffing": [
    {
      id: "flx-01",
      title: "Written Employment Agreements",
      desc: "Verify all outsourced flexi-staff hold valid written employment letters containing indemnity details.",
      severity: "High",
      verificationMethod: "Verify contracts and onboarding binders."
    },
    {
      id: "flx-02",
      title: "Wage Payment Disbursements",
      desc: "Ensure contract staff salaries are deposited to bank accounts by the statutory 7th-day limit.",
      severity: "High",
      verificationMethod: "Audit bank transfer records and remittance receipts."
    },
    {
      id: "flx-03",
      title: "PF/ESIC Accounts Transfers",
      desc: "Confirm correct UAN (Universal Account Number) mapping and active transfers of PF/ESIC for flexi-staff.",
      severity: "Medium",
      verificationMethod: "Check UAN logs and member ID validation lists."
    }
  ],
  "payroll-services": [
    {
      id: "prs-01",
      title: "Salary Register Calculations Check",
      desc: "Audit salary compilation logs to confirm correct allocations for basic, HRA, LTA, and deductions.",
      severity: "Medium",
      verificationMethod: "Audit salary register files and tax computations."
    },
    {
      id: "prs-02",
      title: "Provident Fund Challans Creation",
      desc: "Verify monthly EPF text files are generated and uploaded without formatting errors.",
      severity: "High",
      verificationMethod: "Inspect text files and portal confirmation screenshots."
    },
    {
      id: "prs-03",
      title: "Income Tax Slabs Verification",
      desc: "Verify tax deductions match the selected regime (New vs Old tax slabs) chosen by employees.",
      severity: "Medium",
      verificationMethod: "Inspect employee declaration forms and tax slips."
    }
  ],
  "ehs": [
    {
      id: "ehs-01",
      title: "EIA (Environmental Impact) Approvals",
      desc: "Ensure active Environmental Impact Assessment approvals and green belt development registers are compliant.",
      severity: "High",
      verificationMethod: "Verify EIA approval certificates and capacity logs."
    },
    {
      id: "ehs-02",
      title: "ISO 14001 EMS Audit Records",
      desc: "Confirm that internal Environmental Management System audits and certifications are up to date.",
      severity: "Medium",
      verificationMethod: "Verify audit schedules and ISO 14001 certificates."
    },
    {
      id: "ehs-03",
      title: "SPCB Emissions testing records",
      desc: "Ensure exhaust stack testing and decibel scan results are below the statutory limits.",
      severity: "Medium",
      verificationMethod: "Verify reports from SPCB-certified labs."
    },
    {
      id: "ehs-04",
      title: "Chemical Spill Emergency SOPs",
      desc: "Verify fire safety maps, muster points, and chemical spill control kits are deployed and inspected.",
      severity: "High",
      verificationMethod: "Inspect fire safety licenses and spill control rosters."
    }
  ]
};
