import { RouterProvider, createHashRouter } from "react-router-dom";
import { useState } from "react";
import { useRoleBasedRoutes } from "./routes";

export const MyAppRouter = () => {
  const [searchValue, setSearchValue] = useState("");

  const routerList = useRoleBasedRoutes({ searchValue, setSearchValue });

  if (!routerList) {
    return <div></div>;
  }

  const router = createHashRouter(routerList);

  return <RouterProvider router={router} />;
};
