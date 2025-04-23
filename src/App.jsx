import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthProvider";
function App() {
  const { loading, data } = useAuth();
  console.log(loading);
  console.log(data);
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
