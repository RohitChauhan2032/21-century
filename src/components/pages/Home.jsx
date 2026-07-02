import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReactCountUp from 'react-countup';

const CountUp = ReactCountUp.default || ReactCountUp;

import { 
  Shield, Activity, Waves, Droplet, Cpu, ArrowRight, CheckCircle2, 
  MapPin, Clock, Award, Star, HelpCircle, ChevronDown, ChevronRight, Zap, FlaskConical, Network, Users, Globe,
  ShieldAlert, Compass, Sparkles, Filter
} from 'lucide-react';

const iconMap = {
  Activity,
  Waves,
  Droplet,
  ShieldAlert,
  Compass,
  Sparkles,
  Zap,
  Filter
};

const serviceImages = {
  "effluent-treatment-plant": "/wastewater_plant.png",
  "sewage-treatment-plant": "/mbr_modules.png",
  "water-treatment-plant": "/filtration_skid.png",
  "zero-liquid-discharge": "/fabrication_banner.png",
  "reverse-osmosis": "/sbr_decanter.png",
  "softening-plant": "/mbbr_media.png",
  "demineralization-plant": "/demineralization_plant.png",
  "ultra-filtration": "/ultrafiltration_plant.png"
};

import banner1 from '../../banner/3d-illustration-modern-sewage-treatment-plant-water-purification.jpg';
import banner2 from '../../banner/industrial-tanks-silos-stand-majestically-against-sky-filled-with-dramatic-clouds-reflecting-modern-infrastructure-technology-involved-storage-processing.jpg';
import banner3 from '../../banner/industrial-wastewater-treatment-plant-purifying-water-before-it-is-discharged.jpg';
import banner4 from '../../banner/aerial-view-big-sustainable-electric-power-plant-with-many-rows-solar-photovoltaic-panels-producing-clean-electrical-energy-renewable-electricity-with-zero-emission-concept.jpg';

const bannerImages = [banner1, banner2, banner3, banner4];

const bannerStyles = [
  { opacity: 0.75, filter: 'brightness(1.15)' },
  { opacity: 0.8, filter: 'brightness(1.25)' },
  { opacity: 0.75, filter: 'brightness(1.15)' },
  { opacity: 0.85, filter: 'brightness(1.3) contrast(1.05)' }
];




import { servicesData } from '../../data/servicesData';
import { industriesData } from '../../data/industriesData';
import { projectsData } from '../../data/projectsData';
import { blogsData } from '../../data/blogsData';

const homeFaqs = [
  {
    q: "Does 21st Century Enviro manufacture its own equipment?",
    a: "Yes. We operate a heavy engineering fabrication workshop in Baddi, Himachal Pradesh. We fabricate filtration vessels, carbon/stainless steel reactors, chemical dosing skids, and electrical PLC cabinets directly."
  },
  {
    q: "Can you upgrade or automate an existing wastewater treatment plant?",
    a: "Yes. We specialize in plant retrofits. We can inspect your current sand/carbon filters or aeration basins and install automatic multiport valves, inline sensors, dosing controls, and PLC SCADA screens."
  },
  {
    q: "What design codes do you follow for tank construction?",
    a: "We manufacture carbon steel and stainless steel pressure vessels in accordance with ASME Section VIII Division 1 guidelines and utilize ASME B31.3 standards for process piping fabrication."
  },
  {
    q: "Do you offer operational contracts after building the plant?",
    a: "Yes, we offer both Annual Maintenance Contracts (AMC) for periodic calibration and skilled operational outsourcing (O&M contracts) where we supply technicians and chemists to manage parameters 24/7."
  }
];

