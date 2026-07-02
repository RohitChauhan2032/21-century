import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ShieldAlert, Cpu, ArrowRight, Award, Trash2, CheckCircle2, X } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', 'Municipal', 'Pharmaceutical', 'Textile', 'Power Plants', 'Residential', 'Food Processing'];

  const filteredProjects = projectsData.filter((proj) => 
    activeFilter === 'All' || proj.industry === activeFilter
  );

  const openProjectDetails = (proj) => {
    setSelectedProject(proj);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Case Studies
          </span>
          <h1 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Flagship Engineering Deployments
          </h1>
          <p className="text-slate-500">
            Review completed sewage, effluent, and zero liquid discharge systems showing verified technical discharge parameters.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-semibold px-4.5 py-2.5 rounded-xl border transition-all ${
                activeFilter === f
                  ? 'bg-primary border-primary text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-border-base overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
              >
                {/* Visual Header */}
                <div className="h-44 bg-slate-900 p-6 flex flex-col justify-between text-white relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10" />
                  
                  <span className="bg-slate-950/60 backdrop-blur-sm text-[10px] font-bold text-white uppercase px-2.5 py-1 rounded-md tracking-wider self-start relative z-10">
                    {proj.industry}
                  </span>

                  <div className="relative z-10">
                    <p className="text-[10px] text-slate-400 font-semibold">{proj.capacity}</p>
                    <h3 className="font-bold text-base leading-tight mt-0.5 truncate">{proj.title}</h3>
                  </div>
                </div>

                {/* Description and Info */}
                <div className="p-6 flex-grow flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold mt-1">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openProjectDetails(proj)}
                    className="w-full flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-primary hover:text-white border border-slate-100 text-xs font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    <span>View Performance Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Dynamic Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetails}
            />

            {/* Modal Body */}
            <motion.div
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative border border-slate-100 z-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Close button */}
              <button
                onClick={closeProjectDetails}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Header */}
              <div className="bg-slate-50 border-b border-slate-200 text-slate-800 p-8 md:p-10 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
                <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
                  <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md self-start">
                    {selectedProject.industry} Sector
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold font-display leading-tight text-slate-900 mt-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-500 text-xs md:text-sm font-semibold flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    {selectedProject.location}
                  </p>
                </div>
              </div>

              {/* Details grid */}
              <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: Technical Info and Highlights */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-3">Project Description</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs">
                    <div>
                      <p className="text-slate-400 font-semibold uppercase">Client Profile</p>
                      <p className="font-bold text-slate-800 mt-0.5">{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-semibold uppercase">Capacity Parameter</p>
                      <p className="font-bold text-slate-800 mt-0.5">{selectedProject.capacity}</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-slate-400 font-semibold uppercase">Execution Technology</p>
                      <p className="font-bold text-slate-800 mt-0.5">{selectedProject.technology}</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-slate-400 font-semibold uppercase">Commission Year</p>
                      <p className="font-bold text-slate-800 mt-0.5">{selectedProject.year}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 text-base mb-3">Commissioning Highlights</h4>
                    <ul className="flex flex-col gap-2.5">
                      {selectedProject.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4.5 h-4.5 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Before / After water parameters table */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col gap-6">
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">Effluent Quality Analysis</h4>
                    <p className="text-[10px] text-slate-400 font-semibold mt-0.5 uppercase">Before vs After treatment</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide pb-2 border-b">
                      <span>Parameter</span>
                      <span className="text-red-500">Raw Feed</span>
                      <span className="text-emerald-700">Treated</span>
                    </div>

                    {Object.keys(selectedProject.beforeAfter.before).map((paramKey) => (
                      <div key={paramKey} className="grid grid-cols-3 text-xs py-1 border-b border-slate-200/60 last:border-b-0 font-medium">
                        <span className="uppercase text-slate-500 font-semibold">{paramKey}</span>
                        <span className="text-slate-700">{selectedProject.beforeAfter.before[paramKey]}</span>
                        <span className="text-emerald-800 font-bold">{selectedProject.beforeAfter.after[paramKey]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-[10px] text-slate-500 leading-relaxed flex items-start gap-2">
                    <Award className="w-4 h-4 text-primary shrink-0 mt-0.5 animate-pulse" />
                    <span>Meets/Exceeds State Pollution Control Board guidelines for direct surface discharge and reuse.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
