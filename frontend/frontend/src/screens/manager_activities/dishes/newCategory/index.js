import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';
import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import { listCategories } from '../../../../actions/categoriesActions';
// import ModalColorPicker from '../../../../components/modals/ModalColorPicker';
const NewCategory = () => {
  const categoriesList = useSelector((state) => state.categoriesList);
  const { categoriesError, categoriesLoading, categories } = categoriesList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategories());
  }, []);

  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

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
                value={'Category Name'}
              />
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold text-sm">Button Color</p>

            <main className=" grid grid-cols-4 grid-flow-row gap-1 relative">
              <button
                onClick={() => setOpenColorPicker(!openColorPicker)}
                className="w-6 h-6 grow flex bg-secondary-bg-color border border-[#cbd5e1]"
                style={{ backgroundColor: selectedColor }}
              ></button>

              {openColorPicker && (
                <div className=" grid grid-cols-3 grid-flow-row gap-1 absolute top-0 left-10 border border-[#cbd5e1] p-1 w-24">
                  {categories.map((category) => (
                    <button
                      className=" cursor-pointer w-6 h-6 grow flex"
                      key={category.id}
                      style={{ backgroundColor: category.colour }}
                      onClick={() => {
                        handleColorClick(category.colour);
                        setOpenColorPicker(false);
                      }}
                    ></button>
                  ))}
                </div>
              )}
            </main>
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
        </section>
      </main>
    </div>
  );
};

export default NewCategory;
