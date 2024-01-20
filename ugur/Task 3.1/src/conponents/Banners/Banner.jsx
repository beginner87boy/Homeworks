import React from 'react'
import './Banner.css'
const Banner = (props) => {
  return (
    <div className='baner'>
      <h2>{props.baner_title} </h2>
      <button>Start Buy with us</button>
    </div>
  )
}

export default Banner