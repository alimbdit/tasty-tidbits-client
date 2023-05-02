import React from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleChef = ({ chef }) => {
  const {id, chef_name, chef_image, experience, recipes, likes,   } = chef;
  console.log(chef);
  return (
    <div className="card w-full shadow-xl bg-red-100 bg-opacity-25">
      <figure className="p-5 ">
        <img className="rounded-2xl"
          src={chef_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title text-2xl font-bold">{chef_name}</h2>
        <p className="text-lg font-medium text-gray-600">Experience: <span className="font-normal">{experience}</span></p>
        <p className="text-lg font-medium text-gray-600">Number of Recipes: <span className="font-normal">{recipes.length}</span></p>
        
        <div className="card-actions justify-end items-center mt-2">
        {/* <p>Likes: {likes}</p> */}
        <p className="flex  gap-2 text-xl items-center text-blue-700"><FaRegThumbsUp className="font-bold"/> {likes}</p>
          <Link to={`recipe/${id}`}><button className="btn-default">View Recipes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
