import React from "react";
import "../style/collins.css";
import olov from "../image/Rectangle 30.png";
import idiw from "../image/funcin.png";
function Collins() {
  return (
    <section className="collins">
      <div className="container">
        <h4>De soi unique recipes</h4>
      </div>
        <div className="collins__grid">
          <div className="collins__cards">
            <img src={idiw} alt="" />
          </div>
          <div className="collins__cards2">
            <h3>Tom Collins Jr.</h3>
            <span>Ingredients</span>
            <div className="card__content12">
              <p>3 oz Riverine</p>
              <p>3/4 oz Lemon Juice</p>
              <p>3/4 oz Simple Syrup</p>
              <p>Club Soda</p>
            </div>
            <button>View Full recipe</button>
          </div>
          <div className="collins__cards3">
            <img src={olov} alt="" />
            <span>Next</span>
          </div>
        </div>
    </section>
  );
}

export default Collins;
