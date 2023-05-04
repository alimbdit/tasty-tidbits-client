import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import chef from "../../../../public/chef-logo.svg";
import { AuthContext } from "../../../providers/AuthProvider";
import profilePic from "../../../assets/user.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [userPic, setUserPic] = useState();
  const [userState, setUserState] = useState(false);
  const navigation = useNavigation();
  console.log(navigation.state);

  const { user, logOut } = useContext(AuthContext);
  // const {displayName, photoURL} = user;
  useEffect(() => {
    setUserState(!userState);
  }, [user]);

  const handleError = () => {
    setIsValid(false);
  };

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
    console.log(user);
  };

  return (
    <div className="navbar flex justify-between bg-base-100 container mx-auto">
      <div className="flex lg:mr-52">
        <Link to="/">
          <span className="flex gap-4">
            <img className="w-10" src={chef} alt="" />
            <h1 className="lg:font-extrabold lg:text-4xl  font-bold text-2xl">
              Tasty <span className="text-amber-500">Tidbits</span>
            </h1>
          </span>
        </Link>
      </div>
      <ul className="  gap-10 flex-1 hidden lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              contact
            </NavLink>
          </li>
        </ul>
      <div className="lg:flex justify-between gap-20 hidden">
        
        <div className="">
        <div className="  items-end">
          {user ? (
            <div className="dropdown dropdown-end hidden lg:flex justify-end  tooltip tooltip-left" data-tip={user?.displayName}>
              <label
                tabIndex={0}
                className="relative cursor-pointer border-2 border-blue-500 rounded-full overflow-hidden  hover:bg-slate-100  "
                
              >
                <div className=" w-10 h-10  flex justify-center items-center">
                  {/* {isValid ? (
                    <img
                      className=" rounded-full object-cover absolute "
                      src={user?.photoURL}
                      onError={handleError}
                    />
                  ) : (
                    <img className=" absolute" src={profilePic} />
                  )} */}
                   <img
                      className=" w-10 h-10  rounded-full object-cover absolute "
                      src={user?.photoURL}
                      onError={handleError}
                    />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link to="/" onClick={handleLogOut}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex justify-end">
              <div>
                <Link to="/login" className="btn-default mr-5">
                  Login
                </Link>
                <Link to="/register" className="btn-default">
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute z-10 top-0 left-0 w-full">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    to="/"
                    aria-label="TastyTidbits"
                    title="TastyTidbits"
                    className="inline-flex items-center"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-200">
                      <img className="w-10" src={chef} alt="" />
                    </div>
                    <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800 ">
                      Tasty<span className="text-amber-500 ml-2">Tidbits</span>
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <div className=" mb-3">
                  {user ? (
                    <div className="dropdown dropdown-start ">
                      <label
                        tabIndex={0}
                        className="relative cursor-pointer border-2 border-blue-500 rounded-full  hover:bg-slate-100 tooltip tooltip-right "
                        data-tip={user?.displayName}
                      >
                        <div className="w-10 h-10  flex justify-center items-center">
                          {/* {isValid ? (
                            <img
                              className=" rounded-full object-cover absolute "
                              src={user?.photoURL}
                              onError={handleError}
                            />
                          ) : (
                            <img className=" absolute" src={profilePic} />
                          )} */}
                           <img
                              className=" rounded-full object-cover absolute "
                              src={user?.photoURL}
                              onError={handleError}
                            />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li>
                          <a>Settings</a>
                        </li>
                        <li>
                          <Link to="/" onClick={handleLogOut}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="flex justify-start">
                      <div className="flex flex-col gap-3">
                        <Link to="/login" className="btn-default mr-5">
                          Login
                        </Link>

                        <Link to="/register" className="btn-default">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <ul className="space-y-4 ">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
