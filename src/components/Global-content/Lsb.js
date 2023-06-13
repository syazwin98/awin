import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

export default function Lsb() {
  return (
        <div className="left-sidebar ">
            <div className="sidebar-header d-flex align-items-center justify-content-center mb-0">
                <img className='fizi' src="./assets/images/awin1.png" alt="Logo"/>
            </div>
            <div className=" text-white mb-3 d-flex align-items-center justify-content-center">
            Chemical Engineer (Gas)
            </div>

            <img className="me" src="./assets/images/awin-pic.jpg" alt="Me"/>
            <h2 className="email">Awin@gmail.com</h2>
            <h2 className="address">Johor, Malaysia</h2>
            
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
    
                <li>
                    <a href="https://www.linkedin.com/in/amirah-syazwina-0aab11197/">  <FontAwesomeIcon icon={faLinkedin} /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/arhsyz/"><i className="lab la-instagram"></i></a>
                </li>
                <li>
                <a href="https://www.utm.my/">  <FontAwesomeIcon icon={faUniversity} /></a>
                </li>
            </ul>
            <a href="#" className="theme-btn">
                <i className="las la-envelope"></i> Hire Me!
            </a>
            <hr></hr>

            
        </div>
  )
}   
