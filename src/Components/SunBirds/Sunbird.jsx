import React from "react";
 

const Sunbird = () => {
  return (
    <div className="drink-main-container">
      <div className="drink-left-main-container">
        <img
          src="https://sunbirdstraws.com/wp-content/uploads/2023/03/Sunbird-S-cribbles.png"
          className="simple-image"
        />
      </div>

      <div className="drink-right-main-container">
        <div className="drink-h1-section">
          <h1> Sunbird Scribbles</h1>
        </div>
        <div className="drink-description">
          <p> World’s first writing pens made from coconut leaves.</p>
        </div>

        <ul className="drink-link-list">
          <li>Eco friendly pens that are committed to preserve our planet by an impressive 96% reduction in plastic usage.</li>
          <li>
          Our pens have a premium ball point refill with ACU-FLO writing technology.
          </li>

          {/* <li>Can be used it in any drinks for upto three hours</li> */}
        </ul>
        <div className="creating-social-story-section">
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default  Sunbird;
