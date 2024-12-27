import React from "react";
import { FaStar } from "react-icons/fa";

export default function ProductsBlock({ img, name, price, star }) {
  const maxStars = 5;

  return (
    <div className="product__block">
      <div className="prudct__wrapper">
        <img className="product__img" src={img} alt={name} />
      </div>
      <div>
        <h1 className="product__title">{name}</h1>
        <div className="product__subtitle">
          <h1 className="product__price">${price}</h1>
          <div className="product__stars">
            {[...Array(maxStars)].map((_, index) => (
              <FaStar key={index} color={index < star ? "gold" : "lightgray"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
