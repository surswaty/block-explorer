import React from 'react'

const Blocks = () => {
  var elements = [1,2,3,4,5,6,7];
  return (
    <div className="h-[683px] bg-light_grey mx-4 mt-[-65px] flex flex-col justify-between rounded-lg border-[1px] border-black border-opacity-25">
      <div className="h-9 rounded-lg">
        <h2 className='p-2 text-lg'>Latest Blocks</h2>
        <div className='h-[1px] bg-black bg-opacity-25' />
      </div>
      <div className="px-2">
        {
          elements.map((index)=>{
            if(index != 7){return(
              <div className="py-2">
                  <div className="text-blue text-sm">9614567 <span className="text-black opacity-50">45 sec ago</span></div>
                  <div className="text-black text-sm">Fee Recipient <span className="text-blue">0xc6e245...A1E4Cb97</span></div>
                  <div className="text-blue text-sm">39 txns
                    <span className="text-black opacity-50"> 12 secs</span> 
                    <span className="bg-white text-black border-[1px] text-[12px] border-black px-2 ml-1 rounded-md border-opacity-50">0.00146 Eth</span>
                  </div>
                <div className='h-[1px] bg-black bg-opacity-25 mt-3'/>
              </div>
            )}else{
              return(
                <div className="py-2                                                                                       ">
                  <div className="text-blue text-sm">9614567 <span className="text-black opacity-50">45 sec ago</span></div>
                  <div className="text-black text-sm">Fee Recipient <span className="text-blue">0xc6e245...A1E4Cb97</span></div>
                  <div className="text-blue text-sm">39 txns
                    <span className="text-black opacity-50"> 12 secs</span> 
                    <span className="bg-white text-black border-[1px] border-black px-2 ml-1 rounded-md border-opacity-50">0.00146 Eth</span>
                  </div>
                </div>  
              )
            }
          })
        }
            
          
        
      </div>
      
      <div className="h-9 rounded-lg bg-grey">
        <div className='h-[1px] bg-black bg-opacity-25' />
        <h3 className="p-2 opacity-50 text-sm flex justify-center">VIEW ALL BLOCKS</h3>
        
      </div>
    </div>
  )
}

export default Blocks
