import React, { useRef } from "react";
import "../style/header.css";
import left from "../image/chap.png";
import right from "../image/ong.png";
import coctail from "../image/Сocktail.png";
import { NavLink } from "react-router-dom";
import usaBG from "../image/usa.png";
import bag from "../image/qulf.png";
// location.pathname === '/login' ? 'none_db' : 'header'  && location.pathname === "/" ? "header" : "header_global"
function Header() {
  let modal = useRef();
  function openModal() {
    modal.current.classList.add("show");
  }
  function closeModal() {
    modal.current.classList.remove("show");
  }
  return (
    <section className="header">
      <div ref={modal} className="modal">
        <div className="modal__item">
        <NavLink style={{color:"white"}} to="/shop">SHOP</NavLink>
        <h4>About</h4>
        <h4>Funn stuff</h4>
        <h4>Find us</h4>
        <NavLink style={{color:"white"}} to="/">
        <img className="logo" src={coctail} alt="" />

        </NavLink>
        <div className="nav2__item">
          <img src={usaBG} alt="" />
          <h4>USA</h4>
        </div>
        <h4>Contact</h4>
        <h4>Log in</h4>
        <NavLink style={{color:"white"}} to="/bag">
          <h4>BAG</h4>
        </NavLink>
        <button onClick={closeModal}>x</button>
        </div>
      </div>

      <div className="burger" onClick={openModal}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="header__content">
        <img src={right} alt="" />
        <h4>
          Free domestic shipping on orders over $50 <span>Learn more</span>
        </h4>
        <img src={left} alt="" />
      </div>
      <div className="header__content2">
        <div className="header__nav">
          <NavLink to="/shop">
            <select>
              <option>shop</option>
            </select>
          </NavLink>
          <h4>About</h4>
          <select>
            <option>Fun stuff</option>
          </select>
          <h4>Find us</h4>
        </div>
        <NavLink to="/">
          <img className="logo" src={coctail} alt="" />
        </NavLink>
        <div className="header__nav2">
          <div className="nav2__item">
            <img src={usaBG} alt="" />
            <select>
              <option> USA</option>
            </select>
          </div>
          <h4>Contact</h4>
          <h4>Log in</h4>
          <NavLink to="/bag">
            <img src={bag} alt="" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Header;
