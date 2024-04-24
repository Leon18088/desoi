import React from "react";
import NewAccordion from "./NewAccardion";
import '../style/asced.css'
function Asked() {
  return (
    <section className="asked">
      <div className="container">
        <div className="asked__wrapper">
          <h2>Frequently Asked Questions</h2>
          <div className="asked__card">
            <NewAccordion/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Asked;
