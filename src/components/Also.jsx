import React from "react";
import "../style/also.css";
import dark_star from "../image/#.png";
import funcin from "../image/funcin.png";
function Also() {
  return (
    <section className="also">
      <div className="container">
        <h2>You might also like...</h2>
        <div className="also__wrapper">
          <div className="also__card">
            <img src={funcin} alt="" />
            <h3>Full - bodied</h3>
            <h4>Bottle</h4>
            <img src={dark_star} alt="" />
            <p>$35.59</p>
            <button>Shop now</button>
          </div>
          <div className="also__card">
            <img src={funcin} alt="" />
            <h3>Full - bodied</h3>
            <h4>Bottle</h4>
            <img src={dark_star} alt="" />
            <p>$35.59</p>
            <button>Shop now</button>
          </div>
          <div className="also__card">
            <img src={funcin} alt="" />
            <h3>Full - bodied</h3>
            <h4>merch</h4>
            <img src={dark_star} alt="" />
            <p>$15.00</p>
            <button>Shop now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Also;
