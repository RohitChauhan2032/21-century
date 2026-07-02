import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, ChevronRight, HelpCircle, 
  ChevronDown, Phone, Mail, Award, MessageSquare, Play, HelpCircle as HelpIcon 
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import Breadcrumbs from '../layout/Breadcrumbs';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const service = servicesData.find((s) => s.id === id);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-base pt-32 pb-20 px-6">
        <div className="bg-white rounded-3xl p-8 border border-border-base text-center max-w-sm w-full shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Service Not Found</h2>
          <p className="text-xs text-slate-500 mb-6">The requested service profile is not available.</p>
          <Link to="/services" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors inline-block">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Sidebar other services
  const otherServices = servicesData.filter((s) => s.id !== id).slice(0, 6);

  return (
    <div className="bg-bg-base min-h-screen pb-20 pt-20">
      {/* Dynamic Page Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0b5ed70a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-base to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/services" className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary transition-colors mb-6 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Services</span>
          </Link>
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-md inline-block mb-3 border border-secondary/20">
            {service.category} Division
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display leading-tight max-w-3xl text-slate-900">
            {service.title}
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-medium">
            {service.shortDesc}
          </p>
        </div>
      </div>

      <Breadcrumbs />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Detail Contents (8 columns) */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Overview */}
          <section className="bg-white rounded-3xl p-8 border border-border-base shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2 border-slate-50">Overview</h2>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {service.longDesc}
            </p>
          </section>

          {/* Benefits */}
          <section className="bg-white rounded-3xl p-8 border border-border-base shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2 border-slate-50">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="bg-white rounded-3xl p-8 border border-border-base shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2 border-slate-50">Technical Specifications</h2>
            <ul className="flex flex-col gap-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Engineering Process Timeline */}
          <section className="bg-white rounded-3xl p-8 border border-border-base shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2 border-slate-50">Engineering & Delivery Process</h2>
            
            <div className="flex flex-col gap-6 relative pl-8 before:content-[''] before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-100">
              {service.process.map((step, idx) => (
                <div key={idx} className="relative flex flex-col gap-1.5">
                  {/* Bullet */}
                  <span className="absolute -left-8 top-0.5 w-7.5 h-7.5 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-slate-800 text-sm">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordions */}
          <section className="bg-white rounded-3xl p-8 border border-border-base shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2 border-slate-50 flex items-center gap-2">
              <HelpIcon className="w-5 h-5 text-primary" />
              Frequently Asked Questions
            </h2>
            
            <div className="flex flex-col gap-4">
              {service.faq.map((faq, idx) => (
                <div 
                  key={idx}
                  className="border border-border-base rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-800 hover:text-primary transition-colors text-xs md:text-sm focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4.5 h-4.5 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 pt-0 border-t text-xs text-slate-500 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Side: Sidebar (4 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* Quick links to other services */}
          <div className="bg-white border border-border-base rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 text-sm mb-4 border-b pb-2">Other Services</h3>
            <div className="flex flex-col gap-2">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="flex items-center justify-between text-xs text-slate-600 hover:text-primary font-semibold p-3.5 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors border border-slate-100"
                >
                  <span className="truncate max-w-[200px]">{s.title.split(' (')[0]}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Support Card */}
          <div className="bg-white border border-border-base rounded-3xl p-6 relative overflow-hidden flex flex-col gap-5 shadow-sm">
            {/* Background design */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-slate-50 border border-slate-200/50 pointer-events-none" />
            
            <div>
              <h3 className="font-bold text-base font-display text-slate-900">Need Process Engineering Assistance?</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                Connect directly with our engineering desk in Chandigarh. We prepare free preliminary process flow layouts based on raw water parameters.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-xs border-t border-slate-100 pt-4 mt-2 text-slate-600 font-medium">
              <a href="tel:+919779350001" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91-9779350001</span>
              </a>
              <a href="mailto:info@21stcenturyenviro.com" className="flex items-center gap-2.5 hover:text-primary transition-colors break-all">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@21stcenturyenviro.com</span>
              </a>
            </div>

            <Link 
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-center text-xs font-semibold py-3 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Submit Sizing Details</span>
            </Link>
          </div>

          {/* Quality Audit Standard Card */}
          <div className="bg-white border border-border-base rounded-3xl p-6 shadow-sm flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-xs">Quality Assurance Policy</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed mt-1">
                Every vessel undergoes strict hydrostatic pressure tests prior to shipment, ensuring compliance with ASME section VIII regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
