import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRoleBasedRoutes } from "./routes";

export const MyAppRouter = () => {
  const routerList = useRoleBasedRoutes();

  if (!routerList) {
    return <div></div>;
  }

  const router = createBrowserRouter(routerList);

  return <RouterProvider router={router} />;
};
