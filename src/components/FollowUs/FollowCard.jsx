import React from "react";
import { FaInstagram } from "react-icons/fa";

const FollowCard = ({ recipe }) => {
  const { image_url } = recipe;

  return (
    <div className="carousel-item  overflow-hidden">
      <div className=" ">
        <div className="overflow-hidden relative transition duration-200 transform hover:scale-105  shadow-lg hover:shadow-2xl">
          <img
            src={image_url}
            alt="recipe image"
            className="object-cover w-64 h-56 lg:h-64"
          />

          <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col justify-center items-center">
            <FaInstagram className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowCard;
