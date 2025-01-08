import React, { useContext } from "react";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../providers/AuthProvider";

const About = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    // return <Loader />
    return (
      <div className="flex justify-center my-20">
        <ClipLoader
          color={"#FFBF00"}
          loading={loading}
          // cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-opacity-80">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-amber-600 font-semibold tracking-wide uppercase">
            Welcome to Tasty Tidbits
          </h2>
          <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your go-to source for delicious and easy-to-make recipes
          </p>
          <p className="mb-8 mt-4 max-w-2xl text-xl text-red-500 lg:mx-auto">
            Our mission is to help you make cooking fun and accessible, whether
            you're a beginner or a seasoned pro in the kitchen.
          </p>
         
            <p className="text-lg text-gray-500 dark:text-gray-900 lg:mx-auto  mt-4">
              At Tasty Tidbits, we believe that good food is about more than
              just taste. It's about connecting with the people you love,
              exploring new flavors and cultures, and nourishing your body and
              soul. That's why we're committed to sharing recipes that are not
              only delicious, but also healthy and sustainable.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-900 lg:mx-auto  mt-4">
              Our team of experienced chefs and food writers is passionate about
              cooking and dedicated to bringing you the best recipes, tips, and
              techniques. We're always experimenting with new ingredients and
              techniques, and we love to share our discoveries with you.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-900 lg:mx-auto  mt-4">
              Whether you're looking for quick and easy weeknight meals,
              show-stopping desserts, or fun and creative snacks, Tasty Tidbits
              has got you covered. Our recipes are designed to be approachable
              and adaptable, so you can tailor them to your taste and needs.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-900 lg:mx-auto  mt-4">
              We also believe that cooking should be a fun and social
              experience, and we encourage you to share your own tips, tricks,
              and stories with us. Follow us on social media to join our
              community of food lovers and stay up-to-date on our latest recipes
              and events.
            </p>
            <p className="text-lg font-medium text-amber-500 dark:text-amber-600 lg:mx-auto  mt-4">
              Thank you for visiting Tasty Tidbits, and happy cooking!
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
