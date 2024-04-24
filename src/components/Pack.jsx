import React from "react";
import '../style/pack.css'
import bg_img from '../image/limon koktel.png'
function Pack() {
  return (
    <section className="pack">
      <div className="container">
        <div className="pack__wrapper">
          <div className="pack__card">
            <h4>New in</h4>
            <h2>Rich and fruity</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <span>Shop now</span>
          </div>
          <img src={bg_img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Pack;
