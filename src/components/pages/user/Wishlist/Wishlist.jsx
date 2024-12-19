import React from "react";
import "./wishlist.scss";

import { FaStar } from "react-icons/fa6";

export default function Wishlist() {
  return (
    <div>
      <div className="container">
        <div className="washlist__header">
          <h1>Wishlist</h1>
          <button>Move All To Bag</button>
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
      </div>
    </div>
  );
}
