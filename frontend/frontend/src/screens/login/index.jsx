// import * as React from "react";
// import { useContext, useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { login } from "../../actions/userActions";

// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useLocation, useNavigate } from "react-router-dom";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// export default function SignIn() {
//   let navigate = useNavigate();

//   const dispatch = useDispatch();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const userLogin = useSelector((state) => state.userLogin);
//   const { error, loading, userInfo } = userLogin;

//   useEffect(() => {}, []);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     dispatch(login(email, password));
//     navigate("/");
//   };

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={submitHandler}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               onChange={(e) => setEmail(e.target.value)}
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

import React from "react";
import { useState } from "react";
import heroImg from "./images/Croods - Chart.png";
import { ImEye } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";

export default function SignIn() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

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
