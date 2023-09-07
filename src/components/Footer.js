import React from 'react'
import ethereumLogo from '../images/ethereum-logo.svg';

const Footer = () => {
  return (
    <div className="p-5 mt-20 bg-light_grey">
      <div>
        <img src={ethereumLogo} className="inline-block h-9"/>
        <h3 className="inline-block ml-2 text-lg">Powered by Ethereum</h3>
      </div>
      <div>
        <div className='h-[1px] bg-black bg-opacity-25 my-3'/>
        <div className="text-sm">
          <div className="inline-block">Etherscan © 2023 (goerli)</div>
          <div>Donations: <a href='' className="text-blue">0x71c765...d8976f 💗</a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
