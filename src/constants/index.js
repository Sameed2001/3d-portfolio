import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    insighttimer,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    astrobazar,
    quotery,
    haven,
    broadflow,
    
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "TechHive",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - May 2020",
      points: [
        "Developing and maintaining web applications using HTML/CSS/JS and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Junior Front End Developer",
      company_name: "TechHive",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2020 - Feb 2021",
      points: [
        "Developing and maintaining web applications using HTML/CSS/JS and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "ReactJS Developer",
      company_name: "TechHive",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2021 - Jan 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "GH Sols.",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using MERN stack and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sameed proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sameed does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Sameed optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Astro Bazar",
      description:
        "Astro Bazar is a multi-vendor marketplace that offers a vast range of products and services. With an easy-to-use interface, it provides a seamless shopping experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: astrobazar,
      source_code_link: "https://github.com/",
    },
    {
      name: "Quotery",
      description:
        "Quotery is a web app that encourages users to explore, collect, and share their favorite quotes. This website feature quotations from the most brilliant minds.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: quotery,
      source_code_link: "https://www.quotery.com/",
    },

    {
      name: "Insight Timer",
      description:
        "The best meditation app with the world's largest FREE library of more than 130k guided meditations, 17k teachers & the world's most loved meditation Timer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "emotion",
          color: "pink-text-gradient",
        },
      ],
      image: insighttimer,
      source_code_link: "https://insighttimer.com/",
    },
    
    {
      name: "Haven Servicing",
      description:
        "Haven's digital platform empowers homeowners to be in the driving seat of their home finances. And the more they learn, the better you can predict and meet their needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "gatsby",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: haven,
      source_code_link: "https://www.havenservicing.com/",
    },

    {
      name: "Broadflow",
      description:
        "Security camera recording in the cloud for a managed surveillance solution that can scale with your business. Allows users to manage device stack in the cloud",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "gatsby",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: broadflow,
      source_code_link: "https://broadflow.co/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };