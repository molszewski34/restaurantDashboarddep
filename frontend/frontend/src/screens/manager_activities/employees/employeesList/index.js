import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavbarManagmentPanel from "../../../../components/navbars/NavbarManagmentPanel";
import NavbarManagmentPanelSide from "../../../../components/navbars/NavbarManagmentPanelSide";

import CircularProgress from "@mui/material/CircularProgress";
import { getEmployees } from "../../../../actions/userActions";

const EmployeesList = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const listEmployees = useSelector((state) => state.employeeList);
  const {
    error: listEmployeesError,
    loading: listEmployeesLoading,
    employees,
  } = listEmployees;

  useEffect(() => {
    dispatch(getEmployees());
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
        <header className="font-bold py-1 border-b text-2xl border-[#cbd5e1]">
          Employess
        </header>
        <Link
          to="/employess/new-employee"
          className="border flex  place-self-start border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
        >
          + Add employee
        </Link>
        <section className="flex flex-col">
          <div className="grid grid-cols-3 md:grid-cols-8 px-2 font-bold py-2 border-b border-r border-l border-[#e5e7eb] bg-[#e5e7eb] text-xs ">
            <span>Full name</span>
            <span>Position</span>

            <span className="hidden md:flex">Cashier</span>
            <span className="hidden md:flex">Driver</span>
            <span>Phone</span>
            <span className="hidden md:flex">Email</span>
          </div>
          {employees ? (
            <div>
              {employees.map((employee) => (
                <Link
                  to={`/employess/${employee.id}`}
                  key={employee.id}
                  className="grid grid-cols-3 md:grid-cols-8 px-2  py-2 border-b border-r border-l border-[#e5e7eb]  text-xs  hover:bg-secondary-bg-color"
                >
                  <span className="flex ">{employee.name}</span>
                  <span>{employee.position}</span>

                  <span className="hidden md:flex">
                    {employee.isCashier ? "Yes" : "No"}
                  </span>
                  <span className="hidden md:flex">
                    {employee.isDriver ? "Yes" : "No"}
                  </span>

                  <span className="flex break-all">{employee.phone}</span>
                  <span className="  hidden md:flex">{employee.email}</span>
                </Link>
              ))}
            </div>
          ) : (
            <CircularProgress color="secondary" />
          )}
        </section>
      </main>
    </div>
  );
};

export default EmployeesList;
