export interface College {

  id: number;

  name: string;

  shortName: string;

  location: string;

  state: string;

  ranking: number;

  fees: string;

  averagePackage: string;

  highestPackage: string;

  nirfRank: number;

  exams: string[];

  courses: string[];

  tags: string[];

  website: string;

  image: string;

  description: string;

}

export const colleges: College[] = [

  {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    location: "New Delhi",
    state: "Delhi",
    ranking: 1,
    nirfRank: 2,
    fees: "₹8.5 Lakhs",
    averagePackage: "₹25 LPA",
    highestPackage: "₹1.2 Cr",
    exams: ["JEE Advanced"],
    courses: ["CSE", "ECE", "Mechanical", "AI"],
    tags: ["Tier 1", "Top Placements", "Research"],
    website: "https://home.iitd.ac.in",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",
    description:
      "One of India's premier engineering institutes with exceptional placements and global recognition.",
  },

  {
    id: 2,
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    location: "Mumbai",
    state: "Maharashtra",
    ranking: 2,
    nirfRank: 3,
    fees: "₹8 Lakhs",
    averagePackage: "₹24 LPA",
    highestPackage: "₹1.5 Cr",
    exams: ["JEE Advanced"],
    courses: ["CSE", "Electrical", "AI", "Civil"],
    tags: ["Tier 1", "Startup Culture", "Research"],
    website: "https://www.iitb.ac.in",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    description:
      "Globally respected IIT known for innovation, entrepreneurship, and elite placements.",
  },

  {
    id: 3,
    name: "BITS Pilani",
    shortName: "BITS Pilani",
    location: "Pilani",
    state: "Rajasthan",
    ranking: 3,
    nirfRank: 20,
    fees: "₹24 Lakhs",
    averagePackage: "₹18 LPA",
    highestPackage: "₹60 LPA",
    exams: ["BITSAT"],
    courses: ["CSE", "ECE", "Mechanical"],
    tags: ["Private Elite", "High ROI"],
    website: "https://www.bits-pilani.ac.in",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    description:
      "Top private engineering institute with strong coding culture and placements.",
  },

  {
    id: 4,
    name: "Delhi Technological University",
    shortName: "DTU",
    location: "Delhi",
    state: "Delhi",
    ranking: 4,
    nirfRank: 29,
    fees: "₹9 Lakhs",
    averagePackage: "₹15 LPA",
    highestPackage: "₹82 LPA",
    exams: ["JEE Main"],
    courses: ["CSE", "IT", "ECE"],
    tags: ["Top Delhi College", "Strong Placements"],
    website: "https://dtu.ac.in",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    description:
      "Premier Delhi engineering college with excellent placement opportunities.",
  },

  {
    id: 5,
    name: "Netaji Subhas University of Technology",
    shortName: "NSUT",
    location: "Delhi",
    state: "Delhi",
    ranking: 5,
    nirfRank: 60,
    fees: "₹9 Lakhs",
    averagePackage: "₹16 LPA",
    highestPackage: "₹1 Cr",
    exams: ["JEE Main"],
    courses: ["CSE", "IT", "AI"],
    tags: ["Coding Culture", "Placements"],
    website: "https://www.nsut.ac.in",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    description:
      "Highly competitive Delhi engineering college with strong coding ecosystem.",
  },

  {
    id: 6,
    name: "VIT Vellore",
    shortName: "VIT",
    location: "Vellore",
    state: "Tamil Nadu",
    ranking: 6,
    nirfRank: 11,
    fees: "₹12 Lakhs",
    averagePackage: "₹9 LPA",
    highestPackage: "₹75 LPA",
    exams: ["VITEEE"],
    courses: ["CSE", "AI", "Cybersecurity"],
    tags: ["Private", "International Exposure"],
    website: "https://vit.ac.in",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    description:
      "Popular private university with huge student network and strong placements.",
  },

  {
    id: 7,
    name: "Manipal Institute of Technology",
    shortName: "MIT Manipal",
    location: "Manipal",
    state: "Karnataka",
    ranking: 7,
    nirfRank: 15,
    fees: "₹18 Lakhs",
    averagePackage: "₹10 LPA",
    highestPackage: "₹54 LPA",
    exams: ["MET"],
    courses: ["CSE", "Data Science", "ECE"],
    tags: ["Campus Life", "Private"],
    website: "https://manipal.edu",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description:
      "Well-known private engineering college with strong alumni network.",
  },

  {
    id: 8,
    name: "Graphic Era Deemed University",
    shortName: "Graphic Era Deemed",
    location: "Dehradun",
    state: "Uttarakhand",
    ranking: 8,
    nirfRank: 62,
    fees: "₹11 Lakhs",
    averagePackage: "₹7 LPA",
    highestPackage: "₹84 LPA",
    exams: ["JEE Main", "Direct Admission"],
    courses: ["CSE", "AI", "Cybersecurity"],
    tags: ["Emerging", "Placements"],
    website: "https://geu.ac.in",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    description:
      "Rapidly growing university known for placements and tech-focused education.",
  },

  {
    id: 9,
    name: "Graphic Era Hill University",
    shortName: "GEHU Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    ranking: 9,
    nirfRank: 89,
    fees: "₹9 Lakhs",
    averagePackage: "₹5.5 LPA",
    highestPackage: "₹44 LPA",
    exams: ["Direct Admission"],
    courses: ["CSE", "AI", "Cloud Computing"],
    tags: ["Affordable", "Growing"],
    website: "https://gehu.ac.in",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0",
    description:
      "Modern private university with strong focus on employability and tech education.",
  },

  {
    id: 10,
    name: "Graphic Era Hill University Haldwani Campus",
    shortName: "GEHU Haldwani",
    location: "Haldwani",
    state: "Uttarakhand",
    ranking: 10,
    nirfRank: 95,
    fees: "₹8 Lakhs",
    averagePackage: "₹4.5 LPA",
    highestPackage: "₹18 LPA",
    exams: ["Direct Admission"],
    courses: ["CSE", "BCA", "AI"],
    tags: ["Affordable", "Regional"],
    website: "https://gehu.ac.in",
    image:
      "https://images.unsplash.com/photo-1568792923760-d70635a89fdc",
    description:
      "Emerging regional campus focused on practical tech education and placements.",
  },

  {
    id: 11,
    name: "Acropolis Institute of Technology and Research",
    shortName: "Acropolis Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    ranking: 11,
    nirfRank: 120,
    fees: "₹5 Lakhs",
    averagePackage: "₹4.2 LPA",
    highestPackage: "₹32 LPA",
    exams: ["JEE Main"],
    courses: ["CSE", "IT", "AI"],
    tags: ["Affordable", "Indore"],
    website: "https://aitr.ac.in",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    description:
      "Popular engineering institute in Indore with improving placement statistics.",
  },
  
{
  id: 12,
  name: "Indian Institute of Technology Madras",
  shortName: "IIT Madras",
  location: "Chennai",
  state: "Tamil Nadu",
  ranking: 12,
  nirfRank: 1,
  fees: "₹8 Lakhs",
  averagePackage: "₹22 LPA",
  highestPackage: "₹1.3 Cr",
  exams: ["JEE Advanced"],
  courses: ["CSE", "AI", "Mechanical"],
  tags: ["Tier 1", "Research", "Top IIT"],
  website: "https://www.iitm.ac.in",
  image:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
  description:
    "India's top-ranked engineering institute with elite research and placements.",
},

{
  id: 13,
  name: "Indian Institute of Technology Kanpur",
  shortName: "IIT Kanpur",
  location: "Kanpur",
  state: "Uttar Pradesh",
  ranking: 13,
  nirfRank: 4,
  fees: "₹8 Lakhs",
  averagePackage: "₹26 LPA",
  highestPackage: "₹1.9 Cr",
  exams: ["JEE Advanced"],
  courses: ["CSE", "Electrical", "AI"],
  tags: ["Tier 1", "Research"],
  website: "https://www.iitk.ac.in",
  image:
    "https://images.unsplash.com/photo-1562774053-701939374585",
  description:
    "Premier IIT with exceptional coding culture and research opportunities.",
},

{
  id: 14,
  name: "National Institute of Technology Trichy",
  shortName: "NIT Trichy",
  location: "Tiruchirappalli",
  state: "Tamil Nadu",
  ranking: 14,
  nirfRank: 9,
  fees: "₹6 Lakhs",
  averagePackage: "₹14 LPA",
  highestPackage: "₹52 LPA",
  exams: ["JEE Main"],
  courses: ["CSE", "ECE", "Mechanical"],
  tags: ["Top NIT", "Placements"],
  website: "https://www.nitt.edu",
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  description:
    "One of the best NITs with strong academics and placements.",
},

{
  id: 15,
  name: "National Institute of Technology Surathkal",
  shortName: "NIT Surathkal",
  location: "Mangalore",
  state: "Karnataka",
  ranking: 15,
  nirfRank: 12,
  fees: "₹6 Lakhs",
  averagePackage: "₹13 LPA",
  highestPackage: "₹54 LPA",
  exams: ["JEE Main"],
  courses: ["CSE", "IT", "ECE"],
  tags: ["Top NIT", "Beach Campus"],
  website: "https://www.nitk.ac.in",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  description:
    "Top-ranked NIT famous for placements and beautiful campus.",
},

{
  id: 16,
  name: "IIIT Hyderabad",
  shortName: "IIIT Hyderabad",
  location: "Hyderabad",
  state: "Telangana",
  ranking: 16,
  nirfRank: 16,
  fees: "₹14 Lakhs",
  averagePackage: "₹28 LPA",
  highestPackage: "₹74 LPA",
  exams: ["UGEE", "JEE Main"],
  courses: ["CSE", "AI", "Data Science"],
  tags: ["AI Focus", "Research"],
  website: "https://www.iiit.ac.in",
  image:
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
  description:
    "Elite institute known for AI, research, and coding excellence.",
},

{
  id: 17,
  name: "IIIT Bangalore",
  shortName: "IIIT Bangalore",
  location: "Bangalore",
  state: "Karnataka",
  ranking: 17,
  nirfRank: 74,
  fees: "₹20 Lakhs",
  averagePackage: "₹16 LPA",
  highestPackage: "₹65 LPA",
  exams: ["JEE Main"],
  courses: ["CSE", "AI", "ECE"],
  tags: ["Research", "Bangalore"],
  website: "https://www.iiitb.ac.in",
  image:
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
  description:
    "Strong industry-linked institute with high placement rates.",
},

{
  id: 18,
  name: "SRM Institute of Science and Technology",
  shortName: "SRM",
  location: "Chennai",
  state: "Tamil Nadu",
  ranking: 18,
  nirfRank: 28,
  fees: "₹18 Lakhs",
  averagePackage: "₹8 LPA",
  highestPackage: "₹57 LPA",
  exams: ["SRMJEEE"],
  courses: ["CSE", "AI", "Cloud Computing"],
  tags: ["Private", "Large Campus"],
  website: "https://www.srmist.edu.in",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  description:
    "Popular private university with massive student ecosystem.",
},

{
  id: 19,
  name: "Thapar Institute of Engineering and Technology",
  shortName: "Thapar",
  location: "Patiala",
  state: "Punjab",
  ranking: 19,
  nirfRank: 20,
  fees: "₹24 Lakhs",
  averagePackage: "₹11 LPA",
  highestPackage: "₹55 LPA",
  exams: ["JEE Main"],
  courses: ["CSE", "AI", "Mechanical"],
  tags: ["Private Elite", "Placements"],
  website: "https://www.thapar.edu",
  image:
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
  description:
    "Well-respected engineering institute with excellent coding culture.",
},

{
  id: 20,
  name: "LNMIIT Jaipur",
  shortName: "LNMIIT",
  location: "Jaipur",
  state: "Rajasthan",
  ranking: 20,
  nirfRank: 85,
  fees: "₹19 Lakhs",
  averagePackage: "₹14 LPA",
  highestPackage: "₹63 LPA",
  exams: ["JEE Main"],
  courses: ["CSE", "ECE", "AI"],
  tags: ["Coding", "Private"],
  website: "https://www.lnmiit.ac.in",
  image:
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0",
  description:
    "Highly respected coding-focused private engineering institute.",
},

{
  id: 21,
  name: "Jadavpur University",
  shortName: "Jadavpur",
  location: "Kolkata",
  state: "West Bengal",
  ranking: 21,
  nirfRank: 10,
  fees: "₹40,000",
  averagePackage: "₹13 LPA",
  highestPackage: "₹1.8 Cr",
  exams: ["WBJEE"],
  courses: ["CSE", "IT", "Electrical"],
  tags: ["Affordable", "ROI"],
  website: "http://www.jaduniv.edu.in",
  image:
    "https://images.unsplash.com/photo-1568792923760-d70635a89fdc",
  description:
    "Legendary engineering university with unmatched ROI and placements.",
},

{
  id: 22,
  name: "Punjab Engineering College",
  shortName: "PEC Chandigarh",
  location: "Chandigarh",
  state: "Chandigarh",
  ranking: 22,
  nirfRank: 87,
  fees: "₹7 Lakhs",
  averagePackage: "₹12 LPA",
  highestPackage: "₹83 LPA",
  exams: ["JEE Main"],
  courses: ["CSE", "AI", "Mechanical"],
  tags: ["Government", "Placements"],
  website: "https://pec.ac.in",
  image:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
  description:
    "Historic government engineering institute with strong placements.",
},

{
  id: 23,
  name: "RV College of Engineering",
  shortName: "RVCE",
  location: "Bangalore",
  state: "Karnataka",
  ranking: 23,
  nirfRank: 96,
  fees: "₹11 Lakhs",
  averagePackage: "₹10 LPA",
  highestPackage: "₹92 LPA",
  exams: ["KCET", "COMEDK"],
  courses: ["CSE", "ISE", "ECE"],
  tags: ["Bangalore", "Placements"],
  website: "https://rvce.edu.in",
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  description:
    "Top Karnataka engineering college with strong tech placements.",
},

{
  id: 24,
  name: "PES University",
  shortName: "PES",
  location: "Bangalore",
  state: "Karnataka",
  ranking: 24,
  nirfRank: 100,
  fees: "₹16 Lakhs",
  averagePackage: "₹9 LPA",
  highestPackage: "₹65 LPA",
  exams: ["PESSAT", "KCET"],
  courses: ["CSE", "AI", "ECE"],
  tags: ["Private", "Tech"],
  website: "https://pes.edu",
  image:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  description:
    "Fast-growing Bangalore university with strong industry links.",
},

{
  id: 25,
  name: "Amity University Noida",
  shortName: "Amity",
  location: "Noida",
  state: "Uttar Pradesh",
  ranking: 25,
  nirfRank: 49,
  fees: "₹16 Lakhs",
  averagePackage: "₹6 LPA",
  highestPackage: "₹32 LPA",
  exams: ["Direct Admission"],
  courses: ["CSE", "AI", "Cybersecurity"],
  tags: ["Private", "Large Campus"],
  website: "https://www.amity.edu",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  description:
    "Large private university with broad course offerings and global exposure.",
}

];