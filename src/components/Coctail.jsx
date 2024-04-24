import React from "react";
import "../style/coctail.css";
import image_1 from "../image/IG photo.png";
import image_2 from "../image/IG photo (1).png";
import image_3 from "../image/IG photo (2).png";
import image_4 from "../image/IG photo (3).png";
function Coctail() {
  return (
    <section className="coctail">
      <h2>Join us @сocktail</h2>
      <div className="coctail__wrapper">
        <div className="coctail__cards">
          <img src={image_1} alt="" />
        </div>
        <div className="coctail__cards">
          <img src={image_2} alt="" />
        </div>
        <div className="coctail__cards">
          <img src={image_3} alt="" />
        </div>
        <div className="coctail__cards">
          <img src={image_4} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Coctail;
