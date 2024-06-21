import React from 'react';
import Navbar from "./Navbar";
import Card1 from "./Card1";
import Card2 from "./Card2";
import { FiArrowrRight } from "react-icons/fi";


const Home = () => {
  return (
    <div classname="home-container">
        <Navbar/>
        <br />
        <div className='home-banner-container'>
          <div className='home-text-section'>
            <h3 className='primary-heading'>
              HydroToken : HTC
            </h3>
            <p className='primary-text'>
            Our Hydro Token acts not only as a certifier for your footprint tracker but also assures that you support green hydrogen production. 
            You will be able to buy and sell hydrogen for your personal/industrial needs and track it in the delivery to ensure its not emitting carbon dioxide in its journey to you.
            </p>
            <h3 className='primary-text'>Get rewarded using green hydrogen.</h3>
            <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow'>
              Learn more
            </button>
          </div>
          {/* <div className='home-image-container'>
            <img src={Digram} alt="" />
          </div> */}
          <Card1/>
          <hr/>
          <Card2/>

        </div>
    </div>
  )
}

export default Home