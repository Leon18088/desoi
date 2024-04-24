import React from "react";
import bg_img from "../image/bg2.png";
import "../style/refer.css";
function Refer() {
  return (
    <section className="refer" style={{ backgroundImage: `url(${bg_img})` }}>
      <div className="container">
        <h4>Spread the word</h4>
        <h2>Refer a friend</h2>
        <h5>Refer now</h5>
      </div>
    </section>
  );
}

export default Refer;
