import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import toast from 'react-hot-toast'
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {

    const [favorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        setFavorite(true);
        toast.success('Favorite added! ❤️')
    }

  const {
    recipe_id,
    recipe_name,
    ingredients,
    image_url,
    cooking_method,
    rating,
  } = recipe;

  // console.log(recipe);

  return (
    <div className="container">
      <div className="card lg:card-side  shadow-xl bg-red-200 bg-opacity-40">
        <figure className="lg:w-2/5">
          <img className="w-full h-full" src={image_url} alt="recipe" />
        </figure>
        <div className="card-body lg:w-3/5">
          <h2 className="card-title font-bold text-3xl mt-2 text-amber-800">
            {recipe_name}
          </h2>
          <p className="py-3 text-lg text-red-600">
            <span className="text-red-800 font-bold ">Ingredients:</span>{" "}
            {ingredients.join(", ")}
          </p>
          <p className="pb-5 text-lg text-red-600">
            <span className="text-red-800 font-bold ">Cooking Method:</span>{" "}
            {cooking_method}
          </p>
          <div className="flex gap-5 justify-between items-center my-2">
            {/* <p>Likes: {likes}</p> */}
            <div className=" flex items-center text-lg">
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating) || 0}
                readOnly
              />
              <span className="ml-2 text-red-800 font-bold">{rating}</span>
            </div>
            <button onClick={handleFavorite} className={favorite? "btn-disabled" :"btn-black"} disabled={favorite} >
              <span className="flex gap-2 items-center">
                <FaHeart /> Favorite
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
