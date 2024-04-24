import React, { useState } from "react";
import "../style/accardion.css";
function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accardion">
      <button onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? "-" : "+"}
      </button>
      {isOpen && <p>{content}</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <Accordion
        title="Details"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.?"
      />
      <Accordion
        title="Full Ingredients"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.?"
      />
      <Accordion
        title="Product features"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.?"
      />
      {/* Add more Accordions here if needed */}
    </div>
  );
}

export default App;
