import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Loading from "./loader/Loading";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthProvider";
function App() {
  const {loading} = useAuth();
  //const { loading, data } = useAuth();
  //console.log(loading);
  //console.log(data);
  return (
    <>
    {loading && <Loading/>}
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Search/:searchQuery" element={<Search />} />
        <Route path="/Video/:id" element={<PlayingVideo />} />
      </Routes>
    </>
  );
}

export default App;
