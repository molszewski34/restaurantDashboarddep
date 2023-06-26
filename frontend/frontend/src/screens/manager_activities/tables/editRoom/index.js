import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';
import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import { listCategories } from '../../../../actions/categoriesActions';
import { listTables, listRooms } from '../../../../actions/tablesActions';
import { listOrders } from '../../../../actions/ordersActions';
const EditRoom = () => {
  const categoriesList = useSelector((state) => state.categoriesList);
  const { categoriesError, categoriesLoading, categories } = categoriesList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategories());
    dispatch(listTables());
    dispatch(listRooms());
    dispatch(listOrders());
  }, []);
  const roomsList = useSelector((state) => state.roomsList);
  const { error: roomsListError, loading: roomsListLoading, rooms } = roomsList;

  const { roomId } = useParams();

  const filteredRoom = rooms.filter((room) => room.id == roomId);

  const tableList = useSelector((state) => state.tableList);
  const {
    error: tableListError,
    loading: tableListLoading,
    tables,
  } = tableList;

  const filteredTable = tables.filter((table) => table.room == roomId);

  const [addTableModal, setAddTableModal] = useState(false);
  const [overlay, setOverlay] = useState(false);
  useEffect(() => {
    dispatch(listCategories());
  }, []);
  const [numOfTable, setNumOfTable] = useState('');
  const [maxNumOfSits, setMaxNumOfSits] = useState('');
  const [newTablesArray, setNewTablesArray] = useState([]);
  const [tablesArray, setTablesArray] = useState(filteredTable);
  console.log(tablesArray);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAddTableModal(false);
    setOverlay(false);
    const newTables = { input1: numOfTable, input2: maxNumOfSits };
    setNewTablesArray((prevTables) => [...prevTables, newTables]);
    setNumOfTable('');
    setMaxNumOfSits('');
  };

  const handleInputChange = (e, setInputText) => {
    const inputValue = e.target.value;
    const numbersRegex = /^[0-9]*$/;
    if (inputValue === '' || numbersRegex.test(inputValue)) {
      setInputText(inputValue);
    }
  };

  const handleRemoveTable = (id) => {
    setTablesArray((prevTables) => {
      const updatedTables = [...prevTables];
      updatedTables.splice(id, 1);
      return updatedTables;
    });
  };
  const handleRemoveAddedTable = (index) => {
    setNewTablesArray((prevTables) => {
      const updatedTables = [...prevTables];
      updatedTables.splice(index, 1);
      return updatedTables;
    });
  };

  return (
    <div className="flex flex-col relative h-screen w-full">
      <NavbarManagmentPanel />
      <NavbarManagmentPanelSide />
      <main className="my-4 px-1 flex flex-col md:absolute md:h-screen md:w-[calc(100%_-_270px)]  md:p-[30px] md:left-[270px] md:top-0;">
        <section className="flex flex-col gap-3 my-4">
          <div className="flex justify-between items-center border-b border-[#cbd5e1]">
            <header className="font-bold py-1 ">Basics</header>
            <button className="flex justify-center border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#ef4444] font-bold">
              Remove Room
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Name
              {filteredRoom.map((room) => (
                <input
                  className="border border-[#cbd5e1] py-1 pl-1 font-normal placeholder:bg-[#e0f2fe] placeholder:text-black"
                  type="text "
                  placeholder={room.name}
                />
              ))}
            </label>
          </div>
        </section>
        <section className="">
          <header className="font-bold py-1 border-b border-[#cbd5e1]">
            Items
          </header>
          <div className="mt-4">
            <header className="text-sm font-bold border-b border-[#cbd5e1] pl-2">
              Name
            </header>
            <div className="grid grid-cols-2 px-2 font-bold py-1 border-b border-r border-l border-[#e5e7eb] bg-[#e5e7eb] ">
              <p>Table Number</p>
              <p>Max Guests</p>
            </div>
            {tablesArray.map((table, id) => (
              <div className="grid grid-cols-3 px-2 items-center text-sm py-1 border-b border-r border-l border-[#e5e7eb]  ">
                <span>{table.tableNumber}</span>
                <span>{table.numberOfPersons}</span>
                <button
                  className="place-self-end self-center mr-2 font-bold text-xs text-[#ef4444]"
                  onClick={() => handleRemoveTable(id)}
                >
                  Remove
                </button>
              </div>
            ))}
            {newTablesArray.map((table, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-3 px-2 items-center py-1 border-b border-r border-l border-[#e5e7eb]  "
                >
                  <span className="text-sm">{table.input1}</span>
                  <span className="text-sm">{table.input2}</span>
                  <button
                    className="place-self-end self-center mr-2 font-bold text-xs text-[#ef4444]"
                    onClick={() => handleRemoveAddedTable(index)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => {
                setAddTableModal(true);
                setOverlay(true);
              }}
              className="border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold"
            >
              + Add tables
            </button>

            <button className="flex justify-center w-20 border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold">
              Confirm
            </button>
          </div>
        </section>
      </main>
      {addTableModal && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          {/* <ModalAddEmployee
                closeModal={() => setModalOpen(false)}
                closeOverlay={() => setOverlay(false)}
              /> */}
          <main className="bg-white p-4 max-w-[400px] w-full">
            <b className="">Adding new table </b>
            <div className="flex justify-between gap-2">
              <form
                onSubmit={handleFormSubmit}
                className="py-2 flex flex-wrap  items-center gap-2 text-sm"
              >
                <label className="font-bold flex items-center gap-2" htmlFor="">
                  Table number:
                  <input
                    className="border border-[#cbd5e1] py-1 pl-1 font-normal"
                    type="text"
                    required
                    value={numOfTable}
                    onChange={(e) => handleInputChange(e, setNumOfTable)}
                    placeholder="Number only"
                  />
                </label>
                <label className="font-bold flex items-center gap-2" htmlFor="">
                  Max Number of sits:
                  <input
                    className="border border-[#cbd5e1] py-1 pl-1 font-normal"
                    type="text"
                    value={maxNumOfSits}
                    required
                    onChange={(e) => handleInputChange(e, setMaxNumOfSits)}
                    placeholder="Number only"
                  />
                </label>
                <div className="flex justify-between items-center w-full">
                  <button
                    type="submit"
                    className="border w-[110px] border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
                  >
                    + Add
                  </button>
                  <button
                    onClick={() => {
                      setAddTableModal(false);
                      setOverlay(false);
                    }}
                    className="border w-[110px] border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      )}
      {overlay && (
        <div className="fixed z-40 top-0 bottom-0 left-0 right-0 bg-[#000] opacity-40"></div>
      )}
    </div>
  );
};

export default EditRoom;
