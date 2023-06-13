import React from 'react'
import {GiCook} from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa';
import {MdTableBar, MdMenuBook, MdOutlineKeyboardArrowDown} from 'react-icons/md'

const NavbarManagmentPanelSide = () => {
  return (
    <main className='hidden md:flex flex-col flex-wrap items-start fixed w-[170px] h-full text-white bg-white z-50 border-r-2 border-[#e2e8f0]'>
<div className=" flex items-center justify-center bg-primary-bg-color w-full py-2"><GiCook className='text-white text-4xl '/>
<span className='text-xl font-bold'>FakePos</span> 
</div>
<div className="flex flex-col gap-4 border-b-2 border-[#e2e8f0] w-full py-4">
<ul className='flex flex-wrap gap-2 flex-col justify-around w-full overflow-hidden hover:bg-secondary-bg-color px-2'>
    <li className='flex items-center gap-2 text-[#6b7280] text-sm font-bold cursor-pointer'><MdMenuBook className='text-xl'/>Menu</li>
    <li className='flex items-center  text-[#6b7280] text-xs font-bold cursor-pointer'>+ Add Category</li>
  
</ul>
<ul className='flex flex-wrap gap-2 flex-col justify-around w-full overflow-hidden hover:bg-secondary-bg-color px-2'>
    <li className='flex items-center gap-2 text-[#6b7280] text-sm font-bold cursor-pointer'><FaUsers className='text-xl'/>Employees</li>
    <li className='flex items-center  text-[#6b7280] text-xs font-bold cursor-pointer'>+ Add Employee</li>
</ul>
<ul className='flex flex-wrap gap-2 flex-col justify-around w-full overflow-hidden hover:bg-secondary-bg-color px-2'>
    <li className='flex items-center gap-2 text-[#6b7280] text-sm font-bold cursor-pointer'><MdTableBar className='text-xl'/>Tables</li>
    <li className='flex items-center  text-[#6b7280] text-xs font-bold  cursor-pointer'>+ Add Room</li>
</ul>
</div>
    </main>
  )
}

export default NavbarManagmentPanelSide