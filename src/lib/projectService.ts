// import { Project } from "./types";

// // Initial projects data
// const initialProjects: Project[] = [
//   {
//     id: "1",
//     title: "Portfolio Website",
//     description: "A modern portfolio website built with React and TypeScript.",
//     image: "/assets/images/projects/portfolio.jpg",
//     tags: ["React", "TypeScript", "Tailwind CSS"],
//     featured: true,
//     githubUrl: "https://github.com/yourusername/portfolio",
//     liveUrl: "https://yourportfolio.com",
//   },
//   {
//     id: "2",
//     title: "E-commerce Platform",
//     description: "A full-featured e-commerce platform with payment integration.",
//     image: "/assets/images/projects/ecommerce.jpg",
//     tags: ["React", "Node.js", "MongoDB", "Stripe"],
//     featured: true,
//     githubUrl: "https://github.com/yourusername/ecommerce",
//     liveUrl: "https://yourecommerce.com",
//   },
//   {
//     id: "3",
//     title: "Task Management App",
//     description: "A task management application with drag-and-drop functionality.",
//     image: "/assets/images/projects/taskmanager.jpg",
//     tags: ["React", "Redux", "Firebase"],
//     featured: false,
//     githubUrl: "https://github.com/yourusername/taskmanager",
//     liveUrl: "https://yourtaskmanager.com",
//   },
// ];

// // Get all projects
// export function getProjects(): Project[] {
//   const storedProjects = localStorage.getItem("projects");
//   if (storedProjects) {
//     return JSON.parse(storedProjects);
//   }
//   return initialProjects;
// }

// // Add a new project
// export function addProject(project: Project): Project[] {
//   const projects = getProjects();
//   const newProjects = [...projects, project];
//   localStorage.setItem("projects", JSON.stringify(newProjects));
//   return newProjects;
// }

// // Update an existing project
// export function updateProject(project: Project): Project[] {
//   const projects = getProjects();
//   const updatedProjects = projects.map((p) => (p.id === project.id ? project : p));
//   localStorage.setItem("projects", JSON.stringify(updatedProjects));
//   return updatedProjects;
// }

// // Delete a project
// export function deleteProject(id: string): Project[] {
//   const projects = getProjects();
//   const filteredProjects = projects.filter((p) => p.id !== id);
//   localStorage.setItem("projects", JSON.stringify(filteredProjects));
//   return filteredProjects;
// }

// // Reset to default projects
// export function resetToDefaultProjects(): Project[] {
//   localStorage.setItem("projects", JSON.stringify(initialProjects));
//   return initialProjects;
// }

import { Project } from "../lib/types";

