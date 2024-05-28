import React from "react";
import "./Slider.css";
import sliderdata from "./Sliderdata";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider-main-container">
     <h1 className="slider-h1">TESTMONIALS</h1>
      <Carousel
        responsive={responsive}
        customTransition="all 2s ease-in"
        keyBoardControl={true}
        renderDotsOutside={true}
        containerClass="carousel-container"
        infinite={true}
        customDot={<CustomDot />}
        showDots={true}
        autoPlay={true}
        dotListClass={"react-multi-carousel-dot-list custom-dot-list-style"}
        autoPlaySpeed={5000}
        itemClass="carousel-item-padding-40-px itemimage"
        removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
      >
        {sliderdata.map((item, index) => (
          <div className="slider-slider-section" key={index}>
            <div className="slider-image-section">
              <img src={item.Image} alt="" className="slider-image" />
            </div>
            <div className="slider-description-section">
              <p>{item.Description}</p>
            </div>

            <div className="slider-mark">

            </div>
            <div className="slider-name-section">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export const CustomDot = ({ active }) => (
  <button className={`custom-dot${active ? " active" : ""}`} />
);

export default Slider;
