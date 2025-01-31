import { useState, useEffect } from "react";
import "./cart.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  removeItem,
  syncCart,
  toatalItemsPrice,
  updateItem,
} from "../../../../redux/Cart/cartSlice";

import { auth } from "../../../../../firebase-config";

export default function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const total = useSelector(toatalItemsPrice);

  useEffect(() => {
    if (auth.currentUser) {
      dispatch(fetchCart());
    } else {
      console.error("User is not authenticated");
    }
  }, [dispatch]);

  const handleUpdateItem = (id, count) => {
    dispatch(updateItem({ id, count }));
    dispatch(
      syncCart(
        items.map((item) => (item.id === id ? { ...item, count } : item))
      )
    );
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    dispatch(removeItem({ id }));
    dispatch(syncCart(updatedItems));
  };

  return (
    <div className="cart">
      <div className="container">
        <table className="cart__table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="product__info">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="product__image"
                    />
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="product__btn"
                    >
                      X
                    </button>
                    <h1>{item.name}</h1>
                  </div>
                </td>
                <td>
                  <h1 className="product__value">${item.price}</h1>
                </td>
                <td>
                  <select
                    className="quantity__select"
                    value={item.count}
                    onChange={(event) =>
                      handleUpdateItem(item.id, Number(event.target.value))
                    }
                  >
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                  </select>
                </td>
                <td>${item.price * item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart__actions">
          <button className="return__btn">Return To Shop</button>
          <button
            className="update__btn"
            onClick={() => handleRemoveItem(items.id)}
          >
            Remove Item
          </button>
        </div>
        <div className="cart__bottom">
          <div className="coupon__section">
            <input
              type="text"
              placeholder="Coupon Code"
              className="coupon__input"
            />
            <button className="apply__coupon__btn">Apply Coupon</button>
          </div>
          <div className="cart__total">
            <h3>Cart Total</h3>
            <p>
              <span>Subtotal:</span> <span>${total}</span>
            </p>
            <hr />
            <p>
              <span>Shipping:</span> <span>Free</span>
            </p>
            <hr />
            <p>
              <span>Total:</span> <span>${total}</span>
            </p>
            <button className="checkout__btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
