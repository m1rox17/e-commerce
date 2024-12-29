import { useState } from "react";
import "./Cart.scss";

import { useSelector } from "react-redux";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const [selectedValue, setSelectedValue] = useState("2");

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
              <tr>
                <td>
                  <div className="product__info">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="product__image"
                    />
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
