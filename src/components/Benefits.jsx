import React from "react";
import "../style/benefits.css";
import img1 from "../image/strawberry.png";
import img2 from "../image/apricot.png";
import img3 from "../image/birch-tree (1).png";
function Benefits() {
  return (
    <section className="benefit">
      <div className="container">
        <h2>Benefits and Ingredients</h2>
        <h5>
          <span> Benefits:</span> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
        </h5>
        <div className="benefit__wrapper">
          <div className="ben__card">
            <img src={img1} alt="" />
            <h4>Strawberry</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="ben__card">
            <img src={img2} alt="" />
            <h4>Birch</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="ben__card">
            <img src={img3} alt="" />
            <h4>Apricot</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <h3>Ingredient Glossary</h3>
      </div>
    </section>
  );
}

export default Benefits;
