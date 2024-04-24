import React from "react";
import bg_img from "../image/bg.png";
import '../style/deswa.css'
function Deswa() {
  return (
    <section className="deswa" style={{backgroundImage:`url(${bg_img})`}}>
      <div className="container">
        <h4>/de · swa/</h4>
        <h2>Ut enim ad minim veniam, quisnostrud exercitation ullamco</h2>
        <p>About us</p>
      </div>
    </section>
  );
}

export default Deswa;
