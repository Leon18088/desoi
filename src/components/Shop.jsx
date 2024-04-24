import React from "react";
import "../style/shop.css";
import right_img from "../image/dark_rig.png";
import dark_star from "../image/#.png";
import light_star from "../image/stars.png";
import funcin from "../image/funcin.png";
import { NavLink } from "react-router-dom";

function Shop() {
  return (
    <section className="shop">
      <div className="shop__hop">
        <h4>Home</h4>
        <img src={right_img} alt="" />
        <p>Beverages</p>
      </div>
      <h2>Shop beverages</h2>
      <NavLink to="/pdp" style={{color:"black"}} className="shop__wrapper">
        <div className="shop__card">
          <h3>Variety Pack</h3>
          <h5>- Delicate and lean to sip -</h5>
          <div className="shop__content">
              <span>ADAPTOGENIC INGREDIENDS:</span> 
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="shop__content">
            <span>ADAPTOGENIC INGREDIENDS:</span>
            <p>
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
        <div className="shop__card">
          <img src={funcin} alt="" />
          <h4>Bottle</h4>
          <img src={dark_star} alt="" />
          <p>$35.59</p>
          <button>Shop now</button>
        </div>
        <div className="shop__card">
          <img src={funcin} alt="" />
          <h4>Bottle</h4>
          <img src={light_star} alt="" />
          <p>$15.00</p>
          <button>Shop now</button>
        </div>
      </NavLink>
    </section>
  );
}

export default Shop;
