import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Ahmed Hossam",
  title: "Hi all, I'm Ahmed 👋",
  subTitle: emoji(
    "Electronics & Flutter Developer with a passion for smart systems and real-world tech projects like Smart Glove for the hearing impaired 🤖🧤"
  ),
  resumeLink: "shokrfy's Resume.pdf",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/shokrfy",
  linkedin: "https://www.linkedin.com/in/shokrfy/",
  gmail: "shokrfy@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Developer with passion for embedded systems, Flutter and backend",
  skills: [
    emoji("⚡ Develop mobile apps with Flutter for real-world solutions"),
    emoji("⚡ Integrate embedded devices like ESP32 via BLE"),
    emoji("⚡ Build web backends using Django and Firebase")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "flutter", fontAwesomeClassname: "fab fa-android" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Tanta Higher Institute of Engineering and Technology",
      subHeader: "B.Sc. in Communication and Computer Engineering",
      duration: "Oct 2020 – Jun 2025",
      desc: "Graduation project: Smart Glove Assistant for Deaf and Mute People"
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Flutter/Dart", progressPercentage: "93%" },
    { Stack: "Python & Django", progressPercentage: "86%" },
    { Stack: "Embedded (ESP32/BLE)", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Intern - CCNA Routing & Switching",
      company: "Telecom Egypt (WE)",
      date: "Jul 2024 – Sep 2024",
      desc: "Learned about OSI Model, IP routing, and configured devices using Cisco Packet Tracer",
      companylogo: require("./assets/images/telecom_egypt.png")
    },
    {
      role: "Intern - Web Development",
      company: "Information Technology Institute (ITI)",
      date: "Jul 2023 – Sep 2023",
      desc: "Built backend and frontend with Django, HTML, CSS, and JavaScript",
      companylogo: require("./assets/images/iti.png")
    }
  ]
};


// Open Source & GitHub Profile
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "Some of the top projects I've worked on",
  projects: [
    {
      projectName: "Smart Glove Mobile App",
      projectDesc: "Flutter app that translates sign language gestures into speech using BLE and Google APIs.",
      footerLink: [{ name: "GitHub Repo", url: "https://github.com/shokrfy/smart-glove-project" }]
    },
    {
      projectName: "E-commerce Website",
      projectDesc: "Built with Django and MySQL including user registration and product catalog.",
      footerLink: [{ name: "GitHub Repo", url: "https://github.com/shokrfy" }]
    },
    {
      projectName: "Network Simulation",
      projectDesc: "Configured LAN/WAN, VLAN, RIP/OSPF, and NAT using Cisco Packet Tracer.",
      footerLink: []
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Courses and certificates I've completed",
  achievementsCards: [
    {
      title: "CCNA Routing and Switching",
      subtitle: "Completed official CCNA training at Telecom Egypt (WE), 2024",
      image: require("./assets/images/cisco_logo.png"),
      imageAlt: "Cisco Logo",
      footerLink: []
    },
    {
      title: "Web Development with Python",
      subtitle: "Completed full-stack training at ITI, 2023",
      image: require("./assets/images/iti_logo.png"),
      imageAlt: "ITI Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "Still working on it 😅",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: "No public talks yet",
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon...",
  podcast: [],
  display: false
};

// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's talk!",
  number: "+20-1129275511",
  email_address: "shokrfy@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable
};
