import {
    javascript,
    typescript,
    html,
    css,
    python,
    django,
    java,
    sql,
    reactjs,
    nodejs,
    agile,
    junit,
    docker,
    cfe,
    cfe2,
    perc,
    usability,
    gfu,
    uw
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "BS Computer Science",
      icon: gfu,
      website: "https://www.georgefox.edu/college-admissions/academics/major/computer-science.html"
    },
    {
      title: "Full Stack Development Certificate",
      icon: uw,
      website: "https://www.pce.uw.edu/certificates/full-stack-development-with-javascript"
    },
    {
      title: "Business Analytics Certificate",
      icon: gfu,
      website: "https://www.georgefox.edu/college-admissions/academics/major/business-analytics.html"
    },
    {
      title: "William Penn Honors Program",
      icon: gfu,
      website: "https://www.georgefox.edu/honors-program/index.html"
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Junit Tests",
      icon: junit,
    },
    {
      name: "Agile",
      icon: agile,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
  
  ];
  
  const testimonials = [

  ];
  
  const projects = [
    {
      name: "AI-Powered Usability Test Video Analysis ",
      tagline: "Reduces usability test video review time by 60%, saving 40 minutes per test review.",
      context: "While working with Daimler Trucks of North America, our goal was to streamline usability test reviews and reduce man-hours. Existing software solutions were expensive and didn't meet our needs. To address this, I created a cost-effective alternative using a budget-friendly API.",
      bullets: [
        "Integrated Assembly AI for transcription accuracy, speaker identification, and AI-generated notes.",
        "Full CRUD functionality for notes and transcript.",
        "Can add more video angles to player with the option to synchronize them to watch concurrently.",
        "Established a robust MySQL database system and API for efficient data storage and retrieval."
      ],
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Assembly AI",
          color: "pink-text-gradient",
        },
      ],
      image: usability,
      source_code_link: "https://github.com/MaxHanson07",
    },
    {
      name: "CFE",
      tagline: "Browse the map and read reviews for local coffee shops.",
      context: "Made in a 7 day UW Hackathon. Application is no longer deployed on Heroku.",
      bullets: [
        "User-friendly interface with an interactive map.",
        "Integrated Google OAuth for secure user authentication.",
        "Utilized MongoDB for efficient data storage and Cloudinary for image hosting.",
        "Managed Agile sprints and implemented Gitflow for version control."
      ],
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: cfe2,
      source_code_link: "https://github.com/MaxHanson07/coffee-app-client",
    },
    {
      name: "Soil Percolation Rate Measuring Device",
      tagline: "Automated soil percolation (erosion due to rain water) rate measuring device",
      context: "Worked with 3 mechanical engineer students, designing this fully functioning prototype for Engineering Ministries International, who now uses replicas around the globe.",
      bullets: [
        "Engineered C code and configured Arduino for accurate percolation rate measurements (98% accuracy).",
        "Designed and implemented a real-time data visualization interface with a line chart."
      ],
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        }
      ],
      image: perc,
      source_code_link: "https://github.com/MaxHanson07/soil-percolation",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };