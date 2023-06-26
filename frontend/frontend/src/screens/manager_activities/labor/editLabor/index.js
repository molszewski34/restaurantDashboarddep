import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';
import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import data from '../laborsList/laborsData.json';
import { useParams } from 'react-router-dom';

const EditLabor = () => {
  const map = new Map();
  data.employees.forEach((item) => map.set(item.job_position, item));

  const jobPosition = Array.from(map.values());

  const { laborId } = useParams();

  const filteredEmployee = data.employees.filter(
    (employee) => employee.id == laborId
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="flex flex-col relative h-screen w-full">
      <NavbarManagmentPanel />
      <NavbarManagmentPanelSide />
      <main className="my-4 px-1 flex flex-col md:absolute md:h-screen md:w-[calc(100%_-_270px)]  md:p-[30px] md:left-[270px] md:top-0;">
        <section className="flex flex-col gap-3 my-4">
          <header className="font-bold py-1 border-b text-2xl border-[#cbd5e1]">
            Edit employee
          </header>

          {filteredEmployee.map((employee) => (
            <form className="flex flex-col gap-2">
              <label
                className="flex items-center gap-2 font-bold text-sm"
                htmlFor=""
              >
                Full name
                <input
                  required
                  className="border border-[#cbd5e1] py-1 pl-1 font-normal placeholder:bg-[#e0f2fe]"
                  type="text "
                  placeholder={employee.full_name}
                />
              </label>
              <label
                className="flex items-center gap-2 font-bold text-sm"
                htmlFor=""
              >
                Position
                <select className="font-normal p-1 bg-[#e0f2fe]" name="" id="">
                  <option value="">{employee.job_position}</option>
                  {jobPosition.map((employee, index) => {
                    // const filtereJobPosition = jobPosition.filter(
                    //   (position) =>
                    //     position.job_position !== employee.job_position
                    // );
                    // .map((job) => job.job_position);
                    // console.log(filtereJobPosition);
                    return (
                      <option key={index} value="">
                        {employee.job_position}
                        {/* {filtereJobPosition} */}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label
                className="flex items-center gap-2 font-bold text-sm"
                htmlFor=""
              >
                Type of payment
                <select className="font-normal p-1 bg-[#e0f2fe]" name="" id="">
                  <option value="">{employee.payment_type}</option>
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
                <select className="font-normal p-1 bg-[#e0f2fe]" name="" id="">
                  <option value="">{employee.isCashier ? 'Yes' : 'No'}</option>
                  {employee.isCashier && <option value="">No</option>}
                  {!employee.isCashier && <option value="">Yes</option>}
                </select>
              </label>
              <label
                className="flex items-center gap-2 font-bold text-sm"
                htmlFor=""
              >
                Driver
                <select className="font-normal p-1 bg-[#e0f2fe]" name="" id="">
                  <option value="">{employee.isDriver ? 'Yes' : 'No'}</option>
                  {employee.isDriver && <option value="">No</option>}
                  {!employee.isDriver && <option value="">Yes</option>}
                </select>
              </label>

              <label
                className="flex items-center gap-2 font-bold text-sm"
                htmlFor=""
              >
                Phone
                <input
                  required
                  className="border border-[#cbd5e1] py-1 pl-1 font-normal bg-[#e0f2fe]"
                  type="text "
                  placeholder={employee.phone_number}
                />
              </label>
              <label
                className="flex items-center gap-2 font-bold text-sm"
                htmlFor=""
              >
                Email
                <input
                  required
                  className="flex border border-[#cbd5e1] py-1 pl-1 font-normal bg-[#e0f2fe]"
                  type="text "
                  placeholder={employee.email}
                />
              </label>
              <label
                className="flex items-center gap-2 font-bold text-sm"
                htmlFor=""
              >
                PIN
                <input
                  required
                  className="flex border border-[#cbd5e1] py-1 pl-1 font-normal bg-[#e0f2fe]"
                  type="text "
                  placeholder={employee.pin}
                />
              </label>
              <div className="flex gap-8">
                <button
                  type="submit"
                  className="flex justify-center w-20 border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold"
                >
                  Confirm
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen(true);
                    setOverlay(true);
                  }}
                  className="flex  border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#ef4444] font-bold"
                >
                  Delete
                </button>
              </div>
            </form>
          ))}
        </section>
        {modalOpen && (
          <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            {/* <ModalAddEmployee
                closeModal={() => setModalOpen(false)}
                closeOverlay={() => setOverlay(false)}
              /> */}
            <main className="bg-white p-4 max-w-[400px] w-full">
              <b className="">Do you want to remove emeployee from the list?</b>
              <div className="flex justify-between gap-2">
                {' '}
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setOverlay(false);
                  }}
                  className="border border-[#b91c1c] text-[#b91c1c] py-1 px-3 text-sm my-2  font-bold"
                >
                  Confirm
                </button>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setOverlay(false);
                  }}
                  className="border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold"
                >
                  Cancel
                </button>
              </div>
            </main>
          </div>
        )}{' '}
      </main>
      {overlay && (
        <div className="fixed z-40 top-0 bottom-0 left-0 right-0 bg-[#000] opacity-40"></div>
      )}
    </div>
  );
};

export default EditLabor;
