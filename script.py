import json
import re

clusters = [
    'Food Processing, Pharma & Healthcare',
    'Manufacturing & Industrial',
    'Technology & Electronics',
    'Infrastructure & Construction',
    'Energy & Utilities',
    'Financial Services',
    'Healthcare & Life Sciences',
    'Consumer & Retail',
    'Media & Services'
]

def get_cluster_id(name):
    return name.lower().replace(' & ', '-').replace(' ', '-')

data_entries = []
for c in clusters:
    cid = get_cluster_id(c)
    entry = f'''
  "{cid}": {{
    id: "{cid}",
    overview: "Specialized compliance, risk, and governance solutions tailored specifically for the {c} sector.",
    offerings: [
      "Regulatory Compliance",
      "Risk Management",
      "Operational Audits",
      "Vendor Governance",
      "Data Protection",
      "Workforce Compliance"
    ],
    industries: ["{c.split(',')[0]}", "Enterprise", "Mid-Market", "Startups", "Global Ops", "Supply Chain"],
    benefits: [
      "Sector-Specific Expertise",
      "Mitigate Regulatory Fines",
      "Streamline Operations",
      "Enhance Stakeholder Trust"
    ],
    stats: [
      "Industry-tailored frameworks",
      "End-to-end risk mapping",
      "Dedicated subject experts"
    ],
    cta: {{
      message: "Need tailored solutions for {c}?",
      buttonLabel: "Contact Our Experts",
      href: "/industries/{cid}"
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
