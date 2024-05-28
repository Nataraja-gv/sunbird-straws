import React from "react";
import "./Green.css";

const Green = () => {
  return (
    <div className="green-main-container">
      <div className="green-left-container">
        <h1>Ready to make the green change?</h1>
        <p>Email us at info@sunbirdstraws.com</p>
        <div className="green-mark"></div>
        <div className="green-bulk-container">
          <h4>Interested in bulk purchase of our straws?</h4>
          <button>Enquire Now</button>
        </div>
        <div className="green-mark"></div>

        <div className="green-production-container">
          <h4>Interested in starting a production unit?</h4>
          <button>Enquire Now</button>
        </div>
      </div>

      <div className="green-right-container">
        <img
          src="https://sunbirdstraws.com/wp-content/uploads/2023/03/GREEN-CHANGE-image.png"
          alt=""
          className="green-image"
        />
      </div>
    </div>
  );
};

export default Green;
