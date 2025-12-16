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
        <div className="flex justify-center  h-10 w-full  bg-white">
          <div className="flex border-b border-gray-300 h-full w-[97%] ">
            <div className=" h-8 w-[70%]">
              <p className="font-bold text-xs pl-4 p-2">DAM/Folder</p>
            </div>
            <div className=" h-full  w-[30%] flex justify-evenly items-center ">
              <div className="flex items-center gap-1">
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
                    size={24}
                    className="text-gray-400  cursor-pointer mt-1"
                    onClick={toggleSearch}
                  />
                ) : (
                  <FaSearch
                    className="text-gray-400  cursor-pointer"
                    onClick={toggleSearch}
                    size={17}
                  />
                )}
              </div>
              <div>
                {" "}
                <button onClick={changeView}>
                  <MdFormatListBulleted
                    size={22}
                    className={` mt-2 cursor-pointer  ${
                      !view ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
              <div>
                {" "}
                <button onClick={changeView}>
                  <MdGridView
                    size={23}
                    className={` ${
                      view ? "text-blue-600" : "text-gray-400"
                    }  mt-2 cursor-pointer `}
                  />
                </button>{" "}
              </div>
              <button className="w-18 h-6 bg-blue-900 text-white px-2 rounded-sm text-xs cursor-pointer hover:bg-blue-800">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className=" flex justify-center mt-28 h-[calc(100vh-112px)] ">
        <div className="  flex  w-[97%]">
          <div className=" w-[13%] ">
            <LeftSideBar />
          </div>
          <div className=" w-[87%] p-1  rounded-md ml-4 h-[calc(100vh-112px)] ">
            <p className="pl-2 font-bold text-gray-400 mb-3 text-[13px]">
              Files
            </p>
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
