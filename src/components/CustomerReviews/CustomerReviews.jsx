import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="bg-opacity-25 bg-red-100 mb-20">
      <div className="container  rounded-2xl my-16">
        <h1 className="text-5xl font-bold text-center text-amber-500 uppercase my-10">
          CUSTOMER REVIEWS
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 my-10">
          {reviews.map((review) => (
            <ReviewCard key={review.customer_id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
