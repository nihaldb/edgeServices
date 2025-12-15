import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";

function Filter() {
  const [selected, setSetselected] = useState(true);

  const toggleFilter = () => setSetselected(!selected);

  const radioOptions = [
    "Icon",
    "Video",
    "Audio",
    "Link",
    "Image",
    "scrom",
    "word",
    "PPT",
    "pdf",
    "excel",
    "youtube",
    "K-point",
  ];
  return (
    <div>
      <button
        className="flex cursor-pointer gap-2 items-center font-bold text-gray-500"
        onClick={toggleFilter}
      >
        <MdFilterList /> Filter
      </button>

      {selected && (
        <div className="flex flex-col">
          {radioOptions.map((item) => (
            <label
              htmlFor={item}
              className="flex items-center gap-2 text-gray-500 font-medium cursor-pointer hover:bg-gray-100 rounded-md"
            >
              <input type="radio" name="filter" id={item} />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
