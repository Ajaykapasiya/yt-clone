import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import logo from "../../public/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const [searchQuery , setSearchQuery] = useState("")
  const navigate = useNavigate()
  const searchQueryHandler = (event) => {
    if((event?.key === "Enter" || event === "searchButton")&& searchQuery.length>0){
      navigate(`/search/${searchQuery}`)
      setSearchQuery("")
    } 
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center  space-x-4 ">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-20 cursor-pointer" />
      </div>

      <div className=" flex  w-[35%] items-center">
        <div className="w-[100%] px-4 py-2 border border-gray-200 rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none " 
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          />
        </div>
        <button className=" px-4 py-2  bg-gray-200 rounded-r-full "
          
          onClick={() => searchQueryHandler("searchButton")}

        >
          <CiSearch  size={"26px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className=" ml-4  rounded-full border border-gray-200 hover:bg-gray-300 duration-200 p-2 cursor-pointer"
        />
      </div>
      <div className="flex items-center  cursor-pointer">
        <div className="   mr-7 rounded-full  ">
          <RiVideoAddFill className="size-6" />
        </div>

        <div>
          <IoIosNotifications  className="size-8"/>
        </div>

        <div>
            <img src="profile.png"  className="size-10 ml-5 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
