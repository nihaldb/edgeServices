import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Dropdown({ Category, options }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="my-4 ">
      <button
        onClick={toggleOpen}
        className="
      cursor-pointer font-semibold text-gray-500 hover:bg-gray-100 rounded-md flex items-center w-full"
      >
        {/* {Category} */}
        {open ? (
          <MdKeyboardArrowDown size={20} className="text-blue-500" />
        ) : (
          <MdKeyboardArrowRight size={20} />
        )}
        <span>{Category}</span>
      </button>

      {open && (
        <div className="flex flex-col border-l-2 border-l-blue-500 pl-2 ml-2 text-[15px] space-y-1.5">
          {options.length > 0 && (
            <input
              type="text"
              name="deptSearch"
              id="SearchDept"
              className="outline-none focus:ring-1  focus:ring-blue-500 my-1.5 rounded-sm p-1 caret-blue-500 border border-gray-100"
              placeholder={`search ${Category}`}
            />
          )}
          {options.map((option) => (
            <label
              key={option}
              htmlFor={option}
              className="flex items-center gap-2.5  text-gray-500 font-normal hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <input type="checkbox" name="Department" id={option} />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
