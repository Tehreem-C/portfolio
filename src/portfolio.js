/* ========================================
   portfolio.js — All-in-One (Option 1)  
   Works with Saad-based DeveloperFolio template
======================================== */

export const splashScreen = {
  enabled: false, // disable lottie animations
};

export const greeting = {
  username: "Tehreem Mirza",
  title: "Hi, I’m Tehreem",
  subTitle: "Frontend Developer building React-based web apps.",
  displayGreeting: true,
};

export const socialMediaLinks = {
  github: "https://github.com/tehreem-c",
  linkedin: "https://www.linkedin.com/in/tehreem-mirza-60b913287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  gmail: "tehreemmiirza182gmai.com", // <- **replace with YOUR email here**
  display: true,
};

export const skillsSection = {
  title: "What I do",
  subTitle: "React JS · API Integration · Responsive Design",
  skills: [
    "⚡ Build single-page applications using React",
    "⚡ Use public APIs for data fetching",
    "⚡ Create mobile-responsive UIs",
  ],
  softwareSkills: [
    { skillName: "HTML5" },
    { skillName: "CSS3" },
    { skillName: "JavaScript" },
    { skillName: "ReactJS" },
    { skillName: "Git" },
  ],
  display: true,
};

export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "COMSATS University Islamabad",
      subHeader: "BS Computer Science",
      duration: "2020 – Present",
    },
  ],
};

export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Frontend Intern",
      company: "The Nixus Code & Connect",
      date: "May 2025 – Present",
      desc:
        "Working with React to develop UI components and integrate APIs.",
    },
  ],
};

export const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "HTML/CSS", progressPercentage: "90%" },
    { Stack: "JavaScript", progressPercentage: "80%" },
    { Stack: "React", progressPercentage: "75%" },
    { Stack: "Version Control", progressPercentage: "70%" },
  ],
  displayCodersrank: false,
  display: true,
};

export const openSource = {
  showGithubProfile: true,
  githubUserName: "tehreem-c",
  display: true,
};

export const bigProjects = {
  title: "Projects",
  subtitle: "Major personal projects",
  projects: [
    {
      projectName: "RecipeHub",
      projectDesc:
        "A platform to browse and share recipes. Built with React & Firebase.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/tehreem-c/RecipeHub",
        },
        {
          name: "Live Site",
          url: "https://dazzling-cucurucho-6ec7d1.netlify.app/",
        },
      ],
    },
    {
      projectName: "Shop App",
      projectDesc:
        "An online shop frontend built using React with dummy product data.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/tehreem-c/shop",
        },
      ],
    },
    
  ],
  display: true,
};

export const achievementSection = {
  title: "Certifications",
  subtitle: "",
  achievementsCards: [
    {
      title: "Freelancing Certificate",
      subtitle: "Completed a 2‑month Freelancing course.",
      footerLink: [
        {
          name: "Verify via email",
          url: "mailto:virtual.computer.ins@gmail.com",
        },
      ],
    },
  ],
  display: true,
};

export const blogSection = {
  title: "Blogs",
  subtitle: "",
  blogs: [],
  display: false,
};

export const talkSection = {
  title: "",
  subtitle: "",
  talks: [],
  display: false,
};

export const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false,
};

export const resumeSection = {
  url: "",
  display: false,
};

export const contactInfo = {
  title: "Contact Me",
  subtitle: "Feel free to reach out!",
  email_address: "", // <- **also replace here** 
  display: true,
};

export const isHireable = {
  available: true,
};

export const twitterDetails = {
  userName: "",
  display: false,
};

export const illustration = {
  animated: true,
};
