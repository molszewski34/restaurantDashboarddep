import React, { useEffect, useRef } from 'react';

function NavbarTopSubmenu({ openSubMenu, isOpen, onClose }) {
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);
  return (
    <ul
      ref={submenuRef}
      className={`${
        isOpen ? 'open' : ''
      } absolute z-50 right-5 bg-white flex flex-col text-[#000]`}
    >
      <li className="border py-2 px-4">Sub Item</li>
      <li className="border py-2 px-4">Sub Item</li>
      <li className="border py-2 px-4">Sub Item</li>
      <li className="border py-2 px-4">Sub Item</li>
      <li className="border py-2 px-4">Sub Item</li>
      <li className="border py-2 px-4">Sub Item</li>
      <li className="border py-2 px-4">Sub Item</li>
      <li className="border py-2 px-4">Sub Item</li>
    </ul>
  );
}

export default NavbarTopSubmenu;
