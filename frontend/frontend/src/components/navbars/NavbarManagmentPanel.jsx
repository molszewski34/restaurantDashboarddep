import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { MdTableBar, MdMenuBook, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { GiCook } from 'react-icons/gi';

const NavbarManagmentPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [buttonActive, setButtonActive] = useState(false); // Stan określający, czy przycisk jest aktywny

  // const handleTabChange = (index) => {
  //   setActiveTab(index);
  // };

  const handleButtonClick = (buttonIndex) => {
    setActiveTab(buttonIndex);
    setButtonActive(true); // Ustawienie stanu przycisku na aktywny
  };

  // const handleButtonBlur = () => {
  //   setButtonActive(false); // Ustawienie stanu przycisku na nieaktywny
  // };

  return (
    <main className='flex flex-col'>
      <section className='flex justify-between shadow-md text-[#6b7280]'>
        {/* <div className="flex items-center gap-2">
        <RiArrowGoBackFill/>
            <span className='font-bold'>Back</span>
        </div> */}
        <button className="flex items-center justify-center text-center bg-primary-bg-color w-[40px]">
          <GiCook className='text-white text-2xl' />
        </button>
        <div className="flex p-2 gap-1 items-center">
          <span className='flex gap-1 items-center text-sm'>
            <BiUserCircle className='text-2xl' /> User Name
          </span>
          <span className='p-1'>
            <MdOutlineKeyboardArrowDown className='font-bold' />
          </span>
        </div>
      </section>
      <section className='flex md:hidden w-screen justify-around text-xl  shadow-md text-[#6b7280]'>
        <button
          className={`py-2 px-4 ${activeTab === 0 && buttonActive ? 'bg-secondary-bg-color' : ''}`}
        
          onClick={() => handleButtonClick(0)}
          // onBlur={handleButtonBlur}
        >
          <FaUsers />
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 1 && buttonActive ? 'bg-secondary-bg-color' : ''}`}
          onClick={() => handleButtonClick(1)}
          // onBlur={handleButtonBlur}
        >
          <MdMenuBook />
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 2 && buttonActive ? 'bg-secondary-bg-color' : ''}`}
          onClick={() => handleButtonClick(2)}
          // onBlur={handleButtonBlur}
        >
          <MdTableBar />
        </button>
      </section>
    </main>
  );
};

export default NavbarManagmentPanel;
