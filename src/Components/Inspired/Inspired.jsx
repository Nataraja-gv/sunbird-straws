import React from "react";
import "./Inspired.css";

const Inspired = () => {
  return (
    <div className="inspierd-main-container">
      <div className="inspierd-top-section">
        <h3>What inspired us to make the change?</h3>
      </div>

      <div className="inspierd-botton-section">
        <div className="inspierd-botton-left-section">
          <ul>
            <li>
              Given that climate change is the most significant disruptor of our
              time, preserving the environment and empowering rural communities,
              one green innovation at a time, are central to our philosophy.
            </li>

            <div className="mark"></div>

            <li>
              Sunbird Straws TM are made from anti-waste that would otherwise be
              burned, contributing to the already high levels of carbon
              emissions.
            </li>

            <div className="mark"></div>
            <li>
              Our innovation aims to reduce the plastic threat endangering our
              oceans and aquatic life by promoting a sustainable lifestyle.
            </li>
          </ul>
          <div className="creating-social-story-section">
            <button>Know More</button>
          </div>
        </div>

        <div className="inspierd-botton-right-section">
          <img
            src="https://sunbirdstraws.com/wp-content/uploads/2023/01/About-Image-1.png"
            className="inspired-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Inspired;
