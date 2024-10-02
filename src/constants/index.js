export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const certificate = [
  {
    id: 1,
    name: 'Narenda Wicaksono',
    position: 'Chief Executive Officer',
    link: 'https://drive.google.com/file/d/17cDJA13sh1AwW4ykCPLnxpkeYIJxYsJ3/view?usp=sharing',
    img: 'assets/review1.jpg',
    title: `Front-End Web and Back-End SIB Dicoding Kampus Merdeka`,
    review:
      'Completed the Front-End and Back-End Web Development course from Dicoding Kampus Merdeka, Gained skills in building responsive, accessible web applications using HTML, CSS, JavaScript (ES6), and Node.js. Implement both front-end (using Web Components, Webpack, and AJAX) and back-end development, creating RESTful APIs and integrating server-side functionalities. Learning use GitHub for version control and create a final capstone project that combined both technical and collaborative expertise.',
  },
  {
    id: 2,
    name: 'Maximilian Schwarzmüller',
    position: 'Udemy Professional Web Developer and Instructor',
    link: 'https://drive.google.com/file/d/1E1i0KwQu0gKY-pOb2Ou5d_F7L5xC5uMF/view?usp=sharing',
    img: 'assets/review2.jpg',
    title: `React - The Complete Guide 2024 (incl. Next.js, Redux)`,
    review:
      'Comprehensive learning experience on core React concepts like components, JSX, hooks, and state management with Redux. It delves into advanced state management using Redux, explaining reducers, actions, and the Redux store, and also covers Next.js for server-side rendering and static site generation. The course emphasizes practical skills in building reusable components and optimizing front-end applications with Redux and Next.js, providing a solid foundation for modern web development..',
  },
  {
    id: 3,
    name: 'Dr. MARLIZA, SKom, MMSI',
    position: 'Vice Dean of Gunadarma University',
    link: 'https://drive.google.com/file/d/1ueYRsbVzd-Md3p2k3XmMqVl9WVJ3PTFI/view?usp=sharing',
    img: 'assets/review3.jpg',
    title: `The Smart for Using UI/UX Design`,
    review:
      'Completed The Smart for Using UI/UX Design course, Using Figma to design intuitive user interfaces. Practice and learning creating UI design such as learning design thinking, creating wireframes to visualize structures, and developing prototypes to test the functionality and flow of the application.',
  },
  {
    id: 4,
    name: 'Prof. Dr. Margianti, S.E., M.M.',
    position: 'Rector of Gunadarma University',
    link: 'https://drive.google.com/file/d/1kVyT9HwTK7rypv5wK4vRUXVaf3WA8SmK/view?usp=sharing',
    img: 'assets/review4.png',
    title: `Oracle Database Lepkom Certification`,
    review:
      'Completed the Oracle Database certification. The training included creating databases and users, working with single-row functions, and an introduction to PL/SQL. I learned to declare variables, write executable statements, and interact effectively with the Oracle server. Additionally, I gained expertise in creating and managing tables, handling constraints, creating views, and working with other database objects. The course also covered querying data from multiple tables, using subqueries, writing explicit cursors, and handling exceptions, equipping me with solid skills in Oracle database management.',
  },
];

