import React from "react";
import products from "/src/data/products.json";

import ProductsBlock from "../../../template/Products/ProductsBlock";

export default function Search({ searchValue }) {
  const handleSearch = () => {
    return products.products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };
  return (
    <div>
      <div className="product__row">
        {handleSearch().map((product) => (
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
  );
}
