import React from 'react';
import awardData from "./Awarddata"
import "./Award.css"
import { FaArrowRight } from "react-icons/fa6";

const Award = () => {
    return (
        <div className='award-main-container'>
        <h1>Awards and Recognitions</h1>

        <div className='award-info-container'>
            {awardData.map((item,index)=>{
                 return(
                    <div className='award-details-container' key={index}>
                     <div className='award-description-section'>
                        <p>{item.description}</p>
                     </div>

                     <div className='awrd-image-section'>
                     <img src={item.Image} alt="" className='award-image-image'/>
                     </div>

                     <div className='award-btn-section'>
                        <p>Read More</p>
                         <p><FaArrowRight /></p>
                     </div>
                    </div>
                 )

            })}
        </div>
            
        </div>
    );
}

export default Award;
