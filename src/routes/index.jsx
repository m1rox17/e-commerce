import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routerList } from "./routes";

export const MyAppRouter = () => {
  return <RouterProvider router={createBrowserRouter(routerList)} />;
};
