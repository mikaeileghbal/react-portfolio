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
];
const portfolio = [
  {
    id: "1",
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
    ],

    tech: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Styled Components",
      "Next.js",
      "Next-Auth",
      "MongoDB",
      "Mongoose",
    ],
    resource: [
      "https://fixer.vercel.com",
      "https://github.com/mikaeileghbal/fixer",
    ],
    tags: [
      "html",
      "css",
      "javascript",
      "nextjs",
      "mongodb",
      "mongoose",
      "nextauth",
    ],
  },
  {
    id: "2",
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
      "styled components",
      "Next.js",
      "Next-Auth",
      "MongoDB",
      "Mongoose",
    ],
    resource: [
      "https://mikaeileghbal.github.io/music-store",
      "https://github.com/mikaeileghbal/music-store",
    ],
    tags: ["html", "css", "scss", "reactjs", "redux", "react query"],
  },
  {
    id: "3",
    title: "github user profile",
    brief: "Github user profile call github api to get user information.",
    description: [
      "In this project I created a Fetch component that accepts a url and fetches that url. ",
      "Showing loader  This Next.js application uses next-auth credentials provider to authenticate users. Users can sign up and report an issue that other users can give feedback to every isuue. There is a profile page for users where they can update their profile info and picture.",
    ],
    images: ["githubuser-1.png", "githubuser-2.png"],
    tech: [
      "HTML5",
      "CSS3",
      "SCSS",
      "React.js",
      "RESTFull API",
      "React-Chartjs-2",
    ],
    resource: [
      "https://mikaeileghbal.github.io/githubuserprofile",
      "https://github.com/mikaeileghbal/github-user-profile",
    ],
    tags: ["html", "css", "javascript", "reactjs", "restapi", "chartjs"],
  },
  // {
  //   id: "4",
  //   title: "calendar",
  //   brief:
  //     "Web application created with next.js. demonstrates CRUD operations on a MongoDB database with Mongoose. It includes authentication with next-auth",
  //   description: [
  //     "Fixer is a web application to track Issues reported with users.",
  //     "This Next.js application uses next-auth credentials provider to authenticate users. Users can sign up and report an issue that other users can give feedback to every isuue. There is a profile page for users where they can update their profile info and picture.",
  //   ],
  //   images: ["calendar.png", "githubuser-2.png"],
  //   tech: ["HTML5", "CSS3", "SCSS", ""],
  //   resource: ["https://fixer.vercel.com", "github"],
  //   tags: ["html", "css", "javascript"],
  // },
  // {
  //   id: "5",
  //   title: "color rating",
  //   brief:
  //     "Web application created with next.js. demonstrates CRUD operations on a MongoDB database with Mongoose. It includes authentication with next-auth",
  //   description: [
  //     "Fixer is a web application to track Issues reported with users.",
  //     "This Next.js application uses next-auth credentials provider to authenticate users. Users can sign up and report an issue that other users can give feedback to every isuue. There is a profile page for users where they can update their profile info and picture.",
  //   ],
  //   images: ["colorrating.png", "githubuser-2.png"],
  //   tech: [
  //     "HTML5",
  //     "CSS3",
  //     "SCSS",
  //     "styled components",
  //     "Next.js",
  //     "Next-Auth",
  //     "MongoDB",
  //     "Mongoose",
  //   ],
  //   resource: ["https://fixer.vercel.com", "github"],
  //   tags: ["html", "css", "javascript", "zustand", "react"],
  // },
  {
    id: "4",
    title: "form validate",
    brief:
      "Web application created with vanilla javascript. demonstrates custom validating a form inputs.",
    description: [
      "Form validate uses a custom field validator.",
      "This application uses javascript to check inputs of different tyopes based on predefined criteria to provide form validating.",
    ],
    images: ["formvalidate.png", "formvalidate.png"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    resource: [
      "https://fixer.vercel.com",
      "https://github.com/mikaeileghbal/fixer",
    ],
    tags: ["html", "css", "javascript"],
  },
];

export { portfolio, tags };
