import React from "react";
import { FaQuestionCircle, FaUserCircle, FaSearch } from "react-icons/fa";
import { MdGridView, MdFormatListBulleted } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Header({ className }) {
  const username = "edge mobeserv";

  return (
    <header className="flex justify-center">
      {/* <div className="   flex  justify-center"> */}
      <div className="bg-blue-900 h-[54px] w-[97%] flex  ">
        <div className="flex row justify-items-start h-[54px]  w-[80%]  border-amber-50">
          <div className=" flex col justify-center items-center w-16 h-[54px]">
            <FiMenu className="h-[54px] w-6 text-white" />
          </div>
          <div className="w-32 h-[54px] flex justify-center items-center">
            {" "}
            <p className="text-4xl text-white italic">Edge </p>
          </div>
          <div className=" w-16 h-[54px] flex col justify-center items-center">
            {" "}
            <MdGridView className="h-[54px] w-6 text-white " />
          </div>
          <div className="w-24 h-[54px] flex justify-center items-center text-white">
            Services
          </div>
        </div>
        <div className=" flex row  h-[54px]  w-[20%]">
          <div className="flex justify-center mt-1.5 items-center mb-2 border-r-white w-[25%]  h-[70%]">
            {" "}
            <FaQuestionCircle className="h-[54px] w-6 text-white " />
          </div>
          <div className="flex justify-center items-center h-[80%] px-2.5  mx-3 mt-1.5 border-l-2 border-l-white">
            {" "}
            <FaUserCircle className="h-[54px] w-8 text-white" />{" "}
            <p className="ml-2 text-white">{username}</p>
          </div>
        </div>
      </div>
    </header>
    // </div>
  );
}

export default Header;
