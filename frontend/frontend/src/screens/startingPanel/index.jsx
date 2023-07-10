
import React from 'react'
import heroImg from './images/Charco - Mobile Life.png'
import { Link } from "react-router-dom";

const StartingPanel = () => {
  return (
 <div className="flex justify-center items-center h-screen">
    <div className='flex flex-col gap-12 place-self-center items-center'> 
    <img src={heroImg} alt="hero" />
    <p className='text-3xl text-center font-bold w-[277px]'>Fast and easy way to manage your <span className='text-primary-bg-color'>restaurant</span> </p>
<Link to="/login">
    <button className='text-[white] text-base font-semibold bg-primary-bg-color min-w-[277px] py-3 rounded-xl shadow-md'>
        
        
        Get Started</button>
        </Link>
     </div>
     </div>
  )
}

export default StartingPanel
