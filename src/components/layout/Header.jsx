import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Menu, X, ChevronDown, 
  ArrowRight, Shield, Activity, Waves, Droplet, 
  Settings, Cpu, Info, FileText
} from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { servicesData } from '../../data/servicesData';
import { industriesData } from '../../data/industriesData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const location = useLocation();

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    setIndustriesMenuOpen(false);
  }, [location]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Category mapping for ETP, STP, WTP etc.
  const categories = {
    Wastewater: servicesData.filter(s => s.category === 'Wastewater'),
    "Water Treatment": servicesData.filter(s => s.category === 'Water Treatment'),
    Consultancy: servicesData.filter(s => s.category === 'Consultancy' || s.category === 'Environmental Consultancy'),
    "Automation & Services": servicesData.filter(s => s.category === 'Automation Solutions' || s.category === 'Services' || s.category === 'Infrastructure')
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', isMega: true },
    { name: 'Industries', path: '/industries', isDropdown: true },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Contact Bar - Hidden on Mobile */}
      <div className="hidden lg:block bg-slate-50 text-slate-600 text-xs py-2 px-6 border-b border-slate-200 z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <Phone className="w-3.5 h-3.5 text-secondary" />
              <a href="tel:+911725014444">+91-172-5014444</a>
            </span>
            <span className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <Mail className="w-3.5 h-3.5 text-secondary" />
              <a href="mailto:info@21stcenturyenviro.com">info@21stcenturyenviro.com</a>
            </span>
            <span className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>SCO 265, Sector 32, Chandigarh</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-secondary font-semibold">25+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className={`fixed top-0 lg:top-8 left-0 right-0 z-40 transition-all duration-500 px-4 md:px-6 lg:px-8`}>
        <nav className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 py-3 lg:py-4 px-6 text-slate-900' 
            : 'bg-white/40 backdrop-blur-sm border border-slate-200/50 py-4 lg:py-6 px-6 text-slate-800'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold font-display leading-tight tracking-wide text-sm md:text-base text-slate-900">
                  21st CENTURY
                </span>
                <span className="text-[10px] tracking-[0.15em] font-semibold leading-none text-primary">
                  ENVIRO ENGINEERS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.isMega) {
                  return (
                    <div 
                      key={link.name} 
                      className="relative py-2 group cursor-pointer"
                      onMouseEnter={() => setServicesMenuOpen(true)}
                      onMouseLeave={() => setServicesMenuOpen(false)}
                    >
                      <button className={`flex items-center gap-1 font-medium text-sm transition-colors hover:text-primary ${
                        location.pathname.startsWith('/services') ? 'text-primary' : ''
                      }`}>
                        {link.name} <ChevronDown className="w-4 h-4" />
                      </button>

                      {/* Mega Menu Dropdown */}
                      <AnimatePresence>
                        {servicesMenuOpen && (
                          <motion.div 
                            className="absolute top-full -left-48 xl:-left-64 mt-2 w-[760px] xl:w-[900px] bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-100 p-6 z-50"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="grid grid-cols-4 gap-6">
                              {Object.keys(categories).map((catName) => (
                                <div key={catName}>
                                  <h4 className="font-semibold text-xs text-primary tracking-wider uppercase mb-3 border-b pb-1">
                                    {catName}
                                  </h4>
                                  <ul className="flex flex-col gap-2">
                                    {categories[catName].slice(0, 5).map((service) => (
                                      <li key={service.id}>
                                        <Link 
                                          to={`/services/${service.id}`} 
                                          className="text-xs text-slate-600 hover:text-secondary hover:translate-x-1 transition-all duration-200 block font-medium"
                                        >
                                          {service.title.split(' (')[0]}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                              <span className="text-xs text-slate-500">Need advice on specialized treatment?</span>
                              <Link 
                                to="/services" 
                                className="text-xs font-semibold text-primary flex items-center gap-1 hover:text-secondary transition-colors"
                              >
                                View All 20 Services <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (link.isDropdown) {
                  return (
                    <div 
                      key={link.name}
                      className="relative py-2 group cursor-pointer"
                      onMouseEnter={() => setIndustriesMenuOpen(true)}
                      onMouseLeave={() => setIndustriesMenuOpen(false)}
                    >
                      <button className={`flex items-center gap-1 font-medium text-sm transition-colors hover:text-primary ${
                        location.pathname.startsWith('/industries') ? 'text-primary' : ''
                      }`}>
                        {link.name} <ChevronDown className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {industriesMenuOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-100 p-4 z-50"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto pr-1">
                              {industriesData.map((ind) => (
                                <Link
                                  key={ind.id}
                                  to={`/industries#${ind.id}`}
                                  className="text-xs px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition-all font-medium block"
                                >
                                  {ind.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `font-medium text-sm transition-colors hover:text-primary relative py-2 ${
                        isActive ? 'text-primary font-semibold' : ''
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.span 
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* CTA Request Quote */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                to="/contact" 
                className="gradient-hover text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-md shadow-primary/20 flex items-center gap-1.5"
              >
                Request Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Hamburger Button for Mobile */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl border transition-colors ${
                  isScrolled 
                    ? 'border-slate-200 text-slate-900 hover:bg-slate-100' 
                    : 'border-slate-200 text-slate-800 hover:bg-slate-50'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-out Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div 
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl border-l border-slate-100 z-[999] p-6 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <span className="font-bold text-slate-800 tracking-wide font-display">NAVIGATION</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  if (link.isMega) {
                    return (
                      <div key={link.name} className="flex flex-col">
                        <button 
                          onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                          className="flex items-center justify-between text-slate-700 hover:text-primary font-semibold text-lg py-1.5"
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {servicesMenuOpen && (
                            <motion.div 
                              className="pl-4 mt-2 mb-3 border-l-2 border-slate-100 flex flex-col gap-2.5 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                            >
                              <Link to="/services" className="text-slate-500 hover:text-primary text-sm font-semibold">
                                All Services Dashboard
                              </Link>
                              {servicesData.slice(0, 10).map((s) => (
                                <Link 
                                  key={s.id} 
                                  to={`/services/${s.id}`} 
                                  className="text-slate-500 hover:text-primary text-sm font-medium truncate"
                                >
                                  {s.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.isDropdown) {
                    return (
                      <div key={link.name} className="flex flex-col">
                        <button 
                          onClick={() => setIndustriesMenuOpen(!industriesMenuOpen)}
                          className="flex items-center justify-between text-slate-700 hover:text-primary font-semibold text-lg py-1.5"
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${industriesMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {industriesMenuOpen && (
                            <motion.div 
                              className="pl-4 mt-2 mb-3 border-l-2 border-slate-100 flex flex-col gap-2.5 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                            >
                              <Link to="/industries" className="text-slate-500 hover:text-primary text-sm font-semibold">
                                View Sectors
                              </Link>
                              {industriesData.map((ind) => (
                                <Link 
                                  key={ind.id} 
                                  to={`/industries#${ind.id}`} 
                                  className="text-slate-500 hover:text-primary text-sm font-medium"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {ind.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-slate-700 hover:text-primary font-semibold text-lg py-1.5"
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col gap-4 text-slate-600 text-sm">
                <h5 className="font-bold text-slate-800 tracking-wider text-xs">CONTACT DETAILS</h5>
                <a href="tel:+919779350001" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91-9779350001</span>
                </a>
                <a href="mailto:info@21stcenturyenviro.com" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@21stcenturyenviro.com</span>
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>Sector 32, Chandigarh</span>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 gradient-bg text-white text-center text-sm font-semibold py-3 rounded-xl shadow-md"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
