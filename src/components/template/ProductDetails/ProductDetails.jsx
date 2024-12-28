import React from "react";
import "./product.scss";

import { TbTruckDelivery } from "react-icons/tb";
import { MdFindReplace } from "react-icons/md";

export default function ProductDetails() {
  return (
    <div className="container">
      <div className="product__details">
        <div className="product__image">
          <img src="/src/img/Havic.png" alt="Havic HV G-92 Gamepad" />
        </div>
        <div className="product__info">
          <h1>Havic HV G-92 Gamepad</h1>
          <div className="product__rating">
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <h1>(150 Reviews)</h1>
          </div>
          <h2 className="product__price">$192.00</h2>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble-free install & mess-free removal. Pressure
            sensitive.
          </p>
          <hr />
          <div className="product__options">
            <div className="product__quantity">
              <a className="quantity__subtraction">-</a>
              <span>2</span>
              <a className="quantity__sum">+</a>
            </div>
            <a className="buy__now">Buy Now</a>
            <button className="wishlist">❤️</button>
          </div>
          <div className="delivery__block">
            <div className="delivery__option">
              <div className="icon free__delivery__icon">
                <TbTruckDelivery size={32} />
              </div>
              <div>
                <h3>Free Delivery</h3>
                <p>
                  <a href="#">
                    Enter your postal code for Delivery Availability
                  </a>
                </p>
              </div>
            </div>
            <div className="delivery__option">
              <div className="icon return__delivery__icon">
                <MdFindReplace size={32} />
              </div>
              <div>
                <h3>Return Delivery</h3>
                <p>
                  Free 30 Days Delivery Returns. <a href="#">Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
