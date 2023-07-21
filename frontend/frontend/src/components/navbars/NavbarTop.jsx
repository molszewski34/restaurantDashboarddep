import React, { useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { AiOutlineRollback } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import NavbarTopSubmenu from './submenu/NavbarTopSubmenu';

const NavbarTop = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleCloseSubMenu = () => {
    setOpenSubMenu(false);
  };

  return (
    <div className="flex justify-between items-center p-2 text-white text-sm font-bold bg-primary-bg-color border-b-2 border-white w-full">
      <Link to="../" className="flex items-center gap-2">
        <AiOutlineRollback className="text-xl" />
        <p className="text-base text-[#ecfdf5]">Back</p>
      </Link>
      <div className="">
        <button onClick={() => setOpenSubMenu(!openSubMenu)} className="p-2">
          <SlOptionsVertical className="text-xl" />
          {openSubMenu && (
            <NavbarTopSubmenu
              isOpen={openSubMenu}
              onClose={handleCloseSubMenu}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavbarTop;
