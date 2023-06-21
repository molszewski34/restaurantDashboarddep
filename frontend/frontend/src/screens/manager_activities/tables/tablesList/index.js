import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';
import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import { listCategories } from '../../../../actions/categoriesActions';
import { listTables, listRooms } from '../../../../actions/tablesActions';
import { listOrders } from '../../../../actions/ordersActions';
const TablesList = () => {
  const roomsList = useSelector((state) => state.roomsList);
  const { error: roomsListError, loading: roomsListLoading, rooms } = roomsList;
  const tableList = useSelector((state) => state.tableList);
  const {
    error: tableListError,
    loading: tableListLoading,
    tables,
  } = tableList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTables());
    dispatch(listRooms());
    dispatch(listOrders());
  }, []);
  return (
    <div className="flex flex-col relative h-screen w-full">
      <NavbarManagmentPanel />
      <NavbarManagmentPanelSide />
      <main className="my-4 px-1 flex flex-col md:absolute md:h-screen md:w-[calc(100%_-_270px)]  md:p-[30px] md:left-[270px] md:top-0;">
        <header className="font-bold py-1 border-b text-2xl border-[#cbd5e1]">
          Rooms
        </header>
        <Link
          to="/add-room"
          className="border flex  place-self-start border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
        >
          + Add Room
        </Link>
        <section className="mt-4 flex flex-col gap-4">
          <header className=" font-bold border-b border-[#cbd5e1] pl-2">
            Name
          </header>
          {/*  */}
          {rooms.map((room) => (
            <div key={room.id} className="flex flex-col ">
              <div className="flex justify-between px-2 bg-[#e5e7eb] py-2 border-b border-white">
                <Link
                  to={`/tablesList/${room.id}`}
                  className="uppercase text-sm font-bold text-[#0369a1]"
                >
                  {room.name}
                </Link>
              </div>
              <div className="grid grid-cols-2 px-2 font-bold py-2 border-b border-r border-l border-[#e5e7eb] text-sm ">
                <p>Table Number</p>
                <p>Max Guests</p>
              </div>
              {tables
                .filter((table) => table.room === room.id)
                .map((filteredTable) => (
                  <div className="grid grid-cols-2 px-2  py-2  border-b border-r border-l border-[#e5e7eb] text-sm ">
                    <p>{filteredTable.tableNumber}</p>
                    <p>{filteredTable.numberOfPersons}</p>
                  </div>
                ))}
              <Link
                to={`/tablesList/${room.id}`}
                className="border flex place-self-start border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
              >
                + Add tables
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default TablesList;
