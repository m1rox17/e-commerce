import HomePage from "../components/Home/HomePage";
import Authentication from "../components/Authentication/Authentication";
import Layout from "../components/Layout/Layout";

export const routerList = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "authentication",
        element: <Authentication />,
      },
    ],
  },
];
