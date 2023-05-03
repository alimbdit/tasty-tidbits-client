import React from 'react';
import Lottie from "lottie-react";
import foodChoice from '../../public/food-choice.json';
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse items-center gap-10 justify-between lg:flex-row bg-opacity-25 bg-red-100 px-5 lg:px-10 py-5">
        <div className="w-full pl-5">
          <h1 className="font-extrabold text-5xl mb-4"> <span className="text-amber-500">Foodie</span> Delight!</h1>
          <p className="my-5">
          Looking for a food adventure? Our food website offers a tantalizing selection of dishes that will excite your taste buds. From traditional favorites to exotic flavors, we have something to satisfy every craving. So come and explore our menu, and discover your next foodie delight!
          </p>
          <button className="btn-default"><span className='flex items-center gap-2'>Explore Now <FaArrowRight/></span></button>
        </div>
        <div className="w-full">
        <Lottie className=" mr-0 h-3/4" animationData={foodChoice} loop={true} />
        </div>
      </div>
    );
};

export default Banner;