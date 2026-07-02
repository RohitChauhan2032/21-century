import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Video, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Water Plants', 'Sewage Plants', 'Effluent Plants', 'Manufacturing'];

  // 12 Mock items with varied category types and descriptive titles
  const galleryItems = [
    { id: 1, title: "Dual-Bed Cation Exchange Vessel", category: "Water Plants", type: "image", desc: "Installed 3,000 LPH Demineralization plant." },
    { id: 2, title: "Membrane Bioreactor Tank (MBR)", category: "Sewage Plants", type: "image", desc: "Submicron filtration membrane cassettes." },
    { id: 3, title: "Dissolved Air Flotation Unit (DAF)", category: "Effluent Plants", type: "image", desc: "Separation of milk fat oils at food processing ETP." },
    { id: 4, title: "Vessel Welding & Fabrication", category: "Manufacturing", type: "image", desc: "Precision welding of Carbon Steel tanks in our Baddi works." },
    { id: 5, title: "Multi-Effect Evaporator (MEE)", category: "Effluent Plants", type: "image", desc: "Concentration stage of Zero Liquid Discharge plant." },
    { id: 6, title: "Fully Automated PLC SCADA Panel", category: "Manufacturing", type: "image", desc: "Siemens PLC system governing backwash automation." },
    { id: 7, title: "High-Recovery Reverse Osmosis Skid", category: "Water Plants", type: "image", desc: "Equipped with variable frequency drives." },
    { id: 8, title: "Activated Sludge Aeration Pond", category: "Sewage Plants", type: "image", desc: "High-efficiency fine-bubble diffusers in action." },
    { id: 9, title: "O&M Daily Laboratory Quality Test", category: "Manufacturing", type: "video", desc: "Process checking chemical oxygen demand parameters." },
    { id: 10, title: "Turnkey Municipal STP Site Overview", category: "Sewage Plants", type: "video", desc: "Full drone overview of 5 MLD civil construction." },
    { id: 11, title: "Agitated Thin Film Dryer (ATFD)", category: "Effluent Plants", type: "image", desc: "Final salt dry recovery crystallization." },
    { id: 12, title: "Ultrafiltration Hollow Fiber Array", category: "Water Plants", type: "image", desc: "RO feed pre-treatment hollow fiber modules." }
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const openLightbox = (id) => {
    const globalIdx = galleryItems.findIndex((item) => item.id === id);
    setLightboxIndex(globalIdx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Media Gallery
          </span>
          <h1 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Our Installations & Facilities
          </h1>
          <p className="text-slate-500">
            A visual overview of our completed projects, advanced machinery fabrication, and operational laboratory standards.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-5 py-2.5 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-primary border-primary text-white shadow-md shadow-primary/10'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(item.id)}
                className="bg-white rounded-2xl overflow-hidden border border-border-base shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                {/* Visual placeholder representing the media item */}
                <div className="h-60 bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center text-white p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:scale-105 transition-transform duration-500" />
                  
                  {item.type === 'video' ? (
                    <div className="w-14 h-14 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/25 flex items-center justify-center transition-colors relative z-10">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  ) : (
                    <ImageIcon className="w-10 h-10 text-slate-600 relative z-10" />
                  )}

                  {/* Top tags */}
                  <span className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-sm text-[10px] font-bold text-white uppercase px-2.5 py-1 rounded-md tracking-wider">
                    {item.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white/50 text-[10px] font-semibold">
                    <span className="flex items-center gap-1">
                      {item.type === 'video' ? <Video className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-colors z-20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-6 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-colors z-20"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-6 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-colors z-20"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full px-6 flex flex-col items-center gap-6"
            >
              {/* Image/Video Simulator view */}
              <div className="w-full h-[60vh] bg-slate-900 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-white relative">
                {galleryItems[lightboxIndex].type === 'video' ? (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-20 h-20 rounded-full bg-secondary/15 border-2 border-secondary flex items-center justify-center">
                      <Play className="w-10 h-10 text-secondary fill-secondary ml-1" />
                    </div>
                    <p className="font-bold text-lg font-display">Simulated Video Player</p>
                    <p className="text-xs text-slate-400 max-w-sm">
                      This represents an active playback for: {galleryItems[lightboxIndex].title}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <ImageIcon className="w-16 h-16 text-primary" />
                    <p className="font-bold text-lg font-display">{galleryItems[lightboxIndex].title}</p>
                    <p className="text-xs text-slate-400 max-w-sm">
                      Descriptive visualization: {galleryItems[lightboxIndex].desc}
                    </p>
                  </div>
                )}

                {/* Subtext info */}
                <div className="absolute bottom-6 left-6 bg-slate-950/80 border border-white/10 px-4 py-2.5 rounded-xl text-left">
                  <span className="text-[10px] text-primary uppercase font-bold tracking-wider">
                    {galleryItems[lightboxIndex].category}
                  </span>
                  <h4 className="font-bold text-xs text-white">
                    {galleryItems[lightboxIndex].title}
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
