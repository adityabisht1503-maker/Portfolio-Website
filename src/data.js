// =============================================================================
// EDIT THIS FILE — everything on the site is driven from here.
// =============================================================================

export const profile = {
  name: "Aditya Bisht",
  role: "Full Stack Web Developer",
  kicker: "Portfolio",
  headline: "I build things,\nand write about them.",
  subline:
    "Passionate Full Stack Web developer specializing in React, Node.js, and full-stack web development. Currently pursuing B.Tech in Computer Science at ITM University, Gwalior.",
  location: "Gwalior, India",
  email: "adityabisht1503@gmail.com",
  github: "https://github.com/adityabisht1503-maker",
  linkedin: "https://www.linkedin.com/in/aditya-bisht-520a38333/",
  twitter: "https://x.com/XInsaneX373404",
  Leetcode: "https://leetcode.com/u/adityabisht9165/",
  resumeUrl: "/resume.pdf", 
};

export const stats = [
  { num: "10+", label: "Projects" },
  { num: "5", label: "Deployed" },
  
];

export const about = {
  paragraphs: [
    "Passionate Full Stack Web developer specializing in React, Node.js, and full-stack web development. Currently pursuing B.Tech in Computer Science at ITM University, Gwalior.",
  ],
  facts: [
    { label: "Based in", value: "Gwalior, India" },
    { label: "Currently", value: "Open to new opportunities" },
    { label: "Focus", value: "Web development & Software Developer" },
    { label: "Reach me at", value: "adityabisht1503@gmail.com" },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "c", level: 90 },
      { name: "C++", level: 75 },
      { name: "Java", level: 60 },
      {name: "Javascript", level: 75},
    ],
  },
  {
    title: "Frontend",
    skills: [
       { name: "HTML", level: 70 },
          { name: "CSS", level: 70 },
      { name: "React", level: 90 },
      { name: "tailwind", level: 80 },
     
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "MongoDB / SQL", level: 75 },
      { name: "Git & CI/CD", level: 80 },
        { name: "Bootstrap", level: 80 },
    ],
  },
];

export const achievements = [
  {
    icon: "Code2",
    value: 10,
    suffix: "+",
    label: "Full-Stack Web Apps",
    description:
      "Designed, built, and deployed full-stack applications with React, Node.js, Express, and MongoDB/SQL — from auth systems to AI-powered tools.",
  },
  {
    icon: "Trophy",
    value: 500,
    suffix: "+",
    label: "LeetCode Problems Solved",
    description:
      "Solved 500+ data structures & algorithms problems on LeetCode, sharpening problem-solving speed and coding fundamentals.",
  },
  {
    icon: "Rocket",
    value: 5,
    suffix: "",
    label: "Live Deployments",
    description:
      "Shipped and deployed production-ready projects that are live, working, and usable by real people.",
  },
  {
    icon: "Layers",
    value: 3,
    suffix: "+",
    label: "Tech Stacks",
    description:
      "Comfortable across the MERN stack, PostgreSQL, and modern tooling for scalable, real-world web development.",
  },
];

export const projects = [
  {
    title: "Quiz Application",
    description:
      "A full-stack quiz platform that enables users to register, log in, and participate in quizzes through a secure and responsive interface. The application includes authentication, session management, and anti-cheat mechanisms to provide a fair and reliable quiz experience.",
    tags: ["React", "Node.js", "MongoDB"],
    live: "https://quiz-web-ruby-gamma.vercel.app/",
    code: "https://github.com/adityabisht1503-maker/QuizWeb",
  },
  {
    title: "HR Management System",
    description:
      "A full-stack HR Management System designed to streamline employee management through secure authentication, role-based access control, leave management, and AI-powered HR assistance. The platform provides an efficient and scalable solution for managing employees and HR workflows.",
    tags: ["React", "Express", "PostgreSQL"],
    live: "https://hr-mangement-system-three.vercel.app/",
    code: "https://github.com/adityabisht1503-maker/HR-mangement-system",
  },
  {
    title: "Resume Analyser",
    description:
     "An AI-powered Resume Checker that helps users analyze and improve their resumes by providing intelligent feedback, identifying weaknesses, and suggesting improvements. The application combines a modern React frontend with a secure Node.js backend to deliver a fast and user-friendly experience."

,
    tags: ["JavaScript", "API", "CSS"],
    live: "https://resume-checker-fawn.vercel.app/",
    code: "https://github.com/adityabisht1503-maker/resume-checker",
  },
   {
    title: "Resume Analyser",
    description:
     "A full-stack Virtual File System that enables users to securely upload, organize, view, and download files using cloud storage integration. The application features user authentication, session management, and personal file isolation, providing a seamless and secure cloud-based file management experience."

,
    tags: ["JavaScript", "API", "CSS"],
    live: "https://virtual-file-system-beryl.vercel.app/",
    code: "https://github.com/adityabisht1503-maker/Virtual-file-system",
  },
];




export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
