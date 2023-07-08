import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarManagmentPanel from "../../../../components/navbars/NavbarManagmentPanel";
import NavbarManagmentPanelSide from "../../../../components/navbars/NavbarManagmentPanelSide";
import { listCategories } from "../../../../actions/categoriesActions";
const NewRoom = () => {
  const categoriesList = useSelector((state) => state.categoriesList);
  const { categoriesError, categoriesLoading, categories } = categoriesList;
  const dispatch = useDispatch();

  const [addTableModal, setAddTableModal] = useState(false);
  const [overlay, setOverlay] = useState(false);
  useEffect(() => {
    dispatch(listCategories());
  }, []);
  const [numOfTable, setNumOfTable] = useState("");
  const [maxNumOfSits, setMaxNumOfSits] = useState("");
  const [tablesArray, setTablesArray] = useState([]);
  const [newRoomName, setNewRoomName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAddTableModal(false);
    setOverlay(false);
    const newTables = { input1: numOfTable, input2: maxNumOfSits };
    setTablesArray((prevTables) => [...prevTables, newTables]);
    setNumOfTable("");
    setMaxNumOfSits("");
  };

  const handleInputChange = (e, setInputText) => {
    const inputValue = e.target.value;
    const numbersRegex = /^[0-9]*$/;
    if (inputValue === "" || numbersRegex.test(inputValue)) {
      setInputText(inputValue);
    }
  };

  const handleRemoveTable = (index) => {
    setTablesArray((prevTables) => {
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
          <header className="font-bold py-1 border-b border-[#cbd5e1]">
            Create new room
          </header>
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 font-bold text-sm"
              htmlFor=""
            >
              Name
              <input
                className="border border-[#cbd5e1] py-1 pl-1 font-normal"
                type="text "
                placeholder="Name of Room"
                onChange={(e) => {
                  setNewRoomName(e.target.value);
                }}
              />
            </label>
          </div>
        </section>
        <section className="">
          <header className="font-bold py-1 border-b border-[#cbd5e1]">
            Tables
          </header>
          {tablesArray.length > 0 && (
            <div className="grid grid-cols-3 border-b border-[#cbd5e1] py-1">
              <span className="text-sm font-bold pl-2">Number of table</span>
              <span className="text-sm font-bold pl-2">Max number of sits</span>
            </div>
          )}
          {tablesArray.map((table, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-3 border-b border-[#cbd5e1]"
              >
                <span className="text-sm pl-2">{table.input1}</span>
                <span className="text-sm pl-2">{table.input2}</span>

                <button
                  className="place-self-end self-center mr-2 font-bold text-sm text-[#ef4444]"
                  onClick={() => handleRemoveTable(index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <div className="mt-4">
            <button
              onClick={() => {
                setAddTableModal(true);
                setOverlay(true);
              }}
              className="border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold hover:bg-[#f1f5f9]"
            >
              + Add tables
            </button>
          </div>
          <button className="flex justify-center w-20 border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold hover:bg-[#f1f5f9]">
            Confirm
          </button>
        </section>
      </main>
      {addTableModal && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
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

export default NewRoom;
