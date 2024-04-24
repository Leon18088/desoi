import React from "react";
import "../style/gift.css";
import gift from "../image/gift.png";
import toggle from "../image/toggle.png";
import corp from "../image/corp.png";
import oodi from "../image/i img.png";
function Gift() {
  return (
    <section className="gift">
      <div className="container">
        <div className="gift__wrapper">
          <div className="gift__card">
            <div className="gift__item">
              <div>
                <img src={gift} alt="" />
                <h4>Sending a gift?</h4>
              </div>
              <span>Remove</span>
            </div>
            <div className="gift__text">
              <p>
                Happy 25th Birthday Eddie! Hope you have a wonderful
                celebration!!!
              </p>
            </div>
            <button>save message</button>
            <a href="#!">Cancel</a>
          </div>
          <div className="gift__card2">
            <div className="gift__item2">
              <h4>Subtotal</h4>
              <h4>$99.18</h4>
            </div>
            <p>Shipping & tax calculated at checkout</p>
            <div className="gift__chiziq">
              <span></span>
            </div>
            <div className="yana__div12">
              <p>
                <span>$5.00</span> away from free shipping
              </p>
            </div>
            <div className="divo">
              <div>
                <div className="keyingi__div">
                  <img src={corp} alt="" />
                  <h4>Package protection</h4>
                  <img src={oodi} alt="" />
                </div>
                <div className="keyingi__div286">
                  <p>
                    For damage, lost & theft for <span>$0.99</span>
                  </p>
                </div>
              </div>
              <img src={toggle} alt="" />
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gift;
