import React from 'react'
import NavbarTop from '../../components/NavbarTop'


const Services = () => {
  return (
   <main className='bg-secondary-bg-color h-screen'>
    <NavbarTop/>
    <div className=" mx-6 my-8">
    <div className="text-xl text-center text-white bg-[#629D93] p-1" >
    <h1>Chose service</h1>
    </div>
    <div className="grid grid-rows-layout grid-cols-2 gap-1">
    <div className="flex justify-center items-center  bg-white text-center font-bold text-xl">Table Service</div>
    <div className="flex justify-center items-center  bg-white text-center font-bold text-xl">Pending orders</div>
    <div className="flex justify-center items-center  bg-white text-center font-bold text-xl">Quick Order</div>
    <div className="flex justify-center items-center  bg-white text-center font-bold text-xl">Delivery</div>
    {/* <div className="p-8 bg-white">Pending Orders</div>
    <div className="p-8 bg-white">Quick Orders</div>
    <div className="p-8 bg-white">Delivery</div> */}
    </div>
    </div>
   </main>
  )
}

export default Services