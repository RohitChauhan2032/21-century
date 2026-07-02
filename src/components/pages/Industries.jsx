import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Pill, Utensils, FlaskConical, Car, Anchor, FileText, 
  Scissors, Hospital, Hotel, Building, Home, ShoppingBag, Globe,
  ArrowRight, CheckSquare, AlertTriangle, ShieldCheck
} from 'lucide-react';
import { industriesData } from '../../data/industriesData';

export default function Industries() {
  useEffect(() => {
    // Handle anchor scrolling if hash exists in URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Map icon strings to Lucide Icon components
  const iconMap = {
    Zap: Zap,
    Pill: Pill,
    Utensils: Utensils,
    FlaskConical: FlaskConical,
    Car: Car,
    Anchor: Anchor,
    FileText: FileText,
    Scissors: Scissors,
    Hospital: Hospital,
    Hotel: Hotel,
    Building: Building,
    Home: Home,
    ShoppingBag: ShoppingBag,
    Globe: Globe
  };

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Sectors We Serve
          </span>
          <h1 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Custom Environmental Solutions for Every Sector
          </h1>
          <p className="text-slate-500">
            From sterile pharmaceutical purity and heavy steel blast furnace cooling to odorless commercial STPs, we engineer water and wastewater frameworks that keep businesses run compliant.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 gap-8 mb-20">
          {industriesData.map((ind, idx) => {
            const IconComponent = iconMap[ind.icon] || Globe;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-white rounded-3xl p-8 border border-border-base shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative scroll-mt-32"
              >
                {/* Side Icon and Basic Header info (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-display">
                      {ind.title}
                    </h2>
                    <p className="text-xs text-primary font-semibold tracking-wider uppercase mt-1">
                      Sector Solutions
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                {/* Challenge and Solution Blocks (8 cols) */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  {/* Challenge block */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm uppercase tracking-wide">
                      <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500" />
                      <span>Industry Challenge</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {ind.challenge}
                    </p>
                  </div>

                  {/* Solution block */}
                  <div className="flex flex-col gap-3 border-t md:border-t-0 md:border-l border-slate-200 md:pl-6 pt-6 md:pt-0">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                      <span>Engineered System</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {ind.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="gradient-bg rounded-3xl p-8 md:p-12 text-white shadow-lg text-center max-w-4xl mx-auto flex flex-col items-center gap-6 relative overflow-hidden">
          {/* Subtle decoration grids */}
          <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay" />
          <h2 className="text-2xl md:text-3xl font-bold font-display relative z-10">
            Have Sector-Specific Discharge Standards to Meet?
          </h2>
          <p className="text-slate-100 text-sm max-w-2xl leading-relaxed relative z-10">
            Our team coordinates with local Pollution Control Boards to design systems matching specific effluent parameters. Connect with our engineering desk for a custom sizing audit.
          </p>
          <div className="flex gap-4 relative z-10 mt-2">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-slate-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-md"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="bg-transparent hover:bg-white/10 text-white font-semibold border border-white px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Explore Utilities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
