import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';
import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import { listCategories } from '../../../../actions/categoriesActions';
const NewRoom = () => {
  const categoriesList = useSelector((state) => state.categoriesList);
  const { categoriesError, categoriesLoading, categories } = categoriesList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategories());
  }, []);

  return (
    // <div className="flex flex-col md:flex-row">
    <div className="flex flex-col relative h-screen w-full">
      <NavbarManagmentPanel />
      <NavbarManagmentPanelSide />
      <main className="my-4 px-1 flex flex-col md:absolute md:h-screen md:w-[calc(100%_-_270px)]  md:p-[30px] md:left-[270px] md:top-0;">
        <section className="flex flex-col gap-3 my-4">
          <header className="font-bold py-1 border-b border-[#cbd5e1]">
            Basics
          </header>
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Name
              <input
                className="border border-[#cbd5e1] py-1 pl-1 font-normal"
                type="text "
                placeholder="Name of Room"
              />
            </label>
          </div>
        </section>
        <section className="">
          <header className="font-bold py-1 border-b border-[#cbd5e1]">
            Items
          </header>
          <div className="mt-4">
            <header className="text-sm font-bold border-b border-[#cbd5e1] pl-2">
              Name
            </header>

            <button className="border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold">
              + Add
            </button>
          </div>
          <button className="flex justify-center w-20 border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold">
            Confirm
          </button>
        </section>
      </main>
    </div>
  );
};

export default NewRoom;
