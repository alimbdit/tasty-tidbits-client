import React, { useContext, useState } from "react";
import "./Register.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import swal from "sweetalert";
import Terms from "../../components/TermsConditions/Terms";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const userPic = "https://i.ibb.co/s9VWqPN/user.png";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [photoUrl, setPhotoUrl] = useState();
  const [accepted, setAccepted] = useState(false);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const sweetAlert = {
    title: "Registration Successful!",
    text: "Welcome to our website!",
    icon: "success",
    button: false,
  };

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.from?.pathname;

  // const from = location.state?.from?.pathname || "/";

  // console.log(from);
  const { googleLogin, gitHubLogin, createUser, setLoading } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setRegisterError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const name = form.name.value;
    const photo = form.photo.value ? event.target.photo.value : userPic;

    if (!/(?=.*[A-Z])/.test(password)) {
      setRegisterError("please enter at least one upper case");
      return;
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setRegisterError("please enter at least one lower case");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setRegisterError("please enter at least one digit");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setRegisterError("please enter at least one special character");
      return;
    } else if (!/(?=.{6,})/.test(password)) {
      setRegisterError("please enter at least six character");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setRegisterError("please enter valid email");
      return;
    }

    if (password !== confirmPassword) {
      setRegisterError("Password does not match");
      return;
    }

    // console.log(email, password);
    // event.target.reset();
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // setLoading(true);
        // console.log(loggedUser);
        setRegisterError(" ");
        setSuccess("Registration successful");
        toast.success("Registration successful! 👍");
        updateUserProfile(result.user, name, photo);
        navigate(from || "/login", { replace: true });
        // swal(sweetAlert);
        event.target.reset();
      })
      .catch((error) => {
        console.error(error.message);
        const errorText = error?.code.split("/");
        // setRegisterError(error.message);
        setRegisterError(errorText[1].split("-").join(" "));
        // ..
      });

      // updateUserProfile(name, photo).then(() => {console.log('profile updated')}).catch(error => {console.log(error)})
    // event.target.reset();

    // console.log(name, photo)
    // updateUserProfile(name, photo)
    // .then(() => {
    //   console.log('profile updated')
    // })
    // .catch(error => {
    //   console.log(error)
    //   setRegisterError(error.message)
    // })
  };

  const updateUserProfile =(user, name, photo) => {
    updateProfile(user, {
                displayName: name, photoURL: photo,
              })
    .then(() => {
      console.log('profile updated')
    })
    .catch(error => {
      console.log(error)
      setRegisterError(error.message)
    })
  }
  // .then(() => {
  //   console.log('profile updated')
  // })
  // .catch(error => {
  //   console.log(error)
  //   setRegisterError(error.message)
  // })


  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        navigate(from || "/");
      })
      .catch((error) => {
        const errorText = error?.code.split("/");
        setRegisterError(errorText[1].split("-").join(" "));
      });
  };

  const handleGithubLogin = () => {
    gitHubLogin()
      .then((result) => {
        const loggedInUser = result.user;
        // setUser(loggedInUser);
        navigate(from || "/");
      })
      .catch((error) => {
        const errorText = error?.code.split("/");
        // setRegisterError(error.message);
        setRegisterError(errorText[1].split("-").join(" "));
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

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <>
      <div className="my-16">
        <div className="lg:mx-auto mx-5 lg:w-1/3 px-7 lg:px-12 py-9 border bg-red-100 bg-opacity-25 border-red-400 rounded-xl mb-6">
          <h1 className="text-2xl dark:text-white font-bold mb-10">Register</h1>
          <form onSubmit={handleSubmit} action="">
            <input
              className="input  rounded-full placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <br />
            <input
              className="input  rounded-full placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="text"
              name="photo"
              placeholder="Photo URL"
            />
            <br />
            <input
              onChange={handleEmailChange}
              className="input  rounded-full placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <br />
            <div className="relative">
            <input
              onBlur={handlePasswordBlur}
              className="input rounded-full placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              // type={show ? "text" : "password"}
              type='password'
              name="password"
              placeholder="Password"
              required
            />
            {/* {
                show?<FaRegEye
                onClick={() => setShow(!show)}
                className="h-6 w-6 text-gray-800 cursor-pointer absolute  top-[13px] right-5"
              />:<FaRegEyeSlash
                onClick={() => setShow(!show)}
                className="h-6 w-6 text-gray-800 cursor-pointer absolute  top-[13px] right-5"
              />
              } */}
            </div>
           
          <div className="relative">
          <input
              className="input rounded-full placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              // type={showConfirm ? "text" : "password"}
              type="password"
              name="confirmPassword"
              placeholder="confirm Password"
              required
            />
              {/* {
                showConfirm?<FaRegEye
                onClick={() => setShowConfirm(!showConfirm)}
                className="h-6 w-6 text-gray-800 cursor-pointer absolute  top-[13px] right-5"
              />:<FaRegEyeSlash
                onClick={() => setShowConfirm(!showConfirm)}
                className="h-6 w-6 text-gray-800 cursor-pointer absolute  top-[13px] right-5"
              />
              } */}
          </div>
            <br />
            <div className="flex justify-between">
              <span>
                <input
                  onClick={handleAccepted}
                  type="checkbox"
                  id="condition"
                  value="condition"
                />
                <label htmlFor="condition" className="dark:text-white">
                  {" "}
                  Accepts{" "}
                  {/* <Link className="text-amber-500 underline" to="/conditions">
                    Terms and conditions
                  </Link> */}
                  <label
                    htmlFor="terms-and-conditions"
                    className="text-amber-500 dark:text-amber-200 underline cursor-pointer"
                  >
                    Terms and conditions
                  </label>
                </label>
              </span>
            </div>

            <div className="mt-5">
              <p className="text-red-500 dark:text-red-300">{registerError}</p>
              <p className="text-green-500 dark:text-green-300">{success}</p>
            </div>

            <div>
              <input
                type="checkbox"
                id="terms-and-conditions"
                className="modal-toggle"
              />
              <Terms></Terms>
            </div>

            <input
              className={`${
                accepted ? "btn-default cursor-pointer" : "btn-accept-disabled"
              } mt-8 w-full`}
              type="submit"
              value="Register"
              disabled={!accepted}
            ></input>

            <p className="font-medium dark:text-gray-200 mt-4">
              Already have an account?{" "}
              <Link className="text-amber-500 dark:text-amber-200 underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="mb-5 mx-5 lg:mx-auto lg:w-1/4 ">
          <div className="text-container mb-5">
            <hr className="left-line" />
            <span className="dark:text-white">Or</span>
            <hr className="right-line" />
          </div>

          <button
            onClick={handleGoogleLogin}
            className=" w-full  justify-center gap-2 text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-100 hover:bg-opacity-50 dark:hover:bg-opacity-20 focus:outline-none mb-2 "
          >
            {/* <img
              className="w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google icon"
            /> */}
            <FaGoogle className="text-gray-700 dark:text-white font-bold text-2xl" />
            <span className="text-center text-amber-700 dark:text-amber-400 dark:hover:text-amber-500 text-xl font-medium">
              Continue with Google
            </span>
          </button>
          <button
            onClick={handleGithubLogin}
            className=" w-full  justify-center gap-2 text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-100 hover:bg-opacity-50 dark:hover:bg-opacity-20 focus:outline-none mb-2 "
          >
            <FaGithub className="text-gray-700 dark:text-white font-bold text-2xl"></FaGithub>
            <span className="text-center text-amber-700 dark:text-amber-400 dark:hover:text-amber-500 text-xl font-medium">
              Continue with GitHub
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
