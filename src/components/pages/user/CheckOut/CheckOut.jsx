import React from "react";
import "./check.scss";

export default function CheckOut() {
  return (
    <div className="container">
      <div className="checkout">
        {" "}
        <div className="checkout__billing">
          <h2>Billing Details</h2>
          <form className="billing__form">
            <div className="form__group">
              <label>First Name*</label>
              <input type="text" />
            </div>
            <div className="form__group">
              <label>Company Name</label>
              <input type="text" />
            </div>
            <div className="form__group">
              <label>Street Address*</label>
              <input type="text" />
            </div>
            <div className="form__group">
              <label>Apartment, floor, etc. (optional)</label>
              <input type="text" />
            </div>
            <div className="form__group">
              <label>Town/City*</label>
              <input type="text" />
            </div>
            <div className="form__group">
              <label>Phone Number*</label>
              <input type="text" />
            </div>
            <div className="form__group">
              <label>Email Address*</label>
              <input type="email" />
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
            <div className="item">
              <img src="" alt="LCD Monitor" />
              <p>LCD Monitor</p>
              <span>$650</span>
            </div>
            <div className="item">
              <img src="gamepad.png" alt="H1 Gamepad" />
              <p>H1 Gamepad</p>
              <span>$1100</span>
            </div>
          </div>
          <div className="summary__totals">
            <p>
              Subtotal: <span>$1750</span>
            </p>
            <p>
              Shipping: <span>Free</span>
            </p>
            <p>
              Total: <span>$1750</span>
            </p>
          </div>
          <div className="payment__options">
            <p>
              <input type="radio" name="payment" id="bank" />{" "}
              <label htmlFor="bank">Bank</label>
            </p>
            <p>
              <input type="radio" name="payment" id="cash" defaultChecked />{" "}
              <label htmlFor="cash">Cash on delivery</label>
            </p>
          </div>
          <div className="coupon__section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply__coupon">Apply Coupon</button>
          </div>
          <button className="place__order">Place Order</button>
        </div>
      </div>
    </div>
  );
}
