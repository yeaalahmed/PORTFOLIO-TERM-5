import { Project, Skill, Experience, MakeAndTakeItem } from './types';

export const PORTFOLIO_OWNER = "Yeaal Takian Ahmed";
export const PORTFOLIO_TITLE = "Mechanical Engineering Student";
export const PORTFOLIO_EMAIL = "ytahmed@mun.ca";
export const PORTFOLIO_LINKEDIN = "www.linkedin.com/in/yeaal-ahmed";

export const PROJECTS: Project[] = [
  {
    id: '5',
    title: 'Automata',
    description: 'A kinetic automaton exploring mechanical engineering and art by converting rotary motion into rhythmic linear displacement.',
    longDescription: 'This kinetic automaton explores the intersection of mechanical engineering and interactive art by converting manual rotary motion into rhythmic linear displacement. Utilizing a hand-cranked axle and a dual-cam system, the mechanism drives a vertical follower to create the lifelike bobbing and rotation of the central "eye" element. Constructed from cardboard and timber, the project required precise calibration of cam geometry and friction management to ensure fluid movement. This prototype demonstrates my proficiency in mechanical design, material prototyping, and the creative application of classical physics to produce an engaging, tactile user experience.',
    tags: ['Kinematics', 'Rapid Prototyping', 'Mechanism Design', 'Group Work'],
    imageUrl: 'https://drive.google.com/file/d/1Pt6F1xSWGnlqztcPwl8nawvdAtWYsLxx/preview',
    year: '2024',
    category: 'Design',
    videoUrl: 'https://drive.google.com/file/d/1Pt6F1xSWGnlqztcPwl8nawvdAtWYsLxx/preview',
    coverUrl: 'https://drive.google.com/file/d/1xlZ7FNr_zQ2iWUeYKlqHZd7xzv9Xkkji/preview',
    useVideoAsCover: false
  },
  {
    id: '6',
    title: 'Workspace Design and Engineering Visualization',
    description: '3D modeling and visualization of a functional engineering workspace environment.',
    longDescription: 'Designed and visualized a comprehensive engineering workspace tailored for efficiency and ergonomics. This project involved creating detailed 3D models of the environment to simulate spatial flow and equipment placement. Produced a complete set of engineering drawings to verify dimensions and assembly requirements, demonstrating strong capabilities in CAD visualization and technical documentation.',
    tags: ['CAD', 'Visualization', 'Ergonomics', 'Space Planning'],
    imageUrl: '', 
    year: '2025',
    category: 'Design',
    coverUrl: 'https://drive.google.com/file/d/1VDPneO6JxKnnHovFpyU710-aUwXb4yq4/preview',
    drawingsUrl: 'https://drive.google.com/file/d/1vLBDfivUArSb0peBZpEByZ5FLnesQEhn/preview'
  },
  {
    id: '1',
    title: 'Pedal-Powered Alternator Generator',
    description: 'Designed and engineered a pedal-powered generator producing stable electrical output.',
    longDescription: 'Secured $1,400 in funding from Conservation Corps Newfoundland and Labrador (CCNL) by drafting a detailed technical proposal. Engineered the system using a custom bicycle drivetrain and alternator. Developed safety features including guarded moving parts, secure mounting, and insulated wiring for classroom demonstrations.',
    tags: ['Prototyping', 'Grant Writing', 'Safety Design', 'Energy Conversion'],
    imageUrl: '',
    year: '2024',
    category: 'Manufacturing',
    coverUrl: 'https://drive.google.com/file/d/1ZMhNUij-uMbhWKU1rAnc7w7mUIFSuEmN/preview'
  },
  {
    id: '2',
    title: 'Automated Door Crank Mechanism',
    description: 'Kinematic analysis and Onshape modeling of a four-bar linkage system.',
    longDescription: 'Performed kinematic analysis of a four-bar linkage to verify motion profile and design feasibility. Modelled the full mechanism in Onshape with sketches, assemblies, and an animated motion study. Built a Python script to automate kinematic calculations, reducing analysis time by 90%.',
    tags: ['Onshape', 'Python', 'Kinematics', 'Simulation'],
    imageUrl: '',
    year: '2025',
    category: 'Kinematic Analysis',
    pdfUrl: 'https://drive.google.com/file/d/19IU06kO_iwQBKiUFL4mjTJFc4YLfIfCk/view',
    coverUrl: 'https://drive.google.com/file/d/1leUKH9YU4uGBKEaidCp6Pky4YUAzjhLh/preview'
  },
  {
    id: '3',
    title: 'The Disassembly and Manufacturing Process of a Pencil Sharpener',
    description: 'Comprehensive reverse engineering analysis of a mechanical pencil sharpener.',
    longDescription: 'Conducted a complete disassembly of a standard mechanical pencil sharpener to analyze its assembly and manufacturing processes. Documented the bill of materials, identified materials (e.g., Die-cast Zinc, Steel), and mapped out manufacturing steps including injection molding and machining. Produced technical drawings and a full report on the mechanical design efficiency.',
    tags: ['Reverse Engineering', 'Manufacturing', 'Material Analysis', 'Disassembly'],
    imageUrl: '',
    year: '2024',
    category: 'Manufacturing',
    pdfUrl: 'https://drive.google.com/file/d/1bQTLR2ewl2sfFNyFzdd0b99R373HC86s/view',
    coverUrl: 'https://drive.google.com/file/d/1DJ_bFT_tUIZTeoatsytGTtQw_4cnu8nS/preview'
  },
  {
    id: '4',
    title: 'Handbook on NDT techniques',
    description: 'Standardized technical guidebook for Non-Destructive Testing procedures.',
    longDescription: 'Produced a comprehensive 31-page guidebook standardizing Non-Destructive Testing (NDT) techniques including MPT, DPT, UT, and RT. This resource consolidated inspection scopes and technical guidelines to ensure regulatory compliance, support maintenance planning, and verify structural integrity of critical equipment.',
    tags: ['Technical Writing', 'NDT', 'Standardization', 'Quality Control'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    year: '2025',
    category: 'Manufacturing',
    pdfUrl: 'https://drive.google.com/file/d/1GqSScp1FtQzUbp3Ch9VgRcNsI3I8i5hm/view'
  }
];

export const MAKE_AND_TAKES: MakeAndTakeItem[] = [
  {
    id: 'mt2',
    title: 'Assembly Detail',
    description: 'Close-up view of mechanical assembly.',
    imageUrl: 'https://drive.google.com/file/d/10lhwoVaWLUjPBspS62mHqPozDMnD3Y_M/preview',
    tags: ['Assembly', 'Mechanical']
  },
  {
    id: 'mt3',
    title: 'Component Fit',
    description: 'Testing fit tolerances on custom parts.',
    imageUrl: 'https://drive.google.com/file/d/1XlsYfLFhjLOELbEII4gE_NlXnz4KpUPT/preview',
    tags: ['Tolerancing', 'Fitting']
  },
  {
    id: 'mt4',
    title: 'Material Prep',
    description: 'Raw materials prepped for machining.',
    imageUrl: 'https://drive.google.com/file/d/14YXVYF6zSxtrj57p6wSSICU-IjqaRwEZ/preview',
    tags: ['Materials', 'Prep']
  },
  {
    id: 'mt5',
    title: 'Design Iteration',
    description: 'Mid-process design modification.',
    imageUrl: 'https://drive.google.com/file/d/1uILrlOg369OZ3DbjkpKbQk2C1Z2m4Gss/preview',
    tags: ['Iteration', 'Design']
  },
  {
    id: 'mt6',
    title: 'Frame Construction',
    description: 'Building the structural support system.',
    imageUrl: 'https://drive.google.com/file/d/1DhBZCNsxKRX5URu6LPya3zkeyE_MvciT/preview',
    tags: ['Structure', 'Build']
  },
  {
    id: 'mt7',
    title: 'Linkage Test',
    description: 'Initial motion test of linkages.',
    imageUrl: 'https://drive.google.com/file/d/1Ry-RSXuDnQxcvNVeSglzGi-bEM5UvAYX/preview',
    tags: ['Testing', 'Kinematics']
  },
  {
    id: 'mt8',
    title: 'Workshop View',
    description: 'Current workspace setup and tools.',
    imageUrl: 'https://drive.google.com/file/d/1KaBm2sdcMIuaaeKnbrPCdLLn2LRo1Nw0/preview',
    tags: ['Workshop', 'Tools']
  },
  {
    id: 'mt9',
    title: 'Finishing Touches',
    description: 'Surface finishing and polishing.',
    imageUrl: 'https://drive.google.com/file/d/1srqQm_zI5A9v1r6Y-pQUOMgndoNojBcx/preview',
    tags: ['Finishing', 'Detail']
  },
  {
    id: 'mt10',
    title: 'Final Assembly',
    description: 'Completed assembly ready for review.',
    imageUrl: 'https://drive.google.com/file/d/1g1JUyU1oS4FqyakEL2u7Q9AC6Tsv_kgu/preview',
    tags: ['Final', 'Complete']
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Community Service Work Term",
    company: "St. Matthew's School",
    details: [
      "Led engineering project planning, estimated materials, and organized schedules.",
      "Provided engineering support with mechanical/electrical design and component selection.",
      "Secured over $2,000 in grants by researching opportunities and preparing proposals."
    ]
  },
  {
    role: "NDT Technician",
    company: "Bureau Veritas Group",
    details: [
      "Conducted NDT techniques (MPT, DPT, UT, RT) for early defect detection.",
      "Conducted load tests on overhead cranes/lifts to 6-10 tons ensuring safety compliance.",
      "Produced a 31-page NDT guidebook to standardize inspection procedures."
    ]
  },
  {
    role: "Key Holder",
    company: "Tip Top (Tailors since 1909)",
    details: [
      "Supervised staff, delegated tasks, and ensured smooth store operations.",
      "Increased store revenue by $200,000 over 16 months through exceptional service."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Onshape', level: 90, category: 'CAD/CAE' },
  { name: 'AutoCAD', level: 80, category: 'CAD/CAE' },
  { name: 'Python', level: 85, category: 'Programming' },
  { name: '3D Printing', level: 85, category: 'Manufacturing' },
  { name: 'Project Management', level: 75, category: 'Management' },
  { name: 'NDT (MPT, DPT, UT, RT)', level: 80, category: 'Testing' },
  { name: 'Microsoft 365', level: 90, category: 'Software' },
  { name: 'WHMIS', level: 100, category: 'Certifications' },
  { name: 'Tech Stewardship', level: 100, category: 'Certifications' },
];