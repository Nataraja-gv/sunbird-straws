import React from 'react';
import Simple from "./Simple"
import "./Home.css"
import  Creating from "../Creating/Creating"
import Drink from "../Drink/Drink"
import Eco from "../Eco/Eco"
import Sunbird from "../SunBirds/Sunbird"
import Inspired from "../Inspired/Inspired"
import Makes from "../Makes/Makes"
import Slider from "../Slider/Slider"
import Award from "../Award/Award"
import Green from "../Green/Green.jsx"
const Home = () => {
    return (
        <div className='home-main-container'>
          <div className=''>
            <Simple/>
          </div>

          <div>
            <Creating/>
          </div>
          <div>
            <Drink/>
          </div>

          <div>
            <Eco/>
          </div>

          <div>
            <Sunbird/>
          </div>
            
          <div>
            <Makes/>
          </div>

          <div>
            <Inspired/>
          </div>

          <div>
            <Slider/>
          </div>

          <div className='award-home-section'>
            <Award/>
          </div>
          <div>
            <Green/>
          </div>
        </div>
    );
}

export default Home;
