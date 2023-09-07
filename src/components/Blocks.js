import React from 'react'

const Blocks = () => {
  const blockSections = [];
  
  for (let i = 0; i < 7; i++) {
    blockSections.push(
    <div className="">
      <div>
        <div className="text-blue text-sm">
          <div className="text-black inline-block">Block</div>
          <a href='' className="ml-1">9614567</a>
          <span className="text-black opacity-50"> 45 sec ago</span>
        </div>
        <div className="text-black text-sm">Fee Recipient 
          <a href='' className="text-blue ml-1">0xc6e245...A1E4Cb97</a>
          <div className="text-blue text-sm">
            <a href=''>39 txns</a>
            <span className="text-black opacity-50 ml-1">12 secs</span>
            <span className="bg-white text-black border-[1px] text-[12px] border-black px-2 ml-1 rounded-md border-opacity-50">0.00146 Eth</span>
          </div>
        </div>
      </div>
      {i != 6 ? <div className='h-[1px] bg-black bg-opacity-25 my-3'/> : null}
    </div>);
  }

  return (
    <div className="bg-light_grey mx-4 mt-[-65px] flex flex-col justify-between rounded-lg border-[1px] border-black border-opacity-25">
      <div className="h-9 rounded-lg">
        <h2 className='p-2 text-lg'>Latest Blocks</h2>
        <div className='h-[1px] bg-black bg-opacity-25' />
      </div>
      
      <div className="mx-2 my-4">{blockSections}</div>
      
      <div className="h-9 rounded-lg bg-grey">
        <div className='h-[1px] bg-black bg-opacity-25' />
        <a href='' className="p-2 opacity-50 text-sm flex justify-center">VIEW ALL BLOCKS</a>
        
      </div>
    </div>
  )
}

export default Blocks
