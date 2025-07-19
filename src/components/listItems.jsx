import React from "react";

const categories = [
  "All",
  "Music",
  "React",
  "JavaScript",
  "Programming",
  "News",
  "Gaming",
  "Sports",
  "Comedy",
  "Entertainment",
  "Education",
  "Technology",
  "Science",
  "Movies",
  "Travel",
  "Cooking",
];

function ListItems() {
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4 py-2">
      <div className="flex space-x-3 flex-nowrap">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-none bg-gray-100 hover:bg-gray-300 duration-300 rounded-lg px-4 py-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItems;