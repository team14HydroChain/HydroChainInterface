import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h5 className='primary-heading'>Have Questions?</h5>
        <h6 className='primary-heading'>Let Us Help You</h6>
        <div className='contact-form-container'>
            <input type="text" placeholder='youremail@gmail.com' />
            <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow'>Submit</button>
        </div>
    </div>
  )
};

export default Contact