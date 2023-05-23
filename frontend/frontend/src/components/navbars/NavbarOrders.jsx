import React from 'react'
import { TbSwitch3 } from 'react-icons/tb';
import { SlOptionsVertical } from 'react-icons/sl';


const NavbarOrders = () => {
  return (
    // <div className='flex justify-between items-center p-2 text-white text-sm font-bold bg-primary-bg-color'>
    <div className='flex justify-between items-center p-2 text-white text-sm font-bold bg-gradient-to-r from-[#296F63] to-[#37b49e] '>
        <div className="flex gap-2 items-center">       
   
        <span className='bg-secondary-bg-color text-primary-bg-color text-2xl rounded p-1 [word-spacing:-5px] border-2 border-white'># 66</span>
        </div>
 
        <div className="flex items-center gap-2">
            <button className='uppercase flex items-center gap-2 font-bold '>Switch user
        </button> 
            <span>     <TbSwitch3 className='text-2xl'/></span>
            <span className='p-4'>   <SlOptionsVertical /></span>
         
        </div>
    </div>
  )
}

export default NavbarOrders