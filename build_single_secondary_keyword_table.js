const fs = require('fs');

const keywordsData = [
    { kw: "car window tinting dubai", sv: 1300, sd: 30, pd: 81, cpc: "$16.29", topic: "Car Window Tinting Dubai: Costs, Rules & Best Tint Brands", sec: "best car window tinting dubai" },
    { kw: "car battery replacement dubai", sv: 1000, sd: 19, pd: 66, cpc: "$43.15", topic: "Car Battery Replacement Dubai: 24/7 Emergency Doorstep Service", sec: "car electrical repair dubai" },
    { kw: "car wrapping dubai", sv: 880, sd: 37, pd: 79, cpc: "$26.31", topic: "Car Wrapping Dubai: Vinyl Wrap Costs, Colors, PPF & Legal Rules", sec: "best car wrapping dubai" },
    { kw: "car detailing in dubai", sv: 720, sd: 35, pd: 88, cpc: "$18.90", topic: "Car Detailing in Dubai: Interior, Exterior & Engine Wash Packages", sec: "car detailing dubai cost" },
    { kw: "best car window tinting dubai", sv: 590, sd: 31, pd: 85, cpc: "$14.80", topic: "Best Car Window Tinting Dubai: Top 10 Centers Compared (2026)", sec: "best car tint brands uae" },
    { kw: "how to find car paint code", sv: 590, sd: 26, pd: 12, cpc: "$0.00", topic: "How to Find Car Paint Code: Step-by-Step Guide for All Brands", sec: "car painting service dubai" },
    { kw: "best car wrapping dubai", sv: 480, sd: 33, pd: 82, cpc: "$16.50", topic: "Best Car Wrapping Dubai: Top Studios for Satin, Gloss & Matte Wraps", sec: "car wrap vs car paint" },
    { kw: "car polish vs wax", sv: 480, sd: 30, pd: 25, cpc: "$0.80", topic: "Car Polish vs Wax: Differences, Paint Protection & Which You Need", sec: "car wax vs car polish" },
    { kw: "uae car window tinting rules", sv: 390, sd: 22, pd: 60, cpc: "$5.80", topic: "UAE Car Window Tinting Rules: Legal Tint Percentage & Fines", sec: "35 vs 20 window tint" },
    { kw: "car ac repair dubai", sv: 320, sd: 23, pd: 57, cpc: "$35.33", topic: "Car AC Repair Dubai: Fast Gas Refill & Cooling System Fix", sec: "car cooling system repair dubai" },
    { kw: "car mechanic dubai", sv: 320, sd: 30, pd: 54, cpc: "$12.76", topic: "Best Car Mechanic Dubai: Auto Repair Workshop for Luxury Cars", sec: "car engine repair dubai" },
    { kw: "car wax vs car polish", sv: 320, sd: 28, pd: 20, cpc: "$0.60", topic: "Car Wax vs Car Polish: How to Protect Your Vehicle Paint in UAE", sec: "car polish vs wax" },
    { kw: "car wrap vs car paint", sv: 320, sd: 25, pd: 35, cpc: "$4.10", topic: "Car Wrap vs Car Paint: Cost, Durability & Resale Value Guide", sec: "peelable paint vs wrap" },
    { kw: "best car tint brands uae", sv: 260, sd: 23, pd: 70, cpc: "$9.40", topic: "Best Car Tint Brands UAE: 3M, Xpel & Ceramic Window Tint Guide", sec: "carbon vs ceramic tint" },
    { kw: "carbon vs ceramic tint", sv: 260, sd: 21, pd: 35, cpc: "$2.10", topic: "Carbon vs Ceramic Tint: Heat Rejection, Price & Visibility Compared", sec: "35 vs 20 window tint" },
    { kw: "benefits of car detailing", sv: 210, sd: 25, pd: 40, cpc: "$1.50", topic: "Top 7 Benefits of Car Detailing for Preserving Your Vehicle Value", sec: "car detailing in dubai" },
    { kw: "best paint protection film brands", sv: 210, sd: 24, pd: 60, cpc: "$6.20", topic: "Best Paint Protection Film Brands in Dubai: STEK, Xpel & SunTek", sec: "paint protection film dubai ppf" },
    { kw: "car interior cleaning dubai", sv: 210, sd: 31, pd: 86, cpc: "$11.62", topic: "Car Interior Cleaning Dubai: Deep Steam & Leather Sanitization", sec: "car carpet cleaning dubai" },
    { kw: "car polishing dubai", sv: 210, sd: 41, pd: 90, cpc: "$11.84", topic: "Car Polishing Dubai: Paint Correction & Scratch Removal Studio", sec: "car scratch repair dubai" },
    { kw: "car rim repair dubai", sv: 210, sd: 29, pd: 78, cpc: "$13.33", topic: "Car Rim Repair Dubai: Alloy Wheel Straightening & Rim Restoration", sec: "car rim painting dubai" },
    { kw: "car upholstery dubai", sv: 210, sd: 38, pd: 80, cpc: "$14.82", topic: "Car Upholstery Dubai: Custom Leather Seats & Interior Restoration", sec: "seat upholstery dubai" },
    { kw: "pre purchase car inspection dubai", sv: 210, sd: 33, pd: 90, cpc: "$14.54", topic: "Pre Purchase Car Inspection Dubai: 150-Point Used Car Check Service", sec: "car computer diagnostic dubai" },
    { kw: "uv protection for car windows", sv: 210, sd: 24, pd: 40, cpc: "$2.50", topic: "UV Protection for Car Windows: Block 99% Harmful Sun Rays", sec: "car window tinting dubai" },
    { kw: "35 vs 20 window tint", sv: 170, sd: 14, pd: 10, cpc: "$0.00", topic: "35 vs 20 Window Tint: Heat Rejection, Legal Limits & Night Clarity", sec: "uae car window tinting rules" },
    { kw: "car detailing dubai cost", sv: 140, sd: 28, pd: 75, cpc: "$12.40", topic: "Car Detailing Dubai Cost: Complete Package Price List (2026)", sec: "car detailing in dubai" },
    { kw: "ceramic coating maintenance", sv: 140, sd: 20, pd: 30, cpc: "$1.20", topic: "Ceramic Coating Maintenance: How to Wash & Extend Protection Life", sec: "ceramic coating aftercare" },
    { kw: "ceramic coating explained", sv: 110, sd: 17, pd: 18, cpc: "$0.00", topic: "Ceramic Coating Explained: How Nano Technology Protects Paint", sec: "nano ceramic coating protection" },
    { kw: "g63 body kits mercedes g class", sv: 110, sd: 22, pd: 55, cpc: "$7.20", topic: "G63 Body Kits Mercedes G Class: Custom Upgrades in Dubai", sec: "car body kits dubai" },
    { kw: "car ceramic coating dubai", sv: 90, sd: 9, pd: 75, cpc: "$19.04", topic: "Car Ceramic Coating Dubai: 9H Hardness Paint Protection Studio", sec: "ceramic coating vs ppf dubai" },
    { kw: "ceramic coating aftercare", sv: 90, sd: 16, pd: 25, cpc: "$0.90", topic: "Ceramic Coating Aftercare: Do's and Don'ts After Paint Protection", sec: "ceramic coating maintenance" },
    { kw: "flood car repair dubai", sv: 90, sd: 15, pd: 45, cpc: "$18.50", topic: "Flood Car Repair Dubai: Water Damage & Electrical Restoration", sec: "car electrical repair dubai" },
    { kw: "nano ceramic coating protection", sv: 90, sd: 18, pd: 50, cpc: "$3.40", topic: "Nano Ceramic Coating Protection: Hydrophobic Gloss & UV Shield", sec: "car ceramic coating dubai" },
    { kw: "types of car upholstery", sv: 90, sd: 18, pd: 22, cpc: "$0.00", topic: "Types of Car Upholstery: Leather, Nappa, Alcantara & Vinyl Compared", sec: "car upholstery dubai" },
    { kw: "ceramic coating vs ppf dubai", sv: 70, sd: 16, pd: 82, cpc: "$14.20", topic: "Ceramic Coating vs PPF Dubai: Which Paint Protection Should You Get?", sec: "car ceramic coating dubai" },
    { kw: "car upholstery cleaning and repair", sv: 70, sd: 20, pd: 48, cpc: "$5.00", topic: "Car Upholstery Cleaning and Repair: Leather & Fabric Care Guide", sec: "car leather upholstery repair" },
    { kw: "car seat upholstery cost uae", sv: 50, sd: 19, pd: 65, cpc: "$8.10", topic: "Car Seat Upholstery Cost UAE: Leather Retrofitting Price Guide", sec: "seat upholstery dubai" },
    { kw: "luxury car paint color ideas", sv: 50, sd: 15, pd: 10, cpc: "$0.00", topic: "Luxury Car Paint Color Ideas: Top Custom Satin & Gloss Colors", sec: "how to find car paint code" },
    { kw: "car customization dubai", sv: 40, sd: 39, pd: 84, cpc: "$6.39", topic: "Car Customization Dubai: Body Kits, Custom Interior & Tuning Studio", sec: "car modification shop dubai" },
    { kw: "car dent repair dubai", sv: 40, sd: 32, pd: 89, cpc: "$33.77", topic: "Car Dent Repair Dubai: Paintless Dent Removal (PDR) Service", sec: "car scratch repair dubai" },
    { kw: "clean mercedes leather seats", sv: 40, sd: 11, pd: 5, cpc: "$0.00", topic: "How to Clean Mercedes Leather Seats Without Damaging Leather", sec: "leather car seat scratch repair" },
    { kw: "brake pad replacement dubai", sv: 30, sd: 32, pd: 88, cpc: "$20.99", topic: "Brake Pad Replacement Dubai: Quick Disc Brake Refacing Workshop", sec: "car brake repair dubai" },
    { kw: "car engine repair dubai", sv: 30, sd: 10, pd: 14, cpc: "$0.00", topic: "Car Engine Repair Dubai: Major Overhaul & Diagnostic Specialists", sec: "car engine oil change dubai" },
    { kw: "car interior repair dubai", sv: 30, sd: 35, pd: 99, cpc: "$16.71", topic: "Car Interior Repair Dubai: Dashboard, Console & Leather Fix Studio", sec: "car dashboard repair dubai" },
    { kw: "car scratch repair dubai", sv: 30, sd: 30, pd: 83, cpc: "$23.32", topic: "Car Scratch Repair Dubai: Express Paint Touch Up & Polishing", sec: "car dent repair dubai" },
    { kw: "how to get amg exhaust sound", sv: 30, sd: 13, pd: 8, cpc: "$0.00", topic: "How to Get AMG Exhaust Sound: Exhaust Tuning & Downpipe Guide", sec: "car exhaust system installation" },
    { kw: "luxury car customization trends", sv: 30, sd: 14, pd: 15, cpc: "$0.00", topic: "Luxury Car Customization Trends: Forged Carbon & Starlight Roofs", sec: "starlight headliner star roof car" },
    { kw: "car electrical repair dubai", sv: 20, sd: 16, pd: 36, cpc: "$0.00", topic: "Car Electrical Repair Dubai: Auto Wiring & ECU Repair Specialists", sec: "car battery replacement dubai" },
    { kw: "car seat repair dubai", sv: 20, sd: 35, pd: 99, cpc: "$11.66", topic: "Car Seat Repair Dubai: Leather Tear & Upholstery Re-stitching", sec: "leather car seat repair dubai" },
    { kw: "car suspension repair dubai", sv: 20, sd: 21, pd: 53, cpc: "$0.00", topic: "Car Suspension Repair Dubai: Shock Absorber & Bushing Fix", sec: "tyre balancing wheel alignment dubai" },
    { kw: "peelable paint vs wrap", sv: 20, sd: 12, pd: 15, cpc: "$0.00", topic: "Peelable Paint vs Wrap: Liquid Protection vs Vinyl Wrap Guide", sec: "car wrap vs car paint" },
    { kw: "brake caliper painting dubai", sv: 10, sd: 8, pd: 91, cpc: "$9.66", topic: "Brake Caliper Painting Dubai: High-Heat Custom Color Coating", sec: "car rim repair dubai" },
    { kw: "car body kits dubai", sv: 10, sd: 15, pd: 33, cpc: "$0.00", topic: "Car Body Kits Dubai: Aerodynamic Bumper & Spoiler Installation", sec: "g63 body kits mercedes g class" },
    { kw: "car brake repair dubai", sv: 10, sd: 9, pd: 11, cpc: "$0.00", topic: "Car Brake Repair Dubai: Brake Fluid Flush & Inspection Workshop", sec: "brake pad replacement dubai" },
    { kw: "car carpet cleaning dubai", sv: 10, sd: 36, pd: 100, cpc: "$0.00", topic: "Car Carpet Cleaning Dubai: Deep Steam Extraction & Stain Removal", sec: "car interior cleaning dubai" },
    { kw: "car computer diagnostic dubai", sv: 10, sd: 5, pd: 1, cpc: "$0.00", topic: "Car Computer Diagnostic Dubai: OBD Scan & Fault Code Reset", sec: "car scanning diagnostics dubai" },
    { kw: "car door leather repair", sv: 10, sd: 5, pd: 1, cpc: "$0.00", topic: "Car Door Leather Repair: Fix Door Panel Tears & Scratches", sec: "car interior repair dubai" },
    { kw: "car engine oil change dubai", sv: 10, sd: 5, pd: 1, cpc: "$0.00", topic: "Car Engine Oil Change Dubai: Fast Synthetic Oil & Filter Service", sec: "car mechanic dubai" },
    { kw: "car headlight restoration dubai", sv: 10, sd: 18, pd: 43, cpc: "$0.00", topic: "Car Headlight Restoration Dubai: Clear Oxidation & UV Coating", sec: "car polishing dubai" },
    { kw: "car leather rip repair", sv: 10, sd: 5, pd: 1, cpc: "$0.00", topic: "Car Leather Rip Repair: How to Fix Torn Leather Car Seats", sec: "leather car seat repair dubai" },
    { kw: "car leather steering wheel repair", sv: 10, sd: 36, pd: 100, cpc: "$0.00", topic: "Car Leather Steering Wheel Repair: Re-stitching & Leather Renewal", sec: "car door leather repair" },
    { kw: "car leather upholstery repair", sv: 10, sd: 33, pd: 93, cpc: "$0.00", topic: "Car Leather Upholstery Repair: Re-dyeing & Seat Crack Fix", sec: "car seat repair dubai" },
    { kw: "car rust proofing dubai", sv: 10, sd: 24, pd: 62, cpc: "$0.00", topic: "Car Rust Proofing Dubai: Underbody Anti-Corrosion Protection", sec: "car scratch repair dubai" },
    { kw: "car sound proofing dubai", sv: 10, sd: 31, pd: 85, cpc: "$10.47", topic: "Car Sound Proofing Dubai: Cabin Insulation & Noise Dampening", sec: "car interior repair dubai" },
    { kw: "car timing belt replacement", sv: 10, sd: 7, pd: 6, cpc: "$0.00", topic: "Car Timing Belt Replacement: Symptoms, Intervals & Cost Guide", sec: "car engine repair dubai" },
    { kw: "car transmission repair dubai", sv: 10, sd: 5, pd: 1, cpc: "$0.00", topic: "Car Transmission Repair Dubai: Automatic Gearbox Rebuild Workshop", sec: "gearbox oil change dubai" },
    { kw: "leather car seat scratch repair", sv: 10, sd: 5, pd: 1, cpc: "$0.00", topic: "Leather Car Seat Scratch Repair: DIY Kits vs Professional Fix", sec: "clean mercedes leather seats" },
    { kw: "seat upholstery dubai", sv: 10, sd: 44, pd: 100, cpc: "$0.00", topic: "Seat Upholstery Dubai: Custom Leather Recovers & Refurbishment", sec: "car upholstery dubai" }
];

let md = `### 🎯 Clean Content Strategy Table (Single Relevant Secondary Keyword Per Topic)\n\n`;
md += `| # | Proposed Article Title (H1) | Focus Keyword (Primary Target) | Secondary Keyword (1 Best LSI Match) | Search Volume | SEO Difficulty (SD) | CPC (USD) |\n`;
md += `|---|---|---|---|:---:|:---:|:---:|\n`;

keywordsData.forEach((item, idx) => {
    md += `| ${idx + 1} | **${item.topic}** | **${item.kw}** | \`${item.sec}\` | **${item.sv.toLocaleString()}** | ${item.sd} | ${item.cpc} |\n`;
});

fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\single_secondary_keyword_table.md', md, 'utf-8');
console.log(`Generated ${keywordsData.length} topics with 1 secondary keyword each.`);
