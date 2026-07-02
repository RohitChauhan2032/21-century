export const projectsData = [
  {
    id: "proj-01",
    title: "5.0 MLD Sewage Treatment Plant",
    client: "Chandigarh Municipal Corporation",
    location: "Sector 48, Chandigarh, India",
    capacity: "5.0 MLD (Million Litres per Day)",
    industry: "Municipal",
    technology: "MBR (Membrane Bioreactor)",
    status: "Completed",
    year: "2025",
    description: "Design, construction, installation, and commissioning of a state-of-the-art municipal sewage treatment plant with ultrafiltration membrane bioreactors, supplying recycled water for city horticultural irrigation.",
    beforeAfter: {
      before: {
        turbidity: "80 NTU",
        bod: "250 mg/L",
        cod: "450 mg/L",
        tss: "200 mg/L"
      },
      after: {
        turbidity: "< 0.5 NTU",
        bod: "< 5 mg/L",
        cod: "< 20 mg/L",
        tss: "< 2 mg/L"
      }
    },
    highlights: [
      "Zero pathogen count in effluent",
      "Saves 5 Million Litres of fresh groundwater daily",
      "Fully integrated SCADA remote operations control",
      "Odor control bio-scrubber systems installed"
    ]
  },
  {
    id: "proj-02",
    title: "800 KLD Effluent Treatment Plant with ZLD",
    client: "Biochem Pharma India Ltd.",
    location: "Baddi Industrial Area, Himachal Pradesh, India",
    capacity: "800 KLD (Kilo Litres per Day)",
    industry: "Pharmaceutical",
    technology: "Physico-Chemical + MBR + RO + MEE Evaporator",
    status: "Completed",
    year: "2024",
    description: "A complete turnkey Zero Liquid Discharge ETP facility designed to handle complex toxic pharmaceutical waste containing active ingredients, recovering pure water and solid waste salts.",
    beforeAfter: {
      before: {
        turbidity: "120 NTU",
        bod: "1200 mg/L",
        cod: "3500 mg/L",
        tss: "600 mg/L"
      },
      after: {
        turbidity: "< 0.2 NTU",
        bod: "Zero (Undetectable)",
        cod: "< 10 mg/L",
        tss: "Zero (Undetectable)"
      }
    },
    highlights: [
      "98.5% water recovery recycled directly to steam boilers",
      "Separates mixed salts into recyclable sodium chloride and sulfate",
      "Corrosion-proof Titanium MEE tubes to withstand high chloride feeds",
      "Passed all strict audits of the State Pollution Control Board"
    ]
  },
  {
    id: "proj-03",
    title: "1.5 MLD Zero Liquid Discharge Dyeing Waste Plant",
    client: "Apex Texturizers & Dyeing Pvt. Ltd.",
    location: "Ludhiana Textile Cluster, Punjab, India",
    capacity: "1.5 MLD (Million Litres per Day)",
    industry: "Textile",
    technology: "Electrocoagulation + Fenton Reactor + UF + High Recovery RO + Crystallizer",
    status: "Completed",
    year: "2024",
    description: "Design and build of a high-capacity textile wastewater recycling plant, removing complex reactive dyes and recovering Glauber's salt used in the fabric dyeing process.",
    beforeAfter: {
      before: {
        turbidity: "300 NTU",
        bod: "600 mg/L",
        cod: "1800 mg/L",
        tss: "800 mg/L"
      },
      after: {
        turbidity: "< 1 NTU",
        bod: "< 10 mg/L",
        cod: "< 40 mg/L",
        tss: "< 5 mg/L"
      }
    },
    highlights: [
      "Complete removal of color and complex heavy dyes",
      "Recovers Glauber's salt (sodium sulfate) at 90% purity for reuse in dyebaths",
      "Saves over $120,000 annually in fresh water and chemical salt sourcing",
      "Features a Disc-Tube RO (DTRO) system for high recovery"
    ]
  },
  {
    id: "proj-04",
    title: "3000 LPH Demineralization Water System",
    client: "National Thermal Power Grid",
    location: "NTPC Plant, Jhajjar, Haryana, India",
    capacity: "3,000 Litres per Hour",
    industry: "Power Plants",
    technology: "Dual Bed Cation-Anion + Mixed Bed Polisher",
    status: "Completed",
    year: "2023",
    description: "An ultra-pure water plant producing mineral-free water to feed high-pressure boilers, preventing thermal scaling and corrosion on turbine rotors.",
    beforeAfter: {
      before: {
        turbidity: "15 NTU",
        bod: "< 5 mg/L",
        cod: "< 15 mg/L",
        tss: "25 mg/L"
      },
      after: {
        turbidity: "Zero",
        bod: "Zero",
        cod: "Zero",
        tss: "Zero (Conductivity < 0.1 µS/cm)"
      }
    },
    highlights: [
      "Ultra-low electrical conductivity (< 0.1 µS/cm)",
      "Zero silica concentration in outlet stream",
      "Automatic acid/alkali chemical regeneration skids",
      "Integrated Degasification Tower removing dissolved CO2"
    ]
  },
  {
    id: "proj-05",
    title: "1.2 MLD Water Treatment and Softening Grid",
    client: "Prestige Heights Luxury Residences",
    location: "Chandigarh Outskirts, India",
    capacity: "1.2 MLD (Million Litres per Day)",
    industry: "Residential",
    technology: "HRSCC Clarifier + Multi-grade Filters + Ion Exchange Softener",
    status: "Completed",
    year: "2023",
    description: "A centralized water supply purification plant treating raw borewell water, reducing hardness, and delivering softened drinking and utility water to 800 premium apartments.",
    beforeAfter: {
      before: {
        turbidity: "45 NTU",
        bod: "< 2 mg/L",
        cod: "< 10 mg/L",
        tss: "60 mg/L"
      },
      after: {
        turbidity: "< 1 NTU",
        bod: "Zero",
        cod: "Zero",
        tss: "< 1 mg/L (Hardness < 50 mg/L)"
      }
    },
    highlights: [
      "Reduces hardness from 450 mg/L to under 50 mg/L",
      "Prevents scale deposits in residential plumbing and geysers",
      "Dual skid design ensures uninterrupted 24/7 supply during maintenance",
      "Touch-screen HMI control panel for easy estate management operations"
    ]
  },
  {
    id: "proj-06",
    title: "200 KLD Food Processing ETP & Biogas Loop",
    client: "Global Dairy Foods Ltd.",
    location: "Solan, Himachal Pradesh, India",
    capacity: "200 KLD (Kilo Litres per Day)",
    industry: "Food Processing",
    technology: "DAF Clarifier + UASB Anaerobic Digestor + Aerobic Polishing",
    status: "Completed",
    year: "2025",
    description: "Wastewater treatment system for a major milk and dairy processing facility, featuring fat/oil separators, anaerobic biogas capture reactors, and activated sludge biological polishing.",
    beforeAfter: {
      before: {
        turbidity: "150 NTU",
        bod: "2800 mg/L",
        cod: "5500 mg/L",
        tss: "900 mg/L"
      },
      after: {
        turbidity: "< 5 NTU",
        bod: "< 15 mg/L",
        cod: "< 50 mg/L",
        tss: "< 10 mg/L"
      }
    },
    highlights: [
      "99% organic load removal",
      "Captures biogas from biological digestion, offsetting boiler fuel by 15%",
      "Dissolved Air Flotation (DAF) removes milk fat, oils, and greases efficiently",
      "Integrated automatic pH correction loops"
    ]
  }
];
