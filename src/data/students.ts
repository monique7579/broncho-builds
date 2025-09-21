import henilProfile from "@/assets/henil-profile.jpg";

export interface Student {
  id: string;
  name: string;
  major: string;
  gradYear: number;
  bio: string;
  skills: string[];
  profileImage: string;
  links: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  stlrTenets: string[];
  fullBio?: string;
}

export const sampleStudents: Student[] = [
  {
    id: "henil-patel",
    name: "Henil Patel",
    major: "MSc Computer Science Graduate",
    gradYear: 2025,
    bio: "Driven by curiosity and a love for scalable systems, Henil blends full-stack engineering with a passion for impactful product design. His journey through internships at Amazon and JPMorgan Chase shaped his understanding of secure, user-centered development.",
    fullBio: "Driven by curiosity and a love for scalable systems, Henil blends full-stack engineering with a passion for impactful product design. His journey through internships at Amazon and JPMorgan Chase shaped his understanding of secure, user-centered development.\n\nThroughout his master's program at UCO, Henil has focused on building robust systems that scale while maintaining exceptional user experiences. His work spans from backend architecture using Rust and Python to modern frontend development with React and TypeScript.\n\nHenil's approach to problem-solving combines technical excellence with user empathy, ensuring that every solution not only works efficiently but also serves real human needs. His experience in the industry has taught him the importance of secure, maintainable code and collaborative development practices.",
    skills: ["Python", "C++", "ReactJS", "Rust", "System Design"],
    profileImage: henilProfile,
    links: {
      linkedin: "https://linkedin.com/in/henilpatel",
      github: "https://github.com/henilpatel",
      portfolio: "https://henilpatel.dev"
    },
    stlrTenets: ["leadership", "research", "global-cultural"]
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    major: "Digital Marketing & Communications",
    gradYear: 2024,
    bio: "Creative strategist passionate about data-driven marketing and community building. Sarah combines analytical thinking with creative problem-solving to develop campaigns that resonate with diverse audiences.",
    skills: ["Digital Marketing", "Data Analytics", "UX Research", "Content Strategy", "Social Media"],
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612e29c?w=400&h=400&fit=crop&crop=face",
    links: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      portfolio: "https://sarahjohnson.design"
    },
    stlrTenets: ["leadership", "community-engagement", "experiential-learning"]
  },
  {
    id: "marcus-rodriguez",
    name: "Marcus Rodriguez",
    major: "Cybersecurity & Information Assurance",
    gradYear: 2025,
    bio: "Ethical hacker and security researcher focused on protecting digital infrastructure. Marcus combines technical expertise with a deep understanding of risk management to create comprehensive security solutions.",
    skills: ["Cybersecurity", "Penetration Testing", "Risk Assessment", "Python", "Network Security"],
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    links: {
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      github: "https://github.com/mrodriguez"
    },
    stlrTenets: ["research", "experiential-learning"]
  },
  {
    id: "aisha-patel",
    name: "Aisha Patel",
    major: "Data Science & Analytics",
    gradYear: 2024,
    bio: "Data storyteller who transforms complex datasets into actionable insights. Aisha's interdisciplinary approach combines statistical modeling with business strategy to drive informed decision-making.",
    skills: ["Machine Learning", "Python", "R", "Tableau", "Statistical Analysis", "Data Visualization"],
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    links: {
      linkedin: "https://linkedin.com/in/aishapatel",
      github: "https://github.com/aishapatel",
      portfolio: "https://aishapatel.data"
    },
    stlrTenets: ["research", "global-cultural", "experiential-learning"]
  },
  {
    id: "james-chen",
    name: "James Chen",
    major: "Mobile App Development",
    gradYear: 2025,
    bio: "iOS and Android developer passionate about creating inclusive mobile experiences. James focuses on accessibility and performance optimization to ensure apps work seamlessly for all users.",
    skills: ["Swift", "Kotlin", "React Native", "Mobile UI/UX", "Accessibility", "Performance Optimization"],
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    links: {
      linkedin: "https://linkedin.com/in/jameschen",
      github: "https://github.com/jameschen"
    },
    stlrTenets: ["experiential-learning", "community-engagement"]
  },
  {
    id: "elena-vasquez",
    name: "Elena Vasquez",
    major: "Human-Computer Interaction",
    gradYear: 2024,
    bio: "UX researcher and designer dedicated to creating technology that empowers communities. Elena's work focuses on participatory design and ensuring technology serves diverse user needs.",
    skills: ["UX Research", "Design Thinking", "Prototyping", "User Testing", "Accessibility", "Figma"],
    profileImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    links: {
      linkedin: "https://linkedin.com/in/elenavasquez",
      portfolio: "https://elenavasquez.design"
    },
    stlrTenets: ["community-engagement", "global-cultural", "research"]
  }
];