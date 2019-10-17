import React from 'react'
import StillHere from '../assets/johntravolta.gif';

const NotFound = () => {
  return (
    <>
    <div className="fof-wrapper">
      <h1>404</h1>
      <p>why are you here? there's nothing to see here</p>
    </div>
    <img src={StillHere} alt="Ferris bueler" className="fof-img"/>
    </>
  )
}

export default NotFound
