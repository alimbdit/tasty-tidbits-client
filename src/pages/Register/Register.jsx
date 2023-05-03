import React, { useContext, useState } from "react";
import "./Register.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from 'react-hot-toast'

const userPic = "https://i.ibb.co/tDKXnzp/user.png";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [photoUrl, setPhotoUrl] = useState();
  const [accepted, setAccepted] = useState(false);

  const { googleLogin, createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setRegisterError("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value ? event.target.photo.value : userPic;

    // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   setRegisterError("please enter at least two upper case");
    //   return;
    // } else if (!/(?=.*\d)/.test(password)) {
    //   setRegisterError("please enter at least one digit");
    //   return;
    // } else if (!/(?=.{8,})/.test(password)) {
    //   setRegisterError("please enter at least eight character");
    //   return;
    // }

    if(password !== confirmPassword){
      setRegisterError("Password does not match");
      return;
    }


    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        // ...
        console.log(loggedUser);
        setRegisterError(" ");
        setSuccess("Registration successful");
        toast.success('Registration successful! 👍')
        updateUserProfile(result.user, name, photo);
      })
      .catch((error) => {
        console.error(error.message);
        setRegisterError(error.message);
        // ..
      });
    event.target.reset();
  };

  const updateUserProfile = (user, name, photo=userPic) => {
    updateProfile(user, {
        displayName: name, photoURL: photo
      }).then(() => {
        // Profile updated!
        // ...
        console.log('user profile updated')
      }).catch((error) => {
        // An error occurred
        // ...
        setRegisterError(error.message)
      });
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleEmailChange = (event) => {
    // console.log(event)
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  };

  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }

  return (
    <>
      <div className="my-16">
        <div className="lg:mx-auto mx-5 lg:w-1/3 px-7 lg:px-12 py-9 border bg-red-100 bg-opacity-25 border-red-400 rounded-xl mb-6">
          <h1 className="text-2xl font-bold mb-10">Register</h1>
          <form onSubmit={handleSubmit} action="">
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
            <input onChange={handleEmailChange}
              className="input  rounded-full placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="email"
              name="email"
              placeholder="Your Email"
              
            
              required
            />
            <br />
            <input onBlur={handlePasswordBlur}
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
                <input onClick={handleAccepted} type="checkbox" id="condition" value="condition" />
                <label htmlFor="condition">
                  {" "}
                  Accepts{" "}
                  <Link className="text-amber-500 underline" to="/conditions">
                    Terms and conditions
                  </Link>
                </label>
              </span>
            </div>
            
            <div className="mt-5">
            <p className="text-red-500">{registerError}</p>
            <p className="text-green-500">{success}</p>
            </div>

            <input
              className={`${accepted?"btn-default cursor-pointer": "btn-accept-disabled"} mt-8 w-full`}
              type="submit"
              value="Register" disabled={!accepted}
            ></input>

            <p className="font-medium mt-4">
              Already have an account?{" "}
              <Link className="text-amber-500 underline" to="/login">
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

          <button
            onClick={handleGoogleLogin}
            className=" w-full  justify-center gap-2 text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-100 hover:bg-opacity-50 focus:outline-none mb-2 "
          >
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
