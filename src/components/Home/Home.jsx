import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdGridView, MdFormatListBulleted, MdClose } from "react-icons/md";
import Header from "../Header/Header";
import DashboardCard from "../Cards/DashboardCard";
import DashboardHorizontalCard from "../Cards/DashboardHorizontalCard";
import LeftSideBar from "./LeftSideBar";

function Home() {
  const [view, setview] = useState(true);

  const [searchEnabled, setSearchEnabled] = useState(false);

  function toggleSearch() {
    setSearchEnabled(!searchEnabled);
  }

  const changeView = () => {
    setview(!view);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
        <div className="flex justify-center  h-9 w-full  bg-white">
          <div className="flex border-b border-gray-300 h-9 w-[97%] ">
            <div className=" h-8 w-[75%]">
              <p className="font-bold text-xs pl-4 p-2">DAM/Folder</p>
            </div>
            <div className=" h-8  w-[25%] flex justify-evenly items-center">
              <div className="flex items-center">
                <input
                  type="text"
                  name="search"
                  id="Search"
                  placeholder="Click here to search"
                  disabled={!searchEnabled}
                  className={`${
                    searchEnabled ? "visible" : "invisible"
                  }   py-0.5 px-2  text-gray-600 rounded-md outline-none focus:ring-1 focus:ring-blue-800 caret-blue-800 mt-1`}
                />
                {searchEnabled ? (
                  <MdClose
                    className="text-gray-400 w-6 h-5 cursor-pointer"
                    onClick={toggleSearch}
                  />
                ) : (
                  <FaSearch
                    className="text-gray-400 w-6 h-5 cursor-pointer"
                    onClick={toggleSearch}
                  />
                )}
              </div>
              <div>
                {" "}
                <button onClick={changeView}>
                  <MdFormatListBulleted
                    className={` w-6 h-5 mt-2 cursor-pointer  ${
                      !view ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
              <div>
                {" "}
                <button onClick={changeView}>
                  <MdGridView
                    className={` ${
                      view ? "text-blue-600" : "text-gray-400"
                    } w-6 h-5 mt-2 cursor-pointer `}
                  />
                </button>{" "}
              </div>
              <button className="w-20 h-6 bg-blue-900 text-white px-2 rounded-md text-xs cursor-pointer hover:bg-blue-800">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className=" flex justify-center mt-28 ">
        <div className="  flex  w-[97%]">
          <div className=" w-[13%] ">
            <LeftSideBar />
          </div>
          <div className=" w-[87%] p-1 shadow shadow-amber-100 rounded-md ml-4 ">
            <p className="pl-3 font-bold text-gray-400 mb-3 text-xs">Files</p>
            <div className="flex gap-5 flex-wrap pl-1.5">
              {view ? (
                <>
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                </>
              ) : (
                <>
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                  <DashboardHorizontalCard />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
