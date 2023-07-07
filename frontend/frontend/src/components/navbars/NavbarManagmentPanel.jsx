import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { MdTableBar, MdMenuBook, MdOutlineKeyboardArrowDown, MdFastfood } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { GiCook } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

const NavbarManagmentPanel = () => {
  let navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [buttonActive, setButtonActive] = useState(false); 
  const userLogin = useSelector((state) => state.userLogin);
  const {
    error: userLoginError,
    loading: userLoginLoading,
    userInfo,
  } = userLogin;
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
            <BiUserCircle className='text-2xl' /> {userInfo.first_name}
          </span>
          <span className='p-1'>
            <MdOutlineKeyboardArrowDown className='font-bold' />
          </span>
        </div>
      </section>
      <section className='flex md:hidden w-screen justify-around text-xl  shadow-md text-[#6b7280]'>
             <NavLink to='/menu'
          className={({isActive}) => (isActive ? 'py-2 px-4 flex flex-col items-center bg-secondary-bg-color' : 'py-2 px-4 flex flex-col items-center') }
          // onClick={() => {handleButtonClick(1); navigate("/menu")}}
          // onBlur={handleButtonBlur}
        >
          <MdFastfood/>
          <span className='text-xs'>Products</span>
        </NavLink>
        
        <NavLink to='/employess'
          className={({isActive}) => (isActive ? 'py-2 px-4 flex flex-col items-center bg-secondary-bg-color' : 'py-2 px-4 flex flex-col items-center') }
        
        >
          <GiCook />
          <span className='text-xs'>Employess</span>
        </NavLink>
   
        <NavLink to='/tablesList'
         className={({isActive}) => (isActive ? 'py-2 px-4 flex flex-col items-center bg-secondary-bg-color' : 'py-2 px-4 flex flex-col items-center') }
        >
          <MdTableBar />
          <span className='text-xs'>Tables</span>
        </NavLink>
      </section>
    </main>
  );
};

export default NavbarManagmentPanel;
