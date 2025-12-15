import React from "react";
import { FiImage } from "react-icons/fi";

function DashboardHorizontalCard() {
  return (
    <div className="h-20 w-full flex items-center border-b border-b-gray-300">
      <div className="h-16 w-[75%] flex items-center px-2 gap-2 ">
        <input type="checkbox" name="boxItem" id="box" className="h-5 w-5 " />
        <div className=" h-11 w-11 rounded-full flex justify-center items-center bg-green-100">
          <FiImage color="#22c55e" size={15} />
        </div>
        <p className="font-bold text-gray-700 text-sm">
          BH to approve/reject learner request - Learner asset
        </p>
      </div>
      <div className=" flex gap-2 px-5 font-bold text-gray-600 text-sm justify-end w-[25%] ">
        <p>7/7/2022</p>
        <p>10:25 am</p>
      </div>
    </div>
  );
}

export default DashboardHorizontalCard;
