import React from "react";
import { FiEyeOff, FiDownload, FiCopy, FiTrash } from "react-icons/fi";
// import { AiOutlineEyeInvisible } from "react-icons/ai";

function CardDropdown() {
  const editOptions = ["Disable", "Download", "Version", "remove"];

  return (
    <div className="w-28 h-auto   rounded-md shadow-lg shadow-gray-200  bg-white absolute z-10 right-3 top-2 p-2 gap-2 hidden  group-hover/dots:flex flex-col">
      <div className="hover:bg-gray-100 w-auto rounded-md">
        <label className="flex items-center gap-2">
          <FiEyeOff className="text-blue-600" /> Disable
        </label>
      </div>
      <div className="hover:bg-gray-100 w-auto rounded-md">
        <label className="flex items-center gap-2">
          <FiDownload className="text-blue-600" /> Download
        </label>
      </div>
      <div className="hover:bg-gray-100 w-auto rounded-md">
        <label className="flex items-center gap-2">
          <FiCopy className="text-blue-600" /> Copy
        </label>
      </div>
      <div className="hover:bg-gray-100 w-auto rounded-md">
        <label className="flex items-center gap-2">
          <FiTrash className="text-blue-600" /> Remove
        </label>
      </div>
    </div>
  );
}

export default CardDropdown;
