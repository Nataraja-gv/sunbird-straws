import React from "react";
import "./Eco.css";

const Eco = () => {
  return (
    <div className="eco-main-container">
      <div className="eco-left-conatiner">
        <h1> What makes Sunbird Straws the best
eco-friendly straws?</h1>
      </div>

      <div className="eco-right-conatiner">
        <div className="eco-card-container">
          <img src="https://sunbirdstraws.com/wp-content/uploads/2023/01/eco-friendly-1.png" alt="" className="eco-images" />
          <p>
            0% biodegradable, chemical-free manufacturing under strict hygiene
            protocols.
          </p>
        </div>

        <div className="eco-card-container">
          <img src="https://sunbirdstraws.com/wp-content/uploads/2023/07/smooth-writing.png" alt="" className="eco-images" />
          <p>
          Premium ball point refill with ACU-FLO writing technology for smooth, long-lasting writing.
          </p>
        </div>

        <div className="eco-card-container">
          <img src="https://sunbirdstraws.com/wp-content/uploads/2023/07/Options.png" alt="" className="eco-images" />
          <p>
          Available in Individual packs, wooden case, and a box of 5, making them ideal for gifting and events.
          </p>
        </div>

        <div className="eco-card-container">
          <img src="https://sunbirdstraws.com/wp-content/uploads/2023/01/custom-made-1.png" alt="" className="eco-images" />
          <p>
          Can be customized to your specifications ( please contact us if you have a higher MOQ)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eco;
