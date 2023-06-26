import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';
import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import { listCategories } from '../../../../actions/categoriesActions';
import data from '../laborsList/laborsData.json';
const NewLabor = () => {
  const map = new Map();
  data.employees.forEach((item) => map.set(item.job_position, item));

  const jobPosition = Array.from(map.values());
  return (
    <div className="flex flex-col relative h-screen w-full">
      <NavbarManagmentPanel />
      <NavbarManagmentPanelSide />
      <main className="my-4 px-1 flex flex-col md:absolute md:h-screen md:w-[calc(100%_-_270px)]  md:p-[30px] md:left-[270px] md:top-0;">
        <section className="flex flex-col gap-3 my-4">
          <header className="font-bold py-1 border-b text-2xl border-[#cbd5e1]">
            Add employee
          </header>

          <form className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Full name
              <input
                required
                className="border border-[#cbd5e1] py-1 pl-1 font-normal"
                type="text "
                placeholder="ex: John Doe"
              />
            </label>
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Position
              <select className="font-normal p-1" name="" id="">
                <option value="">Chosse from list</option>
                {jobPosition.map((employee, index) => (
                  <option key={index} value="">
                    {employee.job_position}
                  </option>
                ))}
              </select>
            </label>
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Type of payment
              <select className="font-normal p-1" name="" id="">
                <option value="">Salary</option>
                <option value="">Hourly</option>
                <option value="">Monthly</option>
              </select>
            </label>
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Cashier
              <select className="font-normal p-1" name="" id="">
                <option value="">No</option>
                <option value="">Yes</option>
              </select>
            </label>
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Driver
              <select className="font-normal p-1" name="" id="">
                <option value="">No</option>
                <option value="">Yes</option>
              </select>
            </label>

            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Phone
              <input
                required
                className="border border-[#cbd5e1] py-1 pl-1 font-normal"
                type="text "
                placeholder="ex. 0-500-000"
              />
            </label>
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Email
              <input
                required
                className="flex border border-[#cbd5e1] py-1 pl-1 font-normal"
                type="text "
                placeholder="ex: john.doe@example.com"
              />
            </label>
            <button
              type="submit"
              className="flex justify-center w-20 border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold"
            >
              Confirm
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewLabor;
