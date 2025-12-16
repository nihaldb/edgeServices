import React from "react";
import { FaQuestionCircle, FaUserCircle, FaSearch } from "react-icons/fa";
import {
  MdGridView,
  MdFormatListBulleted,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import EdgeLogo from "./EdgeLogo";

function Header({ className }) {
  const username = "edge mobeserv";

  return (
    <header className="flex justify-center">
      {/* <div className="   flex  justify-center"> */}
      <div className="bg-[#2F3C9E] h-[54px] w-[97%] flex text-[#43D3C2] ">
        <div className="flex row  h-[54px]  w-[83%]  pl-0.5">
          <div className=" flex col justify-center items-center w-16 h-[54px]">
            <FiMenu className="h-[54px] w-6 text-white" />
          </div>
          <div className="w-28 h-[54px] flex justify-center items-center">
            {" "}
            {/* <p className="text-4xl text-white italic">Edge </p> */}
            <EdgeLogo />
          </div>
          <div className=" w-16 h-[54px] flex col justify-end items-center pt-1.5 pr-1.5">
            {" "}
            <MdGridView className="h-5 w-5 text-white font-light" />
          </div>
          <div className="w-24 h-[54px] flex justify-start items-center text-white text-sm gap-1">
            <p>Services</p>
            <MdKeyboardArrowUp size={20} />
          </div>
        </div>
        <div className=" flex row  h-[54px]  w-[17%] items-center pl-4.5">
          <div className="w-[25%] h-full flex items-center justify-center ">
            <div className="flex justify-end items-center mb-2  w-full  h-[50%] border-r border-r-white mt-1.5 pr-4 mr-4">
              <FaQuestionCircle className="h-auto w-6 text-white " />
            </div>
          </div>
          <div className="flex justify-center items-center h-[80%]    ">
            {" "}
            <FaUserCircle className="h-[54px] w-8 text-white" />{" "}
            <p className="ml-2 text-white text-sm">{username}</p>
          </div>
        </div>
      </div>
    </header>
    // </div>
  );
}

export default Header;
