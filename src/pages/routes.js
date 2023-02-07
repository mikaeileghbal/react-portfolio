import { About, Portfolio, Project, Contact, Resume } from "../pages";
const routes = [
  {
    title: "About",
    path: "/",
    exact: true,
    element: About,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    exact: true,
    element: Portfolio,
  },
  {
    title: "Project",
    path: "/portfolio/:title",
    exact: true,
    element: Project,
  },
  {
    title: "Contact",
    path: "/contact",
    exact: true,
    element: Contact,
  },
  {
    title: "Resume",
    path: "/resume",
    exact: true,
    element: Resume,
  },
];

export default routes;
