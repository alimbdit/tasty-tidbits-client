import React from "react";
import "./Register.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="my-16">
        <div className="lg:mx-auto mx-5 lg:w-1/3 px-7 lg:px-12 py-9 border bg-red-100 bg-opacity-25 border-red-400 rounded-xl mb-6">
          <h1 className="text-2xl font-bold mb-10">Register</h1>
          <form action="">
            <input
              className="input  rounded-full placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <br />
            <input
              className="input  rounded-full placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="text"
              name="photo"
              placeholder="Photo URL"
              
            />
            <br />
            <input
              className="input  rounded-full placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <br />
            <input
              className="input rounded-full placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <input
              className="input rounded-full placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="password"
              name="confirmPassword"
              placeholder="confirm Password"
              required
            />
            <br />
            <div className="flex justify-between">
              <span>
                <input type="checkbox" id="condition" value="condition" />
                <label htmlFor="condition">
                  {" "}
                  Accepts{" "}
                  <Link className="text-red-500 underline" to="/conditions">
                    Terms and conditions
                  </Link>
                </label>
              </span>
            </div>

            <input
              className="btn-default mt-8 w-full"
              type="submit"
              value="Register"
            ></input>

            <p className="font-medium mt-4">
              Already have an account?{" "}
              <Link className="text-red-500 underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="mb-5 mx-5 lg:mx-auto lg:w-1/4 ">
          <div className="text-container mb-5">
            <hr className="left-line" />
            <span className="">Or</span>
            <hr className="right-line" />
          </div>

          <button className=" w-full  justify-center gap-2 text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-100 hover:bg-opacity-50 focus:outline-none mb-2 ">
            <img
              className="w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google icon"
            />
            <span className="text-center text-amber-700  text-xl font-medium">
              Continue with Google
            </span>
          </button>
          <button className=" w-full  justify-center gap-2 text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-100 hover:bg-opacity-50 focus:outline-none mb-2 ">
            <FaGithub className="text-gray-700 font-bold text-2xl"></FaGithub>
            <span className="text-center text-amber-700  text-xl font-medium">
              Continue with GitHub
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
