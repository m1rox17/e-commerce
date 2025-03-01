import React, { useEffect, useState } from "react";
import "./check.scss";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../../../firebase-config";
import { fetchCart, toatalItemsPrice } from "../../../../redux/Cart/cartSlice";

export default function CheckOut() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const total = useSelector(toatalItemsPrice);

  const [value, setValue] = useState();

  useEffect(() => {
    if (auth.currentUser) {
      dispatch(fetchCart());
    } else {
      console.error("User is not authenticated");
    }
  }, [dispatch]);

  const placeOrder = () => {
    console.log(value);
  };

  return (
    <div className="container">
      <div className="checkout">
        <div className="checkout__billing">
          <h2>Billing Details</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              placeOrder();
            }}
            className="billing__form"
            id="billing__form"
          >
            <div className="form__group">
              <label>First Name*</label>
              <input type="text" required />
            </div>
            <div className="form__group">
              <label>Shipping Address*</label>
              <input type="text" required />
            </div>
            <div className="form__group">
              <label for="email">Email Address*</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form__group">
              <label>Phone Number*</label>
              <PhoneInput
                defaultCountry="UA"
                value={value}
                onChange={setValue}
                required
              />
            </div>
            <div className="form__group checkbox__group">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
        <div className="checkout__summary">
          <div className="summary__items">
            {items.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
          <div className="summary__totals">
            <p>
              Subtotal: <span>${total}</span>
            </p>
            <p>
              Shipping: <span>Free</span>
            </p>
            <p>
              Total: <span>${total}</span>
            </p>
          </div>
          <div className="payment__options">
            <p>
              <input type="radio" name="payment" id="bank" />
              <label htmlFor="bank">Bank</label>
            </p>
            <p>
              <input type="radio" name="payment" id="cash" defaultChecked />
              <label htmlFor="cash">Cash on delivery</label>
            </p>
          </div>
          <div className="coupon__section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply__coupon">Apply Coupon</button>
          </div>
          <button type="submit" className="place__order" form="billing__form">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
