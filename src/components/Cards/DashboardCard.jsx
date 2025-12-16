import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { FiImage } from "react-icons/fi";
import CardDropdown from "./CardDropdown";

function DashboardCard() {
  return (
    <div className="w-[235px] h-60  rounded-xl border border-gray-200 shadow-sm group relative hover:bg-gray-50">
      <div className="w-full h-[20%]  flex justify-items-end items-center">
        <div className="rounded-xl bg-gray-200 h-[50%] w-[30%] ml-2 text-xs  flex items-center justify-center text-gray-600">
          165458
        </div>
        <div className="flex justify-items-end w-[70%] h-[60%]  ">
          <ul className="flex w-full justify-end pl-3 pr-1.5 gap-1.5 mt-1">
            <li className="invisible group-hover:visible">
              <MdOutlineEdit className="text-gray-400 cursor-pointer" />
            </li>
            <li className=" relative group/dots ">
              <HiOutlineDotsVertical className="text-gray-400 " />
              <CardDropdown />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[50%] flex justify-center items-center">
        <div className="w-[35%] h-[70%] flex justify-center items-center rounded-full bg-green-100">
          <FiImage size={30} color="#22c55e" />
        </div>
      </div>
      <div className="w-full h-[30%] text-wrap text-center text-sm font-medium pt-2">
        <p className="mx-2">
          BH to approve/reject learner request - Learner asset
        </p>
      </div>
    </div>
  );
}

export default DashboardCard;
