import React from "react";
import "./Cart.scss";

export default function Cart() {
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
            <tr>
              <td>
                <div className="product__info">
                  <img
                    src="/src/img/Gamepad.png"
                    alt="GP11 Shooter USB Gamepad"
                    className="product__image"
                  />
                  <h1>GP11 Shooter USB Gamepad</h1>
                </div>
              </td>
              <td>
                <h1 className="product__price">$650</h1>
              </td>
              <td>
                <select className="quantity__select">
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                </select>
              </td>
              <td>$650</td>
            </tr>
            <tr>
              <td>
                <div className="product__info">
                  <img
                    src="/src/img/Camera.png"
                    alt="CANON EOS DSLR Camera"
                    className="product__image"
                  />
                  <h1>CANON EOS DSLR Camera</h1>
                </div>
              </td>
              <td>
                <h1 className="product__price">$550</h1>
              </td>
              <td>
                <select className="quantity__select">
                  <option value="1">01</option>
                  <option value="2" selected>
                    02
                  </option>
                  <option value="3">03</option>
                </select>
              </td>
              <td>$1100</td>
            </tr>
          </tbody>
        </table>
        <div className="cart__actions">
          <button className="return__btn">Return To Shop</button>
          <button className="update__btn">Update Cart</button>
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
