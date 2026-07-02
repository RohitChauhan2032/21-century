import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Shield, ChevronUp } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { servicesData } from '../../data/servicesData';
import { industriesData } from '../../data/industriesData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* About Company */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-md">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white font-display leading-tight tracking-wide text-sm md:text-base">
                21st CENTURY
              </span>
              <span className="text-[10px] tracking-[0.15em] font-semibold text-secondary leading-none">
                ENVIRO ENGINEERS
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Innovative environmental engineering delivering water, wastewater, and industrial utility infrastructure solutions worldwide. Built on 25+ years of operational trust.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Popular Services */}
        <div>
          <h4 className="font-semibold text-sm text-white tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary pb-2">
            Core Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {servicesData.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`} className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block">
                  {service.title.split(' (')[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors Served */}
        <div>
          <h4 className="font-semibold text-sm text-white tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary pb-2">
            Industries
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {industriesData.slice(0, 6).map((ind) => (
              <li key={ind.id}>
                <Link to={`/industries#${ind.id}`} className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block">
                  {ind.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="font-semibold text-sm text-white tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary pb-2">
            Newsletter
          </h4>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Subscribe to our newsletter for technical insights and compliance updates.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-xl px-4 py-3 w-full pr-12 focus:outline-none focus:border-primary transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 w-10 bg-primary hover:bg-primary-dark text-white rounded-lg flex items-center justify-center transition-colors"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-secondary mt-2 font-medium">Thank you for subscribing!</p>
          )}
        </div>
      </div>

      {/* Center Details Block & Contact Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 border-t border-slate-900 border-b flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-sm">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Call Support</p>
              <a href="tel:+911725014444" className="text-white hover:text-primary transition-colors font-medium">
                +91-172-5014444
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Email Us</p>
              <a href="mailto:info@21stcenturyenviro.com" className="text-white hover:text-primary transition-colors font-medium">
                info@21stcenturyenviro.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Works Location</p>
              <span className="text-white font-medium">Baddi, Himachal Pradesh</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleBackToTop}
          className="flex items-center gap-2 bg-slate-900 text-slate-300 hover:text-white px-4 py-2 rounded-xl border border-slate-800 transition-colors self-end lg:self-auto"
        >
          <span>Back to Top</span>
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* Sub Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p className="text-slate-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} 21st Century Enviro Engineers Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex gap-6 text-slate-500">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
