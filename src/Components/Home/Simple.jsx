import React from "react";
import "./Simple.css";

const Simple = () => {
  return (
    <div className="simple-main-container">
      <div className="simple-left-container">
        <img
          src="https://sunbirdstraws.com/wp-content/uploads/2023/03/landing-page.png"
          className="simple-image"
        />
      </div>

      <div className="simple-right-container">
        <div className="simple-right-title-section">
          <h1>Simple Innovations to drive green change</h1>
        </div>

        <div className="simple-right-description-section">
          <p>
            Simple Innovations to drive green change World’s first premium
            multi-layered drinking straws and pens made from dried coconut
            leaves.
          </p>
        </div>

        <div className="simple-right-action-section">
        <div className="simple-right-btn1-section">
        <button className="btn1">Shop straws</button>
        </div>
        <div className="simple-right-btn2-section">
        <button className="btn2">Shop Pens</button>
        </div>
           
           
        </div>


      </div>
    </div>
  );
};

export default Simple;
