import { useState, useEffect } from "react";
import "./wishlist.scss";

import ProductsBlock from "../../../template/Products/ProductsBlock";
import { addItem, syncCart } from "../../../../redux/Cart/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchWishlist,
  removeItemWishlist,
  syncWishlist,
} from "../../../../redux/Wishlist/wishlistSlice";

import { auth } from "../../../../../firebase-config";

import { BsTrash3 } from "react-icons/bs";

export default function Wishlist() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { itemsWishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (auth.currentUser) {
      dispatch(fetchWishlist());
    } else {
      console.error("User is not authenticated");
    }
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    const updatedItems = itemsWishlist.filter((item) => item.id !== id);
    dispatch(removeItemWishlist({ id }));
    dispatch(syncWishlist(updatedItems));
  };

  const handleAddItem = (product) => {
    const updatedItems = [...items, { ...product, count: 1 }];
    dispatch(addItem(product));
    dispatch(syncCart(updatedItems));
  };

  return (
    <div>
      <div className="container">
        <div className="washlist__header">
          <h1>Wishlist</h1>
          <button>Move All To Bag</button>
        </div>
        <div className="product__row">
          {itemsWishlist.map((item) => (
            <div key={item.id} className="product__col">
              <ProductsBlock
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                star={item.star}
              />
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="col__trash"
              >
                <BsTrash3 />
              </button>
              <button
                onClick={() => handleAddItem(item)}
                className="col__button"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
