export const navigation: { name: string; href: string; current: boolean }[] = [
  { name: "Home", href: "#", current: true },
  { name: "Project", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

export const projects: Array<{
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}> = [
  {
    name: "Work in progress: MERN stack application with Typescript to simulate the recharge of a digital ticket office in Montevideo, Uruguay. In addition, Firebase is used to manage sessions. The design is inspired by the original STM website.",
    description: "STM tickets recharge",
    imageSrc: "https://i.ibb.co/PjHyPRv/Captura-desde-2023-10-23-14-54-19.png",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Final project of the Radium Rocket course. Full-Stack app for managing projects, employees and workload. First experience working in a team and using Scrum. In Github you can find the link to the deploy in Vercel",
    description: "TrackGENIX",
    imageSrc: "https://i.ibb.co/HNTV3B4/Captura-desde-2023-10-23-02-37-03.png",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Coding challenge app that gets data from the Rick and Morty API done in a very short period of time. You can paginate and filter from the back-end the data by name, planet and gender. Includes login and registration with Firebase. In my Github link are all the instructions to run it.",
    description: "Rick and Morty",
    imageSrc: "https://i.ibb.co/nkhCg5D/Captura-desde-2023-10-23-21-05-12.png",
    imageAlt: "Rick and Morty.",
    href: "https://github.com/Juancapp/rick-front",
  },
  {
    name: "MERN E-commerce application. You can add items to the cart, purchase them and view the details of each product. You can also filter by different criteria. First time implementing UseContext. In Github you can find the link to the deploy in Vercel ",
    description: "Cocoa Market",
    imageSrc: "https://i.ibb.co/9rW1J8q/Captura-desde-2023-10-23-12-19-51.png",
    imageAlt: "E-commerce",
    href: "https://shopping-cart-pi-eight.vercel.app/",
  },

  {
    name: "React Native front-end project for task management. You can add tasks, edit them, mark them as done and save them to localStorage. You can also navigate in tabs and different screens. ",
    description: "Tasks list",
    imageSrc:
      "https://i.ibb.co/sW0VB5G/Whats-App-Image-2023-10-23-at-3-07-42-PM.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Responsive replica of the Coinbase website. Pure CSS for practice. It was one of my first projects. ",
    description: "Coinbase ",
    imageSrc: "https://i.ibb.co/28nwkVr/Captura-desde-2023-10-23-20-33-18.png",
    imageAlt: "Coinbase",
    href: "/public/pages/Coinbase/html/proyecto.html",
  },
  {
    name: "First personal CSS project to replicate the Netflix home page. Vanilla CSS and HTML.",
    description: "Netflix home replica",
    imageSrc:
      "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    imageAlt: "Netflix",
    href: "/public/pages/netflix_final/index.html",
  },
  {
    name: "One of my first projects to practice responsive CSS and dark mode. CSS, Javascript and vanilla HTML. ",
    description: "Responsive Form",
    imageSrc: "https://i.ibb.co/WPB7x4H/Captura-desde-2023-10-23-20-58-17.png",
    imageAlt: "Form",
    href: "/public/pages/formulario/index.html",
  },
];