const testimonials = [
  {
    name: "Ramesh K. Singhal",
    role: "VP - Operations, Micro Labs Ltd.",
    quote: "We installed an 800 KLD effluent plant with Zero Liquid Discharge at our Baddi pharmaceutical facility. The system has operated for three years with 98% water recovery, yielding pure boiler feed water."
  },
  {
    name: "S. Raghavan",
    role: "Plant Head, Ludhiana Dyeing Cluster",
    quote: "21st Century Enviro's textile dye bath recycling setup saved us heavy fresh-water purchase costs. Their recovery of Glauber's salt from ETP reject streams offset chemical expenditures significantly."
  },
  {
    name: "Dr. Amrita Sen",
    role: "Medical Superintendent, Max Hospital Complex",
    quote: "Operating a healthcare facility requires absolute safety in effluent parameters. Their biological MBR sewage plant runs quietly underground with zero odor and supplies excellent garden recycled water."
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const coreServices = servicesData.slice(0, 8);
  const featuredIndustries = industriesData.slice(0, 6);
  const recentBlogs = blogsData.slice(0, 3);

  return (
    <div className="bg-bg-base min-h-screen relative overflow-hidden">

      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center justify-center pt-32 pb-24 px-6 md:px-12 bg-slate-50 text-slate-800 overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(11,94,215,0.06)_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-100 z-0" />
        
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence>
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0 }}
              animate={{ opacity: bannerStyles[currentBanner].opacity }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${bannerImages[currentBanner]})`,
                filter: bannerStyles[currentBanner].filter
              }}
            />
          </AnimatePresence>
          {/* Light gradient overlay to ensure text readability on the left, fading to transparent on the right */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(to right, rgba(248, 250, 252, 0.95) 0%, rgba(248, 250, 252, 0.8) 35%, transparent 60%)' 
            }} 
          />
        </div>
        
        {/* Subtle Light Gradients Blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0" />
        <div className="absolute -bottom-45 -right-45 w-[700px] h-[700px] rounded-full bg-secondary/5 blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none z-0" />

        {/* High-Tech Flow Graphic SVG */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 1000 1000" fill="none" className="w-full h-full max-w-5xl">
            <circle cx="500" cy="500" r="380" stroke="url(#cyan-grad)" strokeWidth="1" strokeDasharray="8 6" className="animate-spin" style={{ animationDuration: '120s' }} />
            <circle cx="500" cy="500" r="280" stroke="url(#blue-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-spin" style={{ animationDuration: '80s', animationDirection: 'reverse' }} />
            <circle cx="500" cy="500" r="180" stroke="url(#green-grad)" strokeWidth="2" />
            
            {/* Flow paths */}
            <path d="M100,500 Q300,300 500,500 T900,500" stroke="url(#blue-grad)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M100,500 Q300,700 500,500 T900,500" stroke="url(#green-grad)" strokeWidth="2" strokeLinecap="round" />
            
            {/* Pulsing molecules / node nodes */}
            <circle cx="300" cy="400" r="8" fill="#0B5ED7" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="700" cy="600" r="6" fill="#22C55E" className="animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="500" cy="500" r="10" fill="#0B5ED7" />
            <circle cx="500" cy="500" r="16" stroke="#0B5ED7" strokeWidth="1" className="animate-ping" style={{ animationDuration: '2s' }} />

            <defs>
              <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#0B5ED7" stopOpacity="0.8" />
                <stop stopColor="#3c82e6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="green-grad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#22C55E" stopOpacity="0.8" />
                <stop stopColor="#16A34A" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cyan-grad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#06b6d4" stopOpacity="0.6" />
                <stop stopColor="#0891b2" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-base to-transparent pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl flex flex-col gap-6 items-start text-left">
            <motion.span 
              className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block self-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Water & Infrastructure Engineers
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold font-display leading-tight tracking-tight text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Engineering Sustainable <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Industrial Solutions</span>
            </motion.h1>

            <motion.p 
              className="text-slate-700 text-sm md:text-base leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Innovative environmental engineering delivering Water Treatment, Wastewater Recycling, and Zero Liquid Discharge (ZLD) infrastructure solutions globally.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                to="/services" 
                className="gradient-bg text-white font-semibold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:brightness-110 transition-all flex items-center gap-1.5"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs px-6 py-3.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About snippet Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Graphic/Accreditations Box */}
          <div className="lg:col-span-5 bg-white border border-border-base rounded-3xl p-8 shadow-sm flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary" />
            <h3 className="font-bold text-slate-900 text-lg font-display">Sizing and Process Validation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We design water systems based on actual laboratory test parameters. Our chemical testing division in Baddi tests chemical indices of sample effluents before our engineers size columns or configure membranes.
            </p>
            <div className="flex gap-4 border-t pt-4">
              <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border">ISO 9001 Certified</span>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border">ASME Vessel Codes</span>
            </div>
          </div>

          {/* About Text info */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">About Company</span>
            <h2 className="text-3xl font-bold font-display text-slate-900 leading-tight">
              25 Years of Engineering Trust in Water & Environmental Systems
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              At 21st Century Enviro Engineers, we construct utility and effluent networks for heavy industries, urban hubs, and residential zones. From initial hydrological surveys and detailed P&ID drafting to final site stabilization, we offer single-point EPC turnkey execution.
            </p>
            <Link
              to="/about"
              className="text-xs font-bold text-primary flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <span>Learn Corporate History</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Core Divisions</span>
              <h2 className="text-3xl font-bold font-display text-slate-900 mt-2">Process Sizing & Systems</h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-primary flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <span>View All 20 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Droplet;
              return (
                <div 
                  key={service.id}
                  className="border border-border-base hover:border-slate-300 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  {/* Card Image */}
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={serviceImages[service.id] || "/filtration_skid.png"} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-850 text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-slate-100">
                      {service.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <IconComponent className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="font-bold text-slate-800 text-xs sm:text-sm leading-snug group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    <Link 
                      to={`/services/${service.id}`}
                      className="text-xs font-bold text-primary flex items-center gap-1.5 mt-6 pt-4 border-t border-slate-100 hover:text-secondary transition-colors"
                    >
                      <span>Sizing Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Showcase (Reference Theme Section 3) */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Specialized Capabilities</span>
            <h2 className="text-3xl font-bold font-display text-slate-900 mt-2">
              We Engineer Wastewater Solutions for the Future
            </h2>
            <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
              Transforming complex sewage and toxic industrial effluents into high-purity reusable water resources using certified processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/wastewater_plant.png"
                  alt="Sewage Treatment Plant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  STP Division
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-slate-900 text-base font-display group-hover:text-primary transition-colors">
                    Sewage Treatment Plants
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Engineered municipal and industrial STPs utilizing high-recovery MBR, SBR, and MBBR reactor technologies. Ensuring compliance with strict pollution boards.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-xs font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1 self-start mt-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/filtration_skid.png"
                  alt="Zero Liquid Discharge ETP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  ZLD / RO Division
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-slate-900 text-base font-display group-hover:text-primary transition-colors">
                    Zero Liquid Discharge
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Advanced closed-loop effluent recycling setups integrating physico-chemical dosing, high-rejection RO membranes, and vacuum crystallizers.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-xs font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1 self-start mt-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 - Dark Theme Card for contrast */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-lg flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white text-base font-display">
                    ASME Quality & Welding Standards
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We fabricate carbon vessels, media filters, and skid steel frames under weather-controlled conditions inside our Baddi works. Every system undergoes hydro-tests at 1.5x working pressure before release.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs px-5 py-3 rounded-xl transition-all self-start flex items-center gap-1.5 shadow-md mt-6"
              >
                <span>View Quality Audits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Statistics Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200 text-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold font-display text-secondary">
              <CountUp end={25} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-2">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold font-display text-primary">
              <CountUp end={500} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-2">Plants Built</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold font-display text-secondary">
              <CountUp end={120} duration={3} enableScrollSpy scrollSpyOnce />M+
            </h3>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-2">Liters Recycled Daily</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold font-display text-primary">
              <CountUp end={100} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-2">Corporate Partners</p>
          </div>
        </div>
      </section>

      {/* Technologies Offered Section (New) */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Biological Systems</span>
              <h2 className="text-3xl font-bold font-display text-slate-900 mt-2">Technologies Offered</h2>
            </div>
            <p className="text-slate-500 text-xs md:text-sm max-w-md font-medium">
              We integrate patent-driven, high-efficiency biological systems tailored for complex industrial streams and municipal load requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tech 1 */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/mbbr_media.png"
                  alt="MBBR Technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Biofilm MBBR
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-slate-900 text-sm font-display group-hover:text-primary transition-colors">
                    MBBR (Moving Bed Bio Reactor)
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    Utilizes specialized floating plastic carrier media designed to maximize active surface area, allowing higher biological load treatment within compact reactor footprints.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-xs font-bold text-primary flex items-center gap-1.5 hover:text-secondary transition-colors mt-2"
                >
                  <span>Technical Setup</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/mbr_modules.png"
                  alt="MBR Technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Ultrafiltration MBR
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-slate-900 text-sm font-display group-hover:text-primary transition-colors">
                    MBR (Membrane Bio Reactor)
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    Combines conventional activated sludge processes with membrane ultrafiltration cassettes, producing suspended solid-free high-purity filtrate suitable for direct reuse.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-xs font-bold text-primary flex items-center gap-1.5 hover:text-secondary transition-colors mt-2"
                >
                  <span>Technical Setup</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/sbr_decanter.png"
                  alt="SBR Technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Batch Dosing SBR
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-slate-900 text-sm font-display group-hover:text-primary transition-colors">
                    SBR (Sequential Batch Reactor)
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    Runs equalization, aeration, settling, and clear decanting sequentially within a single basin structure, optimizing energy consumption and control flexibility.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-xs font-bold text-primary flex items-center gap-1.5 hover:text-secondary transition-colors mt-2"
                >
                  <span>Technical Setup</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Sectors Sized</span>
          <h2 className="text-3xl font-bold font-display text-slate-900 mt-2">Industries We Serve</h2>
          <p className="text-slate-500 text-sm mt-3">
            Custom engineered processes built for challenging discharge regulations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {featuredIndustries.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries#${ind.id}`}
              className="bg-white rounded-2xl p-5 border border-border-base hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary flex items-center justify-center transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-xs font-display group-hover:text-primary transition-colors">
                {ind.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Full-Width Banner */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-slate-900 text-white min-h-[500px] flex items-center">
        {/* Background cover image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-65 z-0"
          style={{ backgroundImage: "url('/fabrication_banner.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/30 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Fabrication Strength</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
              Why Corporate Leaders Choose 21st Century Enviro
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl">
              We separate ourselves from standard assembly mechanics through deep structural design, certified ASME fabrication, and complete site erection protocols.
            </p>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-slate-200 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-secondary shrink-0" />
                <span>Custom R&D Effluent parameter checks on actual site samples.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-secondary shrink-0" />
                <span>Skids manufactured inside our weather-controlled Baddi works.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-secondary shrink-0" />
                <span>Automated PLC layouts with touch panels (HMI) for easy local run.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-secondary shrink-0" />
                <span>Liaison assistance matching local state pollution board criteria.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md text-slate-200 rounded-3xl p-8 border border-white/10 flex flex-col justify-between h-80 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <h4 className="font-bold text-white text-base font-display">ASME Code Fabrication</h4>
            <p className="text-xs leading-relaxed text-slate-300">
              "We design and weld all pressure carbon filters and cation/anion vessel shells using certified ASME section IX welders. We hydro-test every skid at 1.5 times working pressure, avoiding leaks and corrosion liabilities."
            </p>
            <div className="flex justify-between text-[10px] border-t border-white/10 pt-4 text-slate-400 mt-2 font-semibold">
              <span>Baddi Works facility</span>
              <span className="text-secondary font-bold">Safe Commission Check</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Delivery Standard</span>
          <h2 className="text-3xl font-bold font-display text-slate-900 mt-2">Company Process Timeline</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-border-base shadow-sm relative overflow-hidden flex flex-col gap-3">
            <span className="font-extrabold text-primary text-2xl font-display">01</span>
            <h4 className="font-bold text-slate-800 text-sm">Site Audit & Testing</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Laboratory testing of client's raw wastewater sample coordinates.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-border-base shadow-sm relative overflow-hidden flex flex-col gap-3">
            <span className="font-extrabold text-primary text-2xl font-display">02</span>
            <h4 className="font-bold text-slate-800 text-sm">Process Sizing PFD</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Sizing calculations and drafting P&IDs and PFD layouts.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-border-base shadow-sm relative overflow-hidden flex flex-col gap-3">
            <span className="font-extrabold text-primary text-2xl font-display">03</span>
            <h4 className="font-bold text-slate-800 text-sm">Vessel Fabrication</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Rolling, welding, and pressure testing shells in our Baddi works.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-border-base shadow-sm relative overflow-hidden flex flex-col gap-3">
            <span className="font-extrabold text-primary text-2xl font-display">04</span>
            <h4 className="font-bold text-slate-800 text-sm">Site Erection</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Civil reactor setups, skid mounting, piping hookups, and cabling.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-border-base shadow-sm relative overflow-hidden flex flex-col gap-3">
            <span className="font-extrabold text-primary text-2xl font-display">05</span>
            <h4 className="font-bold text-slate-800 text-sm">Stabilization & O&M</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Biomass seeding, parameter validation, operator handovers, or O&M.</p>
          </div>
        </div>
      </section>

      {/* Testimonials (Swiper JS auto playing) */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-y border-slate-200 text-slate-800 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Verified Trust</span>
          <h2 className="text-3xl font-bold font-display text-slate-900 mt-2 mb-12">Client Appreciations</h2>

          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6 items-center"
              >
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed italic max-w-2xl">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm font-display">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">{testimonials[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${activeTestimonial === idx ? 'bg-primary' : 'bg-slate-300'
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Insights</span>
            <h2 className="text-3xl font-bold font-display text-slate-900 mt-2">Latest From Our R&D Desk</h2>
          </div>
          <Link
            to="/blog"
            className="text-xs font-bold text-primary flex items-center gap-1 hover:text-secondary transition-colors"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-border-base rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between h-full"
            >
              <div className="p-6 flex flex-col gap-4">
                <span className="text-[9px] font-bold bg-slate-100 text-slate-600 border px-2 py-0.5 rounded-md self-start">{blog.category}</span>
                <h3 className="font-bold text-slate-800 text-sm hover:text-primary transition-colors leading-snug">
                  <Link to="/blog">{blog.title}</Link>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{blog.excerpt}</p>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-400 font-semibold">
                <span>{blog.date}</span>
                <Link to="/blog" className="text-primary font-bold flex items-center gap-0.5 hover:underline">
                  Read <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {homeFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border-base rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4.5 text-left font-bold text-slate-800 hover:text-primary transition-colors text-xs md:text-sm focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4.5 h-4.5 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-4.5 pt-0 border-t text-xs text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
