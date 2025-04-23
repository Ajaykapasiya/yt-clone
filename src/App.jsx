import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes } from "react-router"
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";

//import Sidebar from "./components/Sidebar";
//import { useAuth } from "./context/AuthProvider";
function App() {
 // const { loading, data } = useAuth();
 // console.log(loading);
 // console.log(data);
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Routes path="/" element={<Home/>}/>
        <Routes path="/Search" element={<Search/>}/>
        <Routes path="/PlayingVideo" element={<PlayingVideo/>}/>
      </Routes>
    </>
  );
}

export default App;
