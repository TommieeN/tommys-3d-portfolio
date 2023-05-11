import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mysql,
  tailwind,
  nodejs,
  sass,
  git,
  figma,
  express,
  brainFlix,
  bandSite,
  flags,
  threejs,
  inStock,
} from "../assets";

// NAV LINKS DATA FOR NAVBAR
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

// SERVICES DATA FOR CARDS SECTION
const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

// TECHNOLOGIES DATA FOR TECH SECTION (3D-BALLS)
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
    name: "MySQL",
    icon: mysql,
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
    name: "Sass",
    icon: sass,
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
    name: "express",
    icon: express,
  },
];

// PROJECTS DATA FOR WORK CARDS
const projects = [
  {
    name: "BrainFlix",
    description:
      "A full stack streaming platform. Users can post comments and upload videos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
    ],
    image: brainFlix,
    source_code_link: "https://github.com/TommieeN/Brainflix",
  },
  {
    name: "BandSite",
    description:
      "Fully responsive website for a fictional band that include show dates.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "JSON",
        color: "pink-text-gradient",
      },
    ],
    image: bandSite,
    source_code_link: "https://github.com/TommieeN/band-site",
  },
  {
    name: "Country Flags",
    description:
      "A list of flags from around the world. Users can search for a specific country. Dark mode is also available.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: flags,
    source_code_link: "https://github.com/TommieeN/country-flags-api",
  },
  {
    name: "In-stock",
    description:
      "A collaborative project utilizing agile methodologies to create a full stack application.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: inStock,
    source_code_link: "https://github.com/TommieeN/instock-client",
  },
];

export { services, technologies, projects };
