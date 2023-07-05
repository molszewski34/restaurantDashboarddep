import React from "react";
import NavbarTop from "../../components/navbars/NavbarTop";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { listRooms } from "../../actions/tablesActions";
import { listTables } from "../../actions/tablesActions";

const Services = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    // WADOMOŚĆ  GDY HASŁO NIE PASUJE (LUB LOGIN)
    <div>Ups! Password and login doesn`t match!</div>
  ) : (
    <main className=" flex flex-col items-center bg-secondary-bg-color h-screen">
      <NavbarTop />
      {userInfo.id ? (
        <div className="">
          <div className=" mx-6 my-8 grid max-w-[800px]">
            <div className="text-xl text-center text-white bg-[#629D93] p-1">
              <h1>Mode</h1>
            </div>
            <div className="grid grid-cols-2  gap-1">
              <button
                onClick={() => {
                  navigate("/tablesPanel");
                }}
                className="flex p-8 justify-center items-center  bg-white text-center font-bold text-xl"
              >
                Table Service
              </button>
              <button   onClick={() => {
                  navigate("/pending-orders");
                }} className="flex justify-center items-center  bg-white text-center font-bold text-xl">
                Pending orders
              </button>
              {/* <button className="flex justify-center items-center  bg-white text-center font-bold text-xl">
                Quick Order
              </button>
              <button className="flex justify-center items-center  bg-white text-center font-bold text-xl">
                Delivery
              </button> */}
              {/* <div className="p-8 bg-white">Pending Orders</div>
        <div className="p-8 bg-white">Quick Orders</div>
        <div className="p-8 bg-white">Delivery</div> */}
            </div>
          </div>
          <div className=" mx-6 my-8 grid max-w-[800px]">
            <div className="text-xl text-center text-white bg-[#629D93] p-1">
              <h1>Manager Activities</h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              <button
                className="flex p-8 justify-center items-center  bg-white text-center font-bold text-xl"
                onClick={() => {
                  navigate("/menu");
                }}
              >
                Menu
              </button>
              <button
                onClick={() => {
                  navigate("/labor");
                }}
                className="flex justify-center items-center  bg-white text-center font-bold text-xl"
              >
                Labor
              </button>

              <button
                className="flex justify-center items-center  bg-white text-center font-bold text-xl"
                onClick={() => {
                  navigate("/tables");
                  dispatch(listRooms());
                  dispatch(listTables());
                }}
              >
                Tables
              </button>
              {/* <div className="p-8 bg-white">Pending Orders</div>
=======
        </div>
        <div className=" mx-6 my-8 grid max-w-[800px]">
          <div className="text-xl text-center text-white bg-[#629D93] p-1">
            <h1>Manager Activities</h1>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-1">
            <button
                 onClick={() => {
                  navigate("/menu");
                }}
              className="flex p-8 justify-center items-center  bg-white text-center font-bold text-xl"
            >
              Menu
            </button>
            {/* <button
              onClick={() => {
                navigate("/labor");
              }}
            className="flex justify-center items-center  bg-white text-center font-bold text-xl">
              Labor
            </button>
        
            <button className="flex justify-center items-center  bg-white text-center font-bold text-xl">
              Tables
            </button> */}
              {/* <div className="p-8 bg-white">Pending Orders</div>
>>>>>>> a18e014503215b5032894e777e4de31b2550447f
        <div className="p-8 bg-white">Quick Orders</div>
        <div className="p-8 bg-white">Delivery</div> */}
            </div>
          </div>
        </div>
      ) : (
        // WADOMOŚĆ  GDY UŻYTKOWNIK NIE JEST ZALOGOWANY
        <div>You must be logged in</div>
      )}
    </main>
  );
};

export default Services;
