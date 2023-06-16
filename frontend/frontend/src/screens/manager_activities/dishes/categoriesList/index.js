import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import { listDishes } from '../../../../actions/dishActions';
import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import { listCategories } from '../../../../actions/categoriesActions';
const CategoriesList = () => {
  const categoriesList = useSelector((state) => state.categoriesList);
  const { categoriesError, categoriesLoading, categories } = categoriesList;
  const dishList = useSelector((state) => state.dishList);
  const { error: dishListError, loading: dishListloading, dishes } = dishList;
  // console.log(dishes);
  // console.log(categoriesList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategories());
    dispatch(listDishes());
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
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
        <header className="font-bold py-1 border-b border-[#cbd5e1]">
          Categories
        </header>
        <section className="mt-4 flex flex-col gap-3">
          <div className="grid grid-cols-4 ">
            <span className="text-sm font-bold border-b border-[#cbd5e1] pl-2">
              Name
            </span>
            <span className="text-sm font-bold border-b border-[#cbd5e1] pl-2">
              Color
            </span>
          </div>
          {/* <button className="flex flex-col w-full">
            <div className="flex justify-between px-2 bg-[#e5e7eb] py-2 border-b border-white">
              <p className="uppercase text-sm text-[#0369a1]">Coffee</p>
              <FiMoreHorizontal />
            </div>
          </button> */}
          {categoriesList.categories.map((categoryItem) => (
            <div key={categoryItem.id} className="flex flex-col w-full gap-2">
              {/* <div className="flex justify-between px-2 bg-[#e5e7eb] py-2 border-b border-white"> */}
              <div className="grid grid-cols-4 items-center  px-2 bg-[#e5e7eb] py-2 border-b border-white">
                <p className="uppercase text-sm text-[#0369a1]">
                  {categoryItem.title}
                </p>
                <span
                  className=" w-6 h-6 grow flex"
                  style={{ backgroundColor: categoryItem.colour }}
                ></span>
                <button className="flex justify-center items-center w-8 h-8 text-[#0369a1]">
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => {
                    setModalOpen(true);
                    setOverlay(true);
                  }}
                  className="flex justify-center items-center  place-self-end text-[#ef4444] text-xs border rounded-full bg-white shadowed px-2 py-1"
                >
                  {/* <RiDeleteBin6Line className="text-[#ef4444] text-lg" /> */}
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-3  p-2 border border-[#e5e7eb] rounded">
                <input
                  className="border uppercase border-[#cbd5e1] text-sm pl-1"
                  type="text"
                  placeholder={categoryItem.title}
                />
                <button
                  className=" cursor-pointer w-6 h-6 grow flex place-self-center"
                  key={categoryItem.id}
                  style={{ backgroundColor: categoryItem.colour }}
                  onClick={() => {
                    handleColorClick(categoryItem.colour);
                    setOpenColorPicker(false);
                  }}
                ></button>
                <button className="flex justify-center items-center  place-self-end text-[#0369a1] text-xs border rounded-full bg-white shadowed px-2 py-1">
                  {/* <RiDeleteBin6Line className="text-[#ef4444] text-lg" /> */}
                  Confirm
                </button>
                {/* <div className="flex flex-col w-full pr-2 my-4"> */}
              </div>
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-4 border border-b-0 bg-[#e5e7eb]">
                  <span className="font-bold pl-2 text-sm">Name</span>
                  <span className="font-bold text-sm">Price</span>
                </div>
                {dishes
                  .filter((dish) => dish.category == categoryItem.id)
                  .map((filteredDish) => {
                    console.log(filteredDish);
                    return (
                      <div
                        key={filteredDish.id}
                        className="grid grid-cols-4 items-center border border-b-0 text-sm last:border-b"
                      >
                        <span className="pl-2 text-[#0369a1] cursor-pointer">
                          {filteredDish.title}
                        </span>
                        <span className="text-[#0369a1] cursor-pointer">
                          {filteredDish.price}
                        </span>
                        <button className="flex justify-center items-center w-8 h-8 text-[#0369a1]">
                          <AiFillEdit />
                        </button>
                        <button
                          onClick={() => {
                            setModalOpen(true);
                            setOverlay(true);
                          }}
                          className="flex justify-end items-center   text-[#ef4444] text-xs border rounded-full bg-white shadowed px-2 py-1"
                        >
                          {/* <RiDeleteBin6Line className="text-[#ef4444] text-lg" /> */}
                          Remove
                        </button>
                      </div>
                    );
                  })}
              </div>
              <button className="border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold">
                + Add
              </button>
              {/* <div className="">No siema</div> */}
            </div>
          ))}
        </section>
      </main>
      {modalOpen && (
        <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          {/* <ModalAddEmployee
                closeModal={() => setModalOpen(false)}
                closeOverlay={() => setOverlay(false)}
              /> */}
          <main className="bg-white p-4 max-w-[400px] w-full">
            <b className="">Do you want to delete room and all items inside?</b>
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
      )}
      {overlay && (
        <div className="absolute z-10 top-0 bottom-0 left-0 right-0 bg-[#000] opacity-40"></div>
      )}
    </div>
  );
};

export default CategoriesList;
