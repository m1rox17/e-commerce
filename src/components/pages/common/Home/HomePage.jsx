import React from "react";
import "./home.scss";

import { FaApple } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineArrowForward } from "react-icons/md";

import products from "/src/data/products.json";
import ProductsBlock from "../../../template/Products/ProductsBlock";

import { useDispatch, useSelector } from "react-redux";
import { addItem, syncCart } from "../../../../redux/Cart/cartSlice";
import {
  addItemWishlist,
  syncWishlist,
} from "../../../../redux/Wishlist/wishlistSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { itemsWishlist } = useSelector((state) => state.wishlist);

  const handleAddItem = (product) => {
    const updatedItems = [...items, { ...product, count: 1 }];
    dispatch(addItem(product));
    dispatch(syncCart(updatedItems));
  };

  const handleAddItemWishlist = (product) => {
    const updatedItems = [...itemsWishlist, { ...product, count: 1 }];
    dispatch(addItemWishlist(product));
    dispatch(syncWishlist(updatedItems));
  };
  return (
    <main className="content">
      <div>
        <div className="intro">
          <div className="intro__categories">
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
          <div className="header__product">
            <h1 className="product__our">Our Product</h1>
            <h1>Explore Our Products</h1>
          </div>
          <div className="product__row">
            {products.products.map((product) => (
              <div className="product__col" key={product.id}>
                <ProductsBlock
                  id={product.id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  star={product.star}
                />
                <button
                  onClick={() => handleAddItem(product)}
                  className="col__button"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => handleAddItemWishlist(product)}
                  className="col__like"
                >
                  <IoIosHeartEmpty />
                </button>
                <button
                  onClick={() => console.log("View product:", product.id)}
                  className="col__view"
                >
                  <IoEyeOutline />
                </button>
              </div>
            ))}
          </div>
          <button className="product__button">View All Products</button>
        </div>
      </div>
    </main>
  );
}
