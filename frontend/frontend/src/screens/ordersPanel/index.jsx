import React from 'react'

import NavbarOrders from '../../components/NavbarOrders'
const OrdersPanel = () => {
  return (
   <main>
    <NavbarOrders/>
    <section className='flex justify-between bg-gray-light text-secondary-gray text-sm font-semibold border-b px-2 py-1'>
      <div className="flex gap-2">
        <span>#66</span> <span>Table 6</span>
      </div>
      <p>Name of waiter</p>
    </section>
    <section className='flex justify-between px-2 text-sm font-bold border-b-2 border-gray-light py-1'>
      <span className='w-half'>Name</span>
      <div className="flex gap-8">
        <span>QTY</span>
        <span>EACH</span>
        <span>TOTAL</span>
     </div>
    </section>
    <section className='grid grid-cols-1 grid-flow-row gap-1 auto-rows-max justify-between min-h-[300px] text-sm font-bold border-b-2 border-gray-light py-1'>
      <div className=" flex justify-between items-center w-full bg-secondary-bg-color border  px-2">
      <span className='text-ellipsis whitespace-nowrap overflow-hidden'>Soft-Boiled Eggs With 
Deviled Soldiers</span>
      <div className="flex gap-8">
        <span>3</span>
        <span>$10</span>
        <span>$30</span>
     </div>
     </div>
  
 

    </section>
<section className='flex justify-center py-2 bg-gray-light gap-2 border-b'>
  <button className='w-[90px] bg-primary-gray font-bold border-b py-1'>Tab</button>
  <button className='w-[90px] bg-primary-gray font-bold border-b py-1'>Item +</button>
  <button className='w-[90px] bg-primary-gray font-bold border-b py-1'>Split</button>

</section>

<section className='flex flex-wrap justify-between items-center gap-2 px-1 py-2 border-b bg-secondary-bg-color'>
  <div className="flex gap-2">
    <button className='w-[25px] font-bold bg-primary-gray border-b-2'>-</button>
    <button className='w-[25px] font-bold bg-primary-gray border-b-2'>1</button>
    <button className='w-[25px] font-bold bg-primary-gray border-b-2'>+</button>
    </div>
    <span className='text-xs font-bold'>Soft-Boiled Eggs With Deviled Soldiers
</span>
<div className="flex gap-2">
  <button className='font-bold text-base bg-primary-gray p-1 rounded border '>Cancel</button>
  <button className='font-bold text-base bg-primary-bg-color text-white p-1 rounded border'>Done</button>
</div>
</section>
<section className='flex justify-between bg-white p-2 border-b'>
      <div className="flex flex-wrap justify-between items-center font-bold gap-4">
            <span className='text-base'>Balance Due:</span>
            <span className='text-3xl text-red-300'>10000.00$</span>
      </div>
      <div className="flex flex-wrap  justify-between items-center font-bold gap-4">
            <span>Total:</span>
            <span className='text-3xl'>30000.00$</span>
      </div>
</section>
<section className='grid grid-cols-3 grid-flow-row px-2 py-4 bg-secondary-bg-color gap-2 border-b'>
      <button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem categorum dolor sit amet consectetur adipisicing elit.</button>
      <button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem categorum dolor sit amet consectetur adipisicing elit.</button>
      <button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem categorum dolor sit amet consectetur adipisicing elit.</button>
      <button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem categorum dolor sit amet consectetur adipisicing elit.</button>
      <button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem categorum dolor sit amet consectetur adipisicing elit.</button>
      <button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem categorum dolor sit amet consectetur adipisicing elit.</button>
      <button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem categorum dolor sit amet consectetur adipisicing elit.</button>
   


</section>
<section className='grid grid-cols-3 grid-flow-row px-2 py-4 bg-secondary-bg-color gap-2 border-b'>
<button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem dishum dolor sit amet consectetur adipisicing elit.</button>
<button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem dishum dolor sit amet consectetur adipisicing elit.</button>
<button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem dishum dolor sit amet consectetur adipisicing elit.</button>
<button className='uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2'>Lorem dishum dolor sit amet consectetur adipisicing elit.</button>

     


</section>
   </main>
  )
}

export default OrdersPanel