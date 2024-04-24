import React from "react";
import "../style/shopTwo.css";
import dark_star from "../image/#.png";
import happy from "../image/img.png";
import funcin from "../image/funcin.png";
import novda from '../image/novda.png'
import nok from '../image/nok.png'
import uzum from '../image/uzum.png'
import { NavLink } from "react-router-dom";
function ShopTwo() {
  return (
    <section>
      <section className="shopTwo">
        <NavLink to="/pdp" style={{color:"black"}} className="shopTwo__wrapper">
          <div className="shopTwo__card">
            <h3>Light - bodied</h3>
            <h5>-  Delicate and lean to sip -</h5>
            <div className="shopTwo__content">
              <span>ADAPTOGENIC INGREDIENDS:</span>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="shopTwo__content2">
                  <div>
                    <img src={novda} alt="" />
                    <h5>Earl Grey</h5>
                  </div>
                  <div>
                    <img src={nok} alt="" />
                    <h5>peach</h5>
                  </div>
                  <div>
                    <img src={uzum} alt="" />
                    <h5>pear</h5>
                  </div>
              </div>
            </div>
            <div className="shopTwo__content">
              <span>ADAPTOGENIC INGREDIENDS:</span>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
          <div className="shop__card2" style={{backgroundImage:`url(${happy})`}}>
            <h2>Happy hour 24/7</h2>
          </div>
          <div className="shop__card">
            <span className="new">NEW</span>
            <img src={funcin} alt="" />
            <h4>Bottle</h4>
            <img src={dark_star} alt="" />
            <p>$35.59</p>
            <button>Shop now</button>
          </div>
          
        </NavLink>
      </section>
    </section>
  );
}

export default ShopTwo;
