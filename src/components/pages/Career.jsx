import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, GraduationCap, DollarSign, Heart, Award, Shield, FileText, Check, AlertCircle, Upload 
} from 'lucide-react';

export default function Career() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const jobs = [
    {
      title: "Process Design Engineer (Wastewater)",
      department: "Engineering & Design",
      location: "Chandigarh Office",
      experience: "4-8 Years",
      type: "Full-Time",
      description: "Responsible for designing process parameters (hydraulic calculations, P&IDs, Mass Balance charts) for Effluent and Sewage treatment plants. Experience with MBR, SBR, and RO is required."
    },
    {
      title: "Site Commissioning Engineer",
      department: "Execution & Site Ops",
      location: "Works Site (Himachal & Punjab)",
      experience: "2-5 Years",
      type: "Full-Time",
      description: "Manage plant commissioning, piping hydraulic pressure testing, pump alignments, and biological seeding/stabilization procedures on industrial client sites."
    },
    {
      title: "Project Manager - Infrastructure EPC",
      department: "Project Management",
      location: "Chandigarh / Site-Based",
      experience: "8-12 Years",
      type: "Full-Time",
      description: "Lead large-scale turnkey municipal water grids and ZLD construction, coordinating sub-contractors, procurement cycles, scheduling, and billing."
    },
    {
      title: "R&D Chemist (Pilot Studies)",
      department: "Research & Development",
      location: "Baddi Laboratory, HP",
      experience: "3-6 Years",
      type: "Full-Time",
      description: "Conduct chemical/biological testing of sample factory effluents, design pilot testing protocols, and experiment with Fenton/electrocoagulation systems."
    }
  ];

  const benefits = [
    { icon: Heart, title: "Comprehensive Health Care", desc: "Medical and personal accident insurance coverage for you and your dependents." },
    { icon: DollarSign, title: "Performance Incentives", desc: "Project success bonuses, milestone rewards, and annual salary increments." },
    { icon: GraduationCap, title: "Skill Upgradation", desc: "Paid certification courses in CAD modeling, PMP, and process safety standards." },
    { icon: Award, title: "Carrier Growth Paths", desc: "Clear promotion charts from engineers to technical managers and regional heads." },
    { icon: Shield, title: "Safety Protocol First", desc: "Zero tolerance on site safety, supplying high-quality PPE and safety guidelines." },
    { icon: Briefcase, title: "Healthy Work Balance", desc: "Reasonable working hours, leaves policy, and cooperative management support." }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName('');
    }
  };

  const onSubmit = (data) => {
    setSubmitStatus('sending');
    // Simulated file upload and EmailJS submission
    setTimeout(() => {
      console.log('Career form submitted:', data, 'File Name:', selectedFileName);
      setSubmitStatus('success');
      setSelectedFileName('');
      reset();
    }, 1500);
  };

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Join Our Team
          </span>
          <h1 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Build the Future of Clean Water
          </h1>
          <p className="text-slate-500">
            Work with India's leading environmental engineers. We are looking for passionate, driven minds to design sustainable solutions.
          </p>
        </div>

        {/* Life at Company */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-border-base shadow-sm mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-slate-800">Life at 21st Century Enviro</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At 21st Century Enviro Engineers, we operate as a cohesive team of design specialists, chemists, and field execution experts. Our culture is built on continuous technical learning, safety, and mutual support. Whether refining wastewater filtration skids in our Baddi workshop or coordinating large pipelines on site, we encourage ownership and scientific analysis.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We value curiosity and technical integrity. Our team members frequently participate in environmental technology forums and interact with leading regulatory boards.
            </p>
            <div className="flex gap-4 mt-2">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-extrabold text-slate-800 text-xl">250+</h4>
                <p className="text-xs text-text-muted">Technical Staff</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-extrabold text-slate-800 text-xl font-display">15+</h4>
                <p className="text-xs text-text-muted">Patented Configurations</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden h-64 flex flex-col justify-end shadow-md">
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-secondary animate-pulse" />
            </div>
            <h3 className="font-bold text-lg mb-2">Sustainable Innovation</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              \"Our designs process and recycle millions of liters daily. Every pump we size, every column we erect directly saves local water basins.\"
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-12">Benefits & Growth Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-border-base shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">{benefit.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Jobs & Application Form split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="openings">
          {/* Job Openings */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Current Openings</h2>
            
            <div className="flex flex-col gap-4">
              {jobs.map((job, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-border-base shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base">{job.title}</h3>
                      <p className="text-xs text-primary font-semibold">{job.department}</p>
                    </div>
                    <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-medium">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex items-center gap-6 text-xs text-slate-400 font-medium border-t pt-3 mt-1">
                    <span>Location: {job.location}</span>
                    <span>Experience: {job.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-border-base shadow-sm self-start">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Submit Application</h2>
            <p className="text-slate-500 text-xs mb-6">
              Fill in your details and upload your CV/Resume to apply for any position.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className={`bg-slate-50 border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors ${
                    errors.name ? 'border-red-500' : 'border-border-base'
                  }`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-[10px] text-red-500">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  placeholder="e.g. john@example.com"
                  className={`bg-slate-50 border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors ${
                    errors.email ? 'border-red-500' : 'border-border-base'
                  }`}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span className="text-[10px] text-red-500">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Applying Position *</label>
                <select
                  className={`bg-slate-50 border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors ${
                    errors.position ? 'border-red-500' : 'border-border-base'
                  }`}
                  {...register("position", { required: "Please select a position" })}
                >
                  <option value="">Select Opening</option>
                  <option value="Process Design Engineer">Process Design Engineer</option>
                  <option value="Site Commissioning Engineer">Site Commissioning Engineer</option>
                  <option value="Project Manager">Project Manager - EPC</option>
                  <option value="R&D Chemist">R&D Chemist</option>
                  <option value="General Application">General / Other Role</option>
                </select>
                {errors.position && <span className="text-[10px] text-red-500">{errors.position.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Cover Note</label>
                <textarea
                  rows="3"
                  placeholder="Briefly state your qualifications and motivation."
                  className="bg-slate-50 border border-border-base rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors"
                  {...register("coverNote")}
                />
              </div>

              {/* File Upload Box */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700 font-sans">Upload Resume (PDF/DOC) *</label>
                <div className="relative border-2 border-dashed border-slate-200 hover:border-primary rounded-xl p-4 flex flex-col items-center justify-center bg-slate-50/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    required
                  />
                  <Upload className="w-6 h-6 text-slate-400 mb-1" />
                  <p className="text-[10px] text-slate-500 font-medium">Click or Drag PDF/DOC to upload</p>
                  {selectedFileName && (
                    <div className="mt-2 bg-primary/10 text-primary text-[10px] px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{selectedFileName}</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className="w-full gradient-hover text-white text-xs font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 mt-2"
              >
                {submitStatus === 'sending' ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl p-3.5 flex items-center gap-2 mt-2"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <p className="text-[10px] font-semibold">Your resume was sent successfully. We will contact you soon!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
