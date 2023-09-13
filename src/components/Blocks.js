import React from 'react'
import blockIcon from '../images/block-icon.svg';

const Blocks = () => {
  const blockSections = [];
  
  for (let i = 0; i < 7; i++) {
    blockSections.push(
    <div className="text-sm">
      <div className="sm:flex justify-between pt-2">
        <div className="text-blue sm:flex">
          <div className="hidden sm:inline-block px-1">
            <img className="" src={blockIcon}></img>
          </div>
          <div>
            <div className="text-black inline-block sm:hidden">Block</div>
            <a href='' className="ml-1 sm:block">9614567</a>
            <span className="text-black opacity-50"> 45 sec ago</span>
          </div>
        </div>
        <div className="text-black">
          <div className="inline">Fee Recipient</div>
          <a href='' className="text-blue ml-1 sm:block">0xc6e245...A1E4Cb97</a>
          <div className="text-blue">
            <a href=''>39 txns</a>
            <span className="text-black opacity-50 ml-1">12 secs</span>
            <span className="bg-white text-black border-[1px] border-black px-2 ml-1 rounded-md border-opacity-50 sm:hidden">0.00146 Eth</span>
          </div>
        </div>
        <div className="sm:mr-2">
          <div className="bg-white text-black  border-[1px] border-black px-2 ml-1 rounded-md border-opacity-50 hidden sm:inline">0.00146 Eth</div>
        </div>
      </div>
      {i != 6 ? <div className='h-[1px] bg-black bg-opacity-10 my-4'/> : null}
    </div>);
  }

  return (
    <div className="bg-light_grey h-[638px] mx-1 sm:mx-4 mt-[-65px] lg:mt-0 flex flex-col lg:justify-between rounded-lg border-[1px] border-black border-opacity-25 lg:w-1/2">
      <div className="h-9 rounded-lg">
        <h2 className='p-2 text-lg'>Latest Blocks</h2>
        <div className='h-[1px] bg-black bg-opacity-25' />
      </div>
      
      <div className="mx-2 my-3 py-3 overflow-auto text-[16px] py-4">{blockSections}</div>
      
      <div className="h-9 rounded-lg bg-grey">
        <div className='h-[1px] bg-black bg-opacity-25' />
        <a href='' className="p-2 opacity-50 text-sm flex justify-center">VIEW ALL BLOCKS</a>
      </div>
    </div>
  )
}

export default Blocks
