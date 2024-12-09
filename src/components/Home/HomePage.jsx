import React from "react";
import "./home.scss";

import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdOutlineArrowForward } from "react-icons/md";

export default function HomePage() {
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
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
      <div className="container">
        <div className="intro">
          <div>
            <ul>
              <li>
                <a href="#">Woman’s Fashion</a>
              </li>
              <li>
                <a href="#">Men’s Fashion</a>
              </li>
              <li>
                <a href="#">Electronics</a>
              </li>
              <li>
                <a href="#">Home & Lifestyle</a>
              </li>
              <li>
                <a href="#">Medicine</a>
              </li>
              <li>
                <a href="#">Sports & Outdoor</a>
              </li>
              <li>
                <a href="#">Baby’s & Toys</a>
              </li>
              <li>
                <a href="#">Groceries & Pets</a>
              </li>
              <li>
                <a href="#">Health & Beauty</a>
              </li>
            </ul>
          </div>
          <div className="banner">
            <div className="banner__left">
              <div className="banner__title">
                <FaApple size={45} />
                <h1>iPhone 14 Series</h1>
              </div>
              <h1 className="bunner__text">Up to 10% off Voucher</h1>
              <div className="bunner__button">
                <h1>Shop Now</h1>
                <MdOutlineArrowForward fontSize={20} />
              </div>
            </div>
            <img src="/src/img/iphone14.png" alt="iphone14" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product">
          <h1 className="product__our">Our Product</h1>
          <div className="header__product">
            <h1>Explore Our Products</h1>
            <div>
              <IoArrowBackCircle className="product__icon" size={46} />{" "}
              <IoArrowForwardCircle className="product__icon" size={46} />
            </div>
          </div>
          <div className="product__row">
            <div className="product__col">
              <img
                className="product__img"
                src="/src/img/DogFood.png"
                alt="DogFood"
              />
              <div>
                <h1 className="product__title">Breed Dry Dog Food</h1>
                <div className="product__subtitle">
                  <h1 className="product__price">$100</h1>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
              </div>
            </div>
          </div>
          <button>View All Products</button>
        </div>
      </div>

      <footer>
        <h1>
          Developed by{" "}
          <a href="https://github.com/m1rox17" target="_blank">
            m1rox17
          </a>
        </h1>
        <h1>© Copyright Rimel 2022. All right reserved</h1>
        <h1>
          Fork this project{" "}
          <a href="https://github.com/m1rox17/e-commerce" target="_blank">
            HERE
          </a>
        </h1>
      </footer>
    </div>
  );
}
