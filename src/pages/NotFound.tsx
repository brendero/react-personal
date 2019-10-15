import React from 'react'
import DonaldGif from '../assets/Donald.gif';

const NotFound = () => {
  return (
    <>
    <div className="fof-wrapper">
      <h1>404</h1>
      <p>Your page URL is wrong</p>
    </div>
    <img src={DonaldGif} alt="Donald wrong" className="fof-img"/>
    </>
  )
}

export default NotFound
