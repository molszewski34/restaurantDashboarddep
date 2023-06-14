import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';
import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import { listCategories } from '../../../../actions/categoriesActions';
import { listTables, listRooms } from '../../../../actions/tablesActions';
import { listOrders } from '../../../../actions/ordersActions';
const LaborsList = () => {
  const roomsList = useSelector((state) => state.roomsList);
  const { error: roomsListError, loading: roomsListLoading, rooms } = roomsList;
  const tableList = useSelector((state) => state.tableList);
  const {
    error: tableListError,
    loading: tableListLoading,
    tables,
  } = tableList;
  //   console.log(tables);
  //   console.log(rooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTables());
    dispatch(listRooms());
    dispatch(listOrders());
  }, []);
  return (
    // <div className="flex flex-col md:flex-row">
    <div className="flex flex-col relative h-screen w-full">
      <NavbarManagmentPanel />
      <NavbarManagmentPanelSide />
      <main className="my-4 px-1 flex flex-col md:absolute md:h-screen md:w-[calc(100%_-_270px)]  md:p-[30px] md:left-[270px] md:top-0;">
        <header className="font-bold py-1 border-b border-[#cbd5e1]">
          Employees
        </header>
        <button className="border flex w-[140px] border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md">
          + Add Employee
        </button>
        <section className="flex flex-col gap-1 max-w-[800px] text-xs">
          <div className="grid border py-1  pl-1 bg-[#e5e7eb]">
            <span className="font-bold">Name</span>
          </div>
          <div className="flex justify-between border border-[#000] py-1 px-2 pl-1 text-[#0369a1] cursor-pointer">
            <span>Bożena Kowalska</span>
            <span className="font-bold">Check details</span>
          </div>
          <div className="flex justify-between border border-[#000] py-1 px-2 pl-1 text-[#0369a1] cursor-pointer">
            <span>Janina Kowalska</span>
            <span className="font-bold">Check details</span>
          </div>
          <div className="flex justify-between border border-[#000] py-1 px-2 pl-1 text-[#0369a1] cursor-pointer">
            <span>Zuzzana Kowalska</span>
            <span className="font-bold">Check details</span>
          </div>
          <div className="flex justify-between border border-[#000] py-1 px-2 pl-1 text-[#0369a1] cursor-pointer">
            <span>Grażyna Kowalska</span>
            <span className="font-bold">Check details</span>
          </div>
          <div className="flex justify-between border border-[#000] py-1 px-2 pl-1 text-[#0369a1] cursor-pointer">
            <span>Ewelina Kowalska</span>
            <span className="font-bold">Check details</span>
          </div>
          <div className="flex justify-between border border-[#000] py-1 px-2 pl-1 text-[#0369a1] cursor-pointer">
            <span>Monika Kowalska</span>
            <span className="font-bold">Check details</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LaborsList;
