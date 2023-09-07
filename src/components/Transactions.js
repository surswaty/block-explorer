import React from 'react'

const Transactions = () => {
  const blockSections = [];
  
  for (let i = 0; i < 7; i++) {
    blockSections.push(
    <div className="">
      <div>
        <div className="text-blue">
          <div className="text-black inline-block">TX#</div>
          <a href='' className="ml-1">0x04080540ad70...</a>
          <span className="text-black opacity-50 ml-1">45 sec ago</span>
        </div>
        <div className="text-black">From 
          <a href='' className="text-blue ml-1">0xc6e245...A1E4Cb97</a>
          <div className="text-blue">
            <span href='' className="text-black">To</span>
            <a href='' className='ml-1'>0xc6e245...A1E4Cb97</a>
            <span className="bg-white text-black border-[1px] border-black px-2 ml-1 rounded-md border-opacity-50">0.00146 Eth</span>
          </div>
        </div>
      </div>
      {i != 6 ? <div className='h-[1px] bg-black bg-opacity-25 my-4'/> : null}
    </div>);
  }

  return (
    <div className="bg-light_grey h-[638px] mx-4 mt-6 flex flex-col justify-between rounded-lg border-[1px] border-black border-opacity-25">
      <div className="h-9 rounded-lg">
        <h2 className='p-2 text-lg'>Latest Transactions</h2>
        <div className='h-[1px] bg-black bg-opacity-25' />
      </div>
      
      <div className="mx-2 my-5 overflow-auto text-[16px]">{blockSections}</div>
      
      <div className="h-9 rounded-lg bg-grey">
        <div className='h-[1px] bg-black bg-opacity-25' />
        <a href='' className="p-2 opacity-50 text-sm flex justify-center">VIEW ALL TRANSACTIONS</a>
        
      </div>
    </div>
  )
}

export default Transactions
