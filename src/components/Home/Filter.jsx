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
    <div className="text-gray-500">
      <button
        className="flex cursor-pointer gap-2 items-center font-medium "
        onClick={toggleFilter}
      >
        <MdFilterList /> Filter
      </button>

      {selected && (
        <div className="flex flex-col items-start justify-center text-[14px]  space-y-1">
          {radioOptions.map((item) => (
            <label
              htmlFor={item}
              className="flex items-center gap-1.5  text-gray-500  cursor-pointer hover:bg-gray-100 w-full rounded-md "
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
