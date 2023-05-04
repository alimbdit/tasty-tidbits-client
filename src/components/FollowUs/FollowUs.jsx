import React, { useEffect, useState } from "react";
import FollowCard from "./FollowCard";

const FollowUs = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes/")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="rounded-2xl mt-24 mb-28">
      <h1 className="text-5xl font-bold text-center text-amber-500 uppercase my-10">
      FOLLOW US INSTAGRAM
      </h1>
      <div className="carousel carousel-center">
        {recipes.map((recipe) => (
          <FollowCard key={recipe.recipe_id} recipe={recipe}></FollowCard>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
