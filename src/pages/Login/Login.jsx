import React, { useContext, useRef, useState } from "react";
import './Login.css'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState("");
  const emailRef = useRef()

  const {googleLogin, logIn, setUser} = useContext(AuthContext);

  const handleGoogleLogin = () =>{
    googleLogin().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      setUser(loggedInUser);
    })
    .catch((error) => {
      console.log("Error", error.message);
      setLoginError(error?.message);
    });
  }

  const handleLogin = event => {
    event.preventDefault();
    setLoginError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      // navigate(from, {replace:true})
      console.log(loggedUser)
      setUser(loggedUser);
      setSuccess("Login successful");
        setError("");
      
    })
    .catch(error => {
      console.log(error)
      setLoginError(error?.message);
    })

    form.reset()
    console.log(email, password)
  }

  


  return (
    <>
      <div className="my-16">
        <div className="lg:mx-auto mx-5 lg:w-1/3 px-7 lg:px-12 py-9 border bg-red-100 bg-opacity-25 border-red-400 rounded-xl mb-6">
          <h1 className="text-2xl font-bold mb-10">Login</h1>
          <form onSubmit={handleLogin} action="">
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
            
            <div className="flex justify-between">
              <span>
                <input type="checkbox" id="remember" value="remember" />
                <label htmlFor="remember"> Remember Me</label>
              </span>
              <Link className="text-amber-500 underline" to="/register">
                Forgot Password
              </Link>
            </div>

            <div className="mt-5">
              {
                loginError && <span className="text-red-500 text-lg ">{loginError}</span>
              }
              {
                success && <span className="text-red-500 text-lg ">{success}</span>
              }
            </div>

            <input
              className="btn-default mt-8 w-full"
              type="submit"
              value="Login"
            ></input>

            <p className="font-medium mt-4">
              Don&apos;t have an account?{" "}
              <Link className="text-amber-500 underline" to="/register">
                Create an account
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

          <button onClick={handleGoogleLogin} className=" w-full  justify-center gap-2 text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-100 hover:bg-opacity-50 focus:outline-none mb-2 ">
          <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google icon"/>
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

export default Login;
