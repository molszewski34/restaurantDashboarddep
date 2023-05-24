import React, { useState } from "react";
import NavbarTop from "../../components/navbars/NavbarTop";
import ModalTablesPanel from "../../components/modals/ModalTablesPanel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTables, listRooms } from "../../actions/tablesActions";
import { listOrders } from "../../actions/ordersActions";
import CircularProgress from "@mui/material/CircularProgress";
import { LinkContainer } from "react-router-bootstrap";

import { useMediaQuery, Tab, Tabs, useTheme } from "@mui/material";

import { MdTableBar } from "react-icons/md";




const TablesPanel = () => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { error, loading, orders } = orderList;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tableList = useSelector((state) => state.tableList);
  const {
    error: tableListError,
    loading: tableListLoading,
    tables,
  } = tableList;

  const roomsList = useSelector((state) => state.roomsList);
  const { error: roomsListError, loading: roomsListLoading, rooms } = roomsList;

  console.log(tables);

  const userLogin = useSelector((state) => state.userLogin);
  const {
    error: userLoginError,
    loading: userLoginLoading,
    userInfo,
  } = userLogin;

  useEffect(() => {
    dispatch(listTables());
    dispatch(listRooms());
    dispatch(listOrders());
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [selectedMaxNumOfGuests, setSelectedMaxNumOfGuests] = useState(null);

  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };


  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <main className="bg-secondary-bg-color h-screen relative flex flex-col">
      <NavbarTop />
      <h1 className="font-bold text-[#0f766e] text-3xl text-center pl-2 my-4 ml-2 ">
        Tables
      </h1>
 
          <Tabs
            orientation={isMobile ? 'vertical' : 'horizontal'}
            value={activeTab}
            onChange={handleChangeTab}
            // variant="scrollable"
            // scrollButtons="auto"
            className={isMobile ? 'centered-tabs' : ''} 
            centered
          >
            {rooms.map((room, index) => (
              <Tab key={room.id} label={room.name}  />
            ))}
          </Tabs>

    

      {rooms.map((room, index) => (
        <section
          key={room.id}
          className={`p-2 md:p-4 md:min-w-[800px] md:max-w-[50vw] md:place-self-center md:border-2 md:border-[#337066] md:mb-6 md:rounded md:shadow-md mt-4 ${
            activeTab === index ? "" : "hidden"
          }`}
        >
          <header className="flex items-center text-lg text-[#374151] mb-2">
            <MdTableBar className="text-lg text-white bg-[#ea580c] rounded-full p-1 w-6 h-6 mr-2 border
 border-white shadow" />
            {room.name}
          </header>
          <div className="grid grid-cols-4 place-content-center gap-1 gap-y-3 mb-5 bg-secondary-bg-color grid-flow-row">
            {/* TUTAJ JEST DIV Z NAZWĄ POKOJU */}

            {tables
              .filter((table) => table.room == room.id)
              .map((filderedTable) => (
                <>
                  {filderedTable.isOccupied ? (
                    <>
                      {/* DISPLAY OCCIPIED TABLES */}
                      {orders
                        .filter((order) => order.table == filderedTable.id)
                        .map((filteredOrder) => (
                          <LinkContainer
                            key={filteredOrder.id}
                            component="button"
                            to={`/orders/order/${filteredOrder.id}`}
                   
                            style={{
                              // backgroundColor: "red",
                              border: "2px dashed red"
                            }}
                          >
                            <button
                              key={filderedTable.id}
                              disabled
                              className="flex flex-col items-center justify-center  duration-200 font-bold border-2 border-primary-bg-color rounded shadow bg-white opacity-50 cursor-not-allowed"
                            >
                              <span className="text-3xl">
                                {" "}
                                #{filderedTable.tableNumber}
                              </span>{" "}
                              <span>1-{filderedTable.numberOfPersons}</span>
                            </button>
                          </LinkContainer>
                        ))}
                    </>
                  ) : (
                    // DISPLAY FREE TABLES
                    
                    <button
                      key={filderedTable.id}
                      className="flex flex-col items-center justify-center bg-[#f0fdfa]  duration-200 font-bold border-2 hover:border-dotted border-primary-bg-color rounded shadow"
                      onClick={() => {
                        setSelectedMaxNumOfGuests(
                          filderedTable.numberOfPersons
                        );
                        setModalOpen(true);
                        setOverlay(true);
                        console.log(` console.log z tables ${filderedTable.numberOfPersons}`)
                      }}
                    >
                      <span className="text-3xl text-[#0f766e]">
                        {" "}
                        #{filderedTable.tableNumber}
                      </span>{" "}
                      <span className="text-[#0f766e]">1-{filderedTable.numberOfPersons}</span>
                    </button>
                                   
                    
                  )}
                </>
              ))}
          </div>
        </section>

))}
  {modalOpen && (
<div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
<ModalTablesPanel
selectedMaxNumOfGuests={selectedMaxNumOfGuests}
closeModal={() => setModalOpen(false)}
closeOverlay={()=> setOverlay(false)}
/>
</div>
)}
{overlay && (
  <div className="absolute z-10 top-0 bottom-0 left-0 right-0 bg-[#000] opacity-40"></div>
)}
</main>
);
};

export default TablesPanel;