export const projects: Project[] = [
  // {
  //   id: "1",
  //   title: "E-Commerce Platform",
  //   description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
  // description:'',
  // longDescription: "This project is a comprehensive e-commerce solution featuring product listings, cart functionality, user authentication, payment processing with Stripe, and an admin dashboard for inventory management.",
  //   tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
  //   image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
  //   github: "https://example.com/ecommerce",
  //   github: "https://github.com/example/ecommerce",
  //   featured: true,
  // },
  // {
  //   id: "2",
  //   title: "Portfolio Website",
  //   description: "A modern portfolio website showcasing my projects and skills",
  // description:'',
  // longDescription: "A responsive portfolio website built with React and TailwindCSS. Features smooth animations, dark mode, and a custom CMS for easy content updates.",
  //   tags: ["React", "TailwindCSS", "Framer Motion"],
  //   image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
  //   github: "https://example.com/portfolio",
  //   github: "https://github.com/example/portfolio",
  //   featured: true,
  // },
  // {
  //   id: "3",
  //   title: "Task Management App",
  //   description: "A drag-and-drop task management application inspired by Trello",
  // description:'',
  // longDescription: "A task management application with drag-and-drop functionality, user authentication, and real-time updates. Built with React, Firebase, and React Beautiful DND.",
  //   tags: ["React", "Firebase", "DND", "Context API"],
  //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  //   github: "https://example.com/taskapp",
  //   github: "https://github.com/example/taskapp",
  //   featured: false,
  // },
  // {
  //   id: "4",
  //   title: "Weather Dashboard",
  //   description: "A weather dashboard with data visualization and forecasting",
  // description:'',
  // longDescription: "A weather application that provides current conditions and 7-day forecasts for any location. Features include interactive charts, saved locations, and weather alerts.",
  //   tags: ["React", "Chart.js", "API Integration"],
  //   image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  //   github: "https://example.com/weather",
  //   github: "https://github.com/example/weather",
  //   featured: false,
  // },

  {
    id: "1",
    title: "Novas Furniture - E-Commerce Platform",
    tags: ["html", "css"],
    description:
      "Modern responsive e-commerce platform for a furniture retailer with intuitive shopping experience",
    longDescription:
      "A sophisticated e-commerce solution for a furniture retailer featuring responsive design, detailed product catalogs, integrated shopping cart functionality, and seamless user experience across all devices. Built with semantic HTML5 and advanced CSS3 techniques including Flexbox and Grid layouts.",
    image: "/assets/images/Novas.PNG",
    github: "https://github.com/Ahmed-K-Fouda/Novas_Furniture",
    netlify: "https://novas-furniture.netlify.app",
  },
  {
    id: "20",
    title: "BizLand - Corporate Web Solution",
    tags: ["bootstrap"],
    description:
      "Professional business website with Bootstrap 5 framework and AOS animations",
    longDescription:
      "A sophisticated corporate website built with Bootstrap 5 that showcases modern design principles, responsive layouts, and engaging user interactions. Features AOS (Animate On Scroll) library for smooth transitions and animations that enhance the user experience while maintaining optimal performance.",
    image: "/assets/images/bizland.PNG",
    github: "https://github.com/Ahmed-K-Fouda/BizLand-bootstrap5",
    netlify: "https://bizland-website.netlify.app",
  },
  {
    id: "2",
    title: "Automotive Showcase Platform",
    description:
      "Interactive automotive showcase with responsive catalog and filtering capabilities",
    longDescription:
      "An immersive automotive showcase platform featuring a comprehensive vehicle catalog with detailed specifications, high-quality imagery, and intuitive navigation. The responsive layout adapts seamlessly to various screen sizes, providing an optimal viewing experience on desktops, tablets, and mobile devices.",
    tags: ["html", "css"],
    image: "/assets/images/cars.PNG",
    github: "https://github.com/Ahmed-K-Fouda/car_agency",
    netlify: "https://cars-agency.netlify.app",
  },
  {
    id: "3",
    title: "Brew Haven - Artisanal Coffee Experience",
    description:
      "Elegant coffee shop website showcasing specialty brews and café atmosphere",
    longDescription:
      "An aesthetically pleasing coffee shop website designed to showcase premium coffee varieties, specialty drinks, and café ambiance. The clean, modern interface highlights the unique offerings while providing essential information about ingredients, brewing methods, and shop locations in an engaging visual format.",
    tags: ["html", "css"],
    image: "/assets/images/coffe.PNG",
    github: "https://github.com/Ahmed-K-Fouda/coffe-shop",
    netlify: "https://display-coffe-shop.netlify.app/",
  },
  {
    id: "4",
    title: "Forkify - Recipe Discovery Application",
    description:
      "Dynamic recipe search and discovery platform with advanced JavaScript features",
    longDescription:
      "A comprehensive recipe application leveraging external APIs to provide users with thousands of culinary options. Built using Object-Oriented Programming principles and the MVC (Model-View-Controller) architecture for maintainable code organization. Features include recipe search, favorites list, cooking time calculations, and ingredient quantity adjustments.",
    tags: ["javascript"],
    image: "/assets/images/forkify.PNG",
    github: "https://github.com/Ahmed-K-Fouda/Forkify-App",
    netlify: "https://forkify-findrecipe.netlify.app/",
  },
  {
    id: "5",
    title: "TVFlix - Streaming Platform UI",
    description:
      "Netflix-inspired streaming interface with dynamic content rendering",
    longDescription:
      "A sophisticated Netflix-inspired streaming platform interface that replicates the popular service's user experience. Features include content categorization, responsive design, dynamic content rendering based on user preferences, and smooth transitions between different views and media displays.",
    tags: ["javascript"],
    image: "/assets/images/movie.png",
    github: "https://github.com/Ahmed-K-Fouda/movie",
    netlify: "https://movieshow-flex.netlify.app",
  },
  {
    id: "6",
    title: "Bankist - Digital Banking Platform",
    description:
      "Interactive banking application with secure transaction management and multi-currency support",
    longDescription:
      "A comprehensive digital banking solution for account management featuring secure transactions including deposits, withdrawals, transfers, and loan applications. The application supports multiple currencies, internationalization, and localized formatting while providing detailed transaction history and account analytics.",
    tags: ["javascript"],
    image: "/assets/images/simualteBank.PNG",
    github: "https://github.com/Ahmed-K-Fouda/simulate-bank-system",
    netlify: "https://simulate-banksystem.netlify.app/",
  },
  {
    id: "7",
    title: "JavaScript project",
    description: "Bankist website",
    longDescription: "Bankist: When Banking meets Minimalism.",
    tags: ["javascript"],
    image: "/assets/images/bankist.PNG",
    github: "https://github.com/Ahmed-K-Fouda/Bank-Website",
    netlify: "https://bankist-view.netlify.app",
  },
  {
    id: "8",
    title: "JavaScript project",
    description:
      "E-Commerce Website: Showcases products with essential functionalities.",
    longDescription:
      "E-Commerce Website: Showcases products with essential functionalities. Users can browse products, add to cart, and use local storage for persistent cart data.",
    tags: ["javascript"],
    image: "/assets/images/topico.PNG",
    github: "https://github.com/Ahmed-K-Fouda/e-commerce",
    netlify: "https://electronic-ecommerce.netlify.app",
  },

  {
    id: "9",
    title: "JavaScript project",
    description:
      "Mapty: Tracks workouts based on geographical locations using Leaflet library.",
    longDescription:
      "Mapty: Tracks workouts based on geographical locations using Leaflet library. Users can add running or cycling workouts and display distance and duration. Stores data in the browser.",
    tags: ["javascript"],
    image: "/assets/images/Mapty.PNG",
    github: "https://github.com/Ahmed-K-Fouda/Mapty",
    netlify: "https://mapty-a-fouda.netlify.app",
  },
  {
    id: "10",
    title: "HTML & CSS project",
    tags: ["html", "css"],
    description: "Responsive static product display page",
    longDescription:
      "Responsive static product display page built with HTML and CSS.",
    image: "/assets/images/redstore.PNG",
    github: "https://github.com/Ahmed-K-Fouda/simple-product-display",
    netlify: "https://display-product-page.netlify.app",
  },
  {
    id: "19",
    title: "HTML & CSS project",
    tags: ["html", "css"],
    description:
      "A simple HTML and CSS page providing information about a university",
    longDescription:
      "A simple HTML and CSS page providing information about a university, including history, campus facilities, and contact information.",
    image: "/assets/images/univ.PNG",
    github: "https://github.com/Ahmed-K-Fouda/university-info-page",
    netlify: "https://university-info-page.netlify.app",
  },
  {
    id: "11",
    title: "React projects",
    tags: ["react"],
    description:
      "Friend List and Bill Splitting App is a React-based application",
    longDescription:
      "Friend List and Bill Splitting App is a React-based application designed to manage friendships and split bills easily. The app allows users to add friends, select and delete friends, and handle bill splitting between friends with clear balance tracking.",
    image: "/assets/images/eat-split.PNG",
    github: "https://github.com/Ahmed-K-Fouda/eat-n-split",
    netlify: "https://eat-nsplit.netlify.app",
  },
  {
    id: "12",
    title: "React projects",
    tags: ["react"],
    description:
      "A React-based web application that allows users to search for movies",
    longDescription:
      "A React-based web application that allows users to search for movies, view detailed information, add movies to a watched list, and rate them. This project leverages the OMDb API for fetching movie data and incorporates custom hooks for efficient state management and local storage.",
    image: "/assets/images/popcorn.PNG",
    github: "https://github.com/Ahmed-K-Fouda/popcorn-movie",
    netlify: "https://popcorn-movie-details.netlify.app",
  },
  {
    id: "13",
    title: "React projects",
    tags: ["react"],
    description:
      "World Wise is a comprehensive web application that allows users to explore cities and countries",
    longDescription:
      "World Wise is a comprehensive web application that allows users to explore cities and countries. Users can add cities to their list, view details about the cities, and explore countries they've visited. The app utilizes React, React Router, and various hooks to manage state and handle side effects. ",
    image: "/assets/images/worldwise.PNG",
    github: "https://github.com/Ahmed-K-Fouda/world-wise",
    netlify: "https://world-wise-explorer.netlify.app",
  },
  {
    id: "14",
    title: "React projects",
    tags: ["react"],
    description:
      "CryptoPlace is a comprehensive cryptocurrency marketplace where users can explore various cryptocurrencies,",
    longDescription:
      "CryptoPlace is a comprehensive cryptocurrency marketplace where users can explore various cryptocurrencies, view real-time prices, market caps, and historical data through interactive charts.",
    image: "/assets/images/crypto.PNG",
    github: "https://github.com/Ahmed-K-Fouda/Crypto-Place",
    netlify: "https://crypto-place-currency.netlify.app",
  },
  {
    id: "15",
    title: "React projects",
    tags: ["react"],
    description:
      "The Pizza Ordering App is a web application that allows users to effortlessly browse a menu of pizzas",
    longDescription:
      "The Pizza Ordering App is a web application that allows users to effortlessly browse a menu of pizzas, customize their orders, and place them. With a user-friendly interface, the app offers features to view pizza details, select sizes, add extra toppings, and manage orders.",
    image: "/assets/images/pizza.PNG",
    github: "https://github.com/Ahmed-K-Fouda/pizza-ordering-app",
    netlify: "https://order-pizza-app.netlify.app",
  },

  {
    id: "16",
    title: "React projects",
    tags: ["react"],
    description:
      "This project is a comprehensive E-Learning Platform that includes features for user management,",
    longDescription:
      "This project is a comprehensive E-Learning Platform that includes features for user management, authentication, course management, job listings, and more.",
    image: "/assets/images/SEF.PNG",
    github: "https://github.com/Ahmed-K-Fouda/E-Learning-Platform-",
    netlify: "https://learning-platform-sef.netlify.app/",
  },

  {
    id: "17",
    title: "React projects",
    tags: ["react"],
    description:
      "This is a fully functional e-commerce project developed using React, Redux, TailwindCSS, and Vite",
    longDescription:
      "This is a fully functional e-commerce project developed using React, Redux, TailwindCSS, and Vite. The project includes essential e-commerce features like product listing, user authentication, a cart system, and order processing. This project is built with a modern tech stack that focuses on performance, modularity, and scalability.",
    image: "/assets/images/E-Shop.PNG",
    github: "https://github.com/Ahmed-K-Fouda/E-Shop",
    netlify: "https://e-shop-commerce-prod.netlify.app/",
  },

  {
    id: "18",
    title: "React projects",
    tags: ["react"],
    description:
      "This is a React-based quiz application that tests users' knowledge of React concepts.",
    longDescription:
      "This is a React-based quiz application that tests users' knowledge of React concepts. The application features multiple components and utilizes the useReducer hook for state management. Questions are fetched from a local server, and users can navigate through them, receive scores, and see their high scores.",
    image: "/assets/images/quiez.PNG",
    github: "https://github.com/Ahmed-K-Fouda/react-quiez",
    netlify: "https://react-quiez-app.netlify.app",
  },
  {
    id: "21",
    title: "Next projects",
    tags: ["Next"],
    description:
      "a modern and feature-rich eCommerce platform built with cutting-edge technologies",
    longDescription:
      "Welcome to NexaStore, a modern and feature-rich eCommerce platform built with cutting-edge technologies. This project is designed to provide a seamless shopping experience with advanced features like a dynamic cart, secure checkout, and a visually stunning UI.",
    image: "/assets/images/Click&Pick.PNG",
    github: "https://github.com/Ahmed-K-Fouda/NexaStore/",
    netlify: "https://nexa-store-kappa.vercel.app/",
  },
  {
    id: "22",
    title: "React projects",
    tags: ["react"],
    description:
      "E-Commerce Web App—a fully functional online store built using React and powered by Firebase for real-time data management and authentication",
    longDescription:
      "Welcome to my E-Commerce Web App—a fully functional online store built using React and powered by Firebase for real-time data management and authentication. This project showcases my expertise in frontend development, state management, and secure authentication..",
    image: "/assets/images/E-Store.PNG",
    github: "https://github.com/Ahmed-K-Fouda/E-Store",
    netlify: "https://e-store-eosin-seven.vercel.app",
  },
];

// Get all projects
export function getProjects(): Project[] {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) {
    return JSON.parse(storedProjects);
  }
  return projects;
}

// Add a new project
export function addProject(project: Project): Project[] {
  const projects = getProjects();
  const newProjects = [...projects, project];
  localStorage.setItem("projects", JSON.stringify(newProjects));
  return newProjects;
}

// Update an existing project
export function updateProject(project: Project): Project[] {
  const projects = getProjects();
  const updatedProjects = projects.map((p) =>
    p.id === project.id ? project : p
  );
  localStorage.setItem("projects", JSON.stringify(updatedProjects));
  return updatedProjects;
}

// Delete a project
export function deleteProject(id: string): Project[] {
  const projects = getProjects();
  const filteredProjects = projects.filter((p) => p.id !== id);
  localStorage.setItem("projects", JSON.stringify(filteredProjects));
  return filteredProjects;
}

// Reset to default projects
export function resetToDefaultProjects(): Project[] {
  localStorage.setItem("projects", JSON.stringify(projects));
  return projects;
}
