import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ReviewCard = ({ review }) => {
  const {
    customer_id,
    customer_photo,
    customer_name,
    customer_designation,
    food_rating,
    short_review,
  } = review;

  return (
    <div className="card w-full bg-base-100 dark:bg-white shadow-xl">
      <div className="card-body">
        <div className="flex justify-start items-center gap-5">
          <div className="mb-2">
            <LazyLoadImage
              className="rounded-full w-20"
              src={customer_photo}
              alt="customer_photo"
              effect="blur"
              delayMethod="throttle"
              delayTime={500}
              threshold={200}
            />
          </div>
          <div>
            <h2 className="font-bold text-xl text-amber-800">
              {customer_name}
            </h2>
            <p className="font-medium  text-amber-500">
              {customer_designation}
            </p>
          </div>
        </div>

        <div className=" flex items-center text-lg">
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(food_rating) || 0}
            readOnly
          />
          {/* <span className="ml-2 text-red-800 font-bold">{food_rating}</span> */}
        </div>

        <p className=" text-gray-600">{short_review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
