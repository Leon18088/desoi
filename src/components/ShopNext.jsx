import React from 'react'
import "../style/shopNext.css";
import dark_star from "../image/#.png";
import happy from "../image/12.png";
import funcin from "../image/funcin.png";
import novda from '../image/novda.png'
import nok from '../image/nok.png'
import uzum from '../image/uzum.png'
import { NavLink } from 'react-router-dom';
function ShopNext() {
  return (
    <section className='shopNext'>
      <NavLink to="/pdp" style={{color:"black"}} className="shopNext__wrapper">
      <div className="shopNext__card">
            <h3>Medium - bodied</h3>
            <h5>-  Delicate and lean to sip -</h5>
            <div className="shopNext__content">
              <span>ADAPTOGENIC INGREDIENDS:</span>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="shopNext__content2">
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
            <div className="shopNext__content">
              <span>ADAPTOGENIC INGREDIENDS:</span>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
        <div className="shopNext__card">
          <img src={funcin} alt="" />
          <h4>Bottle</h4>
          <img src={dark_star} alt="" />
          <p>$35.59</p>
          <button>Shop now</button>
        </div>
        <div className="shopNext__card2" style={{backgroundImage:`url(${happy})`}}>
            <h2>New lifestyle</h2>
          </div>
      </NavLink>
    </section>
  )
}

export default ShopNext