export const myProjects = [
  {
    title: 'Sneaker - Ecommerce Shoes',
    desc: 'Sneaker is an innovative E-Commerce platform that provides a variety of features to facilitate the development of online stores. From displaying products to managing orders, this platform provides a complete solution for digital shopping needs.',
    subdesc:
      'Built with Next.js and Tailwind CSS, Sneaker supports various key features such as Google OAuth integration using NextAuth, CRUD functionality for the shopping cart, product filtering, and product reviews. Additionally, the platform includes a custom API, an efficient admin panel, and a responsive design optimized for performance and scalability.',
    href: 'https://sneaker-shoes.vercel.app/',
    texture: '/textures/project/sneaker.mp4',
    logo: '/assets/sneaker.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/mongodb.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/nextauth.png',
      },
    ],
  },
  {
    title: 'Twitter Clone - Social Media App',
    desc: 'Tweeter Clone is an advanced web application platform that replicates the functionality of Twitter, enabling users to experience seamless social interactions and content sharing. With powerful features like responsive design and secure authentication, it delivers a complete and dynamic user experience.',
    subdesc:
      'Built using NuxtJS and Tailwind CSS for a responsive UI, Tweetly incorporates MongoDB with Prisma as its ORM for efficient database management. It also integrates Cloudinary for image storage and implements user authentication using JWT (JSON Web Token) for robust security.',
    href: 'https://nuxt-twitter-clone-tau.vercel.app/',
    texture: '/textures/project/twitter.mp4',
    logo: '/assets/twitter.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/nuxt.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/mongodb.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/prisma.png',
      },
    ],
  },
  {
    title: 'Jotion - Project Management System',
    desc: 'Jotion Note is a powerful web application that replicates the functionality of Notion, providing users with a versatile platform for project management, note-taking, and real-time collaboration. The application offers seamless integration of various features to optimize team productivity and workflow.',
    subdesc:
      'Built with Next.js, Shadcn, and Tailwind for responsive design, Notionify leverages Convex for real-time database functionality and EdgeStore for secure image storage. User authentication is handled by Clerk, and dynamic editing experiences are made possible with Block Note, which delivers a smooth and interactive user experience.',
    href: 'https://next-notion-clone.vercel.app/',
    texture: '/textures/project/jotion.mp4',
    logo: '/assets/jotion.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/clerk.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/convex.png',
      },
      {
        id: 5,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Messenger Clone - Real TIme Chat App',
    desc: 'Messenger is an innovative web application that mirrors the functionality of popular messaging platforms, allowing users to communicate in real-time with seamless chat feature integration. The application offers a robust and secure environment for personal and team interactions.',
    subdesc:
      'Developed with Next.js and Tailwind CSS for responsive design, Chatwise uses MongoDB with Prisma ORM for efficient data management. The application integrates NextCloudinary for image storage and NextAuth (supports Google, GitHub, and Credential Providers) for user authentication. Real-time messaging is powered by Pusher using WebSocket technology, providing a smooth and dynamic chat experience.',
    href: 'https://next-messenger-clone-delta.vercel.app/',
    texture: '/textures/project/messenger.mp4',
    logo: '/assets/messanger.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/mongodb.svg',
      },
      {
        id: 5,
        name: 'Pusher',
        path: '/assets/pusher.png',
      },
    ],
  },
  {
    title: 'Spotify Clone - Music Broadcasting App',
    desc: 'Spotify Clone is an immersive web application designed to replicate the core features of Spotify, offering users a seamless music streaming experience. With intuitive design and responsive functionality, TuneStream makes listening and managing music easier than ever.',
    subdesc:
      'Developed using Next.js and Tailwind CSS for a fully responsive design, Spotify Clone leverages Supabase for database management and cloud storage. User authentication and OAuth are integrated with Supabase, ensuring secure access. Additionally, the music playback functionality is powered by the `use-sound` library, providing smooth and interactive audio control.',
    href: 'https://spotify-clone-ebon-three.vercel.app/',
    texture: '/textures/project/spotify.mp4',
    logo: '/assets/spotify.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/supabase.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'MERN - Blog',
    pos: 'Full Stack Dev',
    duration: '2024 - April',
    link: 'https://github.com/rayhannn11/mern-blog',
    title:
      'Implemented project planning to structure the development process. Built a MongoDB database and integrated Google OAuth using Firebase for authentication within the MERN stack. Developed core blog functionality, including post CRUD operations, post filtering and searching, and like and comment features. Leveraged Express.js to build an API for the MERN blog, while React.js and Tailwind CSS were used to create a responsive and smooth front-end. Developed an admin panel for the MERN blog to effectively manage content and users.',
    icon: '/assets/blog.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Vue JS - Search Meal App',
    pos: 'Front End Developer',
    duration: '2024 - February',
    title:
      'Utilized project planning methodologies to effectively manage tasks and maintain a clear workflow throughout the development process. Developed a Vue.js-based meals web application with a responsive design using Tailwind CSS to provide a seamless user experience. Implemented state management using Vuex to manage application state efficiently. Developed search, filter, and meal retrieval functionalities by integrating the Open API from Themealdb, ensuring accurate and fast data fetching.',
    icon: '/assets/vue.png',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Selenium - Ecommerce End To End Testing',
    pos: 'QA Automation',
    duration: '2024 - January',
    link: 'https://github.com/rayhannn11/ecommerce-selenium',
    title:
      'Jira for project planning and task management and Selenium as automation tools. Implemented BaseClass and Action Driver, and built Page Object Model for efficient test structure. created End-to-End Test Classes, combined log4j, data-driven testing, group testing, and cross-browser testing. Also, I created Extent Reports, took screenshots for debugging. Jenkins was integrated for CI with Email Notifications to automate the process efficiently.',
    icon: '/assets/selenium.png',
    animation: 'clapping',
  },
];
