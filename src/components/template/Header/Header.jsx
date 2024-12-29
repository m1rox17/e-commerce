import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { CiUser } from "react-icons/ci";

import "./header.scss";
import ModalAccount from "../../modal/ModalAccount";

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            {role !== "user" && (
              <li>
                <Link to="/authentication">Sign Up</Link>
              </li>
            )}
          </ul>
          <div className="searchbar">
            <input type="text" placeholder="What are you looking for?" />
            <FiSearch className="searchbar-icon" />
          </div>
          <div>
            <Link to="/wishlist">
              <IoIosHeartEmpty size={24} />
            </Link>
            <Link to="/cart">
              <GrCart className="cart-icon" size={24} />
            </Link>
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
