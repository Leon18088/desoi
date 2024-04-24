import React from "react";
import '../style/enjoy.css'
import bg_ing from '../image/koktel7.png'
function Enjoy() {
  return (
    <section className="enjoy">
      <div className="container">
        <div className="enjoy__wrapper">
          <div className="enjoy__card">
            <h2>How to enjoy</h2>
            <span>On the Rocks</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br /> <br /> Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="enjoy__card2">
                <img src={bg_ing} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enjoy;
