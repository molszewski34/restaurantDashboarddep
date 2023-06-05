import React, { useState } from 'react';
import NavbarTop from '../../../components/navbars/NavbarTop';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import ModalAddEmployee from '../../../components/modals/ModalAddEmployee';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Labor = () => {
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const [modalOpen, setModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const [showConfirm, setShowConfirm] = useState(false);

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    // WADOMOŚĆ  GDY HASŁO NIE PASUJE (LUB LOGIN)
    <div>Ups! Password and login doesn`t match!</div>
  ) : (
    <main className=" flex flex-col items-center bg-secondary-bg-color relative h-screen">
      <NavbarTop />
      {userInfo.id ? (
        <div className="bg-secondary-bg-color max-w-[400px] w-full">
          <header className="text-2xl"> Employees </header>
          <section className="border-b-2 border-gray-light">
            <button
              onClick={() => {
                setModalOpen(true);
                setOverlay(true);
              }}
              className="text-sm font-bold border-2 rounded-full py-1 px-3 bg-primary-bg-color text-white ml-2 my-2"
            >
              + Add Employee
            </button>
          </section>
          <section className="flex flex-col gap-2">
            <form className="flex flex-col gap-2 p-4 shadow bg-white rounded-sm">
              <div className="flex justify-between ">
                <div className="">
                  <b>Name: </b>
                  <label className="" htmlFor="">
                    <input
                      className={`${isDisabled ? ' ' : 'border pl-1'}`}
                      type="text"
                      value={'Alice Westwood'}
                      disabled={isDisabled}
                    />
                  </label>
                </div>
                {/* <button>
                  <AiFillEdit
                    onClick={() => {
                      setIsDisabled(!isDisabled);
                    }}
                    className="text-[#1e40af]"
                  />
                </button> */}
              </div>

              <div className="flex justify-between ">
                <div className="">
                  <b>Position: </b>
                  <select
                    className={` bg-white
                    ${isDisabled ? 'appearance-none ' : 'border pl-1'}`}
                    name=""
                    id=""
                    disabled={isDisabled}
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
                      className={` bg-white
                    ${isDisabled ? 'appearance-none' : 'border pl-1'}`}
                      name=""
                      id=""
                      required
                      disabled={isDisabled}
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
                      className={` bg-white
                    ${isDisabled ? 'appearance-none' : 'border pl-1'}`}
                      name=""
                      id=""
                      required
                      disabled={isDisabled}
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
                      className={` bg-white
                    ${isDisabled ? 'appearance-none' : 'border pl-1'}`}
                      name=""
                      id=""
                      required
                      disabled={isDisabled}
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
                      className={`${isDisabled ? ' ' : 'border pl-1'}`}
                      type="text"
                      value={'+1 555-123-4567'}
                      disabled={isDisabled}
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
                      className={`w-full ${isDisabled ? ' ' : 'border pl-1'}`}
                      type="text"
                      value={'alicewestwood@example.com'}
                      disabled={isDisabled}
                    />
                  </label>
                </div>
                {/* <button>
                  <AiFillEdit className="text-[#1e40af]" />{' '}
                </button> */}
              </div>
              <div className="flex justify-between border-t-2 pt-2">
                <button
                  onClick={() => {
                    setIsDisabled(!isDisabled);
                    setShowConfirm(!showConfirm);
                  }}
                  className="flex items-center gap-1 bg-[#0369a1] text-white font-bold py-2 px-3 rounded-md"
                >
                  <AiFillEdit className="text-white" />
                  Edit
                </button>
                {showConfirm && (
                  <button className="flex items-center bg-[#059669] text-white font-bold py-2 px-3 rounded-md">
                    Confirm
                  </button>
                )}
                <button className="flex items-center bg-[#dc2626] text-white font-bold py-2 px-3 rounded-md">
                  <AiFillDelete className="text-white" />
                  Delete
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
      ) : (
        // WADOMOŚĆ  GDY UŻYTKOWNIK NIE JEST ZALOGOWANY
        <div>You must be logged in</div>
      )}
    </main>
  );
};

export default Labor;
