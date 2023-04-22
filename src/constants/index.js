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
  fortuneCooking,
  costco,
  nofrills,
  brainFlix,
  bandSite,
  journey,
  threejs,
  inStock,
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

const experiences = [
  {
    title: "Meat Clerk",
    company_name: "No Frills",
    icon: nofrills,
    iconBg: "#f5e600",
    date: "JUL 2016 - SEPT 2018",
    points: [
      "Responded to Customer inquiries in a polite and friendly manner, resulting in  a high customer satisfaction rate.",
      "Managed Departments fresh meat goods, resulting in a 15% reduction in inventory waste.",
      "Trained new employees to be more efficient in pushing out products, resulting in a 15% increase in sales revenue.",
    ],
  },
  {
    title: "Waiter",
    company_name: "Fortune Cooking Restaurant",
    icon: fortuneCooking,
    iconBg: "#E6DEDD",
    date: "JUN 2018 - MAR 2020",
    points: [
      "Trained new waiters/waitresses in providing excellent customer service and positive language when providing solutions to conflicts, resulting in a 20% increase in customer satisfaction rates.",
      "Served multiple tables every night with over 40 patrons, resulting in an average tip rate of 50%.",
      "Converted first time customers and increased customer return rate through reliable and prompt service resulting in a 30% increase in repeat business.",
    ],
  },
  {
    title: "Stocker",
    company_name: "Costco Wholesale",
    icon: costco,
    iconBg: "#383E56",
    date: "JUL 2020 - April 2023",
    points: [
      "Demonstrate leadership and teamwork by training and guiding co-workers to efficiently present the warehouse, resulting in a 20% increase in productivity.",
      "Communicate and resolve issues to satisfy the company and customers needs, resulting in a 95% customer satisfaction rate.",
      "Collaborate with the shipping department and ensure efficient flow of all shipments resulting in a 25% reduction in shipment processing time.",
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
    name: "Journey",
    description:
      "A platformer game created with CanvasAPI and React",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Canvas API",
        color: "green-text-gradient",
      },
      {
        name: "JSON",
        color: "pink-text-gradient",
      },
    ],
    image: journey,
    source_code_link: "https://github.com/TommieeN/Journey-React-Platformer-Game",
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

export { services, technologies, experiences, testimonials, projects };
