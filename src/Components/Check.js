import React from 'react'
import checkMark from "../images/icon-check.svg";

function Check() {
  return (
    <div>
    <div className="grid-md checkmark-wrapper">
    <div className="checkmarks">
      <div className="flex-sm">
        <img src={checkMark} alt="" />
        <p>Unlimited websites</p>
      </div>
      <div className="flex-sm">
        <img src={checkMark} alt="" />
        <p>100% data ownership</p>
      </div>
      <div className="flex-sm">
        <img src={checkMark} alt="" />
        <p>Email reports</p>
      </div>
    </div>
    <button className="btn">Start my trial</button>
  </div>
  </div>
  )
}

export default Check