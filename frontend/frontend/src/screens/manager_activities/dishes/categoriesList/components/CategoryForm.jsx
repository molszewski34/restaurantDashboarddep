import React, { useState } from 'react';

const AddCategoryForm = ({ onAddCategory }) => {
  const [selectedColor, setSelectedColor] = useState('#0ca3ee');
  const [newCategoryName, setNewCategoryName] = useState('');

  const addCategoryHandler = (e) => {
    e.preventDefault();
    onAddCategory(newCategoryName, selectedColor);
  };

  const options = [
    { style: { backgroundColor: '#0ca3ee' }, value: '#0ca3ee' },
    { style: { backgroundColor: '#92E390' }, value: '#92E390' },
    { style: { backgroundColor: '#fde798' }, value: '#fde798' },
    { style: { backgroundColor: '#d9dfe4' }, value: '#d9dfe4' },
    { style: { backgroundColor: '#107b1e' }, value: '#107b1e' },
    { style: { backgroundColor: '#ebac15' }, value: '#ebac15' },
  ];

  const colorOptions = options.map((option) => (
    <option key={option.value} style={option.style} value={option.value}>
      {option.value}
    </option>
  ));

  return (
    <form className="flex flex-col gap-2">
      <div className="p-6 md:p-0 bg-gray-100 flex items-center ">
        <div className="w-full md:max-w-[800px] ">
          <div>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <label className="font-bold">Category name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded pl-2 w-full bg-gray-50 border-[#94a3b8]"
                      required
                      onChange={(e) => {
                        setNewCategoryName(e.target.value);
                      }}
                      placeholder="ex: Pizza"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="font-bold">Colour</label>
                    <select
                      onChange={(e) => {
                        setSelectedColor(e.target.value);
                      }}
                      className="w-full h-10 bg-[#e2e8f0] flex border border-gray-200 rounded items-center mt-1 pl-2"
                    >
                      {colorOptions}
                    </select>
                  </div>

                  <div className="md:col-span-5 text-right bg-blue-500">
                    <div className="inline-flex items-end">
                      <button
                        onClick={addCategoryHandler}
                        className="flex justify-center w-20 rounded border border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold shadow hover:bg-[#f1f5f9]"
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
  );
};

export default AddCategoryForm;
