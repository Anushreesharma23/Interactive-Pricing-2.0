import React from 'react'
import circles from "../images/pattern-circles.svg";


function Header() {
  return (
      <div className="grid-md relative">
        <img src={circles} alt="" className="circles" />
        <h1 className="h1">Simple, traffic-based pricing</h1>
        <div className="text-wrapper">
          <p>Sign-up for our 30-day trial.</p>
          <p>No credit required.</p>
        </div>
      </div>
      
  )
}

export default Header