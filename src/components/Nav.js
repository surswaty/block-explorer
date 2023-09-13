import React from 'react'
import logo from '../images/logo-etherscan.svg';

const Nav = () => {
  return (
    <div className="bg-light_grey p-5 h-20 border-y-[1px] border-black border-opacity-25 px-2 sm:px-4">
      <img className="w-44 h-12 " src={logo}/>
    </div>
  )
}

export default Nav
