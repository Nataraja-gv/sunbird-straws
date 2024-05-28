import React from 'react';
import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiBoxes } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='Navbar-main-container'>
        <div className='Navbar-image-section'>
            <img src="https://sunbirdstraws.com/wp-content/uploads/2023/03/logo-brown.png" alt='' className='bird-image'/>
        </div>

        <ul className='navbar-ul-menu-container'>
            <li>Home</li>
            <li>Products</li>
            <li>our story</li>
            <li>Team</li>
            <li>Media</li>
            <li>Contact</li>
        </ul>


        <div className='navbar-profile-conatiner'>
        <IoIosSearch />
        <CgProfile/>
        <CiBoxes />
        </div>
      
        </div>
    );
}

export default Navbar;
