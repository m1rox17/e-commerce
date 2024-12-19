import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "/firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";

import HomePage from "../components/Home/HomePage";
import Authentication from "../components/Authentication/Authentication";
import Layout from "../components/Layout/Layout";
import Wishlist from "../components/Wishlist/Wishlist";
import NotFound from "../components/NotFound/NotFound";

export const useRoleBasedRoutes = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getUserRole = () => {
    if (user) return "user";
    return "guest";
  };

  if (loading) {
    return null;
  }

  const role = getUserRole();

  if (role === "user") {
    return [
      {
        path: "/",
        element: <Layout role="user" />,
        errorElement: <NotFound />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "wishlist", element: <Wishlist /> },
          { path: "authentication", element: <Navigate to="/" replace /> },
        ],
      },
    ];
  } else {
    return [
      {
        path: "/",
        element: <Layout role="guest" />,
        errorElement: <NotFound />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "authentication", element: <Authentication /> },
        ],
      },
    ];
  }
};
