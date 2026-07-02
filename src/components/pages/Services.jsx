import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ArrowRight, Activity, Waves, Droplet, ShieldAlert, Compass, 
  Sparkles, Zap, Filter, Trash2, FlaskConical, Repeat, CloudRain, 
  FileText, Settings, FileCheck, Cpu, Network, Wrench, Monitor, Hammer, Globe
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['All', 'Wastewater', 'Water Treatment', 'Automation Solutions', 'Services', 'Consultancy', 'Infrastructure'];

  // Map icon names to Lucide icons
  const iconMap = {
    Activity: Activity,
    Waves: Waves,
    Droplet: Droplet,
    ShieldAlert: ShieldAlert,
    Compass: Compass,
    Sparkles: Sparkles,
    Zap: Zap,
    Filter: Filter,
    Trash2: Trash2,
    FlaskConical: FlaskConical,
    Repeat: Repeat,
    CloudRain: CloudRain,
    FileText: FileText,
    Settings: Settings,
    FileCheck: FileCheck,
    Cpu: Cpu,
    Network: Network,
    Wrench: Wrench,
    Monitor: Monitor,
    Hammer: Hammer
  };

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Support category mapping tabs
    const matchesTab = activeTab === 'All' || service.category === activeTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mb-3">
            What We Do
          </span>
          <h1 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Industrial Water & Environmental Engineering
          </h1>
          <p className="text-slate-500">
            We deliver state-of-the-art water purification, wastewater recycling, and compliance solutions customized for manufacturing facilities and municipal grids.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Search bar */}
          <div className="relative max-w-lg mx-auto w-full">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search services (e.g. ETP, Softener, SCADA...)"
              className="bg-white border border-border-base text-slate-700 text-sm rounded-2xl pl-11 pr-4 py-3 w-full focus:outline-none focus:border-primary shadow-sm transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-semibold px-4.5 py-2.5 rounded-xl border transition-all ${
                  activeTab === tab
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const IconComponent = iconMap[service.icon] || Globe;
                return (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white rounded-2xl p-6 border border-border-base shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full relative overflow-hidden group hover:-translate-y-1 duration-300"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    
                    <div className="flex flex-col gap-4">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          {service.category}
                        </span>
                        <h3 className="font-bold text-slate-800 text-base leading-snug group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-50 flex">
                      <Link 
                        to={`/services/${service.id}`}
                        className="text-xs font-bold text-primary flex items-center gap-1.5 hover:text-secondary transition-colors"
                      >
                        <span>Specifications & Process</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-border-base p-8 max-w-md mx-auto">
            <p className="text-slate-400 mb-2">No matching engineering services found.</p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveTab('All'); }}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Clear search criteria
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
