const tags = [
  "show all",
  "html",
  "css",
  "scss",
  "javascript",
  "reactjs",
  "nextjs",
  "redux",
  "zustand",
  "context",
  "react router",
  "react query",
  "restapi",
  "chartjs",
  "mongodb",
  "nextauth",
  "mysql",
  "material ui",
];
const portfolio = [
  {
    id: "1",
    title: "movies",
    brief:
      "Web application created with React.js React-Router and Material UI.",
    description: [
      "Fetching movies data from REST API and show in categories.",
      "Material UI is used to style the application. Infinite loading technic is used to load more items as the user scrolls down the page. Image lazy loading is used to lazy load images so the user experience is enhanced. User can search for movie title, artist name and more.",
    ],
    images: [
      "movies.png",
      "movies-1.png",
      "movies-2.png",
      "movies-3.png",
      "movies-4.png",
      "movies-5.png",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "React Router",
      "MaterialUI",
      "RESTFull API",
    ],
    resource: ["undefined", "https://github.com/mikaeileghbal/movies"],
    tags: [
      "html",
      "css",
      "javascript",
      "reactjs",
      "react router",
      "material ui",
      "restapi",
    ],
  },
  {
    id: "2",
    title: "fixer",
    brief:
      "Web application created with next.js. demonstrates CRUD operations on a MongoDB database with Mongoose. It includes authentication with next-auth",
    description: [
      "Fixer is a web application to track Issues reported with users.",
      "This Next.js application uses next-auth credentials provider to authenticate users. Users can sign up and report an issue that other users can give feedback to every isuue. There is a profile page for users where they can update their profile info and picture.",
    ],
    images: [
      "fixer-1.png",
      "fixer-2.png",
      "fixer-3.png",
      "fixer-4.png",
      "fixer-5.png",
      "fixer-6.png",
    ],

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "scss",
      "Next.js",
      "Next-Auth",
      "MongoDB",
      "Mongoose",
      "RESTFull API",
    ],
    resource: ["undefined", "https://github.com/mikaeileghbal/fixer"],
    tags: [
      "html",
      "css",
      "javascript",
      "restapi",
      "nextjs",
      "mongodb",
      "mongoose",
      "nextauth",
    ],
  },
  {
    id: "3",
    title: "music store",
    brief:
      "Online store created with react.js and redux. lots of reusable components such as Cart, Basket view, Side menu, Carousel and ... are created. Redux is used to state management.",
    description: [
      "Music Store is an online music records selling web application created with react.",
      "This application uses redux to manage state. A lot of reusable components are created. In this project I created a side selection menu to filter results. it uses context to keep track of state so it can be moved to any project without worring about it's functionality. ",
    ],
    images: [
      "musicstore-1.png",
      "musicstore-2.png",
      "musicstore-3.png",
      "musicstore-4.png",
      "musicstore-5.png",
      "musicstore-6.png",
    ],

    tech: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript",
      "React.js",
      "React Router",
      "Redux",
    ],
    resource: ["undefined", "https://github.com/mikaeileghbal/music-store"],
    tags: [
      "html",
      "css",
      "scss",
      "javascript",
      "reactjs",
      "react router",
      "redux",
    ],
  },
  {
    id: "4",
    title: "github user profile",
    brief: "Github user profile call github api to get user information.",
    description: [
      "In this project I created a Fetch component that accepts a url and fetches that url. ",
      "Showing loader  This Next.js application uses next-auth credentials provider to authenticate users. Users can sign up and report an issue that other users can give feedback to every isuue. There is a profile page for users where they can update their profile info and picture.",
    ],
    images: [
      "githubuser-1.png",
      "githubuser-2.png",
      "githubuser-3.png",
      "githubuser-4.png",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "SCSS",
      "React.js",
      "RESTFull API",
      "React-Chartjs-2",
    ],
    resource: [
      "undefined",
      "https://github.com/mikaeileghbal/github-user-profile",
    ],
    tags: ["html", "css", "javascript", "reactjs", "restapi", "chartjs"],
  },
  {
    id: "5",
    title: "react mysql",
    brief:
      "Web application created with react.js and MySql database. Demonstrates how to Create, Retrive, Update and delete from a MySQL database.",
    description: [
      "CRUD operations on a MySql database using different tech. Includes Context, Redux, React Query and Zustand with pagination.",
      "Each part has it's own Create, Retrive, Update and delete operation using a form.",
    ],
    images: [
      "mysql.png",
      "mysql-1.png",
      "mysql-2.png",
      "mysql-3.png",
      "mysql-4.png",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Context",
      "Redux",
      "Zustand",
      "React Query",
      "MySQL",
      "Node.js",
      "Express",
    ],
    resource: ["undefined", "https://github.com/mikaeileghbal/react-mysql"],
    tags: [
      "html",
      "css",
      "javascript",
      "reactjs",
      "context",
      "redux",
      "zustand",
      "react query",
      "mysql",
      "nodejs",
      "express",
      "restapi",
    ],
  },
  {
    id: "6",
    title: "form validation",
    brief:
      "Web application created with vanilla javascript. demonstrates custom validating a form inputs.",
    description: [
      "Form validate uses a custom field validator.",
      "This application uses javascript to check inputs of different tyopes based on predefined criteria to provide form validating.",
    ],
    images: [
      "formvalidate-1.png",
      "formvalidate-2.png",
      "formvalidate-3.png",
      "formvalidate-4.png",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    resource: ["undefined", "https://github.com/mikaeileghbal/form-validation"],
    tags: ["html", "css", "javascript"],
  },
  {
    id: "7",
    title: "personal portfolio",
    brief:
      "Web application created with React.js. Based on caferati.me portfolio design.",
    description: [
      "This web application shows my personal information and works.",
      "This application uses React.js, React router and Styled components.",
    ],
    images: [
      "portfolio.png",
      "portfolio-1.png",
      "portfolio-2.png",
      "portfolio-3.png",
      "portfolio-4.png",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "React Router"],
    resource: [
      "https://mikaeileghbal.github.io",
      "https://github.com/mikaeileghbal/react-portfolio",
    ],
    tags: ["html", "css", "javascript", "reactjs", "react router"],
  },
];

export { portfolio, tags };
