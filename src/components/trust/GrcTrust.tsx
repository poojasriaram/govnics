import { useEffect, useState, useRef } from "react";
import { ShieldCheck, Award, Users, BarChart3 } from "lucide-react";

const counters = [
  {
    icon: Users,
    value: 15,
    suffix: "+",
    label: "Industries Served",
    description: "Multi-sector domain expertise"
  },
  {
    icon: Award,
    value: 100,
    suffix: "+",
    label: "Compliance Frameworks",
    description: "RBI, SEBI, CPCB, ISO, DPDP"
  },
  {
    icon: BarChart3,
    value: 500,
    suffix: "+",
    label: "Risk Assessments",
    description: "Enterprises audited & secured"
  },
  {
    icon: ShieldCheck,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Flawless audit track logs"
  }
];

const standards = [
  "DPDP Act 2023", "ISO 27001", "RBI Master Circulars", "SOC 2 Type II", "HIPAA Compliance",
  "SEBI LODR", "Factories Act", "NABH Accreditation", "GDPR", "CVC Guidelines",
  "BIS Certification", "CERT-In Directives", "FSSAI Guidelines", "BOCW Safety"
];

const AnimatedDigit = ({ target }: { target: number }) => {
  const [val, setVal] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setVal(Math.floor(easeOut * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setVal(target);
            }
          };
          animate();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{val}</span>;
};

export const GrcTrust = () => {
  return (
    <section id="trust" className="py-12 bg-transparent border-y border-slate-200/60 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 space-y-10">
        
        {/* Animated Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((cnt, i) => {
            const IconComp = cnt.icon;
            return (
              <div
                key={i}
                className="group relative p-8 bg-white border border-slate-200/80 hover:border-blue-500/20 rounded-3xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden shadow-sm hover:shadow-xl"
              >
                {/* Floating highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="mb-4 p-4.5 rounded-2xl bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                  <IconComp className="w-6 h-6" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 tabular-nums">
                  <AnimatedDigit target={cnt.value} />{cnt.suffix}
                </div>
                
                <div className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">
                  {cnt.label}
                </div>
                
                <div className="text-xs text-slate-500">
                  {cnt.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Endless Scrolling Compliance Standards Row */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xs font-black tracking-[0.25em] text-slate-400 uppercase">
              Auditing to Premium Regulatory Frameworks
            </h3>
          </div>

          <div className="relative w-full overflow-hidden flex items-center py-4 bg-slate-50 border-y border-slate-200/60">
            {/* Left and Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling Banner elements */}
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {standards.map((st, idx) => (
                <span
                  key={`std-1-${idx}`}
                  className="text-sm font-black tracking-widest text-slate-400 hover:text-blue-600 transition-colors uppercase cursor-default"
                >
                  {st}
                </span>
              ))}
            </div>

            {/* Repeat scrolling elements for continuous loop */}
            <div className="flex gap-16 animate-marquee2 whitespace-nowrap absolute top-4 left-0">
              {standards.map((st, idx) => (
                <span
                  key={`std-2-${idx}`}
                  className="text-sm font-black tracking-widest text-slate-400 hover:text-blue-600 transition-colors uppercase cursor-default"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Scrolling keyframes embedded styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </section>
  );
};
