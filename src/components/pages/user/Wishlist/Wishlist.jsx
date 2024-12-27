import React from "react";
import "./wishlist.scss";

import products from "/src/data/products.json";
import ProductsBlock from "../../../template/Products/ProductsBlock";

export default function Wishlist() {
  return (
    <div>
      <div className="container">
        <div className="washlist__header">
          <h1>Wishlist</h1>
          <button>Move All To Bag</button>
        </div>
        <div className="product__row">
          {products.products.map((product) => (
            <div className="product__col">
              <ProductsBlock
                key={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                star={product.star}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
