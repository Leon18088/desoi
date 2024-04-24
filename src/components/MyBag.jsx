import React, { useState } from "react";
import "../style/myBag.css";
import idiw from "../image/idish3.png";
function MyBag() {
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(2);
  return (
    <section className="myBag">
      <div className="container">
        <h2>My Bag</h2>
        <div className="product">
          <h4>Product</h4>
          <ul>
            <li>Price</li>
            <li>QTY</li>
            <li>Total</li>
          </ul>
        </div>
        <div className="bag__wrapper">
          <div className="bag__card">
            <img src={idiw} alt="" />
            <div className="bag__content">
              <h4>Medium-bodied</h4>
              <p>1 bottle</p>
              <p>Delivery every 1 month</p>
              <span>Remove</span>
            </div>
          </div>
          <div className="bag__card2">
            <div>
              <span>$28.00</span>
              <p>$30.00</p>
            </div>
            <div className="bag__plus">
              <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
              <span>{number}</span>
              <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
            </div>
            <span>$28.00</span>
          </div>
        </div>
        <div className="bag__wrapper">
          <div className="bag__card">
            <img src={idiw} alt="" />
            <div className="bag__content">
              <h4>Light-bodied</h4>
              <p>2 bottle</p>
              <a href="#!">Remove</a>
            </div>
          </div>
          <div className="bag__card2">
            <div>
              <h5>$35.59</h5>
            </div>
            <div className="bag__plus">
              <button onClick={() => setNumber2((prev) => prev - 1)}>-</button>
              <span>{number2}</span>
              <button onClick={() => setNumber2((prev) => prev + 1)}>+</button>
            </div>
            <span>$71.18</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyBag;
