import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TableRemovalModal = ({
  activeTable,
  removeTable,
  setTableRemoval,
  setOverlay,
  onConfirm,
  onCancel,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <main className="bg-white p-4 max-w-[400px] w-full">
        <b className="">Do you want to remove this table?</b>
        <div className="flex justify-between gap-2">
          <button
            onClick={() => {
              setTableRemoval(false);
              setOverlay(false);
              dispatch(removeTable(activeTable));
            }}
            className="border border-[#b91c1c] text-[#b91c1c] py-1 px-3 text-sm my-2 font-bold"
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setTableRemoval(false);
              setOverlay(false);
            }}
            className="border border-[#cbd5e1] py-1 px-3 text-sm my-2 text-[#0369a1] font-bold"
          >
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
};

export default TableRemovalModal;
