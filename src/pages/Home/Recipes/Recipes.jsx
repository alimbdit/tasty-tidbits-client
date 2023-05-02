import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
  //   const { id } = useParams();

  const recipe = useLoaderData();
  console.log(recipe);

  const {
    id,
    chef_name,
    chef_image,
    experience,
    recipes,
    likes,
    short_description,
  } = recipe;

  return (
    <div className="flex justify-center bg-amber-500 bg-opacity-25">
      <div className="container">
        <div className=" flex flex-col-reverse lg:flex-row items-center justify-between  ">
          <div className=" w-full text-center px-5">
            <h2 className=" mb-7 text-5xl font-bold text-red-700 tracking-wider">
              {chef_name}
            </h2>
            <p className="text-lg font-medium mb-4">{short_description}</p>
            <div className="mb-4">
              <p className="text-2xl font-medium text-red-700 tracking-wide mb-3">
                Experience: {experience}
              </p>
              <p className="text-2xl font-medium tracking-wide text-red-700">
                Number of Recipes: {recipes.length}
              </p>
            </div>

            <div className="card-actions justify-center items-center mt-2">
              {/* <p>Likes: {likes}</p> */}
              <p className="flex btn-black w-36  gap-2 text-2xl items-center ">
                <FaRegThumbsUp className="font-bold" /> {likes}
              </p>
            </div>
          </div>
          <figure className="w-full py-10 lg:py-20">
            <img
              className="rounded-3xl w-3/5 mx-auto"
              src={chef_image}
              alt="Album"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
