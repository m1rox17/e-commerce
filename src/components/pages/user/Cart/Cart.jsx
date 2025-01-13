import { useState, useEffect } from "react";
import "./cart.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  removeItem,
  syncCart,
} from "../../../../redux/Cart/cartSlice";

import { auth } from "../../../../../firebase-config";

export default function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [selectedValue, setSelectedValue] = useState("2");

  useEffect(() => {
    if (auth.currentUser) {
      dispatch(fetchCart());
    } else {
      console.error("User is not authenticated");
    }
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    dispatch(removeItem({ id }));
    dispatch(syncCart(updatedItems));
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
                    <button onClick={() => handleRemoveItem(item.id)}>x</button>
                    <h1>{item.name}</h1>
                  </div>
                </td>
                <td>
                  <h1 className="product__price">${item.price}</h1>
                </td>
                <td>
                  <select
                    className="quantity__select"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                  </select>
                </td>
                <td>$650</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />

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
              <span>Subtotal:</span> <span>$1750</span>
            </p>
            <hr />
            <p>
              <span>Shipping:</span> <span>Free</span>
            </p>
            <hr />
            <p>
              <span>Total:</span> <span>$1750</span>
            </p>
            <button className="checkout__btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
