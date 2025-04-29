import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./listItems";

function Home() {
  const { data } = useAuth();

  console.log(data);

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5 ">
        <ListItems/>
        {Array.isArray(data) &&
          data.map((item) => {
            if (item.type != "video") return false;

            return <Video key={item.id} video={item?.video} />;
          })}
      </div>
    </div>
  );
}

export default Home;
