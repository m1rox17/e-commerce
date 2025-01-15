import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { CiUser } from "react-icons/ci";

import "./header.scss";
import ModalAccount from "../../modal/ModalAccount";
import { useState } from "react";

export default function Header({ role }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <header>
        <h1>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <span>ShopNow</span>
      </header>
      <div className="container">
        <nav>
          <h1>Exclusive</h1>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                About
              </NavLink>
            </li>
            {role !== "user" && (
              <li>
                <NavLink
                  to="/authentication"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
          <div className="searchbar">
            <input type="text" placeholder="What are you looking for?" />
            <FiSearch className="searchbar-icon" />
          </div>
          <div>
            <NavLink
              to="/wishlist"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <IoIosHeartEmpty size={24} />
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <GrCart className="cart-icon" size={24} />
            </NavLink>
            {role === "user" && (
              <CiUser
                size={24}
                className="user-icon"
                onClick={() => setOpenModal(true)}
              />
            )}
            {openModal && <ModalAccount setOpenModal={setOpenModal} />}
          </div>
        </nav>
      </div>
    </div>
  );
}
