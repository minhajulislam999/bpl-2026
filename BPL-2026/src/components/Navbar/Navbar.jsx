import React from 'react'
import navImage from '../../../src/assets/Group 1.png'
import currencyImg from '../../../src/assets/Currency.png'
function Navbar() {
  return (
    <div className="navbar max-w-[1200px]  mx-auto">
  <div className="flex-1">
    <img src={navImage}  />
  </div>
  <div className="flex-none text-black">
    <button className="btn btn-square btn-ghost">
        <span>
            60000000
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
