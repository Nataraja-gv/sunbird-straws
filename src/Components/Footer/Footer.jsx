import React from 'react';
import "./Footer.css";
import { RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='Footer-main-container'>
        <div className='footer-top-container'>
            <div className='footer-title-image-section'>
             <div className=''>
             <img src="https://sunbirdstraws.com/wp-content/uploads/2023/01/logo-300x91.png" className='footer-image'  />
                 
             </div>
                <div className='footer-address' >

                 {/* <address>
                 Brown Reed Agri-Waste Innovations Pvt Ltd
             #595 D, Group Employees Layout, 1st A
                 Block, Lingadheeranahalli, Bangalore,
                 Karanataka, India - 560091
                 </address>  */}

                 <address>
                 Zaphon Repurpose, Mayilmoola,
Perumbala Post, Kasargod
District, Kerala Pin- 671317
                 </address>
                </div>

                  
            </div>

            <div className='footer-info-section'>
                
                <ul>
                <h1>Information</h1>
                <li>About Us</li> 
               <li>Contact Us</li>
                <li>Terms & Conditions</li>
               <li>Privacy Policy</li>
                <li>Cancellation & Refund Policy</li>
                <li>Shipping Policy</li>
 </ul>
            </div>




            <div className='footer-contact-section'>
                
                <ul>
                <h1>Contact Us</h1>
                <li>Phone: <span>+91 99020 03239</span> </li> 
               <li>Need help or have a question?</li>
                <li>Contact us at:</li>
               <li><span>info@sunbirdstraws.com</span></li>
                 
 </ul>
            </div>


            <div className='footer-socail-section'>
                 
                <ul><h1>Social</h1> 
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </div>

        <div className='footer-bottom-container'>
            <p>Copyright © 2024 Sunbird Straws </p>
            <div className='copyright-section'>
            <RiVisaLine />
            <SiAmericanexpress />
            <FaCcMastercard />
            <FaCcPaypal />
            </div>
        </div>
        
            
        </div>
    );
}

export default Footer;
