export const servicesData = [
  {
    id: "effluent-treatment-plant",
    title: "Effluent Treatment Plant (ETP)",
    icon: "Activity",
    category: "Wastewater",
    shortDesc: "Advanced treatment systems for industrial wastewater, ensuring compliance with strict environmental standards.",
    longDesc: "Our Effluent Treatment Plants (ETP) are engineered to treat high-pollution industrial wastewater, removing organic and inorganic matter, heavy metals, oil, grease, and suspended solids before safe discharge or reuse.",
    benefits: [
      "Guarantees 100% compliance with local and federal discharge standards",
      "Reduces water footprint through high efficiency recycling systems",
      "Minimal operational footprint and chemical utilization",
      "Robust recovery systems for byproducts and reusable raw chemicals"
    ],
    features: [
      "Capacity ranging from 10 KLD to 10 MLD+",
      "Available in manual, semi-automatic, and fully automated PLC/SCADA configurations",
      "Physico-chemical, biological, and advanced oxidation process stages",
      "Modular containerized systems for rapid site execution"
    ],
    process: [
      { step: "1", title: "Screening & Equalization", desc: "Removal of large debris and blending of varying wastewater flows for chemical consistency." },
      { step: "2", title: "Physico-Chemical Treatment", desc: "Coagulation, flocculation, and primary settling to precipitate dissolved metals and heavy solids." },
      { step: "3", title: "Biological Oxidation", desc: "Aerobic/anaerobic degradation of organic matter using activated sludge, MBBR, or MBR technologies." },
      { step: "4", title: "Tertiary Polishing & Filtration", desc: "Sand, carbon, and ultrafiltration polishing to deliver highly refined output." }
    ],
    faq: [
      { q: "What industries require an Effluent Treatment Plant?", a: "Chemical, Pharmaceutical, Textiles, Electroplating, Tannery, Food Processing, and Pulp & Paper industries frequently generate effluent that requires specialized ETP units." },
      { q: "Can treated effluent be reused in industrial operations?", a: "Yes, when integrated with tertiary systems like RO and Ultrafiltration, ETP effluent can be safely recycled for cooling towers, boilers, and washing." }
    ]
  },
  {
    id: "sewage-treatment-plant",
    title: "Sewage Treatment Plant (STP)",
    icon: "Waves",
    category: "Wastewater",
    shortDesc: "High-efficiency systems for treating municipal and domestic sewage using state-of-the-art biological processes.",
    longDesc: "We design, manufacture, and install modern Sewage Treatment Plants (STP) using advanced biological technologies like MBBR, SBR, and MBR to recycle domestic wastewater into high-quality water suitable for cooling, landscaping, and flushing.",
    benefits: [
      "Odor-free operation with compact space requirement",
      "Produces clean water suitable for gardening and flush recycling",
      "Low power consumption and easy operational maintenance",
      "Helps meet green building rating (LEED/IGBC) criteria"
    ],
    features: [
      "Advanced MBR (Membrane Bioreactor) and SBR (Sequencing Batch Reactor) systems",
      "Modular design for residential blocks, commercial malls, and institutions",
      "Prefabricated underground and containerized options available",
      "Advanced disinfection using UV and Ozone treatment"
    ],
    process: [
      { step: "1", title: "Primary Screening", desc: "Trapping grit, plastic, and heavy debris at the source inlet." },
      { step: "2", title: "Aeration & Biological Digestion", desc: "Introducing oxygen to accelerate organic decomposition by aerobic microbes." },
      { step: "3", title: "Clarification", desc: "Settling suspended biomass to isolate crystal clear supernatant water." },
      { step: "4", title: "Disinfection & Filtration", desc: "Treatment with UV/chlorination and pressure filters to kill remaining pathogens." }
    ],
    faq: [
      { q: "What is the difference between MBBR and MBR systems?", a: "MBBR (Moving Bed Biofilm Reactor) uses floating plastic carriers and secondary clarifiers, whereas MBR (Membrane Bioreactor) replaces clarifiers with submicron membranes, yielding extremely pure effluent with a much smaller physical footprint." },
      { q: "How often does an STP require sludge removal?", a: "Typically, accumulated sludge is digested and pumped out every 3 to 6 months depending on load and reactor configuration." }
    ]
  },
  {
    id: "water-treatment-plant",
    title: "Water Treatment Plant (WTP)",
    icon: "Droplet",
    category: "Water Treatment",
    shortDesc: "Filtration and purification systems producing safe drinking and process water from raw water sources.",
    longDesc: "Our Water Treatment Plants process surface water, groundwater, and brackish resources to supply municipal drinking water standards and precise water parameters required for industrial utility processes.",
    benefits: [
      "Removes turbidity, color, odor, and pathogens effectively",
      "Tailored mineral composition for industrial and consumer use",
      "Extends piping and boiler lifetime by mitigating scaling elements",
      "Fully compliant with WHO and IS-10500 standards"
    ],
    features: [
      "Clariflocculation, high-rate solid contact clarifiers (HRSCC)",
      "Multi-grade sand and activated carbon media filtration",
      "Iron, manganese, and fluoride removal filters",
      "Automatic backwash and flow control manifolds"
    ],
    process: [
      { step: "1", title: "Raw Water Intake", desc: "Sourcing water from rivers, wells, or reservoirs." },
      { step: "2", title: "Coagulation & Clarification", desc: "Adding coagulants to group colloidal mud particles for easy gravity settling." },
      { step: "3", title: "Pressure Filtration", desc: "Passing clarified water through sand, anthracite, or gravel to remove micro-suspended particles." },
      { step: "4", title: "Disinfection & Storage", desc: "Dosing chlorine or UV treatment before pumping to clean water storage reservoirs." }
    ],
    faq: [
      { q: "Do these plants handle high iron content?", a: "Yes, we integrate specialized catalytic media (like Birm or Manganese Greensand) to oxidize and filter high iron concentrations." },
      { q: "What capacity ranges do you build?", a: "From small industrial skid units (1,000 LPH) up to large municipal schemes treating 50+ Million Litres per Day (MLD)." }
    ]
  },
  {
    id: "zero-liquid-discharge",
    title: "Zero Liquid Discharge (ZLD)",
    icon: "ShieldAlert",
    category: "Wastewater",
    shortDesc: "Complete wastewater recycling systems that leave zero liquid discharge, yielding only solids and reusable pure water.",
    longDesc: "Our Zero Liquid Discharge (ZLD) plants combine high-recovery membrane filtration (RO) with thermal evaporation and crystallization to recover 95-99% of wastewater as high-purity distillate, leaving solid crystals for disposal.",
    benefits: [
      "Eliminates environmental liabilities associated with liquid waste discharge",
      "Recovers high-purity water (up to 99%) for direct boiler feed use",
      "Enables industrial operations in areas with strict discharge bans",
      "Possibility of recovering valuable salts and commercial minerals from waste"
    ],
    features: [
      "Multi-stage high-pressure RO processes (DTRO / Disc Tube RO)",
      "Multiple Effect Evaporators (MEE) and Mechanical Vapor Recompression (MVR)",
      "Agitated Thin Film Dryers (ATFD) and crystallizers",
      "Highly corrosion-resistant materials of construction (Super Duplex, Titanium)"
    ],
    process: [
      { step: "1", title: "Pre-Concentration", desc: "Using advanced high-recovery RO to concentrate wastewater TDS as much as possible." },
      { step: "2", title: "Thermal Evaporation", desc: "Boiling down the concentrated reject stream in MEE/MVR to produce saturated slurry." },
      { step: "3", title: "Crystallization", desc: "Separating dissolved salts from the slurry, transforming it into dry, solid cake." },
      { step: "4", title: "Distillate Recovery", desc: "Condensing steam vapors into pure distillate water for factory reuse." }
    ],
    faq: [
      { q: "Why is ZLD considered expensive?", a: "ZLD requires significant energy for thermal evaporation. However, our use of energy-efficient MVR systems and chemical salt recovery offsets long-term operating costs." },
      { q: "Is ZLD mandatory?", a: "In many states, heavy industries like distilleries, chemical manufacturers, and textile dye units are mandated by Pollution Control Boards to operate ZLD systems." }
    ]
  },
  {
    id: "reverse-osmosis",
    title: "Reverse Osmosis (RO) Plant",
    icon: "Compass",
    category: "Water Treatment",
    shortDesc: "Membrane-based desalination systems for brackish, sea, and high-TDS industrial process water.",
    longDesc: "We manufacture high-grade industrial and commercial Reverse Osmosis systems designed to reject up to 99.5% of dissolved salts, silica, heavy metals, and micro-contaminants from water.",
    benefits: [
      "Consistently produces ultra-pure water with low TDS",
      "Saves cost compared to thermal desalination systems",
      "Long-lasting membrane lives through smart anti-scalant dosing",
      "Compact skid-mounted design for clean space utilization"
    ],
    features: [
      "Premium spiral-wound thin-film composite (TFC) membranes",
      "High-pressure pumps with variable frequency drives (VFD) for energy optimization",
      "Online TDS, pH, conductivity, and flow rate sensors",
      "Clean-In-Place (CIP) systems integrated directly on the skid"
    ],
    process: [
      { step: "1", title: "Pre-Treatment Dosing", desc: "Chlorine, anti-scalant, and pH adjustment dosing to protect the membranes." },
      { step: "2", title: "Micron Filtration", desc: "Passing through 5-micron cartridges to catch physical micro-particles." },
      { step: "3", title: "High-Pressure Membrane Separation", desc: "Applying hydraulic pressure exceeding natural osmotic pressure to force pure water through semi-permeable membranes." },
      { step: "4", title: "Post-Treatment", desc: "Degasification, pH adjustment, or mineralization based on destination use." }
    ],
    faq: [
      { q: "How long do RO membranes typically last?", a: "With appropriate pre-treatment and periodic CIP washing, membranes last between 3 to 5 years." },
      { q: "What is the typical water recovery rate?", a: "For brackish groundwater, recovery is between 70-85%. For seawater RO, recovery is around 35-50%." }
    ]
  },
  {
    id: "softening-plant",
    title: "Water Softening Plant",
    icon: "Sparkles",
    category: "Water Treatment",
    shortDesc: "Ion-exchange softener units targeting calcium and magnesium hardness to prevent boiler and pipe scaling.",
    longDesc: "Our Water Softening Plants utilize premium cation exchange resin to exchange hardness-causing calcium and magnesium ions with sodium ions, delivering soft water for boiler feeds, cooling towers, and commercial complexes.",
    benefits: [
      "Prevents scaling in pipes, cooling towers, boilers, and heat exchangers",
      "Significantly reduces energy consumption of heating systems",
      "Decreases detergent and surfactant usage in textile and laundry processes",
      "Low maintenance costs with automated brine regeneration systems"
    ],
    features: [
      "FRP (Fiber-Reinforced Plastic) or Mild Steel pressure vessels",
      "High-capacity polystyrene divinylbenzene copolymer cation resins",
      "Multiport control valves for automatic regeneration scheduling",
      "Corrosion-resistant brine preparation tank"
    ],
    process: [
      { step: "1", title: "Hard Water Feed", desc: "Inlet of high-calcium and high-magnesium water." },
      { step: "2", title: "Ion Exchange", desc: "Sodium ions bound to resin beads are exchanged with calcium and magnesium in the water." },
      { step: "3", title: "Soft Water Delivery", desc: "Zero-hardness water passes through bottom laterals to production lines." },
      { step: "4", title: "Brine Regeneration", desc: "Periodically rinsing resin with concentrated salt water (NaCl) to replenish sodium ions." }
    ],
    faq: [
      { q: "How do I know if my facility needs a softening plant?", a: "If you observe white scaling inside pipes, high energy consumption in heaters, or water testing reveals hardness above 100 mg/L." },
      { q: "Does a softening plant reduce TDS?", a: "No, a water softener exchanges calcium/magnesium for sodium. The total dissolved solids (TDS) value remains relatively unchanged." }
    ]
  },
  {
    id: "demineralization-plant",
    title: "Demineralization (DM) Plant",
    icon: "Zap",
    category: "Water Treatment",
    shortDesc: "Dual-bed and mixed-bed ion exchange plants delivering ultra-pure mineral-free water for critical processes.",
    longDesc: "Demineralization plants remove almost all ionized minerals and salts from water using sequential cation and anion exchange beds, followed by optional mixed bed polishing for high-pressure power plant boiler feed and pharmaceutical applications.",
    benefits: [
      "Produces ultra-low conductivity water (below 1.0 micro-Siemens/cm)",
      "Zero silica levels, crucial for protecting turbine blades",
      "Highly reliable chemical separation without membrane utilities",
      "Low initial capital investment compared to RO-EDI options"
    ],
    features: [
      "Co-flow or counter-current regeneration options for maximum efficiency",
      "Acid-proof rubber-lined steel vessels and chemical handling pipelines",
      "Mixed-bed polishing units for polishing RO permeate or dual-bed effluent",
      "Safety degasifier towers to remove dissolved carbon dioxide gas"
    ],
    process: [
      { step: "1", title: "Cation Exchange", desc: "Positively charged metallic ions are exchanged for Hydrogen (H+) ions, creating acidic water." },
      { step: "2", title: "Degasification", desc: "Tricking water through a tower with counter-airflow to strip out bicarbonate CO2 gas." },
      { step: "3", title: "Anion Exchange", desc: "Negatively charged anions are exchanged for Hydroxyl (OH-) ions, forming pure water (H2O)." },
      { step: "4", title: "Mixed Bed Polishing", desc: "Passing water through an intimately mixed resin bed to clean traces of ions." }
    ],
    faq: [
      { q: "What chemicals are needed for DM plant regeneration?", a: "Hydrochloric Acid (HCl) or Sulfuric Acid (H2SO4) for regenerating cation resin, and Sodium Hydroxide (NaOH) for anion resin." },
      { q: "Can a DM plant replace an RO system?", a: "For low TDS water, a DM plant is highly cost-effective. For high TDS feed water (>500 ppm), combining RO (for bulk removal) followed by DM polishing is the best approach." }
    ]
  },
  {
    id: "ultra-filtration",
    title: "Ultrafiltration (UF) Plant",
    icon: "Filter",
    category: "Water Treatment",
    shortDesc: "Hollow-fiber membrane separation for fine suspended solids, colloids, silt, and microbiological pathogens.",
    longDesc: "Our Ultrafiltration systems use hollow-fiber membranes with a pore size of 0.01 to 0.02 microns. They are ideal as pre-treatment filters to RO systems, protecting them from organic fouling, and as tertiary filters in wastewater recycling.",
    benefits: [
      "Extremely high removal rate of viruses, bacteria, and macromolecules",
      "Maintains constant product water quality regardless of feed water turbidity spikes",
      "Increases the lifetime and operation interval of downstream RO membranes",
      "Requires minimal chemical consumption"
    ],
    features: [
      "Out-to-in or In-to-out hollow fiber membrane configurations",
      "PVDF high-durability membranes resistant to high chlorine cleanings",
      "Fully automated backwash, air-scouring, and chemically enhanced backwash (CEB) cycles",
      "Compact footprint with high packing density membrane modules"
    ],
    process: [
      { step: "1", title: "Pre-Straining", desc: "A 100-200 micron auto-strainer protects hollow fibers from large physical particles." },
      { step: "2", title: "UF Membrane Separation", desc: "Feed water flows under pressure into the fiber channels, leaving macromolecules, silt, and microbes on the shell." },
      { step: "3", title: "Air Scour & Backwash", desc: "Periodically pumping pure water backwards combined with compressed air to shake off mud." },
      { step: "4", title: "CEB (Chemical Backwash)", desc: "Injecting sodium hypochlorite or acid during backwash to clean organic or scaling buildup." }
    ],
    faq: [
      { q: "Does Ultrafiltration reduce TDS?", a: "No, UF only removes suspended solids, bacteria, viruses, and colloidal organic matter. Dissolved salts pass through and must be treated by RO or ion exchange." },
      { q: "Why is UF preferred over sand filters?", a: "UF has a absolute pore size rating (0.02 micron) and handles fluctuating turbidity far better than sand filters, ensuring a Silt Density Index (SDI) < 3 for RO feeds." }
    ]
  },
  {
    id: "industrial-wastewater-treatment",
    title: "Industrial Wastewater Treatment",
    icon: "Trash2",
    category: "Wastewater",
    shortDesc: "Complex multi-stage treatment designs addressing toxic, recalcitrant, and chemical-heavy factory flows.",
    longDesc: "We deliver custom engineered industrial wastewater treatment systems for heavy industries, deploying specialized technologies (MBR, electrocoagulation, wet-air oxidation) to address complex chemical oxygen demand (COD), biological oxygen demand (BOD), and specific toxic compounds.",
    benefits: [
      "Designed specifically for hard-to-treat chemical and industrial compounds",
      "Mitigates toxic spills and prevents fines from regulatory boards",
      "Integrates resource recovery (solids, fuels, heat, biogas)",
      "High reliability with fail-safe automatic bypass controls"
    ],
    features: [
      "Custom testing and pilot-scale trials before execution",
      "High-load aerobic/anaerobic processes (UASB, EGSB)",
      "Advanced chemical precipitation for heavy metal recovery",
      "Integrated automation to adjust to load and volume variations"
    ],
    process: [
      { step: "1", title: "Characterization & Lab Testing", desc: "Detailed laboratory mapping of wastewater constituents." },
      { step: "2", title: "Toxic Neutralization", desc: "Breaking down cyanides, chromium reduction, and neutralizing extreme pH streams at source." },
      { step: "3", title: "Advanced Biological Digestion", desc: "Utilizing specialized biomass cultures to consume persistent organic chemicals." },
      { step: "4", title: "Oxidation & Sludge Dewatering", desc: "Fenton oxidation and filter press systems to generate dry disposable sludge cake." }
    ],
    faq: [
      { q: "How do you handle oily wastewater?", a: "We utilize API oil-water separators, Dissolved Air Flotation (DAF) units, and coalescing plate interceptors to extract oils prior to chemical/biological treatments." },
      { q: "Do you offer containerized units for remote locations?", a: "Yes, we construct complete modular wastewater treatment plants packaged inside standard ISO shipping containers for easy shipping and immediate commissioning." }
    ]
  },
  {
    id: "chemical-dosing-system",
    title: "Chemical Dosing System",
    icon: "FlaskConical",
    category: "Automation Solutions",
    shortDesc: "Skid-mounted metering systems for accurate addition of chemicals, acids, and disinfectants.",
    longDesc: "We fabricate custom chemical dosing skids that feature highly accurate metering pumps, instrumentation, and piping manifolds to accurately inject chemicals like chlorine, scale inhibitors, acids, and polyelectrolytes into process streams.",
    benefits: [
      "Eliminates manual mixing errors and exposure risks for operators",
      "Highly precise flow rate control reduces overall chemical costs",
      "Robust materials prevent leaks and corrosion damage",
      "Easily integrates into existing plants and SCADA networks"
    ],
    features: [
      "Solenoid, diaphragm, or peristaltic dosing pumps (Brand: Prominent, Milton Roy, etc.)",
      "HDPE, PP, or FRP chemical preparation tanks with agitators",
      "Integrated safety valves, calibration cylinders, and pulsation dampeners",
      "Corrosion-resistant PVC, PVDF, or Stainless Steel piping manifolds"
    ],
    process: [
      { step: "1", title: "Chemical Loading & Dilution", desc: "Safe introduction of chemicals into the storage/dilution tank with motorized agitation." },
      { step: "2", title: "Parameter Reading", desc: "In-line sensors (like pH, ORP, or flow) transmit current process conditions to the controller." },
      { step: "3", title: "Precision Dosing", desc: "The dosing pump adjusts stroke length/frequency to deliver exact chemical amounts." },
      { step: "4", title: "Pulsation Dampening", desc: "Stabilizing the chemical injection pulses for smooth fluid integration." }
    ],
    faq: [
      { q: "What instruments are included in a dosing skid?", a: "We typically include calibration pots, pressure relief valves, pressure gauges, Y-strainers, and electronic level switches for dry-run protection." },
      { q: "Are the dosing rates adjustable?", a: "Yes, they can be manually adjusted on the pump or automatically regulated using a 4-20mA signal from a PLC or pH transmitter." }
    ]
  },
  {
    id: "water-recycling-plant",
    title: "Water Recycling Plant",
    icon: "Repeat",
    category: "Wastewater",
    shortDesc: "Tertiary and quaternary recovery systems converting greywater and treated effluent into clean process-grade water.",
    longDesc: "Our Water Recycling Plants close the loop on municipal and industrial water cycles. We combine biological treatment with sand/carbon filters, Ultrafiltration, and Double Pass Reverse Osmosis to render sewage and industrial effluents completely reusable.",
    benefits: [
      "Saves up to 90% of raw water purchase costs",
      "Protects operations from seasonal municipal water cuts",
      "Aligns corporate policy with global sustainability and SDG standards",
      "Reduces overall liquid discharge compliance costs"
    ],
    features: [
      "Advanced Multi-Barrier Filtration concepts",
      "TOC (Total Organic Carbon) monitoring and reduction systems",
      "Advanced disinfection using UV, ozone, and chlorine dioxide",
      "Water audit and balancing analytics integrated"
    ],
    process: [
      { step: "1", title: "Secondary Feed", desc: "Receiving water from primary/secondary ETP or STP." },
      { step: "2", title: "Coarse Membrane Barrier", desc: "Ultrafiltration removes all bacteria, viruses, and remaining suspended solids." },
      { step: "3", title: "Dissolved Salt Removal", desc: "Reverse osmosis strips away dissolved minerals, detergents, and chemicals." },
      { step: "4", title: "Polishing & Disinfection", desc: "UV sterilizer and activated carbon polishing before distributing to processing lines." }
    ],
    faq: [
      { q: "Is recycled water safe for human contact?", a: "Our recycled water is micro-biologically sterile and chemically clean. While safe for industrial and flushing utilities, it is generally kept separate from potable drinking systems for psychological reasons." },
      { q: "What is greywater vs. blackwater recycling?", a: "Greywater (from basins, showers, laundry) has low organic loads and is cheap to recycle. Blackwater (from toilets) contains toilet waste and requires full biological treatment before reuse." }
    ]
  },
  {
    id: "rain-water-harvesting",
    title: "Rainwater Harvesting Systems",
    icon: "CloudRain",
    category: "Environmental Consultancy",
    shortDesc: "Catchment engineering, filtration, and groundwater recharge designs for industrial and urban areas.",
    longDesc: "We provide comprehensive rainwater harvesting solutions, including site hydrological surveys, designing custom run-off catchment networks, building filtration chambers, and engineering high-capacity groundwater recharge borewells.",
    benefits: [
      "Drastically improves local groundwater table levels",
      "Provides a free source of low-TDS water during monsoon seasons",
      "Mitigates soil erosion and localized urban flooding",
      "Helps factories satisfy environmental clearance guidelines"
    ],
    features: [
      "Site-specific contour and geological soil percolation analysis",
      "High-efficiency automatic first-flush rainwater separators",
      "Sand, gravel, and charcoal multi-layer filtration pits",
      "Vandal-proof, self-cleaning rain-separator modules"
    ],
    process: [
      { step: "1", title: "Catchment Profiling", desc: "Calculating run-off coefficients of factory roofs and paved areas." },
      { step: "2", title: "First Flush Diversion", desc: "Diverting initial dirty rain containing dust and bird droppings away from storage." },
      { step: "3", title: "Sediment Filtration", desc: "Passing rain through gravity media filters to separate sand and leaves." },
      { step: "4", title: "Ground Recharge / Storage", desc: "Injecting cleaned water into recharge wells or storing it in large underground sumps." }
    ],
    faq: [
      { q: "How much rainwater can we collect?", a: "Annual Yield = Rainfall Depth (mm) × Catchment Area (sqm) × Runoff Coefficient (typically 0.8 for concrete roofs)." },
      { q: "Is rainwater harvesting legally required?", a: "Yes, many municipal corporations require rainwater harvesting installations for commercial buildings and industrial sites exceeding 500 square meters." }
    ]
  },
  {
    id: "environmental-consultancy",
    title: "Environmental Consultancy",
    icon: "FileText",
    category: "Consultancy",
    shortDesc: "Liaison, licensing, Environmental Impact Assessment (EIA), and regulatory compliance audits.",
    longDesc: "Our expert consulting division assists industries in obtaining Consent to Establish (CTE), Consent to Operate (CTO), preparing Environmental Impact Assessment (EIA) reports, and performing periodic water/air quality audits for State Pollution Control Boards (SPCB).",
    benefits: [
      "Accelerates statutory approvals with local government bodies",
      "Prevents unexpected shutdown notices and environmental litigation",
      "Provides clear corporate risk assessment of environmental assets",
      "Identifies areas of water and energy waste to save costs"
    ],
    features: [
      "Team of accredited EIA coordinators and functional area experts",
      "Complete documentation, submission, and liaison representation",
      "Regulatory audit checklists updated with latest 2026 legal guidelines",
      "Comprehensive green audit certifications"
    ],
    process: [
      { step: "1", title: "Initial Gap Analysis", desc: "Reviewing existing facility licenses and discharge records." },
      { step: "2", title: "Field Sampling & Studies", desc: "Monitoring ambient air, noise, groundwater, and stacks over predefined durations." },
      { step: "3", title: "Documentation Prep", desc: "Compiling detailed EIA, Form-V (environmental statement), or consent forms." },
      { step: "4", title: "Authority Liaison", desc: "Representing client interests in technical hearings before pollution boards." }
    ],
    faq: [
      { q: "What is the difference between CTE and CTO?", a: "Consent to Establish (CTE) is required *before* starting any factory construction. Consent to Operate (CTO) is obtained *after* construction but *before* starting commercial production." },
      { q: "How often should an Environmental Audit be filed?", a: "In India, an Environmental Statement (Form V) must be submitted annually before September 30th for the financial year ending March 31st." }
    ]
  },
  {
    id: "operation-maintenance",
    title: "Operation & Maintenance (O&M)",
    icon: "Settings",
    category: "Services",
    shortDesc: "Annual Maintenance Contracts (AMC) and complete operational outsourcing of water treatment assets.",
    longDesc: "We provide skilled operators, chemists, consumables, and engineering oversight to operate and maintain water, sewage, and effluent treatment systems, guaranteeing output water parameters and equipment uptime.",
    benefits: [
      "Ensures continuous discharge compliance without distractions",
      "Optimizes chemical and power consumption, reducing operational cost",
      "Extends life of pumps, membranes, and blowers through preventative care",
      "Provides emergency mobile technician teams 24/7"
    ],
    features: [
      "Full Operation & Maintenance (Comprehensive O&M with chemical/spares)",
      "Non-comprehensive AMC (Periodic maintenance checkups & technical calibration)",
      "Daily lab testing of water inlet/outlet samples with logbook documentation",
      "Custom remote monitoring dashboards reporting plant health indicators"
    ],
    process: [
      { step: "1", title: "Site Handover Audit", desc: "Inspecting and logging the mechanical and structural health of the existing plant." },
      { step: "2", title: "SOP Standardization", desc: "Creating standard operating sheets for chemical preparation, backwashes, and filter sweeps." },
      { step: "3", title: "Daily Plant Operation", desc: "Continuous monitoring of levels, pressures, flows, and dosing parameters by certified operators." },
      { step: "4", title: "Preventative Maintenance", desc: "Performing weekly pump rotations, blower oil changes, and monthly sensor calibrations." }
    ],
    faq: [
      { q: "Do you supply the treatment chemicals under O&M?", a: "We offer both models: chemical-inclusive contracts where we take complete responsibility for consumables, or labor-only contracts where the client procures chemicals based on our guidelines." },
      { q: "What happens if the plant fails to meet discharge standards during O&M?", a: "Under a comprehensive O&M contract, we take full responsibility for compliance parameters, provided the raw feed parameters do not exceed design thresholds." }
    ]
  },
  {
    id: "turnkey-epc-projects",
    title: "Turnkey EPC Projects",
    icon: "FileCheck",
    category: "Services",
    shortDesc: "Engineering, Procurement, and Construction (EPC) services for water and infrastructure grids.",
    longDesc: "We take single-point responsibility for large-scale water and wastewater projects, handling basic design engineering, global material procurement, civil construction, piping, mechanical installation, electrical wiring, and plant startup.",
    benefits: [
      "Single point of contact simplifies communication and limits disputes",
      "Saves cost and timeline through fast-track simultaneous processing",
      "Guarantees process performance and construction quality",
      "Eliminates design mismatch risks between civil and mechanical contractors"
    ],
    features: [
      "3D plant modeling (BIM) and hydraulic simulations",
      "In-house civil engineering division specialized in water holding structures",
      "Vast network of validated sub-vendors and manufacturers",
      "Standard Project Management practices (PMP/Primavera tracking)"
    ],
    process: [
      { step: "1", title: "Detail Engineering", desc: "Preparing detailed P&IDs, civil foundation drawings, layout plots, and piping routes." },
      { step: "2", title: "Procurement & Fabrication", desc: "Sourcing pumps, valves, instruments, and fabricating custom carbon steel/FRP vessels in-house." },
      { step: "3", title: "Civil & Installation", desc: "Excavation, concrete casting of reactors, skid positioning, piping hook-ups, and electrical cabling." },
      { step: "4", title: "Testing & Commissioning", desc: "Hydro-testing, dry runs, chemical charging, biomass seeding, and final performance run." }
    ],
    faq: [
      { q: "What types of plants are built on an EPC basis?", a: "Large industrial water grids, intake works, municipal STPs (10+ MLD), heavy chemical ETPs, and centralized ZLD plants." },
      { q: "How long does a typical EPC project take?", a: "Depending on size, industrial packages take 3 to 6 months, while municipal/infrastructure grids take 12 to 18 months." }
    ]
  },
  {
    id: "automation-solutions",
    title: "Automation & SCADA Solutions",
    icon: "Cpu",
    category: "Automation Solutions",
    shortDesc: "PLC panels, remote monitoring, and SCADA control integrations for smart water management.",
    longDesc: "We modernize water treatment systems by implementing automated PLC panels, remote sensor arrays, and centralized SCADA platforms. This enables predictive maintenance, real-time flow balancing, and unmanned plant operations.",
    benefits: [
      "Minimizes human operational errors and protects equipment",
      "Reduces manual workforce requirements through central screens",
      "Alerts operations instantly of pipe breaks, pump failures, or chemical shortages via SMS/Email",
      "Generates historical data trends to optimize chemical and power usages"
    ],
    features: [
      "Industrial PLCs (Siemens, Schneider, Rockwell Automation)",
      "Touchscreen HMI panels integrated into localized electrical cabinets",
      "Cloud-based SCADA reporting reachable on web and mobile devices",
      "Automatic flow control valves (Pneumatic/Electrical actuators)"
    ],
    process: [
      { step: "1", title: "Control Architecture Design", desc: "Mapping all inputs (sensors) and outputs (pumps, valves) on an I/O list." },
      { step: "2", title: "PLC Programming", desc: "Writing PLC control logic (ladder logic/structured text) and detailing safety interlocks." },
      { step: "3", title: "Cabinet Assembly", desc: "Wiring panels, breakers, relays, and PLCs in our climate-controlled workshop." },
      { step: "4", title: "Site SAT Testing", desc: "Site Acceptance Testing (SAT) verifying sensor feedback loops and emergency stops." }
    ],
    faq: [
      { q: "Can old manual plants be automated?", a: "Yes, we retrofit motorized actuators on existing manual valves, install inline sensors, and build a customized control panel to automate backwash and filter sequences." },
      { q: "Are SCADA systems secure?", a: "We utilize industrial-grade VPNs, firewalls, and encrypted communication protocols to secure automated panels from unauthorized remote access." }
    ]
  },
  {
    id: "pipeline-engineering",
    title: "Pipeline Engineering",
    icon: "Network",
    category: "Infrastructure",
    shortDesc: "High-pressure piping design, welding, laydowns, and network distribution maps.",
    longDesc: "We execute pipeline engineering projects for water supply, industrial utilities, and chemical transport, specializing in welding, laying, and testing high-pressure pipelines in carbon steel, stainless steel, MS, DI, HDPE, and UPVC.",
    benefits: [
      "Leak-proof, pressure-tested pipe connections with guaranteed lifespan",
      "Optimal diameter selection reduces pressure drops and pump energy usage",
      "Corrosion-resistant material selection and cathodic protection systems",
      "Complete mapping of underground routes using GPS coordinates"
    ],
    features: [
      "TIG, MIG, and SAW welding procedures certified under ASME Section IX",
      "Piping stress analysis using specialized software (CAESAR II)",
      "Trenchless piping execution (Horizontal Directional Drilling) in congested areas",
      "Radiography, ultrasonic, and hydrostatic testing compliance"
    ],
    process: [
      { step: "1", title: "Route Survey & Alignment", desc: "Topographical surveying and drawing pipeline alignment profiles." },
      { step: "2", title: "Hydraulic Calculation", desc: "Calculating pressure losses, water hammer potential, and selecting wall thickness." },
      { step: "3", title: "Trenching & Welding", desc: "Excavating trenches, joint preparation, pipe alignment, welding, and inspection." },
      { step: "4", title: "Hydrotesting & Backfilling", desc: "Pressurizing pipeline to 1.5 times the operating pressure for 24 hours before covering." }
    ],
    faq: [
      { q: "What materials do you recommend for drinking water lines?", a: "Ductile Iron (DI) for municipal trunk mains, and Food-grade High-Density Polyethylene (HDPE) or uPVC for distribution networks." },
      { q: "How do you detect leaks in installed pipelines?", a: "We utilize pressure decay tests, acoustic listening devices, and ultrasonic flow meters to locate hidden pipe leaks." }
    ]
  },
  {
    id: "industrial-utilities",
    title: "Industrial Utilities",
    icon: "Wrench",
    category: "Infrastructure",
    shortDesc: "Boiler, cooling tower, and air systems installation and mechanical pipe hookups.",
    longDesc: "We design and install industrial utility systems, including cooling towers, boiler utility lines, compressed air grids, vacuum piping networks, and heat exchangers. We handle thermal calculations, equipment layout, and mechanical hookups.",
    benefits: [
      "Balanced utility distribution prevents production downtime",
      "Thermal energy recovery systems save heavy fuel costs",
      "Prevents steam condensation issues through layout designs",
      "Engineered layout provides easy access for maintenance"
    ],
    features: [
      "Steam header and distribution manifold fabrication",
      "FRP induced-draft cooling towers with high-efficiency fills",
      "Steam trap audits and condensation recovery networks",
      "Thermal insulation cladding in Rockwool/PUF with Aluminum cover sheets"
    ],
    process: [
      { step: "1", title: "Thermal Load Sizing", desc: "Calculating required TR (Tons of Refrigeration) for cooling or kg/hr steam demands." },
      { step: "2", title: "Utility Plant Layout", desc: "Planning coordinates for boilers, compressors, and cooling towers for safety and ventilation." },
      { step: "3", title: "Mechanical Installation", desc: "Rigging equipment onto foundations and routing utility steam, gas, water, and air lines." },
      { step: "4", title: "Insulation & Commissioning", desc: "Applying thermal insulation to piping and running system efficiency trials." }
    ],
    faq: [
      { q: "Do you offer energy recovery from boiler exhaust?", a: "Yes, we design and install economizers and air preheaters (APH) to recover waste heat from exhaust gases, saving up to 5% fuel." },
      { q: "What is the typical maintenance frequency for cooling towers?", a: "Cooling towers require monthly drift eliminator cleaning, basin blowdowns to manage TDS, and motor alignment inspections." }
    ]
  },
  {
    id: "environmental-monitoring",
    title: "Environmental Monitoring Systems",
    icon: "Monitor",
    category: "Automation Solutions",
    shortDesc: "Continuous Emission Monitoring (CEMS) and online effluent quality monitoring setups linked with government portals.",
    longDesc: "We install and integrate Continuous Emission Monitoring Systems (CEMS) and Continuous Ambient Air Quality Monitoring (CAAQMS) systems, as well as online effluent analyzers. These systems stream live data to state and central pollution control databases.",
    benefits: [
      "Meets CPCB/SPCB mandates for real-time industrial emissions reporting",
      "Provides 24/7 view of emissions to prevent accidental environment violations",
      "High reliability with self-calibrating analytical instruments",
      "Tamper-proof storage and server integrations"
    ],
    features: [
      "Online UV-Vis and colorimetric analyzers for COD, BOD, TSS, pH, and flow",
      "Stack gas analyzers measuring SO2, NOx, CO, CO2, and particulate matter",
      "Secure RTD (Real Time Data) transmitters connected to government servers",
      "Weather-proof analyzer shelters with split air conditioning systems"
    ],
    process: [
      { step: "1", title: "Analyzer Selection", desc: "Specifying instruments compliant with government list of approved technologies." },
      { step: "2", title: "Sample Conditioning Setup", desc: "Installing probes, coolers, and heated sample lines to deliver dry, debris-free sample gas to the analyzer." },
      { step: "3", title: "Calibration & Programming", desc: "Running span gas calibrations and linking outputs to local recorders." },
      { step: "4", title: "Server Integration", desc: "Setting up telemetry to transmit data packets securely to SPCB/CPCB portals." }
    ],
    faq: [
      { q: "Is CEMS mandatory for all factories?", a: "No, it is currently mandatory for 17 categories of highly polluting industries (Red category) such as cement, pulp & paper, distilleries, and power plants." },
      { q: "What is the maintenance routine for effluent analyzers?", a: "They require bi-weekly cleaning of the flow cell, sensor calibration checks, and replenishment of chemical reagents monthly." }
    ]
  },
  {
    id: "custom-engineering-solutions",
    title: "Custom Engineering Solutions",
    icon: "Hammer",
    category: "Services",
    shortDesc: "Tailor-made pilot studies, specialized materials fabrication, and specialized process engineering.",
    longDesc: "When standard systems fall short, our specialized research and engineering team designs and fabricates custom process plants, pilot scale reactors, specialized chemical extraction skids, and systems in exotic metals.",
    benefits: [
      "Custom designs that address unique factory constraints",
      "Allows testing of new processes at pilot-scale before massive capital deployment",
      "Expert metal fabrication ensures safety for high pressure/temperature setups",
      "Intellectual property and proprietary designs kept secure"
    ],
    features: [
      "FEA (Finite Element Analysis) and CFD (Computational Fluid Dynamics) simulations",
      "Exotic metallurgy options: Titanium, Hastelloy, Monel, Stainless Steel 316Ti",
      "Skid-mounted pilot units with flexible instrumentation hooks",
      "Dedicated R&D team with advanced testing laboratory"
    ],
    process: [
      { step: "1", title: "Problem Definition", desc: "Reviewing unique process variables, chemistries, and constraints." },
      { step: "2", title: "Modeling & Simulation", desc: "Drafting CAD designs, testing flows via CFD, and checking thermal stresses." },
      { step: "3", title: "Prototype Fabrication", desc: "Fabricating components in our specialized workshop under strict weld inspections." },
      { step: "4", title: "Performance Evaluation", desc: "Testing the prototype with actual client chemical matrices and optimizing configuration." }
    ],
    faq: [
      { q: "Can you design a pilot system to recover a specific chemical?", a: "Yes, we have designed customized pilot solvent-extraction columns, evaporation loops, and membrane skids for specific chemical separations." },
      { q: "What design codes do you follow for pressure vessels?", a: "We follow ASME Section VIII Div 1 for pressure vessels, and ASME B31.3 for process piping design." }
    ]
  }
];
