import React from 'react'
import './Newst.css'

const Newst = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe To Our Newletter And Stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Newst
