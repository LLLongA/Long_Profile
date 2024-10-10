import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `As a front-end developer, I specialize in creating dynamic, user-centric web applications with a strong focus on delivering exceptional user experiences. I have extensive experience working with modern frameworks such as React, Angular, and Vue, and I'm well-versed in integrating popular UI libraries like Ant Design and Material UI to build responsive, aesthetically pleasing, and highly functional interfaces.

My approach to development emphasizes not only clean, efficient code but also the importance of intuitive, accessible, and engaging user interactions. I’m passionate about optimizing the user journey, ensuring that every design and functionality choice serves the needs of the end user while maintaining a seamless experience across different devices and platforms.`;

export const ABOUT_TEXT = `Hi, my name is Long, and I am currently pursuing a Master of Computing at the Australian National University, expected to graduate in June 2025. My academic journey is somewhat unique, as I originally completed my undergraduate studies in journalism, specializing in data journalism. This background has provided me with a strong foundation in storytelling through data visualization, where I focused on presenting complex data in an accurate, visually appealing manner to communicate insights effectively.\n

As I transitioned to computing, my focus shifted towards front-end development, where I leverage my skills in design and user experience to build intuitive, data-driven applications. My experience in journalism continues to influence my approach to development, particularly in ensuring that information is not only accurate but also engaging and accessible.\n

Beyond academics and professional interests, I am passionate about fitness and photography. I particularly enjoy astrophotography and often spend time outdoors. These hobbies have honed my patience, attention to detail, and creative problem-solving skills—qualities that also benefit my work in development.\n

With this combination of skills and interests, I aim to contribute meaningfully to the field of computing, particularly in roles that combine data, design, and development to create innovative and user-centric solutions.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2022",
    role: "Data Journalism Internship",
    company: "NetEase",
    description: `During this internship, I worked on data-driven news stories, focusing on sourcing, cleaning, and analyzing large datasets to uncover insights that informed various journalistic reports. I collaborated with data scientists and editors to produce visually compelling data visualizations using tools like Tableau and Python. Additionally, I contributed to multimedia storytelling by assisting in the production of video content through Adobe After Effects and Premiere Pro, ensuring that complex data was presented in a clear and engaging manner.`,
    technologies: ["Python", "Tableau", "Adobe After Effects", "Adobe Premiere Pro"],
  },
  {
    year: "2020 - 2021",
    role: "Data Journalism Internship",
    company: "China Business Network",
    description: `In this role, I played a critical part in delivering data-focused journalism projects. I gathered and processed data using Python, and created dynamic visualizations using D3.js to enhance reader comprehension. I regularly collaborated with cross-functional teams, including journalists, data analysts, and graphic designers, to deliver timely and impactful stories. I also used Excel for data management and analysis, ensuring accuracy in the representation of key economic and business trends.`,
    technologies: ["Python", "D3.js", "Excel"],
  },
];

export const PROJECTS = [
  {
    title: "Fitness Tracker",
    image: project1,
    description:
      "A full stack project utilizing Angular for the front-end development and SpringBoot for the back-end. The project stores data in MySQL and communicates via RESTful APIs for seamless data interaction.",
    technologies: ["Angular", " SpringBoot", "Node.js","Mysql",  "TypeScript", "Sass"],
    link: "https://github.com/LLLongA/fitness_tracker", 

  },
  {
    title: "Personal Website",
    image: project3,
    description:
      "A personal portfolio website built with React and styled using Tailwind CSS for a modern UI. Framer Motion is used for smooth animations, and JavaScript handles interactive features to showcase projects and skills effectively.",
    technologies: ["React", "TailwindCss","Vite","JavaScript","Framer"],
    link: "https://github.com/LLLongA/Long_Profile", 

  },
  {
    title: "To-do List",
    image: project4,
    description:
      "Develop a simple and efficient To-do List website based on Vue.js to help users better manage daily tasks and improve productivity in work and life. Users can easily add, delete, and manage tasks, and track the status of tasks (such as marking whether a task is completed or not) to ensure that tasks are not missed.",
    technologies: ["Vue","JavaScript","Html","Css"],
    link: "https://github.com/LLLongA/To_do-List", 

  },
  {
    title: "Falling",
    image: project5,
    description:
      "The game was developed using Unity, utilizing C# for scripting and gameplay mechanics. I focused on creating a smooth and immersive player experience, incorporating pixel art style graphics and different thematic levels to enhance the visual appeal.",
    technologies: ["Unity", "C#"],
    link: "https://www.notion.so/project-grover-landing/ec62fef82fae491d9947178c2404ba4b?v=bd161193830640078a94a9c11b60ded4", 

  },
  {
    title: "Grover Planner",
    image: project2,
    description:
      "Grover Planner is an application developed using Python's PySide library for building the UI. It utilizes Web Channel for interaction between Python and JavaScript. The app is designed to control a robot, enabling it to draw in outdoor environments.",
    technologies: ["Python", "JavaScript", "Html"],
    link: "https://www.notion.so/project-grover-landing/ec62fef82fae491d9947178c2404ba4b?v=bd161193830640078a94a9c11b60ded4", 

  },
];

export const CONTACT = {
  email: "1287495419@qq.com",
};
