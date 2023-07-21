import React from "react";
import { TbSwitch3 } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
import { listOrderDishes } from "../../actions/dishActions";
import { useDispatch } from "react-redux";

const NavbarTop = (id) => {
  // Get the useDispatch function from react-redux
  let dispatch = useDispatch();

  return (
    <div
      className="flex justify-between items-center p-2 text-white text-sm font-bold bg-primary-bg-color border-b-2 border-white"
      style={{ backgroundColor: "#00a8e8" }}
    >
      {/* Link to navigate back */}
      <Link to="../" className="flex items-center gap-2">
        <AiOutlineRollback className="text-xl" />
        <p className="text-base text-[#ecfdf5]">Back</p>
      </Link>

      <div className="flex items-center gap-2">
            
        {/* Refresh button */}
        <button
          onClick={() => {
            console.log("ID ", id);
            // Dispatch the listOrderDishes action with the given id
            dispatch(listOrderDishes(id.id));
          }}
          className="bg-secondary-gray py-2 px-4 border-2 rounded uppercase"
        >
          refresh
        </button>
        
        {/* Abort button */}
        {/* <button className="bg-[#9C332E] py-2 px-4 border-2 border-[#C15959] rounded uppercase">
          abort
        </button> */}
        
        {/* Options button */}
        <button className="p-2">
          <SlOptionsVertical className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default NavbarTop;
