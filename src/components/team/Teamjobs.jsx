import React from 'react'
import jobimg from "../../assets/images/team-02.png"

const Teamjobs = () => {
  return (
    <div className='bg-gray-200 flex justify-evenly items-center p-4'>
      <div>
        <h1 className='capitalize font-semibold text-xl'>tom jobs</h1>
        <p className='font-medium'>CEO at SmartEDU</p>
        <small>Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus omnis saperet docendi nec, eos ea alii molestiae aliquand.</small>
      </div>
      <div className='flex flex-col gap-4 bg-orange-500 h-[150px] w-[150px] justify-center items-center'>
        <div className='h-[80px] overflow-hidden'>
          <img className='rounded-full h-full' src={jobimg} alt="" />
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Teamjobs
