import {
  ahlashabab,
  alfn7,
  alrefaielawyer,
  backend,
  creator,
  css,
  docker,
  eshfaa,
  figma,
  flymedia,
  git,
  globeltrendly,
  html,
  javascript,
  jj,
  lajoie,
  laravel,
  mobile,
  nodejs,
  php,
  reactjs,
  skycloud,
  smartidea,
  sql,
  tailwind,
  typescript,
  upvela,
  web,
  wordpress,
  worldtrendly
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
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Fontend Developer",
    icon: web,
  },
  {
    title: "React Native App",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "php",
    icon: php,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    title: "Laravel & Vue.js",
    // company_name: "freelancer",
    icon: laravel,
    iconBg: "#383E56",
    date: "March 2020",
    points: [
      "By designing and developing web applications using Laravel and Vue.js, ",
      "began its operations. In a short span of time, we managed to build numerous software projects in the Arab region.",
      "collaborating with several major companies.",
    ],
  },
  {
    title: "React",
    // company_name: "freelancer",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2021",
    points: [
      "We officially started using ReactJS due to its depth in Front End development.",
      "GFOURA has achieved significant success with a continuous increase in sales as a result of adopting React.",
      "earning praise from our clients.",
    ],
  },
  {
    title: "WordPress",
    // company_name: "WordPress",
    icon: wordpress,
    iconBg: "#383E56",
    date: "Jan 2022",
    points: [
      "We initiated the creation of a new department dedicated to WordPress website design. In response to high demand for WordPress websites.",
      "we established a specialized department for this purpose.",
      "This department has successfully executed dozens of diverse websites since its inception.",
    ],
  },
  {
    title: "React Native",
    // company_name: "freelancer",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "Through React Native, GFOURA has finally achieved integration by adding the missing piece to its work.",
      "entering the mobile application market. The agency has excelled in this domain.",
      "to the extent that it has become one of the company's top-selling projects.",
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
    name: "lawyer company",
    description:
      "Web-based platform that allows users to search, book, and manage lawyer company, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: alrefaielawyer,
    source_code_link: "https://alrefaielawyer.com/",
  },
  {
    name: "alfn7",
    description:
      "Alfn7 is an artistic news site that focuses on the Arab and international cinema and television industry. It covers all artistic events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: alfn7,
    source_code_link: "https://www.alfn7.com/",
  },
  {
    name: "flymedia",
    description:
    "Web application that enables users to search for marketing agency, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flymedia,
    source_code_link: "https://www.flymedia-uae.com/",
  },
  {
    name: "smartidea",
    description:
    "Web application that enables users to search for marketing agency, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: smartidea,
    source_code_link: "https://smartidea.tech/",
  },
  {
    name: "ahlashabab",
    description:
      "Web application that enables users to search for charity organization, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ahlashabab,
    source_code_link: "https://charity.ahlashabab.com/",
  },
  {
    name: "sky cloud",
    description:
    "Web application that enables users to search for marketing agency, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: skycloud,
    source_code_link: "https://skycloud-ksa.com/",
  },
  {
    name: "eshfaa",
    description:
      "Web-based platform that allows users to search, book, and helth care , providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eshfaa,
    source_code_link: "https://eshfaa.com/",
  },
  {
    name: "lajoie",
    description:
      "Web application that enables users to search for Furniture and profile company, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: lajoie,
    source_code_link: "https://www.lajoie-eg.com",
  },
  {
    name: " world trendly",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: worldtrendly,
    source_code_link: "https://worldtrendly.com/",
  },
  {
    name: "globel trendly",
    description:
      "Web-based platform that allows users to search, book, and manage e commerce websites, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: globeltrendly,
    source_code_link: "https://globeltrendly.com/",
  },
  {
    name: "upvela",
    description:
      "Web application that enables users to search for advice crpto, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: upvela,
    source_code_link: "https://upvela.com/",
  },
  {
    name: "jj",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jj,
    source_code_link: "https://jj.org.sa/",
  },
];

export { experiences, projects, services, technologies, testimonials };

