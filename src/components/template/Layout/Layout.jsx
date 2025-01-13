import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./layout.scss";

export default function Layout({ role }) {
  return (
    <div className="layout">
      <Header role={role} />
      <Outlet />
      <Footer />
    </div>
  );
}
