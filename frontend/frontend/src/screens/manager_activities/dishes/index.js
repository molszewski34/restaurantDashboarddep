import { useState, useEffect, useRef } from 'react';
import NavbarTop from '../../../components/navbars/NavbarTop';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import ModalAddDishes from '../../../components/modals/ModalAddDishes';
import ModalAddCategory from '../../../components/modals/ModalAddCategory';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { listCategories } from '../../../actions/categoriesActions';
import { listDishes } from '../../../actions/dishActions';

const Labor = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const [newDishmodalOpen, setNewDishModalOpen] = useState(false);
  const [newCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState(null);

  const categoriesList = useSelector((state) => state.categoriesList);

  const dishList = useSelector((state) => state.dishList);
  const { error: dishListError, loading: dishListloading, dishes } = dishList;
  console.log(dishList);
  useEffect(() => {
    dispatch(listDishes());
    dispatch(listCategories());
  }, [dispatch]);

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    // WADOMOŚĆ  GDY HASŁO NIE PASUJE (LUB LOGIN)
    <div>Ups! Password and login doesn`t match!</div>
  ) : (
    <main className=" flex flex-col items-center bg-secondary-bg-color relative h-full">
      <NavbarTop />
      {userInfo.id ? (
        <div className="bg-secondary-bg-color max-w-[800px] w-full">
          <header className="text-2xl"> Dishes </header>
          <section className="flex justify-between items-center border-b-2 border-gray-light">
            <div className="">
              <button
                onClick={() => {
                  setNewDishModalOpen(true);
                  setOverlay(true);
                  // setSelectedCategories(categoriesList);
                }}
                className="text-sm font-bold border-2 rounded-full py-1 px-3 bg-primary-bg-color text-white ml-2 my-2"
              >
                + Add Dish
              </button>
              <button
                onClick={() => {
                  setCategoryModalOpen(true);
                  setOverlay(true);
                }}
                className="text-sm font-bold border-2 rounded-full py-1 px-3 bg-primary-bg-color text-white ml-2 my-2"
              >
                + Add Category
              </button>
            </div>

            <select className="p-1" name="" id="">
              <option value={'filter_category'}>
                <b>Filter Category</b>
              </option>
              {categoriesList.categories.map((categoryItem) => (
                <option value={categoryItem.title}>{categoryItem.title}</option>
                // <div className="">

                //     {/* {categoryItem.title} */}
                // </div>
              ))}
            </select>
          </section>
          <section className="mb-4">
            <div className="grid grid-cols-4 p-1 font-bold bg-white border ">
              <span>Name</span>
              <span>Category</span>
              <span>Price</span>
              <span className="text-center">Edit</span>
            </div>
            {dishList.dishes
              .filter((filteredDishes) => filteredDishes.category)
              .map((dishList) => (
                <div
                  key={dishList.id}
                  className="grid grid-cols-4 p-1 border-b border-r border-l bg-white items-center"
                >
                  <span>{dishList.title}</span>
                  {/* {categories.map((category) => (
                <span key={category.id}>{category.title}</span>
              ))} */}

                  <span>{dishList.category}</span>
                  <span>{dishList.price}</span>
                  <span className="flex justify-center">
                    <button
                      onClick={() => {
                        setCategoryModalOpen(true);
                        setOverlay(true);
                      }}
                      className="w-[40px] h-[40px] flex justify-center items-center"
                    >
                      <AiFillEdit className="text-2xl text-[#0ea5e9] " />
                    </button>
                  </span>
                </div>
              ))}
          </section>
          {newDishmodalOpen && (
            <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <ModalAddDishes
                closeModal={() => setNewDishModalOpen(false)}
                closeOverlay={() => setOverlay(false)}
                selectedCategories={selectedCategories}
              />
            </div>
          )}
          {newCategoryModalOpen && (
            <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <ModalAddCategory
                closeModal={() => setCategoryModalOpen(false)}
                closeOverlay={() => setOverlay(false)}
                selectedCategories={selectedCategories}
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
