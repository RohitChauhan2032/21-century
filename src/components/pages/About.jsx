import { useEffect } from 'react';
import { 
  ShieldCheck, Eye, Target, Award, Heart, CheckCircle2, Factory, Construction, ShieldAlert 
} from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    { icon: ShieldCheck, title: "Engineering Excellence", desc: "We adhere strictly to design codes like ASME and hydraulics equations to guarantee process outcomes." },
    { icon: Award, title: "Uncompromising Quality", desc: "From stainless steel grade selection to weld inspections, quality checks govern every manufacturing stage." },
    { icon: Target, title: "Client Alignment", desc: "We design custom-engineered plants tailored to our clients' precise water parameters and site space profiles." },
    { icon: Heart, title: "Environmental Ethics", desc: "Our core purpose is ecological. We seek to maximize recycling yields, reducing global wastewater footprints." }
  ];

  const milestones = [
    { year: "2000", title: "Company Inception", desc: "Founded in Chandigarh to supply high-quality sand filters and softeners to local industrial estates." },
    { year: "2008", title: "Baddi Facility Commissioned", desc: "Opened our heavy manufacturing workshop in Baddi, Himachal Pradesh, initiating in-house chemical reactor vessel fabrication." },
    { year: "2015", title: "Transition to Turnkey EPC", desc: "Began executing large scale turnkey municipal projects and custom industrial Zero Liquid Discharge (ZLD) plants." },
    { year: "2022", title: "Global Liaison Expansion", desc: "Established USA representation and CIS coordinates to export modular containerized treatment plants internationally." },
    { year: "2026", title: "Industry 4.0 Integration", desc: "Launched automated PLC SCADA systems, remote cloud parameter monitoring, and chemical dosing systems." }
  ];

  const leaders = [
    {
      name: "Mr. Midhar P.",
      role: "Managing Director",
      email: "midharp@21stcenturyenviro.com",
      desc: "Steers corporate strategy and public liaison. 25+ years of experience leading major environmental projects in India."
    },
    {
      name: "Mr. Gajraj Singh",
      role: "Technical Director",
      email: "gajrajsingh@21stcenturyenviro.com",
      desc: "Heads the process engineering desk and R&D pilot studies. Specializes in advanced biological systems (MBR/SBR) and chemical oxidation."
    },
    {
      name: "Mr. Rajit Gupta",
      role: "Director - International Operations",
      email: "rgupta@21stcenturyenviro.com",
      desc: "Coordinates USA projects, material supply audits, and international engineering partnerships. Base: Watertown, MA."
    },
    {
      name: "Mr. Simran Midha",
      role: "Overseas liaison - CIS Region",
      email: "simran@21stcenturyenviro.com",
      desc: "Manages business development and system deliveries in the CIS countries. Specializes in high-capacity pipeline networks."
    }
  ];

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block self-start">
              Corporate Profile
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
              21st Century Enviro Engineers Pvt. Ltd.
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Established in Chandigarh, India, 21st Century Enviro Engineers has grown to become a premium leader in the environmental engineering sector. We specialize in designing, fabricating, installing, and managing high-capacity Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), and Zero Liquid Discharge (ZLD) systems.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              With our in-house manufacturing plant in Baddi, Himachal Pradesh, we maintain direct control over chemical reactor assembly, welding quality, hydrostatic pressure testing, and chemical testing. We deliver durable utility assets that comply with strict government discharge norms.
            </p>
          </div>
          
          {/* Side Graphic block */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-md relative overflow-hidden flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <h3 className="font-bold text-lg font-display text-secondary">Why Engineering Matters</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Water treatment systems are dynamic chemical systems. Sizing mistakes in hydraulic piping or incorrect aerator diffusers lead to compliance issues. Our core value is engineering precision—checking water parameters under actual conditions before building.
            </p>
            <div className="flex gap-6 border-t border-slate-800 pt-4 mt-2 text-xs">
              <div>
                <p className="font-bold text-white text-base">25+</p>
                <p className="text-slate-400">Years Active</p>
              </div>
              <div>
                <p className="font-bold text-white text-base">500+</p>
                <p className="text-slate-400">Plants Built</p>
              </div>
              <div>
                <p className="font-bold text-white text-base">100+</p>
                <p className="text-slate-400">Clients Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 border border-border-base shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl font-display">Our Mission</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              To engineer and manufacture high-efficiency water and wastewater systems that enable factories to achieve zero liquid discharge status, secure groundwater reservoirs, and ensure full compliance with regulatory environmental criteria.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-border-base shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl font-display">Our Vision</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              To be globally recognized as a benchmark for environmental engineering excellence, pioneering modular wastewater treatment technologies and SCADA automation to protect industrial and municipal water resources.
            </p>
          </div>
        </div>

        {/* Core Values grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-border-base shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">{val.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-12">Our Journey Timeline</h2>
          <div className="flex flex-col gap-8 relative pl-8 before:content-[''] before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative flex flex-col gap-1">
                <span className="absolute -left-8.5 top-0.5 w-8.5 h-8.5 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm font-display">
                  {item.year}
                </span>
                <h3 className="font-bold text-slate-800 text-sm mt-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Directors / Leadership */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-12">Leadership Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-border-base shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="font-bold text-slate-800 text-base">{leader.name}</h3>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{leader.role}</p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{leader.desc}</p>
                </div>
                <div className="border-t pt-4 text-[10px] text-slate-400 font-semibold break-all">
                  <span>{leader.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing & Quality Infrastructure */}
        <div className="bg-white rounded-3xl p-8 border border-border-base shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-800">Manufacturing Works & Quality Policy</h2>
            <div className="flex flex-col gap-4 text-xs text-slate-600 leading-relaxed">
              <div className="flex gap-3">
                <Factory className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Works Office: Baddi, Himachal Pradesh</h4>
                  <p className="mt-1">Located in Village Kunjhal, Nalagarh, Solan. Our workshop houses automated shell rolling machinery, TIG/MIG welding lines, sandblasting units, and hydrostatic pressure testing arrays.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Construction className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Process Quality Inspections</h4>
                  <p className="mt-1">All carbon steel and stainless steel filtration vessels undergo thickness reviews, radiography testing on critical welds, and pressure holds before paint application.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldAlert className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Health, Safety & ISO Alignments</h4>
                  <p className="mt-1">We maintain safe workplace guidelines. Our execution engineers are trained in electrical lock-out tag-out (LOTO) protocols and process chemical storage handling.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Stats highlight */}
          <div className="bg-white text-slate-600 rounded-2xl p-8 flex flex-col gap-4 border border-border-base justify-center h-full shadow-sm">
            <h3 className="font-bold text-slate-900 text-base">Facility Capacities</h3>
            <ul className="flex flex-col gap-3 text-xs font-medium">
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span>Vessel Rolling Limits</span>
                <span className="text-slate-800 font-bold">Up to 4.0 Meters Diameter</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span>Monthly Fabrication Capacity</span>
                <span className="text-slate-800 font-bold">120 Metric Tons Steel</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span>Standard Test Pressure</span>
                <span className="text-slate-800 font-bold">Up to 12.0 Bar (Hydraulic)</span>
              </li>
              <li className="flex justify-between">
                <span>Accreditations</span>
                <span className="text-primary font-bold">ASME Sec VIII / ISO 9001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
