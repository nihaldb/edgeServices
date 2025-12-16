import React from "react";
import {
  MdInventory2,
  MdFolder,
  MdDelete,
  MdSync,
  MdFilterList,
} from "react-icons/md";
import Dropdown from "./Dropdown";
import Filter from "./Filter";

function LeftSideBar() {
  const DepartmentOptions = [
    "IT",
    "Insurance",
    "collections",
    "Rural Customer",
    "Credit Operations",
    "Business Loan",
    "Human Resources",
    "Video",
    "Underwriting",
    "Marketing",
    "Fixed Deposits",
    "Rural Lending",
  ];
  return (
    <div className=" w-[90%] h-[calc(100vh-112px)] pl-2 font-roboto">
      <div className=" w-full h-14 flex flex-col px-2 border-b-2  border-b-gray-300">
        <p className="font-bold text-[13px] text-gray-400">
          42.00 % storage Full
        </p>

        <p className="font-semibold text-gray-400 text-[10px] mt-1.5">
          4.15 GB of 10 GB used
        </p>
      </div>
      <div className=" w-full h-32 mt-2 border-b-2 border-b-gray-300 text-gray-500 text-sm pl-2 flex flex-col items-center justify-items-start">
        <div className="w-full h-8 flex  gap-2  hover:bg-gray-100 rounded-md cursor-pointer">
          <MdInventory2 size={18} />
          <p className="font-bold text-gray-800">All Assets</p>
        </div>
        <div className="w-full h-8 flex  gap-2  hover:bg-gray-100 rounded-md cursor-pointer">
          <MdFolder size={19} />
          <p>My Assets</p>
        </div>
        <div className="w-full h-8 flex  gap-2  hover:bg-gray-100 rounded-md cursor-pointer">
          <MdDelete size={22} />
          <p>Trash</p>
        </div>
        <div className="w-full h-8 flex  gap-2  hover:bg-gray-100 rounded-md cursor-pointer">
          <MdSync size={21} />
          <p>Sync</p>
        </div>
      </div>
      <div className=" w-full  mt-3 pl-2 border-b-2 border-b-gray-300 mb-3 pb-3 ">
        <Filter />
        {/* <div className="flex gap-2 justify-start items-center">
          <MdFilterList size={20} />
          <p className="font-bold text-gray-500 text-sm"> Filter</p>
        </div>

        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="Icon"
        >
          <input type="radio" name="AssetType" id="Icon" />
          Icon
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="Video"
        >
          <input type="radio" name="AssetType" id="Video" />
          Video
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="Audio"
        >
          <input type="radio" name="AssetType" id="Audio" />
          Audio
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="Link"
        >
          <input type="radio" name="AssetType" id="Link" />
          Link
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="Image"
        >
          <input type="radio" name="AssetType" id="Image" />
          Image
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="scrom"
        >
          <input type="radio" name="AssetType" id="scrom" />
          scrom
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="word"
        >
          <input type="radio" name="AssetType" id="word" />
          word
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="PPT"
        >
          <input type="radio" name="AssetType" id="PPT" />
          PPT
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="pdf"
        >
          <input type="radio" name="AssetType" id="pdf" />
          pdf
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="excel"
        >
          <input type="radio" name="AssetType" id="excel" />
          excel
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="youtube"
        >
          <input type="radio" name="AssetType" id="youtube" />
          youtube
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer font-medium text-gray-500 m-1"
          htmlFor="K-point"
        >
          <input type="radio" name="AssetType" id="K-point" />
          K-point
        </label> */}
      </div>
      <div>
        <Dropdown Category={"Departments"} options={DepartmentOptions} />
        <Dropdown Category={"Skill Category"} options={[]} />
        <Dropdown Category={"Content Author"} options={[]} />
        <Dropdown Category={"Learning Category"} options={[]} />
        <Dropdown Category={"Business"} options={[]} />
        <Dropdown Category={"Visibilty"} options={[]} />
        <Dropdown Category={"Content Owner"} options={[]} />
        <Dropdown Category={"Language"} options={[]} />
        <Dropdown Category={"Type of Output"} options={[]} />
      </div>
    </div>
  );
}

export default LeftSideBar;
