import json

risks = [
    {
        "id": "regulatory-risk",
        "title": "Regulatory Risk",
        "desc1": "Failure to comply with laws, rules, or government standards.",
        "desc2": "Non-compliance with tax laws, labor laws, or industry-specific regulations."
    },
    {
        "id": "operational-risk",
        "title": "Operational Risk",
        "desc1": "Gaps in processes, training, or controls leading to violations.",
        "desc2": "Untrained staff mishandling data, missed reporting deadlines."
    },
    {
        "id": "governance-risk",
        "title": "Governance Risk",
        "desc1": "Weak board oversight or poor internal controls.",
        "desc2": "Misclassified revenue, inaccurate financial reporting."
    },
    {
        "id": "financial-risk",
        "title": "Financial Risk",
        "desc1": "Errors in accounting, reporting, or disclosures.",
        "desc2": "SEC penalties, investor lawsuits."
    },
    {
        "id": "vendor-risk",
        "title": "Vendor / Third-Party Risk",
        "desc1": "Exposure from suppliers or partners failing compliance.",
        "desc2": "Vendor data breach triggering GDPR fines."
    },
    {
        "id": "cybersecurity-risk",
        "title": "Cybersecurity & Data Protection Risk",
        "desc1": "Breaches of personal or sensitive data.",
        "desc2": "GDPR/HIPAA fines, reputational damage."
    },
    {
        "id": "esg-risk",
        "title": "ESG Risk",
        "desc1": "Misreporting or failing sustainability obligations.",
        "desc2": "Greenwashing accusations, BRSR misalignment."
    },
    {
        "id": "ai-risk",
        "title": "AI & Technology Risk",
        "desc1": "Bias, privacy, or transparency failures in AI systems.",
        "desc2": "Algorithmic discrimination, lack of explainability."
    },
    {
        "id": "people-risk",
        "title": "People Risk",
        "desc1": "Human error, unclear roles, or insufficient training.",
        "desc2": "91% of compliance incidents stem from staff mistakes."
    }
]

data_entries = []
for r in risks:
    cid = r["id"]
    entry = f'''
  "{cid}": {{
    id: "{cid}",
    overview: "{r['desc1']} {r['desc2']}",
    offerings: [
      "Risk Identification",
      "Impact Assessment",
      "Controls Implementation",
      "Continuous Monitoring",
      "Incident Response",
      "Board Reporting"
    ],
    industries: ["Enterprise", "Financial Services", "Healthcare", "Technology", "Manufacturing", "Retail"],
    benefits: [
      "Prevent Costly Violations",
      "Protect Brand Reputation",
      "Ensure Business Continuity",
      "Strengthen Internal Controls"
    ],
    stats: [
      "Proactive threat detection",
      "Enterprise-wide coverage",
      "Custom mitigation strategies"
    ],
    cta: {{
      message: "Need help mitigating {r['title'].lower()}?",
      buttonLabel: "Get a Risk Assessment",
      href: "/contact"
    }}
  }},'''
    data_entries.append(entry)

new_code = ''.join(data_entries)

filepath = r'd:\govenics-grc\src\data\mega-menu-data.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.rstrip().rstrip(';').rstrip('}') + new_code + '\n};\n'

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
