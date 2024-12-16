import React from "react";
import { Link, Outlet } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
