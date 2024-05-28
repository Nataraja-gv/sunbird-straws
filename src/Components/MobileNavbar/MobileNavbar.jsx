import React from 'react';
import  "./MobileNAV.css"
import { FaBarsStaggered } from "react-icons/fa6";

const MobileNavbar = () => {
    return (
        <div className='mobile-nav-main-conatiner'>
           <div className='mobile-nav-image-section'>
            <img src='https://sunbirdstraws.com/wp-content/uploads/2023/03/logo-brown.png' alt className='m-nav-image'/>
           </div>

           <FaBarsStaggered />
            
        </div>
    );
}

export default MobileNavbar;
