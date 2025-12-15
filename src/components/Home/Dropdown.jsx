import React, { useState } from "react";

function Dropdown({ Category, options }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className=" my-4 ">
      <button
        onClick={toggleOpen}
        className="
      cursor-pointer font-semibold text-gray-500 hover:bg-gray-100 rounded-md"
      >
        {/* {Category} */}
        {open ? Category + "  ▼" : Category + " ▶"}
      </button>

      {open && (
        <div className="flex flex-col border-l-2 border-l-blue-500 pl-2">
          {options.map((option) => (
            <label
              key={option}
              htmlFor={options}
              className="flex items-center gap-2 text-gray-500 font-medium "
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
