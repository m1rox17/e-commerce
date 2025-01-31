import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./layout.scss";

export default function Layout({ role, searchValue, setSearchValue }) {
  return (
    <div className="layout">
      <Header
        role={role}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
