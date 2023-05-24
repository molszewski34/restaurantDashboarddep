import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {BsFillBackspaceFill} from 'react-icons/bs'
const ModalTablesPanel = ({closeModal, selectedMaxNumOfGuests, closeOverlay}) => {

console.log(`console log z ModalTablesPanel ${selectedMaxNumOfGuests}`)
  const [numOfGuests, setNumOFGuests] = useState('')

  //if numOfGuests is not empty (numOfGuests !== ''), or if numOfGuests is empty and the selected value is not 0 (numOfGuests === '' && value !== 0), then the value will be appended to numOfGuests. This ensures that 0 can only be selected as the second digit, given that the first digit is not 0.

  const Number = ({ value }) => {
    const handleClick = () => {
      if (numOfGuests !== '' || (numOfGuests === '' && value !== 0)) {
        setNumOFGuests(prevNum => prevNum + value.toString());
      }
    };
  //renders button as component
    return <button className="border hover:bg-[#e4e4e7]"  onClick={handleClick}>{value}</button>;
  };

  //changes color of text when numOfGuests is bigger than selectedMaxNumOfGuests
  const outputClassName = numOfGuests > selectedMaxNumOfGuests
  ? 'text-center text-3xl text-[#ef4444] col-start-2 col-end-2 py-2'
  : 'text-center text-3xl col-start-2 col-end-2 py-2';


  const handleBackspace = () => {
    setNumOFGuests(prevNum => prevNum.slice(0, -1));
  };

  //sets default value of output

  const outputValue = numOfGuests || '0';
 
 
  return (
    <main className=' flex flex-col border rounded bg-white p-2'>
    <header className='flex justify-between border-b-2 font-bold'>
  <div>Number of guests</div>
</header>

      {/* Output */}
      <div className="grid grid-cols-3 justify-between">
      <div className={outputClassName}>{outputValue}</div>
      <div className="grid grid-cols-3 col-span-2 text-center gap-1">
      <Number  value={1}/>
      <Number value={2}/>
      <Number value={3}/>
      <Number value={4}/>
      <Number value={5}/>
      <Number value={6}/>
      <Number value={7}/>
      <Number value={8}/>
      <Number value={9}/>
      <Number value={0}/>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col gap-2 px-4">
        <button onClick={handleBackspace} className='rounded flex justify-center text-xl bg-primary-bg-color text-white font-bold py-2 '><BsFillBackspaceFill/></button>
        <button onClick={() => { closeModal(false); closeOverlay(false); }} className='rounded bg-primary-bg-color text-white font-bold py-1 px-4'>Cancel</button>
        <button
            // disabled={parseInt(numOfGuests) > selectedMaxNumOfGuests}
            // className={`rounded bg-primary-bg-color text-white font-bold py-1 px-4 ${numOfGuests > selectedMaxNumOfGuests ? 'opacity-50' : ''}`}
            className={`rounded bg-primary-bg-color text-white font-bold py-1 px-4 ${numOfGuests > selectedMaxNumOfGuests ? 'opacity-50' : ''}`}
            >
            Done
            </button>
      
      </div>
      </div>

    </main>
  )
}

export default ModalTablesPanel