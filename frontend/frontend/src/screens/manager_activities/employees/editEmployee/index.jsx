import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarManagmentPanel from "../../../../components/navbars/NavbarManagmentPanel";
import NavbarManagmentPanelSide from "../../../../components/navbars/NavbarManagmentPanelSide";
import CircularProgress from "@mui/material/CircularProgress";
import { getEmployeePositions } from "../../../../actions/userActions";
import { getEmployeeById } from "../../../../actions/userActions";
import { editEmployee } from "../../../../actions/userActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditEmployee = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let navigate = useNavigate();

  // first states of Name, email and phone number
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullName, setFullName] = useState("");

  const [position, setPosition] = useState("");
  const [isCashier, setIsCashier] = useState("");
  const [isDriver, setIsDriver] = useState("");

  // get employees positions
  const positionsList = useSelector((state) => state.positionsList);
  const { error, loading, positions } = positionsList;

  // get employee Details
  const employeeDetails = useSelector((state) => state.employeeDetails);
  const {
    error: errorEmployeeDetails,
    loading: loadingEmployeeDetails,
    employee,
  } = employeeDetails;

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

  console.log(employee);

  const confirmEmployeeHandler = (e) => {
    e.preventDefault();
    dispatch(editEmployee(id, fullName, email, phoneNumber, position));
  };

  useEffect(() => {
    dispatch(getEmployeePositions());
    dispatch(getEmployeeById(id));
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
            Edit employee
          </header>

          <form className="flex flex-col gap-2">
            <div className="p-6 md:p-0 bg-gray-100 flex items-center ">
              <div className="w-full md:max-w-[800px] ">
                <div>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label className="font-bold">Full Name</label>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="h-10 border mt-1 rounded pl-2 w-full bg-gray-50"
                            placeholder={employee.name}
                            required
                            onChange={(e) => {
                              setFullName(e.target.value);
                            }}
                          />
                        </div>

                        <div className="md:col-span-3">
                          <div className="flex justify-between items-center">
                            <label className="font-bold ">Email Address</label>
                            <span className="text-xs text-[#dc2626]">
                              {emailError}
                            </span>
                          </div>

                          <input
                            type="text"
                            name="email"
                            id="email"
                            className={`h-10 border mt-1 rounded pl-2 w-full bg-gray-50`}
                            onChange={(e) => validateEmail(e, setEmail)}
                            value={email}
                            placeholder={employee.email}
                            required
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="font-bold">Phone</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="h-10 border mt-1 rounded pl-2 w-full bg-gray-50"
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);

                              handleInputChange(e, setPhoneNumber);
                            }}
                            value={phoneNumber}
                            placeholder={employee.phone}
                            required
                          />
                        </div>

                        <div className="md:col-span-3">
                          <label>Actual position : {employee.position}</label>
                          {positions ? (
                            <select
                              onChange={(e) => {
                                setPosition(e.target.value);
                              }}
                              className="w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1 pl-2"
                            >
                              {" "}
                              <option value=""></option>
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
                        <div className="md:col-span-5 text-right bg-blue-500">
                          <div className="flex justify-between">
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

export default EditEmployee;
