import React from 'react'
import navImage from '../../../src/assets/Group 1.png'
import currencyImg from '../../../src/assets/Currency.png'
function Navbar({ availableBalance }) {
  return (
    <div className="navbar max-w-[1200px]  mx-auto">
  <div className="flex-1">
    <img src={navImage}  />
  </div>
  <div className="flex-none ">
    <button className="btn ">
        <span>
            {availableBalance}
        </span>
         <span>
            coins
        </span>
        <img src={currencyImg} />
       

    </button>
  </div>
</div>
  )
}

export default Navbar
