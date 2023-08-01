import React from 'react';
import "../Component.css";
import logo from '../img/college_logo.png'
import csilogo from '../img/csi_logo.jpg'

export default function Footer() {
  return (
    <div className='foot_main'>
        <div className='logo_img'>
            <img src={logo} alt="" />
            <img src={csilogo} alt="" />
        </div>
        <h6>Developed by Hrishikesh Gupta</h6>
    </div>
  )
}
