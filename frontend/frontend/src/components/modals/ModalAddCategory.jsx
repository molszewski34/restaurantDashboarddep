import React from 'react'
import {CgClose} from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';

const ModalAddCategory = ({
    closeModal,
  closeOverlay,
  selectedCategories
}) => {
    // const categoriesList = selectedCategories
    // console.log(categoriesList)
    const categoriesList = useSelector((state) => state.categoriesList);
    const { categoriesError, categoriesLoading, categories } = categoriesList;
    console.log(categories)
    return(
        <main className='bg-white p-4 max-w-[400px] w-full'> 
   
    <div className="flex justify-between items-center pb-2 border-b-2">
    
    <header className="text-2xl font-bold">Add new category</header>
    <button
           onClick={() => {
            closeModal(false);
            closeOverlay(false);
          }}
    className="text-3xl font-bold  hover:text-[#dc2626]"><CgClose/></button>
    </div>
  
    <section className='flex flex-col  gap-1 '>
        <div className="flex justify-between py-2">
        <label className=' flex gap-2' htmlFor="">
        Name: 
        <input className='border' type="text" />
    </label>
    <select name="" id="">
{categories.map((category)=>(
    <option key={category.id}style={{backgroundColor: category.colour}} value={category.colour}>{category.colour}</option>
))}
      
    </select>
        </div>

    



    <button className='bg-primary-bg-color text-white font-bold w-[100px] place-self-center py-1 px-2 rounded'>Add</button>
</section>
  


    </main>

    
    )
}

export default ModalAddCategory