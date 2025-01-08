import React, { useContext } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../../../components/RecipeCard/RecipeCard";
import { AuthContext } from "../../../providers/AuthProvider";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipes = () => {
  const { _id } = useParams();

  // const { chefData } = useContext(AuthContext);

  const recipe = useLoaderData();
  // const targetChef = chefData.find((chef) => chef.id == _id);
  // console.log(recipe);

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
    <>
      <div className="flex justify-center bg-amber-500 dark:bg-amber-400 bg-opacity-25 dark:bg-opacity-90">
        <div className="container">
          <div className=" flex flex-col-reverse lg:flex-row items-center justify-between  ">
            <div className=" w-full text-center px-5">
              <h2 className=" mb-7 text-5xl font-bold text-red-700 tracking-wider">
                {chef_name}
              </h2>
              <p className="text-lg  dark:text-gray-800 font-medium mb-4">{short_description}</p>
              <div className="mb-4">
                <p className="text-2xl font-medium text-red-700 tracking-wide mb-3">
                  {/* Experience: {experience} */}
                  {experience} of Experience
                </p>
                <p className="text-2xl font-medium tracking-wide text-red-700">
                  {/* Number of Recipes: {recipes.length} */}
                  {recipes?.length} Types of Recipes
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
              <LazyLoadImage
                className="rounded-3xl w-3/5 mx-auto"
                src={chef_image}
                alt="chef"
                effect="blur"
                delayMethod="debounce"
                delayTime={500}
                threshold={200}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="my-20 lg:my-28">
        <h1 className="text-5xl font-bold text-center text-amber-500 uppercase my-10">
          All Recipes
        </h1>
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe_id} recipe={recipe}></RecipeCard>
          ))}
      </div>
    </>
  );
};

export default Recipes;
