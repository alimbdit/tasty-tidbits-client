import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const [show, setShow] = useState(false);

  const sweetAlert = {
    title: "Check Your Email!",
    text: "We send an email to reset password!",
    icon: "success",
    button: false,
  };

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const { googleLogin, gitHubLogin, logIn, setUser, resetPassword } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log("Error", error.message);
        
        const errorText = error?.code.split("/");
        setLoginError(errorText[1].split('-').join(' '));
      });
  };

  const handleGithubLogin = () => {
    gitHubLogin()
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log("Error", error.message);
        const errorText = error?.code.split("/");
        setLoginError(errorText[1].split("-").join(" "));
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoginError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!/(?=.*[A-Z])/.test(password)) {
      setLoginError("please enter at least one upper case");
      return;
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setLoginError("please enter at least one lower case");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setLoginError("please enter at least one digit");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setLoginError("please enter at least one special character");
      return;
    } else if (!/(?=.{6,})/.test(password)) {
      setLoginError("please enter at least six character");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setLoginError("please enter valid email");
      return;
    }

    event.target.reset();
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        // console.log(loggedUser);
        setUser(loggedUser);
        setSuccess("Login successful");
        setLoginError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error.message, error.code);
        // setLoginError(error?.message?.Firebase);
        const errorText = error?.code.split("/");
        setLoginError(errorText[1].split("-").join(" "));
      });

    // event.target.reset();
    // console.log(email, password);
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please provide an valid email! 🔥");
      return;
    }
    // console.log(email);
    // resetPassword(email)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("Check your email to reset password");
        // swal(sweetAlert);
        // console.log("send email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <div className="my-16">
        <div className="lg:mx-auto mx-5 lg:w-1/3 px-7 lg:px-12 py-9 border bg-red-100 bg-opacity-25 border-red-400 rounded-xl mb-6">
          <h1 className="text-2xl dark:text-white font-bold mb-10">Login</h1>
          <form onSubmit={handleLogin} action="">
            <input
              className="input  rounded-full placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
           <div className="relative">
           <input
              className="input rounded-full placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-8 w-full"
              // type={show ? "text" : "password"}
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <br />

            <div className="flex justify-between">
              <span>
                <input type="checkbox" id="remember" value="remember" />
                <label htmlFor="remember" className="dark:text-white"> Remember Me</label>
              </span>

              <button
                onClick={handleResetPassword}
                className="text-amber-500 dark:text-amber-200 underline"
              >
                Forgot Password
              </button>
            </div>

            <div className="mt-5">
              {loginError && (
                <span className="text-red-500 dark:text-red-300 text-lg ">{loginError}</span>
              )}
              {success && (
                <span className="text-green-500 dark:text-green-300 text-lg ">{success}</span>
              )}
            </div>

            <input
              className="btn-default mt-8 w-full"
              type="submit"
              value="Login"
            ></input>

            <p className="font-medium mt-4 dark:text-gray-200">
              Don&apos;t have an account?{" "}
              <Link
                className="text-amber-500 dark:text-amber-200 underline"
                to="/register"
                state={{ from: location.state }}
              >
                Create an account
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
            className=" w-full  justify-center gap-2 text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-100 hover:bg-opacity-50 dark:hover:bg-opacity-20  focus:outline-none mb-2 "
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

export default Login;
