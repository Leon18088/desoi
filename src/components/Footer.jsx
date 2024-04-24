import React from "react";
import "../style/footer.css";
import arrow from "../image/Arrow 1.png";
import instagram from "../image/Instagram.png";
import facebook from "../image/Facebook.png";
import p_img from "../image/p.png";
import twitter from "../image/twitter.png";
import youtube from "../image/youtube.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__nav">
            <h4>Newsletter</h4>
            <p>Sign up to save 10% on your next order</p>
            <form>
              <input type="email" placeholder="Email Address" />
              <button><img src={arrow} alt="" /></button>
            </form>
            <div className="nav__link">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={p_img} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div className="footer__nav2">
            <nav>
              <ul className="nav__list">
                <li className="nav__item">explore</li>
                <li className="nav__item">Account</li>
                <li className="nav__item">Gift Card</li>
                <li className="nav__item">Refer a Friend</li>
                <li className="nav__item">Affiliates</li>
                <li className="nav__item">Corporate Gifting</li>
              </ul>
              <ul className="nav__list">
                <li className="nav__item">get help</li>
                <li className="nav__item">Shop</li>
                <li className="nav__item">FAQ</li>
                <li className="nav__item">Shipping & Returns</li>
                <li className="nav__item">Store Locator</li>
              </ul>
              <ul className="nav__list">
                <li className="nav__item">Company</li>
                <li className="nav__item">About</li>
                <li className="nav__item">Contact</li>
                <li className="nav__item">Blog</li>
                <li className="nav__item">Press</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="links">
          <h4>/de · swa/</h4>
          <ul className="links__item">
            <li>®2021 Сocktail</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>AMASS</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
