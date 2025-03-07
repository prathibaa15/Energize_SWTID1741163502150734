import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>Energize</h5>
        </span>
        <h2>In training, <b>you</b>  <b>listen to</b> Your body</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero