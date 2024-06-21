import React from 'react'
import Card from "./Card";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";




const Producers = () => {
  return (
    <div className='home-container'>
      <h1 className='primary-heading'>Producers</h1>
      <div className='home-banner-container'>
      <Card3/>
      <Card4/>
      <Card5/>
      </div>
      <br />
      {/* <h1 className='primary-text'>Notif System</h1>
      <p>Download our application get notified of the real-time market evolution of our token and buy your green hydrogen for the cheapest prices with the possibility to track it online.</p>
      <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow'>
              Learn more
      </button> */}
    </div>
  )
}

export default Producers