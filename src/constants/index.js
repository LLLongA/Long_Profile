import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a front-end developer, I specialize in creating dynamic, user-centric web applications with a strong focus on delivering exceptional user experiences. I have extensive experience working with modern frameworks such as React, Angular, and Vue, and I'm well-versed in integrating popular UI libraries like Ant Design and Material UI to build responsive, aesthetically pleasing, and highly functional interfaces./n

My approach to development emphasizes not only clean, efficient code but also the importance of intuitive, accessible, and engaging user interactions. I’m passionate about optimizing the user journey, ensuring that every design and functionality choice serves the needs of the end user while maintaining a seamless experience across different devices and platforms.`;

export const ABOUT_TEXT = `Hello, my name is Long, and I am currently pursuing a Master of Computing at the Australian National University, expected to graduate in June 2025. My academic journey is somewhat unique, as I originally completed my undergraduate studies in journalism, specializing in data journalism. This background has provided me with a strong foundation in storytelling through data visualization, where I focused on presenting complex data in an accurate, visually appealing manner to communicate insights effectively.\n

As I transitioned to computing, my focus shifted towards front-end development, where I leverage my skills in design and user experience to build intuitive, data-driven applications. My experience in journalism continues to influence my approach to development, particularly in ensuring that information is not only accurate but also engaging and accessible.\n

Beyond academics and professional interests, I am passionate about fitness and photography. I particularly enjoy astrophotography and often spend time outdoors. These hobbies have honed my patience, attention to detail, and creative problem-solving skills—qualities that also benefit my work in development.\n

With this combination of skills and interests, I aim to contribute meaningfully to the field of computing, particularly in roles that combine data, design, and development to create innovative and user-centric solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Fitness Tracker",
    image: project1,
    description:
      "A full stack project utilizing Angular for the front-end development and SpringBoot for the back-end. The project stores data in MySQL and communicates via RESTful APIs for seamless data interaction.",
    technologies: ["Angular", " SpringBoot", "Mysql",  "TypeScript"],
    link: "https://github.com/LLLongA/fitness_tracker", 

  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "https://github.com/yourusername/fitness-tracker", // 添加项目链接

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Framer", "React", "TailwindCss","JavaScript"],
    link: "https://github.com/LLLongA/Long_Profile", // 添加项目链接

  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    link: "https://github.com/yourusername/fitness-tracker", // 添加项目链接

  },
];

export const CONTACT = {
  email: "1287495419@qq.com",
};
