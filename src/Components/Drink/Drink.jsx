import React from "react";
import "./Drink.css";

const Drink = () => {
  return (
    <div className="drink-main-container">
      <div className="drink-left-main-container">
        <img
          src="https://sunbirdstraws.com/wp-content/uploads/2023/03/Sunbird-straws.png"
          className="simple-image"
        />
      </div>

      <div className="drink-right-main-container">
        <div className="drink-h1-section">
          <h1>Drinking Straws</h1>
        </div>
        <div className="drink-description">
          <p>World’s first straws made from dried coconut leaves.</p>
        </div>

        <ul className="drink-link-list">
          <li>100% biodegradable and created with a chemical free process.</li>
          <li>
            Multi layered with natural anti-fungal and hydrophobic outer and
            inner walls
          </li>

          <li>Can be used it in any drinks for upto three hours</li>
        </ul>
        <div className="creating-social-story-section">
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Drink;
