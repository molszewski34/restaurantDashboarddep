import React from 'react'
import {CgClose} from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';

const ModalAddDishes = ({
    closeModal,
  closeOverlay,
  selectedCategories
}) => {
    // const categoriesList = selectedCategories
    // console.log(categoriesList)
    const categoriesList = useSelector((state) => state.categoriesList);
    const { categoriesError, categoriesLoading, categories } = categoriesList;
    return(
        <main className='bg-white p-4 max-w-[400px] w-full'> 
   
    <div className="flex justify-between items-center pb-2 border-b-2">
    
    <header className="text-2xl font-bold">Add Dish</header>
    <button
           onClick={() => {
            closeModal(false);
            closeOverlay(false);
          }}
    className="text-3xl font-bold  hover:text-[#dc2626]"><CgClose/></button>
    </div>
  
    <section className='flex flex-col gap-1'>
    <label htmlFor="">
        Name: 
        <input type="text" placeholder='Name of Dish'/>
    </label>
    <label htmlFor="">Select category:
<select name="" id="">
{categoriesList.categories.map((categoryItem)=>(
    <option value={categoryItem.title}>{categoryItem.title}</option>
    // <div className="">

    //     {/* {categoryItem.title} */}
    // </div>
    ))}
</select>
</label>
<label htmlFor="">
        Price: 
        <input type="text" placeholder='Price'/>
    </label>
    <button>Confirm</button>
</section>
  


    </main>

    
    )
}

export default ModalAddDishes