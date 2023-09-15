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
    meta,
    starbucks,
    tesla,
    shopify,
    cfe,
    perc,
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
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI-Powered Usability Test Video Analysis ",
      tagline: "Reduces usability test video review time by 60%, saving 40 minutes per test review.",
      bullets: [
        "Integrated Assembly AI for transcription accuracy, speaker identification, and AI-generated notes.",
        "In-depth sentiment analysis visualization.",
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
      image: perc,
      source_code_link: "https://github.com/",
    },
    {
      name: "CFE",
      tagline: "Browse the map and read reviews for local coffee shops.",
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
      image: cfe,
      source_code_link: "https://github.com/MaxHanson07/coffee-app-client",
    },
    {
      name: "Soil Percolation Rate Measuring Device",
      tagline: "Automated soil percolation rate measuring device, now in global use for Engineering Ministries International.",
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