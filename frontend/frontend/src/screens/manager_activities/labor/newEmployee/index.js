import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarManagmentPanel from "../../../../components/navbars/NavbarManagmentPanel";
import { FiMoreHorizontal } from "react-icons/fi";
import NavbarManagmentPanelSide from "../../../../components/navbars/NavbarManagmentPanelSide";
import { listCategories } from "../../../../actions/categoriesActions";
import data from "../laborsList/laborsData.json";
const NewEmployee = () => {
  // first states of Name, email and phone number
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const confirmEmployeeHandler = () => {};

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
            <div className="p-6 md:p-0 bg-gray-100 flex items-center justify-center">
              <div className="container max-w-screen-lg mx-auto">
                <div>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label>Full Name</label>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            onChange={(e) => {
                              setFullName(e.target.value);
                            }}
                          />
                        </div>

                        <div className="md:col-span-3">
                          <label>Email Address</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            placeholder="email@domain.com"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            onChange={() => {}}
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-3">
                          <label>Position</label>
                          <select className="w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <option>Salary</option>
                            <option>Hourly</option>
                            <option>Monthly</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label>Cashier</label>
                          <select className="w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <option className="md:col-span-2">Yes</option>
                            <option className="md:col-span-2">No</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label>Driver</label>
                          <select className="w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <option className="md:col-span-2">Yes</option>
                            <option className="md:col-span-2">No</option>
                          </select>
                        </div>

                        <div className="md:col-span-5 text-right bg-blue-500">
                          <div className="inline-flex items-end">
                            <button
                              onClick={() => {
                                confirmEmployeeHandler();
                              }}
                              className="flex justify-center w-20 rounded border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold"
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewEmployee;
