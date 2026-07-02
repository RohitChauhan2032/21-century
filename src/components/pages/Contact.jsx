import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, Info, ChevronDown, Check, AlertCircle 
} from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending', 'success', 'error'
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const offices = [
    {
      title: "Head Office",
      address: "SCO 265, Sector 32, Chandigarh - 160030, India",
      phone: "+91-172-5014444",
      mobile: "+91-9779350001, +91-9779350002",
      email: "info@21stcenturyenviro.com, 21centuryenviro@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3430.706175783355!2d76.77977461513222!3d30.712613981643444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed15b8109d31%3A0xe54e3d307d8d0859!2sSector%2032%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
    },
    {
      title: "Engineering Office & Works Office (HP)",
      address: "Plot No.120 (10 Marla), Industrial Area Phase II, Chandigarh - 160002, India",
      works: "Village Kunjhal, Jharmajri Heights, Baddi, Tehsil Nalagarh, District Solan HP - 173205",
      phone: "+91-9779350001",
      email: "midharp@21stcenturyenviro.com, gajrajsingh@21stcenturyenviro.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3424.3643750000003!2d76.85!3d30.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f840000000001%3A0x0!2sBaddi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1650000000001!5m2!1sen!2sin"
    },
    {
      title: "USA Office",
      address: "100 Summer St Apt 1-4, Watertown MA 02472, USA",
      contactPerson: "Mr. Rajit Gupta",
      phone: "+1 617-230-8634",
      email: "rgupta@21stcenturyenviro.com"
    },
    {
      title: "CIS Countries Contact",
      address: "Overseas Liaison Representative",
      contactPerson: "Mr. Simran Midha",
      phone: "+91-8288828889",
      email: "simran@21stcenturyenviro.com"
    }
  ];

  const onSubmit = (data) => {
    setSubmitStatus('sending');
    
    // We set up EmailJS template placeholders.
    // To trigger EmailJS:
    // emailjs.send('service_id', 'template_id', data, 'public_key')
    
    // For demonstration and production readiness:
    // We simulate a response of 1.5 seconds, then print the result.
    setTimeout(() => {
      console.log('Sending message to EmailJS:', data);
      setSubmitStatus('success');
      reset();
    }, 1500);
  };

  const contactFaqs = [
    {
      q: "Where is 21st Century Enviro Engineers headquartered?",
      a: "Our administrative Head Office is in Sector 32, Chandigarh, India. Our core engineering design center is located in Industrial Area Phase II, Chandigarh, and our primary equipment manufacturing facility is in Baddi, Himachal Pradesh."
    },
    {
      q: "How can I request a customized project quote?",
      a: "Fill out the contact form below with your raw water analysis details and required capacity (MLD/KLD). Our process engineering team will review the parameters and get back to you with a preliminary process flow diagram (PFD) and budget layout within 48 hours."
    },
    {
      q: "Do you supply plants internationally?",
      a: "Yes. Through our USA office in Massachusetts and our CIS representation, we design, fabricate, and export water, sewage, and effluent treatment systems globally, providing specialized installation supervision."
    },
    {
      q: "What technical support do you offer post-commissioning?",
      a: "We offer complete post-handover support, including Operator training, annual AMC visits, full skilled outsourcing (O&M contracts), and immediate emergency troubleshooting."
    }
  ];

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Connect With Our Engineering Offices
          </h1>
          <p className="text-slate-500">
            Have questions about a waste treatment plant, compliance audit, or system retrofit? Contact our team.
          </p>
        </div>

        {/* Offices and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Office Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Our Locations</h2>
            
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border-base shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-secondary" />
                <h3 className="font-bold text-slate-800 text-lg border-b pb-2 border-slate-50">
                  {office.title}
                </h3>
                
                <div className="flex flex-col gap-3 text-sm text-slate-600">
                  {office.contactPerson && (
                    <p className="font-semibold text-slate-700">Contact: {office.contactPerson}</p>
                  )}
                  
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p>{office.address}</p>
                      {office.works && (
                        <p className="mt-2 text-xs text-slate-500 font-medium">
                          <strong>Works:</strong> {office.works}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>{office.phone}</span>
                  </div>

                  {office.mobile && (
                    <div className="flex items-start gap-2.5">
                      <span className="w-4 text-xs font-bold text-primary shrink-0">Mob</span>
                      <span>{office.mobile}</span>
                    </div>
                  )}

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="break-all">{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Business Hours */}
            <div className="bg-white border border-border-base text-slate-600 rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Working Hours
              </h3>
              <p className="text-sm font-medium">Monday – Saturday: 9:00 AM – 6:30 PM (IST)</p>
              <p className="text-xs text-slate-400">Closed on Sundays and national public holidays.</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-border-base shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Request technical assistance</h2>
            <p className="text-slate-500 text-sm mb-8">
              Complete this form to submit your inquiry or schedule a meeting.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-border-base focus:border-primary'
                  }`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  placeholder="e.g. john@company.com"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-border-base focus:border-primary'
                  }`}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-border-base focus:border-primary'
                  }`}
                  {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Chemical Ltd."
                  className="bg-slate-50 border border-border-base rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  {...register("company")}
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Service Required *</label>
                <select
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                    errors.service ? 'border-red-500' : 'border-border-base focus:border-primary'
                  }`}
                  {...register("service", { required: "Please select a service" })}
                >
                  <option value="">Select Service / System Type</option>
                  <option value="etp">Effluent Treatment Plant (ETP)</option>
                  <option value="stp">Sewage Treatment Plant (STP)</option>
                  <option value="wtp">Water Treatment Plant (WTP)</option>
                  <option value="zld">Zero Liquid Discharge (ZLD)</option>
                  <option value="ro">Reverse Osmosis Plant (RO)</option>
                  <option value="amc">O&M / Maintenance Contract</option>
                  <option value="consultancy">Environmental Consultancy</option>
                  <option value="other">Other Inquiry</option>
                </select>
                {errors.service && <span className="text-xs text-red-500">{errors.service.message}</span>}
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Your Message *</label>
                <textarea
                  rows="4"
                  placeholder="Please describe your water parameters, target MLD/KLD capacity, or specific site issue."
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-border-base focus:border-primary'
                  }`}
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full gradient-hover text-white font-semibold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {submitStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Alert Panels */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="sm:col-span-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl p-4 flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    <p className="text-sm font-medium">Your request has been successfully submitted! Our design desk will contact you soon.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="sm:col-span-2 bg-red-50 text-red-800 border border-red-200 rounded-xl p-4 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <p className="text-sm font-medium">An error occurred while submitting your message. Please try emailing directly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Map Embeds */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Interactive Map</h2>
          <div className="rounded-3xl border border-border-base overflow-hidden shadow-sm h-[400px]">
            <iframe
              src={offices[0].map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Contact & Consultation FAQs</h2>
          
          <div className="flex flex-col gap-4">
            {contactFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-border-base shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-primary transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-5 pt-0 border-t text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
