import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ProductsBlock({ id, img, name, price, star }) {
  const maxStars = 5;

  return (
    <div className="product__block">
      <div className="prudct__wrapper">
        <img className="product__img" src={img} alt={name} />
      </div>
      <div>
        <NavLink
          className="product__link"
          to={`/product/${id}`}
          target="_blank"
        >
          <h1 className="product__title">{name}</h1>
        </NavLink>
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
