import React from "react";
import { useState } from "react";
import heroImg from "./images/Croods - Chart.png";
import { ImEye } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../../actions/userActions";

export default function SignIn() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (userInfo.id) {
      navigate("/services");
    }
  });

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/services");
  };
  return (
    <div className="flex flex-col gap-4 place-self-center items-center">
      <img src={heroImg} alt="hero" />
      <header className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <hr className="w-[48px] border-2 border-primary-bg-color" />
      </header>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-10 min-w-[319px]"
        action=""
      >
        <label className="flex flex-col font-bold text-lg" htmlFor="">
          Email
          <input
            className="text-black  border-b text-base font-normal focus:outline-none"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="flex flex-col font-bold text-lg" htmlFor="">
          Password
          <div className=" flex justify-between border-b  ">
            <input
              className="text-black text-base font-normal focus:outline-none"
              type={passwordShown ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>
              <ImEye className="mr-2" onClick={togglePassword} />
            </button>
          </div>
        </label>
        <div className="flex justify-between text-sm text-primary-gray">
          <div className="">
            <input
              className="empty:bg-color-primary-gray default:bg-gray-300 checked:bg-gray-500"
              type="checkbox"
            />{" "}
            <label htmlFor="">Stay logged in?</label>
          </div>
          <button>Forget password?</button>
        </div>
        <button className="text-[white] text-base font-semibold bg-primary-bg-color min-w-[277px] py-3 rounded-full shadow-md">
          Login
        </button>
        {/* <div className="flex items-center justify-between text-primary-gray"> <hr className='bg-primary-gray w-full' />
        <p className='px-2'>Or</p> 
        <hr className='bg-primary-gray w-full' /> </div> */}
      </form>
    </div>
  );
}
