export const portfolioData = {
  personal: {
    name: "Bodapati Preethi",
    tagline: "Aspiring Data Analyst | AI/ML Enthusiast",
    email: "bodapatipreethi@gmail.com",
    phone: "6303285945",
    linkedin: "https://linkedin.com/in/bodapatipreethi",
    github: "https://github.com/your-username", // Placeholder
    resumeUrl: "https://your-public-link-to-resume.pdf", // Placeholder
  },
  
  about: "Aspiring Data Analyst passionate about turning data into decisions using AI/ML. Skilled in data cleaning, visualization, feature engineering, and exploratory analysis with Python, SQL, and Excel. I enjoy building practical tools, automating workflows, and presenting insights clearly to stakeholders. Currently pursuing a B.E. in AIML (CGPA 8.71/10) and actively participating in hackathons and tech clubs.",
  
  skills: {
    programming: ["Python", "C", "SQL", "HTML", "CSS"],
    tools: ["VS Code", "Jupyter", "Google Colab", "Git", "GitHub", "MySQL"],
    concepts: [
      "Data Structures & Algorithms",
      "OOP",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "EDA",
      "SDLC",
      "Database Management",
      "REST API Development"
    ],
    softSkills: ["Problem-Solving", "Analytical Thinking", "Time Management", "Attention to Detail"]
  },
  
  projects: [
    {
      id: 1,
      title: "Real-Time Currency Converter",
      description: "Python Tkinter app integrating a currency rates API for accurate, real-time conversions. Emphasize input validation, responsive UI, and API error handling.",
      technologies: ["Python", "Tkinter", "REST API"],
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Championship History Tracker",
      description: "SQL backend with a Python GUI to store, query, and display historical championship records. Focus on schema design, indexing, and CRUD operations.",
      technologies: ["Python", "MySQL/SQLite", "SQL"],
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Voice Debugger",
      description: "Prototype tool that accepts voice commands to locate common code issues and suggest fixes. Highlights NLP basics, command parsing, and automated corrections.",
      technologies: ["Python", "Speech/NLP libraries"],
      githubUrl: "#",
      featured: true
    }
  ],
  
  experience: [
    {
      company: "EZ Internship",
      position: "Python Programming Trainee",
      description: "Covered Python fundamentals, core libraries, and starter frameworks through hands-on exercises and mini-projects.",
      type: "Internship"
    },
    {
      company: "Hackathon",
      position: "Co-Developer - Kisan App",
      description: "Co-built a support app for farmers featuring basic forecasting, crop marketing info, and online listings.",
      type: "Project"
    }
  ],
  
  education: {
    degree: "B.E., Artificial Intelligence & Machine Learning",
    institution: "Ballari Institute of Management and Technology",
    duration: "2022–2026",
    cgpa: "8.71/10"
  },
  
  achievements: [
    "Outreach Ambassador – Creative Club (AIML)",
    "Final Round – Hack-B 2025",
    "Member – College Coding Club",
    "Inter-college Quiz Competition Participant"
  ],
  
  certifications: [
    {
      name: "Google Cloud Career Launchpad",
      issuer: "Google Cloud",
      url: "#"
    },
    {
      name: "MongoDB",
      issuer: "GeeksforGeeks",
      url: "#"
    },
    {
      name: "Agentic AI, Gen AI, RL-AI",
      issuer: "Udemy",
      url: "#"
    }
  ]
};

export const navigationItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];