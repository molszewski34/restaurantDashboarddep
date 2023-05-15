import React from 'react'
import { TbSwitch3 } from 'react-icons/tb';
import { SlOptionsVertical } from 'react-icons/sl';


const NavbarTop = () => {
  return (
    <div className='flex justify-between items-center p-2 text-white text-sm font-bold bg-primary-bg-color'>
        <p className=''>Name of restaurant..</p>  
        <div className="flex items-center gap-2">
            <p className='uppercase'>Switch user</p> 
            <TbSwitch3 className='text-2xl'/> 
            <SlOptionsVertical/>
        </div>
    </div>
  )
}

export default NavbarTop