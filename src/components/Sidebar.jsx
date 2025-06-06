import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";

function Sidebar() {
  const SidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },

    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },

    {
      id: 3,
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const SidebarItems2 = [
    {
      id: 1,
      name: "Your channel",
      icon: <PiUserSquareThin />,
    },

    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },

    {
      id: 3,
      name: "Playlist",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];

  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  return (
    <div className="px-5 w-[18%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
      {/* Home */}
      <div className=" space-y-4  items-center">
        {SidebarItems.map((item) => {
          return (
            <div  key={item.id}className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1">
              <div className="cursor-pointer text-xl"> {item.icon} </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You */}
      <div className=" mt-5 space-y-4  items-center">
        <div className="flex items-center space-x-2">
            <h1>You</h1>
            <FaChevronRight/>
        </div>
        {SidebarItems2.map((item) => {
            return(
          <div key={item.id}className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1">
            <div className="cursor-pointer text-xl"> {item.icon} </div>
            <span className="cursor-pointer">{item.name}</span>
          </div>
            )
        })}
      </div>
      <br />
      <hr />
{/* subscription */}

<div className=" mt-5 space-y-4  items-center">
<div className="flex items-center space-x-2">
            <h1>Explore</h1>
           
        </div>
        {sidebarItems3.map((item) => {
            return(
          <div key={item.id}className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1">
            <div className="cursor-pointer text-xl"> {item.icon} </div>
            <span className="cursor-pointer">{item.name}</span>
          </div>
            )
        })}
      </div>
      <br />
      <hr />
{/* more from yt */}
      <div className=" mt-5 space-y-4  items-center">
        <div className="flex items-center">
            <h1>More from YouTube
            </h1>
        </div>
        {sidebarItems4.map((item) => {
            return(
          <div key={item.id}className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1">
            <div className=" text-xl cursor-pointer  text-red-600"> {item.icon} </div>
            <span className="cursor-pointer">{item.name}</span>
          </div>
            )
        })}
        <hr />
      </div>

      <br />
      <span className="text-xs text-gray-600 font-semibold">
        About Press Copyright <br /> Contact us Creators <br /> Advertise
        Developers <br />
        <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
        <br /> Test new features
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-3">© 2025</p>

    </div>
  );
}

export default Sidebar;
