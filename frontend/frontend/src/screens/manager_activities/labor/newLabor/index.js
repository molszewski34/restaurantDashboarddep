import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavbarManagmentPanel from '../../../../components/navbars/NavbarManagmentPanel';
import { FiMoreHorizontal } from 'react-icons/fi';

import NavbarManagmentPanelSide from '../../../../components/navbars/NavbarManagmentPanelSide';
import { listCategories } from '../../../../actions/categoriesActions';

import { listTables, listRooms } from '../../../../actions/tablesActions';
import { listOrders } from '../../../../actions/ordersActions';

import ModalAddEmployee from '../../../../components/modals/ModalAddEmployee';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
const NewLabor = () => {
  const roomsList = useSelector((state) => state.roomsList);
  const { error: roomsListError, loading: roomsListLoading, rooms } = roomsList;
  const tableList = useSelector((state) => state.tableList);
  // let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const [modalOpen, setModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const [showConfirm, setShowConfirm] = useState(false);
  const {
    error: tableListError,
    loading: tableListLoading,
    tables,
  } = tableList;
  console.log(tables);
  console.log(rooms);
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
          New Employee
        </header>
        <div className=" max-w-[400px] w-full">
          <section className="flex flex-col gap-2 my-2">
            <form className="flex flex-col gap-2 p-4 shadow bg-white rounded-sm">
              <div className="flex justify-between ">
                <div className="">
                  <b>Full Name: </b>
                  <label className="" htmlFor="">
                    <input
                      className={`pl-1  border ${
                        isDisabled ? ' ' : '  bg-[#e0f2fe]'
                      }`}
                      type="text"
                      placeholder={'Provide a Full Name'}
                      //   disabled={isDisabled}
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-between ">
                <div className="">
                  <b>Position: </b>
                  <select
                    className="py-1 pl-1"
                    // className={` bg-white
                    // ${isDisabled ? 'appearance-none ' : 'border pl-1'}`}

                    name=""
                    id=""
                    // disabled={isDisabled}
                  >
                    <option value="cook">Cook</option>
                    <option value="waiter">Waiter</option>
                    <option value="chef">Chef</option>
                    <option value="manager">Manager</option>
                    <option value="cashier">Cashier</option>
                    <option value="driver">Driver</option>
                  </select>
                </div>
                {/* <button>
                  <AiFillEdit className="text-[#1e40af]" />{' '}
                </button> */}
              </div>
              <div className="flex justify-between ">
                <div className="">
                  <b>Type of payment: </b>
                  <label className="" htmlFor="">
                    <select
                      className="py-1 pl-1"
                      //   className={` bg-white
                      // ${isDisabled ? 'appearance-none' : 'border pl-1'}`}
                      name=""
                      id=""
                      required
                      //   disabled={isDisabled}
                    >
                      <option value="hour">Hour</option>
                      <option value="day">Day</option>
                      <option value="month">Month</option>
                    </select>
                  </label>
                </div>
                {/* <button>
                  <AiFillEdit className="text-[#1e40af]" />{' '}
                </button> */}
              </div>
              <div className="flex justify-between ">
                <div className="">
                  <b>Cashier: </b>
                  <label className="" htmlFor="">
                    <select
                      className="py-1 pl-1"
                      //   className={` bg-white
                      // ${isDisabled ? 'appearance-none' : 'border pl-1'}`}
                      name=""
                      id=""
                      required
                      //   disabled={isDisabled}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </label>
                </div>
                {/* <button>
                  <AiFillEdit className="text-[#1e40af]" />{' '}
                </button> */}
              </div>
              <div className="flex justify-between ">
                <div className="">
                  <b>Driver: </b>
                  <label className="" htmlFor="">
                    <select
                      className="py-1 pl-1"
                      //   className={` bg-white
                      // ${isDisabled ? 'appearance-none' : 'border pl-1'}`}
                      name=""
                      id=""
                      required
                      //   disabled={isDisabled}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </label>
                </div>
                {/* <button>
                  <AiFillEdit className="text-[#1e40af]" />{' '}
                </button> */}
              </div>
              <div className="flex justify-between ">
                <div className="">
                  <b>Phone: </b>
                  <label className="" htmlFor="">
                    <input
                      className={`pl-1  border ${
                        isDisabled ? ' ' : '  bg-[#e0f2fe]'
                      }`}
                      type="text"
                      placeholder={'Provide a Full Name'}
                      //   placeholder={'+1 555-123-4567'}
                      //   disabled={isDisabled}
                    />
                  </label>
                </div>
                {/* <button>
                  <AiFillEdit className="text-[#1e40af]" />{' '}
                </button> */}
              </div>
              <div className="flex justify-between ">
                <div className="flex w-full">
                  <b>Email: </b>
                  <label className="w-full flex" htmlFor="">
                    <input
                      className={`pl-1  border ${
                        isDisabled ? ' ' : '  bg-[#e0f2fe]'
                      }`}
                      type="text"
                      placeholder={'Provide a Full Name'}
                      //   placeholder={'alicewestwood@example.com'}
                      //   disabled={isDisabled}
                    />
                  </label>
                </div>
                {/* <button>
                  <AiFillEdit className="text-[#1e40af]" />{' '}
                </button> */}
              </div>
              <div className="flex justify-between border-t-2 pt-2">
                <button className="flex items-center bg-[#059669] text-white font-bold py-2 px-3 rounded-md">
                  Confirm
                </button>
              </div>
            </form>
          </section>
          {modalOpen && (
            <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <ModalAddEmployee
                closeModal={() => setModalOpen(false)}
                closeOverlay={() => setOverlay(false)}
              />
            </div>
          )}
          {overlay && (
            <div className="absolute z-10 top-0 bottom-0 left-0 right-0 bg-[#000] opacity-40"></div>
          )}
        </div>
      </main>
    </div>
  );
};

export default NewLabor;
