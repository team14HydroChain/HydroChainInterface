import React from 'react'
import Card from "./Card";
import Card9 from "./Card9";
import Card10 from "./Card10";
import Card11 from "./Card11";


const Delivery = () => {
  return (
    <div className='home-container'>
      <h1 className='primary-heading'>Delivery</h1>
      <div className='home-banner-container'>
      <Card9/>
      <Card10/>
      <Card11/>
      </div>
      <br />
      <h1 className='primary-text'>Notification System</h1>
      <p>Download our application get notified of the real-time market evolution of our token and buy your green hydrogen for the cheapest prices with the possibility to track it online.</p>
      <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow'>
              Learn more
      </button>
    </div>
  )
}

export default Delivery