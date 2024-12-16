import React from "react";

import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";

import "./header.scss";

export default function Header() {
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
            <li>
              <Link to="/authentication">Sign Up</Link>
            </li>
          </ul>
          <div className="searchbar">
            <input type="text" placeholder="What are you looking for?" />
            <FiSearch className="searchbar-icon" />
          </div>
          <div>
            <IoIosHeartEmpty className="like" size={24} />
            <GrCart size={24} />
          </div>
        </nav>
      </div>
    </div>
  );
}
