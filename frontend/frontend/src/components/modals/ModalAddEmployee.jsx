import React, { useState } from "react";
import {CgClose} from "react-icons/cg";

const ModalAddEmployee = ({
    closeModal,
  closeOverlay,

}) => {

  return (
  <main className="bg-white p-4 max-w-[400px] w-full">
    <div className="flex justify-between items-center pb-2 border-b-2">

    <header className="text-2xl font-bold">Add Employee</header>
    <button
           onClick={() => {
            closeModal(false);
            closeOverlay(false);
          }}
    className="text-3xl font-bold hover:text-[#dc2626]"><CgClose/></button>
    </div>
    <form className="flex flex-col gap-3 py-2" action="">
<label className="flex gap-2 items-center" htmlFor=""><b>Name:</b> 
    <input className="border p-1" type="text" placeholder="Name and Subname" required/>
</label>
<label className="flex gap-2 items-center"  htmlFor="">
    <b>

    Position:
    </b>
    <select className="p-2 bg-white border" name="" id="" required>
        <option value="default">-- Chose Role --</option>
        <option value="cook">Cook</option>
        <option value="waiter">Waiter</option>
        <option value="chef">Chef</option>
        <option value="manager">Manager</option>
        <option value="cashier">Cashier</option>
        <option value="driver">Driver</option>

    </select>
</label>
<label className="flex gap-2 items-center" htmlFor="">
    <b>Rate:</b>
    <input className="border p-1" type="text" placeholder="Pension" required/>
</label>
<label className="flex gap-2 items-center" htmlFor="">
    <b>

    Type of payment:
    </b>
    <select className="p-2 bg-white border"  name="" id="" required>
        <option value="hour">Hour</option>
        <option value="day">Day</option>
        <option value="month">Month</option>
    </select>
</label>
<label className="flex gap-2 items-center" htmlFor="">
    <b>Cashier:</b>
    <select className="p-2 bg-white border" name="" id="" required>
        <option value="no">No</option>
        <option value="yes">Yes</option>
       
    </select>
</label>
<label className="flex gap-2 items-center" htmlFor="">
    <b>Driver:</b>
    <select className="p-2 bg-white border" name="" id="" required>
        <option value="no">No</option>
        <option value="yes">Yes</option>
       
    </select>
</label>
<label className="flex gap-2 items-center" htmlFor="">
    <b>Phone:</b>
    <input className="border p-1" type="text" placeholder="Phone number" required/>
</label>
<label className="flex gap-2 items-center" htmlFor="">
    <b>Email:</b>
    <input className="border p-1" type="text" placeholder="Email" required/>
</label>
<label className="flex gap-2 items-center" htmlFor=""><b>PIN</b> 
    <input className="border p-1" type="password" placeholder="Only Numbers" required/>
</label>
    <button className="py-2 px-3 bg-primary-bg-color text-white rounded font-bold">Submit</button>
    </form>
  </main>
  );
};

export default ModalAddEmployee;
