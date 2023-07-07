import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarManagmentPanel from "../../../../components/navbars/NavbarManagmentPanel";
import { FiMoreHorizontal } from "react-icons/fi";
import NavbarManagmentPanelSide from "../../../../components/navbars/NavbarManagmentPanelSide";
import CircularProgress from "@mui/material/CircularProgress";
import { getEmployeePositions } from "../../../../actions/userActions";

const NewEmployee = () => {
  let dispatch = useDispatch();

  // first states of Name, email and phone number
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullName, setFullName] = useState("");

  const [position, setPosition] = useState("Bartender");
  const [isCashier, setIsCashier] = useState("Yes");
  const [isDriver, setIsDriver] = useState("Yes");

  // get employees positions
  const positionsList = useSelector((state) => state.positionsList);
  const { error, loading, positions } = positionsList;

  const handleInputChange = (e, setInputText) => {
    const inputValue = e.target.value;
    const numbersRegex = /^[0-9]*$/;
    if (inputValue === "" || numbersRegex.test(inputValue)) {
      setInputText(inputValue);
    }
  };

  const validateEmail = (e, setInputChange) => {
    const inputValue = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputValue === "" || emailRegex.test(inputValue)) {
      setInputChange(inputValue);
      setEmailError("");
    } else {
      setInputChange(inputValue);
      setEmailError("Incorect email format");
    }
  };

  const confirmEmployeeHandler = (e) => {
    e.preventDefault();
    console.log(position);
    console.log(fullName);
    console.log(email);
    console.log(phoneNumber);
    console.log(isCashier);
    console.log(isDriver);
  };

  useEffect(() => {
    dispatch(getEmployeePositions());
  }, []);

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div className="flex flex-col relative h-screen w-full">
      <NavbarManagmentPanel />
      <NavbarManagmentPanelSide />
      <main className="my-4 px-1 flex flex-col md:absolute md:h-screen md:w-[calc(100%_-_270px)]  md:p-[30px] md:left-[270px] md:top-0;">
        <section className="flex flex-col gap-3 my-4">
          <header className="font-bold py-1 border-b text-2xl border-[#cbd5e1]">
            Add employee
          </header>

          <form className="flex flex-col gap-2">
            <div className="p-6 md:p-0 bg-gray-100 flex items-center ">
              <div className="w-full md:max-w-[800px] ">
                <div>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label className="font-bold" for="full_name">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            // value=""
                            placeholder="ex: John Doe"
                            required
                          />
                        </div>

                        <div className="md:col-span-3">
                          <div className="flex justify-between items-center">
                            <label className="font-bold " for="email">
                              Email Address
                            </label>
                            <span className="text-xs text-[#dc2626]">
                              {emailError}
                            </span>
                          </div>

                          <input
                            type="text"
                            name="email"
                            id="email"
                            className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50`}
                            onChange={(e) => validateEmail(e, setEmail)}
                            value={email}
                            placeholder="ex: email@example.com"
                            required
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="font-bold" for="address">
                            Phone
                          </label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);

                              handleInputChange(e, setPhoneNumber);
                            }}
                            value={phoneNumber}
                            placeholder="ex: 1234567"
                            required
                          />
                        </div>

                        <div className="md:col-span-3">
                          <label>Position</label>
                          {positions ? (
                            <select
                              onChange={(e) => {
                                setPosition(e.target.value);
                              }}
                              className="w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                            >
                              {positions.map((position, i) => (
                                <option key={i} value={position.title}>
                                  {position.title}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <CircularProgress color="secondary" />
                          )}
                        </div>
                        <div className="md:col-span-2">
                          <label>Cashier</label>
                          <select
                            onChange={(e) => {
                              setIsCashier(e.target.value);
                            }}
                            className="w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                          >
                            <option className="md:col-span-2">Yes</option>
                            <option className="md:col-span-2">No</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label>Driver</label>
                          <select
                            onChange={(e) => {
                              setIsDriver(e.target.value);
                            }}
                            className="w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                          >
                            <option className="md:col-span-2">Yes</option>
                            <option className="md:col-span-2">No</option>
                          </select>
                        </div>

                        <div className="md:col-span-5 text-right bg-blue-500">
                          <div className="inline-flex items-end">
                            <button
                              onClick={(e) => {
                                confirmEmployeeHandler(e);
                              }}
                              className="flex justify-center w-20 rounded border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold"
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewEmployee;
