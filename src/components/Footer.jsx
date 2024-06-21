import React from 'react'
import logo from "../Assets/Hydrochain.png";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='footer-icons'>
                <BsTwitter/>
                <br />
                <SiLinkedin/>
                <br />
                <FaFacebook/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Hydrotoken</span>
                <span>Producers</span>
                <span>Storage</span>
                <span>Delivery</span>
            </div>
            <hr />
            <div className='footer-section-columns'>
                <span>contact@hydrochain.com</span>
                <span>(+216) 51 63 48 92</span>
            </div>
            <hr />
            <div className='footer-section-columns'>
                <span>Terms and conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>

    </div>

  )
}

export default Footer