import React from 'react';
import './Footer.css';
import logo from './logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top_part">
        <ul className="footer_collection">
          <li><p>Servicec</p></li>
          <li>Online Instructor</li>
          <li>Premium E Course</li>
          <li>E Books</li>
          <li>Our Blogs</li>
        </ul>
        <ul className="footer_collection">
          <li><p>Servicec</p></li>
          <li>Online Instructor</li>
          <li>Premium E Course</li>
          <li>E Books</li>
          <li>Our Blogs</li>
        </ul>
        <ul className="footer_collection">
          <li><p>Servicec</p></li>
          <li>Online Instructor</li>
          <li>Premium E Course</li>
          <li>E Books</li>
          <li>Our Blogs</li>
        </ul>
        <ul className="footer_collection">
          <li><p>Servicec</p></li>
          <li>Follow us on social media and stay updated with the latest information about our services</li>
        </ul>
        </div> 
        <div className="footer_bottom_part">
          <img src={logo} alt="" />
          <p>© Skillcare 2021 all rights reserved</p>
          </div> 
    </div>
  )
}

export default Footer