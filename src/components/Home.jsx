import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Video />
      </div>
    </div>
  );
}

export default Home;
