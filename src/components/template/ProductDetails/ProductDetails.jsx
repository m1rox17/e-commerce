import React from "react";
import "./product.scss";

import products from "/src/data/products.json";

import { TbTruckDelivery } from "react-icons/tb";
import { MdFindReplace } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.products.find((item) => item.id == id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const maxStars = 5;

  return (
    <div className="container">
      <div className="product__details">
        <div className="product__image">
          <img src={product.imgDetail} alt={product.name} />
        </div>
        <div className="product__info">
          <h1>{product.name}</h1>
          <div className="product__rating">
            {[...Array(maxStars)].map((_, index) => (
              <FaStar
                key={index}
                color={index < product.star ? "gold" : "lightgray"}
              />
            ))}
            <h1>{product.reviews}</h1>
          </div>
          <h2 className="product__price">${product.price}</h2>
          <p>{product.description}</p>
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
