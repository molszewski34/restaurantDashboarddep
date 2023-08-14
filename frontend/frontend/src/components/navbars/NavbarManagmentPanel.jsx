import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { MdTableBar, MdFastfood } from 'react-icons/md';
import { GiCook } from 'react-icons/gi';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

const NavigationLink = ({ to, icon, text, isActive }) => (
  <NavLink
    to={to}
    className={`py-2 px-4 flex flex-col items-center ${
      isActive ? 'bg-secondary-bg-color' : ''
    }`}
  >
    {icon}
    <span className="text-xs">{text}</span>
  </NavLink>
);

const NavbarManagmentPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navLinks = [
    {
      to: '/menu',
      icon: <MdFastfood />,
      text: 'Products',
    },
    {
      to: '/employess',
      icon: <GiCook />,
      text: 'Employees',
    },
    {
      to: '/tablesList',
      icon: <MdTableBar />,
      text: 'Tables',
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="flex justify-between shadow-md text-[#6b7280] relative">
        <button
          className="flex items-center justify-center text-center bg-primary-bg-color w-[40px]"
          onClick={() => navigate('/services')}
        >
          <GiCook className="text-white text-2xl" />
        </button>
        <div className="flex p-2 gap-1 items-center">
          <span className="flex gap-1 items-center text-sm cursor-pointer">
            <BiUserCircle className="text-2xl " />
            {userInfo.first_name}
            <button
              className="p-2"
              onClick={() => {
                dispatch(logout());
                navigate('/');
              }}
            >
              <LogoutIcon />
            </button>
          </span>
        </div>
      </section>
      <section className="flex md:hidden w-screen justify-around text-xl shadow-md text-[#6b7280]">
        {navLinks.map((link, index) => (
          <NavigationLink
            key={index}
            to={link.to}
            icon={link.icon}
            text={link.text}
            isActive={false}
          />
        ))}
      </section>
    </main>
  );
};

export default NavbarManagmentPanel;
