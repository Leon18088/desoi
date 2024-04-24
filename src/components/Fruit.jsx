import React from "react";
import "../style/fruit.css";
import rose from "../image/rose 1.png";
import novda from "../image/novda.png";
import nok from "../image/nok.png";
import daraxt from "../image/daraxt.png";
import uzum from "../image/uzum.png";
import meva from "../image/meva.png";

function Fruit() {
  return (
    <section className="fruit">
      <div className="container">
        <h2>Ingredients</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <span>Ingredient glossAry</span>
        <div className="fruit__wrapper">
          <div className="fruit__card">
            <img src={novda} alt="" />
            <h4>earl gray</h4>
          </div>
          <div className="fruit__card">
            <img src={rose} alt="" />
            <h4>Rose</h4>
          </div>
          <div className="fruit__card">
            <img src={nok} alt="" />
            <h4>Pear</h4>
          </div>
          <div className="fruit__card">
            <img src={daraxt} alt="" />
            <h4>birch</h4>
          </div>
          <div className="fruit__card">
            <img src={uzum} alt="" />
            <h4>black currant</h4>
          </div>
          <div className="fruit__card">
            <img src={meva} alt="" />
            <h4>bergamot</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fruit;
