import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "/firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";

import HomePage from "../components/pages/common/Home/HomePage";
import Authentication from "../components/pages/common/Authentication/Authentication";
import Layout from "../components/template/Layout/Layout";
import Wishlist from "../components/pages/user/Wishlist/Wishlist";
import NotFound from "../components/pages/common/NotFound/NotFound";
import ProductDetails from "../components/template/ProductDetails/ProductDetails";
import Cart from "../components/pages/user/Cart/Cart";
import Checkout from "../components/pages/user/CheckOut/CheckOut";
import Search from "../components/pages/common/Search/Search";

export const useRoleBasedRoutes = ({ searchValue, setSearchValue }) => {
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
        element: (
          <Layout
            role="user"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
        errorElement: <NotFound />,
        children: [
          {
            path: "/",
            element: (
              <HomePage
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            ),
          },
          { path: "search", element: <Search searchValue={searchValue} /> },
          { path: "product/:id", element: <ProductDetails /> },
          { path: "wishlist", element: <Wishlist /> },
          { path: "cart", element: <Cart /> },
          { path: "checkout", element: <Checkout /> },
          { path: "authentication", element: <Navigate to="/" replace /> },
        ],
      },
    ];
  } else {
    return [
      {
        path: "/",
        element: (
          <Layout
            role="guest"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
        errorElement: <NotFound />,
        children: [
          {
            path: "/",
            element: (
              <HomePage
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            ),
          },
          { path: "authentication", element: <Authentication /> },
          { path: "search", element: <Search searchValue={searchValue} /> },
          { path: "product/:id", element: <ProductDetails /> },
        ],
      },
    ];
  }
};
