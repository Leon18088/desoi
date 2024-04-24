import React from "react";
import bg_img from "../image/coctel1.png";
import "../style/hero.css";
import rasim from "../image/Vector (2).png";
function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__card">
          <img src={bg_img} alt="" />
        </div>
        <div className="hero__card2">
          <img src={rasim} alt="" />
          <div className="hero__content">
            <h4>New arrival</h4>
            <h2> Lorem ipsum dolor sit amet</h2>
            <p>Shop new</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
