import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Assets/Hydrochain.png";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';

const Footer1 = () => {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {/* column1 */}
                <div className='col'>
                    <img className='logo' src={logo} alt="" />
                </div>
                {/* column2 */}
                <div className='col'>
                    <h4>Links</h4>
                    <ul className='list-unstyled'>
                        <li>Hydrotoken</li>
                        <li>Producers</li>
                        <li>Storage</li>
                        <li>Delivery</li>                    
                    </ul>
                </div>

                {/* column3 */}
                <div className='col'>
                    <h4>Contact</h4>
                    <ul className='list-unstyled'>
                        <li>contact@hydrochain.com</li>
                        <li>(+216) 51 63 48 92</li>
                                            
                    </ul>
                </div>
            </div>
            <hr />
            <div className='row'>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Hydrochain | All right reserved | Terms of service | Privacy Policy
                </p>
            </div>
        </div>

    </div>
  )
}

export default Footer1