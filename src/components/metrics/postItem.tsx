import { ChartArea } from "lucide-react";
import React from "react";

const PostItem = ({ mood }) => {
  const getBadgeColor = () => {
    if (mood === "good") {
      return "text-green-500 bg-green-500 bg-opacity-30";
    }
    if (mood === "bad") {
      return "text-red-500 bg-red-500 bg-opacity-30";
    }
    if (mood === "neutral") {
      return "text-gray-500 bg-gray-500 bg-opacity-30";
    }
  };

  return (
    <div className="border-y pl-4 py-4 flex">
      <div className="w-full flex">
        <div className="bg-black w-10 h-10 rounded-lg"></div>
        <div className="flex ml-4">Title</div>
      </div>
      <div className=" w-full fex ">
        <div className="w-full flex justify-around ">
          <div
            className={`py-1 px-2 flex items-center rounded-xl ${getBadgeColor()}`}
          >
            badge
          </div>
          <div className="flex items-center">2.5k</div>
          <div className="flex items-center">
            <ChartArea width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
