import React from "react";
// import "./Eco.css";

const Makes = () => {
  return (
    <div className="eco-main-container">
      <div className="eco-left-conatiner">
        <h1>What makes Sunbird Pens the best eco-friendly Pens?</h1>
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
          <img src="https://sunbirdstraws.com/wp-content/uploads/2023/01/anti-fungal-1.png" alt="" className="eco-images" />
          <p>
            A multi-Layered straw with antifungal and hydrophobic outer and
            inner walls.
          </p>
        </div>

        <div className="eco-card-container">
          <img src="https://sunbirdstraws.com/wp-content/uploads/2023/01/temperature-1.png" alt="" className="eco-images" />
          <p>
            Straws keep their shape for three hours in warm or cold drinks. This
            doesn’t become soggy or leak glue and color like paper straws.
          </p>
        </div>

        <div className="eco-card-container">
          <img src="https://sunbirdstraws.com/wp-content/uploads/2023/01/custom-made-1.png" alt="" className="eco-images" />
          <p>
            The only environmental friendly straws available in a range of
            diameters and lengths to suit all types of drinks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Makes;
