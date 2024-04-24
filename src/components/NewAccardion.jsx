import React, { useState } from "react";
import "../style/newAccardion.css";
function NewAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="NewAccardion">
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
      <NewAccordion
        title="What’s inside the bottle?"
        content="Medium-bodied is made with the following 14 botanicals: Strawberry, Birtch root, Apricot...etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna?"
      />
      <NewAccordion
        title="How is it made?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.?"
      />
      <NewAccordion
        title="how do you drink medium-bodied?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.?"
      />
      <NewAccordion
        title="can i drink medium-bodied when i amd pragnant or driving?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.?"
      />
      <NewAccordion
        title="How long does a bottle keep?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.?"
      />
      {/* Add more Accordions here if needed */}
    </div>
  );
}

export default App;
