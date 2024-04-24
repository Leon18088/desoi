import React from "react";
import idiw from "../image/idish3.png";
import "../style/end.css";
function End() {
  return (
    <section className="end">
      <div className="container">
        <h4>You might also like</h4>
        <div className="end__card">
          <img src={idiw} alt="" />
          <div className="end__content">
            <div>
              <div className="end__content2">
                <h4>Full-bodied</h4>
                <p>$35.59</p>
              </div>
              <span>1 bottle</span>
              <form>
                <input type="text" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default End;
