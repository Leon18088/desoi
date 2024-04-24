import React from "react";
import '../style/rich.css'
import bg_img from "../image/image.png"
function Rich() {
  return (
    <section className="rich">
      <div className="container">
        <div className="rich__wrapper">
          <div className="rich__card">
            <h4>New in</h4>
            <h2>Rich and fruity</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <span>Shop now</span>
          </div>
          <img src={bg_img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Rich;
