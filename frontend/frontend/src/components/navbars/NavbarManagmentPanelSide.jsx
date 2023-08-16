import React from 'react';
import { GiCook } from 'react-icons/gi';
import { MdTableBar, MdFastfood } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getEmployees } from '../../actions/userActions';

const NavbarManagmentPanelSide = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinkStyles =
    'flex flex-wrap gap-2 flex-col justify-around w-full overflow-hidden hover:bg-secondary-bg-color p-2 cursor-pointer';
  const activeNavLinkStyles = `${navLinkStyles} bg-secondary-bg-color`;

  const handleEmployeesClick = () => {
    dispatch(getEmployees());
  };

  const navLinks = [
    {
      to: '/menu',
      text: 'Menu Management',
      icon: <MdFastfood className="text-xl" />,
    },
    {
      to: '/employess',
      text: 'Employees Management',
      icon: <GiCook className="text-xl" />,
      onClick: handleEmployeesClick,
    },
    {
      to: '/tablesList',
      text: 'Rooms Management',
      icon: <MdTableBar className="text-xl" />,
    },
  ];

  return (
    <main className="hidden md:flex flex-col flex-wrap items-start fixed w-[170px] h-full text-white bg-white z-30 border-r-2 border-[#e2e8f0]">
      <div
        onClick={() => {
          navigate('/services');
        }}
        className="flex items-center justify-center bg-primary-bg-color w-full py-2"
      >
        <GiCook className="text-white text-4xl" />
        <span className="text-xl font-bold cursor-pointer">FakePos</span>
      </div>
      <div className="flex flex-col border-b-2 border-[#e2e8f0] w-full py-4">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            onClick={link.onClick}
            className={({ isActive }) =>
              isActive ? activeNavLinkStyles : navLinkStyles
            }
          >
            <div className="flex items-center gap-2 text-[#6b7280] text-sm font-bold">
              {link.icon}
              {link.text}
            </div>
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default NavbarManagmentPanelSide;
